# IMAGEGEN_DIRECT_OUTPUT_HINT_TWO_CONCURRENT_LIVE_CANARY_R2R1U — Reviewer Decision

> Date: 2026-10-04  
> Governance: `vps-project-governance/VNEXT.md` v0.2.6 @ `de2b38ec0e7f3ecceb1aeffa3fc7f033ed14429a`  
> Reviewer verdict: **RETURN_IMPLEMENTATION_DRIFT — ACCEPTED**  
> Imagegen calls: **2**  
> Retries / replacements / fallback-imagegen: **0 / 0 / 0**  
> Next Gate: **IMAGEGEN_OFFICIAL_HINT_PARSER_TWO_CONCURRENT_LIVE_CANARY_R2R1V**

## Evidence identity

Owner uploaded:

`_imagegen-direct-output-hint-two-concurrent-live-canary-r2r1u-20261003-180356961.zip`

Reviewer recomputed:

- ZIP SHA-256 = `8d737a14a50e0ee3560b433594131deb35e2ae0cbd239aacfd4067d889eb611b`
- execution report SHA-256 = `d79faecdb03a35914a67b46ba24bdb7c05ff20a94e53ef09ebccf90e44fcecd9`
- preflight SHA-256 = `f35570cc2f397b7ff849af4c12e38efd5b6adb0d985962343556e5987ffaa298`
- RUN_EVENTS SHA-256 = `2bf5ab51316b5c0fdad09c0fd2e2608d58ae78d7bfa92e30a4d475d51bf21fcf`
- RUN_RECORD SHA-256 = `bd8c013afbf1ada6d7e3aa8d8fd43bd96634b066ffce10339f2af14d8e040376`
- local_copy helper SHA-256 = `83f36a61800f209937ecf02bc6043d5c6b5ec77550573ab38cda0cd4a89df4d3`
- logger SHA-256 = `3cf1a5e6dca3a663c5e8af0a1c90655555b45d0a57925de3509773f7fe037aad`

## Verified facts

- no-image preflight passed;
- current main = `831ffea707a852aac2a06fd9843e3eb101f30e56`;
- Part 4 §25 blob = `3360312c5ec7b1248d4c46d8703a29290c7aae5f`;
- exactly two distinct built-in imagegen calls were submitted concurrently;
- both returned successfully;
- task A image call = 58.409s;
- task B image call = 58.408s;
- each result exposed exactly one output_hint;
- direct SourcePath mode was used;
- no JSON fallback / stdin / TTY / base64 / broad cache scan / retry / replacement / third call occurred;
- event log count = 19, sequence 1..19 contiguous;
- outputs = 0;
- both QA states = NOT_REACHED.

## Failure cause

The current SourcePath extractor used a generic Windows-path regex.

For task A it produced:

`C:\Users\34707\.codex\generated_images\<session> as C:\Users\34707\.codex\generated_images\<session>\<call>.png`

Task B had the same shape.

This is not one valid path. It is the **output directory + literal " as " + output file path** from the Codex output_hint sentence.

The local-copy helper correctly failed closed with `SOURCE_MISSING`.

## Upstream format confirmation

Current `openai/codex@main` confirms:

- `tool.rs` blob `d2777fb2023782ad7508fc4bddc097d33fb96359`: code-mode result exposes `image_url` and optional `output_hint`; it does **not** expose `saved_path` directly in the code-mode result object.
- `artifact.rs` blob `6c6fce0f9812d88daf5a53880a77485c6eea6cb3`: current hint first line is generated as:

`Generated images are saved to {image_output_dir} as {image_output_path} by default.`

Therefore the correct current-runtime fix is not a broader path regex and not a cache scan. It is a parser aligned to this template.

## Reviewer decision

Formal result:

`RETURN_IMPLEMENTATION_DRIFT — ACCEPTED`

Fault domain:

`OUTPUT_HINT_TEMPLATE_PARSER`

Not:

- imagegen concurrency;
- imagegen return;
- output_hint availability;
- logger;
- local-copy helper;
- size policy;
- historical evidence.

## Owner concurrency decision

Owner explicitly decided:

`IMAGEGEN_CONCURRENCY=2`

Do not test concurrency 3+ unless the Owner later explicitly changes this decision.

## Next-step parser rule

Parse only the first hint line and require the fixed prefix/suffix.

For every literal ` as ` split point inside the body:

1. left side = candidate output_dir;
2. right side = candidate output_path;
3. both must parse as absolute Windows paths;
4. output_path extension must be `.png`;
5. `Parent(output_path)` must equal output_dir, case-insensitive after normalization;
6. output_path must be under the allowed current-user generated_images root.

Require **exactly one** candidate satisfying all structural rules.

Then pass only that SourcePath to the already-proven local-copy helper.

This avoids greedy regex behavior and avoids broad filesystem scanning.
