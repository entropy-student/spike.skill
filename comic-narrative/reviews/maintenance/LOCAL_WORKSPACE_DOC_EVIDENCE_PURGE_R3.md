# LOCAL_WORKSPACE_DOC_EVIDENCE_PURGE_R3

> Date: 2026-10-04  
> Scope: Windows local workspace only  
> Production: PAUSED  
> H019: DEFERRED_BY_OWNER  
> IMAGEGEN_CALLS=0

## Objective

Remove local documents/evidence that are now redundant because the accepted facts already live in GitHub reviews/canonical docs.

Owned root:

`C:\Users\34707\Documents\ChatGPT\批量生图`

R3 is not another organization pass. It is a **redundancy purge**.

## Delete classes

Delete only exact paths that are proven redundant:

1. completed cleanup evidence directories after their formal Reviewer decision is merged to GitHub;
2. local R2R1*/R2R2* evidence folders/ZIPs already represented by formal GitHub Review;
3. H019 reviewer-upload ZIPs that duplicate files already preserved in the archived H019 workspace;
4. H019 run-local documents that have no unique production value:
   - QA_REPORT.md
   - REVIEWER_HANDOFF.md
   - REVIEWER_PACKAGE_INDEX.md
   - RUN_RECORD.json
   - 执行队列.json
   - H019_save_image.ps1
5. duplicate local reports/readbacks/checkpoints whose accepted result is already durable in GitHub.

## Preserve

Do not delete in this Gate:

- H019 source input package;
- H019 current reference PNGs;
- H019 task/manifest files needed to reconstruct the run;
- existing H019 output PNGs;
- the two KEEP_UNKNOWN speed-test PNGs;
- .git;
- any Git-tracked/canonical/formal file;
- production-approved/final assets;
- any unknown item.

## H019 reviewer ZIP redundancy proof

Before deleting each reviewer ZIP:

- inspect ZIP member list;
- verify every meaningful contained file is already present elsewhere in the archived H019 workspace with matching bytes/hash, or is itself a disposable reviewer-only index/report;
- if any unique payload exists, retain that ZIP.

## Cleanup-evidence purge proof

A local cleanup evidence directory may be deleted only after:

- corresponding formal Reviewer decision exists on GitHub main;
- all durable facts needed for future execution are recorded in current Handoff/Review;
- the directory is not referenced as a runtime dependency.

## Required evidence

Produce:

- DOC_EVIDENCE_PURGE_PLAN.json
- REDUNDANCY_PROOF.json
- DELETE_RESULT.json
- WORKSPACE_INVENTORY_AFTER_R3.json
- LOCAL_WORKSPACE_DOC_EVIDENCE_PURGE_R3.md

Report reclaimed bytes, deleted file count, retained items, and any ambiguous item left untouched.

## Acceptance

PASS_CANDIDATE_LOCAL_WORKSPACE_DOC_EVIDENCE_PURGE_R3 requires:

- IMAGEGEN_CALLS=0;
- only exact proven-redundant local docs/evidence deleted;
- no H019 source package/reference/task/output PNG deleted;
- reviewer ZIPs deleted only after redundancy proof;
- formal GitHub/canonical files untouched;
- unknown files untouched;
- final workspace materially smaller;
- current project remains idle / H019 paused.
