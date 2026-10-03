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
- 主执行线：R2R1K 输出尺寸合同对账（0 次生图）；
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
  - R2R1J：**PASS**（live output_hint strict parse → source hash → local copy → QA 链已证明；C-VB01 图片 QA FAIL 不作为最终素材接受）。
- **H019 完整第二轮重跑**：`DEFERRED`。
- **6 Beat R2 完整复测**：未授权；先完成 R2R1K，再由 Reviewer 决定是否进入双并发 live fast-path canary。
- **Part 5 / Part 6**：未正式迁移。

## CURRENT_GATE

### GATE_ID

`IMAGEGEN_OUTPUT_SIZE_CONTRACT_RECONCILIATION_R2R1K`

### OBJECTIVE

对账反复出现的 **1672×941 native image output** 与当前 **1920×1080 final delivery target / C-VB01 task requirement**，在继续任何 live imagegen 前，明确 native generation size 与 final delivery size 的职责和合同语义。

### MAX_ENDPOINT_THIS_ROUND

1. `IMAGEGEN_CALLS=0`；
2. 找到并固定 R2R1J 使用的 exact C-VB01 task input；
3. 找到生成 1920×1080 requirement 的 exact compiler/schema/source；
4. fresh-read Part 4 §25；
5. 对照 R2R1F + R2R1J accepted observed outputs；
6. 判定 1920×1080 属于 native hard requirement、final-delivery-only，或仍 unresolved；
7. 若仅为 implementation/compiler drift，允许一个不改变 Part 4 policy 的 bounded repair；
8. 用 preserved outputs 做 no-image regression；
9. fresh readback；
10. `STOP_AT_REVIEWER=YES`。

### TARGET_AND_SCOPE

只处理**输出尺寸合同**这一故障域：

- `part4/IMAGE_ASSET_EXECUTION.md` §25；
- 当前 C-VB01 locked task input；
- 当前 task compiler/schema/source；
- R2R1F accepted evidence；
- R2R1J evidence + copied PNG。

不处理 C-VB01 酒店搜索内容 FAIL，不启动内容 retry。

### APPLICABLE_CRITICAL_CONSTRAINTS

- 不调用 imagegen；
- 不修改 Part 2 / Part 3 / Part 4 / Part 4.5 / SKILL 正式规则；
- 不把 final delivery target 无证据升级成 native model-output guarantee；
- 不因为 1672×941 接近 16:9 就宣称 final delivery PASS；
- 不发明未被当前规则支持的 native minimum resolution / upscale contract；
- 不运行双并发 live canary；
- 不运行 6 Beat；
- 不启动 H019；
- 如果 formal Part 4 本身不足以裁决，RETURN，不通过执行器 patch 偷偷创造新 policy。

### PREFLIGHT

1. 证明 exact C-VB01 task input path/content/hash；
2. 证明 exact compiler/schema/source path/content/hash；
3. fresh-read Part 4 §25；
4. 用 R2R1J preserved PNG/hash 证明 1672×941；
5. 用 accepted R2R1F evidence 证明此前同类 observed size；
6. 在任何修改前先分类 mismatch 来源。

### REQUIRED_EVIDENCE

- `IMAGEGEN_OUTPUT_SIZE_CONTRACT_RECONCILIATION_R2R1K.md`
- C-VB01 task input pointer/hash
- task compiler/schema/source pointer/hash
- Part 4 §25 fresh-read pointer
- R2R1F + R2R1J observed-size matrix
- bounded repair 的 before/after diff（如发生）
- no-image regression
- fresh-readback summary
- `IMAGEGEN_CALLS=0`

矩阵至少包含：

`FORMAL_FINAL_DELIVERY_TARGET | TASK_NATIVE_REQUIREMENT | OBSERVED_NATIVE_SIZE | SOURCE_ACCEPTANCE_STATUS | FINAL_DELIVERY_STATUS`

### ACCEPTANCE_CRITERIA

`PASS_CANDIDATE_OUTPUT_SIZE_CONTRACT_RECONCILED_R2R1K` 要求：

- 1920×1080 requirement 的来源被精确证明；
- Part 4 §25 与 task/compiler 行为被明确对账；
- native generation size 与 final delivery size 不再混为同一状态；
- 若发生 implementation repair，必须保持现有正式 policy 不变；
- preserved evidence 不被改写；
- imagegen=0；
- content retry=0；
- fresh readback 一致。

允许结果：

- `PASS_CANDIDATE_OUTPUT_SIZE_CONTRACT_RECONCILED_R2R1K`
- `RETURN_IMPLEMENTATION_DRIFT`
- `RETURN_EXECUTION_CONTRACT_UNRESOLVED`
- `RETURN_OWNER_ACTION_REQUIRED`

### ROLLBACK_STATUS_OR_PLAN

若修改 task/compiler implementation：

- 先记录 pre-change source/hash；
- 只允许一个 bounded patch；
- no-image fixture regression 通过后才能交 Reviewer；
- 出现新歧义时恢复原 source。

Formal Part 4 policy 本轮不得修改。

### OWNER_ONLY_ACTIONS

`NONE`。只有当诊断证明必须改变 formal Part 4 policy 时，才 STOP 并返回最小 Owner 决策。

### REVIEWER_TO_EXECUTOR_RELAY

默认只读：

1. `comic-narrative/REVIEWER_HANDOFF.md` CURRENT_GATE；
2. `comic-narrative/reviews/imagegen-speed/IMAGEGEN_OUTPUT_HINT_GUARD_REPAIR_LIVE_CANARY_R2R1J_REVIEW.md`；
3. `comic-narrative/part4/IMAGE_ASSET_EXECUTION.md` §25；
4. accepted R2R1F Reviewer evidence；
5. R2R1J evidence package；
6. exact C-VB01 task input + exact compiler/schema/source。

不得 broad-read legacy `HANDOFF.md`，不得调用 imagegen，不得修改内容 prompt。

### EXECUTOR_TO_REVIEWER_RELAY

```text
结果：PASS_CANDIDATE_OUTPUT_SIZE_CONTRACT_RECONCILED_R2R1K / RETURN_*
改动：NONE，或一句话说明 bounded task/compiler contract repair。
验证：一句话说明 1920×1080 来源、Part 4 §25 解释、R2R1F/R2R1J observed size、no-image regression。
问题：NONE，或说明是否需要 formal Part 4 / Owner decision。
回滚：说明 pre-change source/hash 与恢复状态。
请 Reviewer 检查：核对 contract classification、repair boundary、IMAGEGEN_CALLS=0、fresh readback。
Owner 转交：NONE，或最小必要决策。
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
- 当前 R2R1K execution/diagnostic harness：既有 Owner/Codex Windows 本地执行链；
- exact local target path：必须由 preserved Gate evidence 证明，未证明则 `UNKNOWN` / RETURN。

## CURRENT_ROLLBACK_STATUS

- GitHub 正式 Part 0–4.5 当前基线保持可追溯；本 takeover 不修改生产规则。
- R2R1J receiver patch 必须保留 pre-repair source/hash，可在 preflight failure 时恢复。
- H019 完整重跑尚未发生，不存在因 takeover 需要回滚的 H019 新生产状态。

## UNRESOLVED

1. **R2R1K output-size contract**：1920×1080 在 formal Part 4 中写作 final delivery target，但当前 C-VB01 task 将其作为 output requirement；R2R1F / R2R1J 均观察到 1672×941 native raster，需先对账。
2. **C-VB01 content QA**：R2R1J 图片没有明确呈现酒店搜索；该 PNG 不接受为 final production asset。模型 miss / task contract 问题尚未在本 Gate 分类，禁止借 R2R1K 顺手改 prompt。
3. **Part 2**：11 项 edit map 等待 Owner 逐项批准；正式 Part 2 未改。
4. **Style Plate**：具体长期 Style Plate 图片尚未确认。
5. **Part 3 → Part 4 Style contract**：Part 3 已改为 1–2 张中性 Style Plate；Part 4 仍引用 2 张具体生活场景 Style Reference，等待独立 Part 4 Gate 对齐。
6. **Part 4 H019 refinements**：部分 Owner 已认可方向仍等待独立正式修改 Gate。
7. **Part 5 / Part 6**：尚未正式迁移。

## NEXT_STEP

先执行并 Review `R2R1K`，**不调用 imagegen**。

目标是先把：
`Part 4 final delivery target → C-VB01 task requirement → actual native raster → delivery status`
四层事实分开。

R2R1K PASS 后，Reviewer 才决定：
- 是否进入 2 张并发 live fast-path canary；
- output normalization 是否需要独立 Gate；
- C-VB01 内容 FAIL 在后续 retry-capable Gate 中如何处理。

完整 6 Beat 与 H019 仍保持未授权。

## OWNER_ACTION_REQUIRED

- **当前 R2R1K：NONE**。若诊断证明必须修改 formal Part 4 policy，再返回最小 Owner 决策。
- **Part 2 正式修改：DEFERRED — 需要 Owner 后续逐项批准时再开启该 Gate。**

## EVIDENCE_POINTERS

- Discovery baseline commit: `3bdf6e390426c5ba33193020927857fe6cdc7bfc`
- Legacy history: `comic-narrative/HANDOFF.md`
- R2R1H PASS: `comic-narrative/reviews/imagegen-speed/IMAGEGEN_OUTPUT_HINT_LOCAL_CACHE_DIAGNOSTIC_R2R1H_REVIEW.md`
- R2R1I RETURN / R2R1J Gate: `comic-narrative/reviews/imagegen-speed/IMAGEGEN_OUTPUT_HINT_LOCAL_CACHE_LIVE_CANARY_R2R1I_REVIEW.md`
- R2R1J PASS / R2R1K Gate: `comic-narrative/reviews/imagegen-speed/IMAGEGEN_OUTPUT_HINT_GUARD_REPAIR_LIVE_CANARY_R2R1J_REVIEW.md`
- Part 2 pending edit map: `comic-narrative/reviews/part2/PART2_FORMAL_EDIT_MAP.md`
- Current formal Part 3: `comic-narrative/part3/STORYBOARD_VISUAL_DIRECTOR.md`
- Current formal Part 4: `comic-narrative/part4/IMAGE_ASSET_EXECUTION.md`
- Current formal Part 4.5: `comic-narrative/part4_5/ASSET_REUSE_LIBRARY.md`
- Takeover discovery review: `comic-narrative/reviews/governance/TAKEOVER_DISCOVERY_20261003.md`
