# IMAGEGEN_SPEED_BATCH_R1 — Reviewer Decision

> Date: 2026-10-03
> Scope: image-generation execution-speed pilot only
> Reviewer verdict: **RETURN_IMPLEMENTATION_DRIFT**
> Formal Part 3 / Part 4 / Part 4.5 / SKILL changes: **NONE**

## Evidence identity

Reviewed owner-provided package:
- `_imagegen-speed-batch-r1.zip`
- SHA-256: `12c011dc0be8d93824f71dd076a50c645077fb82007aa526faaa607bfa9c26b0`

Direct readback verified:
- 6 target Beats;
- 11 attempt images + 1 duplicate non-manifest copy;
- 11 CSV attempt rows;
- all 11 manifest image SHA-256 values match actual files;
- final Beat results: 3 PASS / 3 FAIL;
- no no-image technical retry;
- 9/11 attempts have usable image-call timing;
- last two retry attempts lack T0/T1/T2 because durable logging failed.

## Gate decision

The pilot does **not** qualify as PASS_CANDIDATE for the intended goal “concurrency=2 + return→save→QA→release dependency”.

Reason:
1. the first 9 returned images were not automatically persisted because output-path parsing failed;
2. QA was therefore delayed and the key return→QA metric was contaminated;
3. logging later failed because the complete RUN_RECORD was written through an overlong Windows command;
4. C-VB01 submitted a third same-strategy attempt before the first two failures had been timely classified, violating the intended “same semantic failure twice → stop” behavior;
5. incomplete timestamps prevent a clean direct-readback timing chain for all attempts.

The image-call timings remain useful partial evidence, but they are insufficient to approve concurrency=3 or to claim the new scheduling design improved wall-clock time.

## What this RETURN means

This is an **execution / harness defect**, not evidence that the formal Part 3 or Part 4 rules are wrong.

The three content FAIL Beats in this pilot are not promoted into new formal-rule defects because the speed test reused the existing H019 package and its purpose was execution timing, not a fresh regression of the newly updated Part 3.

## Next Gate

`IMAGEGEN_EXECUTOR_RELIABILITY_R2`

Required sequence:

1. Preserve R1 evidence unchanged.
2. Repair output-path capture so an image returned by the tool is persisted without manual cache recovery.
3. Replace whole-record command-line rewrites with append-only event logging; compile summary JSON only after the run.
4. Separate image-generation slot release from QA work for unrelated tasks.
5. Enforce same-Beat retry state: the next attempt cannot be submitted until the previous attempt has a QA result; two same semantic failures stop further same-strategy attempts.
6. Run a no-image preflight for path capture, durable logging and scheduler state transitions.
7. Only after preflight PASS, rerun the same 6 Beats at concurrency=2.
8. Fresh-readback all timing/evidence files and actual output hashes before Reviewer decides whether concurrency=3 is worth testing.

## R2 acceptance focus

- no manual output recovery;
- every generated attempt has durable T0/T1/T2/T4/T5/QA_START/QA_END records (T3 may remain UNOBSERVABLE);
- no estimated timestamps used as canonical evidence;
- no unexplained idle between image return, save, QA queueing and next unrelated submission;
- retry-stop rule is actually enforced;
- no unmanifested duplicate outputs;
- same 6 Beats, concurrency fixed at 2;
- no H019 full rerun;
- no formal rule changes.

Reviewer should judge R2 with fresh readback and return one of:
- `PASS_CANDIDATE_EXECUTOR_RELIABILITY_R2`
- `RETURN_IMPLEMENTATION_DRIFT`
- `RETURN_TEST_FAILURE`

No concurrency=3 test is authorized by this review.
