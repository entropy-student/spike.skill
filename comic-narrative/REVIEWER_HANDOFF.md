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

`MAINTENANCE / LOCAL_WORKSPACE_DEEP_CLEANUP_R2`

当前状态：

- imagegen executor reliability 已正式封板；
- H019 酒店价格 41 图生产 **DEFERRED_BY_OWNER**，当前不测试该剧本；
- 当前唯一执行任务是 Windows 本地 `批量生图` **深度清理**；
- 本轮 `IMAGEGEN_CALLS=0`；允许删除已明确证明为 disposable 的测试图片/临时程序/日志/历史 run，潜在可复用内容只归档，不确定内容保留。
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

LOCAL_WORKSPACE_DEEP_CLEANUP_R2

### OBJECTIVE

深度清理 Windows 本地工作区：

`C:\Users\34707\Documents\ChatGPT\批量生图`

不仅整理根目录，还递归清理已关闭 imagegen reliability 测试链产生的无效/测试图片、失败输出、重复证据副本、临时脚本/程序、日志和历史 run；潜在可复用的 H019/生产材料只归档，不永久删除。

### MAX_ENDPOINT_THIS_ROUND

1. fresh-read current main / R2 cleanup plan；
2. prove real Windows hostname / username / exact workspace root；
3. bounded recursive inventory，跳过 `.git` 内部遍历；
4. 获取 Git tracked/untracked 状态；
5. 对候选项逐个分类：DELETE_CONFIRMED_DISPOSABLE / ARCHIVE_POTENTIALLY_REUSABLE / KEEP_REQUIRED / KEEP_UNKNOWN；
6. mutation 前写 `DELETE_PLAN.json` + `ARCHIVE_PLAN.json`；
7. exact-path 删除 confirmed disposable；
8. exact-path 移动 potentially reusable history 到 fresh dated archive；
9. after inventory + integrity/readback；
10. Git worktree clean check；
11. STOP at Reviewer。

`IMAGEGEN_CALLS=0`。

### MANDATORY_REVIEW_STOP

`STOP_AT_REVIEWER=YES`

### TARGET_AND_SCOPE

Owned root：

`C:\Users\34707\Documents\ChatGPT\批量生图`

Primary delete candidates include closed R2R1*/R2R2* test artifacts such as：

- synthetic/test/canary PNGs；
- failed or partial test outputs；
- duplicate closed-Gate evidence ZIP/extracted copies；
- run-local scripts/programs/helpers；
- JSONL/log/checkpoint/readback files belonging only to closed reliability tests；
- abandoned restore/test directories；
- temporary cache/compiled artifacts clearly created by those tests。

Primary archive candidates：

- H019 work/prep/package material while Owner has paused H019；
- ambiguous historical outputs with plausible production value；
- source packages that may be reused later。

### APPLICABLE_CRITICAL_CONSTRAINTS

- accepted capability inheritance applies；
- H019 = DEFERRED_BY_OWNER；
- IMAGEGEN_CALLS=0；
- `.git` and Git metadata are immutable；
- Git-tracked files are immutable；
- canonical tools / formal project docs / Part 3 character+style masters / Part 4.5 active library / production-approved final images must not be deleted；
- unknown/ambiguous item = KEEP_UNKNOWN；
- no wildcard delete；
- exact planned paths only；
- a directory may be recursively deleted only if every descendant is pre-classified DELETE_CONFIRMED_DISPOSABLE；
- potentially reusable production material is archived, never deleted；
- no GitHub worktree content changes during local cleanup。

### PREFLIGHT

1. current main fresh-read；
2. read `reviews/maintenance/LOCAL_WORKSPACE_DEEP_CLEANUP_R2.md`；
3. record hostname / username / PowerShell version；
4. confirm exact root exists；
5. record `git status --short` / tracked-file view from the real worktree；
6. recursive inventory excluding `.git` internals；
7. classify every mutation candidate before mutation；
8. create exact `DELETE_PLAN.json` and `ARCHIVE_PLAN.json`；
9. reject tracked/.git/canonical/formal/production/unknown candidates；
10. create fresh non-existing archive destination；
11. IMAGEGEN_CALLS=0。

Any candidate that cannot be proven safe is retained。

### REQUIRED_EVIDENCE

- `LOCAL_WORKSPACE_DEEP_CLEANUP_R2.md`
- `WORKSPACE_INVENTORY_BEFORE.json`
- `CLASSIFICATION_SUMMARY.json`
- `DELETE_PLAN.json`
- `ARCHIVE_PLAN.json`
- `DELETE_RESULT.json`
- `ARCHIVE_RESULT.json`
- `WORKSPACE_INVENTORY_AFTER.json`
- host/user/PowerShell/root proof
- Git status before/after
- deleted count/bytes
- archived count/bytes + integrity checks
- KEEP_REQUIRED count
- KEEP_UNKNOWN list/reasons
- IMAGEGEN_CALLS=0

### ACCEPTANCE_CRITERIA

`PASS_CANDIDATE_LOCAL_WORKSPACE_DEEP_CLEANUP_R2` requires：

1. real root proven；
2. recursive inventory completed without traversing `.git` internals；
3. every mutation was pre-classified；
4. no `.git` or tracked item mutated；
5. no canonical/formal/production-approved asset deleted；
6. permanent deletes came only from DELETE_CONFIRMED_DISPOSABLE；
7. H019/potentially reusable items archived rather than deleted；
8. unknown items retained；
9. archive integrity checks pass；
10. deleted/archived source paths no longer remain at original locations；
11. Git worktree remains clean；
12. IMAGEGEN_CALLS=0；
13. final workspace is materially smaller and easier to understand。

Allowed results：

- PASS_CANDIDATE_LOCAL_WORKSPACE_DEEP_CLEANUP_R2
- RETURN_PREFLIGHT_DRIFT
- RETURN_IMPLEMENTATION_DRIFT
- RETURN_TEST_FAILURE

### ROLLBACK_STATUS_OR_PLAN

Archive moves are reversible via exact old→new mapping if the original path remains empty. Permanent deletes are authorized only for proven disposable test/history artifacts and therefore are not expected to be restored. No production/canonical asset may enter the delete plan。

### OWNER_ONLY_ACTIONS

NONE

### REVIEWER_TO_EXECUTOR_RELAY

从 GitHub current main 开始，只执行 `LOCAL_WORKSPACE_DEEP_CLEANUP_R2`。

目标：`C:\Users\34707\Documents\ChatGPT\批量生图`。

不要执行旧的 R1。

本轮 `IMAGEGEN_CALLS=0`，不执行 H019 或任何剧本。

先做 bounded recursive inventory（不要遍历 `.git` 内部）并结合 Git tracked/untracked 状态分类。所有 mutation 前必须先生成 `DELETE_PLAN.json` 和 `ARCHIVE_PLAN.json`。

允许永久删除：已明确证明属于关闭 R2R1*/R2R2* 测试链且无生产价值的 synthetic/test/canary 图片、失败输出、重复证据副本、run-local 临时程序/脚本、日志/checkpoint/readback、废弃测试目录等。

必须归档而不是删除：暂停的 H019 工作区/执行包及任何仍可能复用的生产材料。

绝对不要动：`.git`、tracked 文件、canonical tools、正式文档、角色/画风 Master、Part 4.5 active library、production-approved/final images。

任何不确定项保留并报告。禁止 wildcard delete。目录只有在全部 descendants 都预先分类为 DELETE_CONFIRMED_DISPOSABLE 时才允许递归删除。

执行后返回删除/归档空间、before/after inventory、Git clean readback；STOP_AT_REVIEWER=YES。

### EXECUTOR_TO_REVIEWER_RELAY

```text
结果：PASS_CANDIDATE_LOCAL_WORKSPACE_DEEP_CLEANUP_R2 / RETURN_*
改动：清理已确认 disposable 的测试/历史产物，并归档潜在可复用内容；未执行生图或剧本。
验证：说明 before/after 文件数与空间、deleted/archived/kept counts、Git tracked protection、unknown retained、archive integrity、IMAGEGEN_CALLS=0、worktree clean。
问题：NONE，或“短语：一句通俗解释”。
回滚：archive 项可按 mapping 恢复；delete 仅限 confirmed disposable。
请 Reviewer 检查：classification、DELETE_PLAN/ARCHIVE_PLAN、安全保护、空间回收、最终目录结构。
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
- 当前 Executor：Windows 本地 workspace deep cleanup；不涉及 production。
- cleanup PASS 后恢复 idle，等待 Owner 选择下一正式生产目标。
- Windows/Codex local paths 必须由对应 Gate 证明，不从历史路径猜测。

## CURRENT_ROLLBACK_STATUS

- Part 0–4.5 canonical baseline 保持可追溯。
- imagegen fast-path canonical tools 已封板并留在仓库。
- 本轮根目录整理不删除历史事实，只改变历史文档位置与当前启动面的内容密度。
- H019 未开始新的 41-task production run，因此无新生产输出需要回滚。

## UNRESOLVED

1. **本地 `批量生图` 深度清理**：当前 maintenance Gate；完成后恢复 idle。
2. **Part 2**：11 项 edit map 等待 Owner 逐项批准。
3. **Style Plate / Part 3→Part 4 style contract**：仍有后续独立对齐空间。
4. **Part 5 / Part 6**：尚未正式迁移。
5. **Final video 1920×1080 adaptation**：留待 Part 5 实现。

## NEXT_STEP

NONE 当前不执行。

`LOCAL_WORKSPACE_DEEP_CLEANUP_R2 → Reviewer closeout → idle`

之后 Owner 再选择下一篇正式剧本 / 执行包。

## OWNER_ACTION_REQUIRED

- **Deep cleanup 执行转交：**把当前 `REVIEWER_HANDOFF.md` 的 `LOCAL_WORKSPACE_DEEP_CLEANUP_R2` Relay 交给 Windows / Codex Executor。
- 旧 `LOCAL_WORKSPACE_ROOT_CLEANUP_R1` 已废止，不要执行。
- H019 当前暂停，不需要提供 H019 ZIP。
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
