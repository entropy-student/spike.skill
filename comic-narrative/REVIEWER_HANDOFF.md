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

`ACTIVE_REVIEW / R2R1P_TWO_CONCURRENT_FAST_PATH_CANARY`

并行状态：
- 主执行线：R2R1O 已正式 PASS；R2R1P 恢复两路并发生图 canary，验证 output_hint 本地快取在并发下仍可靠且不再受 exact-pixel 规则阻塞。
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
  - R2R1O：**PASS**：零生图回归确认 preserved 1672×941 不因 native pixel mismatch 失败或 retry；1024×1536 明显错误画幅仍可独立 QA FAIL；`IMAGEGEN_CALLS=0`、retries=0。
- **H019 完整第二轮重跑**：`DEFERRED`。
- **6 Beat R2 完整复测**：未授权；先完成 R2R1P 两路并发 live fast-path canary，再由 Reviewer 决定是否进入 6 Beat。
- **Part 5 / Part 6**：未正式迁移。

## CURRENT_GATE

### GATE_ID

`IMAGEGEN_OUTPUT_HINT_TWO_CONCURRENT_LIVE_CANARY_R2R1P`

### OBJECTIVE

用**最多 2 次 fresh Codex 内置 imagegen**，验证已在 R2R1J 单路成立的：

`live result hash → bounded output_hint → strict parser → in-root PNG → source/runtime hash equality → local copy → QA`

能否在**两路同时提交**时仍可靠工作，并确认新的尺寸策略不会重新触发 exact-pixel 失败 / retry。

本 Gate 只验证并发执行可靠性与本地快取链，不验证 6 Beat 全流程。

### MAX_ENDPOINT_THIS_ROUND

1. fresh-read current GitHub main、Part 4 §25、R2R1O PASS；
2. no-image preflight 复核 R2R1J final receiver / strict parser / runtime hash helper；
3. 创建两个新的、彼此可区分的 R2R1P canary task fixture；
4. 两个 task 都只要求 16:9 横屏，不写任何 exact native pixel request；
5. **同时提交 2 次 imagegen**，总调用上限 = 2；
6. 两个结果分别走 output_hint 本地快取验证 / copy / QA；
7. 不 retry、不第三次调用、不 TTY bulk fallback；
8. 记录 provider generation timing 与 post-return local-persist timing，二者分开；
9. fresh readback；
10. STOP at Reviewer。

### MANDATORY_REVIEW_STOP

`STOP_AT_REVIEWER=YES`

本 Gate 不得自动进入：
- 第 3 次 imagegen；
- attempt 2 / replacement call；
- 6 Beat；
- H019；
- concurrency 3；
- Part 5 / Part 6；
- 任何新的尺寸策略调查；
- API fallback。

### TARGET_AND_SCOPE

允许读取 / 使用：

1. 当前 `comic-narrative/REVIEWER_HANDOFF.md` 的本 Gate / Relay；
2. `comic-narrative/part4/IMAGE_ASSET_EXECUTION.md` §25；
3. `IMAGEGEN_OUTPUT_HINT_GUARD_REPAIR_LIVE_CANARY_R2R1J_REVIEW.md`；
4. `IMAGEGEN_SIZE_POLICY_NO_IMAGE_REGRESSION_R2R1O_REVIEW.md`；
5. preserved R2R1J final receiver / strict parser / runtime hash helper / run-record exact local files；
6. 新建的 R2R1P task / preflight / run / QA / evidence 目录；
7. 最多 2 次 Codex 内置 imagegen。

R2R1P 两个 canary fixture 必须：

- task id 唯一；
- prompt 明确写 `16:9 landscape` / 16:9 横屏；
- prompt 中不写 `1920×1080`、`1792×1008` 或其他 exact pixel dimensions；
- task contract 使用：
  - `aspect_ratio = 16:9`
  - `target_canvas = 1920×1080`
  - `native_pixel_target = NONE`
  - `retry_on_native_pixel_mismatch = false`
- 两个 prompt 内容需明显不同，以便验证 task/result attribution；
- canary 输出只作为 evidence，不自动进入正式素材库。

明确禁止：

- 修改 Part 2 / Part 3 / Part 4 / Part 4.5 / SKILL 正式规则；
- 修改 historical R2R1J / R2R1O evidence；
- 把 `1920×1080` 当 native provider requirement；
- 因 native pixel mismatch 发起 retry；
- broad scan `.codex/generated_images`；
- TTY 搬运完整 base64；
- 缺失 / 非法 output_hint 时退回 bulk payload；
- parser/path-policy 扩权；
- 第 3 次 imagegen；
- 6 Beat / H019。

### APPLICABLE_CRITICAL_CONSTRAINTS

- `PASS_CANDIDATE != PASS`；
- 未证明事实保持 `UNKNOWN`；
- current GitHub main / fresh evidence 优先；
- R2R1J 单路 output_hint fast-path 为 accepted fact；
- R2R1O 尺寸策略为 accepted fact；
- `output_hint` 每个 live result 仍必须独立 fail-closed 验证，不能视为可信 API contract；
- 两个 task 的 imagegen call 总数上限 = 2；
- 任一 task 失败不得补发 replacement call；
- 若一个 task 已失败，另一个已经 in-flight 的 task 可完成并保留 evidence，但不得启动新 call；
- 不通过 TTY 搬运完整 image bytes；
- native width × height 记录真实值；不等于 1920×1080 本身不失败 / 不 retry；
- 内容 QA 与 integration PASS 分离；内容 QA FAIL 不触发 retry；
- 新 canary 图片未经后续正式内容验收不得进入 production mapping。

### PREFLIGHT

在任何 imagegen 前必须全部证明：

1. current main SHA / Part 4 §25 blob / R2R1O Review blob 已 fresh-read；
2. Part 4 §25 仍明确：
   - 16:9 only；
   - 1920×1080 = target canvas / final target；
   - native pixel target = NONE；
   - native mismatch alone != failure / retry；
3. preserved R2R1J final receiver / strict parser / runtime hash helper exact path + SHA-256 可证明；不得猜路径；
4. preserved R2R1J positive sample 能通过 exact final receiver entry point，source/runtime/copy hash 一致；
5. R2R1J 五个 path-policy negative cases仍 fail closed；
6. 两个全新 R2R1P task fixtures 已建立并 hash；
7. 两个 task 都只有 16:9 画幅要求，不包含 exact native pixel request；
8. global max-call guard = 2，且每 task max attempt = 1；
9. 两个 fresh output path / log path / QA path 为空且互不冲突；
10. `RUN_EVENTS.jsonl` / `RUN_RECORD.json` / fresh-readback 机制已就绪；
11. ordinary logs 不含完整 `image_url` / base64 / full hint；
12. project-scoped non-target delta clean。

任一 preflight failure：

`IMAGEGEN_CALLS=0 / RETURN_* / STOP`

### LIVE_CANARY

仅在 preflight PASS 后：

1. 将两个 fresh task 以 concurrency-at-submit = 2 提交；
2. 总 imagegen 调用严格 = 2；
3. 每 task attempt = 1；
4. 不 retry、不 replacement call。

每个 result 返回后：

1. 在 result/orchestration context 计算 decoded PNG bytes + SHA-256，不输出 base64；
2. 只传 bounded metadata + `output_hint`；
3. strict-parse exactly one generated PNG path；
4. require normalized real path under allowed generated-images root；
5. require existing regular PNG；
6. hash source PNG，要求 source SHA = runtime decoded-image SHA；
7. copy 到该 task 的 fresh destination；
8. require copied SHA equality；
9. 记录真实 native width × height；
10. 到达 QA；
11. native size 与 1920×1080 不同不得作为 retry / integration failure；
12. content QA 结果记录但不触发 retry。

若任一 result 的 hint 缺失 / malformed / ambiguous / outside policy / missing / hash mismatch：

- 该 task fail closed；
- 不 TTY bulk fallback；
- 不 replacement imagegen；
- 保留另一 in-flight task 的真实结果；
- 整轮返回精确 `RETURN_*`。

### REQUIRED_EVIDENCE

- `IMAGEGEN_OUTPUT_HINT_TWO_CONCURRENT_LIVE_CANARY_R2R1P.md`
- `PREFLIGHT_EVIDENCE_R2R1P.md`
- current main / Part 4 §25 / R2R1O pointers + hashes
- R2R1J reused source paths + hashes
- two task fixtures + SHA-256
- global two-call guard
- concurrency submit evidence
- `IMAGEGEN_CALLS=2`
- per-task attempt count = 1
- retries = 0
- fallback calls = 0
- per-task runtime decoded byte count / SHA-256
- bounded hint diagnostics + parser result
- per-task source / copied path + SHA-256
- per-task native width × height
- per-task QA reachability + QA result
- provider generation timing per task
- post-return parse/hash/copy/QA timing per task
- `RUN_EVENTS.jsonl`
- `RUN_RECORD.json`
- project-scoped diff / non-target delta
- fresh-readback summary

### ACCEPTANCE_CRITERIA

`PASS_CANDIDATE_OUTPUT_HINT_TWO_CONCURRENT_LIVE_R2R1P` 需要全部满足：

1. preflight PASS before imagegen；
2. exactly 2 imagegen calls；
3. concurrency-at-submit = 2；
4. two distinct task identities remain correctly attributed；
5. retries = 0 / replacement calls = 0 / fallback = 0；
6. no bulk TTY image transfer；
7. both live hints reach strict parser and are accepted；
8. each task source SHA = runtime decoded-image SHA = copied SHA；
9. both copied images reach QA；
10. native dimensions are recorded honestly and do not trigger exact-pixel failure/retry；
11. content QA PASS is not required for integration PASS, but QA result must be recorded and must not trigger retry；
12. event log is reconstructable with no unexplained sequence loss；
13. generation timing and local-persist timing are separately evidenced；
14. no formal production-rule change；
15. no historical evidence rewrite；
16. fresh readback matches artifacts / hashes / counts。

允许结果：

- `PASS_CANDIDATE_OUTPUT_HINT_TWO_CONCURRENT_LIVE_R2R1P`
- `RETURN_PREFLIGHT_DRIFT`
- `RETURN_IMPLEMENTATION_DRIFT`
- `RETURN_TEST_FAILURE`

### ROLLBACK_STATUS_OR_PLAN

- 本 Gate 不修改正式规则；
- fresh canary outputs / logs 作为 evidence 保留，不自动进入 production library；
- 任一 task 失败不删除另一 task 的已完成证据；
- 不通过重试补证据；
- 若出现非预期正式源码修改，恢复 preflight source/hash 后 RETURN。

### OWNER_ONLY_ACTIONS

`NONE`

本 Gate 仅使用现有 Codex 内置生图通道，最多 2 次 plan-native imagegen；不启用独立 API billing、不涉及 Secret、不公开发布、不修改真实业务数据。

### REVIEWER_TO_EXECUTOR_RELAY

从 current GitHub main 开始，只执行 R2R1P，不重读 Governance、不扫描 broad history。

读取：

1. `comic-narrative/REVIEWER_HANDOFF.md` → CURRENT_GATE / Relay；
2. `comic-narrative/part4/IMAGE_ASSET_EXECUTION.md` §25；
3. `comic-narrative/reviews/imagegen-speed/IMAGEGEN_OUTPUT_HINT_GUARD_REPAIR_LIVE_CANARY_R2R1J_REVIEW.md`；
4. `comic-narrative/reviews/imagegen-speed/IMAGEGEN_SIZE_POLICY_NO_IMAGE_REGRESSION_R2R1O_REVIEW.md`；
5. preserved R2R1J final receiver / parser / runtime hash helper exact files。

执行顺序：

1. fresh-read main + Part 4 §25 + R2R1O；
2. no-image receiver/parser/hash preflight；
3. 新建两个 distinct R2R1P task fixture，只写 16:9，不写 exact pixel；
4. arm global call guard = 2；
5. 两个 task 同时提交，concurrency=2；
6. 每个 result 独立执行 runtime hash → output_hint strict parse → source hash → copy hash → native dimensions → QA；
7. 不 TTY bulk、不 retry、不 replacement；
8. 记录 generation vs local-persist timing；
9. fresh readback；
10. STOP。

### EXECUTOR_TO_REVIEWER_RELAY

```text
结果：PASS_CANDIDATE_OUTPUT_HINT_TWO_CONCURRENT_LIVE_R2R1P / RETURN_*
改动：一句话说明仅新增哪些 R2R1P task/evidence，或说明 NONE。
验证：一句话说明 preflight、2 路并发、IMAGEGEN_CALLS、每路 hash/path/native size/QA、retries/fallback、timing 与 fresh readback。
问题：NONE，或“阻塞短语：一句通俗解释”。
回滚：一句话说明正式规则/历史 evidence 是否保持不变，以及 canary evidence 的保留状态。
请 Reviewer 检查：核对两路 result attribution、fast-path hashes、zero fallback/retry、size no-retry、event chain 与 fresh readback。
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
- 当前 R2R1P：既有 Owner/Codex Windows 本地执行链；先 no-image preflight，再最多 2 次并发 plan-native imagegen；
- exact local target path：必须由 preserved Gate evidence 证明，未证明则 `UNKNOWN` / RETURN。

## CURRENT_ROLLBACK_STATUS

- GitHub 正式 Part 0–4.5 当前基线保持可追溯；R2R1L 已按 Owner 明确授权仅修改 Part 4 §25 的画幅 / 尺寸合同。
- R2R1J receiver patch 必须保留 pre-repair source/hash，可在 preflight failure 时恢复。
- H019 完整重跑尚未发生，不存在因 takeover 需要回滚的 H019 新生产状态。

## UNRESOLVED

1. **R2R1P two-concurrent fast-path canary**：需证明两路 fresh imagegen 同时提交时，output_hint local-cache path 仍能正确归属 / hash / copy / QA，且不使用 TTY bulk / retry。
2. **Final video 1920×1080 adaptation implementation**：标准画布已确定，具体视频阶段适配仍待 Part 5 正式迁移时实现。
3. **C-VB01 historical content QA**：R2R1J 图片没有明确呈现酒店搜索；旧 PNG 不接受为 final production asset。
4. **Part 2**：11 项 edit map 等待 Owner 逐项批准。
5. **Style Plate / Part 3→Part 4 Style contract / Part 4 H019 refinements**：仍待独立 Gate。
6. **Part 5 / Part 6**：尚未正式迁移。

## NEXT_STEP

执行并 Review `R2R1P`：

`current main → no-image fast-path preflight → 2 路同时 imagegen → per-result output_hint/hash/copy/QA → timing/readback → STOP`

R2R1P 正式 PASS 后，Reviewer 再决定是否进入 6 Beat R2 完整复测；尺寸 exact-pixel 议题保持关闭。

## OWNER_ACTION_REQUIRED

- **R2R1P 执行转交：**将当前 `REVIEWER_HANDOFF.md` 的 R2R1P Relay 交给既有 Windows / Codex Executor；本轮最多 2 次 Codex 内置生图，不允许重试。
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
- Part 2 pending edit map: `comic-narrative/reviews/part2/PART2_FORMAL_EDIT_MAP.md`
- Current formal Part 3: `comic-narrative/part3/STORYBOARD_VISUAL_DIRECTOR.md`
- Current formal Part 4: `comic-narrative/part4/IMAGE_ASSET_EXECUTION.md`
- Current formal Part 4.5: `comic-narrative/part4_5/ASSET_REUSE_LIBRARY.md`
- Takeover discovery review: `comic-narrative/reviews/governance/TAKEOVER_DISCOVERY_20261003.md`
