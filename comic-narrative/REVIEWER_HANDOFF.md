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

`ACTIVE_REVIEW / R2R1O_SIZE_POLICY_REGRESSION`

并行状态：
- 主执行线：R2R1N 已按 Owner 决策取消 exact-native 像素硬门；R2R1O 仅做零生图回归，防止旧尺寸检查重新进入任务/QA。
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
  - R2R1M：**RETURN_EXECUTION_CONTRACT_UNRESOLVED — REVIEWER ACCEPTED**：完整 ZIP 已由 Reviewer 实际检查；当前 Windows/Codex `image_gen.imagegen` callable 不暴露结构化 size/width/height/resolution 参数，故无法证明 native `1792×1008`；`IMAGEGEN_CALLS=0`、retries=0、fallback=0，fail-closed 正确；
  - R2R1N：**PASS / OWNER APPROVED**：继续使用 Codex 内置生图；16:9 保持唯一正式画幅；1920×1080 改为唯一默认目标画布 / final delivery target；取消独立 native pixel target；native 像素不精确本身不判失败、不触发重生。
- **H019 完整第二轮重跑**：`DEFERRED`。
- **6 Beat R2 完整复测**：未授权；先完成 R2R1M native-size propagation live canary，再由 Reviewer 决定是否恢复双并发 live fast-path canary。
- **Part 5 / Part 6**：未正式迁移。

## CURRENT_GATE

### GATE_ID

`IMAGEGEN_SIZE_POLICY_NO_IMAGE_REGRESSION_R2R1O`

### OBJECTIVE

在 **0 次 imagegen** 前提下，证明未来任务与 QA 已经采用新的简化尺寸规则，不再因为 provider-native raster 不是精确像素值而失败或重试。

正式尺寸规则：

- 16:9 = 唯一正式画幅；
- 1920×1080 = 默认目标画布 / final delivery target；
- 无 separate native pixel target；
- native width × height 只记录真实值；
- native 像素不等于 1920×1080，本身不构成失败 / retry；
- 不为 exact pixel dimensions 重新生图或修改图片。

### MAX_ENDPOINT_THIS_ROUND

1. fresh-read current GitHub main + Part 4 §25；
2. 创建一个新的 R2R1O task / QA fixture；
3. fixture 必须只包含：
   - `aspect_ratio = 16:9`
   - `target_canvas = 1920×1080`
   - `native_pixel_target = NONE`
   - `retry_on_native_pixel_mismatch = false`
4. 使用 preserved 1672×941 fixture 做 no-image regression；
5. 证明 1672×941 不会仅因 pixel dimensions 被判失败 / retry；
6. 仍允许内容 / 构图 / 明显非 16:9 画面独立失败；
7. fresh readback；
8. STOP at Reviewer。

### MANDATORY_REVIEW_STOP

`STOP_AT_REVIEWER=YES`

本 Gate：
- `IMAGEGEN_CALLS=0`；
- 不运行双并发；
- 不运行 6 Beat；
- 不运行 H019；
- 不修改图片；
- 不修改 Part 2 / Part 3 / Part 4.5 / SKILL。

### TARGET_AND_SCOPE

允许读取：

1. 当前 `REVIEWER_HANDOFF.md` 的本 Gate / Relay；
2. `part4/IMAGE_ASSET_EXECUTION.md` §25；
3. `IMAGEGEN_SIZE_POLICY_SIMPLIFICATION_R2R1N_REVIEW.md`；
4. R2R1J / R2R1M 中 preserved 的 1672×941 size evidence；
5. 当前 future-task / QA 入口中与 output-size 判定直接相关的最小文件；若 exact active path 不存在，则只创建全新 R2R1O fixture，不追查历史不存在的 compiler。

禁止：

- 重开 exact-native 参数调查；
- API fallback 调研 / 接入；
- imagegen；
- 为尺寸修改图片；
- broad history scan；
- 改 parser / output_hint fast-path；
- 改内容 prompt / hotel-search QA。

### APPLICABLE_CRITICAL_CONSTRAINTS

- `PASS_CANDIDATE != PASS`；
- current GitHub main / fresh evidence 优先；
- 未证明事实保持 `UNKNOWN`；
- 不得把旧 R2R1L / R2R1M exact-native 规则重新带入新 fixture；
- preserved historical evidence 不重写；
- 1672×941 preserved raster 只用于证明 size-policy semantics，不代表内容 QA PASS；
- 内容 QA 与尺寸 QA 保持分离。

### PREFLIGHT

在任何本地 fixture / QA 执行前证明：

1. current main 已 fresh-read；
2. Part 4 §25 不再包含 `1792×1008 native target`；
3. Part 4 §25 明确 1920×1080 是 target canvas/final target，而非 native guarantee；
4. preserved 1672×941 fixture / size evidence 可读且来源可追溯；
5. 新 fixture 与 regression output 使用 fresh 路径；
6. `IMAGEGEN_CALLS=0` guard 生效；
7. 不会修改正式图片或历史 evidence。

### REQUIRED_EVIDENCE

- `IMAGEGEN_SIZE_POLICY_NO_IMAGE_REGRESSION_R2R1O.md`
- `PREFLIGHT_EVIDENCE_R2R1O.md`
- current main SHA
- Part 4 §25 pointer + blob SHA
- new task / QA fixture + hash
- preserved 1672×941 evidence pointer
- regression result proving native pixel mismatch alone = non-failure / no-retry
- negative case proving materially wrong aspect/composition may still fail independently
- `IMAGEGEN_CALLS=0`
- retries = 0
- project-scoped diff / non-target delta
- fresh readback

### ACCEPTANCE_CRITERIA

`PASS_CANDIDATE_SIZE_POLICY_NO_IMAGE_REGRESSION_R2R1O` 需要：

1. imagegen = 0；
2. new fixture contains no exact native pixel target；
3. 1920×1080 仅作为 target canvas / final target；
4. preserved 1672×941 不因 native pixel mismatch alone fail；
5. no retry is triggered by native pixel mismatch alone；
6. output/content QA can still independently reject a materially wrong composition；
7. no production image mutation；
8. no historical evidence rewrite；
9. no unrelated formal-rule changes；
10. fresh readback matches evidence。

允许结果：

- `PASS_CANDIDATE_SIZE_POLICY_NO_IMAGE_REGRESSION_R2R1O`
- `RETURN_PREFLIGHT_DRIFT`
- `RETURN_IMPLEMENTATION_DRIFT`
- `RETURN_TEST_FAILURE`

### ROLLBACK_STATUS_OR_PLAN

- 本 Gate 不修改 production images；
- 新 fixture / test output 与正式生产资产隔离；
- 若意外修改正式源码，恢复到 preflight source/hash 后 RETURN；
- 不通过 imagegen 补证据。

### OWNER_ONLY_ACTIONS

`NONE`

### REVIEWER_TO_EXECUTOR_RELAY

从 current GitHub main 开始，只执行 R2R1O。

读取：

1. `comic-narrative/REVIEWER_HANDOFF.md` → CURRENT_GATE / Relay；
2. `comic-narrative/part4/IMAGE_ASSET_EXECUTION.md` §25；
3. `comic-narrative/reviews/imagegen-speed/IMAGEGEN_SIZE_POLICY_SIMPLIFICATION_R2R1N_REVIEW.md`；
4. R2R1J / R2R1M preserved 1672×941 size evidence。

执行：

1. fresh-read main + Part 4 §25；
2. 创建全新 R2R1O task / QA fixture；
3. 明确 `aspect_ratio=16:9`、`target_canvas=1920×1080`、`native_pixel_target=NONE`、`retry_on_native_pixel_mismatch=false`；
4. 用 preserved 1672×941 做 zero-image regression；
5. 验证 size mismatch alone 不失败 / 不 retry；
6. 加一个明显错误画幅 / 构图的 synthetic negative case，证明真正 output-format 问题仍可失败；
7. fresh readback；
8. STOP。

不要 imagegen，不要 API fallback，不要找历史 compiler，不要修改 Part 4 正式规则。

### EXECUTOR_TO_REVIEWER_RELAY

```text
结果：PASS_CANDIDATE_SIZE_POLICY_NO_IMAGE_REGRESSION_R2R1O / RETURN_*
改动：一句话说明仅新增哪些 R2R1O fixture/evidence，或说明 NONE。
验证：一句话说明 1672×941 size regression、negative case、IMAGEGEN_CALLS=0、retries=0、fresh readback。
问题：NONE，或“阻塞短语：一句通俗解释”。
回滚：一句话说明正式规则/图片/历史 evidence 是否保持不变。
请 Reviewer 检查：核对新尺寸合同、size mismatch no-retry、negative case 与 fresh readback。
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
- 当前 R2R1O：既有 Owner/Codex Windows 本地执行链；本轮仅做 no-image fixture / QA regression；
- exact local target path：必须由 preserved Gate evidence 证明，未证明则 `UNKNOWN` / RETURN。

## CURRENT_ROLLBACK_STATUS

- GitHub 正式 Part 0–4.5 当前基线保持可追溯；R2R1L 已按 Owner 明确授权仅修改 Part 4 §25 的画幅 / 尺寸合同。
- R2R1J receiver patch 必须保留 pre-repair source/hash，可在 preflight failure 时恢复。
- H019 完整重跑尚未发生，不存在因 takeover 需要回滚的 H019 新生产状态。

## UNRESOLVED

1. **R2R1O size-policy regression**：需确认 future task / QA 不再把 native exact pixels 当失败 / retry 条件。
2. **Final video 1920×1080 adaptation implementation**：标准画布已确定，具体视频阶段适配仍待 Part 5 正式迁移时实现。
3. **C-VB01 content QA**：R2R1J 图片没有明确呈现酒店搜索；旧 PNG 不接受为 final production asset。
4. **Part 2**：11 项 edit map 等待 Owner 逐项批准。
5. **Style Plate / Part 3→Part 4 Style contract / Part 4 H019 refinements**：仍待独立 Gate。
6. **Part 5 / Part 6**：尚未正式迁移。

## NEXT_STEP

执行并 Review `R2R1O`：

`current main → fresh-read Part 4 §25 → new zero-image fixture → preserved 1672×941 size regression → wrong-aspect negative case → fresh readback → STOP`

R2R1O 正式 PASS 后，Reviewer 再决定恢复双并发 live fast-path canary；不再单独开启 exact-pixel 调查。

## OWNER_ACTION_REQUIRED

- **R2R1O 执行转交：**将当前 `REVIEWER_HANDOFF.md` 的 R2R1O Relay 交给既有 Windows / Codex Executor；无需额外决策。
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
- R2R1N simplified size policy / R2R1O Gate: `comic-narrative/reviews/imagegen-speed/IMAGEGEN_SIZE_POLICY_SIMPLIFICATION_R2R1N_REVIEW.md`
- Part 2 pending edit map: `comic-narrative/reviews/part2/PART2_FORMAL_EDIT_MAP.md`
- Current formal Part 3: `comic-narrative/part3/STORYBOARD_VISUAL_DIRECTOR.md`
- Current formal Part 4: `comic-narrative/part4/IMAGE_ASSET_EXECUTION.md`
- Current formal Part 4.5: `comic-narrative/part4_5/ASSET_REUSE_LIBRARY.md`
- Takeover discovery review: `comic-narrative/reviews/governance/TAKEOVER_DISCOVERY_20261003.md`
