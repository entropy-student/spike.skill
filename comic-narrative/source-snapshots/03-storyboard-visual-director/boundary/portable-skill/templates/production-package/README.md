# Production Package Template

Recommended deterministic package:

```text
ANTIGRAVITY_PRODUCTION_PACKAGE/
├─ 00_EXECUTION_ORDER.md
├─ 01_SCRIPT.md
├─ 02_PLANNED_PRODUCTION_SUBTITLES.srt
├─ 03_TTS_MANIFEST.json
├─ 04_AUDIO_SPEC.md
├─ 05_VISUAL_BEATS.json
├─ 06_PLANNED_SHOT_TIMELINE.csv
├─ 07_IMAGE_GENERATION.csv
├─ 08_CHARACTER_BIBLE.md
├─ 09_SCENE_BIBLE.md
├─ 10_STYLE_BIBLE.md
├─ 11_REFERENCE_MANIFEST.json
├─ 12_EDIT_INSTRUCTIONS.md
├─ 13_OUTPUT_SPEC.md
├─ 14_QA_RULES.md
├─ 15_TIMELINE_RESOLVER_RULES.md
└─ references/
```

## Rules

- No missing creative decisions.
- Use logical resource IDs where possible.
- Runtime adapter resolves local paths.
- Planned Production SRT and TTS Manifest are locked before Executor.
- `05_VISUAL_BEATS.json` must validate against the current Candidate Visual Beat schema and carry `speech_unit_id`, `start_anchor`, `end_anchor`, and `timing_flex`; absolute milliseconds alone are insufficient.
- Executor resolves final absolute timing from real TTS before video assembly.
- Image Generation rows carry explicit execution mode and references.
- Exact critical text declares render mode.
- Executor may not reinterpret prompts, timing, POV or identity.
- Any unresolved required field returns before production.

## Minimum execution order

1. validate package completeness
2. resolve references/runtime resources
3. execute TTS Manifest
4. measure actual normalized durations
5. run `runtime/timeline_resolver.py` or an implementation proven equivalent to the same contract
6. emit FINAL_SUBTITLES / FINAL_TIMELINE / FINAL_SHOT_TIMELINE
7. execute image rows
8. run per-frame QA
9. assemble on the resolved final timeline
10. add explicit subtitles/edit operations
11. export
12. run final QA
13. emit execution result


## Planned vs final timing

Upstream package timing is planning-grade.

Executor-generated final artifacts are runtime-grade:
- `FINAL_SUBTITLES.srt`
- `FINAL_TIMELINE.json`
- `FINAL_SHOT_TIMELINE.csv`

The package must contain enough semantic anchors and resolver rules to generate these without a second Showrunner delivery.


## G6R compatibility rule

A package that combines current Candidate timing with legacy Visual Beats whose only timing authority is `JINGSUI_PRIOR_ESTIMATE` is migration evidence, not current Candidate E2E proof.

Reconcile the Visual Beats to the current anchor schema before execution.
