param(
 [Parameter(Mandatory=$true)][ValidateSet("Parse","TestFixtures")][string]$Mode,
 [string]$Hint,
 [string]$AllowedRoot
)
$ErrorActionPreference="Stop"
function Normalize-AbsoluteWindowsPath([string]$Value) {
 if([string]::IsNullOrWhiteSpace($Value)){return $null}
 if(-not [IO.Path]::IsPathFullyQualified($Value)){return $null}
 try { return [IO.Path]::GetFullPath($Value).TrimEnd([IO.Path]::DirectorySeparatorChar) } catch { return $null }
}
function Get-ValidCandidate([string]$Left,[string]$Right,[string]$Root) {
 $leftPath=Normalize-AbsoluteWindowsPath $Left
 $rightPath=Normalize-AbsoluteWindowsPath $Right
 $rootPath=Normalize-AbsoluteWindowsPath $Root
 if($null -eq $leftPath -or $null -eq $rightPath -or $null -eq $rootPath){return $null}
 if([IO.Path]::GetExtension($rightPath) -ine ".png"){return $null}
 $parent=[IO.Path]::GetDirectoryName($rightPath)
 if(-not [string]::Equals($parent,$leftPath,[StringComparison]::OrdinalIgnoreCase)){return $null}
 $rootPrefix=$rootPath.TrimEnd([IO.Path]::DirectorySeparatorChar)+[IO.Path]::DirectorySeparatorChar
 if(-not $rightPath.StartsWith($rootPrefix,[StringComparison]::OrdinalIgnoreCase)){return $null}
 return [ordered]@{output_dir=$leftPath;source_path=$rightPath}
}
function Resolve-OfficialHint([string]$Text,[string]$Root) {
 if($null -eq $Text -or $Text.Length -eq 0){throw "HINT_EMPTY"}
 $firstLine=([regex]::Split($Text,"\r?\n",2))[0]
 $prefix="Generated images are saved to "
 $suffix=" by default."
 if(-not $firstLine.StartsWith($prefix,[StringComparison]::Ordinal)){throw "HINT_PREFIX_MISSING"}
 if(-not $firstLine.EndsWith($suffix,[StringComparison]::Ordinal)){throw "HINT_SUFFIX_MISSING"}
 $body=$firstLine.Substring($prefix.Length,$firstLine.Length-$prefix.Length-$suffix.Length)
 $parts=$body.Split([string[]]@(" as "),[StringSplitOptions]::None)
 $valid=@()
 for($i=0;$i -lt ($parts.Length-1);$i++){
  $candidate=Get-ValidCandidate $parts[$i] $parts[$i+1] $Root
  if($null -ne $candidate){$valid+=$candidate}
 }
 if($valid.Count -eq 0){throw "NO_VALID_SPLIT"}
 if($valid.Count -ne 1){throw "AMBIGUOUS_SPLITS"}
 return $valid[0]
}
if($Mode -eq "Parse") {
 try {
  $parsed=Resolve-OfficialHint $Hint $AllowedRoot
  [Console]::Out.WriteLine(($parsed|ConvertTo-Json -Compress -Depth 4))
 } catch {
  $code=$_.Exception.Message
  if($code -notin @("HINT_EMPTY","HINT_PREFIX_MISSING","HINT_SUFFIX_MISSING","NO_VALID_SPLIT","AMBIGUOUS_SPLITS")){$code="PARSER_ERROR"}
  [Console]::Out.WriteLine((([ordered]@{status="FAIL";error_code=$code})|ConvertTo-Json -Compress))
  exit 1
 }
} else {
 $rootPath=[IO.Path]::GetFullPath($AllowedRoot)
 $d1=Join-Path $rootPath "R2R1V-fixture-a"
 $d2=Join-Path $rootPath "R2R1V-fixture-b"
 $expected=Join-Path $d1 "expected.png"
 $positive="Generated images are saved to $d1 as $expected by default."
 $negativeMissingSuffix="Generated images are saved to $d1 as $expected"
 $negativeParent="Generated images are saved to $d1 as $(Join-Path $d2 'wrong-parent.png') by default."
 $negativeAmbiguous="Generated images are saved to $d1 as $(Join-Path $d1 'one.png') as $d2 as $(Join-Path $d2 'two.png') by default."
 $outside="D:\R2R1V-outside"
$outsideFile=$outside+"\outside.png"; $negativeOutside="Generated images are saved to $outside as $outsideFile by default."
 $legacyJoined="$d1 as $expected"
 $cases=@(
  @{name="positive_official_template";hint=$positive;expect="PASS";expected_path=$expected},
  @{name="negative_missing_suffix";hint=$negativeMissingSuffix;expect="HINT_SUFFIX_MISSING"},
  @{name="negative_parent_mismatch";hint=$negativeParent;expect="NO_VALID_SPLIT"},
  @{name="negative_two_structurally_valid_candidates";hint=$negativeAmbiguous;expect="AMBIGUOUS_SPLITS"},
  @{name="negative_outside_allowed_root";hint=$negativeOutside;expect="NO_VALID_SPLIT"},
  @{name="negative_r2r1u_joined_candidate";hint=$legacyJoined;expect="HINT_PREFIX_MISSING"}
 )
 $results=@()
 foreach($case in $cases){
  try {
   $value=Resolve-OfficialHint $case.hint $rootPath
   if($case.expect -eq "PASS" -and $value.source_path -ceq $case.expected_path){$actual="PASS"}else{$actual="UNEXPECTED_PASS"}
   $got=$value.source_path
  } catch { $actual=$_.Exception.Message;$got=$null }
  $results+=@{name=$case.name;expected=$case.expect;actual=$actual;pass=($actual -eq $case.expect);parsed_path=$got}
 }
 $all=(@($results|Where-Object{-not $_.pass}).Count -eq 0)
 [Console]::Out.WriteLine((([ordered]@{status=$(if($all){"PASS"}else{"FAIL"});test_count=$results.Count;results=$results})|ConvertTo-Json -Compress -Depth 6))
 if(-not $all){exit 1}
}
