# LOCAL_WORKSPACE_ROOT_CLEANUP_R1

> Status: **SUPERSEDED_BEFORE_EXECUTION / OWNER EXPANDED SCOPE**  
> Superseded by: `LOCAL_WORKSPACE_DEEP_CLEANUP_R2.md`  
> R1 only moved root-level items and prohibited deletion. Owner explicitly expanded scope to recursive cleanup including disposable test images/programs/history, so R1 must not be executed.

> Date: 2026-10-04  
> Scope: Owner Windows workspace only  
> Production: PAUSED  
> H019: DEFERRED_BY_OWNER  
> IMAGEGEN_CALLS=0  
> DELETE_CALLS=0

## Objective

Clean the local Codex/image-generation workspace root:

`C:\Users\34707\Documents\ChatGPT\批量生图`

The root currently contains many historical R2R1*/R2R2* run directories, evidence ZIPs, ad-hoc scripts and paused H019 preparation artifacts.

This maintenance round moves historical items into one dated archive tree; it does not permanently delete evidence.

## Desired root shape

After cleanup, the root should contain:

- `archive/`;
- any explicitly current item, if one is later authorized;
- any item that cannot be confidently classified, left untouched and reported.

Do not force the root to become empty by guessing.

## Archive destination

Create a fresh unique directory:

`C:\Users\34707\Documents\ChatGPT\批量生图\archive\2026-10-04-root-cleanup-<unique>\`

Inside it use:

- `imagegen-reliability/`
- `h019-paused/`
- `adhoc-scripts/`
- `other-classified-history/`

Do not overwrite an existing archive destination.

## Classification

### imagegen-reliability

Move top-level items whose names clearly belong to the now-closed imagegen reliability chain, including the observed families:

- `_imagegen-*`
- `_r2r1*`
- `_r2r2*`
- `R2R1*.zip`
- `R2R2*.zip`
- exact evidence ZIPs/directories for R2R1 / R2R2 / R2R2R1 / R2R2R2 / R2R2R3.

These historical items are no longer runtime dependencies because the capability has been formally closed and canonicalized in GitHub.

### h019-paused

Move top-level H019 preparation/reconciliation items because Owner explicitly paused this script:

- names beginning `H019_`;
- H019 reconciliation/prep local directories or ZIPs;
- do not touch unrelated episode/package files merely because they are in the same workspace.

### adhoc-scripts

Move a standalone PowerShell/batch/script file only when its filename or content clearly identifies it as a one-off helper for a closed R2R1*/R2R2* Gate.

If uncertain, leave it in the root and report it.

### other-classified-history

Use only when an item is clearly historical to this closed reliability line but does not fit the above buckets.

Unknown/unrelated items stay at root.

## Safety rules

1. Prove real Windows hostname/user and exact workspace root before mutation.
2. Record a top-level inventory before moving anything.
3. Do not use recursive wildcard deletion.
4. `DELETE_CALLS=0`.
5. Move only exact classified paths.
6. Do not overwrite existing archive contents.
7. Preserve original basenames.
8. Do not modify file contents.
9. Do not modify GitHub worktree.
10. Do not call imagegen.
11. Do not read historical run contents broadly merely to revalidate old PASS; inspect only enough metadata/name/content needed to classify an ambiguous top-level item.
12. Unknown/nonempty items remain untouched.

## Evidence

Produce one maintenance evidence directory outside the items being moved, containing:

- `ROOT_INVENTORY_BEFORE.json`
- `MOVE_PLAN.json`
- `MOVE_RESULT.json`
- `ROOT_INVENTORY_AFTER.json`
- `LOCAL_ROOT_CLEANUP_R1.md`

For each moved file record:

- old path;
- new path;
- bytes;
- SHA-256 before/after.

For each moved directory record:

- old path;
- new path;
- recursive file count before/after;
- recursive total bytes before/after.

For unknown retained items record only name/type/reason-retained unless further inspection is needed for classification.

## Acceptance

`PASS_CANDIDATE_LOCAL_WORKSPACE_ROOT_CLEANUP_R1` requires:

- correct real root proven;
- archive destination fresh;
- every move came from the explicit classification rules;
- no delete operation;
- no imagegen call;
- file SHA before/after equal;
- directory recursive file-count/byte totals equal;
- no source classified item remains after successful move;
- unknown/unrelated items remain untouched;
- H019 local prep is archived, not executed;
- GitHub worktree remains clean;
- final root inventory is materially reduced and easy to read.
