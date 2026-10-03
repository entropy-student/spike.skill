# IMAGEGEN_OUTPUT_HINT_LOCAL_CACHE_LIVE_CANARY_R2R1I — Reviewer Decision

> Date: 2026-10-03
> Governance: `vps-project-governance/VNEXT.md` v0.2.6 @ `de2b38ec0e7f3ecceb1aeffa3fc7f033ed14429a`
> Reviewer verdict: **RETURN_IMPLEMENTATION_DRIFT**
> Next Gate: **IMAGEGEN_OUTPUT_HINT_GUARD_REPAIR_LIVE_CANARY_R2R1J**
> Formal Part 2 / Part 3 / Part 4 / Part 4.5 / SKILL changes: **NONE**

## Evidence identity

- Package: `_imagegen-output-hint-local-cache-live-canary-r2r1i.zip`
- Reviewer-computed SHA-256: `913980defd2ef0b93a3ac5601c9d752afc4948fdc02774168a1f4cae7f0421aa`
- Reviewed: execution report, preflight report, RUN_RECORD, QA report, live receiver source, runtime data-URI/hash helper, strict parser source.

## Verified facts

- Preflight reported PASS before imagegen.
- Exactly one imagegen call ran: `C-VB01 attempt 1`; retries = 0.
- The returned PNG was decoded and hashed in the return runtime without sending base64 through TTY.
- Runtime decoded bytes: 2,151,682.
- Runtime PNG SHA-256: `c3ff84ff7cce4ea7fb72e390bb9777951318a11852a576cd06047e646960f929`.
- `output_hint` was a string.
- The local receiver rejected the hint before `parseHint()` because line 15 imposed an extra guard: `length > 1024 OR CR/LF present`.
- The run did not record which branch fired, and did not persist the hint, so the live hint cannot now be reclassified as parser-valid or parser-invalid.
- No local source path was resolved; no copy; no QA; no retry; no bulk-TTY fallback.
- The delivered ZIP does not contain the Gate-required `RUN_EVENTS.jsonl` or fresh-readback summary, so independent reconstruction of the event chain is incomplete.

## Reviewer judgment

Executor classification `RETURN_IMPLEMENTATION_DRIFT` is accepted.

The active fault is not the R2R1H strict parser. It is an **extra pre-parser guard introduced by the R2R1I receiver that is stricter than the reviewed parser contract and was not exercised end-to-end by preflight**.

R2R1I preflight validated the parser and data-URI helper separately, but did not prove the exact final receiver path would accept the preserved positive sample through the same guard used for live metadata. That is the preflight gap to repair.

The next Gate may make one bounded implementation repair: keep metadata bounded, but remove the unsupported CR/LF rejection and make the reviewed strict parser the authority for path/pattern acceptance. The receiver must also record bounded diagnostics sufficient to identify future rejection causes without logging the full hint.

# NEXT GATE — IMAGEGEN_OUTPUT_HINT_GUARD_REPAIR_LIVE_CANARY_R2R1J

## OBJECTIVE

Repair the unreviewed pre-parser guard, prove the exact final receiver path with no-image fixtures, then run exactly one fresh live canary to determine whether the reviewed strict parser can accept and verify a current `output_hint`.

## MAX_ENDPOINT_THIS_ROUND

1. Apply one bounded receiver-guard repair.
2. Run exact no-image end-to-end receiver preflight.
3. Only after preflight PASS, call imagegen exactly once for `C-VB01 attempt 1`.
4. Attempt strict path verification, local hash equality, copy, QA.
5. Fresh readback.
6. STOP at Reviewer.

## REQUIRED REPAIR

- Remove the blanket CR/LF rejection before `parseHint()`.
- Replace the 1,024-character gate with a documented generous metadata-size ceiling used only as a transport/resource bound, not as path semantics. Record the chosen ceiling in evidence.
- Do not add any new path-pattern rules outside the existing R2R1H strict parser.
- Before parser invocation record only bounded diagnostics: hint length, hint SHA-256, `has_cr`, `has_lf`, PNG-path-candidate count if cheaply available, and final parser result/error code.
- Do not place the full hint or base64 in ordinary logs.

## PREFLIGHT

Before imagegen:
1. Run the preserved R2R1A positive sample through the **exact final R2R1J receiver entry point**, not parser/helper in isolation.
2. Require successful strict parse, source hash verification, copy, and destination hash verification.
3. Re-run the five R2R1H negative path-policy cases through that same receiver entry point; all must fail closed.
4. Add two bounded synthetic wrapper cases that preserve one valid known hint/path but contain harmless trailing CR/LF text and total hint length >1024 but below the new resource ceiling; these must reach the strict parser rather than being rejected by a pre-parser semantic guard. Their final accept/reject result is determined only by the existing parser contract.
5. Verify logs contain no full hint/base64.
6. Verify `RUN_EVENTS.jsonl`, `RUN_RECORD.json`, and fresh-readback output are being produced before authorizing imagegen.

Any preflight failure -> `RETURN_IMPLEMENTATION_DRIFT`, `IMAGEGEN_CALLS=0`, STOP.

## LIVE CANARY

Only after preflight PASS:
- exactly one call: `C-VB01 attempt 1`;
- no retry and no C-VB02.

On return:
1. compute decoded PNG byte count + SHA-256 in the return runtime;
2. send only bounded metadata + `output_hint`, never base64;
3. invoke the exact reviewed R2R1H strict parser;
4. if parser rejects, record bounded diagnostics + exact parser error code and fail closed;
5. if parser accepts, verify regular in-root PNG, compare source SHA with runtime SHA, copy, verify destination SHA, run QA;
6. no TTY bulk fallback and no replay imagegen under any failure.

## REQUIRED EVIDENCE

- `PREFLIGHT_EVIDENCE_R2R1J.md`
- `RUN_EVENTS.jsonl`
- `RUN_RECORD.json`
- `IMAGEGEN_OUTPUT_HINT_GUARD_REPAIR_LIVE_CANARY_R2R1J.md`
- receiver source/diff showing the single bounded guard repair
- bounded hint diagnostics without full hint
- parser result/error code
- source/destination hashes if path accepted
- QA result if copy succeeds
- fresh-readback summary.

## ACCEPTANCE CRITERIA

PASS_CANDIDATE requires: exact final receiver preflight PASS; exactly one live imagegen call; no retry; no bulk TTY; live hint reaches the strict parser; exactly one in-root PNG path is accepted; hinted-file SHA equals runtime decoded-image SHA; automatic copy preserves SHA; copied file reaches QA; reconstructable event log; fresh readback matches evidence.

If the live hint reaches the strict parser and is rejected by the parser itself, return `RETURN_TEST_FAILURE` with the exact parser code. Do not broaden the parser in the same round.

Allowed final states:
- `PASS_CANDIDATE_OUTPUT_HINT_GUARD_REPAIR_LIVE_R2R1J`
- `RETURN_TEST_FAILURE`
- `RETURN_IMPLEMENTATION_DRIFT`

## OWNER_ONLY_ACTIONS

`NONE`

## REVIEWER_TO_EXECUTOR_RELAY

Read only: current `comic-narrative/HANDOFF.md`; this Reviewer decision; R2R1H strict parser/tests; R2R1I receiver source/report; C-VB01 task input. Do not read broad history or scan generated-images.

STOP_AT_REVIEWER=YES.