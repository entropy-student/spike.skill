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

`ACTIVE_REVIEW / R2R2R1_RESULT_CONSUMER_BINDING_REPAIR_AND_SIX_TASK_RELIABILITY`

并行状态：
- 主执行线：R2R2 在第一波因 fresh 临时 result-consumer 的 PowerShell 参数绑定错误中止；canonical parser/copy/logger 未被推翻。R2R2R1 只修 consumer 子进程参数交接，0-image 端到端 smoke 通过后同轮重跑六任务三波。
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
- **H019 完整第二轮重跑**：`DEFERRED`。
- **6-task reliability retest**：R2R2R1 已授权；仅修 consumer binding 后重跑固定六任务三波。
- **Part 5 / Part 6**：未正式迁移。

## CURRENT_GATE

### GATE_ID

IMAGEGEN_RESULT_CONSUMER_BINDING_REPAIR_AND_SIX_TASK_RELIABILITY_R2R2R1

### OBJECTIVE

修复 R2R2 唯一确认的新故障：fresh result-consumer 的 PowerShell child-process 参数交接。

不修改、不重写已正式接受的：

- official hint parser；
- local-copy helper；
- append-event logger；
- fixed six-task fixture；
- imagegen callable；
- concurrency=2。

修复后先用 **0 imagegen** 的 synthetic consumer smoke 走通：

`result metadata → repaired consumer → child logger → child parser → child local-copy → hash/dimensions → QA metadata`

smoke PASS 后同一轮重新执行固定 6 tasks / 3 waves / concurrency=2。

### MAX_ENDPOINT_THIS_ROUND

1. fresh-read current main + current Gate；
2. fresh-read R2R2 Reviewer decision；
3. verify canonical tool/fixture blobs unchanged；
4. fresh R2R2R1 run directory；
5. create one repaired fresh `consume_output_hint.ps1` only；
6. 0-image consumer smoke；
7. smoke PASS 后同一轮执行 exactly 6 fixed tasks；
8. three FIFO waves at concurrency=2；
9. each live result → repaired consumer → canonical parser → SourcePath → canonical local-copy → hash/dimensions → QA；
10. fresh readback；
11. STOP at Reviewer。

Maximum imagegen calls = 6。

### MANDATORY_REVIEW_STOP

`STOP_AT_REVIEWER=YES`

Before live, stop only if：

- current main / canonical blobs / fixture drift；
- repaired consumer static contract fails；
- 0-image consumer smoke fails；
- fresh path collision；
- call guard invalid。

If the consumer smoke PASS, do not stop for another Reviewer round-trip；continue directly to all six live tasks。

### TARGET_AND_SCOPE

Read only：

1. current REVIEWER_HANDOFF R2R2R1 Gate / Relay；
2. R2R2 Reviewer decision；
3. current Part 4 §25；
4. canonical `comic-narrative/tools/imagegen-fast-path/`；
5. fixed `IMAGEGEN_SIX_TASK_RELIABILITY_R2R2_TASKS.json`；
6. fresh R2R2R1 files。

Inherited accepted facts：

- R2R1V official-hint parser / direct SourcePath / copy-hash / QA PASS；
- R2R2 parser 6/6, direct missing-path smoke, 8-writer logger stress PASS；
- R2R2 exactly two submissions with max in-flight=2；
- R2R2 stop-on-ambiguous-state behavior was correct。

Do not read or restore historical local imagegen evidence directories。

### APPLICABLE_CRITICAL_CONSTRAINTS

- PASS_CANDIDATE != PASS；
- accepted capability inheritance applies；
- concurrency fixed at 2；
- do not test 3+；
- canonical tools immutable；
- fixed six-task fixture immutable；
- only fresh consumer may be repaired；
- max imagegen calls=6；
- per-task max attempt=1；
- retry/replacement/fallback-imagegen=0；
- no broad generated_images scan；
- no stdin / write_stdin；
- no TTY/base64 image payload transport；
- no recovery/replay of R2R2 image results；
- native pixel mismatch alone != failure/retry；
- content QA does not trigger retry in this reliability Gate；
- no production-library mutation。

### RESULT_CONSUMER_REPAIR_CONTRACT

The repaired fresh consumer must remove the R2R2 ambiguous parameter shape。

Required subprocess wrapper shape：

- parameter names use `ScriptPath` and `ArgumentList` or equivalent explicit names；
- **must not declare a formal parameter named `Args`**；
- wrapper invocation uses named binding, not the R2R2 positional-array call shape；
- every child argument is added individually to `ProcessStartInfo.ArgumentList`；
- stdout/stderr/exit code are captured；
- child non-zero exit is handled fail-closed；
- no shell-string concatenation / nested quoting transport。

Equivalent example：

```powershell
function Invoke-ChildScript {
    param(
        [Parameter(Mandatory=$true)][string]$ScriptPath,
        [Parameter(Mandatory=$true)][string[]]$ArgumentList
    )
    ...
}

$childArgs = @('-EventLogPath', $eventLog, '-EventJson', $json)
$r = Invoke-ChildScript -ScriptPath $logger -ArgumentList $childArgs
```

The exact implementation may differ if it preserves the same explicit argument contract。

### PREFLIGHT

All live-call count remains 0 until all items PASS：

1. current main fresh-read；
2. canonical tool blobs match current Gate；
3. fixture blob matches current Gate；
4. repaired consumer is fresh and isolated from canonical tool files；
5. static consumer check：
   - no formal parameter named Args；
   - no positional array invocation of child wrapper；
   - no stdin / Console.In / ReadLine；
   - no broad scan；
6. create fresh synthetic PNG source under a fresh unique directory inside current-user `.codex/generated_images` without calling imagegen；
7. form exact official output_hint pointing at that source；
8. invoke the **same repaired consumer entry path used by live results** with synthetic task id ending in numeric suffix, HintCount=1, synthetic T2/T4；
9. smoke must prove through durable readback：
   - child logger received EventLogPath + EventJson；
   - IMAGE_RETURNED appended；
   - canonical parser returned the exact synthetic SourcePath；
   - canonical local-copy succeeded；
   - source SHA == copy SHA；
   - native dimensions recorded；
   - QA_QUEUED reached；
   - DEPENDENCY_RELEASED reached；
10. remove only the fresh synthetic source under generated_images after successful readback；do not delete unknown/nonempty paths；
11. reset live guard counters from a separately initialized live guard, not by mutating ambiguous R2R2 state；
12. live guard = max_calls 6 / max_in_flight 2；
13. live output/task paths fresh。

Any failure：

`IMAGEGEN_CALLS=0 / RETURN_* / STOP`

### SCHEDULER_CONTRACT

Fixed task order remains：

- Wave 1: Beat 01 + 02；
- Wave 2: Beat 03 + 04；
- Wave 3: Beat 05 + 06。

Rules：

1. max imagegen in-flight=2；
2. submit both tasks of a wave together where runtime permits；
3. after a result is durably parsed/saved and QA_QUEUED, release that imagegen slot；
4. next unrelated task may submit without waiting for prior QA_FINISHED；
5. no retry/replacement exists；
6. any ambiguous scheduler state after live failure stops new submissions after current in-flight calls settle。

### LIVE_TASK_CONTRACT

For all six tasks：

1. TASK_PREPARED；
2. IMAGE_SUBMITTED；
3. IMAGE_RETURNED；
4. output_hint_count=1；
5. repaired consumer invokes canonical parser；
6. exact SourcePath under allowed root；
7. canonical local-copy；
8. source SHA == copy SHA；
9. native width×height；
10. QA_QUEUED；
11. DEPENDENCY_RELEASED；
12. QA_STARTED；
13. QA_FINISHED；
14. TASK_END。

Transport = `DIRECT_SOURCE_PATH`。

### REQUIRED_EVIDENCE

- `IMAGEGEN_RESULT_CONSUMER_BINDING_REPAIR_AND_SIX_TASK_RELIABILITY_R2R2R1.md`
- `PREFLIGHT_EVIDENCE_R2R2R1.md`
- repaired consumer source/hash
- consumer static check
- synthetic source path/hash
- synthetic consumer smoke event/readback
- cleanup confirmation for only fresh synthetic source
- current main / canonical tool blobs / fixture blob
- exactly 6 IMAGE_SUBMITTED / IMAGE_RETURNED
- max observed in-flight <=2
- three-wave submission timeline
- per-task attempt=1
- retries/replacements/fallback-imagegen=0
- per-task output_hint_count / SourcePath
- per-task source/copy SHA
- per-task dimensions
- per-task QA
- RUN_EVENTS.jsonl
- RUN_RECORD.json
- fresh readback
- formal project-rule delta=0

### ACCEPTANCE_CRITERIA

`PASS_CANDIDATE_RESULT_CONSUMER_REPAIR_AND_SIX_TASK_RELIABILITY_R2R2R1` requires：

1. 0-image consumer smoke PASS end-to-end；
2. repaired consumer uses explicit child argument binding；
3. exactly 6 live imagegen calls；
4. max in-flight <=2；
5. all six calls return；
6. all six durable IMAGE_RETURNED events exist；
7. all six output_hint_count=1；
8. all six canonical parses return valid SourcePath；
9. all six source/copy SHA match；
10. all six dimensions recorded；
11. all six reach QA；
12. all six TASK_END recorded；
13. event JSONL parseable, unique and contiguous；
14. retries/replacements/fallback-imagegen=0；
15. no manual cache recovery / broad scan / stdin / TTY/base64 payload；
16. canonical tools/fixture unchanged；
17. fresh readback consistent。

Content QA may PASS or FAIL without failing executor reliability if the pipeline reached QA normally and no retry occurred。

Allowed results：

- PASS_CANDIDATE_RESULT_CONSUMER_REPAIR_AND_SIX_TASK_RELIABILITY_R2R2R1
- RETURN_PREFLIGHT_DRIFT
- RETURN_IMPLEMENTATION_DRIFT
- RETURN_TEST_FAILURE

### ROLLBACK_STATUS_OR_PLAN

- canonical tools/fixture remain unchanged；
- only fresh R2R2R1 consumer/evidence/outputs are mutable；
- synthetic source uses a fresh unique generated_images child path and is cleaned only after exact-path readback；
- live failure gets no retry；
- R2R2 evidence remains immutable；
- no production-library mutation。

### OWNER_ONLY_ACTIONS

NONE

### REVIEWER_TO_EXECUTOR_RELAY

从 current GitHub main 开始，只执行 R2R2R1。

读取：

1. current REVIEWER_HANDOFF R2R2R1 Gate / Relay；
2. R2R2 Reviewer decision；
3. current Part 4 §25；
4. canonical fast-path tools；
5. fixed six-task R2R2 fixture。

不要读 broad history，不要恢复或扫描旧 imagegen 本地目录。

执行：

1. fresh R2R2R1 run；
2. 只修 fresh result consumer 的 child-process 参数交接；
3. 禁止 formal parameter Args；child wrapper 用明确命名参数；
4. 用 fresh synthetic PNG + official hint 做 0-image consumer end-to-end smoke；
5. smoke 必须实际走 child logger → parser → local-copy → hash/dimensions → QA_QUEUED / DEPENDENCY_RELEASED；
6. smoke PASS 后，同一轮从新 live guard 开始执行固定六任务；
7. 固定 concurrency=2，三波 FIFO，最多 6 calls；
8. zero retry/replacement/fallback；
9. fresh readback；
10. STOP。

### EXECUTOR_TO_REVIEWER_RELAY

```text
结果：PASS_CANDIDATE_RESULT_CONSUMER_REPAIR_AND_SIX_TASK_RELIABILITY_R2R2R1 / RETURN_*
改动：只修 fresh R2R2R1 result consumer 并新增 fresh run/evidence；canonical tools、fixture、正式规则、R2R2 evidence 未修改。
验证：一句话说明 synthetic consumer smoke、6 calls/3 waves/max-inflight、六路 IMAGE_RETURNED→SourcePath/hash/dimensions/QA/TASK_END、event continuity、zero retry/fallback 与 fresh readback。
问题：NONE，或“阻塞短语：一句通俗解释”。
回滚：正式规则无需回滚；fresh evidence/canary outputs 保留，不进入 production library。
请 Reviewer 检查：consumer argument binding、synthetic smoke、六任务调度、六路 path/hash/QA、event chain/readback。
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
- 当前 R2R2R1：Owner/Codex Windows 执行链；canonical fast-path tools/fixture 保持只读，只修 fresh result-consumer 参数绑定，0-image smoke 后同轮六任务三波；
- exact local target path：必须由 preserved Gate evidence 证明，未证明则 `UNKNOWN` / RETURN。

## CURRENT_ROLLBACK_STATUS

- GitHub 正式 Part 0–4.5 当前基线保持可追溯；R2R1L 已按 Owner 明确授权仅修改 Part 4 §25 的画幅 / 尺寸合同。
- R2R1J receiver patch 必须保留 pre-repair source/hash，可在 preflight failure 时恢复。
- H019 完整重跑尚未发生，不存在因 takeover 需要回滚的 H019 新生产状态。

## UNRESOLVED

1. **R2R2R1 result-consumer repair + six-task reliability**：修复 fresh consumer 参数绑定，0-image end-to-end smoke 后以固定并发=2 重跑六个独立 canary。
2. **H019 / production rerun**：R2R2R1 PASS 后直接转生产级验证；不再做基础 imagegen transport 研究。
3. **Final video 1920×1080 adaptation implementation**：标准画布已确定，具体视频阶段适配仍待 Part 5 正式迁移时实现。
4. **C-VB01 historical content QA**：旧 PNG 不接受为 final production asset。
5. **Part 2**：11 项 edit map 等待 Owner 逐项批准。
6. **Style Plate / Part 3→Part 4 Style contract / Part 4 H019 refinements**：仍待独立 Gate。
7. **Part 5 / Part 6**：尚未正式迁移。

## NEXT_STEP

执行并 Review R2R2R1：

current main → repair fresh consumer binding → 0-image synthetic end-to-end consumer smoke → PASS → same-round 6 tasks / 3 waves / concurrency=2 → readback → STOP

R2R2R1 PASS 后，imagegen executor reliability 线 closeout，转回 H019 / 正式图片生产验证。
## OWNER_ACTION_REQUIRED

- **R2R2R1 执行转交：**将当前 REVIEWER_HANDOFF.md 的 R2R2R1 Relay 交给 Windows / Codex Executor。
- 本轮先 0-image 修 consumer；smoke PASS 后同一轮最多 6 次 imagegen，固定并发 2。
- 禁止 retry / replacement / fallback / 历史目录恢复或扫描。
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
- Canonical fast-path tools: `comic-narrative/tools/imagegen-fast-path/`
- R2R2 fixed fixture: `comic-narrative/reviews/imagegen-speed/fixtures/IMAGEGEN_SIX_TASK_RELIABILITY_R2R2_TASKS.json`
- Part 2 pending edit map: `comic-narrative/reviews/part2/PART2_FORMAL_EDIT_MAP.md`
- Current formal Part 3: `comic-narrative/part3/STORYBOARD_VISUAL_DIRECTOR.md`
- Current formal Part 4: `comic-narrative/part4/IMAGE_ASSET_EXECUTION.md`
- Current formal Part 4.5: `comic-narrative/part4_5/ASSET_REUSE_LIBRARY.md`
- Takeover discovery review: `comic-narrative/reviews/governance/TAKEOVER_DISCOVERY_20261003.md`
