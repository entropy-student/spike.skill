# IMAGEGEN_DESTINATION_CONTRACT_NO_IMAGE_CLOSEOUT_R2R2R2 — Reviewer Decision

> Date: 2026-10-04  
> Governance: `vps-project-governance/VNEXT.md` v0.2.6 @ `de2b38ec0e7f3ecceb1aeffa3fc7f033ed14429a`  
> Executor result: `PASS_CANDIDATE_DESTINATION_CONTRACT_CLOSED_R2R2R2`  
> Reviewer verdict: **RETURN_IMPLEMENTATION_DRIFT — ACCEPTED / CLOSEOUT INCOMPLETE**  
> Next Gate: **IMAGEGEN_SYNTHETIC_SOURCE_CLEANUP_CLOSEOUT_R2R2R3**

## Evidence identity

Reviewed Owner-provided package:

`_r2r2r2-destination-closeout-20261004-4c71dcc731.zip`

Reviewer-computed ZIP SHA-256:

`bb188fb3c1431c6ea558c3a0d87d5f020d5ab4af848ee12c1e87c9274cd482c8`

Key evidence SHA-256:

- closeout report = `0053005935e2cf1dfa64629587fd8bb4a00c14d1e5a0221910da084ac8b88102`
- preflight evidence = `2055e139da5c3838ef6e82e329ca8d01338862bf50b5f09288497e5c01def9f7`
- RUN_RECORD = `abf7d51f63a99a1feedbf35412f2be87631e6a5e3e4cb236cb68f6bb7ebfffa9`
- RUN_EVENTS = `0278a74a2976a6e0edd687dc0a0ac5541df454317d5c13a50570643d0197467a`
- FRESH_READBACK = `781c9c1a6f20eb876ff957ec7a2b158776c4fe5c2783c255265d4a79d5a07280`
- FLAT_NEGATIVE_RESULT = `0b33a15e3fef7b74c0d0cedbfcef75f65042008d6aa780ae0f653af201255798`
- SYNTHETIC_POSITIVE_RESULTS = `3d1c601ce5d8f9ba2ada636668eb1d6895443224193041191d56c44e4cb18d29`
- ASSET_OUTPUT_MANIFEST = `0634dbd1bff52c276c292088ef2c453c23b47b46b282e544e607dee3b615cf80`

## Verified positive destination contract

R2R2R2 used zero imagegen calls.

Verified from `RUN_RECORD.json` / actual ZIP contents:

- IMAGEGEN_CALLS = 0;
- positive task count = 6;
- all six destinations use `outputs/<task_id>/<task_id>.png`;
- all six copied PNGs exist in the evidence ZIP;
- all six PNGs are 96×54 / 423 bytes;
- all six SHA-256 values = `680826c5ea1a898f0c7b80043923dbb94e6d06d828eb556bcf25bf51e1454751`;
- all six QA sidecars are present;
- all six reached `QA_QUEUED` / sidecar status `AWAITING_VISUAL_QA`;
- visual/content QA was intentionally not part of this zero-image destination closeout.

The destination-layout invariant is therefore proven.

## Verified flat negative

The flat destination:

`<run>\outputs\R2R2-FLAT-NEGATIVE.png`

was tested through canonical `local_copy.ps1` and returned:

`DESTINATION_OUTSIDE_RUN_OUTPUTS`

with:

- exit code = 1;
- destination absent;
- QA sidecar absent.

The first local orchestration script encountered a PowerShell argument-binding error before this negative assertion. The negative was then executed once directly against the same canonical `local_copy.ps1`; the resulting error code and absence state are durably recorded. This does not invalidate the destination-contract result.

## Event/readback verification

- RUN_EVENTS contains 33 parseable JSON rows;
- sequence = 1..33, unique and contiguous;
- each of the six task IDs has exactly the expected five synthetic events:
  IMAGE_RETURNED → HINT_PARSED → IMAGE_SAVED → QA_QUEUED → DEPENDENCY_RELEASED;
- event 32 records the flat-destination negative;
- event 33 records RUN_FINISHED;
- repository clean = true;
- current main in evidence = `e794ce1229cfdf54b1e77ecac22c1beefaae3bb4`.

## Remaining closeout defect

The Gate acceptance criteria also required removal of the exact fresh synthetic source after readback.

`FRESH_READBACK.json` records:

- synthetic source path = `C:\Users\34707\.codex\generated_images\R2R2R2-SYNTH-7b286bc9518546e099ee53634f683a2c\synthetic.png`;
- source existed at fresh readback = true;
- source SHA-256 = `680826c5ea1a898f0c7b80043923dbb94e6d06d828eb556bcf25bf51e1454751`.

The evidence package contains no later cleanup event/readback.

Therefore acceptance criterion 11 was not proven.

## Reviewer classification

Formal result:

`RETURN_IMPLEMENTATION_DRIFT — ACCEPTED / CLOSEOUT INCOMPLETE`

This is **not** a destination-contract failure and **not** an imagegen reliability failure.

All substantive destination plumbing is accepted. Only exact synthetic-source cleanup remains.

## Next Gate

R2R2R3 is cleanup-only:

- IMAGEGEN_CALLS = 0;
- do not rerun six positives;
- do not rerun flat negative;
- do not modify canonical tools;
- do not touch R2R2R2 output/QA evidence;
- operate only on the exact synthetic source path above.

If the exact source is already absent, record cleanup satisfied and fresh-readback absence.

If it exists, before deletion require:

- real Windows host/user identity proven;
- path normalization remains under current user's `.codex\generated_images`;
- regular file, not reparse point;
- SHA-256 exactly equals `680826c5ea1a898f0c7b80043923dbb94e6d06d828eb556bcf25bf51e1454751`.

Only then delete that exact file and fresh-readback it as absent.

If any identity/type/hash check differs, fail closed and do not delete.

R2R2R3 PASS closes the imagegen executor reliability line using the combined accepted evidence from R2R1V + R2R2R1 + R2R2R2 + R2R2R3.
