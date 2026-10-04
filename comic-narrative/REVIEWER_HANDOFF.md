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

`MAINTENANCE / LOCAL_WORKSPACE_DOC_EVIDENCE_PURGE_R3`

当前状态：

- imagegen executor reliability 已正式封板；
- Windows 本地 `批量生图` 深度清理 R2 已正式 PASS；
- H019 酒店价格 41 图生产 **DEFERRED_BY_OWNER**，当前不测试该剧本；
- 当前唯一任务：删除本地已被 GitHub 正式 Review/当前 canonical 状态替代的冗余文档、日志、证据副本和重复 reviewer ZIP；H019 仍暂停，不执行剧本。
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
- **Local workspace cleanup R2**：正式 **PASS**。已删除 206 个 confirmed disposable 文件（33,241,076 bytes），归档暂停 H019 workspace 52 文件（316,939,451 bytes，52/52 SHA-256 verified），保留 2 个 KEEP_UNKNOWN 测试图片；`.git` 未改、tracked path=0、tracked changes=0。Executor 的 `RETURN_TEST_FAILURE` 由 Reviewer 纠正为 PASS，因为该本地 repo baseline 本身无 HEAD/remote/tracked files，porcelain-clean 条件不适用。
- **Part 5 / Part 6**：PENDING。

## CURRENT_GATE

### GATE_ID

LOCAL_WORKSPACE_DOC_EVIDENCE_PURGE_R3

### OBJECTIVE

对 `C:\Users\34707\Documents\ChatGPT\批量生图` 做本地文档/证据去冗余，不再只是归档。

删除已经由 GitHub 正式 Review/canonical 状态替代的本地 evidence、日志、readback/checkpoint、run-local 文档/程序和重复 reviewer ZIP；保留 H019 输入包、参考图、任务/manifest、现有输出 PNG，以及所有未知项。

### MAX_ENDPOINT_THIS_ROUND

1. fresh-read current main / R3 plan；
2. inventory 当前 workspace；
3. 写 `DOC_EVIDENCE_PURGE_PLAN.json`；
4. 对 H019 reviewer ZIP 做成员级 redundancy proof；
5. exact-path 删除 proven redundant docs/evidence；
6. final inventory；
7. STOP at Reviewer。

`IMAGEGEN_CALLS=0`。

### MANDATORY_REVIEW_STOP

`STOP_AT_REVIEWER=YES`

### TARGET_AND_SCOPE

允许删除的重点类别：

- 已有正式 GitHub Review 的旧 R2R1*/R2R2* local evidence；
- 已 formal PASS 的 cleanup evidence 目录；
- H019 reviewer_upload 下经 hash/成员证明重复的 ZIP；
- H019 run-local QA_REPORT / REVIEWER_HANDOFF / REVIEWER_PACKAGE_INDEX / RUN_RECORD / 执行队列 / H019_save_image.ps1；
- 其他已证明只用于历史执行、且 durable fact 已在 GitHub 的日志/readback/checkpoint/report。

### APPLICABLE_CRITICAL_CONSTRAINTS

- H019 = DEFERRED_BY_OWNER；
- IMAGEGEN_CALLS=0；
- 不删 H019 source input package；
- 不删 H019 reference PNG / task JSON / manifest / output PNG；
- 不删两个 KEEP_UNKNOWN speed-test PNG；
- 不删 `.git` / tracked / canonical / formal / production-approved assets；
- reviewer ZIP 必须先证明其中没有 unique payload；
- unknown = retain；
- exact-path delete only；no wildcard delete。

### PREFLIGHT

1. current main fresh-read；
2. read `reviews/maintenance/LOCAL_WORKSPACE_DOC_EVIDENCE_PURGE_R3.md`；
3. current workspace inventory；
4. current GitHub formal Review pointers confirmed；
5. produce purge plan before deletion；
6. ambiguity => retain。

### REQUIRED_EVIDENCE

- `DOC_EVIDENCE_PURGE_PLAN.json`
- `REDUNDANCY_PROOF.json`
- `DELETE_RESULT.json`
- `WORKSPACE_INVENTORY_AFTER_R3.json`
- `LOCAL_WORKSPACE_DOC_EVIDENCE_PURGE_R3.md`
- deleted count / reclaimed bytes
- retained unique/unknown list
- IMAGEGEN_CALLS=0

### ACCEPTANCE_CRITERIA

`PASS_CANDIDATE_LOCAL_WORKSPACE_DOC_EVIDENCE_PURGE_R3` requires：

1. only proven-redundant docs/evidence deleted；
2. H019 source/reference/task/manifest/output PNG preserved；
3. reviewer ZIPs deleted only after redundancy proof；
4. cleanup evidence deleted only after corresponding GitHub Review is durable；
5. unknown items retained；
6. canonical/formal/Git metadata untouched；
7. IMAGEGEN_CALLS=0；
8. workspace materially smaller。

### ROLLBACK_STATUS_OR_PLAN

Permanent deletes are limited to proven redundant local copies. Durable facts remain in GitHub Review/canonical docs；H019 reconstructable inputs and existing outputs remain preserved。

### OWNER_ONLY_ACTIONS

NONE

### REVIEWER_TO_EXECUTOR_RELAY

从 GitHub current main 开始，只执行 `LOCAL_WORKSPACE_DOC_EVIDENCE_PURGE_R3`。

目标：`C:\Users\34707\Documents\ChatGPT\批量生图`。本轮 `IMAGEGEN_CALLS=0`，不执行 H019。

这次不是再归档：先 inventory + `DOC_EVIDENCE_PURGE_PLAN.json`，然后永久删除已经由 GitHub 正式 Review/canonical 状态替代的本地旧 evidence、日志、readback/checkpoint、run-local 文档/程序以及经成员/hash 证明完全重复的 H019 reviewer ZIP。

明确保留：H019 输入包、参考图、任务/manifest、现有 outputs PNG、两个 KEEP_UNKNOWN speed-test PNG、`.git`、tracked/canonical/formal/production-approved assets。

任何 ZIP 有 unique payload、任何文件用途不确定，一律保留并报告。禁止 wildcard delete。完成后返回 reclaimed bytes、deleted count、retained list、final inventory；STOP_AT_REVIEWER=YES。

### EXECUTOR_TO_REVIEWER_RELAY

```text
结果：PASS_CANDIDATE_LOCAL_WORKSPACE_DOC_EVIDENCE_PURGE_R3 / RETURN_*
改动：仅删除已证明冗余的本地文档/证据/重复 reviewer ZIP；H019 输入与输出保留；无生图。
验证：说明 purge plan、redundancy proof、deleted count/bytes、retained unique/unknown、IMAGEGEN_CALLS=0、final inventory。
问题：NONE，或简短说明阻塞。
回滚：无；被删项均为 GitHub/canonical 已替代的本地冗余副本。
请 Reviewer 检查：删除边界、ZIP redundancy、H019 保留项、final workspace。
Owner 转交：NONE。
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

1. **本地文档/证据去冗余 R3**：当前 maintenance Gate；完成后恢复 idle。
2. **Part 2**：11 项 edit map 等待 Owner 逐项批准。
3. **Style Plate / Part 3→Part 4 style contract**：仍有后续独立对齐空间。
4. **Part 5 / Part 6**：尚未正式迁移。
5. **Final video 1920×1080 adaptation**：留待 Part 5 实现。

## NEXT_STEP

`LOCAL_WORKSPACE_DOC_EVIDENCE_PURGE_R3 → Reviewer closeout → idle`
## OWNER_ACTION_REQUIRED

- **R3 执行转交：**把当前 `REVIEWER_HANDOFF.md` 的 `LOCAL_WORKSPACE_DOC_EVIDENCE_PURGE_R3` Relay 交给 Windows / Codex Executor。
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
