# IMAGEGEN_OFFICIAL_HINT_PARSER_TWO_CONCURRENT_LIVE_CANARY_R2R1V — Reviewer Decision

> Date: 2026-10-04  
> Governance: `vps-project-governance/VNEXT.md` v0.2.6 @ `de2b38ec0e7f3ecceb1aeffa3fc7f033ed14429a`  
> Reviewer verdict: **PASS**  
> Imagegen calls: **2**  
> Concurrency: **2**  
> Retries / replacements / fallback-imagegen: **0 / 0 / 0**  
> Next Gate: **IMAGEGEN_EXECUTOR_SIX_TASK_RELIABILITY_R2R2**

## Evidence identity

Reviewed Owner-provided package:

`_imagegen-official-hint-parser-two-concurrent-live-canary-r2r1v-20261004-012314293.zip`

Reviewer-computed ZIP SHA-256:

`013e0ec5e6fcf22159d068a2f7e1cd88e373dc894f8b804367a2696d8cf881dd`

Verified key file SHA-256 values:

- `source/official_hint_parser.ps1` = `f384f359ae83ddd01e36a78cd5a700c9029f30afadf68ae31253cce5f613ab62`
- `source/local_copy.ps1` = `8bb7ca05b202d2a4f8cdbb8d7a47bc70fbac35029f2a26ae7a35cf601260e3cd`
- `source/append_event.ps1` = `9c840d5a75d41937fba7d67bd6f3a6359de5347356b067d93492b748967c3efc`
- `outputs/canary-a/R2R1V-CANARY-A.png` = `2baa5293729316a069566699fcf94ca679386f0a89402d279143e74ea6b1bc0f`
- `outputs/canary-b/R2R1V-CANARY-B.png` = `d21b86835c8c29a6256dd92250353665c21694d923810a7ab1b910d318ccc6c4`

## Parser verification

The 0-image parser suite is independently readable and reports **6/6 PASS**:

1. official positive template;
2. missing suffix rejection;
3. parent mismatch rejection;
4. ambiguous two-valid-split rejection;
5. outside-root rejection;
6. R2R1U joined-candidate rejection.

The parser does not use the R2R1U generic greedy Windows-path regex. It:

- reads the first hint line;
- requires the current official prefix and suffix;
- enumerates literal ` as ` separators;
- validates absolute Windows paths;
- requires `Parent(output_path) == output_dir`;
- requires `.png`;
- requires allowed-root containment;
- requires exactly one structurally valid pair.

## Live execution verification

Exactly two distinct built-in imagegen calls were submitted concurrently.

Task A:
- image call = 55.333 s;
- output_hint_count = 1;
- transport = `DIRECT_SOURCE_PATH`;
- native output = 1672×941;
- source/copy SHA = `2baa5293729316a069566699fcf94ca679386f0a89402d279143e74ea6b1bc0f`;
- QA = PASS.

Task B:
- image call = 55.334 s;
- output_hint_count = 1;
- transport = `DIRECT_SOURCE_PATH`;
- native output = 1672×941;
- source/copy SHA = `d21b86835c8c29a6256dd92250353665c21694d923810a7ab1b910d318ccc6c4`;
- QA = PASS.

Reviewer independently opened both PNGs. Their visible content matches their task-level QA descriptions and no obvious person/text/logo/watermark contradiction was observed.

## Durable event/readback verification

- `RUN_EVENTS.jsonl`: 19 parseable events;
- event sequence: 1..19, contiguous;
- two IMAGE_SUBMITTED;
- two IMAGE_RETURNED;
- two HINT_PARSED;
- two IMAGE_SAVED;
- both QA paths reached and finished;
- two TASK_END = PASS;
- fresh readback reports all checks = true;
- imagegen_calls = 2;
- retries = 0;
- replacements = 0;
- fallback-imagegen = 0.

## Size-policy verification

Both outputs are 1672×941.

This is consistent with the current accepted policy:

- 16:9 is the required composition;
- 1920×1080 is target/final canvas metadata;
- native pixel target = NONE;
- native-pixel mismatch alone is not failure and does not trigger regeneration.

## Reviewer decision

`PASS`

The following capability is now formally accepted:

`concurrency=2 → built-in imagegen → official output_hint parser → direct SourcePath → allowed-root/exists → source SHA → local copy → copy SHA → native dimensions → QA → durable event/readback`

No historical local evidence directory is required for future use of this accepted capability unless a revalidation trigger occurs.

## Durable implementation promotion

The proven logic is promoted into:

`comic-narrative/tools/imagegen-fast-path/`

- `official_hint_parser.ps1`
- `local_copy.ps1`
- `append_event.ps1`
- `README.md`

Repository text normalization may change byte hashes relative to the local R2R1V package; R2R2 must run parser/helper/logger preflight from the repository copies before live calls. After that preflight passes, future Gates should use the repository tools rather than rebuild temporary equivalents.

## Owner concurrency decision

Normal imagegen concurrency is fixed at:

`2`

Do not test 3+ unless the Owner explicitly changes this decision.

## Next Gate rationale

A two-task canary proves one simultaneous pair, but the intended production pipeline will schedule many images.

R2R2 therefore tests the accepted path across **six independent tasks / three waves at fixed concurrency 2**, with the main remaining reliability question being queue refill and durable multi-wave execution.

To avoid reopening old content packages or forbidden historical modes, R2R2 uses a fresh fixed six-task reliability fixture stored in the repository.

It is an executor reliability test, not a new Part 3 / Part 4 content-rule test.
