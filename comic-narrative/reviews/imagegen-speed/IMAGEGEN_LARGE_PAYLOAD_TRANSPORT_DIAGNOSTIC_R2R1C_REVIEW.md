# IMAGEGEN_LARGE_PAYLOAD_TRANSPORT_DIAGNOSTIC_R2R1C — Reviewer Decision

> Date: 2026-10-03
> Governance: `vps-project-governance/VNEXT.md` v0.2.6 @ `de2b38ec0e7f3ecceb1aeffa3fc7f033ed14429a`
> Reviewer verdict: **RETURN_TEST_FAILURE**
> Next Gate: **IMAGEGEN_RECEIVER_COMPLETION_DIAGNOSTIC_R2R1D**
> Formal Part 2 / Part 3 / Part 4 / Part 4.5 / SKILL changes: **NONE**

## Evidence identity

Reviewed Owner-provided package:
- `_imagegen-large-payload-transport-diagnostic-r2r1c.zip`
- Reviewer-computed SHA-256: `e01619fbaa14ef83fc4512ee28d40e03aaf97faa7d12a8f627510168237fb542`

Fresh readback inspected:
- `PREFLIGHT_EVIDENCE_R2R1C.md`
- `TRANSPORT_DIAGNOSTIC_R2R1C.md`
- `RUN_EVENTS.jsonl`
- `TRANSPORT_TEST_RESULTS_R2R1C.csv`
- `TRANSPORT_ASSET_MANIFEST.json`
- baseline and repaired sender/receiver source
- baseline saved PNG
- repaired receiver report

Verified:
- `IMAGEGEN_CALLS=0`;
- event log has 66 parseable rows, sequence 1–66 contiguous;
- baseline Test A submitted 1,232,263 bytes and produced the exact expected PNG:
  - 923,749 bytes
  - SHA-256 `bf622d490194e90f4587b4d90869e6f5d4c792d6b52f7e6e2471cfcf44f3ff5d`;
- baseline receiver did not produce its durable completion report and the session ended with exit code 1;
- the one authorized chunk+ACK repair reached only 851,968 / 1,232,262 payload bytes before the 180-second deadline;
- repaired Test B was correctly not run;
- no second transport repair was attempted.

## Reviewer judgment

Executor classification `RETURN_TEST_FAILURE` is accepted.

However, the evidence narrows the active fault domain further than “large payload cannot traverse the transport”.

Baseline Test A proves the original one-shot TTY/write_stdin path **can deliver enough of the full-size payload for the real adapter to parse it and save the exact expected PNG**.

The unresolved failure is specifically after/around successful adapter save:
- no receiver completion report;
- no durable final receiver event;
- session exit code 1.

The chunk+ACK repair added per-frame round trips and failed on throughput/deadline. It does not invalidate the successful full-payload delivery evidence from baseline Test A and should not become the new default transport.

Therefore the next bounded diagnostic should return to the original one-shot path and isolate **receiver post-save completion / reporting / clean-exit behavior** rather than introduce another transport architecture.

This follows Governance §6: repeated similar failure -> one bounded diagnostic probe, one fault domain at a time.

# NEXT GATE — IMAGEGEN_RECEIVER_COMPLETION_DIAGNOSTIC_R2R1D

## GATE_ID

`IMAGEGEN_RECEIVER_COMPLETION_DIAGNOSTIC_R2R1D`

## OBJECTIVE

Using the already-proven one-shot full-size transport and preserved R2R1A fixture, identify exactly why the receiver exits non-zero after producing the correct PNG, apply at most one evidence-driven completion-path repair, and prove clean receiver completion without calling imagegen.

## MAX_ENDPOINT_THIS_ROUND

Maximum endpoint:
1. reproduce one full-size one-shot transfer with fine-grained post-save phase instrumentation;
2. identify the exact failing completion phase;
3. implement at most one directly supported completion-path repair;
4. rerun single full-size one-shot transfer once;
5. only if that cleanly passes, run two concurrent full-size one-shot transfers;
6. fresh readback;
7. mandatory stop at Reviewer.

`IMAGEGEN_CALLS=0`.

## MANDATORY_REVIEW_STOP

`YES`

## TARGET_AND_SCOPE

Allowed:
- new R2R1D diagnostic directory;
- baseline one-shot TTY/write_stdin sender path;
- receiver completion/report/cleanup instrumentation;
- one completion-path repair supported by observed evidence;
- exact preserved R2R1A fixture;
- current adapter and appendEvent implementation.

Not allowed:
- another transport architecture;
- chunk/ACK transport as production candidate;
- imagegen;
- content QA;
- H019;
- concurrency 3;
- formal Part 2/3/4/4.5/SKILL changes;
- prior evidence mutation.

## ACCEPTED_FACTS

- full-size one-shot transport has already produced the exact expected PNG;
- adapter decode/save is not the active fault domain for this diagnostic;
- event logger passed prior stress tests, but a failure at the receiver's final append/report path has not yet been ruled out;
- chunk+ACK repair failed and is not accepted as the transport solution.

## PREFLIGHT

Before transfer:
1. record fixture byte count/hash;
2. record baseline sender/receiver source hashes;
3. ensure destination/report/diagnostic paths are new and empty;
4. syntax-check diagnostic receiver;
5. keep full base64 payload out of ordinary logs.

## DIAGNOSTIC INSTRUMENTATION

Keep the original one-shot transport.

Add crash-safe, bounded phase markers around the receiver completion path, including at least:
- delimiter received;
- exact payload length validated;
- JSON parsed;
- adapter save start/end;
- PNG hash verified;
- final event append start/end;
- receiver report write start/end;
- stdout result write start/end;
- stdin listener cleanup / pause;
- process exit scheduled / exit event;
- uncaughtException / unhandledRejection / process error if any.

The phase trace must be written to a separate diagnostic file/path so failure of the normal event logger cannot erase the root cause.

No raw base64 content in the trace.

## TEST A — reproduce

Run one exact full-size fixture through the original one-shot path.

If the failure reproduces, the phase trace must identify the last completed phase and the first failed/missing phase.

If the run unexpectedly cleanly passes, do not invent a repair; proceed directly to Test B.

## ONE BOUNDED REPAIR

If Test A identifies a concrete completion-path failure, make at most one repair to that phase.

Examples of acceptable scope:
- protect/fix final append/report write;
- explicit stdin listener cleanup;
- explicit clean process termination after durable report;
- correction of final stdout/session close sequencing.

Do not change the payload transport design.

Then rerun Test A once.

## TEST B — two concurrent one-shot transfers

Run only after repaired/unmodified Test A cleanly passes.

Use two independent receivers and destinations, same full-size fixture, same original one-shot transport.

Acceptance:
- 2/2 exact expected PNG hashes;
- 2/2 durable completion reports;
- 2/2 process exit code 0;
- no cross-stream corruption;
- no manual intervention.

## REQUIRED EVIDENCE

At minimum:
- `PREFLIGHT_EVIDENCE_R2R1D.md`
- `RECEIVER_COMPLETION_DIAGNOSTIC_R2R1D.md`
- diagnostic receiver/sender source or diff
- bounded phase trace
- Test A report
- repaired Test A report if a repair was used
- Test B reports if authorized by Test A
- asset manifest + PNG hashes
- fresh-readback summary

## ACCEPTANCE CRITERIA

PASS_CANDIDATE requires:
1. zero imagegen calls;
2. original one-shot full-size transport retained;
3. Test A cleanly completes with expected PNG hash and receiver exit 0;
4. durable receiver completion report exists;
5. if a repair was required, it is one evidence-driven completion-path repair only;
6. Test B runs only after Test A PASS;
7. Test B 2/2 cleanly completes with expected PNG hashes and exit 0;
8. phase trace and ordinary evidence contain no full base64 payload;
9. fresh readback matches reports/files/hashes.

Allowed final states:
- `PASS_CANDIDATE_RECEIVER_COMPLETION_R2R1D`
- `RETURN_TEST_FAILURE`
- `RETURN_IMPLEMENTATION_DRIFT`

A PASS does not authorize the six-Beat test. Reviewer must next decide whether to rerun the two-image integration canary with the proven completion path.

## OWNER_ONLY_ACTIONS

`NONE`

## REVIEWER_TO_EXECUTOR_RELAY

Read only:
1. current `comic-narrative/HANDOFF.md`;
2. this Reviewer decision;
3. R2R1A `RAW_IMAGEGEN_RESULT.json`;
4. R2R1C baseline one-shot sender/receiver;
5. R2R1B runtime adapter/logger source.

Do not reread broad project history or Governance.

STOP_AT_REVIEWER=YES.
