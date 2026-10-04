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

`ACTIVE_REVIEW / R2R2_SIX_TASK_FIXED_CONCURRENCY_RELIABILITY`

并行状态：
- 主执行线：R2R1V 已正式 PASS，固定并发 2 的官方 output_hint → SourcePath → copy/hash/QA 链已封板并提升为仓库 canonical tools。R2R2 只验证六个独立任务跨三波调度/落盘/日志可靠性，不再重测底层历史问题。
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
  - R2R1T：**RETURN_TEST_FAILURE — REVIEWER ACCEPTED**：logger / preflight PASS；恰好并发 2 次 imagegen，均约 60.136s 返回且各有 1 个 output_hint；但 saver 依赖 `[Console]::In.ReadLine()`，启动时 stdin 已关闭，两路均 `INPUT_MISSING`，PNG=0、QA=`NOT_REACHED`、retries/replacements/fallback=0。
  - R2R1U：**RETURN_IMPLEMENTATION_DRIFT — REVIEWER ACCEPTED**：preflight PASS；恰好并发 2 次 imagegen，58.409s / 58.408s 返回且每路 output_hint_count=1；generic path regex 将 `output_dir as output_path.png` 拼成单一假路径，两路均 `SOURCE_MISSING`，PNG=0、QA=`NOT_REACHED`，无 retry/replacement/fallback。
  - R2R1V：**PASS**：official-hint parser fixtures 6/6 PASS；恰好并发 2 次 imagegen，55.333s / 55.334s 返回；两路均 `DIRECT_SOURCE_PATH`，source/copy SHA 一致，native=1672×941，视觉 QA 均 PASS；19 条事件连续；zero retry/replacement/fallback。该能力已提升到 `comic-narrative/tools/imagegen-fast-path/`。
- **H019 完整第二轮重跑**：`DEFERRED`。
- **6 Beat R2 完整复测**：未授权；先完成 R2R1P 两路并发 live fast-path canary，再由 Reviewer 决定是否进入 6 Beat。
- **Part 5 / Part 6**：未正式迁移。

## CURRENT_GATE

### GATE_ID

IMAGEGEN_EXECUTOR_SIX_TASK_RELIABILITY_R2R2

### OBJECTIVE

在不再重验 R2R1V 底层能力的前提下，验证当前 canonical imagegen fast path 能否稳定处理 **6 个独立任务 / 3 波 / 固定并发 2**。

本 Gate 只回答：

- 队列能否始终保持最多 2 个 imagegen in-flight；
- 一波返回并完成本地保存后，下一波能否及时补位，而不是等上一波视觉 QA 全部结束；
- 六个结果能否全部走 canonical parser → SourcePath → copy/hash/dimensions → QA；
- 多波事件日志是否连续、无丢失/重复；
- 全程是否仍保持 zero retry / replacement / fallback-imagegen。

这是 executor reliability Gate，不是 Part 3 / Part 4 内容规则研究。

### MAX_ENDPOINT_THIS_ROUND

1. fresh-read current main + Part 4 §25；
2. 使用仓库 canonical tools：
   - `comic-narrative/tools/imagegen-fast-path/official_hint_parser.ps1`
   - `comic-narrative/tools/imagegen-fast-path/local_copy.ps1`
   - `comic-narrative/tools/imagegen-fast-path/append_event.ps1`
3. 使用固定 fixture：
   - `comic-narrative/reviews/imagegen-speed/fixtures/IMAGEGEN_SIX_TASK_RELIABILITY_R2R2_TASKS.json`
4. 0-image preflight：
   - parser TestFixtures PASS；
   - local-copy synthetic missing-path smoke 到达 SOURCE_MISSING；
   - logger concurrent append smoke PASS；
   - call guard=6、max in-flight=2；
5. preflight PASS 后，同一轮执行 6 个 fixture tasks；
6. imagegen concurrency 固定 2；
7. 六任务各 attempt=1；
8. 每路 result：
   - output_hint_count=1；
   - canonical parser；
   - unique SourcePath；
   - local-copy helper；
   - source/copy SHA equality；
   - native dimensions；
   - QA；
9. scheduler 必须形成 3 波，并在前一波 image 已返回/保存/QA_QUEUED 后允许下一波提交，不等待前一波 QA_FINISHED；
10. fresh readback；
11. STOP at Reviewer。

总 imagegen 调用上限 = **6**。

### MANDATORY_REVIEW_STOP

`STOP_AT_REVIEWER=YES`

禁止：

- 第 7 次 imagegen；
- concurrency > 2；
- retry / replacement；
- API fallback；
- stdin / write_stdin；
- TTY/base64 image transfer；
- broad generated_images scan；
- 修改 canonical fast-path tools；
- 修改 fixture；
- 修改 Part 2/3/4/4.5/SKILL；
- H019 full rerun；
- production asset registration。

### TARGET_AND_SCOPE

Canonical tool blobs：

- official_hint_parser.ps1 = `094ffe536063921cd923de09d05c1edff3da408b`
- local_copy.ps1 = `7774168abde8019d6f2c50936c89ef1dc67c28f2`
- append_event.ps1 = `e6b31a4597c997fff6993d4dcc0abe8b855e09ac`
- README.md = `829343ec4aa06882aec42acc1e5d192cdd84ec27`

Fixture blob：

- IMAGEGEN_SIX_TASK_RELIABILITY_R2R2_TASKS.json = `494ee334ade104f635e00c80999ba1fa025926fa`

Fixture contains exactly 6 independent 16:9 canaries, no references and no production dependencies.

Allowed reads：

1. current REVIEWER_HANDOFF current Gate / Relay；
2. current Part 4 §25；
3. canonical tool directory above；
4. R2R2 fixture above；
5. fresh R2R2 run files。

Do not read broad history or historical local imagegen evidence.

### APPLICABLE_CRITICAL_CONSTRAINTS

- `PASS_CANDIDATE != PASS`；
- R2R1V is an accepted reusable capability；
- accepted capability inheritance applies；
- Owner-fixed imagegen concurrency = 2；
- do not test 3+；
- max calls = 6；
- each task max attempt = 1；
- retries/replacements/fallback-imagegen = 0；
- max imagegen in-flight = 2；
- tasks are independent；no production continuity/source dependencies；
- canonical tools are immutable during this Gate；
- native pixel mismatch alone != failure/retry；
- QA result does not trigger retry in this reliability Gate；
- content QA and executor reliability are reported separately；
- canary images do not enter production library。

### PREFLIGHT

Before imagegen：

1. current main fresh-read；
2. Part 4 §25 contract fresh-read；
3. verify canonical tool blobs equal Gate values；
4. verify fixture blob equals Gate value；
5. fixture has exactly 6 unique task IDs；
6. every task:
   - 16:9；
   - target canvas 1920×1080；
   - native pixel target NONE；
   - attempt limit 1；
7. parser `TestFixtures` PASS；
8. local-copy synthetic missing allowed-root path returns SOURCE_MISSING；
9. logger smoke/stress through canonical append_event:
   - at least 8 concurrent append writers；
   - parseable JSONL；
   - unique contiguous sequences；
10. fresh output/QA dirs empty；
11. global call guard=6；
12. max in-flight guard=2；
13. RUN_RECORD / RUN_EVENTS / fresh-readback paths ready。

Any preflight failure：

`IMAGEGEN_CALLS=0 / RETURN_* / STOP`

### SCHEDULER_CONTRACT

Six tasks execute FIFO in three logical waves:

- Wave 1: task 01 + 02；
- Wave 2: task 03 + 04；
- Wave 3: task 05 + 06。

Rules：

1. never more than 2 imagegen calls in-flight；
2. both tasks in a wave should be submitted together before awaiting the first completion where the runtime permits；
3. an imagegen slot is released after its result is returned and the PNG is parsed/saved/QA_QUEUED；
4. unrelated next-wave tasks do **not** wait for previous-wave QA_FINISHED；
5. no same-task retry exists in this Gate；
6. if one task fails parser/path/hash, no replacement call is allowed；already in-flight siblings may finish；
7. if a failure makes the scheduler state ambiguous, STOP after current in-flight calls settle。

Required proof of QA decoupling：

- Wave 2 IMAGE_SUBMITTED occurs before Wave 1 QA_FINISHED events, unless Wave 1 QA finishes unusually fast before local save/queue completes；
- Wave 3 IMAGE_SUBMITTED occurs before Wave 2 QA_FINISHED events under the same rule。

If natural timing makes this ordering impossible to demonstrate, report `QA_DECOUPLING_UNOBSERVABLE` rather than inventing timestamps；the remaining reliability evidence can still be reviewed.

### LIVE_TASK_CONTRACT

For each of the six tasks：

1. IMAGE_SUBMITTED；
2. IMAGE_RETURNED；
3. output_hint_count=1；
4. canonical official_hint_parser → exactly one SourcePath；
5. SourcePath allowed-root / existing regular PNG；
6. source SHA；
7. canonical local_copy → destination；
8. copy SHA == source SHA；
9. record native width×height；
10. QA_QUEUED；
11. QA_STARTED / QA_FINISHED；
12. TASK_END。

Transport mode must be `DIRECT_SOURCE_PATH`。

No JSON fallback is needed in R2R2 because R2R1V formally proved direct SourcePath mode.

### REQUIRED_EVIDENCE

- `IMAGEGEN_EXECUTOR_SIX_TASK_RELIABILITY_R2R2.md`
- `PREFLIGHT_EVIDENCE_R2R2.md`
- current main + Part 4 blob
- canonical tool blobs
- fixture blob
- parser fixture result
- logger concurrency smoke result
- scheduler guard
- exactly 6 IMAGE_SUBMITTED / IMAGE_RETURNED
- max observed imagegen in-flight <=2
- per-task attempt=1
- retries/replacements/fallback-imagegen=0
- three-wave submission timeline
- per-task output_hint_count / SourcePath
- per-task source/copy SHA
- per-task native dimensions
- per-task QA result
- content QA summary separate from executor status
- generation / parser / copy / QA timing
- RUN_EVENTS.jsonl
- RUN_RECORD.json
- fresh readback
- formal project-rule delta=0

### ACCEPTANCE_CRITERIA

`PASS_CANDIDATE_EXECUTOR_SIX_TASK_RELIABILITY_R2R2` requires：

1. canonical-tool preflight PASS；
2. exactly 6 tasks / 6 imagegen calls；
3. max in-flight <=2 and concurrency target=2；
4. all six image calls return；
5. all six output_hint_count=1；
6. all six parse to unique allowed SourcePath；
7. all six source/copy SHA match；
8. all six native dimensions recorded；
9. all six reach QA；
10. event JSONL fully parseable with unique contiguous sequence；
11. no manual cache recovery；
12. no broad scan / stdin / TTY / base64 image transport；
13. retries=0；
14. replacements=0；
15. fallback-imagegen=0；
16. no canonical tool / fixture / formal-rule mutation；
17. fresh readback consistent。

Content QA may be PASS or FAIL per task without automatically failing **executor reliability**, provided the task reached QA normally and no retry occurred. Reviewer reports content QA separately.

### ROLLBACK_STATUS_OR_PLAN

- canonical repo tools and fixture are read-only during execution；
- fresh run outputs/evidence may be retained；
- no production library mutation；
- no formal rule changes；
- live failure does not trigger retries or historical replay。

### OWNER_ONLY_ACTIONS

`NONE`

Owner has already fixed normal imagegen concurrency at 2. This Gate does not test higher concurrency.

### REVIEWER_TO_EXECUTOR_RELAY

从 current GitHub main 开始，只执行 R2R2。

只读：

1. current `comic-narrative/REVIEWER_HANDOFF.md` R2R2 Gate / Relay；
2. current Part 4 §25；
3. `comic-narrative/tools/imagegen-fast-path/`；
4. `comic-narrative/reviews/imagegen-speed/fixtures/IMAGEGEN_SIX_TASK_RELIABILITY_R2R2_TASKS.json`。

不要读 broad history，不要读取/恢复历史本地 imagegen 目录。

执行：

1. fresh run directory；
2. canonical tool + fixture blob preflight；
3. parser fixtures / local-copy missing-path smoke / logger concurrency smoke；
4. preflight PASS 后执行 fixture 6 tasks；
5. 固定 concurrency=2，最多 6 calls；
6. 按三波 FIFO 执行；
7. 每路 official parser → DIRECT_SOURCE_PATH → canonical local-copy → hash/dimensions → QA；
8. 下一波不要等待上一波 QA_FINISHED；
9. zero retry/replacement/fallback；
10. fresh readback；
11. STOP。

### EXECUTOR_TO_REVIEWER_RELAY

```text
结果：PASS_CANDIDATE_EXECUTOR_SIX_TASK_RELIABILITY_R2R2 / RETURN_*
改动：仅新增 R2R2 fresh run/evidence；canonical tools、fixture、正式规则和历史 evidence 未修改。
验证：一句话说明 tool/fixture preflight、6 calls/3 waves/max-inflight、每路 output_hint→SourcePath/hash/dimensions/QA、event continuity、zero retry/fallback 与 fresh readback。
问题：NONE，或“阻塞短语：一句通俗解释”。
回滚：正式规则无需回滚；fresh canary evidence 保留，不进入 production library。
请 Reviewer 检查：六任务三波调度、concurrency<=2、QA decoupling、六路 path/hash/QA、event chain 与 fresh readback。
Owner 转交：NONE。
```

## CRITICAL_CONSTRAINTS

- `PASS_CANDIDATE != PASS`；正式 PASS 只由 Reviewer fresh readback 后给出。
- **Accepted capability inheritance**：本项目已正式 PASS 的能力默认由后续 Gate 继承；只有相关实现/接口/运行环境发生可能影响该能力的变化，或新证据与旧 PASS 冲突，才要求重验。旧本地 evidence 目录缺失本身不构成重验触发。
- **Imagegen concurrency**：Owner 已决定常规并发固定为 2；不主动测试 3+，除非 Owner 后续明确授权改变。
- 未证明的事实保持 `UNKNOWN`，不得从旧 Handoff 推断。
- Part 2 edit map 不得在 Owner 逐项批准前进入正式正文。
- Style Plate 具体资产必须经 Owner 确认后才进入长期视觉资产。
- 当前 imagegen 可靠性 Gate 不得升级为 Part 3/4 规则改造，除非后续证据证明是跨任务稳定规则缺口。
- 历史 `HANDOFF.md` 不再作为 Executor 默认启动面。

## DEFAULT_EXECUTION_CHANNEL

- Canonical docs / reviews：GitHub `main`；
- 当前 R2R2：Owner/Codex Windows 执行链；使用仓库 canonical fast-path tools，固定并发=2，六任务三波验证队列/落盘/日志可靠性；
- exact local target path：必须由 preserved Gate evidence 证明，未证明则 `UNKNOWN` / RETURN。

## CURRENT_ROLLBACK_STATUS

- GitHub 正式 Part 0–4.5 当前基线保持可追溯；R2R1L 已按 Owner 明确授权仅修改 Part 4 §25 的画幅 / 尺寸合同。
- R2R1J receiver patch 必须保留 pre-repair source/hash，可在 preflight failure 时恢复。
- H019 完整重跑尚未发生，不存在因 takeover 需要回滚的 H019 新生产状态。

## UNRESOLVED

1. **R2R2 six-task executor reliability**：使用已封板 canonical fast-path tools，以固定并发=2 跑六个独立 canary，验证三波队列补位、落盘、QA 与 durable logging。
2. **H019 / production rerun**：R2R2 PASS 后再由 Reviewer 选择 H019 或当前正式图片执行包的生产级验证；不再做基础 imagegen transport 研究。
3. **Final video 1920×1080 adaptation implementation**：标准画布已确定，具体视频阶段适配仍待 Part 5 正式迁移时实现。
4. **C-VB01 historical content QA**：旧 PNG 不接受为 final production asset。
5. **Part 2**：11 项 edit map 等待 Owner 逐项批准。
6. **Style Plate / Part 3→Part 4 Style contract / Part 4 H019 refinements**：仍待独立 Gate。
7. **Part 5 / Part 6**：尚未正式迁移。

## NEXT_STEP

执行并 Review R2R2：

current main → canonical tools/fixture preflight → 6 tasks / 3 waves / concurrency=2 → direct SourcePath → hash/copy/QA → durable events/readback → STOP

R2R2 PASS 后，imagegen executor reliability 线进入 closeout，转回 H019 / 正式图片生产验证。

## OWNER_ACTION_REQUIRED

- **R2R2 执行转交：**将当前 REVIEWER_HANDOFF.md 的 R2R2 Relay 交给 Windows / Codex Executor。
- 并发固定为 2；本轮最多 6 次 imagegen；禁止 retry / replacement / fallback。
- 不需要整理、恢复或核验任何历史 imagegen 本地目录。
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
- R2R1T RETURN / R2R1U file-handoff live Gate: `comic-narrative/reviews/imagegen-speed/IMAGEGEN_TWO_CONCURRENT_LOGGER_REPAIR_AND_LIVE_CANARY_R2R1T_REVIEW.md`
- R2R1U upstream output_hint alignment: `comic-narrative/reviews/imagegen-speed/IMAGEGEN_R2R1U_UPSTREAM_OUTPUT_HINT_ALIGNMENT_REVIEW.md`
- R2R1U RETURN / R2R1V official hint parser Gate: `comic-narrative/reviews/imagegen-speed/IMAGEGEN_DIRECT_OUTPUT_HINT_TWO_CONCURRENT_LIVE_CANARY_R2R1U_REVIEW.md`
- R2R1V formal PASS / R2R2 Gate: `comic-narrative/reviews/imagegen-speed/IMAGEGEN_OFFICIAL_HINT_PARSER_TWO_CONCURRENT_LIVE_CANARY_R2R1V_REVIEW.md`
- Canonical fast-path tools: `comic-narrative/tools/imagegen-fast-path/`
- R2R2 fixed fixture: `comic-narrative/reviews/imagegen-speed/fixtures/IMAGEGEN_SIX_TASK_RELIABILITY_R2R2_TASKS.json`
- Part 2 pending edit map: `comic-narrative/reviews/part2/PART2_FORMAL_EDIT_MAP.md`
- Current formal Part 3: `comic-narrative/part3/STORYBOARD_VISUAL_DIRECTOR.md`
- Current formal Part 4: `comic-narrative/part4/IMAGE_ASSET_EXECUTION.md`
- Current formal Part 4.5: `comic-narrative/part4_5/ASSET_REUSE_LIBRARY.md`
- Takeover discovery review: `comic-narrative/reviews/governance/TAKEOVER_DISCOVERY_20261003.md`
