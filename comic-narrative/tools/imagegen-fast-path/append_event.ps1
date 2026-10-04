param([Parameter(Mandatory=$true)][string]$EventLogPath,[Parameter(Mandatory=$true)][string]$EventJson)
$ErrorActionPreference="Stop"
$path=[IO.Path]::GetFullPath($EventLogPath)
if([IO.Path]::GetFileName($path) -cne "RUN_EVENTS.jsonl"){throw "INVALID_EVENT_LOG_NAME"}
$parent=Split-Path -Parent $path
if(-not(Test-Path -LiteralPath $parent -PathType Container)){throw "EVENT_LOG_PARENT_MISSING"}
$event=ConvertFrom-Json -InputObject $EventJson -ErrorAction Stop
$lockPath=$path+".lock";$lock=$null;$deadline=[DateTime]::UtcNow.AddSeconds(30)
while($null -eq $lock){try{$lock=[IO.File]::Open($lockPath,[IO.FileMode]::OpenOrCreate,[IO.FileAccess]::ReadWrite,[IO.FileShare]::None)}catch{if([DateTime]::UtcNow -gt $deadline){throw "EVENT_LOCK_TIMEOUT"};Start-Sleep -Milliseconds 25}}
try{$seq=1;if(Test-Path -LiteralPath $path){$lines=[IO.File]::ReadAllLines($path);if($lines.Length -gt 0){$last=ConvertFrom-Json -InputObject $lines[$lines.Length-1] -ErrorAction Stop;$seq=[int]$last.sequence+1}};$event|Add-Member -NotePropertyName sequence -NotePropertyValue $seq -Force;$line=($event|ConvertTo-Json -Compress -Depth 10)+[Environment]::NewLine;$bytes=[Text.UTF8Encoding]::new($false).GetBytes($line);$s=[IO.File]::Open($path,[IO.FileMode]::OpenOrCreate,[IO.FileAccess]::ReadWrite,[IO.FileShare]::Read);try{$s.Seek(0,[IO.SeekOrigin]::End)|Out-Null;$s.Write($bytes,0,$bytes.Length);$s.Flush($true)}finally{$s.Dispose()};[Console]::Out.WriteLine(($event|ConvertTo-Json -Compress -Depth 10))}finally{$lock.Dispose()}
