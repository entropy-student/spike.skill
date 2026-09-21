# Timing Compiler — Candidate v0.1

## Core authority

Production speech timing is solved before Director.

```text
locked spoken script
→ Speech Units
→ dramatic timing kind
→ voice pace class
→ Voice Timing Profile
→ safe duration
→ authored semantic pauses
→ whole-script scheduling
→ Production SRT + TTS Manifest
```

## Dramatic timing → pace class

| timing kind | pace class |
|---|---|
| NORMAL | NORMAL |
| BUILD / BUILD_PATTERN | FAST_NORMAL |
| PUNCH_SETUP | NORMAL |
| PUNCH | FAST_CLEAR |
| REVERSAL | CONTROLLED |
| REACTION | NORMAL for voiced reaction; authored silent hold when silence carries the beat |
| FINAL | FINAL |

### Optional pace classes

A provider/profile may define additional classes such as `SLOW_NORMAL`, but the Timing Compiler must not use a pace class unless the selected Voice Profile explicitly supports it.

The current CosyVoice v2.1 profile does not expose an independently calibrated `SLOW_NORMAL`; therefore a voiced REACTION uses NORMAL and any extra dramatic breathing is authored as a pause/hold.

## Lock classes

- HARD_ANCHOR
- SEMANTIC_RANGE
- ELASTIC

## Key rule

> 逐段计算 duration，整篇统一编排 start/end。

Do not output independent per-line SRT fragments.

## Whole-script scheduler

Must:
- preserve cue order;
- preserve HARD_ANCHOR;
- prevent overlaps;
- maintain authored pauses;
- inspect cumulative pacing;
- avoid rounding drift;
- borrow/donate only from ELASTIC units when needed.

## Safety objective

Primary risk = under-allocation that forces unnatural acceleration.

`required_extra_speed = max(1, actual / allocated)`

Default acceptance:
- <=1.03x PASS
- <=1.05x PASS_WITH_MINOR
- >1.05x RETURN

Over-allocation is separately tracked as tail slack.

## TTS Manifest minimum fields

- speech_unit_id
- exact_text
- start
- end
- timing_kind
- pace_class
- generation_speed
- voice_profile_id
- authored_pause
- deterministic settings
- logical resource IDs
- technical alignment tolerance

Absolute machine paths belong runtime config.

## Executor boundary

Executor may render/normalize/assemble.
Executor may not rewrite, re-pace or redistribute authored pauses.

Material miss:
`RETURN_VOICE_TIMING_PROFILE_MISS`
