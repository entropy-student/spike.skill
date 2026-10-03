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

`ACTIVE_REVIEW / R2R1N_OWNER_DECISION`

并行状态：
- 主执行线：R2R1M 已正式 `RETURN_EXECUTION_CONTRACT_UNRESOLVED`；R2R1N 等待 Owner 选择 exact-native 执行通道。
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
  - R2R1L：**PASS / OWNER APPROVED**：图片生产与交付唯一正式画幅锁定为 16:9；默认 native image-generation target = 1792×1008；final delivery target 保持 1920×1080；
  - R2R1M：**RETURN_EXECUTION_CONTRACT_UNRESOLVED — REVIEWER ACCEPTED**：完整 ZIP 已由 Reviewer 实际检查；当前 Windows/Codex `image_gen.imagegen` callable 不暴露结构化 size/width/height/resolution 参数，故无法证明 native `1792×1008`；`IMAGEGEN_CALLS=0`、retries=0、fallback=0，fail-closed 正确。
- **H019 完整第二轮重跑**：`DEFERRED`。
- **6 Beat R2 完整复测**：未授权；先完成 R2R1M native-size propagation live canary，再由 Reviewer 决定是否恢复双并发 live fast-path canary。
- **Part 5 / Part 6**：未正式迁移。

## CURRENT_GATE

### GATE_ID

`IMAGEGEN_EXACT_NATIVE_EXECUTION_CHANNEL_OWNER_DECISION_R2R1N`

### OBJECTIVE

在不再次调用 imagegen 的前提下，确定如何满足 Owner 已批准的 exact native `1792×1008` 规则。

已确认事实：

- 当前 Windows/Codex 内置 `image_gen.imagegen` 不暴露结构化尺寸参数；
- OpenAI 当前官方 Image API / Responses image-generation 接口支持结构化 `size` 与自定义 `WIDTHxHEIGHT`；
- API Platform 与 ChatGPT 订阅分开计费；
- 因此继续 exact-native 需要执行通道 / 计费授权选择，不能由 Reviewer 代替 Owner 决定。

### MAX_ENDPOINT_THIS_ROUND

1. 记录 R2R1M 正式 Reviewer RETURN；
2. 保持 imagegen 调用 = 0；
3. 向 Owner 提供两个可执行方向及 tradeoff；
4. 获取 Owner 最小决策；
5. STOP；不提前创建任何 API credential、不启用 API billing、不修改 Part 4 exact-native 规则。

### MANDATORY_REVIEW_STOP

`STOP_AT_OWNER_DECISION=YES`

Owner 决策前：
- 不 imagegen；
- 不 API generate；
- 不创建 / 读取 / 输出 API Secret；
- 不修改正式 Part 4；
- 不恢复双并发 / 6 Beat / H019。

### TARGET_AND_SCOPE

本 Gate 只处理 exact-native 执行通道决策。

已审阅来源：

- R2R1M uploaded evidence ZIP；
- R2R1M Reviewer decision；
- current Part 4 §25；
- OpenAI 当前官方 image-generation / API reference；
- OpenAI 当前 ChatGPT/API billing documentation。

不处理：
- 内容 QA；
- hotel-search miss；
- Style Plate；
- Part 2 edit map；
- Part 5/6；
- 生产级 API 集成。

### APPLICABLE_CRITICAL_CONSTRAINTS

- explicit Owner decision outranks ordinary Reviewer choice；
- real money / billing / credential authority is Owner-owned；
- current default execution channel is sticky, but a fallback may be proposed after proven failure；
- prompt text cannot substitute for a missing structured exact-size control；
- `1792×1008` exact-native rule remains active until Owner changes it；
- historical evidence is preserved；
- no Secret values in chat/repo/evidence。

### PREFLIGHT

Already satisfied for this decision Gate:

1. R2R1M evidence is reviewable and inspected；
2. R2R1M fail-closed result is formally accepted；
3. current Part 4 blob remains `7487138f06dc5ed99916d4b02d9a8753cbe6ba18`；
4. external official documentation confirms structured API `size` capability；
5. external official billing documentation confirms API billing is separate from ChatGPT subscription。

No execution preflight beyond these facts is authorized before Owner chooses a path.

### REQUIRED_EVIDENCE

- `IMAGEGEN_NATIVE_SIZE_CONTRACT_PROPAGATION_R2R1M_REVIEW.md`
- R2R1M ZIP SHA-256 and inspected artifact hashes
- current Part 4 blob/hash
- official OpenAI exact-size API capability references
- official OpenAI billing-separation reference
- Owner decision recorded verbatim enough to disambiguate Path A vs Path B

### ACCEPTANCE_CRITERIA

This Gate closes only when Owner selects one of:

**PATH_A_EXACT_NATIVE_API**
- preserve exact native `1792×1008`;
- authorize Reviewer to design a bounded OpenAI API/structured-size execution path;
- any actual paid API image call remains a separately bounded Owner-authorized canary;
- Secret handling follows Governance 11B.

**PATH_B_KEEP_CODEX_NATIVE_BEST_EFFORT**
- keep the current plan-native Codex built-in imagegen channel;
- authorize Reviewer to revise the exact-native rule because this channel cannot prove `1792×1008`;
- 16:9 remains the only aspect ratio;
- final delivery remains `1920×1080`;
- exact native pixel size becomes non-guaranteed / requires a new Owner-approved wording.

No implicit default is permitted.

### ROLLBACK_STATUS_OR_PLAN

No production mutation occurs in this decision Gate.

- Path A does not change current production rules until a later reviewed implementation Gate.
- Path B requires a later formal-rule change Gate; the current Part 4 rule remains unchanged until that Gate passes.
- No rollback action is currently needed.

### OWNER_ONLY_ACTIONS

`REQUIRED`

### WHY_REVIEWER_CANNOT_DECIDE

The remaining choice trades **separate API billing / credential authority** against changing an explicit Owner-approved production rule. Both are Owner-owned consequences.

### EXACT_OWNER_DECISION_NEEDED

Choose exactly one:

- `A — 保留原生 1792×1008，允许后续设计 OpenAI API 精确尺寸通道`
- `B — 保留当前 Codex 内置生图，不再要求原生像素必须精确 1792×1008`

### MATERIAL_TRADEOFFS

**A：**
- exact-native contract preserved；
- official API supports structured size；
- requires separate API billing / credential handling；
- next Gate remains no-image preflight before any paid canary。

**B：**
- keeps current ChatGPT/Codex execution channel and its plan usage；
- no new API billing path；
- exact native `1792×1008` cannot be guaranteed by the current callable；
- requires changing the Owner-approved native-size rule, while 16:9 / 1920×1080 final delivery can remain。

### REVIEWER_TO_EXECUTOR_RELAY

`NONE — OWNER DECISION REQUIRED BEFORE EXECUTOR WORK`

### EXECUTOR_TO_REVIEWER_RELAY

`NONE — NO EXECUTOR RUN AUTHORIZED`

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

1. **R2R1N Owner decision**：exact native `1792×1008` 与 current Codex built-in channel 无法同时满足；等待 Owner 选择 API exact-size path 或修改 exact-native rule。
2. **Final delivery normalization implementation**：final `1920×1080` 仍待后续实现。
3. **C-VB01 content QA**：R2R1J 图片没有明确呈现酒店搜索；旧 PNG 不接受为 final production asset。
4. **Part 2**：11 项 edit map 等待 Owner 逐项批准。
5. **Style Plate / Part 3→Part 4 Style contract / Part 4 H019 refinements**：仍待独立 Gate。
6. **Part 5 / Part 6**：尚未正式迁移。

## NEXT_STEP

等待 Owner 对 R2R1N 做 A / B 最小决策。

Owner 决策前保持：
- `IMAGEGEN_CALLS=0`；
- 不启用 API billing；
- 不读取 / 创建 API Secret；
- 不修改 Part 4；
- 不进入双并发 / 6 Beat / H019。

## OWNER_ACTION_REQUIRED

- **R2R1N：请选择 A 或 B。**
  - **A：**保留原生 `1792×1008`，允许后续设计 OpenAI API 精确尺寸通道；实际付费 canary 仍会单独征得授权。
  - **B：**继续当前 Codex 内置生图，允许后续修改 exact-native 规则，不再保证原生像素必须精确 `1792×1008`。
- Part 2 正式修改仍 DEFERRED。

## EVIDENCE_POINTERS

- Discovery baseline commit: `3bdf6e390426c5ba33193020927857fe6cdc7bfc`
- Legacy history: `comic-narrative/HANDOFF.md`
- R2R1H PASS: `comic-narrative/reviews/imagegen-speed/IMAGEGEN_OUTPUT_HINT_LOCAL_CACHE_DIAGNOSTIC_R2R1H_REVIEW.md`
- R2R1I RETURN / R2R1J Gate: `comic-narrative/reviews/imagegen-speed/IMAGEGEN_OUTPUT_HINT_LOCAL_CACHE_LIVE_CANARY_R2R1I_REVIEW.md`
- R2R1J PASS / R2R1K Gate: `comic-narrative/reviews/imagegen-speed/IMAGEGEN_OUTPUT_HINT_GUARD_REPAIR_LIVE_CANARY_R2R1J_REVIEW.md`
- R2R1K RETURN / R2R1L Gate: `comic-narrative/reviews/imagegen-speed/IMAGEGEN_OUTPUT_SIZE_CONTRACT_RECONCILIATION_R2R1K_REVIEW.md`
- R2R1L Owner size decision / R2R1M Gate: `comic-narrative/reviews/imagegen-speed/IMAGEGEN_NATIVE_SIZE_OWNER_DECISION_R2R1L_REVIEW.md`
- R2R1M evidence pending review: `comic-narrative/reviews/imagegen-speed/IMAGEGEN_NATIVE_SIZE_CONTRACT_PROPAGATION_R2R1M_EVIDENCE_PENDING_REVIEW.md`
- R2R1M formal Reviewer decision / R2R1N: `comic-narrative/reviews/imagegen-speed/IMAGEGEN_NATIVE_SIZE_CONTRACT_PROPAGATION_R2R1M_REVIEW.md`
- Part 2 pending edit map: `comic-narrative/reviews/part2/PART2_FORMAL_EDIT_MAP.md`
- Current formal Part 3: `comic-narrative/part3/STORYBOARD_VISUAL_DIRECTOR.md`
- Current formal Part 4: `comic-narrative/part4/IMAGE_ASSET_EXECUTION.md`
- Current formal Part 4.5: `comic-narrative/part4_5/ASSET_REUSE_LIBRARY.md`
- Takeover discovery review: `comic-narrative/reviews/governance/TAKEOVER_DISCOVERY_20261003.md`
