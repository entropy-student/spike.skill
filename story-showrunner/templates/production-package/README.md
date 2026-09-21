# Production Package Template

Recommended deterministic package:

```text
ANTIGRAVITY_PRODUCTION_PACKAGE/
├─ 00_EXECUTION_ORDER.md
├─ 01_SCRIPT.md
├─ 02_PRODUCTION_SUBTITLES.srt
├─ 03_TTS_MANIFEST.json
├─ 04_AUDIO_SPEC.md
├─ 05_VISUAL_BEATS.json
├─ 06_SHOT_TIMELINE.csv
├─ 07_IMAGE_GENERATION.csv
├─ 08_CHARACTER_BIBLE.md
├─ 09_SCENE_BIBLE.md
├─ 10_STYLE_BIBLE.md
├─ 11_REFERENCE_MANIFEST.json
├─ 12_EDIT_INSTRUCTIONS.md
├─ 13_OUTPUT_SPEC.md
├─ 14_QA_RULES.md
└─ references/
```

## Rules

- No missing creative decisions.
- Use logical resource IDs where possible.
- Runtime adapter resolves local paths.
- Production SRT and TTS Manifest are locked before Executor.
- Shot Timeline is mapped to Production SRT.
- Image Generation rows carry explicit execution mode and references.
- Exact critical text declares render mode.
- Executor may not reinterpret prompts, timing, POV or identity.
- Any unresolved required field returns before production.

## Minimum execution order

1. validate package completeness
2. resolve references/runtime resources
3. execute TTS Manifest
4. validate TTS against timing contract
5. execute image rows
6. run per-frame QA
7. assemble exact timeline
8. add explicit subtitles/edit operations
9. export
10. run final QA
11. emit execution result
