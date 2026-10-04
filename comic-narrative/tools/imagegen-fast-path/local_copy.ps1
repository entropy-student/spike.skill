param(
 [Parameter(Mandatory=$true)][string]$TaskId,
 [Parameter(Mandatory=$true)][string]$SourcePath,
 [Parameter(Mandatory=$true)][string]$Destination,
 [Parameter(Mandatory=$true)][string]$QAPath
)
$ErrorActionPreference="Stop"
$failure="SOURCE_PATH_INVALID"
try {
 $source=[IO.Path]::GetFullPath($SourcePath)
 $allowed=[IO.Path]::GetFullPath((Join-Path $env:USERPROFILE ".codex\generated_images")).TrimEnd([IO.Path]::DirectorySeparatorChar)+[IO.Path]::DirectorySeparatorChar
 if(-not $source.StartsWith($allowed,[StringComparison]::OrdinalIgnoreCase)){$failure="SOURCE_OUTSIDE_ALLOWED_ROOT";throw $failure}
 if(-not(Test-Path -LiteralPath $source -PathType Leaf)){$failure="SOURCE_MISSING";throw $failure}
 $sourceItem=Get-Item -LiteralPath $source -Force
 if($sourceItem -isnot [IO.FileInfo] -or (($sourceItem.Attributes -band [IO.FileAttributes]::ReparsePoint) -ne 0)){$failure="SOURCE_NOT_REGULAR_FILE";throw $failure}
 if([IO.Path]::GetExtension($source) -ine ".png"){$failure="SOURCE_NOT_PNG";throw $failure}
 if($sourceItem.Length -lt 24){$failure="SOURCE_PNG_TOO_SMALL";throw $failure}
 $readPng={param([string]$Path)
  $s=[IO.File]::OpenRead($Path)
  try{[byte[]]$h=New-Object byte[] 24;if($s.Read($h,0,24) -ne 24){throw "PNG_HEADER_SHORT"}}finally{$s.Dispose()}
  if([Convert]::ToHexString($h,0,8).ToLowerInvariant() -ne "89504e470d0a1a0a"){throw "PNG_SIGNATURE_INVALID"}
  if([Text.Encoding]::ASCII.GetString($h,12,4) -ne "IHDR"){throw "PNG_IHDR_INVALID"}
  $w=[uint32](([uint64]$h[16]*16777216)+([uint64]$h[17]*65536)+([uint64]$h[18]*256)+[uint64]$h[19])
  $hh=[uint32](([uint64]$h[20]*16777216)+([uint64]$h[21]*65536)+([uint64]$h[22]*256)+[uint64]$h[23])
  return @{width=$w;height=$hh}
 }
 $dims=&$readPng $source
 $sourceHash=(Get-FileHash -LiteralPath $source -Algorithm SHA256).Hash.ToLowerInvariant()
 $dest=[IO.Path]::GetFullPath($Destination);$qa=[IO.Path]::GetFullPath($QAPath)
 $outputRoot=[IO.Path]::GetFullPath((Split-Path -Parent (Split-Path -Parent $dest))).TrimEnd([IO.Path]::DirectorySeparatorChar)
 $runRoot=[IO.Path]::GetFullPath((Split-Path -Parent $outputRoot)).TrimEnd([IO.Path]::DirectorySeparatorChar)
 $outPrefix=$outputRoot+[IO.Path]::DirectorySeparatorChar
 $qaPrefix=[IO.Path]::GetFullPath((Join-Path $runRoot "qa")).TrimEnd([IO.Path]::DirectorySeparatorChar)+[IO.Path]::DirectorySeparatorChar
 if(-not $outputRoot.EndsWith("\outputs",[StringComparison]::OrdinalIgnoreCase) -or -not $dest.StartsWith($outPrefix,[StringComparison]::OrdinalIgnoreCase)){$failure="DESTINATION_OUTSIDE_RUN_OUTPUTS";throw $failure}
 if(-not $qa.StartsWith($qaPrefix,[StringComparison]::OrdinalIgnoreCase)){$failure="QA_PATH_OUTSIDE_RUN";throw $failure}
 if(-not(Test-Path -LiteralPath (Split-Path -Parent $dest) -PathType Container)){$failure="DESTINATION_DIRECTORY_MISSING";throw $failure}
 if(-not(Test-Path -LiteralPath (Split-Path -Parent $qa) -PathType Container)){$failure="QA_DIRECTORY_MISSING";throw $failure}
 if(Test-Path -LiteralPath $dest){$failure="DESTINATION_ALREADY_EXISTS";throw $failure}
 $timer=[Diagnostics.Stopwatch]::StartNew();Copy-Item -LiteralPath $source -Destination $dest -ErrorAction Stop;$timer.Stop()
 $destItem=Get-Item -LiteralPath $dest -Force
 if($destItem -isnot [IO.FileInfo] -or (($destItem.Attributes -band [IO.FileAttributes]::ReparsePoint) -ne 0)){$failure="DESTINATION_NOT_REGULAR_FILE";throw $failure}
 $copyDims=&$readPng $dest
 $copyHash=(Get-FileHash -LiteralPath $dest -Algorithm SHA256).Hash.ToLowerInvariant()
 if($copyHash -ne $sourceHash){$failure="COPY_HASH_MISMATCH";throw $failure}
 $meta=[ordered]@{task_id=$TaskId;status="AWAITING_VISUAL_QA";source_path=$source;destination_path=$dest;source_bytes=$sourceItem.Length;source_sha256=$sourceHash;copy_sha256=$copyHash;native_width=$dims.width;native_height=$dims.height;copy_width=$copyDims.width;copy_height=$copyDims.height;copy_duration_ms=$timer.ElapsedMilliseconds}
 $meta|ConvertTo-Json -Depth 5|Set-Content -LiteralPath $qa -Encoding utf8
 [Console]::Out.WriteLine(($meta|ConvertTo-Json -Compress -Depth 6))
} catch {
 [Console]::Out.WriteLine((([ordered]@{task_id=$TaskId;status="FAIL";error_code=$failure})|ConvertTo-Json -Compress))
 exit 1
}
