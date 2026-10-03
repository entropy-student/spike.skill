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

`ACTIVE_REVIEW / R2R1T_LOGGER_REPAIR_AND_TWO_CONCURRENT_LIVE_CANARY`

并行状态：
- 主执行线：R2R1S 因 fresh harness logger 写错 RUN_EVENTS 路径而在 preflight 停止，`IMAGEGEN_CALLS=0`；R2R1T 允许同一轮做一次 bounded logger repair，smoke PASS 后直接并发 2 张图。
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
  - R2R1N：**PASS / OWNER APPROVED**：继续使用 Codex 内置生图；16:9 保持唯一正式画幅；1920×1080 改为唯一默认目标画布 / final delivery target；取消独立 native pixel target；native 像素不精确本身不判失败、不触发重生；
  - R2R1O：**PASS**：零生图回归确认 preserved 1672×941 不因 native pixel mismatch 失败或 retry；1024×1536 明显错误画幅仍可独立 QA FAIL；`IMAGEGEN_CALLS=0`、retries=0；
  - R2R1P：**RETURN_PREFLIGHT_DRIFT — REVIEWER ACCEPTED**：本机 recorded R2R1J evidence root 与六个 mandatory items 缺失；因此 positive/negative preflight 未运行，`IMAGEGEN_CALLS=0`。Reviewer 已从 ChatGPT Library 找回原始 R2R1J ZIP，SHA-256 与 R2R1J formal PASS 记录完全一致；
  - R2R1Q：**RETURN_PREFLIGHT_DRIFT — REVIEWER ACCEPTED**：ZIP 身份/路径安全 PASS，但 recorded root 已有 9 个顶层条目，按 R2R1Q 禁止覆盖规则立即停止；未解压、未覆盖、未回归、`IMAGEGEN_CALLS=0`；
  - R2R1R：**SUPERSEDED BEFORE EXECUTION / OWNER DIRECTION**：取消“全量历史目录/hash + 旧正负样本复验”要求；正式 PASS 的能力默认继承，除非相关实现/接口/运行环境变化，或出现与旧 PASS 冲突的新证据。
  - R2R1S：**RETURN_IMPLEMENTATION_DRIFT — REVIEWER ACCEPTED**：两个 fresh task、16:9 contract、call guard、save helper 均通过轻量检查；仅临时 `append_event.ps1` 因使用 `PSScriptRoot` 把 smoke event 写入 `source/RUN_EVENTS.jsonl` 而非 run-root log；按 Gate 停止，`IMAGEGEN_CALLS=0`、outputs=0。
- **H019 完整第二轮重跑**：`DEFERRED`。
- **6 Beat R2 完整复测**：未授权；先完成 R2R1P 两路并发 live fast-path canary，再由 Reviewer 决定是否进入 6 Beat。
- **Part 5 / Part 6**：未正式迁移。

## CURRENT_GATE

### GATE_ID

IMAGEGEN_TWO_CONCURRENT_LOGGER_REPAIR_AND_LIVE_CANARY_R2R1T

### OBJECTIVE

快速修复 R2R1S 唯一已知的 fresh harness 缺陷——事件日志路径——并在**同一轮**直接完成两路并发生图测试。

目标不是再做一轮日志研究，而是尽快得到两张并发 live 结果。

### MAX_ENDPOINT_THIS_ROUND

1. fresh-read current main + Part 4 §25；
2. 在全新的 R2R1T run directory 创建 fresh 两个 16:9 tasks；
3. 创建 fresh fast-path helper 与 call guard=2；
4. 创建 fresh logger，显式接收 EventLogPath / run-root，不得只用 PSScriptRoot 推导 canonical log；
5. smoke test 必须证明事件写入 run-root RUN_EVENTS.jsonl，且 source/RUN_EVENTS.jsonl 不存在；
6. smoke PASS 后**同一轮继续**，不回 Reviewer；
7. 两个 tasks 同时提交；
8. exactly 2 次 Codex 内置 imagegen；
9. 每路独立完成 task attribution → bounded output_hint → local PNG → source hash → copy hash → dimensions → QA；
10. 记录 generation timing 与 local-persist timing；
11. fresh readback；
12. STOP at Reviewer。

### MANDATORY_REVIEW_STOP

STOP_AT_REVIEWER=YES

但只有以下情况需要在 live 前停止：

- current main / Part 4 contract drift；
- logger repair smoke 仍失败；
- helper/call-guard static check 失败；
- fresh output/evidence paths 冲突。

若 logger smoke PASS，则**不得仅因为“修过 logger”而中间停一次**；必须继续到两路 live canary。

### TARGET_AND_SCOPE

允许读取：

1. current REVIEWER_HANDOFF 当前 Gate / Relay；
2. current Part 4 §25；
3. R2R1S 当前轮新 evidence 中对 logger defect 的最小说明；
4. fresh R2R1T task/helper/logger/evidence files。

不允许：

- broad history；
- R2R1J ZIP/root/fixtures；
- exact-pixel 重新研究；
- API fallback；
- 6 Beat / H019；
- 第 3 次 imagegen；
- retry / replacement；
- 修改 Part 2/3/4/4.5/SKILL 正式规则。

### APPLICABLE_CRITICAL_CONSTRAINTS

- PASS_CANDIDATE != PASS；
- accepted R2R1J fast-path / R2R1O size policy 继续继承；
- R2R1S defect 只归类为 fresh harness logger path；
- bounded repair 只允许触碰 fresh R2R1T harness；
- global imagegen call limit=2；
- per-task attempt=1；
- retries/replacements/fallback=0；
- 任一路失败不得补第 3 次调用；
- output_hint 每路独立 fail-closed；
- no broad generated_images scan；
- no TTY/base64 bulk；
- native pixel mismatch 不失败、不重试；
- content QA 只记录，不触发重试；
- canary outputs 不自动进入生产素材库。

### PREFLIGHT

只做当前轮最小检查：

1. current main fresh-read；
2. Part 4 §25 仍为 16:9 only、1920×1080 target canvas/final target、无 exact native target；
3. 两个 task IDs 唯一、内容明显不同、prompt 只要求 16:9；
4. global call guard=2，per-task max attempt=1；
5. fresh outputs/QA/evidence directories 不冲突；
6. save helper static checks通过；
7. logger 显式接收 EventLogPath 或 run-root；
8. logger smoke event 必须：
   - 写入 run-root RUN_EVENTS.jsonl；
   - parseable；
   - sequence 连续；
   - source/RUN_EVENTS.jsonl 不存在；
9. smoke 完成后可清理或标记 smoke event，但必须保留可重建 evidence；
10. RUN_RECORD / fresh-readback 路径就绪。

若 1–10 PASS，立即进入 LIVE_CANARY，不另开 Gate。

### BOUNDED_LOGGER_REPAIR

允许一次 fresh harness repair：

推荐：

- append_event.ps1 增加 required EventLogPath 参数；
- caller 显式传入 run-root RUN_EVENTS.jsonl；
- logger 对 parent directory / append / encoding 做最小校验；
- 禁止通过 PSScriptRoot 猜 run root。

这项 repair 只存在于 R2R1T fresh evidence 目录。

### LIVE_CANARY

1. concurrency-at-submit=2；
2. exactly 2 imagegen calls；
3. task A/B 各 attempt=1；
4. 不 retry / replacement。

每个 result：

1. 明确绑定 task id；
2. 记录 call start / return timing；
3. 读取 bounded output_hint metadata；
4. exact one PNG candidate；
5. require allowed generated-images root；
6. require existing regular PNG；
7. source SHA-256；
8. copy to task fresh destination；
9. copied SHA-256 = source SHA；
10. 记录 native dimensions；
11. reach QA；
12. record QA result；
13. 记录 result-return → local persist/QA timing。

任一路 hint/path/hash 失败：

- fail closed；
- 不 bulk fallback；
- 不 replacement；
- 另一路若已 in-flight 可自然完成；
- 整轮 RETURN_*。

### REQUIRED_EVIDENCE

- IMAGEGEN_TWO_CONCURRENT_LOGGER_REPAIR_AND_LIVE_CANARY_R2R1T.md
- PREFLIGHT_EVIDENCE_R2R1T.md
- current main + Part 4 blob
- two fresh task fixtures
- repaired logger source/hash
- logger smoke result
- proof root RUN_EVENTS receives event
- proof source/RUN_EVENTS does not exist
- call guard
- concurrency-at-submit
- IMAGEGEN_CALLS=2
- per-task attempts=1
- retries/replacements/fallback=0
- per-task output_hint diagnostics
- per-task source/copy path + SHA
- per-task native dimensions
- per-task QA reachability/result
- generation timing
- post-return local-persist timing
- RUN_EVENTS.jsonl
- RUN_RECORD.json
- fresh readback
- formal project-rule delta=0

### ACCEPTANCE_CRITERIA

PASS_CANDIDATE_TWO_CONCURRENT_LOGGER_REPAIRED_LIVE_R2R1T requires：

1. fresh lightweight preflight PASS；
2. logger smoke writes canonical root log；
3. no misplaced source log；
4. exactly 2 concurrent imagegen calls；
5. two distinct task/result identities correctly attributed；
6. attempts=1 each；
7. retries/replacements/fallback=0；
8. no TTY bulk transfer；
9. both hints produce exactly one allowed local PNG；
10. each source SHA = copied SHA；
11. both reach QA；
12. native dimensions recorded without exact-pixel retry；
13. event chain reconstructable；
14. generation vs local-persist timing separated；
15. no formal-rule changes；
16. fresh readback consistent。

Allowed results：

- PASS_CANDIDATE_TWO_CONCURRENT_LOGGER_REPAIRED_LIVE_R2R1T
- RETURN_PREFLIGHT_DRIFT
- RETURN_IMPLEMENTATION_DRIFT
- RETURN_TEST_FAILURE

### ROLLBACK_STATUS_OR_PLAN

- 只修改 fresh R2R1T harness；
- 正式规则无需回滚；
- 若 logger repair smoke 失败，保留证据并 STOP；
- 若 live 失败，不 retry；
- canary outputs 保留为 evidence，不自动进入 production library。

### OWNER_ONLY_ACTIONS

NONE

### REVIEWER_TO_EXECUTOR_RELAY

从 current GitHub main 开始，只执行 R2R1T。

读取：

1. current REVIEWER_HANDOFF 当前 R2R1T Gate / Relay；
2. current Part 4 §25；
3. R2R1S 报告中 logger defect 的最小结论。

不要读 broad history，不要碰 R2R1J 历史目录。

执行：

1. fresh R2R1T run directory；
2. 2 个 distinct 16:9 tasks；
3. fresh save helper + call guard；
4. 修 logger：显式 EventLogPath / run-root；
5. smoke 验证 root RUN_EVENTS 正确、source log 不存在；
6. smoke PASS 后同一轮直接并发提交 2 个 tasks；
7. 每路 output_hint → allowed PNG → source hash → copy hash → dimensions → QA；
8. 不 retry、不 replacement、不第 3 张；
9. 记录 timing；
10. fresh readback；
11. STOP。

### EXECUTOR_TO_REVIEWER_RELAY

结果：PASS_CANDIDATE_TWO_CONCURRENT_LOGGER_REPAIRED_LIVE_R2R1T / RETURN_*
改动：仅新增/修复 R2R1T fresh logger/helper/task/evidence；正式规则和历史 evidence 未修改。
验证：一句话说明 logger smoke、2 路并发、IMAGEGEN_CALLS、每路 path/hash/dimensions/QA、zero retry/fallback、timing 与 fresh readback。
问题：NONE，或“阻塞短语：一句通俗解释”。
回滚：正式规则无需回滚；fresh evidence/canary outputs 保留。
请 Reviewer 检查：logger canonical path、两路并发、task attribution、fast-path hashes、zero retry/fallback、timing/readback。
Owner 转交：NONE。

## CRITICAL_CONSTRAINTS

- `PASS_CANDIDATE != PASS`；正式 PASS 只由 Reviewer fresh readback 后给出。
- **Accepted capability inheritance**：本项目已正式 PASS 的能力默认由后续 Gate 继承；只有相关实现/接口/运行环境发生可能影响该能力的变化，或新证据与旧 PASS 冲突，才要求重验。旧本地 evidence 目录缺失本身不构成重验触发。
- 未证明的事实保持 `UNKNOWN`，不得从旧 Handoff 推断。
- Part 2 edit map 不得在 Owner 逐项批准前进入正式正文。
- Style Plate 具体资产必须经 Owner 确认后才进入长期视觉资产。
- 当前 imagegen 可靠性 Gate 不得升级为 Part 3/4 规则改造，除非后续证据证明是跨任务稳定规则缺口。
- 历史 `HANDOFF.md` 不再作为 Executor 默认启动面。

## DEFAULT_EXECUTION_CHANNEL

- Canonical docs / reviews：GitHub `main`；
- 当前 R2R1S：既有 Owner/Codex Windows 执行链；lightweight preflight 后最多 2 次并发 Codex 内置 imagegen；
- exact local target path：必须由 preserved Gate evidence 证明，未证明则 `UNKNOWN` / RETURN。

## CURRENT_ROLLBACK_STATUS

- GitHub 正式 Part 0–4.5 当前基线保持可追溯；R2R1L 已按 Owner 明确授权仅修改 Part 4 §25 的画幅 / 尺寸合同。
- R2R1J receiver patch 必须保留 pre-repair source/hash，可在 preflight failure 时恢复。
- H019 完整重跑尚未发生，不存在因 takeover 需要回滚的 H019 新生产状态。

## UNRESOLVED

1. **R2R1T logger-repair + two-concurrent live canary**：一次 bounded fresh-harness logger 修复后，同一轮直接获得两路并发生图结果。
2. **6 Beat R2 完整复测**：R2R1S PASS 后由 Reviewer 决定是否直接进入。
3. **Final video 1920×1080 adaptation implementation**：标准画布已确定，具体视频阶段适配仍待 Part 5 正式迁移时实现。
4. **C-VB01 historical content QA**：旧 PNG 不接受为 final production asset。
5. **Part 2**：11 项 edit map 等待 Owner 逐项批准。
6. **Style Plate / Part 3→Part 4 Style contract / Part 4 H019 refinements**：仍待独立 Gate。
7. **Part 5 / Part 6**：尚未正式迁移。

## NEXT_STEP

直接执行并 Review R2R1T：

current main → fresh logger bounded repair → smoke PASS → 同一轮 2 路同时 imagegen → each result output_hint/local path/hash/copy/QA → timing/readback → STOP

## OWNER_ACTION_REQUIRED

- **R2R1T 执行转交：**将当前 REVIEWER_HANDOFF.md 的 R2R1T Relay 交给 Windows / Codex Executor；先修 fresh logger 路径并 smoke，PASS 后同一轮直接并发 2 张图；最多 2 次调用、禁止重试。
- 不需要整理、恢复或核验任何 R2R1J 历史本地文件。
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
- R2R1O PASS / R2R1P Gate: `comic-narrative/reviews/imagegen-speed/IMAGEGEN_SIZE_POLICY_NO_IMAGE_REGRESSION_R2R1O_REVIEW.md`
- R2R1P RETURN / R2R1Q recovery Gate: `comic-narrative/reviews/imagegen-speed/IMAGEGEN_OUTPUT_HINT_TWO_CONCURRENT_LIVE_CANARY_R2R1P_REVIEW.md`
- R2R1Q RETURN / R2R1R read-only qualification Gate: `comic-narrative/reviews/imagegen-speed/IMAGEGEN_R2R1J_EVIDENCE_RESTORE_AND_PREFLIGHT_REQUALIFICATION_R2R1Q_REVIEW.md`
- R2R1R superseded / R2R1S fast-test simplification: `comic-narrative/reviews/imagegen-speed/IMAGEGEN_R2R1R_SUPERSEDED_AND_FAST_TEST_SIMPLIFICATION_REVIEW.md`
- R2R1S RETURN / R2R1T logger repair + live Gate: `comic-narrative/reviews/imagegen-speed/IMAGEGEN_TWO_CONCURRENT_LIGHTWEIGHT_LIVE_CANARY_R2R1S_REVIEW.md`
- Part 2 pending edit map: `comic-narrative/reviews/part2/PART2_FORMAL_EDIT_MAP.md`
- Current formal Part 3: `comic-narrative/part3/STORYBOARD_VISUAL_DIRECTOR.md`
- Current formal Part 4: `comic-narrative/part4/IMAGE_ASSET_EXECUTION.md`
- Current formal Part 4.5: `comic-narrative/part4_5/ASSET_REUSE_LIBRARY.md`
- Takeover discovery review: `comic-narrative/reviews/governance/TAKEOVER_DISCOVERY_20261003.md`
