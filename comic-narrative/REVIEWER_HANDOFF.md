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

`READY / OWNER_PAUSED_PRODUCTION_TARGET_SELECTION`

当前状态：

- imagegen executor reliability 已正式封板；
- H019 酒店价格 41 图生产 **DEFERRED_BY_OWNER**，当前不测试该剧本；
- 当前没有正在执行的 live production Gate；
- 等 Owner 之后选择下一篇正式生产目标，再从 current Part 3 / Part 4 / Part 4.5 合同编译新的生产 Gate。

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
- **Part 2**：`part2/SCRIPT_NARRATIVE.md` 为现行正式规则；11 项 edit map 仍等待 Owner 逐项批准，未写入正文。
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
- **Part 5 / Part 6**：PENDING。

## CURRENT_GATE

### GATE_ID

PROJECT_IDLE_OWNER_TARGET_SELECTION

### OBJECTIVE

保持项目在可恢复、可生产状态；不自动启动 H019 或其他剧本的图片生产。

Owner 选择下一篇正式生产目标后，由 Reviewer 基于 current canonical Part 3 / Part 4 / Part 4.5 和已封板 imagegen fast-path 新建对应 production Gate。

### MAX_ENDPOINT_THIS_ROUND

- no live imagegen；
- no production package execution；
- no H019 reconciliation execution；
- no formal Part 0–4.5 rule mutation；
- only maintenance / read-only inspection if Owner requests it。

### MANDATORY_REVIEW_STOP

`STOP_AT_REVIEWER=YES`

任何新的正式生产任务必须先形成新的明确 Gate，不得从历史 Handoff / review 文档直接恢复旧 Gate 执行。

### TARGET_AND_SCOPE

当前启动面仅包括：

1. `comic-narrative/SKILL.md`；
2. 本 `REVIEWER_HANDOFF.md`；
3. Owner 明确选择的下一生产目标所需 current canonical Part 文档；
4. 已封板 canonical fast-path tools。

历史材料只在明确追溯需要时读取：

- `comic-narrative/history/`
- `comic-narrative/reviews/`
- `comic-narrative/source-snapshots/`

### APPLICABLE_CRITICAL_CONSTRAINTS

- accepted capability inheritance applies；
- PASS_CANDIDATE != PASS；
- imagegen concurrency 固定为 2，除非 Owner 以后明确改口；
- 不因旧 evidence 目录缺失自动重验已 PASS 能力；
- 不从历史 Gate 自动恢复生产；
- H019 当前 DEFERRED_BY_OWNER；
- Part 2 edit map 未获 Owner 批准前不得写入正式正文；
- Part 5 / Part 6 未迁移前不得假装已完成。

### PREFLIGHT

当前无执行任务，因此无运行 preflight。

未来 production Gate 至少 fresh-read：

- current main；
- current REVIEWER_HANDOFF；
- 目标剧本的 current upstream package / Part 3 / Part 4 contract；
- canonical imagegen fast-path tools。

### REQUIRED_EVIDENCE

当前 idle Gate 不产生执行 evidence。

未来生产任务按新 Gate 单独定义 evidence，不复用历史 Gate 的临时路径作为运行依赖。

### ACCEPTANCE_CRITERIA

当前 idle 状态成立，只要：

- 无未授权 live production；
- current root 启动面保持简洁；
- H019 不被自动执行；
- 下一生产目标等待 Owner 后续选择。

### ROLLBACK_STATUS_OR_PLAN

本轮根目录整理只移动历史文档与压缩当前 Handoff；历史内容保留在 `history/` / `reviews/`，无信息删除。

### OWNER_ONLY_ACTIONS

NONE

Owner 以后想继续生产时，只需告诉 Reviewer 要跑哪一篇/哪一个执行包。

### REVIEWER_TO_EXECUTOR_RELAY

当前 **没有 Executor 任务**。

不要执行 H019，不要调用 imagegen，不要从历史 review / legacy Handoff 恢复旧 Gate。

### EXECUTOR_TO_REVIEWER_RELAY

```text
NONE — NO EXECUTOR TASK IS CURRENTLY AUTHORIZED.
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
- 当前状态：无 live Executor。
- 下一正式生产任务：Owner 选择目标后由 Reviewer 新建 Gate。
- Windows/Codex local paths 必须由对应新 Gate 证明，不从历史路径猜测。

## CURRENT_ROLLBACK_STATUS

- Part 0–4.5 canonical baseline 保持可追溯。
- imagegen fast-path canonical tools 已封板并留在仓库。
- 本轮根目录整理不删除历史事实，只改变历史文档位置与当前启动面的内容密度。
- H019 未开始新的 41-task production run，因此无新生产输出需要回滚。

## UNRESOLVED

1. **下一正式生产目标**：尚未选择。
2. **Part 2**：11 项 edit map 等待 Owner 逐项批准。
3. **Style Plate / Part 3→Part 4 style contract**：仍有后续独立对齐空间。
4. **Part 5 / Part 6**：尚未正式迁移。
5. **Final video 1920×1080 adaptation**：留待 Part 5 实现。

## NEXT_STEP

NONE 当前不执行。

Owner 后续选择下一篇正式剧本 / 执行包后：

`选择 production target → fresh-read current contracts → compile production Gate/package → Reviewer approval → live imagegen`

## OWNER_ACTION_REQUIRED

NONE

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
