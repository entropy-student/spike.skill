# IMAGEGEN_EXECUTOR_RESULT_CAPTURE_R2R1A — Reviewer Decision

> Date: 2026-10-03
> Governance: `vps-project-governance/VNEXT.md` v0.2.6 @ `de2b38ec0e7f3ecceb1aeffa3fc7f033ed14429a`
> Reviewer verdict: **PASS**
> Next Gate: **IMAGEGEN_EXECUTOR_INTEGRATION_R2R1B**
> Formal Part 2 / Part 3 / Part 4 / Part 4.5 / SKILL changes: **NONE**

## 1. Evidence identity

Reviewed Owner-provided package:
- `_imagegen-result-capture-r2r1a.zip`
- SHA-256: `483c45c8284bb883cd86abc66b98b2a1f21da0facf68efd1e6f98afb7db3f7a7`

Fresh readback inspected:
- `PREFLIGHT_EVIDENCE_R2R1A.md`
- `IMAGEGEN_RESULT_SCHEMA.md`
- `RAW_IMAGEGEN_RESULT.json`
- `LEGACY_ADAPTER_REPLAY.js`
- `LEGACY_ADAPTER_REPLAY.json`
- `RAW_CAPTURE_CALLSITE.js`
- `Write-RawCaptureFromStdin.ps1`

Key file hashes:
- `RAW_IMAGEGEN_RESULT.json`: `a25b419e412475d0be75cbf0f0c58c071babc90c54a7784f62ec148a7897dfb2`
- `LEGACY_ADAPTER_REPLAY.json`: `bcc9d4884f5c79e38fb4d833e8268840d0b35023a916e74700d9de2ecbc21d27`
- `RAW_CAPTURE_CALLSITE.js`: `c00e85e42745f2a643781f277b6265b39cc24530979fbe1858c00835d6b01db1`

## 2. Fresh readback facts

The captured JavaScript result is a JSON object with exactly two top-level fields:
- `image_url`
- `output_hint`

`image_url` is a `data:image/png;base64,...` URI.

Reviewer independently decoded the payload:
- decoded bytes: `923749`
- PNG signature: valid
- decoded payload SHA-256: `bf622d490194e90f4587b4d90869e6f5d4c792d6b52f7e6e2471cfcf44f3ff5d`

`output_hint` is a 526-character descriptive string. It contains a human-readable saved-path description but is **not** accepted as the machine asset contract for the next adapter.

The recorded legacy projection keeps only:
- `structuredContent`
- text-only `content`

Neither field exists in the captured raw result. The deterministic JavaScript replay therefore confirms that the old projection drops both actual top-level result fields, including `image_url`.

## 3. Reviewer judgment

R2R1A satisfies its diagnostic objective: the evidence deadlock is resolved and the actual result shape needed to build the production-shaped adapter fixture is now known.

The disclosed caveat does not block this Gate:
- the original invocation durably serialized the raw object before projection;
- orchestration stopped before the legacy projection completed in the same in-memory call;
- the legacy projection was replayed later against the fresh-readback raw JSON.

For this Gate, the required fact is the raw pre-adapter object shape. That fact is directly reviewable from the preserved JSON, and the legacy projection is deterministic enough to establish which fields it discards.

Therefore formal Reviewer decision: **PASS**.

## 4. Evidence-quality notes

Non-blocking documentation defects were found:
- `PREFLIGHT_EVIDENCE_R2R1A.md` / `IMAGEGEN_RESULT_SCHEMA.md` contain unexpanded placeholders such as `$rawPath`, `$rawHash`, `$rawUtc`;
- several rendered hash / commit strings contain control-character corruption.

These do not block PASS because the underlying raw files were present and Reviewer recomputed the required hashes independently. They must not be copied forward as canonical evidence values.

## 5. Specialist-trigger reconciliation

Automation / Authentication trigger was treated as applicable because this Gate made a real automated image-generation call.

The Gate remained bounded:
- one instrumentation call only;
- no content retry;
- no canary batch;
- no H019 continuation;
- execution stopped at Reviewer.

No production/business mutation or auth/session change was performed.

# NEXT GATE — IMAGEGEN_EXECUTOR_INTEGRATION_R2R1B

## GATE_ID

`IMAGEGEN_EXECUTOR_INTEGRATION_R2R1B`

## OBJECTIVE

Repair and validate the real imagegen-result adapter and concurrent event logger, then prove the repaired integration with exactly two independent live canary attempts.

## MAX_ENDPOINT_THIS_ROUND

Maximum endpoint:
- no-image integration preflight PASS;
- C-VB01 attempt 1 + C-VB02 attempt 1 only;
- concurrency = 2;
- both reach durable save + hash + QA;
- fresh readback;
- mandatory stop at Reviewer.

No retries and no remaining four Beats.

## MANDATORY_REVIEW_STOP

`YES`

## TARGET_AND_SCOPE

Allowed:
1. repair the actual JavaScript result adapter;
2. repair / unify the runtime JSONL append path;
3. local no-image adapter/log/scheduler preflight;
4. exactly two live canary generations;
5. evidence output under a new R2R1B directory.

Not allowed:
- modify formal Part 2 / Part 3 / Part 4 / Part 4.5 / SKILL;
- modify R1 / R2 / R2R1 / R2R1A evidence;
- concurrency 3;
- content retries;
- remaining four Beats;
- H019 full rerun.

## ACCEPTED_FACTS_EXECUTOR_MAY_RELY_ON

- canonical Reviewer accepted R2R1A raw shape;
- raw top-level fields are `image_url` and `output_hint`;
- `image_url` is the direct machine asset payload and is a PNG data URI in the accepted capture;
- `output_hint` is opaque metadata and must not be parsed to discover a file path;
- legacy projection that keeps only `structuredContent` / text `content` is invalid for this result shape;
- accepted decoded fixture payload hash is `bf622d490194e90f4587b4d90869e6f5d4c792d6b52f7e6e2471cfcf44f3ff5d`.

## PREFLIGHT

### Adapter
Use the preserved R2R1A raw JSON as the production-shaped fixture and run it through the **same repaired JavaScript adapter path** that live canary results will use.

The adapter must:
1. require a supported `data:image/...;base64,` `image_url`;
2. decode the payload directly;
3. validate the image payload before accepting it;
4. write to the requested destination;
5. verify destination existence;
6. compute SHA-256 from the saved bytes;
7. preserve `output_hint` only as opaque metadata;
8. never infer a source path from `output_hint` or other natural-language text.

Fixture acceptance:
- output file is a valid PNG;
- saved bytes hash equals `bf622d490194e90f4587b4d90869e6f5d4c792d6b52f7e6e2471cfcf44f3ff5d`.

### Event logging
All runtime writers must use one append API.

Within the same cross-process critical section:
`allocate sequence → append event → flush`.

Stress-test the exact runtime append path used by the live canary. No duplicate sequence, no missing sequence caused by concurrent writers, every line parseable.

### Scheduler
Dry-run state machine must prove:
- max generation concurrency = 2;
- QA work does not occupy an unrelated generation slot;
- same-Beat retry cannot start before its QA decision;
- retry is disabled in this Gate.

Any preflight failure -> `RETURN_IMPLEMENTATION_DRIFT` and STOP before imagegen.

## LIVE CANARY

Only after full preflight PASS:
- C-VB01 attempt 1
- C-VB02 attempt 1
- concurrency = 2
- no attempt 2 under any content outcome.

For each live result:
`raw result → repaired adapter → automatic save → hash → QA queue → QA → task end`.

Content QA may PASS or FAIL; either is acceptable for this integration Gate.

## REQUIRED_EVIDENCE

At minimum:
- `PREFLIGHT_EVIDENCE_R2R1B.md`
- repaired adapter source / diff
- runtime append implementation / diff
- `RUN_EVENTS.jsonl`
- `RUN_RECORD.json`
- `IMAGEGEN_EXECUTOR_INTEGRATION_R2R1B.md`
- `IMAGEGEN_EXECUTOR_INTEGRATION_R2R1B.csv`
- exactly two canary image files
- image SHA-256 values
- QA results
- fresh-readback summary

Do not persist full base64 data URIs into ordinary event logs; record only bounded metadata / hashes needed for evidence.

## ACCEPTANCE_CRITERIA

PASS_CANDIDATE requires all:
1. preflight uses the repaired **live adapter path**, not a parallel helper;
2. R2R1A fixture decodes/saves to exactly the accepted payload hash;
3. runtime logging stress passes on the exact live append path;
4. exactly two canary image calls, no content retries;
5. 2/2 returned results are automatically saved with no manual cache recovery;
6. 2/2 have verified file hashes and no unmanifested duplicate outputs;
7. 2/2 reach QA;
8. required timing chain exists for both: T0/T1/T2/T4/T5/QA_QUEUED/QA_START/QA_END/TASK_END; T3 may be `UNOBSERVABLE`;
9. event sequences are unique and reconstructable with no concurrency-write loss;
10. fresh readback matches files, hashes, logs and summary;
11. no unauthorized scope expansion.

## ROLLBACK_STATUS_OR_PLAN

Local executor/harness changes must be isolated to the R2R1B work area or otherwise have a recorded pre-change copy/diff so they can be reverted without touching earlier evidence. No production rollback is expected because no production runtime is modified.

## OWNER_ONLY_ACTIONS

`NONE`

## REVIEWER_TO_EXECUTOR_RELAY

Read only:
1. current `comic-narrative/HANDOFF.md` status;
2. this Reviewer decision;
3. R2R1A `RAW_IMAGEGEN_RESULT.json`;
4. the current adapter / logger source actually used by the canary;
5. the two existing Beat tasks C-VB01 / C-VB02 needed for canary execution.

Do not reread broad Governance or project history.

## EXECUTOR_TO_REVIEWER_RELAY

Use the standard short packet:
- 结果
- 改动
- 验证
- 问题
- 回滚
- 请 Reviewer 检查
- Owner 转交

Executor may return only:
- `PASS_CANDIDATE_EXECUTOR_INTEGRATION_R2R1B`
- `RETURN_IMPLEMENTATION_DRIFT`
- `RETURN_TEST_FAILURE`

`PASS_CANDIDATE != PASS`.

STOP_AT_REVIEWER=YES.
