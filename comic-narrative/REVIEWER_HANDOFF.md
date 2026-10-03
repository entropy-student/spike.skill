# 漫画叙事 — REVIEWER_HANDOFF

> GOVERNANCE=`vps-project-governance/VNEXT.md v0.2.6`  
> DISCOVERY_BASELINE=`main@3bdf6e390426c5ba33193020927857fe6cdc7bfc`  
> CURRENT_STATE_AUTHORITY=THIS_FILE  
> LEGACY_HISTORY=`comic-narrative/HANDOFF.md`  
> LAST_RECONCILED=2026-10-03

本文件只维护**当前状态、当前 Gate、关键约束和下一步**。历史迁移、旧执行记录、Owner 过往讨论与长篇审计继续保留在 `HANDOFF.md` / `reviews/`，默认不作为 Executor 启动面。

## PROJECT_GOAL

建立可复用的漫画叙事生产链：

`选题 → 剧本 → 最终配音/SRT → 分镜 → 图片资产 → 素材复用 → 视频时间轴/成片`。

当前正式实现覆盖 Part 0–4.5；Part 5「视频时间轴 / 合成 / 成片」与 Part 6「执行与项目管理」尚未完成正式迁移。

## PROJECT_STAGE

`ACTIVE_REVIEW / IMAGEGEN_EXECUTOR_RELIABILITY`

并行状态：
- 主执行线：R2R1J 图片返回本地缓存 fast-path 集成修复；
- 内容规则线：Part 2 正式修改清单已准备，等待 Owner 逐项批准；
- Part 5–6：PENDING。

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
Part 5  视频时间轴 / 合成 / 成片      [未正式迁移]
  ↓
Part 6  执行与项目管理               [未正式迁移]
```

当前图片执行实验使用既有 Codex / Windows 本地执行 harness；其本机路径不是 GitHub canonical truth，任何写入前必须从当前 Gate 对应证据包确认真实目标文件，不得猜路径。

## CURRENT_ACCEPTED_STATE

- **Part 0 / Part 1**：正式基线已建立。
- **Part 2**：`part2/SCRIPT_NARRATIVE.md` 仍是现行正式规则；11 项 edit map 尚未写入正文。
- **Part 2.5**：正式配音 / SRT 对齐基线已建立。
- **Part 3**：H019 已批准补强已进入正式规则；Scene Anchor、主观视觉语法、before/after 可见证据与 Style Plate 方向有效。
- **Style Plate 资产**：具体 1–2 张长期 Style Plate 尚未生成 / Owner 确认，状态 `PENDING`。
- **Part 4**：正式基线保持封板；图片规划 Agent 与生图执行 Agent 职责已分离。
- **Part 4.5**：active catalog / library 已建立并与 Part 4 连接。
- **Imagegen R2 链**：
  - R2R1A：PASS（真实 raw result shape 已确认）；
  - R2R1D：PASS（one-shot receiver completion path 可 clean exit）；
  - R2R1G：PASS（TTY bulk bridge 为主要大 payload 瓶颈）；
  - R2R1H：PASS（preserved sample 上 optional local-cache fast path 成立）；
  - R2R1I：`RETURN_IMPLEMENTATION_DRIFT`（pre-parser guard 漂移 + evidence completeness 缺口）。
- **H019 完整第二轮重跑**：`DEFERRED`。
- **6 Beat R2 完整复测**：未授权，等待 R2R1J 后续 Gate。
- **Part 5 / Part 6**：未正式迁移。

## CURRENT_GATE

### GATE_ID

`IMAGEGEN_OUTPUT_HINT_GUARD_REPAIR_LIVE_CANARY_R2R1J`

### OBJECTIVE

修复 R2R1I 新增、但未被审核的 pre-parser guard，使最终 receiver entry point 只承担资源边界；路径/格式语义继续由 R2R1H strict parser 决定。完成无生图端到端 preflight 后，只运行一次 C-VB01 live canary。

### MAX_ENDPOINT_THIS_ROUND

1. 一次 bounded receiver-guard repair；
2. exact final receiver no-image preflight；
3. 仅当 preflight PASS 后，允许 `C-VB01 attempt1` 一次真实 imagegen；
4. strict parse → local hash equality → copy → QA；
5. fresh readback；
6. `STOP_AT_REVIEWER=YES`。

### TARGET_AND_SCOPE

目标是 R2R1I 使用的 receiver / guard execution harness。

该目标当前为 Owner/Codex 本地执行资产，不是 GitHub canonical runtime file。Executor 在写入前必须从 R2R1I preserved evidence 确认**准确 source path + 当前内容/hash**。如果无法证明目标，返回 `RETURN_IMPLEMENTATION_DRIFT`；不得新建一个“看起来相似”的 receiver 代替。

### APPLICABLE_CRITICAL_CONSTRAINTS

- 不修改 Part 2 / Part 3 / Part 4 / Part 4.5 / SKILL 正式生产规则；
- 不修改 `ai-story-showrunner` / `story-showrunner`；
- 不 broad scan generated-images；
- 不传输 / 记录完整 base64 或完整 output_hint；
- 不增加 parser path-pattern 规则；
- 不使用 TTY bulk fallback；
- 不 retry imagegen；
- 不启动 C-VB02；
- 不启动另外 4 Beat；
- 不测 concurrency=3；
- 不启动 H019 完整重跑。

### PREFLIGHT

必须在 imagegen 前通过：
1. preserved R2R1A positive sample 走**最终 R2R1J receiver entry point**，完成 strict parse、source hash、copy、destination hash；
2. R2R1H 五个 negative path-policy case 走相同 entry point，全部 fail-closed；
3. 两个 synthetic wrapper case（合法已知路径 + harmless trailing CR/LF / 总长度 >1024 且低于新资源 ceiling）必须到达 strict parser，最终 accept/reject 只由现有 parser 决定；
4. 日志不包含 full hint / base64；
5. `RUN_EVENTS.jsonl`、`RUN_RECORD.json`、fresh-readback 输出机制在 imagegen 前已验证存在。

任何 preflight failure：
`RETURN_IMPLEMENTATION_DRIFT / IMAGEGEN_CALLS=0 / STOP`。

### REQUIRED_EVIDENCE

- `PREFLIGHT_EVIDENCE_R2R1J.md`
- `RUN_EVENTS.jsonl`
- `RUN_RECORD.json`
- `IMAGEGEN_OUTPUT_HINT_GUARD_REPAIR_LIVE_CANARY_R2R1J.md`
- receiver source/diff
- bounded hint diagnostics
- parser result/error code
- accepted path 时的 source/destination hash
- copy 成功后的 QA
- fresh-readback summary

### ACCEPTANCE_CRITERIA

`PASS_CANDIDATE_OUTPUT_HINT_GUARD_REPAIR_LIVE_R2R1J` 需要全部满足：
- exact final receiver preflight PASS；
- imagegen 恰好 1 次，无 retry；
- 无 bulk TTY；
- live hint 到达 strict parser；
- exactly one in-root PNG path 被接受；
- hinted-file SHA = runtime decoded-image SHA；
- automatic copy 保持 SHA；
- copied file 进入 QA；
- event log 可重建；
- fresh readback 与证据一致。

若 live hint 已到 parser、但由 parser 本身拒绝：
`RETURN_TEST_FAILURE`，本轮不得继续放宽 parser。

### ROLLBACK_STATUS_OR_PLAN

- receiver repair 前保留原 source/hash；
- repair 只允许一个 bounded guard patch；
- preflight 不通过则停止，不运行 imagegen，并恢复/保留原实现用于 Reviewer 对比；
- live canary 失败不得重放 imagegen。

### OWNER_ONLY_ACTIONS

`NONE`

### REVIEWER_TO_EXECUTOR_RELAY

默认只读：
1. `comic-narrative/REVIEWER_HANDOFF.md` 的 CURRENT_GATE；
2. `comic-narrative/reviews/imagegen-speed/IMAGEGEN_OUTPUT_HINT_LOCAL_CACHE_LIVE_CANARY_R2R1I_REVIEW.md`；
3. `comic-narrative/reviews/imagegen-speed/IMAGEGEN_OUTPUT_HINT_LOCAL_CACHE_DIAGNOSTIC_R2R1H_REVIEW.md`；
4. R2R1H / R2R1I preserved execution package 中**明确命名的 strict parser/tests、receiver source/report**；
5. C-VB01 当前锁定 task input。

不得读取整个 legacy `HANDOFF.md`、遍历全部历史 Gate 或扫描 generated-images 来“找可能的文件”。

如果第 4–5 项无法从 preserved package / current task packet 精确解析，RETURN 给 Reviewer；不得猜测路径或重建历史。

### EXECUTOR_TO_REVIEWER_RELAY

```text
结果：PASS_CANDIDATE_OUTPUT_HINT_GUARD_REPAIR_LIVE_R2R1J / RETURN_*
改动：一句话说明 receiver guard 实际改动。
验证：一句话总结 preflight、imagegen call count、parser/copy/QA/fresh-readback。
问题：NONE 或实际阻塞原因。
回滚：说明原 source/hash 与恢复状态。
请 Reviewer 检查：核对 required evidence 和 acceptance criteria。
Owner 转交：NONE。
```

## CRITICAL_CONSTRAINTS

- `PASS_CANDIDATE != PASS`；正式 PASS 只由 Reviewer fresh readback 后给出。
- 未证明的事实保持 `UNKNOWN`，不得从旧 Handoff 推断。
- Part 2 edit map 不得在 Owner 逐项批准前进入正式正文。
- Style Plate 具体资产必须经 Owner 确认后才进入长期视觉资产。
- 当前 imagegen 可靠性 Gate 不得升级为 Part 3/4 规则改造，除非后续证据证明是跨任务稳定规则缺口。
- 历史 `HANDOFF.md` 不再作为 Executor 默认启动面。

## DEFAULT_EXECUTION_CHANNEL

- Canonical docs / reviews：GitHub `main`；
- 当前 R2R1J execution harness：既有 Owner/Codex Windows 本地执行链；
- exact local target path：必须由 preserved Gate evidence 证明，未证明则 `UNKNOWN` / RETURN。

## CURRENT_ROLLBACK_STATUS

- GitHub 正式 Part 0–4.5 当前基线保持可追溯；本 takeover 不修改生产规则。
- R2R1J receiver patch 必须保留 pre-repair source/hash，可在 preflight failure 时恢复。
- H019 完整重跑尚未发生，不存在因 takeover 需要回滚的 H019 新生产状态。

## UNRESOLVED

1. **R2R1J**：output_hint 是否能在 live current result 上通过既有 strict parser 并实现 verified local-copy fast path。
2. **Part 2**：11 项 edit map 等待 Owner 逐项批准；正式 Part 2 未改。
3. **Style Plate**：具体长期 Style Plate 图片尚未确认。
4. **Part 4 H019 refinements**：部分 Owner 已认可方向仍等待独立正式修改 Gate。
5. **Part 5 / Part 6**：尚未正式迁移。
6. **1920×1080 contract**：R2R1F 已观察 native image output 1672×941，与 Part 4 final delivery target 的关系仍待后续 reconcile；当前不阻塞 R2R1J。

## NEXT_STEP

先执行并 Review `R2R1J`。

- PASS 后：Reviewer 才决定是否恢复完整 6 Beat R2 复测；
- RETURN_TEST_FAILURE：保持 parser contract，不在同轮继续放宽；
- RETURN_IMPLEMENTATION_DRIFT：修复 exact execution plumbing 后重新 Gate；
- Part 2 内容修改线保持并行冻结，直到 Owner 继续逐项批准。

## OWNER_ACTION_REQUIRED

- **当前 R2R1J：NONE**。
- **Part 2 正式修改：DEFERRED — 需要 Owner 后续逐项批准时再开启该 Gate。**

## EVIDENCE_POINTERS

- Discovery baseline commit: `3bdf6e390426c5ba33193020927857fe6cdc7bfc`
- Legacy history: `comic-narrative/HANDOFF.md`
- R2R1H PASS: `comic-narrative/reviews/imagegen-speed/IMAGEGEN_OUTPUT_HINT_LOCAL_CACHE_DIAGNOSTIC_R2R1H_REVIEW.md`
- R2R1I RETURN / R2R1J Gate: `comic-narrative/reviews/imagegen-speed/IMAGEGEN_OUTPUT_HINT_LOCAL_CACHE_LIVE_CANARY_R2R1I_REVIEW.md`
- Part 2 pending edit map: `comic-narrative/reviews/part2/PART2_FORMAL_EDIT_MAP.md`
- Current formal Part 3: `comic-narrative/part3/STORYBOARD_VISUAL_DIRECTOR.md`
- Current formal Part 4: `comic-narrative/part4/IMAGE_ASSET_EXECUTION.md`
- Current formal Part 4.5: `comic-narrative/part4_5/ASSET_REUSE_LIBRARY.md`
- Takeover discovery review: `comic-narrative/reviews/governance/TAKEOVER_DISCOVERY_20261003.md`
