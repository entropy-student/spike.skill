[CmdletBinding()]
param(
 [Parameter(Mandatory=$true)][string]$TaskId,
 [Parameter(Mandatory=$true)][string]$OutputHint,
 [Parameter(Mandatory=$true)][int]$HintCount,
 [Parameter(Mandatory=$true)][string]$T2Utc,
 [Parameter(Mandatory=$true)][string]$T4Utc,
 [Parameter(Mandatory=$true)][string]$RunRoot,
 [Parameter(Mandatory=$true)][string]$CanonicalToolsRoot,
 [Parameter(Mandatory=$true)][string]$AllowedRoot,
 [Parameter(Mandatory=$true)][string]$Destination,
 [Parameter(Mandatory=$true)][string]$QAPath,
 [int]$Wave=0,
 [switch]$Smoke
)
$ErrorActionPreference='Stop'
[Console]::OutputEncoding=[Text.UTF8Encoding]::new($false)

function Invoke-ChildScript {
 param(
  [Parameter(Mandatory=$true)][string]$ScriptPath,
  [Parameter(Mandatory=$true)][string[]]$ArgumentList
 )
 $exe=(Get-Command pwsh.exe).Source
 $startInfo=[Diagnostics.ProcessStartInfo]::new($exe)
 $startInfo.UseShellExecute=$false
 $startInfo.RedirectStandardOutput=$true
 $startInfo.RedirectStandardError=$true
 $startInfo.StandardOutputEncoding=[Text.UTF8Encoding]::new($false)
 $startInfo.StandardErrorEncoding=[Text.UTF8Encoding]::new($false)
 $startInfo.CreateNoWindow=$true
 $startInfo.ArgumentList.Add('-NoLogo')
 $startInfo.ArgumentList.Add('-NoProfile')
 $startInfo.ArgumentList.Add('-File')
 $startInfo.ArgumentList.Add($ScriptPath)
 foreach($oneArgument in $ArgumentList){$startInfo.ArgumentList.Add([string]$oneArgument)}
 $process=[Diagnostics.Process]::new()
 $process.StartInfo=$startInfo
 if(-not $process.Start()){throw 'CHILD_PROCESS_START_FAILED'}
 $stdoutTask=$process.StandardOutput.ReadToEndAsync()
 $stderrTask=$process.StandardError.ReadToEndAsync()
 $process.WaitForExit()
 return [pscustomobject]@{ExitCode=$process.ExitCode;Stdout=$stdoutTask.Result;Stderr=$stderrTask.Result}
}

function Append-DurableEvent {
 param([Parameter(Mandatory=$true)][object]$Event)
 $eventJson=$Event|ConvertTo-Json -Compress -Depth 12
 $childArguments=@('-EventLogPath',(Join-Path $RunRoot 'RUN_EVENTS.jsonl'),'-EventJson',$eventJson)
 $child=Invoke-ChildScript -ScriptPath (Join-Path $CanonicalToolsRoot 'append_event.ps1') -ArgumentList $childArguments
 if($child.ExitCode -ne 0){throw "EVENT_APPEND_CHILD_FAILED:$($child.Stderr)"}
 try{return ($child.Stdout|ConvertFrom-Json -ErrorAction Stop)}catch{throw 'EVENT_APPEND_READBACK_INVALID'}
}

if($HintCount -ne 1){throw 'OUTPUT_HINT_COUNT_INVALID'}

$callSeconds=[Math]::Round(([DateTime]::Parse($T4Utc)-[DateTime]::Parse($T2Utc)).TotalSeconds,3)
$null=Append-DurableEvent ([ordered]@{event='IMAGE_RETURNED';task_id=$TaskId;wave=$Wave;attempt_number=1;t4_utc=$T4Utc;t3='UNOBSERVABLE';output_hint_count=$HintCount;image_call_seconds=$callSeconds;test_only=[bool]$Smoke})

$parserWatch=[Diagnostics.Stopwatch]::StartNew()
$parserArgs=@('-Mode','Parse','-Hint',$OutputHint,'-AllowedRoot',$AllowedRoot)
$parserResult=Invoke-ChildScript -ScriptPath (Join-Path $CanonicalToolsRoot 'official_hint_parser.ps1') -ArgumentList $parserArgs
$parserWatch.Stop()
$parserSeconds=[Math]::Round($parserWatch.Elapsed.TotalSeconds,3)

if($parserResult.ExitCode -ne 0){
 $err=$parserResult.Stdout|ConvertFrom-Json
 $null=Append-DurableEvent ([ordered]@{event='PARSER_FAILED';task_id=$TaskId;attempt_number=1;error_code=$err.error_code;parser_seconds=$parserSeconds})
 throw "PARSER_FAILED:$($err.error_code)"
}

$parsed=$parserResult.Stdout|ConvertFrom-Json
if(-not $parsed.output_dir -or -not $parsed.source_path){throw 'PARSER_SOURCE_PATH_MISSING'}

$null=Append-DurableEvent ([ordered]@{event='HINT_PARSED';task_id=$TaskId;attempt_number=1;output_dir=$parsed.output_dir;source_path=$parsed.source_path;parser_seconds=$parserSeconds})

$copyWatch=[Diagnostics.Stopwatch]::StartNew()
$copyArgs=@('-TaskId',$TaskId,'-SourcePath',$parsed.source_path,'-Destination',$Destination,'-QAPath',$QAPath)
$copyResult=Invoke-ChildScript -ScriptPath (Join-Path $CanonicalToolsRoot 'local_copy.ps1') -ArgumentList $copyArgs
$copyWatch.Stop()
$copyWrapperSeconds=[Math]::Round($copyWatch.Elapsed.TotalSeconds,3)

if($copyResult.ExitCode -ne 0){
 $err=$copyResult.Stdout|ConvertFrom-Json
 $null=Append-DurableEvent ([ordered]@{event='COPY_FAILED';task_id=$TaskId;attempt_number=1;error_code=$err.error_code;copy_wrapper_seconds=$copyWrapperSeconds})
 throw "COPY_FAILED:$($err.error_code)"
}

$copied=$copyResult.Stdout|ConvertFrom-Json
$copied.destination_path=$Destination
if(-not (Test-Path -LiteralPath $Destination -PathType Leaf)){throw 'COPY_DESTINATION_MISSING'}

$t5Utc=[DateTime]::UtcNow.ToString('o')
$copySeconds=[Math]::Round(([double]$copied.copy_duration_ms/1000),3)

$null=Append-DurableEvent ([ordered]@{event='IMAGE_SAVED';task_id=$TaskId;wave=$Wave;attempt_number=1;t5_utc=$t5Utc;transport_mode='DIRECT_SOURCE_PATH';source_path=$copied.source_path;destination_path=$copied.destination_path;source_bytes=$copied.source_bytes;source_sha256=$copied.source_sha256;copy_sha256=$copied.copy_sha256;native_width=$copied.native_width;native_height=$copied.native_height;copy_seconds=$copySeconds;copy_wrapper_seconds=$copyWrapperSeconds;parser_seconds=$parserSeconds;image_call_seconds=$callSeconds;test_only=[bool]$Smoke})
$null=Append-DurableEvent ([ordered]@{event='QA_QUEUED';task_id=$TaskId;wave=$Wave;attempt_number=1;queued_at_utc=$t5Utc;qa_path=$QAPath;test_only=[bool]$Smoke})
$null=Append-DurableEvent ([ordered]@{event='DEPENDENCY_RELEASED';task_id=$TaskId;wave=$Wave;attempt_number=1;released_at_utc=[DateTime]::UtcNow.ToString('o');reason='IMAGE_SAVED_AND_QA_QUEUED';test_only=[bool]$Smoke})

[Console]::Out.WriteLine((@{
 status='QA_QUEUED'
 task_id=$TaskId
 output_hint_count=$HintCount
 output_dir=$parsed.output_dir
 source_path=$copied.source_path
 destination_path=$copied.destination_path
 qa_path=$QAPath
 t2_utc=$T2Utc
 t4_utc=$T4Utc
 t5_utc=$t5Utc
 image_call_seconds=$callSeconds
 parser_seconds=$parserSeconds
 copy_seconds=$copySeconds
 copy_wrapper_seconds=$copyWrapperSeconds
 source_bytes=$copied.source_bytes
 source_sha256=$copied.source_sha256
 copy_sha256=$copied.copy_sha256
 native_width=$copied.native_width
 native_height=$copied.native_height
 test_only=[bool]$Smoke
}|ConvertTo-Json -Compress -Depth 8))
