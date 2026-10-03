# IMAGEGEN_SIZE_POLICY_NO_IMAGE_REGRESSION_R2R1O — Reviewer Decision

> Date: 2026-10-04  
> Governance: `vps-project-governance/VNEXT.md` v0.2.6 @ `de2b38ec0e7f3ecceb1aeffa3fc7f033ed14429a`  
> Reviewer verdict: **PASS**  
> Imagegen calls: **0**  
> Retries: **0**  
> Next Gate: **IMAGEGEN_OUTPUT_HINT_TWO_CONCURRENT_LIVE_CANARY_R2R1P**

## Evidence identity

Owner uploaded:

- `_imagegen-size-policy-no-image-regression-r2r1o.zip`
- Reviewer-computed ZIP SHA-256: `47cb801be729093c7aecd794faa28eaf5ffb212f819266b3a5d04fb0969281bd`

The ZIP was checked for path traversal before extraction. No unsafe entries were found.

Primary reviewed files:

- `IMAGEGEN_SIZE_POLICY_NO_IMAGE_REGRESSION_R2R1O.md`
- `PREFLIGHT_EVIDENCE_R2R1O.md`
- `R2R1O_TEST_TASK.json`
- `R2R1O_REGRESSION_CASES.json`
- `REGRESSION_RESULTS.json`
- `RUN_EVENTS.jsonl`
- `RUN_RECORD.json`
- `RUN_R2R1O_REGRESSION.ps1`
- `FRESH_READBACK_R2R1O.json`
- preserved diagnostic runs under `diagnostics/`

## Fresh hash verification

Reviewer independently recomputed every final artifact hash listed by `FRESH_READBACK_R2R1O.json`.

All 8/8 matched:

- report: `3a4716346c1a353a72348f0b6e2cbda3423fe9431a24ea34d38fa22f7aae4c40`
- preflight: `3c1b342d22aaae0e2fd56d4d017770eea1a86af9855f2c438da732787d3f7c4e`
- task: `2493e17fa90ba23250516df348a4c4b4e653690abf080a54277742c50e5f0dc4`
- cases: `e7ecd115fd1077ee481637e6c8ea5ec035a1e60934109482fcf693c7224cb197`
- runner: `7e658b558cc33235c85bcc582c930e8cde9584f540169aebde142b0609d1477c`
- results: `18d5082230ac4ce964b59c52727ee2c8ce9027dcaa3fd159c71a49109589338d`
- events: `f6e9c0f3644a89d90f10c3d3d88c0a508f2d96ca6c1a89722688daba359ee01c`
- record: `330b6c8cff32f799cdf6d097796759ba5345b22380e4556951d88e0e9d17bdc7`

Final `RUN_EVENTS.jsonl` contains exactly five parseable events with contiguous sequence 1–5.

## Canonical-state verification

Executor ran against:

- GitHub main: `5bf690c5f803cd8b9d32615c78b23723ff0046cd`
- Part 4 §25 blob: `3360312c5ec7b1248d4c46d8703a29290c7aae5f`
- R2R1N Reviewer blob: `3873500fd20418f09e6f2945a457ca7e6bf3846b`

Reviewer fresh-read current main and confirmed Part 4 §25 still states:

- 16:9 only;
- 1920×1080 = target canvas / final delivery target;
- no separate native pixel target;
- provider-native raster may differ;
- native mismatch alone is not failure or retry;
- no regeneration/edit solely to chase exact pixels.

## Task-contract verification

`R2R1O_TEST_TASK.json` contains exactly four fields:

- `aspect_ratio = 16:9`
- `target_canvas = 1920x1080`
- `native_pixel_target = NONE`
- `retry_on_native_pixel_mismatch = false`

No exact-native size requirement was reintroduced.

## Positive preserved regression

Preserved R2R1J PNG:

- dimensions: **1672×941**
- bytes: 2,116,439
- SHA-256: `a15eb872f24f29edcdbef9bf645cfe0b835ead19663f6517f5a92538bd3811e1`

Verified result:

- `pixel_dimensions_differ_from_target_canvas = true`
- `failure_due_to_native_pixel_mismatch = false`
- `retry_due_to_native_pixel_mismatch = false`
- `size_policy_status = PASS`
- `overall_size_format_result = PASS`

The historical R2R1J scene/content QA FAIL remains separate and was not re-evaluated.

## Negative regression

Synthetic negative case:

- dimensions: **1024×1536**
- portrait / vertical composition
- materially contradicts the 16:9 landscape contract

Verified result:

- native pixel mismatch is **not** used as the failure reason;
- `independent_format_qa_status = FAIL`;
- `overall_size_format_result = FAIL`;
- retries = 0.

This is sufficient for the declared R2R1O fixture-level policy regression: exact native equality is not a failure condition, while a materially wrong aspect/composition can still fail independently.

## Harness correction review

The evidence preserves two earlier local runner terminations.

Reviewer inspected the preserved diagnostics and runner diff.

Facts:

- both earlier runs already produced the same positive PASS and negative FAIL semantic results;
- both recorded `IMAGEGEN_CALLS=0` and retries=0;
- the first runner's final assertion incorrectly expected six events / sequence 1–6 although only five events are emitted;
- an intermediate correction fixed the count but retained the wrong sequence expectation;
- the final runner changes the final assertion to five events / sequence 1–5;
- the final source diff does not alter the task contract, positive/negative evaluation logic, image source, or retry semantics.

Therefore these are **test-harness closeout assertion defects**, not target-rule failures. They do not block PASS.

## Scope / mutation check

Reviewer accepts the evidence that:

- `IMAGEGEN_CALLS=0`;
- retries=0;
- output image count=0;
- no production image was modified;
- no Part 2 / Part 3 / Part 4 / Part 4.5 / SKILL rule was modified by Executor;
- historical R2R1J evidence was not rewritten;
- fresh readback reports project worktree clean.

## Reviewer decision

All R2R1O declared acceptance criteria are satisfied.

Formal decision:

`PASS`

This closes the exact-pixel-size regression line.

Future imagegen reliability work must not reopen exact-native pixel research unless new evidence proves a materially different requirement.

# NEXT GATE — IMAGEGEN_OUTPUT_HINT_TWO_CONCURRENT_LIVE_CANARY_R2R1P

The next bounded integration Gate restores the previously planned two-concurrent live canary using the already accepted output_hint local-cache fast path and the now-settled size policy.

It must use exactly two fresh imagegen calls maximum, no retry, no TTY bulk fallback, and must treat native raster dimensions as observed evidence rather than a retry/failure condition.
