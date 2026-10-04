# IMAGEGEN_RESULT_CONSUMER_REPAIR_AND_SIX_TASK_RELIABILITY_R2R2R1 — Reviewer Decision

> Date: 2026-10-04  
> Governance: `vps-project-governance/VNEXT.md` v0.2.6 @ `de2b38ec0e7f3ecceb1aeffa3fc7f033ed14429a`  
> Executor self-report: `RETURN_TEST_FAILURE`  
> Reviewer verdict: **RETURN_IMPLEMENTATION_DRIFT — ACCEPTED / CLASSIFICATION CORRECTED**  
> Next Gate: **IMAGEGEN_DESTINATION_CONTRACT_NO_IMAGE_CLOSEOUT_R2R2R2**

## Evidence identity

Reviewed Owner-provided package:

`R2R2R1_RESULT_CONSUMER_REPAIR_EVIDENCE_20261004.zip`

Reviewer-computed ZIP SHA-256:

`138dcc850b36747eb9df269e24019e0310078b128f24b6ac93c62457100d209b`

Key evidence SHA-256:

- execution report = `20dd5a3a69b6839f70ae34c6b632219c38e7a28a119fccef48d98da26f67c16d`
- preflight evidence = `be15c70fb81515a3ae740bdb322a320f0c24b8447a7d2b55155a9dc3e8bc46f2`
- RUN_EVENTS = `2ba032f8fd5305aee258df46ffb6bc797976f57a1917a8e17db164e10de89451`
- RUN_RECORD = `87caacf86fdedc1765a931e27c0e2d91705c85cd6cb09b69983958c184c29090`
- ASSET_OUTPUT_MANIFEST = `7947a19fdd27b1563cbf638de366176a2562ab53bc21c41d54c65a55928cd5e4`
- repaired fresh consumer = `01a7193c6b3c56da684e473553a2e9779ed8bc3131ae8fc8c3551fad3180b170`

## Consumer repair verification

The R2R2 consumer-binding defect is fixed.

The repaired consumer:

- has no formal parameter named `Args`;
- uses named `ScriptPath / ArgumentList`;
- adds child arguments individually through `ProcessStartInfo.ArgumentList`;
- captures child exit/stdout/stderr;
- passed PowerShell syntax validation;
- passed the qualifying zero-image end-to-end smoke through `consumer → logger → parser → local-copy → SHA/dimensions → QA_QUEUED → DEPENDENCY_RELEASED`;
- synthetic source/destination SHA matched;
- synthetic source cleanup was confirmed;
- no imagegen call was consumed by preflight.

Therefore the R2R2 consumer defect is closed.

## Six-task live verification

The fixed six-task fixture executed all three waves.

Verified:

- imagegen calls = 6;
- max observed in-flight = 2;
- retries = 0;
- replacements = 0;
- fallbacks = 0;
- live IMAGE_SUBMITTED = 6;
- live IMAGE_RETURNED = 6;
- live TASK_END = 6;
- event log = 74 parseable rows;
- event sequence = unique and contiguous;
- Wave 3 submitted before Wave 2 QA finished;
- all six output hints were available and parseable.

Four tasks completed the full accepted fast path:

- Beat 03: PASS, 1672×941, source/copy SHA matched;
- Beat 04: PASS, 1672×941, source/copy SHA matched;
- Beat 05: PASS, 1672×941, source/copy SHA matched;
- Beat 06: PASS, 1672×941, source/copy SHA matched.

All four visual QA results = PASS.

Batch wall clock from first live submit through final TASK_END = 668 seconds.

## Failure cause for Beat 01 / Beat 02

Both Wave-1 output hints parsed successfully to valid SourcePaths.

The caller supplied flat destinations:

`<run>\outputs\R2R2-BEAT-01.png`

`<run>\outputs\R2R2-BEAT-02.png`

The canonical `local_copy.ps1` currently derives the output root from the destination grandparent:

`outputRoot = Parent(Parent(Destination))`

and then requires that inferred root to end with `\outputs`.

Therefore the current helper contract is effectively:

`<run>\outputs\<bucket>\<file>.png`

not:

`<run>\outputs\<file>.png`

Wave 2 / Wave 3 used nested destinations and all four copied successfully.

This destination-layout requirement was not explicit in the canonical README or R2R2R1 Gate. The failure is therefore a **caller/tool-contract integration gap**, not imagegen instability and not evidence against the accepted parser/SourcePath/copy/hash path.

## Reviewer classification

Correct formal result:

`RETURN_IMPLEMENTATION_DRIFT — ACCEPTED`

The Gate acceptance criteria requiring all six tasks to reach QA were not met, so formal PASS is not allowed.

However, another six-image live rerun is not justified:

- six of six imagegen calls returned;
- three-wave concurrency behavior is observed;
- four live tasks completed copy/hash/dimensions/QA;
- the two failures are deterministic local destination-validation failures;
- no further imagegen behavior needs re-proving to close this gap.

## Canonical destination contract

For the current helper implementation, future callers must construct destination paths as:

`<run_root>\outputs\<task_bucket>\<filename>.png`

Recommended production convention:

`<run_root>\outputs\<task_id>\<task_id>.png`

The task bucket directory must exist before invoking `local_copy.ps1`.

QA may remain under `<run_root>\qa\<task_id>.QA.json` or another path contained under `<run_root>\qa\`.

Do not modify `local_copy.ps1` merely to accept flat destinations in the current reliability closeout; the nested per-task layout is sufficient and safer for production isolation.

## Next Gate rationale

R2R2R2 is **zero-image only**.

It verifies and closes the only remaining unproven integration invariant:

`scheduler destination construction → canonical local-copy destination validation`

Required tests use synthetic PNGs and the current canonical helper.

No new imagegen call is authorized.

If R2R2R2 passes, Reviewer may close the imagegen executor reliability line using the combined accepted evidence from R2R1V + R2R2R1 + R2R2R2 and move to production/H019 without another synthetic live-image batch.
