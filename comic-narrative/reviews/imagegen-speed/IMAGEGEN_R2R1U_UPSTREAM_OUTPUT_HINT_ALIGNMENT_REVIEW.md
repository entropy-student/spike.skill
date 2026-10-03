# IMAGEGEN R2R1U — Upstream output_hint alignment

> Date: 2026-10-04  
> Governance: `vps-project-governance/VNEXT.md` v0.2.6 @ `de2b38ec0e7f3ecceb1aeffa3fc7f033ed14429a`  
> Purpose: refine the not-yet-executed R2R1U Gate using current upstream Codex implementation and the already observed R2R1T live result.

## Upstream facts checked

Current `openai/codex@main`:

1. `codex-rs/ext/image-generation/src/tool.rs`
   - blob: `d2777fb2023782ad7508fc4bddc097d33fb96359`
   - image-generation result model includes `saved_path`
   - tool uses `image_generation_output_hint`
   - built-in tool owns generated-image persistence.

2. `codex-rs/ext/image-generation/src/artifact.rs`
   - blob: `6c6fce0f9812d88daf5a53880a77485c6eea6cb3`
   - output hint explicitly says generated images are already saved and, if another path is needed, copy the generated image and leave the original in place.
   - hint length is bounded upstream.

3. `codex-rs/skills/src/assets/samples/imagegen/SKILL.md`
   - blob: `c39b1f921ce679f08416ab16ceb01945835bb950`
   - built-in image_gen is the preferred default;
   - generated images are saved under `$CODEX_HOME/*`;
   - project assets should be copied/moved from `$CODEX_HOME/generated_images/...`;
   - multiple distinct assets should use separate built-in calls.

## Local relevance

R2R1T already empirically proved on the Owner's current Codex environment:

- two distinct built-in imagegen calls can be submitted concurrently;
- both live calls returned;
- each result contained exactly one output_hint;
- failure happened only after return because the custom saver attempted to read stdin after it was closed.

Therefore upstream documentation/source and local evidence point in the same direction:

> Do not invent another long-lived image-payload/result transport. Consume the returned output_hint/path directly, then perform local file verification/copy.

## R2R1U execution preference

Preferred path:

```text
image_gen result
→ current orchestrator reads output_hint
→ extract exactly one absolute PNG path
→ verify path is under allowed generated_images root
→ local helper receives only SourcePath + Destination + TaskId
→ file exists / hash / copy / dimensions / QA
```

The helper should not receive the raw image bytes and should not wait on stdin.

### Bounded fallback

Only if the current orchestrator cannot safely pass the extracted source path directly to the local helper in the same run:

```text
output_hint
→ orchestrator extracts source_path
→ small task-scoped JSON {task_id, source_path}
→ helper reads JSON
```

This fallback is allowed in the same R2R1U Gate without a Reviewer round-trip.

The fallback JSON should contain the **extracted source_path**, not the full image payload and preferably not the full raw output_hint.

## Explicitly rejected paths

- stdin / write_stdin transport;
- TTY/base64 image transfer;
- broad scanning of generated_images;
- replaying historical R2R1J local packages;
- adding a separate saver process that waits before the image result exists;
- reopening exact-native pixel research.

## Version limitation

The upstream blobs above describe current `openai/codex@main`, not proof that the Owner's installed binary is byte-identical.

R2R1T live evidence bridges the relevant compatibility point: the installed environment already returned exactly one output_hint per live call.

R2R1U should therefore test only the remaining current-runtime invariant: direct path consumption and local copy/QA.
