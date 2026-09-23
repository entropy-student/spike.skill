# CosyVoice TTS Adapter — Candidate v0.2

## Role

Concrete TTS execution adapter for a locked Timing Package.

It does not decide semantic pace or final absolute timeline.

## Current validated setup family

- CosyVoice-300M
- zero_shot
- deterministic seed support
- speaker/reference prompt caching
- profile-defined sample rate
- technical leading/trailing silence normalization

Exact runtime install paths are runtime configuration, not portable Skill truth.

## Input

Per voiced Speech Unit:

- exact text;
- intended generation speed;
- profile ID;
- seed;
- logical reference audio ID;
- logical reference transcript ID;
- planned speech/window metadata;
- authored pause;
- allowed technical alignment tolerance.

## Execution policy

Prefer:

1. load model once;
2. cache speaker prompt once;
3. reset deterministic seed as required;
4. generate each locked voiced Speech Unit;
5. normalize only technical head/tail silence;
6. preserve internal semantic pauses;
7. persist each normalized unit immediately;
8. record real normalized duration.

Do **not** force each WAV into its planned absolute window.

After all required unit durations exist:

```text
real normalized durations
→ Runtime Timeline Resolver
→ FINAL_TIMELINE
→ assemble narration_master.wav on FINAL timing
```

The explicit silent Speech Units/holds are timeline elements and are not sent to TTS.

## Forbidden

- text rewrite;
- aesthetic retry loops;
- changing semantic class;
- changing generation speed to rescue planned milliseconds;
- large unplanned time-stretch;
- moving authored pauses;
- creative re-segmentation.

## Timing QA

Voice Timing Profile is planning/safety evidence.

A material duration miss records `VOICE_TIMING_PROFILE_DRIFT`.

It becomes blocking `RETURN_VOICE_TIMING_PROFILE_MISS` only when:

- a locked hard duration/sync constraint is infeasible; or
- repeated systematic misses invalidate the selected profile.

Ordinary actual-vs-planned duration difference is resolved by the Runtime Timeline Resolver.

## Runtime configuration

Deployment resolves:

- CosyVoice repository/model path;
- Python/venv path;
- reference WAV;
- reference transcript;
- output directory.

Portable Skill stores logical IDs, not Owner-machine absolute paths.
