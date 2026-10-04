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

`ACTIVE_REVIEW / R2R2R2_DESTINATION_CONTRACT_NO_IMAGE_CLOSEOUT`

并行状态：
- 主执行线：R2R2R1 已证明 repaired consumer、6/6 imagegen 返回、三波调度与并发 2；4 张完成全链，2 张仅因 flat Destination 不符合 canonical helper 的嵌套输出合同而失败。R2R2R2 不再调用 imagegen，只做 destination contract closeout。
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
- **H019 完整第二轮重跑**：`DEFERRED`。
- **6-task reliability retest**：R2R2R1 已授权；仅修 consumer binding 后重跑固定六任务三波。
- **Part 5 / Part 6**：未正式迁移。

## CURRENT_GATE

### GATE_ID

IMAGEGEN_DESTINATION_CONTRACT_NO_IMAGE_CLOSEOUT_R2R2R2

### OBJECTIVE

不用任何新的 imagegen 调用，封板当前 fast-path 的唯一剩余集成合同：scheduler/caller 生成的 Destination 必须与 canonical `local_copy.ps1` 的嵌套输出目录规则一致。

R2R2R2 通过后，Reviewer 使用 R2R1V + R2R2R1 + R2R2R2 的组合证据关闭 imagegen executor reliability 线，不再重复 synthetic live-image batch。

### MAX_ENDPOINT_THIS_ROUND

1. fresh-read current main + current Gate；
2. verify canonical fast-path tool blobs；
3. fresh R2R2R2 run directory；
4. create one fresh synthetic PNG source under a unique current-user `.codex/generated_images` child directory；
5. build exact official output_hint for that source；
6. use fixed six R2R2 task IDs to construct six production-style destinations：
   `<run_root>\outputs\<task_id>\<task_id>.png`；
7. pre-create exactly those six task bucket directories；
8. run canonical `consume_output_hint.ps1` six times with `-Smoke` and IMAGEGEN_CALLS=0；
9. each call must traverse canonical logger → parser → local-copy → SHA/dimensions → QA_QUEUED → DEPENDENCY_RELEASED；
10. run one negative flat-destination check using `<run_root>\outputs\flat-negative.png` and require fail-closed `DESTINATION_OUTSIDE_RUN_OUTPUTS`；
11. fresh readback；
12. remove only the fresh synthetic source after exact-path verification；
13. STOP at Reviewer。

Imagegen call budget = **0**。

### MANDATORY_REVIEW_STOP

`STOP_AT_REVIEWER=YES`

Any imagegen call is a Gate violation。

### TARGET_AND_SCOPE

Canonical files：

- `comic-narrative/tools/imagegen-fast-path/consume_output_hint.ps1` blob `5b38a46694cfe50b78613c4c070645cecf87fe7d`；
- `official_hint_parser.ps1` blob `094ffe536063921cd923de09d05c1edff3da408b`；
- `local_copy.ps1` blob `7774168abde8019d6f2c50936c89ef1dc67c28f2`；
- `append_event.ps1` blob `e6b31a4597c997fff6993d4dcc0abe8b855e09ac`；
- fast-path README blob `33cb757a85d4889c271a4fd91f9d8d32f1565e08`；
- fixed R2R2 fixture blob `494ee334ade104f635e00c80999ba1fa025926fa`。

Allowed reads：

1. current REVIEWER_HANDOFF R2R2R2 Gate / Relay；
2. R2R2R1 Reviewer decision；
3. canonical fast-path tools/README；
4. fixed R2R2 fixture task IDs；
5. fresh R2R2R2 files。

Do not read or restore historical local imagegen evidence directories。

### APPLICABLE_CRITICAL_CONSTRAINTS

- PASS_CANDIDATE != PASS；
- accepted capability inheritance applies；
- imagegen calls = 0；
- canonical scripts are read-only during execution；
- production destination convention = `<run_root>\outputs\<task_id>\<task_id>.png`；
- task bucket directory must exist before local-copy；
- QA path remains contained under `<run_root>\qa\`；
- no flat destination accepted；
- no broad scan / stdin / TTY/base64 image transport；
- no production-library mutation；
- only fresh synthetic source/output/evidence may be created/deleted。

### PREFLIGHT

Before smoke：

1. current main fresh-read；
2. all canonical tool/README/fixture blobs match Gate；
3. six fixture task IDs are exactly unique；
4. fresh run root is empty；
5. create `outputs` and `qa` roots；
6. construct six destination paths from task IDs using exactly one task bucket level；
7. all six bucket directories are fresh and created；
8. destination normalization confirms each path is inside `<run_root>\outputs\<task_id>\`；
9. negative flat destination is inside `<run_root>\outputs\` but has no bucket；
10. IMAGEGEN_CALLS=0。

### NO_IMAGE_CLOSEOUT

Positive six-task smoke：

1. one fresh synthetic PNG source under allowed generated_images root；
2. one official output_hint referencing that source；
3. invoke canonical consumer once per fixed task ID；
4. each invocation uses its own nested destination and QA path；
5. all six must produce:
   - IMAGE_RETURNED；
   - HINT_PARSED；
   - IMAGE_SAVED；
   - QA_QUEUED；
   - DEPENDENCY_RELEASED；
6. source SHA == each copied SHA；
7. dimensions recorded for all six；
8. outputs/QA mappings are task-unique；
9. event sequence parseable, unique, contiguous。

Negative flat destination：

- call canonical local-copy or canonical consumer with a fresh flat destination `<run_root>\outputs\flat-negative.png`；
- expected error = `DESTINATION_OUTSIDE_RUN_OUTPUTS`；
- no flat PNG may be created。

### REQUIRED_EVIDENCE

- `IMAGEGEN_DESTINATION_CONTRACT_NO_IMAGE_CLOSEOUT_R2R2R2.md`
- current main
- canonical tool/README/fixture blobs
- synthetic source exact path + SHA
- six constructed destination paths
- six positive consumer outputs
- six copied PNG SHA/dimensions
- six QA metadata files
- negative flat-destination result
- RUN_EVENTS.jsonl
- fresh readback
- synthetic source cleanup confirmation
- IMAGEGEN_CALLS=0
- formal project-rule delta=0

### ACCEPTANCE_CRITERIA

`PASS_CANDIDATE_DESTINATION_CONTRACT_NO_IMAGE_CLOSEOUT_R2R2R2` requires：

1. IMAGEGEN_CALLS=0；
2. canonical tool/README/fixture blobs match；
3. six fixed task IDs map to six nested task-bucket destinations；
4. all six canonical consumer invocations reach IMAGE_SAVED + QA_QUEUED + DEPENDENCY_RELEASED；
5. all six copied SHA values equal synthetic source SHA；
6. all six dimensions recorded；
7. six outputs/QA mappings are unique；
8. flat negative returns exact `DESTINATION_OUTSIDE_RUN_OUTPUTS`；
9. flat output does not exist；
10. event chain parseable, unique, contiguous；
11. only exact fresh synthetic source is cleaned；
12. canonical tools unchanged；
13. fresh readback consistent。

Allowed results：

- PASS_CANDIDATE_DESTINATION_CONTRACT_NO_IMAGE_CLOSEOUT_R2R2R2
- RETURN_PREFLIGHT_DRIFT
- RETURN_IMPLEMENTATION_DRIFT
- RETURN_TEST_FAILURE

### ROLLBACK_STATUS_OR_PLAN

- no imagegen calls；
- canonical files remain unchanged；
- synthetic source/output/evidence isolated to fresh paths；
- cleanup only owns the exact fresh synthetic source；
- no production-library mutation。

### OWNER_ONLY_ACTIONS

NONE

### REVIEWER_TO_EXECUTOR_RELAY

从 current GitHub main 开始，只执行 R2R2R2。

读取 current R2R2R2 Gate / Relay、R2R2R1 Reviewer decision、canonical fast-path tools/README、fixed R2R2 fixture。不要读 broad history，不要恢复旧本地 evidence。

本轮 **禁止调用 imagegen**。

执行：

1. fresh run root；
2. fresh synthetic PNG under unique `.codex/generated_images` child；
3. 用六个 fixed task IDs 建 `outputs/<task_id>/<task_id>.png`；
4. 预建六个 task bucket；
5. 用 canonical consumer + official hint 对六个任务逐个做 0-image smoke；
6. 六个都必须 save/hash/dimensions/QA_QUEUED/DEPENDENCY_RELEASED；
7. 再做一个 flat destination negative，必须 `DESTINATION_OUTSIDE_RUN_OUTPUTS` 且不产生文件；
8. fresh readback；
9. 只清理 exact fresh synthetic source；
10. STOP。

### EXECUTOR_TO_REVIEWER_RELAY

```text
结果：PASS_CANDIDATE_DESTINATION_CONTRACT_NO_IMAGE_CLOSEOUT_R2R2R2 / RETURN_*
改动：仅新增 R2R2R2 fresh synthetic/evidence；canonical tools、fixture、正式规则未修改。
验证：一句话说明 IMAGEGEN_CALLS=0、六个 nested destinations 全部 save/hash/dimensions/QA_QUEUED、flat negative fail-closed、event continuity、cleanup 与 fresh readback。
问题：NONE，或“阻塞短语：一句通俗解释”。
回滚：正式规则无需回滚；fresh synthetic outputs/evidence 可保留，synthetic source 已按 exact path 清理。
请 Reviewer 检查：destination construction、六路 canonical consumer positive、flat negative、hash/readback、zero imagegen。
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
- 当前 R2R2R2：Owner/Codex Windows 执行链；IMAGEGEN_CALLS=0，只验证 canonical consumer/local-copy 的 nested destination contract；
- exact local target path：必须由 preserved Gate evidence 证明，未证明则 `UNKNOWN` / RETURN。

## CURRENT_ROLLBACK_STATUS

- GitHub 正式 Part 0–4.5 当前基线保持可追溯；R2R1L 已按 Owner 明确授权仅修改 Part 4 §25 的画幅 / 尺寸合同。
- R2R1J receiver patch 必须保留 pre-repair source/hash，可在 preflight failure 时恢复。
- H019 完整重跑尚未发生，不存在因 takeover 需要回滚的 H019 新生产状态。

## UNRESOLVED

1. **R2R2R2 destination-contract no-image closeout**：不再生图；用六个 fixed task IDs 验证 `outputs/<task_id>/<task_id>.png` 与 canonical consumer/local-copy 的完整本地链路。
2. **H019 / production rerun**：R2R2R2 PASS 后直接转生产级验证；不再做 synthetic live-image reliability batch。
3. **Final video 1920×1080 adaptation implementation**：标准画布已确定，具体视频阶段适配仍待 Part 5 正式迁移时实现。
4. **C-VB01 historical content QA**：旧 PNG 不接受为 final production asset。
5. **Part 2**：11 项 edit map 等待 Owner 逐项批准。
6. **Style Plate / Part 3→Part 4 Style contract / Part 4 H019 refinements**：仍待独立 Gate。
7. **Part 5 / Part 6**：尚未正式迁移。

## NEXT_STEP

执行并 Review R2R2R2：

current main → zero-image six nested destination positive smokes + one flat negative → readback → STOP

R2R2R2 PASS 后，以 R2R1V + R2R2R1 + R2R2R2 组合证据关闭 imagegen executor reliability，直接回正式图片生产验证。
## OWNER_ACTION_REQUIRED

- **R2R2R2 执行转交：**将当前 REVIEWER_HANDOFF.md 的 R2R2R2 Relay 交给 Windows / Codex Executor。
- 本轮 `IMAGEGEN_CALLS=0`，不再生成任何测试图片。
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
- R2R2 RETURN / R2R2R1 consumer-binding repair Gate: `comic-narrative/reviews/imagegen-speed/IMAGEGEN_EXECUTOR_SIX_TASK_RELIABILITY_R2R2_REVIEW.md`
- R2R2R1 RETURN / R2R2R2 destination closeout Gate: `comic-narrative/reviews/imagegen-speed/IMAGEGEN_RESULT_CONSUMER_REPAIR_AND_SIX_TASK_RELIABILITY_R2R2R1_REVIEW.md`
- Canonical result consumer: `comic-narrative/tools/imagegen-fast-path/consume_output_hint.ps1`
- Canonical fast-path tools: `comic-narrative/tools/imagegen-fast-path/`
- R2R2 fixed fixture: `comic-narrative/reviews/imagegen-speed/fixtures/IMAGEGEN_SIX_TASK_RELIABILITY_R2R2_TASKS.json`
- Part 2 pending edit map: `comic-narrative/reviews/part2/PART2_FORMAL_EDIT_MAP.md`
- Current formal Part 3: `comic-narrative/part3/STORYBOARD_VISUAL_DIRECTOR.md`
- Current formal Part 4: `comic-narrative/part4/IMAGE_ASSET_EXECUTION.md`
- Current formal Part 4.5: `comic-narrative/part4_5/ASSET_REUSE_LIBRARY.md`
- Takeover discovery review: `comic-narrative/reviews/governance/TAKEOVER_DISCOVERY_20261003.md`
