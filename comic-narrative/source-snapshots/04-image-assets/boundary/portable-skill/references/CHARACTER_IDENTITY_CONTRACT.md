# Character Identity Contract — Candidate v0.1

## Purpose

Prevent recurring-character drift across generated and edited stills.

Core principle:

> 风格可以简化；身份不能被简化。

## Reference precedence

```text
Canonical Identity Source
>
Approved Production Character Master
>
Approved angle / pose reference
>
Previous accepted frame
>
Prompt prose
```

A previous generated frame is continuity evidence only, never identity truth.

It may preserve:
- pose
- local scene placement
- local lighting
- continuity

It may not redefine:
- age/maturity
- face geometry
- eye scale
- jaw/chin/nose
- hair silhouette
- body proportion
- costume
- species/type/role identity

## Generic hard-lock dimensions

Every recurring-character profile should declare:
- maturity/age band
- face geometry anchors
- eye scale
- nose/jaw/chin anchors where applicable
- body proportion
- hair/head silhouette
- costume
- immutable accessories
- forbidden reinterpretations

## Simplification boundary

Allowed:
- fewer texture details
- fewer hair strands
- flatter shading
- simpler background treatment

Forbidden:
- changing identity anatomy
- juvenile/adult drift
- body-proportion drift
- costume substitution
- face-shape redesign

## Visibility-scoped QA

Evaluate only features actually visible in the frame.

A hands-only POV still:
- must bind the character identity if cuff/body cue is identity-bearing;
- should not expose a full face just to make QA easier;
- should not fail because off-frame features cannot be inspected.

## Drift propagation

If a frame fails identity QA:
- mark it source-ineligible;
- do not use it for DERIVE_EDIT;
- return to the nearest accepted source.

## Per-frame rule

Any execution row containing a recurring character must carry:
- canonical character ID
- canonical identity reference requirement
- identity hard constraints
- reference precedence
- visible-feature QA scope

## Return codes

- `RETURN_REFERENCE_PRECEDENCE_VIOLATION`
- `RETURN_CHARACTER_IDENTITY_DRIFT`
- `RETURN_CHARACTER_MATURITY_DRIFT`
- `RETURN_CHARACTER_COSTUME_DRIFT`
- `RETURN_CHARACTER_BODY_DRIFT`
- `RETURN_CHARACTER_FACE_DRIFT`
