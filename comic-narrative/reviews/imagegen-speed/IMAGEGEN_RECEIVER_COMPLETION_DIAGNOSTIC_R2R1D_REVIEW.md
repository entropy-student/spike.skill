# IMAGEGEN_RECEIVER_COMPLETION_DIAGNOSTIC_R2R1D — Reviewer Decision

> Date: 2026-10-03
> Governance: `vps-project-governance/VNEXT.md` v0.2.6 @ `de2b38ec0e7f3ecceb1aeffa3fc7f033ed14429a`
> Reviewer verdict: **PASS**
> Next Gate: **IMAGEGEN_EXECUTOR_INTEGRATION_CANARY_R2R1E**
> Formal Part 2 / Part 3 / Part 4 / Part 4.5 / SKILL changes: **NONE**

## 1. Evidence identity

Reviewed Owner-provided package:
- `_imagegen-receiver-completion-diagnostic-r2r1d.zip`
- Reviewer-computed SHA-256: `06fd29dd27aff99eb65e71ac7d33ac12ccd382204c65ef7b2adf828cd6199438`

Fresh readback inspected:
- `PREFLIGHT_EVIDENCE_R2R1D.md`
- `RECEIVER_COMPLETION_DIAGNOSTIC_R2R1D.md`
- `RUN_EVENTS.jsonl`
- `FRESH_READBACK_R2R1D.json`
- `SOURCE_MANIFEST.json`
- `TRANSPORT_ASSET_MANIFEST.json`
- Test A / Test B receiver reports
- Test A sender report
- all phase traces
- baseline and instrumented sender/receiver source.

## 2. Directly verified facts

- `IMAGEGEN_CALLS=0`.
- No completion-path repair was made.
- R2R1D sender protocol is byte-identical to the retained R2R1C one-shot sender:
  - SHA-256 `0d888c4da5cede12472cefff0c40e80d4d513aa3845e892c617c420fa1921bdb`.
- R2R1D receiver added diagnostic phase tracing / exception capture but retained the one-shot transport and completion ordering.
- Valid Test A:
  - payload bytes: 1,232,262;
  - transport bytes: 1,232,263 including delimiter;
  - PNG bytes: 923,749;
  - PNG SHA-256 `bf622d490194e90f4587b4d90869e6f5d4c792d6b52f7e6e2471cfcf44f3ff5d`;
  - durable receiver report exists;
  - process exit code 0.
- Test B ran only after Test A PASS.
- Test B1 and B2 both:
  - received the full payload;
  - saved the exact expected PNG hash;
  - wrote durable completion reports;
  - reached process exit code 0;
  - used distinct receiver sessions / destinations with no cross-stream corruption.
- All three valid phase traces reach:
  `PNG_HASH_VERIFIED → FINAL_EVENT_APPEND_END → REPORT_WRITE_END → STDOUT_RESULT_END → STDIN_CLEANUP_END / PROCESS_EXIT_SCHEDULED → PROCESS_EXIT_EVENT`.
- No `UNCAUGHT_EXCEPTION`, `UNHANDLED_REJECTION`, or `PROCESS_ERROR` occurred in the three valid transfers.
- `RUN_EVENTS.jsonl` contains 28 parseable rows with contiguous sequence 1–28.
- The three PNG files independently hash to the expected value above.
- Phase traces do not contain the raw base64 payload.

## 3. Pre-send abort review

One receiver-only preflight session ended before any payload delivery:
- receiver observed 0 transport bytes and 0 payload bytes;
- the initial sender orchestration raised a ReferenceError before the sender call;
- a later write attempt targeted an already-closed receiver;
- append-only correction records explicitly void the earlier `TEST_A_SENDER_SUBMITTED` interpretation for transfer accounting.

Reviewer accepts this as a disclosed **pre-test orchestration abort**, not as a Test A transfer and not as a hidden retry.

The correction method is consistent with append-only evidence handling: the original record remains, and a later correction narrows its meaning instead of rewriting history.

## 4. Reviewer judgment

R2R1D satisfies every declared acceptance criterion.

Formal decision: **PASS**.

The historical R2R1C exit-code-1 / missing-report symptom did not reproduce, so its exact root cause remains **UNVERIFIED**. This does not block R2R1D PASS because this Gate's acceptance target was to prove that the retained one-shot full-size path can cleanly complete single and two-concurrent fixture transfers.

No unsupported causal attribution should be added to project history.

## 5. Non-blocking observation

The receiver source contains a nominal 90-second total deadline, while the three valid full-size receiver durations were approximately 123–130 seconds and still completed cleanly.

This Gate did not isolate timer semantics. Therefore:
- do not claim the internal 90-second deadline is an effective wall-clock guard;
- do not change it speculatively in this review;
- the next live canary must have an **external orchestration watchdog** so the Gate remains bounded even if the process-local timer is starved or otherwise ineffective during TTY transfer.

This is a bounded reliability note, not a reason to reopen R2R1D.

# NEXT GATE — IMAGEGEN_EXECUTOR_INTEGRATION_CANARY_R2R1E

## GATE_ID

`IMAGEGEN_EXECUTOR_INTEGRATION_CANARY_R2R1E`

## OBJECTIVE

Re-run the two real-image integration canaries with the now-proven one-shot full-size receiver path and verify the complete live chain:

`imagegen return → raw result → one-shot receiver → adapter save → hash → durable log → QA → task end`.

## MAX_ENDPOINT_THIS_ROUND

Maximum endpoint:
1. bounded no-image preflight of the exact runtime sources;
2. exactly two live imagegen calls:
   - C-VB01 attempt 1;
   - C-VB02 attempt 1;
3. concurrency = 2;
4. 2/2 automatic save + hash + QA;
5. fresh readback;
6. mandatory stop at Reviewer.

No content retries and no remaining four Beats.

## MANDATORY_REVIEW_STOP

`YES`

## TARGET_AND_SCOPE

Allowed:
- a new R2R1E evidence directory;
- the accepted R2R1B image-result adapter / append logger;
- the proven R2R1D one-shot sender/receiver completion path;
- bounded diagnostic phase tracing retained only as evidence;
- C-VB01 and C-VB02 attempt 1.

Not allowed:
- attempt 2;
- remaining four Beats;
- concurrency 3;
- H019 full rerun;
- transport redesign;
- chunk+ACK;
- formal Part 2 / Part 3 / Part 4 / Part 4.5 / SKILL changes;
- mutation of R1/R2/R2R1A/B/C/D evidence.

## ACCEPTED_FACTS

Executor may rely on:
- `image_url` is the direct image payload and is a PNG data URI;
- `output_hint` remains opaque metadata and is not a path contract;
- R2R1B adapter decodes and saves the accepted full-size fixture correctly;
- runtime JSONL append stress already passed;
- R2R1D proved the original one-shot full-size path can complete 1/1 single and 2/2 concurrent fixture transfers with exact hashes and exit 0;
- R2R1C historical exit-1 cause remains unknown and must not be guessed.

## PREFLIGHT

Before imagegen:
1. prove the exact adapter/logger and R2R1D one-shot sender/receiver source hashes;
2. verify new destination/log/report paths are empty;
3. run the R2R1A raw fixture once through the exact runtime adapter + one-shot receiver path;
4. require exact PNG SHA-256 `bf622d490194e90f4587b4d90869e6f5d4c792d6b52f7e6e2471cfcf44f3ff5d` and receiver exit 0;
5. verify the shared append path can append/read a bounded test event without sequence corruption;
6. arm an external orchestration watchdog for each live receiver session. Record its configured bound before the calls; it is a fail-closed guard only and must not silently replay imagegen.

Any preflight failure -> `RETURN_IMPLEMENTATION_DRIFT` and STOP before imagegen.

## LIVE CANARY

Only after preflight PASS:
- submit C-VB01 attempt 1 and C-VB02 attempt 1;
- max generation concurrency = 2;
- exactly one imagegen call per Beat.

For each result:
1. durably record IMAGE_RETURNED metadata without copying full base64 into ordinary logs;
2. feed the raw result through the accepted one-shot receiver path;
3. automatically save PNG;
4. verify file existence and SHA-256;
5. queue QA;
6. execute QA;
7. record QA_END and TASK_END.

Content QA may PASS or FAIL. No content outcome authorizes attempt 2 in this Gate.

If a receiver/session fails after an image is already returned:
- do not call imagegen again;
- preserve the returned result / retained evidence if available;
- classify the plumbing failure and RETURN.

## REQUIRED EVIDENCE

At minimum:
- `PREFLIGHT_EVIDENCE_R2R1E.md`
- `RUN_EVENTS.jsonl`
- `RUN_RECORD.json`
- `IMAGEGEN_EXECUTOR_INTEGRATION_CANARY_R2R1E.md`
- `IMAGEGEN_EXECUTOR_INTEGRATION_CANARY_R2R1E.csv`
- source manifest / hashes
- exactly two canary PNGs if both returns succeed
- per-image SHA-256
- receiver completion reports
- bounded phase traces
- QA results
- external-watchdog configuration/result
- fresh-readback summary.

## ACCEPTANCE_CRITERIA

PASS_CANDIDATE requires all:
1. preflight PASS before any imagegen call;
2. exactly two imagegen calls and no retry;
3. C-VB01 / C-VB02 only, concurrency <= 2;
4. 2/2 returned images automatically save with no manual cache recovery;
5. 2/2 destination hashes exist and are fresh-read back;
6. 2/2 receiver completion reports exist and receiver exit code = 0;
7. 2/2 reach QA;
8. required live timing chain exists for both:
   `T0/T1/T2/T4/T5/QA_QUEUED/QA_START/QA_END/TASK_END`;
   T3 may be `UNOBSERVABLE`;
9. event sequence remains unique/reconstructable with no concurrent write loss;
10. external watchdog does not trigger;
11. no unmanifested duplicate outputs and no scope expansion;
12. fresh readback matches files, hashes, logs, reports and summary.

## ROLLBACK_STATUS_OR_PLAN

All harness/runtime changes remain isolated to the R2R1E work area or captured as reviewed source copies. Previous evidence remains immutable. No production rollback is involved.

## OWNER_ONLY_ACTIONS

`NONE`

## REVIEWER_TO_EXECUTOR_RELAY

Read only:
1. current `comic-narrative/HANDOFF.md`;
2. this Reviewer decision;
3. R2R1A raw fixture;
4. R2R1B adapter/logger runtime source;
5. R2R1D one-shot sender/receiver sources;
6. C-VB01 and C-VB02 task inputs.

Do not reread broad Governance or project history.

## EXECUTOR_TO_REVIEWER_RELAY

Use the standard short completion packet.

Allowed Executor final states:
- `PASS_CANDIDATE_EXECUTOR_INTEGRATION_R2R1E`
- `RETURN_TEST_FAILURE`
- `RETURN_IMPLEMENTATION_DRIFT`

`PASS_CANDIDATE != PASS`.

A Reviewer PASS on R2R1E still does **not** authorize concurrency 3 or H019 full rerun. Reviewer will then decide whether to resume the full six-Beat R2 reliability test.

STOP_AT_REVIEWER=YES.
