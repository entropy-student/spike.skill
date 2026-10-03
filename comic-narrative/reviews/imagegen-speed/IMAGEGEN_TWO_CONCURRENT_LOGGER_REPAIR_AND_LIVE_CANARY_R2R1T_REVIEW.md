# IMAGEGEN_TWO_CONCURRENT_LOGGER_REPAIR_AND_LIVE_CANARY_R2R1T — Reviewer Decision

> Date: 2026-10-04  
> Governance: `vps-project-governance/VNEXT.md` v0.2.6 @ `de2b38ec0e7f3ecceb1aeffa3fc7f033ed14429a`  
> Reviewer verdict: **RETURN_TEST_FAILURE — ACCEPTED**  
> Imagegen calls: **2**  
> Retries / replacements / fallback: **0 / 0 / 0**  
> Next Gate: **IMAGEGEN_FILE_HANDOFF_TWO_CONCURRENT_LIVE_CANARY_R2R1U**

## Evidence identity

Owner uploaded:

- `_imagegen-two-concurrent-logger-repair-live-canary-r2r1t.zip`
- Reviewer-computed ZIP SHA-256: `30b47968f0ccbcecb9491e5382ee1738c7eb82ebaf65dd7831ed61ec6ecc6cb4`

Reviewer independently parsed all JSON / JSONL and inspected the current saver/logger source.

Key file hashes:

- report = `c64e8480ef1244ac6516ea78889ad2f1744bdd6d03dcb796bf7296b5805f6cd7`
- preflight = `c7d51b13b66d273777995c8c22d31a20c60e6e50a8bbc09a02d950c876c95726`
- RUN_EVENTS = `67992fc66fecccd8d99ce556df29085a39d8ff4fd706eef04e7d09cc5b7b4b0b`
- RUN_RECORD = `0d8a72457d9fbbe30c06c621c30d05503b065ba79e432bf5de042125edc8de96`
- save helper = `22916c876650ab249aab9f6f811c7b952236891e8c8a211366f8aa3f8f02722f`
- logger = `dbdac5e19bf12523a0772d5a63600f4e31165c6e48adc1bd6dfb5751c93cff89`

## Verified preflight state

R2R1T no-image preflight passed:

- current main = `42079aec05a86229e189a8012061831d37878d28`;
- Part 4 §25 blob = `3360312c5ec7b1248d4c46d8703a29290c7aae5f`;
- two distinct 16:9 task fixtures passed;
- no exact native pixel target;
- global call guard = 2;
- per-task max attempt = 1;
- retry / replacement / fallback disabled;
- logger repair smoke passed at the canonical run-root `RUN_EVENTS.jsonl`;
- no misplaced `source/RUN_EVENTS.jsonl` was created.

## Verified live concurrency facts

Exactly two imagegen calls were submitted concurrently.

Both calls:

- started at `2026-10-03T17:39:03.638Z`;
- returned after `60.136` seconds;
- returned exactly one structured `output_hint` candidate each.

Return timestamps:

- task A = `2026-10-03T17:40:03.774Z`;
- task B = `2026-10-03T17:40:03.775Z`.

Therefore the current evidence **does support**:

- concurrency-at-submit = 2;
- two distinct tasks reached imagegen;
- both live calls returned;
- both results exposed one output_hint candidate.

This does **not** yet prove per-task local persistence, hash equality, or QA reachability.

## Failure cause

The current saver source reads its input only through:

`[Console]::In.ReadLine()`

After the imagegen results returned, the saver processes were launched in a closed/noninteractive stdin context.

Both therefore exited before consuming their returned hint:

- task A: `INPUT_MISSING`
- task B: `INPUT_MISSING`

The event log classifies this as `AUTO_SAVE_HANDOFF`, not imagegen failure.

No PNG was copied into R2R1T outputs. QA remained `NOT_REACHED`.

## Event-chain verification

Reviewer parsed `RUN_EVENTS.jsonl`:

- event count = 14;
- sequence = 1 through 14, contiguous;
- no unexplained sequence loss.

The chain includes:

- logger smoke PASS;
- both tasks prepared;
- concurrency armed;
- two image submissions;
- two image returns;
- two save failures;
- two QA_NOT_REACHED;
- two task terminal records.

## Reviewer decision

Formal result:

`RETURN_TEST_FAILURE — ACCEPTED`

Fault domain:

`POST_RETURN_OUTPUT_HINT_TO_SAVER_HANDOFF`

Not:

- imagegen concurrency failure;
- output_hint absence;
- logger failure;
- size-policy failure;
- historical evidence failure.

## Next-step principle

Do not reuse stdin for the bounded output_hint handoff.

Use a fresh per-task file handoff:

`live result → small task-scoped JSON containing task_id + output_hint → saver reads file → strict path/hash/copy/QA`

This avoids the closed-stdin lifecycle entirely while still avoiding any TTY/base64 image transfer.

The next Gate may repair this fresh harness transport and, after a no-image transport smoke passes, continue in the same round directly to a new two-concurrent live canary.

No historical replay is required.
