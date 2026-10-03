# IMAGEGEN_EXECUTOR_RELIABILITY_R2 — Reviewer Decision

> Date: 2026-10-03
> Reviewer verdict: **RETURN_IMPLEMENTATION_DRIFT**
> Next Gate: **IMAGEGEN_EXECUTOR_RELIABILITY_R2R1**
> Formal Part 2 / Part 3 / Part 4 / Part 4.5 / SKILL changes: **NONE**

## Evidence identity

Reviewed Owner-provided package:
- `_imagegen-executor-reliability-r2.zip`
- SHA-256: `39121fbda7232162e9734281cf60f4b2eee46846789117ac692e41c0c88a31ce`

Fresh readback verified:
- R2 target set is the same 6 Beats, concurrency limit 2;
- only C-VB01 and C-VB02 were actually submitted;
- both image requests returned in the execution path;
- 0 images were durably saved into R2;
- 0 QA, 0 retry, 0 dependency release, 0 task completion;
- remaining 4 Beats were not started;
- raw JSONL has 14 parseable rows;
- duplicate sequence: `10`; missing sequence: `11`;
- C-VB02 has durable IMAGE_RETURNED with T2→T4 = 65.726 s, but source-path resolution failed;
- C-VB01 return event was lost because concurrent JSONL append hit a file-lock conflict;
- manifest correctly reports no saved attempt PNGs.

## Reviewer judgment

R2 does **not** meet the R2 acceptance gate.

The correct verdict is `RETURN_IMPLEMENTATION_DRIFT`, not `RETURN_TEST_FAILURE`.

Reason:
1. preflight fixture did not match the actual image-result shape used by the live adapter, so PATH TEST PASS did not prove the production adapter path;
2. the live JavaScript adapter failed to forward the actual top-level result field needed by the resolver;
3. sequence assignment and durable append were not serialized in the runtime used by the live run;
4. therefore the two core R1 defects—automatic save reliability and durable concurrent event logging—were still unresolved in the actual executor;
5. the run stopped before QA / retry / scheduler behavior could be exercised.

Stopping after the first live faults was correct. No additional image generation should have been attempted.

## Post-stop patch assessment

The post-stop local checks are useful evidence but are **not sufficient for PASS**:
- PowerShell resolver helper passed a top-level-output fixture;
- named-mutex append passed 24 concurrent writers;
- however the JavaScript imagegen→resolver adapter used in the real execution was not repaired and live-retested.

Therefore the patch is currently `LOCAL_COMPONENT_PASS / END_TO_END_NOT_VERIFIED`.

## R1 standalone review

The R2 local machine reported that the standalone R1 review file was not found locally. Reviewer fresh readback confirms the canonical repository copy exists at:

`comic-narrative/reviews/imagegen-speed/IMAGEGEN_SPEED_BATCH_R1_REVIEW.md`

This local absence is not a blocker for the current review, but future execution packets should fetch the canonical reviewer file rather than rely on a summary copied into an older report.

## Next Gate — IMAGEGEN_EXECUTOR_RELIABILITY_R2R1

R2R1 is an **integration-repair canary**, not another six-Beat batch.

Required sequence:

1. Preserve R1 and R2 evidence unchanged.
2. Repair the actual JavaScript imagegen-result adapter so the real top-level result fields needed for source resolution are forwarded without lossy reshaping.
3. Route all runtime event writers through one append API; sequence allocation + append + flush must occur under the same cross-process lock. No producer may write RUN_EVENTS.jsonl directly.
4. Run no-image preflight using a fixture shaped exactly like the captured real image result, then verify adapter → resolver → existing-source save → SHA end to end.
5. Re-run concurrent log stress through the **same runtime append path** used by the live executor.
6. Only after those checks PASS, run exactly two independent live canary attempts: C-VB01 attempt 1 and C-VB02 attempt 1, concurrency=2.
7. For this canary, do not perform content retries. The purpose is executor plumbing.
8. Both returned images must be automatically saved, hashed, durably logged and reach QA without manual cache recovery.
9. Fresh readback must show unique monotonic sequences with no gaps attributable to concurrent writes and no missing T2/T4/T5/QA_START/QA_END for either attempt.
10. STOP and hand to Reviewer. Do not continue to the remaining four Beats.

R2R1 PASS candidate:
`PASS_CANDIDATE_EXECUTOR_INTEGRATION_R2R1`

Return states:
- `RETURN_IMPLEMENTATION_DRIFT`
- `RETURN_TEST_FAILURE`

A PASS_CANDIDATE on R2R1 only authorizes the later full six-Beat R2 retest; it does not authorize concurrency=3 or H019 full rerun.

## Current boundaries

- concurrency remains 2;
- no Part 3 / Part 4 rule changes;
- no H019 full rerun;
- no concurrency=3 test;
- no manual recovery counted as PASS evidence.
