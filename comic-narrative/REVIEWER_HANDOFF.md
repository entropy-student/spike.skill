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
- 主执行线：R2R1M 16:9 / 1792×1008 native-size contract propagation + one-live-canary；
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
- **Part 4**：正式基线保持封板；图片规划 Agent 与生图执行 Agent 职责已分离。已知存在 Part 3「1–2 张 Style Plate」与 Part 4 仍写「2 张具体 Style Reference」的跨模块合同待对齐；当前 R2R1J 不修该项。
- **Part 4.5**：active catalog / library 已建立并与 Part 4 连接。
- **Imagegen R2 链**：
  - R2R1A：PASS（真实 raw result shape 已确认）；
  - R2R1D：PASS（one-shot receiver completion path 可 clean exit）；
  - R2R1G：PASS（TTY bulk bridge 为主要大 payload 瓶颈）；
  - R2R1H：PASS（preserved sample 上 optional local-cache fast path 成立）；
  - R2R1I：`RETURN_IMPLEMENTATION_DRIFT`（pre-parser guard 漂移 + evidence completeness 缺口）；
  - R2R1J：**PASS**（live output_hint strict parse → source hash → local copy → QA 链已证明；C-VB01 图片 QA FAIL 不作为最终素材接受）；
  - R2R1K：**RETURN_IMPLEMENTATION_DRIFT（Reviewer 接受，但纠正故障归因）**：Executor 使用 stale snapshot，且历史 task generator provenance 未保留；尺寸合同债被确认；
  - R2R1L：**PASS / OWNER APPROVED**：图片生产与交付唯一正式画幅锁定为 16:9；默认 native image-generation target = 1792×1008；final delivery target 保持 1920×1080。
- **H019 完整第二轮重跑**：`DEFERRED`。
- **6 Beat R2 完整复测**：未授权；先完成 R2R1M native-size propagation live canary，再由 Reviewer 决定是否恢复双并发 live fast-path canary。
- **Part 5 / Part 6**：未正式迁移。

## CURRENT_GATE

### GATE_ID

`IMAGEGEN_NATIVE_SIZE_CONTRACT_PROPAGATION_LIVE_CANARY_R2R1M`

### OBJECTIVE

验证 Owner 已批准的尺寸合同是否真正进入**新任务编译层与实际 imagegen 调用参数**，而不是只停留在 Part 4 文档或 prompt 文本中。

当前正式合同：

- 唯一正式画幅：`16:9`；
- default native image-generation target：`1792×1008`；
- final delivery target：`1920×1080`。

### MAX_ENDPOINT_THIS_ROUND

1. fresh-read 当前 GitHub `main` 与 Part 4 §25；
2. 建立一个新的 R2R1M test task / fixture，不改历史 C-VB01；
3. 证明 task compiler / tool-call mapping 把 `1792×1008` 作为 native request，把 `1920×1080` 仅作为 final delivery target；
4. 完成 no-image preflight；
5. 只有 preflight 全 PASS 后，最多允许 **1 次** live imagegen；
6. 记录 actual requested size、actual returned raster、path/hash、QA reachability；
7. 不 retry、不 fallback 到其他尺寸；
8. fresh readback；
9. STOP at Reviewer。

### MANDATORY_REVIEW_STOP

`STOP_AT_REVIEWER=YES`

本 Gate 不得自动进入：
- 第二次 imagegen；
- 双并发；
- 6 Beat；
- H019；
- Part 5 / Part 6；
- 任何新尺寸策略或正式规则改动。

### TARGET_AND_SCOPE

允许读取 / 使用：

1. 当前 `comic-narrative/REVIEWER_HANDOFF.md` 的本 Gate 与 Relay；
2. `comic-narrative/part4/IMAGE_ASSET_EXECUTION.md` §25；
3. `comic-narrative/reviews/imagegen-speed/IMAGEGEN_NATIVE_SIZE_OWNER_DECISION_R2R1L_REVIEW.md`；
4. `comic-narrative/reviews/imagegen-speed/IMAGEGEN_OUTPUT_HINT_GUARD_REPAIR_LIVE_CANARY_R2R1J_REVIEW.md`；
5. preserved R2R1J evidence package 中**仅与当前执行链直接相关**的 receiver / runtime hash helper / strict parser / run-record 路径；
6. 新建的 R2R1M test fixture、preflight、run/evidence 目录；
7. 最多 1 次 live imagegen。

明确禁止：

- 修改 Part 2 / Part 3 / Part 4 / Part 4.5 / SKILL 正式规则；
- 修改 R2R1F / R2R1J / C-VB01 历史 evidence；
- 广泛扫描历史 Handoff / 全仓库 / generated-images；
- 改 parser/path-policy；
- 重新设计 transport；
- 用 prompt 文字冒充 structured size 参数证据；
- 自动换成其他 native size；
- 第二次调用、内容 retry、双并发、6 Beat、H019。

### APPLICABLE_CRITICAL_CONSTRAINTS

- `PASS_CANDIDATE != PASS`；
- 未证明事实保持 `UNKNOWN`；
- GitHub current `main` 与 fresh authoritative evidence 优先；
- 16:9 是生产与交付唯一正式画幅；
- native target 仅为 `1792×1008`；
- final delivery target 仅为 `1920×1080`；
- actual returned raster 必须记录真实值，不得按 requested size 代填；
- R2R1J fast-path accepted state 可继承，但 `output_hint` 仍按每次结果独立验证；
- 不通过 TTY 搬运完整 base64；
- one-live-canary 上限 = 1，任何失败均不得 replay；
- 新 canary 图片仅作 Gate evidence，未经后续内容验收不得进入正式素材库或 production mapping。

### PREFLIGHT

在任何 imagegen 调用前必须全部证明：

1. 当前 Git root / project scope / branch-revision 已确认，且本项目目标文件没有被无关 worktree 改动污染；
2. GitHub current `main` 中 Part 4 §25 fresh-read 仍明确：
   - `16:9 only`
   - native `1792×1008`
   - final `1920×1080`；
3. Part 4 当前 blob SHA 与 fresh-read 结果已记录；
4. preserved R2R1J 中将继续复用的 receiver / hash helper / strict parser exact local path 与 hash 已证明；若 exact path 无法从 preserved evidence 证明，RETURN，不猜路径；
5. 新 R2R1M test task / fixture 已建立并计算 hash，且三个字段语义分离：
   - `aspect_ratio = 16:9`
   - `native_generation_target = 1792×1008`
   - `final_delivery_target = 1920×1080`；
6. 在**不调用 imagegen**的情况下，生成并检查实际 structured tool-call / request arguments；必须能直接证明 native request 是 `1792×1008`，不能只靠 prompt 中出现该文本；
7. structured call / prompt 中不存在把 `1920×1080` 当 native request 的路径；
8. 若当前工具 / provider 不提供可证明的 `1792×1008` native-size 参数表达方式，立即 `RETURN_EXECUTION_CONTRACT_UNRESOLVED`，`IMAGEGEN_CALLS=0`；
9. one-call guard、fresh destination、`RUN_EVENTS.jsonl`、`RUN_RECORD.json`、fresh-readback 输出路径已就绪；
10. 普通日志不会写入完整 `image_url` / base64 / full hint。

任一 preflight failure：
`IMAGEGEN_CALLS=0 / RETURN_* / STOP`。

### REQUIRED_EVIDENCE

- `IMAGEGEN_NATIVE_SIZE_CONTRACT_PROPAGATION_LIVE_CANARY_R2R1M.md`
- `PREFLIGHT_EVIDENCE_R2R1M.md`
- GitHub current main SHA
- Part 4 §25 fresh-read pointer + blob SHA
- R2R1J reused local source paths + hashes
- new R2R1M test task / fixture + SHA-256
- actual structured tool-call / request argument record（不得含 base64）
- `IMAGEGEN_CALLS=0 or 1`
- retry count = 0
- requested aspect ratio / native size / final delivery size
- actual returned raster width × height（若 live call 发生）
- runtime decoded-image SHA-256（若可得）
- hinted source / destination path + SHA-256（若 fast-path 成功）
- QA reachability / QA result（若图片落盘）
- `RUN_EVENTS.jsonl`
- `RUN_RECORD.json`
- project-scoped diff / non-target-delta check
- fresh-readback summary
- `EXECUTOR_RESULT`

### ACCEPTANCE_CRITERIA

`PASS_CANDIDATE_NATIVE_SIZE_CONTRACT_LIVE_R2R1M` 需要全部满足：

1. preflight 在 imagegen 前 PASS；
2. 新任务只有 16:9；
3. native / final delivery 语义已分离；
4. actual structured imagegen request 可直接证明请求 native `1792×1008`，不是仅 prompt 文本；
5. `1920×1080` 没有进入 native generation request；
6. imagegen 调用总数 = 1；
7. retry = 0；
8. 无 fallback 到其他 requested size；
9. actual returned raster 按真实值记录；
10. 若 fast-path 使用，source hash / runtime hash / copy hash 的 accepted R2R1J 验证链仍成立；
11. copied image 可到达 QA；内容 QA PASS 不是本 Gate 的 PASS 前提，也不得触发 retry；
12. 无正式 Part 2/3/4/4.5/SKILL 改动；
13. 无历史 evidence 改写；
14. event/run 记录可重建；
15. fresh readback 与证据一致。

允许结果：

- `PASS_CANDIDATE_NATIVE_SIZE_CONTRACT_LIVE_R2R1M`
- `RETURN_PREFLIGHT_DRIFT`
- `RETURN_IMPLEMENTATION_DRIFT`
- `RETURN_TEST_FAILURE`
- `RETURN_EXECUTION_CONTRACT_UNRESOLVED`

### ROLLBACK_STATUS_OR_PLAN

- 本 Gate 不修改正式生产规则或历史 evidence，因此不存在 production rollback。
- 新 test fixture / 临时 harness 文件必须与正式源码分离；发生异常时删除临时文件并保留 evidence。
- 若发现任何非预期正式源码修改，恢复到 preflight 记录的 source/hash 后 RETURN。
- live canary 成图作为 evidence 保留，但不得自动进入 Part 4.5 active library 或 production output mapping。
- 任一失败后不得通过第二次 imagegen“补证据”。

### OWNER_ONLY_ACTIONS

`NONE`。

Owner 已批准当前唯一画幅 / native-size 方向；本 Gate 不包含新的费用、公开发布、不可逆数据删除、Secret 或账号权限动作。

### REVIEWER_TO_EXECUTOR_RELAY

从**当前 GitHub main**开始，只执行本 Gate，不重读 Governance、不扫描 broad history。

允许读取：

1. `comic-narrative/REVIEWER_HANDOFF.md` → CURRENT_GATE / REVIEWER_TO_EXECUTOR_RELAY；
2. `comic-narrative/part4/IMAGE_ASSET_EXECUTION.md` → §25；
3. `comic-narrative/reviews/imagegen-speed/IMAGEGEN_NATIVE_SIZE_OWNER_DECISION_R2R1L_REVIEW.md`；
4. `comic-narrative/reviews/imagegen-speed/IMAGEGEN_OUTPUT_HINT_GUARD_REPAIR_LIVE_CANARY_R2R1J_REVIEW.md`；
5. preserved R2R1J evidence package 中为 receiver / runtime hash helper / strict parser / run-record 明确指向的 exact files；
6. 你创建的全新 R2R1M test/evidence 目录。

可依赖的 accepted facts：

- R2R1L：16:9 是生产与交付唯一正式画幅；
- native target = `1792×1008`；
- final delivery target = `1920×1080`；
- R2R1J：output_hint strict parse → source hash → copy → QA 的 live fast-path 已正式 PASS；
- 历史 C-VB01 的 `1920×1080` generation instruction 已过时，只作历史 evidence，不得复用为新任务合同。

执行顺序：

1. fresh-read current main + Part 4 §25；
2. prove exact local R2R1J execution source paths/hashes；
3. create new R2R1M test task / fixture；
4. dry-render actual structured imagegen request；
5. 若不能在调用前直接证明 native request = `1792×1008`，立即 RETURN，imagegen=0；
6. preflight 全 PASS 后最多调用 imagegen 1 次；
7. 不 retry、不 fallback；
8. 记录 actual returned raster、hash/path、QA reachability；
9. fresh readback；
10. STOP，返回 Reviewer。

禁止修改正式 Part 4 规则、历史 C-VB01、R2R1J evidence、parser/path-policy；禁止双并发 / 6 Beat / H019。

### EXECUTOR_TO_REVIEWER_RELAY

```text
结果：PASS_CANDIDATE_NATIVE_SIZE_CONTRACT_LIVE_R2R1M / RETURN_*
改动：一句话说明仅新增了哪些 R2R1M test/evidence，或说明 NONE。
验证：一句话说明 preflight、actual requested native size、imagegen 调用数、actual returned raster、hash/QA/readback。
问题：NONE，或“阻塞短语：一句通俗解释”。
回滚：一句话说明临时文件/正式源码/历史 evidence 是否保持安全。
请 Reviewer 检查：核对 structured request、IMAGEGEN_CALLS、returned raster、hash/QA、fresh readback 与非目标改动。
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
- 当前 R2R1M：既有 Owner/Codex Windows 本地执行链；必须从 current main 读取尺寸合同后先做 no-image preflight；
- exact local target path：必须由 preserved Gate evidence 证明，未证明则 `UNKNOWN` / RETURN。

## CURRENT_ROLLBACK_STATUS

- GitHub 正式 Part 0–4.5 当前基线保持可追溯；R2R1L 已按 Owner 明确授权仅修改 Part 4 §25 的画幅 / 尺寸合同。
- R2R1J receiver patch 必须保留 pre-repair source/hash，可在 preflight failure 时恢复。
- H019 完整重跑尚未发生，不存在因 takeover 需要回滚的 H019 新生产状态。

## UNRESOLVED

1. **R2R1M native-size propagation**：需证明新任务与 actual imagegen call 真正请求 16:9 / 1792×1008，而不是只在 prompt 文本里声明。
2. **Final delivery normalization implementation**：1792×1008 与 1920×1080 均为 16:9；最终缩放/交付实现仍属于后续 production / Part 5 边界，本 Gate 不扩写。
3. **Historical task packet drift**：旧 C-VB01 将 1920×1080 写进 generation instruction；只保留为历史 evidence。
4. **C-VB01 content QA**：R2R1J 图片没有明确呈现酒店搜索；旧 PNG 不接受为 final production asset。
5. **Part 2**：11 项 edit map 等待 Owner 逐项批准。
6. **Style Plate / Part 3→Part 4 Style contract / Part 4 H019 refinements**：仍待独立 Gate。
7. **Part 5 / Part 6**：尚未正式迁移。

## NEXT_STEP

执行并 Review `R2R1M`：

`current main → fresh-read Part 4 §25 → new task contract preflight → 最多 1 次 1792×1008 live imagegen → actual raster/hash/readback → STOP`

在 R2R1M 正式 PASS 前：
- 不恢复双并发；
- 不恢复 6 Beat；
- 不运行 H019。

## OWNER_ACTION_REQUIRED

- **R2R1M 执行转交：**将当前 `REVIEWER_HANDOFF.md` 的 R2R1M Gate 交给既有 Windows / Codex Executor 执行；无需额外决策。
- Part 2 正式修改仍 DEFERRED。

## EVIDENCE_POINTERS

- Discovery baseline commit: `3bdf6e390426c5ba33193020927857fe6cdc7bfc`
- Legacy history: `comic-narrative/HANDOFF.md`
- R2R1H PASS: `comic-narrative/reviews/imagegen-speed/IMAGEGEN_OUTPUT_HINT_LOCAL_CACHE_DIAGNOSTIC_R2R1H_REVIEW.md`
- R2R1I RETURN / R2R1J Gate: `comic-narrative/reviews/imagegen-speed/IMAGEGEN_OUTPUT_HINT_LOCAL_CACHE_LIVE_CANARY_R2R1I_REVIEW.md`
- R2R1J PASS / R2R1K Gate: `comic-narrative/reviews/imagegen-speed/IMAGEGEN_OUTPUT_HINT_GUARD_REPAIR_LIVE_CANARY_R2R1J_REVIEW.md`
- R2R1K RETURN / R2R1L Gate: `comic-narrative/reviews/imagegen-speed/IMAGEGEN_OUTPUT_SIZE_CONTRACT_RECONCILIATION_R2R1K_REVIEW.md`
- R2R1L Owner size decision / R2R1M Gate: `comic-narrative/reviews/imagegen-speed/IMAGEGEN_NATIVE_SIZE_OWNER_DECISION_R2R1L_REVIEW.md`
- Part 2 pending edit map: `comic-narrative/reviews/part2/PART2_FORMAL_EDIT_MAP.md`
- Current formal Part 3: `comic-narrative/part3/STORYBOARD_VISUAL_DIRECTOR.md`
- Current formal Part 4: `comic-narrative/part4/IMAGE_ASSET_EXECUTION.md`
- Current formal Part 4.5: `comic-narrative/part4_5/ASSET_REUSE_LIBRARY.md`
- Takeover discovery review: `comic-narrative/reviews/governance/TAKEOVER_DISCOVERY_20261003.md`
