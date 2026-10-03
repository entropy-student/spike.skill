# IMAGEGEN_SIZE_POLICY_SIMPLIFICATION_R2R1N — Reviewer Decision

> Date: 2026-10-03  
> Governance: `vps-project-governance/VNEXT.md` v0.2.6 @ `de2b38ec0e7f3ecceb1aeffa3fc7f033ed14429a`  
> Owner decision: **APPROVED — KEEP CODEX BUILT-IN / DROP EXACT NATIVE PIXEL REQUIREMENT**  
> Reviewer verdict: **PASS**  
> Imagegen calls: **0**

## Owner-approved production rule

Owner chose to continue using the current Codex built-in image generation channel and explicitly does not want further time or image-generation resources spent chasing an exact provider-native pixel size.

The approved rule is:

- **16:9 remains the only formal aspect ratio**;
- **1920×1080 becomes the single default target canvas / final delivery target**;
- Codex/provider-native raster size may differ;
- there is **no separate native pixel target**;
- native width × height is recorded as observed evidence only;
- native pixel mismatch alone is not a generation/content failure and does not trigger retry;
- images are not regenerated or edited solely to reach exact pixel dimensions;
- minor near-16:9 raster rounding differences do not independently fail QA;
- actual composition that materially departs from 16:9 may still fail output-format/content QA;
- the original PNG is preserved; downstream video/delivery uses the 1920×1080 standard canvas.

## Formal change

Only `comic-narrative/part4/IMAGE_ASSET_EXECUTION.md` §25 was changed.

Removed:
- `1792×1008 default native image-generation target`

Added/clarified:
- 16:9 is the only formal composition/delivery aspect ratio;
- 1920×1080 is the default target canvas/final delivery target;
- provider-native raster is not required to equal 1920×1080;
- native pixel mismatch alone is not a retry/failure reason;
- do not regenerate/edit solely for exact pixel dimensions.

No Part 2 / Part 3 / Part 4.5 / SKILL rule was changed.

## Reconciliation with R2R1M

R2R1M remains historically valid:

- current Codex built-in callable does not expose structured exact-size parameters;
- it correctly returned before imagegen under the old exact-native rule;
- no imagegen was consumed.

R2R1N changes the formal production rule so that exact native pixel control is no longer required. It does not rewrite R2R1M history.

## Reviewer result

`PASS`

This closes the exact-native execution-channel decision.

# NEXT GATE — IMAGEGEN_SIZE_POLICY_NO_IMAGE_REGRESSION_R2R1O

The next Gate must use **zero imagegen calls** and prove future task/QA semantics no longer reintroduce the removed exact-native requirement before broader live testing resumes.
