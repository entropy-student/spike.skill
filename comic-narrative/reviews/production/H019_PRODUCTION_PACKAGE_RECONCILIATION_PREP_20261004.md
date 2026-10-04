# H019 Production Package Reconciliation Prep

> Date: 2026-10-04  
> Purpose: reconcile the existing H019 Part 4 execution package to the current production executor contract before spending 41 live image-generation calls.

## Source package

Library path:

`/comic-narrative/part4/examples/H019_酒店价格_Part4_精简图片执行包.zip`

Materialized source package SHA-256:

`e4e2f3ce2a29f06eb08ee2995fff95e6e8ac7ae2f6c5267072fd3d904a9a6d97`

Size:

`8,199,407 bytes`

## Verified package facts

- episode = H019 / 酒店价格;
- task count = 41;
- execution modes = 38 `重新生成` + 3 `基于已有完整图片修改`;
- DERIVE_EDIT-equivalent tasks:
  - C-VB05 ← C-VB02;
  - C-VB19 ← C-VB18;
  - C-VB33 ← C-VB32;
- 39 tasks declare C-VB02 as a continuity dependency/reference;
- exact/native-text-sensitive tasks:
  - C-VB04 requires exact `可以`;
  - C-VB41 allows exactly one of `无房` / `售罄`;
- all 41 tasks declare 16:9 and `1920x1080`;
- all 41 tasks say technical retry is allowed;
- package contains three reference PNGs: 主角 / 主画风 / 辅助画风.

## Current-contract drift requiring reconciliation

### 1. Native size semantics

The historical package says `1920x1080` in each task. Under current Part 4 §25 this must be interpreted only as target/final canvas metadata:

- aspect ratio = 16:9;
- target_canvas = 1920x1080;
- native_pixel_target = NONE;
- native mismatch alone does not fail or retry.

### 2. Destination layout

The historical package uses `已完成图片/<beat>.png` references. Current accepted production output convention is:

`<run_root>\outputs\<task_id>\<task_id>.png`

All dependency/source references must resolve to the actual nested production path rather than the historical flat path.

### 3. Canonical reference images

The package's style-reference file sizes match the current repository style masters:

- 主画风 package = 3,351,964 bytes; current `STYLE_PRIMARY_TWO_PERSON_DINING.png` = 3,351,964 bytes;
- 辅助画风 package = 3,395,960 bytes; current `STYLE_SECONDARY_SINGLE_PERSON_DINING.png` = 3,395,960 bytes.

The package protagonist image is stale by size:

- package 主角 = 1,446,131 bytes;
- current canonical `comic-narrative/part3/assets/characters/MAIN_CHARACTER_MASTER.png` = 1,915,948 bytes.

Therefore the reconciled production package must copy fresh current canonical reference binaries from the GitHub worktree and record fresh SHA-256 values. Do not carry forward the old protagonist binary.

### 4. Current execution modes

Current Part 4 allows:

- GENERATE;
- DERIVE_EDIT;
- EXACT full-frame carry-over/reuse.

It forbids:

- COMPOSITE_CROP;
- cut-and-paste assembly;
- external layer composition;
- SVG/HTML/Canvas/PIL text;
- POST_OVERLAY.

The existing H019 package uses only generate/edit semantics and is structurally compatible after field/path reconciliation.

### 5. Exact text

C-VB04 and C-VB41 remain native-image text requirements. No POST_OVERLAY fallback is allowed. Failure routes to the task's text/content failure path.

## Next Gate

`H019_PRODUCTION_PACKAGE_RECONCILIATION_R1`

The Gate is zero-image. It produces a current self-contained H019 production package and scheduler manifest from the historical package plus current canonical assets/contracts. No story/beat/camera/POV meaning may change.
