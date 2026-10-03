# IMAGEGEN_EXECUTOR_RELIABILITY_R2R1 — Reviewer Decision

> Date: 2026-10-03
> Reviewer verdict: **RETURN_IMPLEMENTATION_DRIFT**
> Next Gate: **IMAGEGEN_EXECUTOR_RESULT_CAPTURE_R2R1A**
> Formal Part 2 / Part 3 / Part 4 / Part 4.5 / SKILL changes: **NONE**

## Evidence reviewed

Owner-provided preflight evidence states:
- no preflight test or image generation was executed;
- the local execution worktree could not find the two specified Reviewer files;
- preserved R2 evidence did not contain the raw JavaScript imagegen result object;
- without that raw object, the required production-shaped adapter fixture could not be constructed.

## Reviewer correction

The first blocker is not a canonical-artifact absence.

Both Reviewer files exist in the canonical repository branch:
- `comic-narrative/reviews/imagegen-speed/IMAGEGEN_EXECUTOR_RELIABILITY_R2_REVIEW.md`
- `comic-narrative/reviews/imagegen-speed/IMAGEGEN_SPEED_BATCH_R1_REVIEW.md`

The local worktree / evidence packet simply did not contain them. Future execution should fetch the canonical files from GitHub instead of treating local absence as missing project evidence.

The second blocker is real:
- R2 did not preserve a raw JavaScript imagegen result object or an equivalent structured capture that exposes the direct source-path field;
- therefore a fixture claimed to match the real runtime return shape cannot currently be constructed truthfully.

## Gate decision

R2R1 remains **RETURN_IMPLEMENTATION_DRIFT** because the requested preflight could not be completed and no integration canary ran.

This is not a content or image-quality failure.

## Next Gate — IMAGEGEN_EXECUTOR_RESULT_CAPTURE_R2R1A

Purpose: break the evidence deadlock by capturing one real imagegen return object before any lossy adapter transformation.

Required sequence:

1. Fetch the two canonical Reviewer files from the repository branch and place/read them in the execution context.
2. Preserve all R1 / R2 / R2R1 evidence unchanged.
3. Instrument the JavaScript call site **before** the current adapter transforms the imagegen result.
4. Make exactly **one** controlled imagegen call for instrumentation only.
5. Immediately persist a raw structured snapshot of the returned JavaScript object:
   - full JSON if serializable;
   - otherwise a deterministic recursive key/type/value snapshot preserving all primitive string fields and object paths.
6. Do not parse natural-language tool descriptions to discover the image path.
7. Record which exact field(s) contain the direct returned image/source asset information.
8. STOP. Do not run the two-image canary yet.
9. Reviewer fresh-readback decides whether the captured shape is sufficient to build the real adapter fixture.

This one instrumentation image is **not** an R2R1 canary attempt and must not be counted as a PASS/FAIL content attempt.

PASS candidate:
`PASS_CANDIDATE_IMAGEGEN_RESULT_CAPTURE_R2R1A`

Return:
- `RETURN_IMPLEMENTATION_DRIFT`
- `RETURN_TEST_FAILURE`

After Reviewer accepts R2R1A, resume integration work:
`captured real shape → repair JS adapter → production-shaped no-image preflight → two-image concurrency=2 canary`.

No concurrency=3 test and no H019 full rerun are authorized.
