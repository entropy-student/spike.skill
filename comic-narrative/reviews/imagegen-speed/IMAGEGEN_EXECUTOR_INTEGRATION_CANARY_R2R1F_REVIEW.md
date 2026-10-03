# IMAGEGEN_EXECUTOR_INTEGRATION_CANARY_R2R1F — Reviewer Decision

> Date: 2026-10-03
> Governance: `vps-project-governance/VNEXT.md` v0.2.6 @ `de2b38ec0e7f3ecceb1aeffa3fc7f033ed14429a`
> Reviewer verdict: **RETURN_TEST_FAILURE**
> Next Gate: **IMAGEGEN_ONESHOT_TTY_TIMING_DIAGNOSTIC_R2R1G**
> Formal Part 2 / Part 3 / Part 4 / Part 4.5 / SKILL changes: **NONE**

## 1. Evidence identity

Reviewed Owner-provided package:
- `_imagegen-executor-integration-canary-r2r1f.zip`
- SHA-256: `bec299edecce82514ff0abb59f459940e2d1033264ee1ebb125745091e0c7d61`

Fresh readback inspected:
- `PREFLIGHT_EVIDENCE_R2R1F.md`
- `IMAGEGEN_EXECUTOR_INTEGRATION_CANARY_R2R1F.md`
- `RUN_EVENTS.jsonl`
- `RUN_RECORD.json`
- `FRESH_READBACK_R2R1F.json`
- `QA_REPORT.md`
- `ASSET_OUTPUT_MANIFEST.json`
- source manifest and runtime sources
- preflight receiver report / trace
- both live receiver reports / traces
- watchdog configuration/results
- both saved canary PNGs.

## 2. Directly verified facts

Preflight:
- pre-send ordering repair worked;
- full R2R1A fixture was fully prepared before receiver start;
- receiver completed with exit code 0;
- saved fixture PNG is 923,749 bytes, 1672×941;
- SHA-256 = `bf622d490194e90f4587b4d90869e6f5d4c792d6b52f7e6e2471cfcf44f3ff5d`;
- append/read event path remained valid;
- live watchdog was armed at 240 seconds.

Live scope:
- exactly 2 imagegen calls;
- C-VB01 attempt 1 and C-VB02 attempt 1 only;
- no retry / attempt 2;
- concurrency at submit = 2;
- both imagegen calls returned.

Automatic persistence:
- C-VB01 saved automatically:
  - 2,198,823 bytes;
  - 1672×941;
  - SHA-256 `cfac82636b286a03e0e75a4dd273655b38e867e1e134f1d013bae77ebcb68f70`;
  - receiver exit code 0.
- C-VB02 saved automatically:
  - 2,104,273 bytes;
  - 1672×941;
  - SHA-256 `259eaee261b171ba285d1284085a7521801ba91db0377a8fc3599ba20046b515`;
  - receiver exit code 0.
- no manual cache recovery was used.

Live transfer duration:
- C-VB01 receiver duration: 311.210 s;
- C-VB02 receiver duration: 300.591 s.
- both 240-second external watchdogs triggered before transfer completion;
- the attempted Ctrl-C did **not** stop the already in-flight `write_stdin` delivery;
- both streams continued after the watchdog and later completed successfully.

Logging:
- `RUN_EVENTS.jsonl` has 68 parseable rows;
- sequence 1–68 is contiguous;
- premature watchdog-time TASK_END records were retained and corrected append-only after the receivers completed;
- fresh readback agrees with saved files/hashes.

QA:
- both images reached QA;
- C-VB01 content/identity/story checks passed except raw output size was 1672×941 rather than the packet's requested 1920×1080;
- C-VB02 additionally failed verification that hotel/date continuity is visibly confirmable;
- no retry occurred, as required by the Gate.

## 3. Reviewer judgment

Executor classification `RETURN_TEST_FAILURE` is accepted.

The live integration made a major forward step:

> **2/2 real imagegen results were automatically transferred, saved, hashed, logged and taken into QA with no manual recovery.**

Therefore the old output-path / adapter / logger / receiver-completion failures are not the active blocker in this round.

The declared integration Gate still cannot PASS because its external fail-closed guard failed:
1. the 240-second watchdog expired during both still-progressing transfers;
2. Ctrl-C did not terminate the in-flight one-shot `write_stdin`;
3. the watchdog therefore neither represented the actual live transfer duration nor enforced the intended hard stop.

The active reliability/performance fault domain is now the **one-shot TTY/write_stdin transfer timing + watchdog contract**.

## 4. QA boundary note

The two content QA failures are **not** promoted into the next executor-integration blocker.

Current formal Part 4 §25 states:
- 16:9;
- `1920×1080 final delivery target`.

It does not by itself establish that the image-generation provider must natively return exactly 1920×1080 before a later delivery-normalization step. The current task packet, however, encoded 1920×1080 as an exact image output requirement.

Therefore raw-size handling is now a **contract-reconciliation item**:
- do not spend another imagegen attempt merely to chase native 1920×1080 while executor reliability is unresolved;
- later reconcile task-packet QA vs Part 4 final-delivery semantics before production reruns.

C-VB02's same-hotel/date visibility failure remains a genuine content QA finding for the later retry-capable image pipeline, but it is not the reason R2R1F integration failed.

# NEXT GATE — IMAGEGEN_ONESHOT_TTY_TIMING_DIAGNOSTIC_R2R1G

## GATE_ID

`IMAGEGEN_ONESHOT_TTY_TIMING_DIAGNOSTIC_R2R1G`

## OBJECTIVE

Without calling imagegen, isolate whether the current sender's `yield_time_ms: 30000` materially contributes to the ~300-second full-size TTY/write_stdin transfer, and collect enough evidence to design the next fail-closed watchdog without guessing.

## MAX_ENDPOINT_THIS_ROUND

Maximum endpoint:
1. reconstruct a live-size raw image result from an already-saved R2R1F PNG;
2. run one baseline full-size one-shot transfer using the current sender parameter;
3. run one A/B transfer with **only** `yield_time_ms` changed to the minimum supported nonblocking/short value;
4. compare complete timing / throughput / save / report evidence;
5. fresh readback;
6. mandatory stop at Reviewer.

`IMAGEGEN_CALLS=0`.

No live canary is authorized in this Gate.

## MANDATORY_REVIEW_STOP

`YES`

## TARGET_AND_SCOPE

Allowed:
- new R2R1G diagnostic directory;
- R2R1F saved C-VB01 PNG as payload source;
- deterministic reconstruction of a raw object with `image_url` data URI and opaque `output_hint`;
- current R2R1D receiver;
- current R2R1D sender as baseline;
- exactly one sender-parameter variant affecting only `yield_time_ms`;
- timing / throughput instrumentation.

Not allowed:
- imagegen;
- content QA;
- changing chunking/framing/transport architecture;
- chunk+ACK;
- changing receiver parsing/save logic;
- changing Part 2/3/4/4.5/SKILL;
- H019;
- concurrency 3;
- modifying prior evidence.

## ACCEPTED FACTS

- R2R1F proved both live image results can traverse the one-shot path and save correctly;
- current live payload sizes were approximately 2.81 MB and 2.93 MB;
- current receiver completion took approximately 300.6–311.2 s;
- receiver progress advanced in roughly 256 KiB steps while transfers were alive;
- current sender source uses one `tools.write_stdin` call with `yield_time_ms: 30000`;
- the 240-second watchdog is not compatible with observed live completion time and its Ctrl-C action did not stop the active write.

## FIXTURE CONSTRUCTION

Use the saved R2R1F C-VB01 PNG:
- verify its SHA-256 first;
- base64-encode it into `image_url=data:image/png;base64,...`;
- include only bounded opaque metadata in `output_hint`;
- serialize deterministically;
- record raw payload bytes and wire bytes.

The reconstructed fixture is diagnostic evidence only; do not claim it is the original live raw object.

## TEST A — current sender baseline

Use the exact current one-shot receiver and sender behavior:
- one `tools.write_stdin`;
- `yield_time_ms: 30000`;
- full reconstructed live-size wire.

Record:
- wire-ready time;
- receiver start;
- sender write start/end;
- receiver first byte/progress/final byte where observable;
- total receiver duration;
- payload bytes;
- effective KiB/s;
- PNG hash;
- receiver report / exit code.

## TEST B — single-parameter A/B

Use the exact same fixture and receiver.

Change **only**:
- `yield_time_ms` from 30000 to the minimum supported short/nonblocking value (prefer 0 if valid; otherwise record the minimum accepted value).

Do not change framing, payload bytes, receiver, chunking, destination semantics, or logging.

Record the same timing fields.

## INTERPRETATION CONTRACT

This is a diagnostic Gate, not a performance claim based on intuition.

Reviewer needs enough evidence to answer:
1. does lowering `yield_time_ms` materially change actual receiver throughput/completion time?
2. if yes, can the sender parameter be safely adopted and a watchdog derived from the measured path?
3. if no, is the TTY/write_stdin bridge itself the dominant bottleneck, requiring a separately reviewed transport change?

Do not invent a new transport inside this Gate.

## REQUIRED EVIDENCE

At minimum:
- `PREFLIGHT_EVIDENCE_R2R1G.md`
- `ONESHOT_TTY_TIMING_DIAGNOSTIC_R2R1G.md`
- exact reconstructed fixture identity/hash/byte counts
- Test A sender/receiver report and phase trace
- Test B sender/receiver report and phase trace
- comparison CSV/JSON
- sender source/diff proving only `yield_time_ms` changed
- saved PNG hashes
- fresh-readback summary.

No raw base64 payload in ordinary logs.

## ACCEPTANCE CRITERIA

PASS_CANDIDATE requires:
1. zero imagegen calls;
2. deterministic fixture construction from the already-saved R2R1F PNG;
3. Test A and Test B use identical payload bytes;
4. Test A preserves current sender behavior;
5. Test B changes only `yield_time_ms`;
6. both transfers either complete with exact expected PNG hash/report, or a failure is captured precisely enough to compare;
7. timing / byte / throughput evidence is direct, not estimated from chat;
8. no scope expansion;
9. fresh readback matches artifacts and reports.

Allowed Executor final states:
- `PASS_CANDIDATE_ONESHOT_TTY_TIMING_R2R1G`
- `RETURN_TEST_FAILURE`
- `RETURN_IMPLEMENTATION_DRIFT`

## OWNER_ONLY_ACTIONS

`NONE`

## REVIEWER_TO_EXECUTOR_RELAY

Read only:
1. current `comic-narrative/HANDOFF.md`;
2. this Reviewer decision;
3. R2R1F saved C-VB01 PNG + receiver report/events;
4. R2R1D sender/receiver source.

Do not reread broad project history or Governance.

STOP_AT_REVIEWER=YES.
