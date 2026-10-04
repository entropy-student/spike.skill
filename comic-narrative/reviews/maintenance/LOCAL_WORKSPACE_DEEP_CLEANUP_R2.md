# LOCAL_WORKSPACE_DEEP_CLEANUP_R2

> Date: 2026-10-04  
> Supersedes: `LOCAL_WORKSPACE_ROOT_CLEANUP_R1` before execution  
> Scope: `C:\Users\34707\Documents\ChatGPT\批量生图`  
> IMAGEGEN_CALLS=0

## Objective

Deep-clean the local Codex/image-generation workspace, not just its top level.

The cleanup may permanently delete items only when they are proven disposable test/history artifacts. Potentially reusable production material is archived, not deleted.

## Classification model

Every candidate must be classified into exactly one of four classes before mutation:

### A — DELETE_CONFIRMED_DISPOSABLE

Eligible only when all are true:

1. path is under the owned workspace root;
2. item is untracked by Git and not inside `.git`;
3. item belongs to a formally closed R2R1*/R2R2* reliability/test run, or is clearly a synthetic/test-only artifact from those runs;
4. item is not a canonical tool, formal source package, production-approved image, Part 4.5 library asset, character/style master, or current project document;
5. item is not the sole copy of a production input that may be reused;
6. item is not needed by the current GitHub-accepted runtime because closed capabilities inherit without local evidence replay.

Typical delete candidates:

- synthetic/test PNGs;
- canary images;
- failed/partial/generated test outputs;
- duplicate test ZIPs;
- temporary run-local scripts/programs copied into evidence folders;
- run-local JSONL/log/readback/checkpoint files from closed reliability Gates;
- abandoned restore/test directories;
- duplicate extracted copies of already-closed evidence packages;
- temporary compiled/cache files created only for those tests.

### B — ARCHIVE_POTENTIALLY_REUSABLE

Move rather than delete:

- H019 production/reconciliation/work directories while Owner has paused H019;
- source execution packages that may later be reused;
- ambiguous historical outputs that may contain non-test production value;
- any untracked item with plausible production/research reuse but no current runtime role.

Archive to a fresh dated tree under:

`C:\Users\34707\Documents\ChatGPT\批量生图\archive\2026-10-04-deep-cleanup-<unique>\`

### C — KEEP_REQUIRED

Never move/delete:

- `.git/` and Git metadata;
- any Git-tracked file or directory content;
- canonical fast-path tools;
- current project source/config files;
- formal Part 3 character/style masters;
- Part 4.5 active library assets/catalog;
- any production-approved/final image;
- any current source package selected by Owner;
- current maintenance evidence while the cleanup is running.

### D — KEEP_UNKNOWN

Anything that cannot be confidently classified stays in place and is reported.

## Discovery

Do one bounded recursive inventory of the owned workspace root, excluding `.git` contents from content inspection.

For every file record at least:

- relative path;
- size;
- extension/type;
- Git tracked/untracked status;
- top-level ancestor;
- classification;
- reason.

For directories record:

- recursive file count;
- recursive total bytes;
- whether all descendants share one safe classification.

Do not read every historical text file just to revalidate old PASS. Filename/path/Git status plus minimal content sniffing is enough for classification; inspect content only where classification is ambiguous.

## Delete safety

Before any permanent delete:

1. produce `DELETE_PLAN.json` containing exact paths and reasons;
2. verify every planned path is under the owned workspace root;
3. reject `.git` or any Git-tracked path;
4. reject any path containing formal production/library/reference assets;
5. reject any ambiguous item;
6. compute aggregate candidate count/bytes;
7. no wildcard delete;
8. delete exact planned files/directories only.

For a planned directory, all descendants must already be classified DELETE_CONFIRMED_DISPOSABLE. One ambiguous/keep descendant makes the whole directory ineligible for recursive deletion.

## Archive safety

Before moving:

- produce `ARCHIVE_PLAN.json`;
- fresh destination must not already exist;
- preserve basename;
- no overwrite;
- verify file SHA before/after move, or directory file-count + total-byte parity.

## Evidence

Produce one fresh maintenance evidence directory containing:

- `WORKSPACE_INVENTORY_BEFORE.json`
- `CLASSIFICATION_SUMMARY.json`
- `DELETE_PLAN.json`
- `ARCHIVE_PLAN.json`
- `DELETE_RESULT.json`
- `ARCHIVE_RESULT.json`
- `WORKSPACE_INVENTORY_AFTER.json`
- `LOCAL_WORKSPACE_DEEP_CLEANUP_R2.md`

Report:

- total files/bytes before and after;
- deleted files/directories + reclaimed bytes;
- archived items + bytes;
- kept-required count;
- kept-unknown count + reasons;
- Git worktree status before/after;
- IMAGEGEN_CALLS=0.

## Acceptance

`PASS_CANDIDATE_LOCAL_WORKSPACE_DEEP_CLEANUP_R2` requires:

- correct Windows host/user/root proven;
- recursive inventory completed without traversing `.git` internals;
- every mutated item classified before mutation;
- no Git-tracked path moved/deleted;
- no `.git` mutation;
- no canonical/formal/production-approved asset deleted;
- all permanent deletes came only from DELETE_CONFIRMED_DISPOSABLE;
- all potentially reusable H019/production material archived, not deleted;
- unknown items retained;
- archive integrity checks pass;
- Git worktree remains clean;
- IMAGEGEN_CALLS=0;
- final workspace is materially smaller and root/subtrees are easier to understand.
