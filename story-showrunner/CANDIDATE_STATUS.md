# Story Showrunner Candidate Status

Date: 2026-09-23

Status:
`CANDIDATE / E2E_NOT_YET_PROVEN / G6R_RECONCILED_CONTRACT`

## Product boundary

Portable Skill:
`entropy-student/spike.skill/story-showrunner`

Validation/runtime workspace:
`entropy-student/project/ai-story-showrunner`

The Skill remains Candidate until a current episode produces a reviewable final video through the Candidate contracts.

## Already validated

- generic causal story pipeline;
- Writer quality rules;
- Director semantic-shot / visual-beat system;
- viewpoint grammar;
- Frame Blueprint;
- character identity drift controls;
- G5 asset execution modes;
- Voice Timing Profile v2.1;
- Candidate Production SRT + TTS Manifest compile;
- deterministic executor boundary;
- FFmpeg programmatic baseline probe.

## 2026-09-23 takeover finding

The migration itself remains accepted, but the validation fixture contained a post-extraction seam:

```text
new Candidate Timing Compiler
→ old accepted G4 Visual Beat artifact
  (timing_source = JINGSUI_PRIOR_ESTIMATE)
→ newer Runtime Timeline Resolver contract
```

A successful render through that mixed chain would not be sufficient Candidate E2E proof.

G6R therefore adds/locks:

- durable `speech_unit_id` on Visual Beats;
- `start_anchor` / `end_anchor`;
- `timing_flex`;
- Candidate planned/resolved timing-source semantics;
- executable reference Runtime Timeline Resolver;
- corrected TTS/executor timing ownership.

No accepted story/POV/frame meaning is reopened by this reconciliation.

## Current validation requirement

The validation workspace must now:

```text
reconciled Candidate Visual Beat timing bindings
→ rebuilt current Production Package
→ real CosyVoice production TTS
→ Runtime Timeline Resolver
→ FINAL_* timeline artifacts
→ 44 production frames
→ first-E2E calibration review
→ FFmpeg final render
→ final video QA
```

## Promotion rule

Do not label this Skill CANONICAL until:

- one current episode runs through the reconciled Candidate contracts;
- Runtime Timeline Resolver is exercised against real production TTS durations;
- Production Package executes successfully;
- final video is reviewable;
- RETURN codes correctly localize failures.

The first 44-frame review is a calibration exception, not a permanent Owner approval gate.
