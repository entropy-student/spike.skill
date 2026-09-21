# Antigravity Executor Adapter — Candidate v0.1

## Role

Antigravity is a restricted production executor.

It is not:
- Showrunner
- Writer
- Timing authority
- Director
- art director with free taste decisions

## Input

Complete Production Package.

Expected core files are defined in:
`references/EXECUTOR_CONTRACT.md`

## Current execution sequence

1. resolve runtime resource IDs
2. load/call configured TTS adapter
3. render locked Speech Units
4. call configured image adapter per execution row
5. run identity/scene/composition checks
6. place accepted images on exact shot timeline
7. add only specified cuts/transitions/subtitles/audio operations
8. export final video
9. return execution result

## Creative freedom

Near zero.

Allowed:
- equivalent technical retry
- deterministic model caching
- file conversion required by toolchain
- bounded silence normalization/alignment
- implementation details that do not change output meaning

Forbidden:
- rewriting prompt for taste
- changing shot/beat count
- adding explanatory graphics
- adding brand/logo
- adding transitions/BGM/SFX without instruction
- changing TTS pace or SRT
- deleting “redundant” images
- inventing missing references

## Audio

Current validation configuration:
`EXECUTOR_LOCKED_COSYVOICE`

Meaning:
Antigravity calls CosyVoice according to the locked TTS Manifest.
Timing authority remains upstream.

## Image

Current validation configuration:
Nano Banana image generation/edit adapter.

Frame/Asset Compiler owns:
- execution mode
- prompt/edit delta
- refs
- negative constraints
- acceptance criteria

Antigravity may not redesign them.

## Result

Return:
- success/failure count
- technical retries
- actual generated asset IDs
- timing/alignment status
- export metadata
- unresolved items
- PASS_CANDIDATE or exact RETURN

Current trigger mode may be manual. Programmatic integration availability is not assumed.
