# IMAGEGEN_OUTPUT_HINT_LOCAL_CACHE_DIAGNOSTIC_R2R1H — Reviewer Decision

> Date: 2026-10-03
> Governance: `vps-project-governance/VNEXT.md` v0.2.6 @ `de2b38ec0e7f3ecceb1aeffa3fc7f033ed14429a`
> Reviewer verdict: **PASS**
> Next Gate: **IMAGEGEN_OUTPUT_HINT_LOCAL_CACHE_LIVE_CANARY_R2R1I**
> Formal Part 2 / Part 3 / Part 4 / Part 4.5 / SKILL changes: **NONE**

## Evidence identity

- Package: `_imagegen-output-hint-local-cache-r2r1h.zip`
- Reviewer-computed SHA-256: `892d627f00795d664b55cf2d8fd921d5d924c0eb725a1a632269f0b08761fb36`
- Targeted fresh readback: diagnostic report, fresh-readback JSON, preflight evidence, results JSON, output manifest, parser source, verified PNG copy.

## Verified facts

- `IMAGEGEN_CALLS=0`.
- Preserved R2R1A decoded `image_url` PNG: 923,749 bytes; SHA-256 `bf622d490194e90f4587b4d90869e6f5d4c792d6b52f7e6e2471cfcf44f3ff5d`.
- The one strict path extracted from the preserved `output_hint` existed as a regular PNG beneath the allowed `.codex\generated_images` root.
- Hinted PNG: 923,749 bytes; same SHA-256.
- Fresh R2R1H copied PNG: 923,749 bytes; same SHA-256.
- Parse / verify+hash / copy+hash were approximately 0.627 ms / 1.841 ms / 1.857 ms in this local sample.
- All five negative cases failed closed with no copy: outside root, missing file, non-PNG, ambiguous multiple paths, literal traversal.
- No broad generated-images scan and no TTY bulk image transfer occurred.

## Reviewer judgment

R2R1H satisfies every declared acceptance criterion. Formal decision: **PASS**.

This proves the preserved real sample can use the hinted local generated-image file as an exact-byte fast path instead of moving the base64 payload through the ~10 KiB/s TTY bridge.

It does **not** prove `output_hint` is a guaranteed imagegen API contract. The only authorized next step is one bounded live canary that verifies the same relationship on a newly generated result.

One harness correction is retained as non-blocking evidence: an initial synthetic traversal case was normalized before the parser saw literal `..`; final artifacts were regenerated with the literal traversal preserved and correctly rejected. Prior accepted evidence was not modified.

# NEXT GATE — IMAGEGEN_OUTPUT_HINT_LOCAL_CACHE_LIVE_CANARY_R2R1I

## GATE_ID

`IMAGEGEN_OUTPUT_HINT_LOCAL_CACHE_LIVE_CANARY_R2R1I`

## OBJECTIVE

With exactly one live imagegen call, verify that a fresh result can be persisted through the optional verified local-cache fast path without transporting the multi-megabyte `image_url` through TTY.

## MAX_ENDPOINT_THIS_ROUND

1. no-image preflight of the exact live metadata/hash adapter and R2R1H strict path parser;
2. exactly one imagegen call: `C-VB01 attempt 1`;
3. compute the decoded `image_url` SHA-256 inside the orchestration/runtime context without emitting the base64 payload;
4. pass only bounded metadata plus `output_hint` to the local executor;
5. verify hinted local PNG path, hash equality and automatic copy;
6. run QA on the copied PNG;
7. fresh readback;
8. mandatory STOP at Reviewer.

No retry and no second imagegen call.

## TARGET_AND_SCOPE

Allowed: a new R2R1I evidence directory; R2R1H strict parser/path policy; a small live-result metadata adapter; one C-VB01 live imagegen call; local copy/hash; QA; bounded timing evidence.

Not allowed: bulk TTY transfer of `image_url`; directory scanning; fallback to another imagegen call; attempt 2; C-VB02; remaining Beats; concurrency 3; H019; transport redesign; formal Part 2/3/4/4.5/SKILL changes; prior-evidence mutation.

## ACCEPTED FACTS

- R2R1H proves the preserved sample's hinted file bytes exactly equal the decoded `image_url` bytes.
- R2R1G proves moving the full base64 image through TTY is the active performance bottleneck.
- `output_hint` remains optional and untrusted until each live result is verified.
- R2R1F already proved the normal adapter/logger/QA chain can persist live images when transport eventually completes.

## PREFLIGHT

Before imagegen:
1. rerun the R2R1H preserved-sample parser/hash/copy positive path using the exact parser intended for live use;
2. rerun the five fail-closed negative parser/path-policy cases;
3. prove the live-result metadata adapter can accept the preserved raw object and emit only bounded metadata: decoded image byte count, decoded image SHA-256, MIME/type, and `output_hint`;
4. prove no `image_url`/base64 value is emitted into ordinary logs or sent through TTY;
5. verify fresh destination/log paths are empty.

If the runtime cannot compute the decoded `image_url` hash without bulk payload transfer, return `RETURN_IMPLEMENTATION_DRIFT` before imagegen.

## LIVE CANARY

Only after preflight PASS:
- call imagegen exactly once for `C-VB01 attempt 1`;
- no retry under any outcome.

After the result returns:
1. in the orchestration/runtime context, validate the data URI and compute decoded image byte count + SHA-256;
2. emit only the small metadata packet plus `output_hint`; never emit the base64 payload;
3. strict-parse exactly one hinted PNG path;
4. require normalized real path beneath the allowed generated-images root;
5. require existing regular PNG;
6. hash the hinted local PNG;
7. require hinted-file SHA-256 == orchestration-computed decoded-`image_url` SHA-256;
8. copy the hinted PNG to the fresh R2R1I destination;
9. require copied-file SHA-256 equality;
10. run QA on the copied destination PNG;
11. record TASK_END and fresh readback.

If the hint is missing, malformed, ambiguous, outside policy, missing on disk, or hash-mismatched: fail closed, do not use TTY bulk fallback, and do not replay imagegen.

## REQUIRED EVIDENCE

- `PREFLIGHT_EVIDENCE_R2R1I.md`
- `RUN_EVENTS.jsonl` / `RUN_RECORD.json`
- `IMAGEGEN_OUTPUT_HINT_LOCAL_CACHE_LIVE_CANARY_R2R1I.md`
- live metadata adapter source
- strict parser source/version/hash
- bounded live metadata packet with no base64
- source hinted-file SHA-256
- copied-file SHA-256
- QA result
- parse / verify / copy / return-to-QA timings
- fresh-readback summary.

## ACCEPTANCE_CRITERIA

PASS_CANDIDATE requires all:
1. preflight PASS before imagegen;
2. exactly one imagegen call and no retry;
3. no bulk `image_url` transfer through TTY;
4. live metadata adapter computes decoded-image SHA in the result context;
5. exactly one live hinted path passes strict path policy;
6. hinted PNG exists and its SHA equals the decoded `image_url` SHA;
7. automatic local copy succeeds and preserves SHA;
8. copied PNG reaches QA;
9. event log is reconstructable with no unexplained loss;
10. timing evidence is direct;
11. no scope expansion;
12. fresh readback matches files/hashes/logs.

Content QA PASS or FAIL does not authorize retry. The existing output-size contract reconciliation remains separate.

Allowed Executor final states:
- `PASS_CANDIDATE_OUTPUT_HINT_LIVE_CANARY_R2R1I`
- `RETURN_TEST_FAILURE`
- `RETURN_IMPLEMENTATION_DRIFT`

A Reviewer PASS on R2R1I still does not authorize the full six-Beat test. Reviewer will next decide whether to run a two-concurrent live fast-path canary.

## OWNER_ONLY_ACTIONS

`NONE`

## REVIEWER_TO_EXECUTOR_RELAY

Read only: current `comic-narrative/HANDOFF.md`; this Reviewer decision; R2R1H parser source/results; C-VB01 task input. Do not read broad project history or scan generated-images.

STOP_AT_REVIEWER=YES.