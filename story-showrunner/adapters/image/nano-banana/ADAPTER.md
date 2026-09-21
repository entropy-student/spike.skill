# Nano Banana Image Adapter — Candidate v0.1

## Role

Concrete image generation/edit provider for Frame Execution Rows.

It does not decide story meaning, POV, composition strategy or identity truth.

## Input

Per frame:
- execution_mode
- Frame Blueprint ref
- character/scene/prop/style refs
- canonical identity lock
- prompt or edit delta
- negative constraints
- text render mode
- output spec
- acceptance criteria

## Modes

### GENERATE
Create a new frame from canonical refs + prompt.

### DERIVE_EDIT
Edit an accepted source while preserving declared immutable locks.

Do not use when target requires incompatible POV/composition/subject set.

### COMPOSITE_CROP
Provider may assist image-edit/crop workflows if requested, but source assets must already be approved.

## Identity

When a recurring character appears:
- canonical identity ref is mandatory if the profile requires it;
- previous accepted frame is continuity input only;
- source drift may not redefine identity.

## Exact text

Default:
`POST_OVERLAY`

Do not rely on image-native rendering for exact critical Chinese wording, verified amounts, identifiers or policy text unless the execution row explicitly permits it.

## Forbidden

- adding logos/brands for realism
- adding unlisted props
- “making it more informative” with checklist/diagram clutter
- changing camera/POV because it looks better
- cute/juvenile reinterpretation of an adult identity
- converting a matched setup/reveal into unrelated compositions
- silently changing costume

## QA

Provider output is only accepted if execution-row criteria pass:
- G4 meaning
- focus
- POV/composition
- identity
- scene/style
- reveal logic
- text mode
- no unrequested additions

Failed images are not eligible as future derive sources.
