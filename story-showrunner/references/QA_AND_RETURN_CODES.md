# QA & Return Codes — Candidate v0.1

## QA layers

### Story QA
Check:
- protagonist desire/action
- expectation/result gap
- progressive complication
- turning point/payoff
- story is not a disguised lecture

### Knowledge QA
Check:
- causal mechanism unchanged
- claims supported
- uncertainty preserved
- no unsupported factual expansion

### Timing QA
Check:
- planned Production SRT derives from locked script
- FINAL_SUBTITLES / FINAL_TIMELINE derive from real TTS through Runtime Timeline Resolver
- no overlap/order errors
- semantic pace/pauses preserved
- Voice Profile safety constraints satisfied
- actual TTS does not require material unplanned acceleration

### Director QA
Check:
- 100% spoken-script coverage
- every visual beat has a meaning change
- POV motivated
- no montage inflation
- no PPT-by-default mechanism explanation

### Asset QA
Check:
- reference paths/IDs resolve
- identity precedence obeyed
- scene/style continuity
- one-main-delta for derives
- setup does not leak reveal
- text render mode explicit
- no invented brand

### Production QA
Check:
- audio/video/subtitle timeline
- output ratio/resolution/fps
- file completeness
- no executor-added creative choices

## Generic results

- PASS
- PASS_WITH_MINOR
- RETURN_TO_<STAGE>
- HOLD
- BLOCKED_BY_REAL_INPUT

## Important return codes

### Topic/knowledge
- `RETURN_TOPIC_SOURCE_UNRESOLVED`
- `RETURN_TOPIC_TOO_DENSE`
- `RETURN_FACT_UNRESOLVED`
- `RETURN_TO_RESEARCH`

### Story/writer
- `RETURN_STORY_WEAK`
- `RETURN_TO_STORY`
- `RETURN_WRITER_CHANGED_KNOWLEDGE`
- `RETURN_SCRIPT_BECAME_EXPLAINER`
- `RETURN_HOOK_TOO_PASSIVE`
- `RETURN_DIALOGUE_TOO_ON_THE_NOSE`

### Timing
- `RETURN_TIMING_INFEASIBLE`
- `RETURN_TIMING_PROFILE_CLASS_UNSUPPORTED`
- `VOICE_TIMING_PROFILE_DRIFT` (diagnostic unless locked constraints become infeasible)
- `RETURN_VOICE_TIMING_PROFILE_MISS`
- `RETURN_TIMING_VISUAL_CONFLICT`
- `RETURN_TIMELINE_RESOLUTION_INFEASIBLE`

### Director
- `RETURN_SCRIPT_COVERAGE_GAP`
- `RETURN_POV_UNMOTIVATED`
- `RETURN_POV_SWITCH_UNMOTIVATED`
- `RETURN_VISUAL_BEAT_REDUNDANT`
- `RETURN_MONTAGE_INFLATION`

### Asset/identity
- `RETURN_ASSET_BINDING_PREMATURE`
- `RETURN_REFERENCE_UNRESOLVED`
- `RETURN_DERIVE_SOURCE_INCOMPATIBLE`
- `RETURN_CHARACTER_IDENTITY_DRIFT`
- `RETURN_CHARACTER_MATURITY_DRIFT`
- `RETURN_CHARACTER_COSTUME_DRIFT`
- `RETURN_SCENE_DRIFT`
- `RETURN_STYLE_DRIFT`
- `RETURN_UI_TEXT_FAILURE`

### Execution
- `RETURN_EXECUTION_CONTRACT_UNRESOLVED`
- `RETURN_EXECUTION_FAILURE`

## Repair rule

Return to the smallest stage that owns the failed truth.

Do not reopen upstream accepted stages unless the failure actually invalidates them.
