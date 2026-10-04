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

`MAINTENANCE / LOCAL_WORKSPACE_ROOT_CLEANUP_R1`

当前状态：

- imagegen executor reliability 已正式封板；
- H019 酒店价格 41 图生产 **DEFERRED_BY_OWNER**，当前不测试该剧本；
- 当前唯一执行任务是 Windows 本地 `批量生图` 根目录 maintenance cleanup；
- 本轮 `IMAGEGEN_CALLS=0 / DELETE_CALLS=0`，只归档明确历史项；完成后恢复 idle，再等 Owner 选择下一正式生产目标。
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

LOCAL_WORKSPACE_ROOT_CLEANUP_R1

### OBJECTIVE

整理 Windows 本地 Codex/imagegen 工作根目录：

`C:\Users\34707\Documents\ChatGPT\批量生图`

把已封板的 R2R1*/R2R2* 历史 run、证据 ZIP、明确属于这些 closed Gates 的临时脚本，以及已暂停的 H019 本地产物，从根层移动到一个新的 dated `archive/` 子树。

本 Gate **只移动、不永久删除**；无法明确归类的项目留在原位并报告。

### MAX_ENDPOINT_THIS_ROUND

1. fresh-read current main / current Gate；
2. prove real Windows hostname / username / exact root；
3. top-level inventory before mutation；
4. classify exact top-level items；
5. create one fresh archive root under `批量生图\archive\`；
6. move only classified historical items into bucket directories；
7. verify moved files/directories after move；
8. final root inventory；
9. GitHub worktree clean check；
10. STOP at Reviewer。

`IMAGEGEN_CALLS=0`。

`DELETE_CALLS=0`。

### MANDATORY_REVIEW_STOP

`STOP_AT_REVIEWER=YES`

### TARGET_AND_SCOPE

Owned local root:

`C:\Users\34707\Documents\ChatGPT\批量生图`

Create a fresh archive root such as:

`C:\Users\34707\Documents\ChatGPT\批量生图\archive\2026-10-04-root-cleanup-<unique>\`

Archive buckets:

- `imagegen-reliability/`
- `h019-paused/`
- `adhoc-scripts/`
- `other-classified-history/`

Known historical name families eligible for classification include:

- `_imagegen-*`
- `_r2r1*`
- `_r2r2*`
- `R2R1*.zip`
- `R2R2*.zip`
- exact R2R1/R2R2 evidence packages/directories；
- names beginning `H019_` that are reconciliation/prep/run artifacts；
- standalone scripts clearly identifiable as one-off helpers for closed R2R1*/R2R2* Gates。

Do not move unrelated items merely because they are old or unfamiliar。

### APPLICABLE_CRITICAL_CONSTRAINTS

- accepted capability inheritance applies；
- H019 is `DEFERRED_BY_OWNER`；
- no production execution；
- IMAGEGEN_CALLS=0；
- DELETE_CALLS=0；
- no recursive wildcard delete；
- unknown/nonempty item = retain + report；
- do not overwrite an existing archive destination；
- preserve original basename；
- no file-content edits；
- do not modify GitHub worktree；
- historical local evidence is no longer a runtime dependency, so moving it is allowed；
- do not broadly reread old evidence to revalidate old PASS。

### PREFLIGHT

1. current main fresh-read；
2. record Windows hostname / username / PowerShell version；
3. resolve exact root path and confirm it exists；
4. enumerate direct children of root only；
5. for every child record name/type/size or directory file-count+total-bytes；
6. produce `MOVE_PLAN.json` before the first move；
7. every planned item has one explicit classification bucket/reason；
8. archive root must not already exist；
9. IMAGEGEN_CALLS=0 / DELETE_CALLS=0。

Any ambiguous item is removed from the move plan and retained in root。

### REQUIRED_EVIDENCE

- `LOCAL_ROOT_CLEANUP_R1.md`
- `ROOT_INVENTORY_BEFORE.json`
- `MOVE_PLAN.json`
- `MOVE_RESULT.json`
- `ROOT_INVENTORY_AFTER.json`
- real hostname / username / PowerShell version
- fresh archive root path
- moved-file before/after SHA-256
- moved-directory recursive file-count + total-byte before/after
- retained-unknown list + reason
- IMAGEGEN_CALLS=0
- DELETE_CALLS=0
- GitHub worktree clean readback

Evidence should be stored in one fresh maintenance evidence directory that is not itself moved during the run。

### ACCEPTANCE_CRITERIA

`PASS_CANDIDATE_LOCAL_WORKSPACE_ROOT_CLEANUP_R1` requires：

1. correct real Windows root proven；
2. before/after inventories exist；
3. archive root was fresh；
4. all moved items were explicitly classified；
5. no unknown/unrelated item was moved；
6. no permanent deletion occurred；
7. no imagegen call occurred；
8. every moved file SHA matches before/after；
9. every moved directory file-count/byte totals match before/after；
10. classified source paths no longer remain at root after successful move；
11. unknown retained items remain untouched；
12. H019 local prep is archived, not executed；
13. GitHub worktree remains clean；
14. final root is materially reduced and easy to read。

Allowed results：

- PASS_CANDIDATE_LOCAL_WORKSPACE_ROOT_CLEANUP_R1
- RETURN_PREFLIGHT_DRIFT
- RETURN_IMPLEMENTATION_DRIFT
- RETURN_TEST_FAILURE

### ROLLBACK_STATUS_OR_PLAN

This is move-only cleanup. Since original basenames are preserved under a unique archive root, rollback is moving an exact archived item back to its original root path only if that path is still empty. No automatic rollback is needed on PASS。

### OWNER_ONLY_ACTIONS

NONE

### REVIEWER_TO_EXECUTOR_RELAY

从 GitHub current main 开始，只执行 `LOCAL_WORKSPACE_ROOT_CLEANUP_R1`。

目标根目录：

`C:\Users\34707\Documents\ChatGPT\批量生图`

本轮：

- `IMAGEGEN_CALLS=0`；
- `DELETE_CALLS=0`；
- 不执行 H019 或任何剧本；
- 先 inventory，再写 MOVE_PLAN，再移动；
- 已封板 R2R1*/R2R2* 历史 run/evidence 和暂停 H019 prep 移到 fresh dated `archive/`；
- 只在明确属于 closed Gate 时移动 standalone script；
- 无法明确归类的项目保留在根目录并报告；
- 不修改文件内容，不覆盖 archive，不修改 GitHub worktree；
- 移动后做 before/after hash 或目录 count/bytes 核对；
- 返回 final root inventory；
- STOP_AT_REVIEWER=YES。

### EXECUTOR_TO_REVIEWER_RELAY

```text
结果：PASS_CANDIDATE_LOCAL_WORKSPACE_ROOT_CLEANUP_R1 / RETURN_*
改动：仅把明确历史/暂停的本地根目录项目移动到 fresh archive；无删除、无生图、无 GitHub 修改。
验证：一句话说明 before/after root count、archive buckets、moved/retained counts、hash/count/bytes 校验、IMAGEGEN_CALLS=0、DELETE_CALLS=0、worktree clean。
问题：NONE，或“短语：一句通俗解释”。
回滚：move-only；archive 保留原 basename，可按 exact mapping 恢复。
请 Reviewer 检查：MOVE_PLAN 分类、unknown retained、before/after integrity、zero delete/imagegen、final root readability。
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
- 当前 Executor：Windows 本地根目录 maintenance cleanup；不涉及 production。
- cleanup PASS 后恢复 idle，等待 Owner 选择下一正式生产目标。
- Windows/Codex local paths 必须由对应 Gate 证明，不从历史路径猜测。

## CURRENT_ROLLBACK_STATUS

- Part 0–4.5 canonical baseline 保持可追溯。
- imagegen fast-path canonical tools 已封板并留在仓库。
- 本轮根目录整理不删除历史事实，只改变历史文档位置与当前启动面的内容密度。
- H019 未开始新的 41-task production run，因此无新生产输出需要回滚。

## UNRESOLVED

1. **本地 `批量生图` 根目录清理**：当前 maintenance Gate；完成后恢复 idle。
2. **Part 2**：11 项 edit map 等待 Owner 逐项批准。
3. **Style Plate / Part 3→Part 4 style contract**：仍有后续独立对齐空间。
4. **Part 5 / Part 6**：尚未正式迁移。
5. **Final video 1920×1080 adaptation**：留待 Part 5 实现。

## NEXT_STEP

NONE 当前不执行。

`LOCAL_WORKSPACE_ROOT_CLEANUP_R1 → Reviewer closeout → idle`

之后 Owner 再选择下一篇正式剧本 / 执行包。

## OWNER_ACTION_REQUIRED

- **Local cleanup 执行转交：**把当前 `REVIEWER_HANDOFF.md` 的 `LOCAL_WORKSPACE_ROOT_CLEANUP_R1` Relay 交给 Windows / Codex Executor。
- 不需要提供 H019 ZIP；H019 当前暂停。
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
- Local workspace cleanup plan: `comic-narrative/reviews/maintenance/LOCAL_WORKSPACE_ROOT_CLEANUP_R1.md`
