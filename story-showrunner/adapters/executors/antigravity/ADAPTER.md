# Antigravity Executor Adapter — Candidate v0.2

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
4. measure normalized actual durations
5. run Runtime Timeline Resolver
6. emit FINAL_SUBTITLES / FINAL_TIMELINE / FINAL_SHOT_TIMELINE
7. call configured image adapter per execution row
8. run identity/scene/composition checks
9. place accepted images on the resolved final shot timeline
10. invoke the validated video runtime backend
11. add only specified cuts/transitions/subtitles/audio operations
12. export final video
13. return execution result

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
- changing TTS pace or subtitle text; final absolute timestamps may only change through the Runtime Timeline Resolver
- deleting “redundant” images
- inventing missing references

## Audio

Current validation configuration:
`EXECUTOR_LOCKED_COSYVOICE`

Meaning:
Antigravity calls CosyVoice according to the locked TTS Manifest.
Semantic timing authority remains upstream. Final absolute timestamps are resolved automatically from real TTS by the Runtime Timeline Resolver.

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


## Video runtime

The video backend is intentionally not frozen until a capability probe establishes what Antigravity can actually invoke in the user's environment.

Validated baseline target for the current environment:
- FFmpeg = PASS_PROGRAMMATIC / baseline deterministic renderer.

Optional discovered runtimes, not yet selected for baseline E2E:
- existing Remotion project/runtime;
- existing Hyperframe project/runtime;
- Antigravity-native deterministic timeline API;
- another reproducible local renderer.

Do not assume one exists without probe evidence.

Prefer reusing an already installed Codex/local runtime over reinstalling it.


## Current baseline backend decision

For the first complete E2E validation:

```text
FINAL_TIMELINE
→ accepted still frames
→ FFmpeg Renderer Adapter
→ final.mp4
```

Remotion and Hyperframe remain optional future scene renderers. Do not invoke them in the baseline E2E unless a later package explicitly declares a non-FFmpeg render mode.
