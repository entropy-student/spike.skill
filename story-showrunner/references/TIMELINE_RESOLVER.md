# Runtime Timeline Resolver — Candidate v0.1

## Purpose

Allow one-time upstream delivery while letting the executor calibrate the final absolute timeline from real TTS durations.

The upstream timing artifact is a **planned production timeline**, not the final millisecond authority.

Canonical flow:

```text
locked script
→ Timing Compiler
→ PLANNED Production SRT + TTS Manifest
→ one-time executor delivery
→ real TTS generation
→ actual normalized durations
→ Runtime Timeline Resolver
→ FINAL_SUBTITLES.srt
→ FINAL_TIMELINE.json
→ FINAL_SHOT_TIMELINE.csv
→ video runtime
```

No human round-trip is required for ordinary duration differences.

## Authority

### Upstream owns

Immutable unless a true RETURN occurs:
- spoken text;
- Speech Unit order;
- dramatic timing kind;
- pace class;
- generation speed;
- authored semantic pauses;
- Visual Beat order/meaning;
- POV;
- frame/asset semantics;
- relative timing anchors;
- HARD_ANCHOR meaning.

### Runtime Resolver owns

After real TTS:
- actual normalized speech duration;
- absolute start/end timestamps;
- cumulative downstream shifts;
- expansion/contraction of ELASTIC slack;
- final subtitle timestamps;
- final Visual Beat absolute timestamps;
- final Shot Timeline absolute timestamps;
- final episode duration.

It does not own creative meaning.

## Core rule

> Actual speech duration becomes runtime clock truth. Planned timing remains a constraint/prior, not a target that audio must be forcibly stretched into.

Never accelerate or materially time-stretch a valid generated line merely to preserve the planned absolute timestamp.

## Required input model

Each production element should reference semantic anchors instead of relying only on hard-coded absolute milliseconds.

Example:

```json
{
  "visual_beat_id": "VB021",
  "start_anchor": {"speech_unit_id": "SU021", "edge": "START", "offset_ms": 0},
  "end_anchor": {"speech_unit_id": "SU021", "edge": "WINDOW_END", "offset_ms": 0},
  "min_hold_ms": 0,
  "timing_flex": "ELASTIC"
}
```

Absolute timestamps may be present as planned/debug values, but anchors are the durable contract.

## Resolution algorithm

For Speech Units in order:

1. load actual normalized TTS duration;
2. preserve exact unit order;
3. preserve authored semantic pause/hold;
4. set final speech start from previous resolved window end;
5. set final speech end = start + actual normalized duration;
6. apply planned authored pause;
7. allow ELASTIC pause to shrink or expand within configured bounds;
8. preserve HARD_ANCHOR meaning;
9. resolve all anchored Visual Beats / Shots;
10. emit final timeline artifacts.

## Automatic repair ladder

The resolver may automatically:

### Level 1 — accept actual duration
Use real audio duration and shift downstream timestamps.

### Level 2 — rebalance ELASTIC slack
Shrink or expand only explicitly ELASTIC pauses/holds.

### Level 3 — extend visual hold
Keep a valid still/shot visible longer when its semantic state remains correct.

### Level 4 — extend total episode duration
Allow the episode to become longer rather than forcing unnatural speech.

The resolver may not automatically:
- rewrite text;
- change semantic pace class;
- choose a new generation speed;
- delete/reorder Speech Units;
- delete/reorder Visual Beats;
- change POV;
- change image meaning;
- collapse a setup/reveal pair;
- introduce a new transition or motion concept.

## Voice-profile miss semantics

Voice Timing Profile remains important for planning quality.

After real TTS compute:

`required_extra_speed_if_forced_to_plan = actual_duration / planned_speech_window`

If this exceeds the profile threshold, record:
`VOICE_TIMING_PROFILE_DRIFT`

This is **diagnostic by default**, not an automatic current-episode blocker, because the Runtime Resolver can expand the final timeline.

Escalate to `RETURN_VOICE_TIMING_PROFILE_MISS` only when the drift makes a locked production constraint infeasible, for example:
- a hard maximum episode duration;
- a hard external sync point;
- a HARD_ANCHOR relationship that cannot be preserved;
- a downstream visual constraint that cannot be satisfied by hold/shift;
- repeated systematic drift indicating the selected profile is materially invalid.

## Required outputs

After TTS resolution:

- `FINAL_SUBTITLES.srt`
- `FINAL_TIMELINE.json`
- `FINAL_SHOT_TIMELINE.csv`
- `TIMELINE_RESOLUTION_REPORT.json`

Report should include:
- planned total duration;
- actual/final total duration;
- per-unit actual duration;
- per-unit delta;
- any ELASTIC slack changes;
- any visual-hold extensions;
- profile-drift flags;
- RETURN code only if unresolved.

## One-delivery principle

The normal production architecture should be:

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

The Owner should not have to carry a real SRT back to the Showrunner for a second package compilation.
