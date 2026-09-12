# RemotionUI source-reuse proof

Goal: verify that a complex RemotionUI composition can be reused **as copied source**, with only copy/text substitutions and no motion rewrite.

Chosen template: `ai-composer-showcase` (Advanced Composition, 533 frames @ 30fps, 1920×1080).

Execution is handled by `.github/workflows/remotionui-reuse-proof.yml`:

1. Scaffold a fresh RemotionUI project using the official CLI.
2. Install `ai-composer-showcase` using `npx remotion-ui@latest add ai-composer-showcase`.
3. Save an untouched copy of the installed composition source.
4. Modify text strings only in the installed `ai-composer-showcase/index.tsx`.
5. Produce a no-index diff proving the changes.
6. Run `remotion-ui doctor` and render the official `AiComposerShowcase` composition.
7. Upload the rendered MP4, the generated project, source diff, and probe metadata as an Actions artifact.

No animation timings, interpolation/spring logic, scene structure, transition logic, geometry, colors, or component code are intentionally rewritten by this test.