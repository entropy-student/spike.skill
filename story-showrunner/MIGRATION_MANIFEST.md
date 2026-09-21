# Candidate Migration Manifest — R2

Date: 2026-09-22

Status:
`R2_CANDIDATE_EXTRACTED / E2E_NOT_YET_PROVEN`

## Source

Validation workspace:
`entropy-student/project/ai-story-showrunner`

Review source:
`ai-story-showrunner/docs/skill-migration-review/`

## Extracted layers

### Core references
- Architecture
- Pipeline
- Writer
- Timing Compiler
- Director language
- Viewpoint grammar
- Frame Blueprint
- Character Identity Contract
- Asset Compiler
- Executor Contract
- QA / Return codes
- Runtime State Locator

### Domain adapter
- AI topic + knowledge rules

### Provider adapters
- Antigravity executor
- CosyVoice TTS
- Nano Banana image generation/edit

### Profiles
- Bilibili first-person story editorial profile
- Simplified Flat Narrative Comic visual profile
- CHAR_IP_001 character profile
- CosyVoice 300M v2.1 timing profile

### Schemas
- semantic shot
- visual beat
- frame blueprint
- frame execution row
- low-level shot
- speech unit
- TTS manifest row

### Templates
- episode state
- production package layout

## Intentional exclusions

Not migrated:
- CURRENT_STATUS from validation project
- REVIEWER_HANDOFF history
- PROJECT_RECORD / EXECUTION_EVIDENCE
- individual episodes
- G4/G5 Pilot artifacts
- v1/v2 calibration raw evidence
- generated images/audio/video
- local Windows absolute paths
- live Calendar/Registry/Daily Radar content

These remain validation/runtime data.

## P1 split results

- Core Writer separated from Bilibili/Jingsui/first-person profile.
- Generic identity contract separated from CHAR_IP_001.
- Visual style moved to profile.
- Production contract separated from Antigravity/CosyVoice/Nano Banana.
- Voice profile absolute local paths replaced by logical resource IDs.
- RuntimeStateLocator added for Calendar/Registry/episode state.
- Schema identity renamed from ai-story-showrunner to story-showrunner.
- Visual Beat `timing_source` locked to `PRODUCTION_SRT`.
- Dramatic timing kind → pace class mapping lives in Timing Compiler.

## Remaining E2E gate

The candidate is not CANONICAL until the current validation episode proves:

```text
Candidate Timing Compiler
→ Production SRT
→ TTS Manifest
→ Candidate Director/Asset contracts
→ Production Package
→ Antigravity execution
→ final video QA
```

Do not migrate validation history into the Skill to make it appear more mature than it is.
