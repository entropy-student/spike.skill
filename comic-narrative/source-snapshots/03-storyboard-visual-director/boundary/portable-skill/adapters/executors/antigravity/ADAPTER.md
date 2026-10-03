# Antigravity Executor Adapter — Candidate v0.3

## Role

Antigravity is a restricted production executor.

It is not:
- Showrunner;
- Writer;
- Timing authority;
- Director;
- free-form art director.

## Input

Complete Production Package validated against current Candidate contracts.

Expected core files are defined in:
`references/EXECUTOR_CONTRACT.md`

## Current execution sequence

1. resolve runtime resource IDs;
2. load/call configured TTS adapter;
3. render locked voiced Speech Units;
4. measure normalized real durations;
5. run Runtime Timeline Resolver;
6. emit FINAL_SUBTITLES / FINAL_TIMELINE / FINAL_SHOT_TIMELINE;
7. call configured image adapter per execution row;
8. run identity/scene/composition checks;
9. place accepted images on the resolved final shot timeline;
10. invoke the selected deterministic video backend;
11. add only specified cuts/transitions/subtitles/audio operations;
12. export final video;
13. return execution result.

## Creative freedom

Near zero.

Allowed:
- equivalent technical retry;
- deterministic model caching;
- required file conversion;
- bounded technical silence normalization;
- implementation details that do not change output meaning.

Forbidden:
- prompt rewrite for taste;
- changing shot/beat count/order;
- adding explanatory graphics;
- adding brand/logo;
- adding transitions/BGM/SFX without instruction;
- changing TTS semantic pace or subtitle text;
- changing final timestamps outside Runtime Timeline Resolver;
- deleting images because they seem redundant;
- inventing missing references.

## Audio

Current validation mode:
`EXECUTOR_LOCKED_COSYVOICE`

Timing ownership:

```text
Timing Compiler = planned semantic timing
CosyVoice Adapter = real unit audio + actual normalized duration
Runtime Timeline Resolver = final absolute timing
```

## Image

Current validation adapter:
`Nano Banana`

Frame/Asset Compiler owns:
- execution mode;
- prompt/edit delta;
- refs;
- negative constraints;
- acceptance criteria.

Antigravity may not redesign them.

## Video runtime

The capability probe has already established the first-E2E baseline:

```text
FFmpeg = PASS_PROGRAMMATIC
role = BASELINE_DETERMINISTIC_RENDERER
```

Baseline route:

```text
FINAL_SHOT_TIMELINE
→ accepted still frames
→ FFmpeg Renderer Adapter
→ final.mp4
```

Remotion / Hyperframe remain optional future scene renderers and are not baseline E2E blockers.

Do not invoke them unless a later Production Package explicitly routes a shot to them.

## Trigger mode

Current Antigravity trigger may still be manual. Programmatic Antigravity integration is not assumed merely because FFmpeg itself is programmatically available.

## Result

Return:
- success/failure count;
- technical retries;
- generated asset IDs;
- timing/alignment status;
- export metadata;
- unresolved items;
- `PASS_CANDIDATE` or exact RETURN code.
