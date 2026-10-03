# IMAGEGEN_OUTPUT_SIZE_CONTRACT_RECONCILIATION_R2R1K — Reviewer Decision

> Date: 2026-10-03  
> Governance: `vps-project-governance/VNEXT.md` v0.2.6  
> Reviewer verdict: **RETURN_IMPLEMENTATION_DRIFT — ACCEPTED WITH CORRECTED FAULT ATTRIBUTION**  
> Next Gate: **IMAGEGEN_FINAL_DELIVERY_NORMALIZATION_POLICY_R2R1L**  
> Formal Part 2 / Part 3 / Part 4 / Part 4.5 / SKILL changes: **NONE**

## Evidence reviewed

Owner supplied:
- `IMAGEGEN_OUTPUT_SIZE_CONTRACT_RECONCILIATION_R2R1K.md`
- `FRESH_READBACK_R2R1K.json`

Fresh Reviewer readback additionally inspected:
- current GitHub `main@73e6c4c75fc450758db593d7d20cf57fe0fc6edd`;
- `comic-narrative/REVIEWER_HANDOFF.md`;
- R2R1J Reviewer decision;
- R2R1F Reviewer decision;
- current Part 4 §25;
- legacy `HANDOFF.md` references to the output-size mismatch;
- historical source snapshots for:
  - `ASSET_COMPILER.md`;
  - `G4_DIRECTOR_COMPILER_CONTRACT.md`;
  - `LOW_LEVEL_EXECUTION_PACKAGE.md`;
  - `PIPELINE_AND_GATES.md`;
  - legacy final-output spec.

## Verified facts from Executor evidence

- `IMAGEGEN_CALLS=0`.
- `CONTENT_RETRIES=0`.
- Preserved C-VB01/C-VB02 task JSON SHA-256:
  `b1da6737b01761d77cd41f955ca55277d08cf0660e743b7e1998cf8cc4098eba`.
- The preserved C-VB01 task contains:
  - `输出.画幅 = 16:9`
  - `输出.尺寸 = 1920x1080`
  - generation text beginning with a request for a `16:9、1920×1080` complete raster.
- R2R1F C-VB01 preserved PNG = **1672×941**.
- R2R1J C-VB01 preserved PNG = **1672×941**.
- Current formal Part 4 §25 says:
  - default 16:9;
  - `1920×1080 final delivery target`.
- Part 4 §25 does not define native imagegen pixel dimensions, minimum native resolution, or a normalization/upscale procedure.

## Reviewer correction 1 — canonical ref drift

Executor inspected:
`origin/codex/comic-narrative-part4-snapshot@90d527598183ff0a08300b9eab18a2849bf82897`

and therefore reported that:
- `REVIEWER_HANDOFF.md` was absent;
- R2R1J Reviewer decision was absent;
- R2R1J Reviewer acceptance was unavailable.

Those claims are **not true for the canonical current state**.

Fresh Reviewer readback proves that current:
`main@73e6c4c75fc450758db593d7d20cf57fe0fc6edd`

contains both:
- `comic-narrative/REVIEWER_HANDOFF.md`;
- `comic-narrative/reviews/imagegen-speed/IMAGEGEN_OUTPUT_HINT_GUARD_REPAIR_LIVE_CANARY_R2R1J_REVIEW.md`.

R2R1J canonical Reviewer verdict is **PASS**.

Therefore this portion of R2R1K evidence is classified:
`STALE_CANONICAL_REF / EXECUTION_SOURCE_DRIFT`.

It does not invalidate the local file hashes or raster measurements that were independently recorded.

## Reviewer correction 2 — "compiler source" assumption

R2R1K Gate required the exact task compiler/schema/template/generator path and hash.

Executor correctly did **not** invent one when it could not find one.

However, historical project evidence shows that the project's "Prompt/Edit Compiler" / "Image Asset Package Compiler" was defined primarily as a **logical Agent compilation stage and contract**, not necessarily as a deterministic executable source file.

Historical documents define a pipeline such as:

`Visual Beat → Blueprint → Asset Binding → Execution Mode → Prompt/Edit Compiler → Execution Package`

and specify fields such as prompt, aspect ratio, resolution, references, output name and acceptance. They do not prove that the preserved C-VB01 JSON was created by a standalone compiler program whose file/hash must still exist.

Therefore:

- exact generator provenance for this historical task packet is **NOT_PRESERVED / UNKNOWN**;
- Owner should **not** be asked to provide a compiler binary/source path unless one is independently discovered;
- absence of such a file must not become an endless blocker.

## Contract adjudication

The evidence is sufficient to establish a historical semantic mismatch even without a generator source file:

1. formal Part 4 defines `1920×1080` as **final delivery target**;
2. preserved C-VB01 task explicitly requests `1920×1080` inside the image-generation instruction;
3. repeated provider-native outputs are `1672×941`;
4. no accepted rule defines how native raster is normalized to final delivery.

Therefore the current classification is:

`FORMAL_POLICY = FINAL_DELIVERY_TARGET`

`HISTORICAL_TASK_PACKET = OVER-SPECIFIED_NATIVE_REQUEST`

`OBSERVED_PROVIDER_NATIVE = 1672×941`

`FINAL_DELIVERY_NORMALIZATION = UNDEFINED`

This is a genuine historical contract debt.

The preserved task packet remains evidence and must not be rewritten.

## Reviewer verdict

Formal result:

**RETURN_IMPLEMENTATION_DRIFT — ACCEPTED WITH CORRECTED FAULT ATTRIBUTION**

Accepted:
- zero imagegen / zero content retry;
- preserved task hash;
- repeated 1672×941 measurements;
- Part 4 final-delivery wording;
- no unsupported repair.

Not accepted as canonical truth:
- missing current Reviewer handoff;
- missing R2R1J Reviewer decision;
- R2R1J acceptance unknown.

The next action is **not** another search for a possibly nonexistent compiler source.

# NEXT GATE — IMAGEGEN_FINAL_DELIVERY_NORMALIZATION_POLICY_R2R1L

## OBJECTIVE

Resolve the actual remaining policy gap:

> When the provider returns a valid 16:9-ish native raster that is not exactly 1920×1080, what is the allowed path to the formal 1920×1080 final delivery target?

This Gate must separate:
- provider-native raster dimensions;
- image-content QA;
- delivery normalization;
- final-delivery QA.

## MAX_ENDPOINT_THIS_ROUND

1. `IMAGEGEN_CALLS=0`.
2. Start from current GitHub `main`, not a historical feature branch.
3. Use preserved R2R1F/R2R1J 1672×941 images as fixtures.
4. Produce a bounded normalization-policy proposal.
5. Do not modify formal Part 4 until Owner approves the policy.
6. If Owner approval is already supplied, apply only the approved policy in a separately bounded formal-rule patch.
7. No content retry.
8. STOP_AT_REVIEWER.

## REQUIRED POLICY DECISION

Reviewer recommends the following direction for Owner approval:

- `1920×1080` remains the **final delivery target**, not a guaranteed provider-native output size.
- Native imagegen raster size is recorded as observed output and is not failed solely for not being exactly 1920×1080.
- A non-1920 native raster is **not automatically final-delivery PASS**.
- After image/content QA, an explicit deterministic normalization step may produce 1920×1080 final delivery.
- Normalization must not change story meaning, focal structure, or remove causal information.
- No minimum native resolution threshold is invented in this Gate; that requires evidence/calibration if later needed.

The specific resize/normalization implementation should be tested on preserved fixtures before live reruns.

## OWNER_ONLY_ACTION

Owner must approve or reject the above native-vs-final-delivery policy split before it enters formal Part 4.

No image generation is needed for that decision.

## CONSTRAINTS

- do not chase an unproven historical compiler file;
- do not edit preserved C-VB01 task evidence;
- do not mark 1672×941 as final-delivery PASS;
- do not rerun C-VB01 content;
- do not run C-VB02;
- do not run concurrency tests;
- do not run six-Beat;
- do not run H019;
- do not modify Part 2/3/4/4.5/SKILL before Owner policy approval.

STOP_AT_REVIEWER=YES.
