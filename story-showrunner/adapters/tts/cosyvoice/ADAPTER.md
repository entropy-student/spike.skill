# CosyVoice TTS Adapter — Candidate v0.1

## Role

Concrete TTS execution adapter for a locked Timing Package.

It does not decide semantic pace.

## Current validated setup family

- CosyVoice-300M
- zero_shot
- deterministic seed support
- speaker/reference prompt caching
- output sample rate: profile-defined
- technical leading/trailing silence normalization

Exact runtime install paths are not part of this adapter.

## Input

Per Speech Unit:
- exact text
- intended generation speed
- profile ID
- seed
- logical reference audio ID
- logical reference transcript ID
- target start/end
- allowed alignment tolerance

## Execution policy

Prefer:
- load model once
- cache speaker prompt once
- reset deterministic seed as required by validated runtime
- generate each locked Speech Unit
- normalize only technical head/tail silence
- preserve internal semantic pauses
- assemble final audio according to Production SRT

## Forbidden

- text rewrite
- “make it sound nicer” retry loops
- changing semantic class
- large unplanned time-stretch
- moving authored pauses
- re-segmenting the script creatively

## Timing QA

Actual duration vs allocated window is evaluated by Voice Timing Profile contract.

Material miss:
`RETURN_VOICE_TIMING_PROFILE_MISS`

Do not repair by silently forcing a large speed-up.

## Runtime configuration

Deployment resolves:
- CosyVoice repository/model path
- Python/venv path
- reference WAV
- reference transcript
- output directory

Portable Skill stores logical IDs, not owner-machine absolute paths.
