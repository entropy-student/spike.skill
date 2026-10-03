# IMAGEGEN_EXECUTOR_INTEGRATION_CANARY_R2R1E — Reviewer Decision

> Date: 2026-10-03
> Governance: `vps-project-governance/VNEXT.md` v0.2.6 @ `de2b38ec0e7f3ecceb1aeffa3fc7f033ed14429a`
> Reviewer verdict: **RETURN_IMPLEMENTATION_DRIFT**
> Next Gate: **IMAGEGEN_EXECUTOR_INTEGRATION_CANARY_R2R1F**
> Formal Part 2 / Part 3 / Part 4 / Part 4.5 / SKILL changes: **NONE**

## 1. Evidence reviewed

Reviewed Owner-provided files:
- `PREFLIGHT_EVIDENCE_R2R1E.md`
- `IMAGEGEN_EXECUTOR_INTEGRATION_CANARY_R2R1E.md`

Verified from fresh readback:
- canonical HANDOFF / R2R1D Reviewer sources were the expected accepted versions;
- source hashes matched the intended runtime sources;
- destination/report/trace/event paths were initially empty;
- the preflight receiver started expecting the full R2R1A fixture;
- receiver exited after ~15.16 s with exit code 2 after receiving exactly 0 bytes / 0 delimiter;
- the orchestration was still preparing the fixture wire while the receiver's 15-second no-input timeout expired;
- the later write targeted an already-closed session and had no delivery confirmation;
- adapter was never invoked;
- `IMAGEGEN_CALLS=0`;
- C-VB01 / C-VB02 were not submitted;
- no canary PNG / SHA / QA / retry occurred;
- execution correctly failed closed at preflight.

## 2. Reviewer judgment

Executor classification `RETURN_IMPLEMENTATION_DRIFT` is accepted.

This is not evidence that the R2R1D one-shot transport regressed.

R2R1D already proved the full-size one-shot path under valid payload delivery. R2R1E failed **before payload delivery** because the preflight orchestration started the receiver before the large fixture wire was ready, allowing the receiver's 15-second no-input timeout to expire.

The active defect is therefore:

> **pre-send orchestration ordering / readiness**, not adapter decode, imagegen return, payload transport throughput, logger, QA, or receiver post-save completion.

The next repair is evidence-driven and narrow:
- prepare / serialize the fixture wire completely before receiver start;
- then start receiver and immediately send the already-ready payload;
- for live results, do not start a receiver until the imagegen raw result is already available and the outbound wire is fully prepared.

No new transport design is warranted.

# NEXT GATE — IMAGEGEN_EXECUTOR_INTEGRATION_CANARY_R2R1F

## GATE_ID

`IMAGEGEN_EXECUTOR_INTEGRATION_CANARY_R2R1F`

## OBJECTIVE

Fix the pre-send readiness/order defect, prove the corrected no-image preflight on the exact R2R1A fixture, then—only if preflight passes—run exactly two live imagegen integration canaries.

## MAX_ENDPOINT_THIS_ROUND

Maximum endpoint:
1. implement the bounded orchestration-order repair;
2. no-image full-size fixture preflight PASS;
3. exactly two live imagegen calls:
   - C-VB01 attempt 1;
   - C-VB02 attempt 1;
4. concurrency <= 2;
5. 2/2 automatic save + hash + QA;
6. fresh readback;
7. mandatory stop at Reviewer.

No content retries and no remaining four Beats.

## MANDATORY_REVIEW_STOP

`YES`

## TARGET_AND_SCOPE

Allowed:
- new R2R1F evidence directory;
- orchestration-only repair that changes when receiver is started relative to payload readiness;
- accepted R2R1B adapter/logger;
- accepted R2R1D one-shot receiver/sender;
- external orchestration watchdog;
- C-VB01 / C-VB02 attempt 1.

Not allowed:
- changing the payload transport architecture;
- changing the receiver's 15-second no-input timeout merely to hide orchestration latency;
- chunk/ACK;
- attempt 2;
- remaining four Beats;
- concurrency 3;
- H019 full rerun;
- formal Part 2 / Part 3 / Part 4 / Part 4.5 / SKILL changes;
- mutation of prior evidence.

## ACCEPTED FACTS

Executor may rely on:
- R2R1D proved one-shot full-size transfer, save, report and clean exit for 1 single + 2 concurrent fixture runs;
- R2R1E receiver got 0 bytes and timed out before any send was confirmed;
- R2R1E failure is before adapter invocation;
- `image_url` is the direct PNG data URI payload;
- `output_hint` is opaque metadata only;
- runtime append logger is not the active fault domain.

## REQUIRED REPAIR

### Fixture preflight ordering

Before starting receiver:
1. read the R2R1A raw fixture;
2. serialize the exact outbound wire completely;
3. record prepared byte count / payload hash metadata;
4. only then start receiver;
5. once receiver is ready, immediately write the already-prepared wire;
6. record delivery confirmation / receiver byte count;
7. require normal adapter save, hash, report and exit 0.

Do not perform expensive fixture transformation after receiver start.

### Live ordering

For each imagegen return:
1. wait for imagegen to return the raw object;
2. prepare the outbound wire completely in memory / bounded temp representation;
3. only then start the receiver;
4. immediately send the prepared wire;
5. receiver idle timeout remains fail-closed;
6. external watchdog remains armed and must never replay imagegen.

## PREFLIGHT

Before any imagegen call:
1. verify exact adapter/logger/sender/receiver source hashes;
2. verify new destination/report/trace/log paths are empty;
3. run the full R2R1A fixture through the repaired ordering;
4. require:
   - sender confirms 1,232,263 transport bytes including LF;
   - receiver confirms full payload;
   - PNG exists;
   - PNG SHA-256 = `bf622d490194e90f4587b4d90869e6f5d4c792d6b52f7e6e2471cfcf44f3ff5d`;
   - durable receiver report exists;
   - receiver exit code = 0;
5. verify bounded append/read event roundtrip;
6. record external watchdog configuration.

Any preflight failure -> `RETURN_IMPLEMENTATION_DRIFT` and STOP with `IMAGEGEN_CALLS=0`.

## LIVE CANARY

Only after full preflight PASS:
- C-VB01 attempt 1;
- C-VB02 attempt 1;
- max generation concurrency 2;
- exactly one imagegen call per Beat.

For each result:
`IMAGE_RETURNED → prepare wire fully → receiver start → immediate send → auto save → SHA → QA_QUEUED → QA_START → QA_END → TASK_END`.

Content QA may PASS or FAIL. No content outcome authorizes attempt 2.

If a returned result cannot be delivered/saved:
- do not replay imagegen;
- preserve retained raw evidence if available;
- RETURN.

## REQUIRED EVIDENCE

At minimum:
- `PREFLIGHT_EVIDENCE_R2R1F.md`
- `RUN_EVENTS.jsonl`
- `RUN_RECORD.json`
- `IMAGEGEN_EXECUTOR_INTEGRATION_CANARY_R2R1F.md`
- `IMAGEGEN_EXECUTOR_INTEGRATION_CANARY_R2R1F.csv`
- source manifest / hashes
- pre-send readiness timestamps/byte counts
- exactly two canary PNGs if both returns succeed
- per-image SHA-256
- receiver completion reports
- bounded phase traces
- QA results
- external-watchdog status
- fresh-readback summary.

## ACCEPTANCE_CRITERIA

PASS_CANDIDATE requires all:
1. repaired pre-send ordering is proven before imagegen;
2. full-size fixture preflight completes with expected PNG hash and receiver exit 0;
3. exactly two imagegen calls, no retry;
4. C-VB01 / C-VB02 only, concurrency <= 2;
5. for each live result, payload preparation completes before receiver start;
6. 2/2 returned images automatically save with no manual recovery;
7. 2/2 destination hashes and receiver completion reports exist;
8. 2/2 receiver exit code = 0;
9. 2/2 reach QA;
10. required timing chain exists for both;
11. event sequence remains reconstructable with no concurrent-write loss;
12. watchdog does not trigger;
13. no scope expansion / duplicate outputs;
14. fresh readback matches files, hashes, logs and summary.

## ROLLBACK_STATUS_OR_PLAN

The repair is isolated to R2R1F orchestration/harness code or captured as a source diff. Prior evidence remains immutable. No production rollback is involved.

## OWNER_ONLY_ACTIONS

`NONE`

## REVIEWER_TO_EXECUTOR_RELAY

Read only:
1. current `comic-narrative/HANDOFF.md`;
2. this Reviewer decision;
3. R2R1A raw fixture;
4. R2R1B adapter/logger runtime source;
5. R2R1D one-shot sender/receiver;
6. R2R1E preflight report showing the zero-byte timeout;
7. C-VB01 / C-VB02 task inputs.

Do not reread broad Governance or project history.

## EXECUTOR_TO_REVIEWER_RELAY

Use the standard short completion packet.

Allowed final states:
- `PASS_CANDIDATE_EXECUTOR_INTEGRATION_R2R1F`
- `RETURN_TEST_FAILURE`
- `RETURN_IMPLEMENTATION_DRIFT`

`PASS_CANDIDATE != PASS`.

A Reviewer PASS on R2R1F still does not authorize concurrency 3 or H019 full rerun. Reviewer will then decide whether to resume the full six-Beat R2 reliability test.

STOP_AT_REVIEWER=YES.
