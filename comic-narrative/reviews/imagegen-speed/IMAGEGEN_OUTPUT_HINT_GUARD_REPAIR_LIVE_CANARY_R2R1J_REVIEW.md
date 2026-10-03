# IMAGEGEN_OUTPUT_HINT_GUARD_REPAIR_LIVE_CANARY_R2R1J — Reviewer Decision

> Date: 2026-10-03  
> Governance: `vps-project-governance/VNEXT.md` v0.2.6 @ `de2b38ec0e7f3ecceb1aeffa3fc7f033ed14429a`  
> Reviewer verdict: **PASS**  
> Next Gate: **IMAGEGEN_OUTPUT_SIZE_CONTRACT_RECONCILIATION_R2R1K**  
> Formal Part 2 / Part 3 / Part 4 / Part 4.5 / SKILL changes: **NONE**

## Evidence identity

- Package: `_imagegen-output-hint-guard-repair-live-canary-r2r1j.zip`
- Reviewer-computed SHA-256: `760fe40a9debd990bde48bf9f673a37457f7367cc90be51986862f0816dcd5b4`
- Freshly inspected: preflight report, main execution report, QA report, `RUN_EVENTS.jsonl`, `RUN_RECORD.json`, fresh readback JSON, receiver/parser/runtime sources, and copied PNG.

## Verified facts

### Guard repair / preflight

- R2R1A positive fixture passed through the **final receiver entry point**.
- Positive fixture PNG: 923,749 bytes; SHA-256 `bf622d490194e90f4587b4d90869e6f5d4c792d6b52f7e6e2471cfcf44f3ff5d`; source/copy hashes match.
- Five R2R1H negative path-policy cases failed closed with no copy.
- CR/LF wrapper reached the strict parser and was accepted.
- >1024-char wrapper reached the strict parser and was accepted at length 1500.
- Receiver source now uses `MAX_HINT_CHARS=65536` as a resource ceiling, does not reject CR/LF before parsing, and invokes the strict parser for path/pattern semantics.
- The accepted prior R2R1I review identified the old drift as the pre-parser `length > 1024 OR CR/LF` guard. Current source + end-to-end wrappers prove the required bounded repair is now active.

### Live canary

- Exactly one imagegen call ran: `C-VB01 attempt 1`.
- Retries: 0.
- No C-VB02, no other Beat, no concurrency 3, no H019 rerun.
- Runtime-decoded PNG: 2,116,439 bytes; SHA-256 `a15eb872f24f29edcdbef9bf645cfe0b835ead19663f6517f5a92538bd3811e1`.
- Live bounded hint diagnostics:
  - length: 526
  - SHA-256: `3edf1fa025ee8e47d07ecdf73cea062642507e29a166d703bdd4b9d128ed8e04`
  - CR: false
  - LF: true
  - PNG path candidates: 1
- Strict parser result: `ACCEPTED`.
- Hinted local source SHA-256 equals runtime decoded-image SHA-256.
- Automatic copied destination SHA-256 equals the same SHA.
- Reviewer independently recomputed the copied PNG SHA-256 and confirmed dimensions **1672×941**.
- Receiver/save duration was ~1.415s; the previous multi-minute bulk-TTY bridge was not used.
- `RUN_EVENTS.jsonl`: 52 records, sequence 1–52 contiguous.
- Fresh readback: PASS; imagegen_calls=1; retries=0; parser accepted; hashes matched; QA reached.
- Ordinary event log contains no `data:image...` payload / full base64 image value.

## QA adjudication

The copied image did reach QA as required by this Gate.

Reviewer independently inspected the PNG and agrees with the two recorded QA failures:

1. **scene_and_story: FAIL** — the image shows the protagonist using a phone in a warm indoor nighttime scene, but the viewer cannot tell that the activity is hotel search / weekend hotel booking.
2. **output_spec: FAIL** — actual raster is 1672×941, while the current C-VB01 task input records 1920×1080.

These QA failures do **not** invalidate R2R1J itself:

- R2R1J acceptance requires that the copied image **reaches QA**; it does not require content QA PASS.
- The accepted R2R1H decision already separated content QA from the live fast-path integration result.
- R2R1J explicitly forbade retry, and Executor correctly did not retry.

Therefore:

- **R2R1J integration Gate = PASS.**
- **C-VB01 produced image = NOT ACCEPTED AS FINAL PRODUCTION ASSET.**
- The hotel-search miss remains a content/task-output issue for a later content-capable Gate.
- The 1672×941 vs 1920×1080 issue remains a contract/delivery issue and must be reconciled before more broad live testing.

## Evidence-quality note

The package contains the repaired receiver source but not a standalone before/after diff. This does not block this Gate because the accepted R2R1I Reviewer record pins the exact old guard behavior, while current source plus positive/negative/wrapper/live end-to-end evidence proves the bounded repair and parser authority. Future implementation-change packages should still prefer an explicit source hash/diff when practical.

## Reviewer judgment

All declared R2R1J integration acceptance criteria are satisfied.

Formal decision: **PASS**.

This proves a fresh imagegen result can use the optional verified `output_hint` local-cache path to:

`live result hash → bounded metadata/hint → strict parser → in-root PNG → hash equality → local copy → QA`

without moving the multi-megabyte base64 payload through the slow TTY bridge.

It does not accept the resulting C-VB01 frame for production content, and it does not authorize the full six-Beat test.

The output-size mismatch has now repeated across accepted live evidence and should be reconciled before spending more imagegen calls.

# NEXT GATE — IMAGEGEN_OUTPUT_SIZE_CONTRACT_RECONCILIATION_R2R1K

## GATE_ID

`IMAGEGEN_OUTPUT_SIZE_CONTRACT_RECONCILIATION_R2R1K`

## OBJECTIVE

Resolve the repeated 1672×941 native image output versus the current `1920×1080 final delivery target` / C-VB01 task requirement, and determine the correct ownership and semantics of native generation size versus final delivery size before any further live imagegen testing.

## MAX_ENDPOINT_THIS_ROUND

1. `IMAGEGEN_CALLS=0`.
2. Identify the exact C-VB01 task input used by R2R1J and the exact compiler/source that emitted its 1920×1080 requirement.
3. Fresh-read current Part 4 §25 and the relevant task/output contract.
4. Compare accepted observed outputs from R2R1F and R2R1J.
5. Classify whether 1920×1080 is:
   - a native generation hard requirement;
   - a final-delivery target only;
   - or genuinely unresolved.
6. If implementation drift is proven and the correction is purely execution-contract/compiler semantics, allow **one bounded implementation repair** that does not change Part 4 policy.
7. Run no-image fixture/regression checks using preserved outputs.
8. Fresh readback.
9. STOP at Reviewer.

## TARGET_AND_SCOPE

Primary sources:

- `comic-narrative/part4/IMAGE_ASSET_EXECUTION.md` §25;
- exact current C-VB01 locked task input;
- exact task compiler/schema/source that generated the size requirement;
- R2R1F accepted evidence for 1672×941 native outputs;
- R2R1J evidence and copied PNG.

Do not reconstruct the task contract from memory. If exact task input/compiler provenance cannot be proven, return `RETURN_IMPLEMENTATION_DRIFT`.

## APPLICABLE_CRITICAL_CONSTRAINTS

- No imagegen.
- No content retry for C-VB01.
- Do not modify Part 2 / Part 3 / Part 4 / Part 4.5 / SKILL formal rules in this Gate.
- Do not silently reinterpret `1920×1080 final delivery target` as a native model-output guarantee without evidence.
- Do not declare 1672×941 a final-delivery PASS merely because its aspect ratio is close to 16:9.
- Do not invent a minimum native resolution or upscaling rule that is absent from the accepted contract.
- Do not address the hotel-search content miss in this Gate.
- No two-concurrent live canary and no six-Beat test until this Gate is reviewed.

## PREFLIGHT

Before any implementation repair:

1. prove the exact C-VB01 task input path/content/hash;
2. prove the exact compiler/schema/source that created the 1920×1080 field;
3. fresh-read Part 4 §25;
4. prove the observed 1672×941 result from R2R1J via preserved PNG/hash;
5. identify at least the prior accepted R2R1F observation showing the same size class;
6. classify the mismatch source before editing anything.

If the formal rule itself is ambiguous and resolving it would require a Part 4 policy change, do not patch around it; return `RETURN_EXECUTION_CONTRACT_UNRESOLVED` / Owner-review boundary as appropriate.

## REQUIRED EVIDENCE

- `IMAGEGEN_OUTPUT_SIZE_CONTRACT_RECONCILIATION_R2R1K.md`
- exact C-VB01 task input pointer/hash
- exact task compiler/schema/source pointer/hash
- Part 4 §25 fresh-read pointer
- observed-size evidence matrix covering at least R2R1F + R2R1J
- before/after implementation diff if a bounded compiler/task-contract repair occurs
- no-image regression results
- fresh-readback summary
- `IMAGEGEN_CALLS=0`

The reconciliation matrix must distinguish:

`FORMAL_FINAL_DELIVERY_TARGET | TASK_NATIVE_REQUIREMENT | OBSERVED_NATIVE_SIZE | SOURCE_ACCEPTANCE_STATUS | FINAL_DELIVERY_STATUS`.

## ACCEPTANCE_CRITERIA

PASS_CANDIDATE requires:

- exact source/provenance of the 1920×1080 requirement is proven;
- Part 4 §25 meaning is explicitly reconciled with the task/compiler behavior;
- native-generation size and final-delivery size are no longer conflated;
- any bounded implementation repair stays inside the existing formal policy;
- preserved evidence is not rewritten;
- no imagegen occurs;
- no content retry occurs;
- fresh readback matches the recorded state.

Allowed final states:

- `PASS_CANDIDATE_OUTPUT_SIZE_CONTRACT_RECONCILED_R2R1K`
- `RETURN_IMPLEMENTATION_DRIFT`
- `RETURN_EXECUTION_CONTRACT_UNRESOLVED`
- `RETURN_OWNER_ACTION_REQUIRED`

## ROLLBACK_STATUS_OR_PLAN

If a compiler/task-contract implementation patch is made:

- preserve pre-change source/hash;
- one bounded patch only;
- fixture regression must pass before candidate completion;
- restore the pre-change source if the patch creates ambiguity or invalidates existing task semantics.

No formal Part 4 policy file changes are authorized.

## OWNER_ONLY_ACTIONS

`NONE` unless the diagnosis proves a formal Part 4 policy decision/change is required. In that case STOP and return the smallest exact Owner decision needed.

## REVIEWER_TO_EXECUTOR_RELAY

Read only:

1. current `comic-narrative/REVIEWER_HANDOFF.md` CURRENT_GATE;
2. this R2R1J Reviewer decision;
3. `comic-narrative/part4/IMAGE_ASSET_EXECUTION.md` §25;
4. accepted R2R1F Reviewer evidence;
5. R2R1J evidence package;
6. the exact current C-VB01 task input and its compiler/schema/source.

Do not read broad history. Do not call imagegen. Do not modify content prompts or Part 4 formal rules.

## EXECUTOR_TO_REVIEWER_RELAY

```text
结果：PASS_CANDIDATE_OUTPUT_SIZE_CONTRACT_RECONCILED_R2R1K / RETURN_*
改动：NONE，或一句话说明 bounded task/compiler contract repair。
验证：一句话说明 1920×1080 来源、Part 4 §25 解释、R2R1F/R2R1J observed size、no-image regression。
问题：NONE，或说明是否需要 formal Part 4 / Owner decision。
回滚：说明 pre-change source/hash 与恢复状态。
请 Reviewer 检查：核对 contract classification、repair boundary、IMAGEGEN_CALLS=0、fresh readback。
Owner 转交：NONE，或最小必要决策。
```

STOP_AT_REVIEWER=YES.
