# 漫画叙事 — REVIEWER_HANDOFF

> GOVERNANCE=`vps-project-governance/VNEXT.md v0.2.7`  
> CURRENT_STATE_AUTHORITY=THIS_FILE  
> LEGACY_HISTORY=`comic-narrative/history/HANDOFF.md`  
> LAST_RECONCILED=2026-10-05

本文件只维护**当前状态、当前 Gate、关键约束和下一步**。历史迁移、旧执行轮次、长篇审计与失败链不再堆在根目录启动面；需要追溯时读取 `history/`、`reviews/` 或 `source-snapshots/`。

## PROJECT_GOAL

建立可复用的漫画叙事生产链：

`选题 → 剧本 → 最终配音/SRT → 分镜 → 图片资产 → 素材复用 → 视频时间轴/成片`

当前正式实现覆盖 Part 0–4.5；Part 5–6 尚未完成正式迁移。

## PROJECT_STAGE

`READY / OWNER_PAUSED_PRODUCTION_TARGET_SELECTION`

当前状态：

- imagegen executor reliability 已正式封板；
- Windows 本地 `批量生图` 深度清理 R2 已正式 PASS；
- 本地文档/证据去冗余 R3 已正式 PASS；
- H019 酒店价格 41 图生产 **DEFERRED_BY_OWNER**，当前不测试该剧本；
- 当前无 Executor/live production 任务，等待 Owner 选择下一正式目标。
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

- **Part 0 / Part 1**：正式基线已建立。Part 0 当前共有 **100 个 Case**：H001–H023 保留为已接受 PASS 基线；H024–H100 为扩展候选 `CANDIDATE / EVIDENCE_PENDING`。Owner 已授权直接调整后 80 题，本轮冻结 H001–H020，对 H021–H100 做类型配平，并重写 9 个过度机制化候选。当前按主类型统计：机制 20、判断 18、惊奇 15、实用 15、体验 10、反思 8、趋势 8、探索 6。
- **Topic library**：H001–H100 均保留在 `part0/TOPIC_LIBRARY.md` 供历史去重与选题；其中 H001–H023 为 accepted PASS，H024–H100 为候选储备。候选必须先完成 Part 1 事实证据 Gate 与最终 D1–D5，再允许进入 Part 2；内部题面仍不自动等于最终发布标题。
- **Part 2**：`part2/SCRIPT_NARRATIVE.md` 为现行正式规则；已按 Owner 批准的最小方案加入“内部选题题面 ≠ 最终发布标题”的发布包装步骤：剧本锁定后生成 3 个差异化标题候选、1 个推荐标题、开场 Hook 与封面方向，并做真实性 / 非同义改写 / 非机械重复检查；11 项 edit map 仍等待 Owner 逐项批准，未写入正文。
- **Part 2.5**：`part2_5/VOICE_SRT_ALIGNMENT.md` 为正式配音 / SRT 对齐基线。
- **Part 3**：`part3/STORYBOARD_VISUAL_DIRECTOR.md` 为当前视觉导演基线；长期角色 / 画风资产位于 `part3/assets/`。Scene System 已明确按剧情 Scene / 状态阶段检查，不把物理地点数量当作 Scene 数量。
- **Part 4**：`part4/IMAGE_ASSET_EXECUTION.md` 保持封板；图片规划 Agent 与生图执行 Agent 职责分离。单集高频且连续性重要、漂移风险高的临时角色须在批量生图前判断是否需要 episode-local mini master；素材包完成前须跨 Part 2/2.5/3/4/4.5 与当前 imagegen 合同做整体复查。
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

PROJECT_IDLE_OWNER_TARGET_SELECTION

### OBJECTIVE

保持项目在可恢复、已清理、可继续生产的状态；不自动启动 H019 或其他剧本。

Owner 选择下一正式目标后，由 Reviewer 基于 current canonical Part 3 / Part 4 / Part 4.5 与已封板 imagegen fast-path 创建新的 production Gate。

### MAX_ENDPOINT_THIS_ROUND

- no live imagegen；
- no H019 production；
- no cleanup rerun；
- only read-only/maintenance inspection if Owner explicitly requests it。

### MANDATORY_REVIEW_STOP

`STOP_AT_REVIEWER=YES`

### TARGET_AND_SCOPE

当前无 Executor 任务。历史 cleanup/imagegen reviews 只在追溯时读取。

### APPLICABLE_CRITICAL_CONSTRAINTS

- accepted capability inheritance applies；
- H019 = DEFERRED_BY_OWNER；
- imagegen concurrency = 2；
- no automatic replay of closed reliability/cleanup Gates；
- local evidence is not a permanent runtime dependency；
- unknown/unique historical local files are not deleted without a new explicit maintenance decision。

### PREFLIGHT

NONE — idle。

### REQUIRED_EVIDENCE

NONE — idle。

### ACCEPTANCE_CRITERIA

Idle remains valid while no unauthorized production or cleanup task is started。

### ROLLBACK_STATUS_OR_PLAN

R2 archive mapping remains available for archived H019 restoration. R3 deletes were limited to proven redundant copies already durable elsewhere。

### OWNER_ONLY_ACTIONS

NONE

### REVIEWER_TO_EXECUTOR_RELAY

当前没有 Executor 任务。不要执行 H019，不要重跑 cleanup，不要调用 imagegen。

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
- 当前状态：idle，无 live Executor。
- 下一正式生产任务由 Owner 选择目标后新建 Gate。
- Windows/Codex local paths 必须由对应 Gate 证明，不从历史路径猜测。

## CURRENT_ROLLBACK_STATUS

- Part 0–4.5 canonical baseline 保持可追溯。
- imagegen fast-path canonical tools 已封板并留在仓库。
- 本地 deep cleanup R2 已完成：confirmed disposable 已删除，H019 已归档，可按 exact mapping 恢复 archive 项。
- H019 未开始新的 41-task production run，因此无新生产输出需要回滚。

## OWNER_DISCUSSION_CONTINUATION

Owner 于 2026-10-04 要求把本轮长对话整理进 `main`，用于下一 Reviewer 续接，但暂不修改 Part 0–4.5 / `SKILL.md` 正式正文。

续接入口：

- `reviews/continuity/OWNER_DISCUSSION_HANDOFF_20261004.md`
- `reviews/continuity/MATERIAL_PACKAGE_FOUR_SUPPLEMENTAL_CHECKS_20261004.md`

发布标题 / Hook 调研已完成，Owner 已批准最小接入方案并正式写入 Part 2：Part 1 继续保留内部 WHY 题面，最终发布包装在 Part 2 剧本锁定后编译；**Part 1 未修改，也未引入标题公式库**。H001–H023 的发布标题已在对话中完成一轮候选复查，但未写入题库作为永久标题，因为最终发布标题仍应以对应 Part 2 锁稿后的真实故事为准。

Owner 已确认的四项批量素材包补查现已完成正式对齐：Scene System 剧情状态已明确写入 Part 3；长 hold 原规则已完整覆盖、未重复修改；高频临时角色 Mini Master 判断与完成前跨模块整体复查已写入 Part 4。独立清单继续保留为来源记录。

H003 / H004 本轮测试仅在续接文档记录状态摘要；完整测试脚本、分镜和 ZIP 本轮未提交为 GitHub canonical production package。

当前新增两点续接记录：

- **机制标签与画面密度观察**：基于当前已完成并进入素材包库的 8 个样本，带“机制”标签的剧本（当前 H015 / H016 / H017）出现更长的平均单画面停留时长与更多长 hold；当前只记录为**小样本相关性信号**，不等同于“机制题必然稀疏”，也暂不修改 Part 1 / Part 3 正式规则。后续批量素材包继续积累样本后，再判断是否需要建立“机制型剧本视觉密度风险”检查。
- **批量素材包生产状态**：当前正在持续批量制作素材包，并将 Owner 复查通过的最新版本填入仓库外的 **X部分｜Owner认定执行包** 素材包库。当前已收录 H002、H003、H004、H007、H010、H015、H016、H017 共 8 个题；X 部分仍不是 GitHub canonical 项目规则，不反向修改 Part 0–4.5。后续新素材包继续按“制作 → 完成前跨模块复查 → 二次复查 → Owner 认定后入 X 库”的流程追加。

## UNRESOLVED

1. **下一测试目标**：不再限定 H021 / H022 / H023。Owner 可从 H001–H100 中选择；H001–H023 可直接进入 Part 2，H024–H100 必须先完成事实证据 Gate + 最终 D1–D5 后才能升级为 PASS 并进入 Part 2。
2. **Part 2**：11 项 edit map 等待 Owner 逐项批准。
3. **Style Plate / Part 3→Part 4 style contract**：仍有后续独立对齐空间。
4. **Part 5 / Part 6**：尚未正式迁移。
5. **Final video 1920×1080 adaptation**：留待 Part 5 实现。
6. **发布标题层 / 防科普化**：结构问题已解决并写入 Part 2；现有 23 个题的对话版标题仅作候选基准，具体 episode 的最终发布标题仍需在该剧本锁稿后编译。

## NEXT_STEP

Owner 从 H001–H100 中选择下一轮目标。

- 若选择 H001–H023：`Part 2 剧本 → Part 2.5 配音/SRT → Part 3 分镜 → Part 4/4.5 图片执行包 → live imagegen`；
- 若选择 H024–H100：先做 `事实证据 Gate → 最终 D1–D5 → PASS`，再进入同一生产链。

本轮不自动启动剧本、分镜或生图。
## OWNER_ACTION_REQUIRED

- 从 H001–H100 中选择要继续的题即可；若选到 H024–H100，Reviewer 会先完成该题的证据 Gate。
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
