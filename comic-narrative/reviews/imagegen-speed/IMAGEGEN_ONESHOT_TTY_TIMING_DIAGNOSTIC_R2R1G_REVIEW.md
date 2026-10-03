# IMAGEGEN_ONESHOT_TTY_TIMING_DIAGNOSTIC_R2R1G — Reviewer Decision

> Date: 2026-10-03
> Governance: vps-project-governance/VNEXT.md v0.2.6 @ de2b38ec0e7f3ecceb1aeffa3fc7f033ed14429a
> Reviewer verdict: **PASS**
> Next Gate: **IMAGEGEN_OUTPUT_HINT_LOCAL_CACHE_DIAGNOSTIC_R2R1H**
> Formal Part 2 / Part 3 / Part 4 / Part 4.5 / SKILL changes: **NONE**

## Evidence identity

- Package: _imagegen-oneshot-tty-timing-r2r1g.zip
- Reviewer-computed SHA-256: 48002fe744e02754108fafa21cd3514dd5ead78f19f1f0b63f3d95fdb84c1277
- Targeted fresh readback: diagnostic report, comparison CSV, fresh-readback JSON, preflight evidence, sender A/B sources + one-line diff, bounded RUN_EVENTS tail.

## Verified facts

- IMAGEGEN_CALLS=0.
- A/B used the same deterministic 2,931,881-byte wire.
- Sender B differs from A only in yield_time_ms: 30000 -> 0.
- Receiver duration: A 289.455 s; B 283.182 s; difference 6.273 s / about 2.17%.
- Sender API return: 30.591 s -> 0.838 s.
- Both receivers consumed all bytes, saved the same PNG automatically, produced SHA-256 cfac82636b286a03e0e75a4dd273655b38e867e1e134f1d013bae77ebcb68f70, and exited 0.
- Receiver throughput remained about 9.89–10.11 KiB/s.
- The disclosed pre-send harness abort received 0 bytes and is correctly excluded from A/B accounting.

## Reviewer judgment

R2R1G satisfies the declared diagnostic acceptance criteria. Formal decision: **PASS**.

The evidence does not support yield_time_ms=30000 as the main cause of the roughly five-minute transfer. Lowering it to 0 returns control to orchestration sooner, but does not materially change observed bulk delivery time. One A/B pair is insufficient to claim a stable 2.17% throughput improvement.

The active bottleneck remains the TTY/write_stdin bulk-payload bridge.

# NEXT GATE — IMAGEGEN_OUTPUT_HINT_LOCAL_CACHE_DIAGNOSTIC_R2R1H

## OBJECTIVE

Without calling imagegen, determine whether the local PNG path named in the preserved R2R1A output_hint points to the exact same PNG bytes represented by image_url, and whether that local file can be copied to the execution destination in a bounded fail-closed way that avoids multi-megabyte TTY transfer.

## MAX_ENDPOINT_THIS_ROUND

1. Read the preserved R2R1A RAW_IMAGEGEN_RESULT.json only.
2. Extract one hinted local PNG path with a strict bounded parser.
3. Verify path policy and file existence.
4. Compare hinted-file SHA-256 with the locally decoded image_url SHA-256 from the same raw JSON.
5. Copy the hinted PNG to one fresh diagnostic destination and verify identical SHA-256.
6. Run bounded negative parser/path-policy tests.
7. Fresh readback.
8. STOP at Reviewer.

IMAGEGEN_CALLS=0.

## TARGET_AND_SCOPE

Allowed: new R2R1H diagnostic directory; preserved R2R1A raw result; exact output_hint string; local existence/hash/copy checks; strict parser; synthetic negative tests.

Not allowed: imagegen; broad scan of .codex/generated_images; arbitrary prose path guessing; TTY transfer of the multi-megabyte image_url; image-byte changes; H019; six-Beat; concurrency 3; formal Part 2/3/4/4.5/SKILL changes; prior-evidence mutation.

## PATH POLICY

The parser must fail closed. For the preserved real sample, accept only one unambiguous absolute Windows .png path explicitly presented as the generated image path in the known imagegen hint pattern, normalized beneath the current user's .codex\generated_images\ root, with no traversal outside that root, and existing as a regular file.

Reject multiple ambiguous candidates, paths outside the root, non-PNG targets, missing files, traversal, or generic natural-language guessing.

## TEST A — preserved real sample

Using R2R1A RAW_IMAGEGEN_RESULT.json:
1. parse and normalize the hinted path;
2. verify it remains under the allowed generated-images root;
3. verify the PNG exists;
4. hash the hinted PNG;
5. locally decode image_url from the same raw JSON and hash those PNG bytes;
6. require equality;
7. copy the hinted PNG to a fresh R2R1H destination;
8. require copied-file hash equality;
9. record parse / verify / copy timing.

No full base64 value may enter ordinary logs.

## TEST B — fail-closed negatives

Run synthetic cases for: outside-root path; missing PNG; non-PNG target; ambiguous/multiple generated-image paths; traversal attempt. Every case must reject without copying.

## ACCEPTANCE CRITERIA

PASS_CANDIDATE requires: IMAGEGEN_CALLS=0; exactly one valid real path; normalized path under allowed root; hinted PNG exists; hinted-file SHA equals decoded-image_url SHA; copied-file SHA matches; all negative cases fail closed; no broad scan; no bulk TTY; direct timing evidence; fresh readback matches artifacts.

Allowed final states:
- PASS_CANDIDATE_OUTPUT_HINT_LOCAL_CACHE_R2R1H
- RETURN_TEST_FAILURE
- RETURN_IMPLEMENTATION_DRIFT

A PASS does not make output_hint a guaranteed API contract. It only authorizes Reviewer to consider one bounded live canary using the hinted local file as an optional verified fast path.

## OWNER_ONLY_ACTIONS

NONE

## REVIEWER_TO_EXECUTOR_RELAY

Read only: current comic-narrative/HANDOFF.md; this Reviewer decision; preserved R2R1A RAW_IMAGEGEN_RESULT.json. Do not read broad project history. Do not scan the whole generated-images tree.

STOP_AT_REVIEWER=YES.