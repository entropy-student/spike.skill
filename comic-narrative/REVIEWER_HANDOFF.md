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

验证 Owner 新批准的唯一画幅 / native-size 合同是否真正进入**新编译任务与实际 imagegen 调用层**，而不是只停留在 Part 4 文档或 prompt 文本中。

当前正式尺寸合同：

- 唯一正式画幅：`16:9`（生产与交付均不得切换其他长宽比）；
- default native image-generation target：`1792×1008`；
- final delivery target：`1920×1080`。

### MAX_ENDPOINT_THIS_ROUND

1. 从当前 GitHub `main` fresh-read Part 4 §25；
2. 新建一个 R2R1M test task / execution fixture，不改历史 C-VB01 evidence；
3. task 必须把：
   - `aspect_ratio = 16:9`
   - `native_generation_target = 1792×1008`
   - `final_delivery_target = 1920×1080`
   分成三个明确语义；
4. 证明 generation prompt / tool-call mapping 不再把 `1920×1080` 当 native generation request；
5. 在 imagegen 前完成 no-image contract preflight；
6. preflight PASS 后，最多允许 **1 次 live imagegen** 验证实际调用与返回 raster；
7. 不做 retry；
8. 记录 tool-call requested size / returned raster / path / hash / QA reachability；
9. fresh readback；
10. `STOP_AT_REVIEWER=YES`。

### PREFLIGHT

必须先证明：

1. canonical ref = current `main`；
2. Part 4 §25 fresh-read 与上述三层合同一致；
3. 新 test task 明确只有 16:9；
4. native target 只使用 `1792×1008`；
5. final target 只使用 `1920×1080`；
6. generation prompt / structured call 中不存在把 `1920×1080` 误作 native request 的路径；
7. event/run/fresh-readback 记录机制可用。

任一 preflight failure：
`RETURN_IMPLEMENTATION_DRIFT / IMAGEGEN_CALLS=0 / STOP`。

### LIVE CANARY

仅在 preflight PASS 后：

- 最多 1 次 imagegen；
- requested native target 必须是 `1792×1008`；
- aspect ratio 只允许 `16:9`；
- 不允许 second attempt；
- 不允许 C-VB02 / 双并发 / 6 Beat / H019；
- returned raster 必须按实际值记录，不得伪装成 requested size；
- 如果 provider / tool 不接受或不返回 1792×1008，记录真实行为并 RETURN，不得自动换尺寸。

### REQUIRED EVIDENCE

- `IMAGEGEN_NATIVE_SIZE_CONTRACT_PROPAGATION_LIVE_CANARY_R2R1M.md`
- Part 4 §25 fresh-read pointer/hash
- new R2R1M test task / fixture + hash
- generation prompt / structured tool-call mapping
- preflight report
- `IMAGEGEN_CALLS=0 or 1`
- requested size
- actual returned raster size（若 live call 发生）
- source/copy path + hash（若生成成功）
- event/run record
- fresh-readback summary

### ACCEPTANCE

Candidate PASS 需要：

- 16:9 是唯一任务画幅；
- native target 与 final target 已彻底分离；
- actual imagegen request 可证明请求的是 `1792×1008`；
- 最多 1 次 imagegen；
- 无 retry；
- 返回尺寸按真实值记录；
- 无历史 evidence 改写；
- fresh readback 一致。

允许结果：

- `PASS_CANDIDATE_NATIVE_SIZE_CONTRACT_LIVE_R2R1M`
- `RETURN_IMPLEMENTATION_DRIFT`
- `RETURN_TEST_FAILURE`
- `RETURN_EXECUTION_CONTRACT_UNRESOLVED`

### OWNER_ONLY_ACTIONS

`NONE`。

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

- 当前 R2R1M：**NONE**。
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
