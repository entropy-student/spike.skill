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

`ACTIVE_REVIEW / R2R2R3_SYNTHETIC_SOURCE_CLEANUP_CLOSEOUT`

并行状态：
- 主执行线：R2R2R2 已证明 6/6 nested destination 正例与 flat destination fail-closed；IMAGEGEN_CALLS=0。唯一未满足项是 fresh synthetic source 在 fresh readback 时仍存在。R2R2R3 只做 exact-source cleanup/readback，不再重跑任何测试。
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
  - R2R2：**RETURN_IMPLEMENTATION_DRIFT — REVIEWER ACCEPTED / CLASSIFICATION CORRECTED**：no-image preflight PASS；Wave 1 恰好提交 2 次 imagegen，max in-flight=2；Beat 01 返回在内存观察到后，fresh `consume_output_hint.ps1` 的 child-process 参数交接导致 child logger 缺失 `EventLogPath/EventJson`，故 durable `IMAGE_RETURNED` 前中止；Beat 02 状态保持 UNKNOWN；0 PNG/0 QA；无 retry/replacement/fallback；Wave 2/3 未提交。
  - R2R2R1：**RETURN_IMPLEMENTATION_DRIFT — REVIEWER ACCEPTED / CLASSIFICATION CORRECTED**：consumer 0-image end-to-end smoke PASS；恰好 6 次 imagegen / 三波 / max in-flight=2 / 6 IMAGE_RETURNED；Beat 03–06 全链保存/hash/dimensions/QA PASS，Beat 01–02 因 flat `outputs/<file>.png` 被 canonical local-copy 以 `DESTINATION_OUTSIDE_RUN_OUTPUTS` 拒绝。根因是 caller/tool destination contract gap，不是 imagegen 失败。batch wall clock=668s。repaired consumer 已提升为 canonical tool。
  - R2R2R2：**RETURN_IMPLEMENTATION_DRIFT — REVIEWER ACCEPTED / CLOSEOUT INCOMPLETE**：IMAGEGEN_CALLS=0；6/6 `outputs/<task_id>/<task_id>.png` 正例均 save/hash/96×54/QA_QUEUED；flat negative 返回 `DESTINATION_OUTSIDE_RUN_OUTPUTS` 且未落文件；33 条事件连续。唯一缺口：fresh readback 时 exact synthetic source 仍存在，未提供后续 cleanup 证据。
- **H019 完整第二轮重跑**：`DEFERRED`。
- **6-task reliability retest**：R2R2R1 已授权；仅修 consumer binding 后重跑固定六任务三波。
- **Part 5 / Part 6**：未正式迁移。

## CURRENT_GATE

### GATE_ID

IMAGEGEN_SYNTHETIC_SOURCE_CLEANUP_CLOSEOUT_R2R2R3

### OBJECTIVE

只完成 R2R2R2 尚未证明的 exact synthetic source cleanup。

不得重跑任何 positive/negative destination test，不得调用 imagegen，不得修改 canonical tools。

Exact owned source：

`C:\Users\34707\.codex\generated_images\R2R2R2-SYNTH-7b286bc9518546e099ee53634f683a2c\synthetic.png`

Expected SHA-256：

`680826c5ea1a898f0c7b80043923dbb94e6d06d828eb556bcf25bf51e1454751`

### MAX_ENDPOINT_THIS_ROUND

1. fresh-read current main + current Gate；
2. prove real Windows host/user/effective path context；
3. inspect only the exact synthetic source path；
4. if absent: record cleanup already satisfied；
5. if present: validate normalized allowed-root containment / regular file / not reparse point / exact SHA；
6. only after all checks PASS, delete only that exact file；
7. fresh-read exact path = absent；
8. IMAGEGEN_CALLS=0；
9. STOP at Reviewer。

### MANDATORY_REVIEW_STOP

`STOP_AT_REVIEWER=YES`

### TARGET_AND_SCOPE

Allowed read/write scope is only:

- current REVIEWER_HANDOFF R2R2R3 Gate / Relay；
- R2R2R2 Reviewer decision；
- exact synthetic source path above；
- fresh R2R2R3 evidence directory。

Do not read/delete the parent generated_images directory broadly。

Do not touch R2R2R2 outputs, QA files, run evidence, canonical tools, fixture, production assets, or historical evidence directories。

### APPLICABLE_CRITICAL_CONSTRAINTS

- PASS_CANDIDATE != PASS；
- IMAGEGEN_CALLS=0；
- exact-path ownership only；
- prove real Windows host/user before local mutation；
- absent exact file = cleanup satisfied；
- if present, hash/type/path checks are mandatory before delete；
- mismatch/unknown/non-regular/reparse = fail closed, no delete；
- parent directory cleanup is not required and is not authorized；
- no canonical tool/fixture/formal-rule mutation。

### PREFLIGHT

1. current main fresh-read；
2. Windows hostname + username + PowerShell runtime recorded；
3. normalize exact source path；
4. verify normalized path is under `<USERPROFILE>\.codex\generated_images\`；
5. IMAGEGEN_CALLS=0。

If exact source is absent, skip deletion and continue to fresh readback。

If exact source exists, require:

- PathType Leaf；
- FileInfo regular file；
- ReparsePoint bit not set；
- SHA-256 exact expected value。

Any mismatch => RETURN and do not delete。

### REQUIRED_EVIDENCE

- `IMAGEGEN_SYNTHETIC_SOURCE_CLEANUP_CLOSEOUT_R2R2R3.md`
- current main
- hostname / username / PowerShell version
- exact normalized source path
- pre-delete existence
- if present: type/reparse/hash checks
- delete native/PowerShell exit result
- post-delete exact-path existence=false
- IMAGEGEN_CALLS=0
- repository/canonical delta=0

### ACCEPTANCE_CRITERIA

`PASS_CANDIDATE_SYNTHETIC_SOURCE_CLEANUP_R2R2R3` requires:

1. IMAGEGEN_CALLS=0；
2. real Windows host/user context recorded；
3. exact path normalized under allowed generated_images root；
4. either source was already absent, or present source passed regular/not-reparse/exact-hash checks before delete；
5. final exact-path readback = absent；
6. no parent/broad deletion；
7. no canonical/repository mutation；
8. fresh evidence internally consistent。

Allowed results：

- PASS_CANDIDATE_SYNTHETIC_SOURCE_CLEANUP_R2R2R3
- RETURN_PREFLIGHT_DRIFT
- RETURN_IMPLEMENTATION_DRIFT
- RETURN_TEST_FAILURE

### ROLLBACK_STATUS_OR_PLAN

This is cleanup of an explicitly synthetic test source. No rollback is required after verified deletion. R2R2R2 output/evidence remains preserved。

### OWNER_ONLY_ACTIONS

NONE

### REVIEWER_TO_EXECUTOR_RELAY

从 current GitHub main 开始，只执行 R2R2R3。不要重跑 R2R2R2。

本轮 `IMAGEGEN_CALLS=0`。

只处理这个 exact path：

`C:\Users\34707\.codex\generated_images\R2R2R2-SYNTH-7b286bc9518546e099ee53634f683a2c\synthetic.png`

先记录真实 Windows hostname / username / PowerShell version，并验证路径位于当前用户 `.codex\generated_images` 下。

若文件已不存在：记录 cleanup satisfied，fresh readback absent，STOP。

若存在：必须先确认 regular file、非 reparse point、SHA-256=`680826c5ea1a898f0c7b80043923dbb94e6d06d828eb556bcf25bf51e1454751`；全部 PASS 后只删除该文件，不删 parent；再 fresh readback absent。

任何 mismatch 立即 RETURN，不删除。

完成后 STOP_AT_REVIEWER=YES。

### EXECUTOR_TO_REVIEWER_RELAY

```text
结果：PASS_CANDIDATE_SYNTHETIC_SOURCE_CLEANUP_R2R2R3 / RETURN_*
改动：仅处理 R2R2R2 exact synthetic source；未修改仓库、canonical tools、fixture 或 R2R2R2 evidence。
验证：一句话说明 real host/user、pre-delete state、hash/type checks（如适用）、post-delete absent、IMAGEGEN_CALLS=0 与 fresh readback。
问题：NONE，或“短语：一句通俗解释”。
回滚：synthetic source cleanup 无需回滚；R2R2R2 evidence 保留。
请 Reviewer 检查：exact-path ownership、pre-delete checks、final absent、zero imagegen、zero repo delta。
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
- 当前 R2R2R3：Owner/Codex Windows 执行链；IMAGEGEN_CALLS=0，只清理并回读 R2R2R2 exact synthetic source；
- exact local target path：必须由 preserved Gate evidence 证明，未证明则 `UNKNOWN` / RETURN。

## CURRENT_ROLLBACK_STATUS

- GitHub 正式 Part 0–4.5 当前基线保持可追溯；R2R1L 已按 Owner 明确授权仅修改 Part 4 §25 的画幅 / 尺寸合同。
- R2R1J receiver patch 必须保留 pre-repair source/hash，可在 preflight failure 时恢复。
- H019 完整重跑尚未发生，不存在因 takeover 需要回滚的 H019 新生产状态。

## UNRESOLVED

1. **R2R2R3 synthetic-source cleanup closeout**：只处理 R2R2R2 exact synthetic source，最终 readback 必须 absent。
2. **H019 / production rerun**：R2R2R3 PASS 后关闭 imagegen executor reliability，直接转生产级验证。
3. **Final video 1920×1080 adaptation implementation**：标准画布已确定，具体视频阶段适配仍待 Part 5 正式迁移时实现。
4. **C-VB01 historical content QA**：旧 PNG 不接受为 final production asset。
5. **Part 2**：11 项 edit map 等待 Owner 逐项批准。
6. **Style Plate / Part 3→Part 4 Style contract / Part 4 H019 refinements**：仍待独立 Gate。
7. **Part 5 / Part 6**：尚未正式迁移。

## NEXT_STEP

执行并 Review R2R2R3：

current main → exact synthetic-source ownership/hash check → delete only exact file if present → final absent readback → STOP

R2R2R3 PASS 后，关闭 imagegen executor reliability，下一步直接回 H019 / 正式图片生产验证。
## OWNER_ACTION_REQUIRED

- **R2R2R3 执行转交：**将当前 REVIEWER_HANDOFF.md 的 R2R2R3 Relay 交给 Windows / Codex Executor。
- 本轮 `IMAGEGEN_CALLS=0`，只做 exact synthetic source cleanup/readback。
- 不重跑任何 R2R2R2 positive/negative 测试。
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
- R2R2 RETURN / R2R2R1 consumer-binding repair Gate: `comic-narrative/reviews/imagegen-speed/IMAGEGEN_EXECUTOR_SIX_TASK_RELIABILITY_R2R2_REVIEW.md`
- R2R2R1 RETURN / R2R2R2 destination closeout Gate: `comic-narrative/reviews/imagegen-speed/IMAGEGEN_RESULT_CONSUMER_REPAIR_AND_SIX_TASK_RELIABILITY_R2R2R1_REVIEW.md`
- R2R2R2 destination proof / R2R2R3 cleanup Gate: `comic-narrative/reviews/imagegen-speed/IMAGEGEN_DESTINATION_CONTRACT_NO_IMAGE_CLOSEOUT_R2R2R2_REVIEW.md`
- Canonical result consumer: `comic-narrative/tools/imagegen-fast-path/consume_output_hint.ps1`
- Canonical fast-path tools: `comic-narrative/tools/imagegen-fast-path/`
- R2R2 fixed fixture: `comic-narrative/reviews/imagegen-speed/fixtures/IMAGEGEN_SIX_TASK_RELIABILITY_R2R2_TASKS.json`
- Part 2 pending edit map: `comic-narrative/reviews/part2/PART2_FORMAL_EDIT_MAP.md`
- Current formal Part 3: `comic-narrative/part3/STORYBOARD_VISUAL_DIRECTOR.md`
- Current formal Part 4: `comic-narrative/part4/IMAGE_ASSET_EXECUTION.md`
- Current formal Part 4.5: `comic-narrative/part4_5/ASSET_REUSE_LIBRARY.md`
- Takeover discovery review: `comic-narrative/reviews/governance/TAKEOVER_DISCOVERY_20261003.md`
