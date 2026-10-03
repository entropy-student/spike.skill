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

`ACTIVE_REVIEW / R2R1S_TWO_CONCURRENT_LIGHTWEIGHT_LIVE_CANARY`

并行状态：
- 主执行线：Owner 明确要求停止历史证据反复复验、优先快速得到 live 结果；R2R1R 在执行前被取代。R2R1S 直接做两路并发生图轻量 canary。
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
- **H019 完整第二轮重跑**：`DEFERRED`。
- **6 Beat R2 完整复测**：未授权；先完成 R2R1P 两路并发 live fast-path canary，再由 Reviewer 决定是否进入 6 Beat。
- **Part 5 / Part 6**：未正式迁移。

## CURRENT_GATE

### GATE_ID

IMAGEGEN_TWO_CONCURRENT_LIGHTWEIGHT_LIVE_CANARY_R2R1S

### OBJECTIVE

快速回答当前唯一问题：

当前 Codex 内置 imagegen 能否同时提交 2 个不同任务，并让两个结果各自通过已接受的 output_hint 本地快路径正确落盘、归属、hash/copy 并到达 QA？

本 Gate 不再重放 R2R1J 历史 fixture，不依赖任何旧本地 evidence 目录。

### MAX_ENDPOINT_THIS_ROUND

1. fresh-read current GitHub main + 当前 Part 4 §25；
2. 创建 2 个 fresh、内容明显不同的 16:9 canary task；
3. 建立 fresh evidence/output 目录与 global call guard = 2；
4. 同时提交 2 次 Codex 内置 imagegen；
5. 每个 result 独立读取其 bounded output_hint；
6. 每个 result 从 hint 取得唯一合法本地 PNG 路径；
7. 每个 result 复制到各自 task destination，验证 source/copy SHA-256 相等；
8. 记录 native width × height；
9. 两张图都进入 QA；QA 只记录，不触发 retry；
10. 记录 generation timing 与 post-return local persist timing；
11. fresh readback；
12. STOP at Reviewer。

总 imagegen 调用上限 = 2。

### MANDATORY_REVIEW_STOP

STOP_AT_REVIEWER=YES

明确禁止：

- 第 3 次 imagegen；
- attempt 2 / retry / replacement；
- 6 Beat；
- H019；
- concurrency 3；
- API fallback；
- TTY / write_stdin 搬运完整 base64 大图；
- 历史 R2R1J ZIP/root 比对；
- 历史 positive / five-negative replay；
- exact-pixel 议题；
- 修改 Part 2/3/4/4.5/SKILL。

### TARGET_AND_SCOPE

允许读取：

1. 当前 comic-narrative/REVIEWER_HANDOFF.md 当前 Gate / Relay；
2. 当前 comic-narrative/part4/IMAGE_ASSET_EXECUTION.md §25；
3. 当前 R2R1S 新建 task/evidence/output 文件。

允许继承为 accepted facts，不要求重读或重放历史本地 evidence：

- R2R1J：单路 output_hint → local PNG → hash/copy → QA fast path 已正式 PASS；
- R2R1O：16:9 + native pixel mismatch 不失败 / 不 retry 已正式 PASS。

本轮允许在 R2R1S fresh evidence 目录创建最小临时 fast-path helper，仅负责：

- 接收当前 result 的 bounded output_hint；
- 提取唯一 .png 路径；
- require 路径位于当前用户 .codex/generated_images 根下；
- require 文件存在且为 regular PNG；
- source SHA-256；
- copy 到当前 task 的 fresh destination；
- copied SHA-256 equality。

该 helper 是本轮测试 harness，不自动升级为正式生产源码。

不允许依赖：

- R2R1J 旧本地目录；
- R2R1J ZIP；
- 旧 receiver/parser/hash-helper 文件；
- 任何历史测试 PNG。

### APPLICABLE_CRITICAL_CONSTRAINTS

- PASS_CANDIDATE != PASS；
- explicit Owner direction 优先；
- accepted PASS capability 默认继承，只有出现 revalidation trigger 才重验；
- 本轮没有 revalidation trigger 证明 R2R1J / R2R1O 已接受事实失效；
- global imagegen call limit = 2；
- per-task attempt limit = 1；
- 两个任务失败后都不得 replacement；
- 任一路失败时，已经 in-flight 的另一路允许自然完成并保留 evidence，不得启动新 call；
- output_hint 仍按当前 result 独立 fail-closed，不做 broad generated_images 扫描；
- 不通过 TTY 搬完整 image bytes；
- native pixel mismatch 本身不失败 / 不 retry；
- content QA 与 integration result 分离；
- canary 图片不自动进入 production asset library；
- 无账号/支付/公开发布/真实业务副作用。

### PREFLIGHT

Preflight 只检查当前执行是否能安全开始，不复验历史 PASS。

必须满足：

1. current GitHub main fresh-read；
2. Part 4 §25 fresh-read，仍为：
   - 16:9 only；
   - 1920×1080 = target canvas / final target；
   - no exact native pixel target；
   - native mismatch alone != fail/retry；
3. 两个 fresh task IDs 唯一；
4. 两个 prompt 内容明显不同；
5. 两个 prompt 都明确要求 16:9 横屏；
6. prompt 不包含 exact pixel dimensions；
7. global call guard = 2；
8. each task max attempt = 1；
9. 两个 fresh output/evidence path 不冲突；
10. 最小 fast-path helper 已静态检查：
    - 只读当前 hint；
    - exact one PNG candidate；
    - allowed-root check；
    - existence / regular-file check；
    - source/copy SHA equality；
    - no broad scan；
    - no TTY fallback；
11. RUN_EVENTS.jsonl / RUN_RECORD.json / fresh-readback 路径已就绪。

任一 preflight failure：

IMAGEGEN_CALLS=0 / RETURN_* / STOP

### LIVE_CANARY

仅在轻量 preflight PASS 后：

1. 两个 fresh tasks 以 concurrency-at-submit = 2 提交；
2. 总调用 exactly 2；
3. 每 task attempt 1；
4. 不 retry / replacement。

每个 result：

1. 绑定到其 task id；
2. 记录 imagegen call start / return timing；
3. 只保留 bounded hint metadata；不把完整 image/base64 写普通日志；
4. 用当前 result 的 output_hint 找唯一 allowed-root PNG；
5. source SHA-256；
6. copy 到该 task fresh destination；
7. copied SHA-256 必须等于 source SHA；
8. 记录 native dimensions；
9. 到达 QA；
10. QA 结果记录但不触发 retry；
11. 记录 result-return → local-copy/QA 完成耗时。

若 hint 缺失 / 多义 / 越界 / 文件不存在 / copy hash mismatch：

- 对应 task fail closed；
- 不 TTY fallback；
- 不 replacement call；
- 保留另一路真实结果；
- 整轮返回精确 RETURN_*。

### REQUIRED_EVIDENCE

只需要与本轮 live 结果直接相关的证据：

- IMAGEGEN_TWO_CONCURRENT_LIGHTWEIGHT_LIVE_CANARY_R2R1S.md
- PREFLIGHT_EVIDENCE_R2R1S.md
- current main SHA + Part 4 §25 blob
- two fresh task fixtures + hashes
- global call guard
- concurrency-at-submit evidence
- IMAGEGEN_CALLS=2
- per-task attempt count = 1
- retries=0
- replacements=0
- fallback=0
- per-task bounded hint diagnostics
- per-task source path + source SHA
- per-task copy path + copied SHA
- per-task native dimensions
- per-task QA reachability/result
- per-task generation timing
- per-task post-return local-persist timing
- RUN_EVENTS.jsonl
- RUN_RECORD.json
- fresh readback
- formal project-rule delta = 0

不要求历史 R2R1J ZIP/root/fixture evidence。

### ACCEPTANCE_CRITERIA

PASS_CANDIDATE_TWO_CONCURRENT_LIGHTWEIGHT_LIVE_R2R1S 需要：

1. lightweight preflight PASS；
2. exactly 2 imagegen calls；
3. concurrency-at-submit = 2；
4. two distinct task identities correctly attributed；
5. per-task attempts = 1；
6. retries/replacements/fallback = 0；
7. no bulk TTY image transfer；
8. both output_hints yield exactly one allowed local PNG；
9. each task source SHA = copied SHA；
10. both images reach QA；
11. native dimensions recorded and do not trigger exact-pixel fail/retry；
12. content QA failure, if any, does not trigger retry；
13. event/run record reconstructable；
14. generation timing and local-persist timing separated；
15. no formal-rule changes；
16. fresh readback matches。

Allowed results：

- PASS_CANDIDATE_TWO_CONCURRENT_LIGHTWEIGHT_LIVE_R2R1S
- RETURN_PREFLIGHT_DRIFT
- RETURN_IMPLEMENTATION_DRIFT
- RETURN_TEST_FAILURE

### ROLLBACK_STATUS_OR_PLAN

- 本 Gate 不修改正式规则；
- fresh canary outputs 只作为 evidence，不自动进生产素材库；
- 不通过 retry 补证据；
- 不修改/清理历史测试目录；
- 如 fresh helper 本身有问题，只保留本轮 evidence 并 RETURN，不回头重做历史 Gate。

### OWNER_ONLY_ACTIONS

NONE

Owner 已明确授权本轮快速两图 canary 方向；本 Gate 最多消耗 2 次现有 Codex 内置生图调用。

### REVIEWER_TO_EXECUTOR_RELAY

从 current GitHub main 开始，只执行 R2R1S。

只读：

1. comic-narrative/REVIEWER_HANDOFF.md → 当前 R2R1S Gate / Relay；
2. comic-narrative/part4/IMAGE_ASSET_EXECUTION.md §25。

不要读 broad history，不要读取/恢复/校验 R2R1J 旧目录或 ZIP。

执行：

1. fresh-read main + Part 4 §25；
2. 建 2 个 distinct 16:9 fresh tasks；
3. 建最小 current-run fast-path helper 与 call guard=2；
4. lightweight preflight；
5. 两任务同时提交；
6. 每路 result：task attribution → bounded output_hint → allowed local PNG → source hash → copy hash → dimensions → QA；
7. 不 TTY bulk、不 retry、不 replacement；
8. 记录 generation vs local-persist timing；
9. fresh readback；
10. STOP。

### EXECUTOR_TO_REVIEWER_RELAY

结果：PASS_CANDIDATE_TWO_CONCURRENT_LIGHTWEIGHT_LIVE_R2R1S / RETURN_*
改动：仅新增 R2R1S fresh task/helper/evidence；正式规则和历史 evidence 未修改。
验证：一句话说明 lightweight preflight、2 路并发、IMAGEGEN_CALLS、每路 output_hint/path/hash/native size/QA、retries/fallback、timing 与 fresh readback。
问题：NONE，或“阻塞短语：一句通俗解释”。
回滚：正式规则无需回滚；fresh canary evidence 保留，不进入 production library。
请 Reviewer 检查：核对两路并发、task/result attribution、fast-path source/copy hash、zero retry/fallback、timing 与 fresh readback。
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

1. **R2R1S two-concurrent lightweight live canary**：需快速证明两路 fresh imagegen 同时提交时，task/result attribution 与 output_hint 本地快路径都可靠。
2. **6 Beat R2 完整复测**：R2R1S PASS 后由 Reviewer 决定是否直接进入。
3. **Final video 1920×1080 adaptation implementation**：标准画布已确定，具体视频阶段适配仍待 Part 5 正式迁移时实现。
4. **C-VB01 historical content QA**：旧 PNG 不接受为 final production asset。
5. **Part 2**：11 项 edit map 等待 Owner 逐项批准。
6. **Style Plate / Part 3→Part 4 Style contract / Part 4 H019 refinements**：仍待独立 Gate。
7. **Part 5 / Part 6**：尚未正式迁移。

## NEXT_STEP

直接执行并 Review R2R1S：

current main → lightweight preflight → 2 路同时 imagegen → each result output_hint/local path/hash/copy/QA → timing/readback → STOP

不再经过 R2R1R 历史证据资格认证。

## OWNER_ACTION_REQUIRED

- **R2R1S 执行转交：**将当前 REVIEWER_HANDOFF.md 的 R2R1S Relay 交给 Windows / Codex Executor；本轮最多 2 次 Codex 内置生图、两路同时提交、禁止重试。
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
- Part 2 pending edit map: `comic-narrative/reviews/part2/PART2_FORMAL_EDIT_MAP.md`
- Current formal Part 3: `comic-narrative/part3/STORYBOARD_VISUAL_DIRECTOR.md`
- Current formal Part 4: `comic-narrative/part4/IMAGE_ASSET_EXECUTION.md`
- Current formal Part 4.5: `comic-narrative/part4_5/ASSET_REUSE_LIBRARY.md`
- Takeover discovery review: `comic-narrative/reviews/governance/TAKEOVER_DISCOVERY_20261003.md`
