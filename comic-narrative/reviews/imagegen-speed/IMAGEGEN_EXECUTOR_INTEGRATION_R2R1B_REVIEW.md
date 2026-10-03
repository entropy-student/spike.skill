# IMAGEGEN_EXECUTOR_INTEGRATION_R2R1B — Reviewer Decision

> Date: 2026-10-03
> Governance: `vps-project-governance/VNEXT.md` v0.2.6 @ `de2b38ec0e7f3ecceb1aeffa3fc7f033ed14429a`
> Reviewer verdict: **RETURN_TEST_FAILURE**
> Next Gate: **IMAGEGEN_LARGE_PAYLOAD_TRANSPORT_DIAGNOSTIC_R2R1C**
> Formal Part 2 / Part 3 / Part 4 / Part 4.5 / SKILL changes: **NONE**

## 1. Evidence identity

Reviewed Owner-provided package:
- `_imagegen-executor-integration-r2r1b-evidence.zip`
- SHA-256: `f463c97d2e6123f38c6dbbabde87076adad36946dd121aef4442c3dcd118027d`

Fresh readback inspected:
- `PREFLIGHT_EVIDENCE_R2R1B.md`
- `IMAGEGEN_EXECUTOR_INTEGRATION_R2R1B.md`
- `RUN_EVENTS.jsonl`
- `RUN_RECORD.json`
- `IMAGEGEN_EXECUTOR_INTEGRATION_R2R1B.csv`
- `ASSET_OUTPUT_MANIFEST.json`
- `source/R2R1B_RUNTIME.js`
- preflight adapter/log artifacts.

Key fresh hashes:
- runtime JS: `185df7a85ade87d9ecf39e347c0b5dc1ac7bc1fdf4d586ae1af8a0fe3d0385e1`
- RUN_EVENTS: `510fda927591453faa1e74fa3f9c35525ab5bdd570b9d14260e7e8fe6b1a74e8`
- RUN_RECORD: `25cc6cc2b112059eaa5d42c4d5775fecca206f74f2c48b43aa74e1a0de9c0e61`

## 2. Verified facts

Preflight genuinely passed before image generation:
- accepted R2R1A full-size fixture decoded through `adaptAndSaveImage` to the expected payload SHA-256 `bf622d490194e90f4587b4d90869e6f5d4c792d6b52f7e6e2471cfcf44f3ff5d`;
- exact runtime append API passed 32-process stress with contiguous unique sequences;
- scheduler dry-run kept generation concurrency at 2 and retry disabled;
- small-payload receiver smoke passed through both receiver modes.

Live canary stayed inside the Gate:
- exactly two imagegen calls: C-VB01 attempt 1 and C-VB02 attempt 1;
- both submitted at concurrency 2;
- both returned the accepted `image_url` / `output_hint` shape;
- C-VB01 T2→T4 = 69.886 s;
- C-VB02 T2→T4 = 136.175 s;
- no attempt 2, no remaining four Beats, no H019 continuation.

Failure:
- both full-size raw-result transfers into the live local receiver failed to complete;
- neither destination PNG exists;
- no destination hash exists;
- QA was never reached;
- no manual cache recovery or imagegen replay was performed.

Logging evidence is internally consistent:
- 16 parseable events;
- sequence 1–16 unique and contiguous;
- two explicit PIPELINE_FAILURE records followed by QA_NOT_REACHED and TASK_END;
- manifest reports 0 canary PNGs and no unmanifested PNG.

## 3. Reviewer judgment

The Executor's `RETURN_TEST_FAILURE` classification is accepted.

This Gate did not fail because of image content, Part 3/4 rules, or the already-repaired JSONL logger.

The newly isolated fault domain is:

> **full-size raw imagegen result transport from the orchestration/tool-return context into the local JavaScript adapter receiver.**

The adapter itself works on a full-size file fixture, while only small receiver payloads were exercised during preflight. Therefore the preflight did not prove the actual large-payload transport boundary used by the live canary.

Because automatic-save failures have now repeated across multiple rounds, Governance §6 requires a bounded diagnostic probe rather than another speculative live-image retry.

Formal decision: **RETURN_TEST_FAILURE**.

# NEXT GATE — IMAGEGEN_LARGE_PAYLOAD_TRANSPORT_DIAGNOSTIC_R2R1C

## GATE_ID

`IMAGEGEN_LARGE_PAYLOAD_TRANSPORT_DIAGNOSTIC_R2R1C`

## OBJECTIVE

Diagnose and, if possible within the same bounded transport fault domain, prove a reliable full-size result handoff into the real adapter **without calling imagegen**.

## MAX_ENDPOINT_THIS_ROUND

Maximum endpoint:
- reproduce the live transport using the preserved 1,232,262-byte R2R1A raw JSON fixture;
- identify whether failure is size, framing, concurrency, timeout/session handling, or sender/receiver completion;
- if a bounded transport repair is implemented, prove it locally with the same full-size fixture under both single-transfer and two-concurrent-transfer conditions;
- fresh readback;
- STOP at Reviewer.

No imagegen call is authorized.

## MANDATORY_REVIEW_STOP

`YES`

## TARGET_AND_SCOPE

Allowed:
- R2R1C-only diagnostic/temporary adapter transport code;
- local receiver/sender instrumentation;
- temporary diagnostic files;
- exact R2R1A raw fixture;
- current R2R1B adapter logic;
- one transport implementation repair inside this fault domain if evidence directly supports it.

Not allowed:
- any imagegen call;
- content QA;
- H019 work;
- concurrency=3;
- formal Part 2/3/4/4.5/SKILL changes;
- modification of prior R1/R2/R2R1/R2R1A/R2R1B evidence.

## ACCEPTED_FACTS_EXECUTOR_MAY_RELY_ON

- adapter logic correctly decodes/saves the R2R1A file fixture;
- logger is no longer the active failure domain;
- live imagegen returns `image_url` as a large PNG data URI;
- R2R1B failed after T4 while transporting the full raw result through the terminal/input bridge;
- R2R1B small receiver smoke is insufficient to prove full-size transport.

## PREFLIGHT

Before diagnostic execution:
1. copy/reference the exact R2R1A raw fixture and record byte count + SHA-256;
2. use the R2R1B `adaptAndSaveImage` logic or a byte-identical reviewed derivative;
3. instrument sender and receiver with bounded metadata only:
   - expected bytes;
   - bytes sent / acknowledged where observable;
   - bytes received;
   - transfer start/end;
   - exit code;
   - receiver completion state;
   - transport duration;
4. never put the full base64 payload into ordinary logs.

## DIAGNOSTIC SEQUENCE

### Test A — single full-size replay

Send the exact preserved R2R1A raw JSON through the **same transport boundary used by R2R1B live canary**, not `--save-fixture`.

Expected:
- receiver completes;
- exact input byte count is proven;
- PNG is saved;
- PNG SHA-256 equals `bf622d490194e90f4587b4d90869e6f5d4c792d6b52f7e6e2471cfcf44f3ff5d`;
- session exits cleanly.

If it fails, capture the exact sender/receiver byte state and completion/timeout state before any repair.

### Test B — two-concurrent full-size replay

Run only if Test A passes.

Run two independent receiver transfers concurrently using the same exact fixture and same transport path.

Expected:
- 2/2 complete automatically;
- 2/2 destination files exist;
- 2/2 hashes equal the accepted fixture payload hash;
- no cross-stream corruption;
- both sessions exit cleanly.

### Bounded repair

If A or B reproduces the failure, Executor may implement one evidence-driven transport repair within this Gate, for example explicit chunk/framing/acknowledgement or another non-interactive local transport path that does not depend on natural-language path parsing.

After repair, rerun A and B once.

Do not cycle through multiple speculative architectures. If one bounded repair does not establish reliable transfer, RETURN to Reviewer.

## REQUIRED_EVIDENCE

At minimum:
- `PREFLIGHT_EVIDENCE_R2R1C.md`
- `TRANSPORT_DIAGNOSTIC_R2R1C.md`
- sender/receiver diagnostic source or diff;
- exact fixture identity/hash;
- Test A result;
- Test B result when A passes;
- repair diff/result if used;
- produced diagnostic PNG hashes;
- bounded event/transport log;
- fresh-readback summary.

## ACCEPTANCE_CRITERIA

PASS_CANDIDATE requires:
1. zero imagegen calls;
2. same full-size fixture traverses the actual proposed production transport, not a file-only shortcut;
3. single transfer completes with exact byte accounting and expected PNG hash;
4. two concurrent transfers complete with no cross-stream loss/corruption and expected hashes;
5. sender and receiver both reach a clean terminal state;
6. no manual intervention is needed after transfer start;
7. no full base64 payload is copied into ordinary logs;
8. fresh readback matches files, hashes and diagnostic records.

## ROLLBACK_STATUS_OR_PLAN

All changes remain local to the new R2R1C diagnostic area or are captured as an isolated diff. Prior evidence remains immutable. Diagnostic files may be removed after Reviewer acceptance; no production rollback is involved.

## OWNER_ONLY_ACTIONS

`NONE`

## REVIEWER_TO_EXECUTOR_RELAY

Read only:
1. current `comic-narrative/HANDOFF.md`;
2. this R2R1B Reviewer decision;
3. R2R1A `RAW_IMAGEGEN_RESULT.json`;
4. R2R1B `source/R2R1B_RUNTIME.js`;
5. R2R1B report/events needed to reproduce the transfer failure.

Do not reread broad project history.

## EXECUTOR_TO_REVIEWER_RELAY

Use the standard completion packet.

Allowed final states:
- `PASS_CANDIDATE_IMAGEGEN_TRANSPORT_R2R1C`
- `RETURN_TEST_FAILURE`
- `RETURN_IMPLEMENTATION_DRIFT`

STOP_AT_REVIEWER=YES.

A R2R1C PASS does **not** authorize the full six-Beat test. Reviewer must first decide whether to rerun the two-image integration canary with the proven transport.
