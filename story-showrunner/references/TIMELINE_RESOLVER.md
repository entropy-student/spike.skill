# Runtime Timeline Resolver — Candidate v0.2

## Purpose

Allow one-time upstream delivery while resolving final absolute timing from real normalized TTS durations.

```text
locked script
→ Timing Compiler
→ PLANNED Production SRT + TTS Manifest
→ Director Visual Beats with durable Speech Unit anchors
→ one executor delivery
→ real TTS
→ Runtime Timeline Resolver
→ FINAL_SUBTITLES.srt
→ FINAL_TIMELINE.json
→ FINAL_SHOT_TIMELINE.csv
→ video runtime
```

No ordinary Owner round-trip is required.

## Durable anchor contract

Every Candidate Visual Beat must carry:

- `speech_unit_id`;
- `start_anchor`;
- `end_anchor`;
- `timing_flex`;
- planned/resolved `timing_source`.

Supported anchor edges:

- `START`
- `SPEECH_END`
- `WINDOW_END`

Example:

```json
{
  "visual_beat_id": "VB021",
  "speech_unit_id": "SU021",
  "start_anchor": {"speech_unit_id": "SU021", "edge": "START", "offset_ms": 0},
  "end_anchor": {"speech_unit_id": "SU021", "edge": "WINDOW_END", "offset_ms": 0},
  "timing_flex": "ELASTIC"
}
```

Absolute start/end values may remain as planned/debug values, but they are not the durable runtime relationship.

## Authority

### Upstream owns

Immutable unless a true RETURN occurs:

- spoken text;
- Speech Unit order;
- dramatic timing kind;
- pace class / generation speed;
- authored semantic pauses;
- Visual Beat order/meaning;
- POV;
- frame/asset semantics;
- anchor relationships;
- HARD_ANCHOR meaning.

### Runtime Resolver owns

After real TTS:

- actual normalized speech duration;
- final absolute start/end timestamps;
- cumulative downstream shifts;
- final subtitle timestamps;
- final Visual Beat/Shot timestamps;
- final episode duration.

It does not own creative meaning.

## Core rule

> Actual normalized speech duration is runtime clock truth. Planned timing is a constraint/prior, not a millisecond target that valid audio must be forced into.

## Baseline resolution algorithm

For Speech Units in order:

1. load actual normalized duration for voiced units;
2. preserve exact unit order;
3. set `final_start` from the previous resolved `final_window_end`;
4. set `final_speech_end = final_start + actual_duration`;
5. preserve authored pause/hold;
6. set `final_window_end`;
7. resolve every Visual Beat from its semantic anchors;
8. emit final artifacts.

The baseline reference implementation does not invent creative repair.

## Automatic repair ladder

Permitted, when explicitly represented by the selected profile/package:

1. accept actual duration and shift downstream time;
2. rebalance explicitly ELASTIC slack;
3. extend a semantically valid visual hold;
4. extend total episode duration.

Never automatically:

- rewrite text;
- change pace class/speed;
- delete/reorder Speech Units;
- delete/reorder Visual Beats;
- change POV/image meaning;
- collapse setup/reveal semantics.

## Voice-profile drift

Compute:

`required_extra_speed_if_forced_to_plan = actual_duration / planned_speech_duration`

If above the selected profile threshold, record:

`VOICE_TIMING_PROFILE_DRIFT`

This is diagnostic by default.

Escalate to `RETURN_VOICE_TIMING_PROFILE_MISS` only when a locked hard constraint cannot be preserved, or repeated systematic drift invalidates the selected profile.

## Required outputs

- `FINAL_SUBTITLES.srt`
- `FINAL_TIMELINE.json`
- `FINAL_SHOT_TIMELINE.csv`
- `TIMELINE_RESOLUTION_REPORT.json`

## Executable reference

Portable deterministic reference:

`runtime/timeline_resolver.py`

Required inputs:

```text
--speech-units <Speech Units JSON>
--actual-durations <speech_unit_id → normalized seconds, or compatible execution report>
--bindings <durable Visual Beat timing bindings>
--out-dir <runtime output directory>
```

The reference implementation proves the ownership boundary and deterministic anchor resolution. Provider-specific TTS collection still belongs to the TTS adapter.

## One-delivery principle

```text
Showrunner
→ one complete semantic/production contract
→ Executor
   → TTS
   → Runtime Timeline Resolver
   → Images
   → Video Runtime
   → Final QA
→ final video
```
