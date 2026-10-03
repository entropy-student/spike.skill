# IMAGEGEN_NATIVE_SIZE_CONTRACT_PROPAGATION_R2R1M — Reviewer Decision

> Date: 2026-10-03  
> Governance: `vps-project-governance/VNEXT.md` v0.2.6 @ `de2b38ec0e7f3ecceb1aeffa3fc7f033ed14429a`  
> Reviewer verdict: **RETURN_EXECUTION_CONTRACT_UNRESOLVED — ACCEPTED**  
> Imagegen calls: **0**  
> Retries: **0**  
> Next: **OWNER DECISION / exact-size execution channel**

## Evidence identity

Owner uploaded:

- `_imagegen-native-size-contract-propagation-live-canary-r2r1m.zip`
- Reviewer-computed SHA-256: `aa4821a0c9001c75c3fadd7e3e7ed86650efc4a125dc0ee13043c82ee0ea4fc3`

The ZIP was path-safety checked before extraction. It contains:

- `IMAGEGEN_NATIVE_SIZE_CONTRACT_PROPAGATION_LIVE_CANARY_R2R1M.md`
- `PREFLIGHT_EVIDENCE_R2R1M.md`
- `R2R1M_TEST_TASK.json`
- `STRUCTURED_REQUEST_DRY_RENDER.json`
- `ONE_CALL_GUARD.json`
- `RUN_EVENTS.jsonl`
- `RUN_RECORD.json`
- `FRESH_READBACK_R2R1M.json`
- empty `outputs/`

## Reviewer fresh inspection

Reviewer independently parsed all JSON / JSONL and recomputed artifact hashes.

Verified:

- task SHA-256 = `1c694da7659bd9336b8095bd31b327afd393fa2ded5fa9b6f725365d82480e96`;
- dry-render SHA-256 = `c6b4f9f05cb14f0dbedfc1c8d6b33b01892a42271ef0258c26c0d4ee20dc8911`;
- guard SHA-256 = `ca288ab1e5a3e1a47f21ce7660af6904f0d2ab0b351df3e5430a42e1091f223b`;
- events SHA-256 = `8bc33802f1b5c0721c6a68f359c8b5d550d774803386f6502dede3d97e58d945`;
- run-record SHA-256 = `171736142d605cb4ba33f38a94fd1e814840f181f4135206bda4def34ac2ea1b`;
- report SHA-256 = `05fb4c13d4832b92dd5bf8d8cc691a2128df9c1267acdc9eb6bc8da21a43d370`;
- preflight SHA-256 = `e6d8da34b15f27cab683cdc900e23631b0a3aa93eb243bd1ef0ca7da6065902d`.

All seven hashes equal the values in `FRESH_READBACK_R2R1M.json`.

`RUN_EVENTS.jsonl` contains exactly eight events with contiguous sequence 1–8.

## Contract evidence

The new synthetic fixture correctly separates:

- `aspect_ratio = 16:9`;
- `native_generation_target = 1792×1008`;
- `final_delivery_target = 1920×1080`.

The fixture prompt intentionally contains no pixel-dimension claim, so prompt wording cannot masquerade as structured size evidence.

## Blocking fact

The inspected Windows/Codex callable was `image_gen.imagegen`.

Its dry-rendered callable argument surface contains:

- `prompt`
- `transparent_background`
- `referenced_image_paths`
- `num_last_images_to_include`

It exposes no `size`, `width`, `height`, or `resolution` argument.

The actual structured argument object therefore contains only `prompt`, and `native_generation_target_mapping = UNAVAILABLE`.

This directly triggers R2R1M Preflight item 8:

> if the current tool/provider cannot expose a provable `1792×1008` native-size parameter, return `RETURN_EXECUTION_CONTRACT_UNRESOLVED` with `IMAGEGEN_CALLS=0`.

## Fail-closed verification

Reviewer confirms:

- `IMAGEGEN_CALLS=0`;
- retries = 0;
- fallback calls = 0;
- no returned raster;
- QA = NOT_RUN;
- one-call guard remained unused;
- output directory remained empty;
- no formal Part 2 / Part 3 / Part 4 / Part 4.5 / SKILL mutation is evidenced;
- historical C-VB01 / R2R1J evidence was not rewritten.

Therefore the Executor obeyed the Gate and stopped at the correct boundary.

## Main-drift reconciliation

The Executor ran against canonical GitHub `main@fe36ce8f1ccf561d9e0059fd5b73d7c0741f028a`.

Current `main` later advanced only through Reviewer evidence-reconciliation records. Fresh Reviewer readback confirms Part 4 §25 still has blob:

`7487138f06dc5ed99916d4b02d9a8753cbe6ba18`

and still states:

- 16:9 only;
- native 1792×1008;
- final delivery 1920×1080.

The later Reviewer-only main change does not invalidate R2R1M evidence.

## External capability reconciliation

Current OpenAI documentation (checked 2026-10-03) distinguishes the **product-integrated Codex callable inspected by R2R1M** from the public API capability.

Official OpenAI Image API / Responses image-generation documentation exposes a structured `size` option and supports custom `WIDTHxHEIGHT` sizes under documented constraints.

Sources:

- https://developers.openai.com/api/docs/guides/image-generation
- https://developers.openai.com/api/reference/cli/resources/images/methods/generate
- https://developers.openai.com/api/docs/guides/tools-image-generation

Therefore the accepted technical classification is:

```text
GPT_IMAGE_PLATFORM_EXACT_SIZE_CAPABILITY = SUPPORTED
CURRENT_CODEX_BUILTIN_CALLABLE_EXACT_SIZE_CAPABILITY = NOT_EXPOSED
R2R1L_EXACT_NATIVE_CONTRACT_ON_CURRENT_DEFAULT_CHANNEL = UNSATISFIABLE
```

This is an **execution-channel contract mismatch**, not evidence that GPT Image itself cannot generate custom sizes.

## Billing / authority boundary

OpenAI's current billing documentation states that API Platform billing is separate from ChatGPT subscription billing.

Sources:

- https://help.openai.com/en/articles/9039756-managing-billing-for-chatgpt-and-the-api-platform
- https://help.openai.com/en/articles/6950777-what-is-chatgpt-plus

Moving production image generation from the current plan-native Codex callable to API image generation may therefore create separate API usage charges and credential requirements.

Under Governance, that cost/account decision is Owner-owned.

## Reviewer decision

Formal R2R1M result:

`RETURN_EXECUTION_CONTRACT_UNRESOLVED — ACCEPTED`

No live image was consumed.

No additional diagnostic imagegen retry is justified.

## Decision boundary before next live call

There are now two materially different paths:

### A — Preserve exact native 1792×1008

Use an execution interface that exposes structured `size=1792x1008`, such as a supported OpenAI API image-generation path.

This preserves the Owner-approved exact-native rule, but may require separate API billing / API credential authority.

### B — Preserve current plan-native Codex callable

Keep the existing Codex built-in image generation path.

This avoids an execution-channel switch, but the current evidence shows it cannot prove an exact native `1792×1008` request. Choosing this path requires revising the R2R1L exact-native production rule; prompt-only sizing is not accepted as an equivalent control.

Reviewer cannot choose between A and B because the tradeoff includes real cost/account authority versus changing an explicit Owner production rule.

STOP pending Owner decision.
