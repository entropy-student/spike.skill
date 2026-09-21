# Frame / Asset Compiler — Candidate v0.1

## Purpose

Compile accepted Director Visual Beats into deterministic image-production instructions.

## Normal pipeline

```text
Episode Asset Inventory
→ Canonical Reference Lock
→ Frame Blueprint
→ Beat Asset Binding
→ Execution Mode Selection
→ Prompt/Edit Compiler
→ Automatic Package QA
```

Manual critical-frame Pilot is not a normal episode stage.

## Asset inventory

Inventory possible:
- characters
- scenes
- props
- UI/documents
- style assets

Inventory does not imply a Beat must bind every mentioned asset.

## Canonical reference lock

Freeze:
- Character Bible
- Scene Bible
- Style Bible
- Prop/UI Bible
- Reference Manifest

Missing real inputs remain explicit.

## Beat asset binding

Bind only assets that are:
- visible;
- causally required;
- needed for identity/continuity.

Do not bind an asset merely because narration mentions it.

## Execution modes

### GENERATE
New independent story state.

### DERIVE_EDIT
Use when an accepted source preserves target viewpoint/composition and only one main state changes.

Good:
- setup → reveal
- UI state change
- same-scene local delta
- before/after

Do not derive when target materially changes:
- POV family
- camera side/angle/crop
- visible subject set
- primary geometry that does not exist in source

### COMPOSITE_CROP
Crop/compose already accepted visual sources.

This is not permission to silently invent a code-drawn UI pipeline.

## Prompt/Edit Compiler

GENERATE must include:
- blueprint ref
- character refs
- scene refs
- prop/UI refs
- style refs
- prompt
- negative constraints
- output name
- acceptance

DERIVE_EDIT must include:
- source frame ref
- immutable locks
- exact delta
- forbidden changes
- canonical identity refs when a recurring character appears
- output/acceptance

COMPOSITE_CROP must include:
- source refs
- crop/placement
- overlay instructions
- output/acceptance

## Text policy

Exact critical text → POST_OVERLAY by default.

Image model owns:
- shell
- geometry
- spacing
- highlight region
- hierarchy

Overlay owns:
- exact wording
- verified brand text
- exact amount/identifier/policy text

## Calibration exception

Trigger manual/high-risk Pilot only for:
- new recurring character
- new visual style
- new image provider/model
- new executor
- material Prompt Compiler change
- repeated new QA failure class

Otherwise:
`Prompt/Edit Compiler → Automatic Package QA → Production Compiler`
