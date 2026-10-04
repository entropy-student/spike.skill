# 漫画叙事 — REVIEWER_HANDOFF

> GOVERNANCE=`vps-project-governance/VNEXT.md v0.2.6`  
> CURRENT_STATE_AUTHORITY=THIS_FILE  
> LEGACY_HISTORY=`comic-narrative/history/HANDOFF.md`  
> LAST_RECONCILED=2026-10-04

本文件只维护**当前状态、当前 Gate、关键约束和下一步**。历史迁移、旧执行轮次、长篇审计与失败链不再堆在根目录启动面；需要追溯时读取 `history/`、`reviews/` 或 `source-snapshots/`。

## PROJECT_GOAL

建立可复用的漫画叙事生产链：

`选题 → 剧本 → 最终配音/SRT → 分镜 → 图片资产 → 素材复用 → 视频时间轴/成片`

当前正式实现覆盖 Part 0–4.5；Part 5–6 尚未完成正式迁移。

## PROJECT_STAGE

`ACTIVE_REVIEW / H003_H004_PART2_OWNER_REVIEW`

当前状态：

- H003「家庭食谱」已完成 Part 2 完整草案，状态 `DRAFT_FOR_OWNER_REVIEW`；
- H004「恋爱冲突」已完成 Part 2 完整草案，状态 `DRAFT_FOR_OWNER_REVIEW`；
- 两篇均已锁定机制边界、故事前提、3–5 分钟口播草案、事实映射和 Part 2 自检；
- 当前不进入 Part 2.5，不生成配音/SRT，不进入分镜或生图；等待 Owner 分别审核两篇。
## SYSTEM_MAP

```text
Part 0  历史选题库
  ↓
Part 1  选题与内容策略
  ↓
Part 2  剧本与叙事
  ↓
Part 2.5 最终配音 / SRT 对齐
  ↓
Part 3  分镜与视觉导演
  ↓
Part 4 + Part 4.5 图片规划 / 图片执行 / 素材复用
  ↓
Part 5  视频时间轴 / 合成 / 成片      [PENDING]
  ↓
Part 6  执行与项目管理               [PENDING]
```

## CURRENT_ACCEPTED_STATE

- **Part 0 / Part 1**：正式基线已建立。
- **New confirmed topics H021–H023**：Part 1 五项硬检查 + Part 0 D1–D5 复查均 PASS，已写入 `part0/TOPIC_LIBRARY.md`；三题分别为降噪耳机、手机夜景、AI 修老照片。尚未自动进入 Part 2。
- **Part 2**：`part2/SCRIPT_NARRATIVE.md` 为现行正式规则；11 项 edit map 仍等待 Owner 逐项批准，未写入正文。
- **H003/H004 Part 2 drafts**：已分别生成 `part2/cases/H003_家庭食谱_PART2_DRAFT.md` 与 `part2/cases/H004_恋爱冲突_PART2_DRAFT.md`；均未锁稿。
- **Part 2.5**：`part2_5/VOICE_SRT_ALIGNMENT.md` 为正式配音 / SRT 对齐基线。
- **Part 3**：`part3/STORYBOARD_VISUAL_DIRECTOR.md` 为当前视觉导演基线；长期角色 / 画风资产位于 `part3/assets/`。
- **Part 4**：`part4/IMAGE_ASSET_EXECUTION.md` 保持封板；图片规划 Agent 与生图执行 Agent 职责分离。
- **Part 4.5**：`part4_5/ASSET_REUSE_LIBRARY.md` 为当前素材复用与入库基线。
- **Imagegen executor reliability**：正式 **PASS / CLOSED**。生产默认继承：
  - Codex built-in imagegen；
  - concurrency = 2；
  - canonical fast-path tools = `comic-narrative/tools/imagegen-fast-path/`；
  - `output_hint → canonical consumer → official hint parser → SourcePath → local copy → SHA/dimensions → QA`；
  - production destination = `<run_root>/outputs/<task_id>/<task_id>.png`；
  - native pixel target = NONE；
  - 16:9 为唯一正式画幅；
  - 1920×1080 为 target/final canvas；
  - native pixel mismatch 本身不失败、不重生。
- **H019 酒店价格**：历史 41-task 执行包及 reconciliation prep 均保留为历史/候选生产材料，但 Owner 已明确暂停，不是当前任务。
- **Local workspace cleanup R2**：正式 **PASS**。已删除 206 个 confirmed disposable 文件（33,241,076 bytes），归档暂停 H019 workspace 52 文件（316,939,451 bytes，52/52 SHA-256 verified），保留 2 个 KEEP_UNKNOWN 测试图片；`.git` 未改、tracked path=0、tracked changes=0。Executor 的 `RETURN_TEST_FAILURE` 由 Reviewer 纠正为 PASS，因为该本地 repo baseline 本身无 HEAD/remote/tracked files，porcelain-clean 条件不适用。
- **Local doc/evidence purge R3**：正式 **PASS**。17 个 proven-redundant 文件被删除，回收 153,449,311 bytes；3 个 H019 image-review ZIP 在 36/36 PNG hash 对应证明后删除；unique `审核其他资料.zip` 与未证明冗余的 QA/RUN/REVIEWER/queue 文档保留；H019 inputs/refs/tasks/manifest/36 outputs preserved；IMAGEGEN_CALLS=0。
- **Part 5 / Part 6**：PENDING。

## CURRENT_GATE

### GATE_ID

H003_H004_PART2_OWNER_REVIEW

### OBJECTIVE

让 Owner 分别审核 H003 与 H004 的 Part 2 草案，决定：确认锁稿、要求修改、或暂缓。

### MAX_ENDPOINT_THIS_ROUND

- no Part 2.5；
- no final TTS/SRT；
- no Part 3；
- no imagegen；
- no automatic script locking。

### MANDATORY_REVIEW_STOP

`STOP_AT_OWNER_REVIEW=YES`

### TARGET_AND_SCOPE

- `part2/cases/H003_家庭食谱_PART2_DRAFT.md`
- `part2/cases/H004_恋爱冲突_PART2_DRAFT.md`

### APPLICABLE_CRITICAL_CONSTRAINTS

- Part 2 current `SCRIPT_NARRATIVE.md` remains authoritative；
- H003 locked topic mechanism = `STANDARDIZATION_VS_TACIT_EXPERIENCE`；
- H004 locked topic mechanism = `HARMONY_VS_NECESSARY_FRICTION`；
- Writer may improve expression but must not silently change topic mechanism or evidence boundary；
- H003 must not become “AI/standardized recipes are useless”；
- H004 must not become “more conflict is always better” or “AI harms relationships”；
- fictional channel stories must not be presented as real-life personal experiences。

### PREFLIGHT

Owner reads each Part 2 draft independently。

### REQUIRED_EVIDENCE

Owner decision for H003 and H004 separately：

- APPROVE / LOCK；
- RETURN_FOR_EDIT + requested change；
- DEFER。

### ACCEPTANCE_CRITERIA

A script can move to `FINAL_LOCKED` only after explicit Owner approval for that script。

### ROLLBACK_STATUS_OR_PLAN

Both files are drafts. No downstream artifact exists, so edit/rollback is text-only。

### OWNER_ONLY_ACTIONS

Review H003 and H004 separately and approve or request changes。

### REVIEWER_TO_EXECUTOR_RELAY

NONE — do not continue downstream before Owner review。

### EXECUTOR_TO_REVIEWER_RELAY

```text
NONE — WAITING FOR OWNER REVIEW OF H003 AND H004 PART 2 DRAFTS.
```
## CRITICAL_CONSTRAINTS

- `PASS_CANDIDATE != PASS`。
- 已正式 PASS 的能力默认继承；只有相关实现/接口/运行环境发生可能影响能力的变化，或新证据与旧 PASS 冲突，才要求重验。
- imagegen concurrency = 2；不主动测试 3+。
- 16:9 是唯一正式画幅；1920×1080 是 target/final canvas；native pixel target = NONE。
- canonical imagegen fast-path 位于 `tools/imagegen-fast-path/`。
- production output 必须使用 `outputs/<task_id>/<task_id>.png` nested destination。
- 历史 `history/HANDOFF.md` 不作为 Reviewer / Executor 默认启动面。
- `reviews/` 是正式 Review 证据，不等于当前待执行 Gate。
- H019 当前暂停；未获得 Owner 新指令前不得启动其 41-task live production。

## DEFAULT_EXECUTION_CHANNEL

- Canonical docs / reviews：GitHub `main`。
- 当前状态：idle，无 live Executor。
- 下一正式生产任务由 Owner 选择目标后新建 Gate。
- Windows/Codex local paths 必须由对应 Gate 证明，不从历史路径猜测。

## CURRENT_ROLLBACK_STATUS

- Part 0–4.5 canonical baseline 保持可追溯。
- imagegen fast-path canonical tools 已封板并留在仓库。
- 本地 deep cleanup R2 已完成：confirmed disposable 已删除，H019 已归档，可按 exact mapping 恢复 archive 项。
- H019 未开始新的 41-task production run，因此无新生产输出需要回滚。

## UNRESOLVED

1. **H003/H004 Part 2**：两篇草案等待 Owner 分别审核。
2. **Part 2**：11 项 edit map 等待 Owner 逐项批准。
3. **Style Plate / Part 3→Part 4 style contract**：仍有后续独立对齐空间。
4. **Part 5 / Part 6**：尚未正式迁移。
5. **Final video 1920×1080 adaptation**：留待 Part 5 实现。

## NEXT_STEP

Owner 分别审核：

1. `H003_家庭食谱_PART2_DRAFT.md`；
2. `H004_恋爱冲突_PART2_DRAFT.md`。

只有 Owner 明确批准的稿件才进入：

`FINAL_LOCKED → Part 2.5 配音/SRT → Part 3`
## OWNER_ACTION_REQUIRED

- 分别告诉 Reviewer：H003 是否通过 / 要改什么；H004 是否通过 / 要改什么。
## EVIDENCE_POINTERS

- Legacy history: `comic-narrative/history/HANDOFF.md`
- History index: `comic-narrative/history/README.md`
- Current Part 2: `comic-narrative/part2/SCRIPT_NARRATIVE.md`
- Part 2 pending edit map: `comic-narrative/reviews/part2/PART2_FORMAL_EDIT_MAP.md`
- Current Part 3: `comic-narrative/part3/STORYBOARD_VISUAL_DIRECTOR.md`
- Current Part 4: `comic-narrative/part4/IMAGE_ASSET_EXECUTION.md`
- Current Part 4.5: `comic-narrative/part4_5/ASSET_REUSE_LIBRARY.md`
- Canonical imagegen tools: `comic-narrative/tools/imagegen-fast-path/`
- Final imagegen reliability closeout: `comic-narrative/reviews/imagegen-speed/IMAGEGEN_SYNTHETIC_SOURCE_CLEANUP_CLOSEOUT_R2R2R3_REVIEW.md`
- H019 reconciliation prep (paused): `comic-narrative/reviews/production/H019_PRODUCTION_PACKAGE_RECONCILIATION_PREP_20261004.md`
- Superseded root-only cleanup: `comic-narrative/reviews/maintenance/LOCAL_WORKSPACE_ROOT_CLEANUP_R1.md`
- Current deep cleanup plan: `comic-narrative/reviews/maintenance/LOCAL_WORKSPACE_DEEP_CLEANUP_R2.md`
- Deep cleanup R2 formal PASS: `comic-narrative/reviews/maintenance/LOCAL_WORKSPACE_DEEP_CLEANUP_R2_REVIEW.md`
