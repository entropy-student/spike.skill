# Executor / Production Package Contract — Candidate v0.2

## Principle

> 上游思考尽可能充分，下游执行尽可能愚蠢。

Executor receives a deterministic package and has near-zero creative authority.

## Core package

Recommended:

```text
00_EXECUTION_ORDER.md
01_SCRIPT.md
02_PLANNED_PRODUCTION_SUBTITLES.srt
03_TTS_MANIFEST.json
04_AUDIO_SPEC.md
05_VISUAL_BEATS.json
06_PLANNED_SHOT_TIMELINE.csv
07_IMAGE_GENERATION.csv
08_CHARACTER_BIBLE.md
09_SCENE_BIBLE.md
10_STYLE_BIBLE.md
11_REFERENCE_MANIFEST.json
12_EDIT_INSTRUCTIONS.md
13_OUTPUT_SPEC.md
14_QA_RULES.md
15_TIMELINE_RESOLVER_RULES.md
references/
```

## Core ownership

Production Compiler owns:
- exact package structure
- required references
- planned timing + semantic/relative timing anchors
- Runtime Timeline Resolver rules
- edit instructions
- output spec
- QA contract

Provider adapter owns:
- concrete model/tool invocation
- equivalent retry mechanics
- provider-specific technical details

## Executor may

- resolve configured logical resource IDs to runtime paths
- load/cache models
- execute TTS
- measure normalized real durations
- resolve FINAL_SUBTITLES / FINAL_TIMELINE / FINAL_SHOT_TIMELINE from semantic anchors
- invoke image generation/edit provider
- place accepted assets on the resolved final timeline
- perform explicitly allowed edit operations
- export requested output
- retry equivalent technical failures without changing semantics

## Executor may not

- rewrite story/script
- rewrite planned/final subtitle text
- change semantic pace
- move authored pauses
- change number/order/meaning of Visual Beats
- change POV
- substitute character identity
- rewrite image prompt for taste
- add unrequested transitions/motion/BGM/SFX
- delete an image because it “seems unnecessary”
- invent missing creative decisions

## Failure behavior

If a required creative/semantic input is missing:
`RETURN_EXECUTION_CONTRACT_UNRESOLVED`

If a provider fails technically:
return a provider-specific execution failure without changing architecture.

## Runtime resource rule

Canonical packages use logical IDs where possible.

Absolute local machine paths:
- belong runtime config;
- must not become portable Skill truth.

## Audio boundary

Generic core:
upstream Timing Compiler owns planned speech timing and semantic timing intent.

Runtime Timeline Resolver owns final absolute timestamps after real TTS. See `references/TIMELINE_RESOLVER.md`.

Concrete TTS behavior belongs the TTS adapter.

## Image boundary

Generic core:
Frame/Asset Compiler owns visual meaning, refs, execution mode and constraints.

Concrete image provider behavior belongs image adapter.


## One-delivery execution rule

A production package should be self-resolving after real TTS.

Normal execution:

```text
planned timing + relative anchors
→ TTS
→ actual durations
→ Runtime Timeline Resolver
→ FINAL_SUBTITLES.srt
→ FINAL_TIMELINE.json
→ FINAL_SHOT_TIMELINE.csv
→ image/video runtime
```

Do not require the Owner to return actual TTS timing to the Showrunner for a second package build.
