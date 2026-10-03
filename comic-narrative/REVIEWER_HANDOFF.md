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

`ACTIVE_REVIEW / R2R1U_DIRECT_OUTPUT_HINT_TWO_CONCURRENT_LIVE_CANARY`

并行状态：
- 主执行线：R2R1T 已证明两路 imagegen 并发调用均正常返回且各有 1 个 output_hint；结合当前 upstream Codex 实现，R2R1U 改为 orchestrator 直接消费 output_hint/本地路径，只有当前架构确实不能直传 SourcePath 时才同轮退到小 JSON source_path 交接。
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
- **H019 完整第二轮重跑**：`DEFERRED`。
- **6 Beat R2 完整复测**：未授权；先完成 R2R1P 两路并发 live fast-path canary，再由 Reviewer 决定是否进入 6 Beat。
- **Part 5 / Part 6**：未正式迁移。

## CURRENT_GATE

### GATE_ID

IMAGEGEN_DIRECT_OUTPUT_HINT_TWO_CONCURRENT_LIVE_CANARY_R2R1U

### OBJECTIVE

按当前 Codex 官方内置生图保存语义，直接消费 live result 的 output_hint / 已保存本地 PNG 路径，完成两路并发 end-to-end 验证。

首选路径：

image_gen result → orchestrator 读取 output_hint → 提取唯一 PNG 路径 → allowed-root / exists → local copy/hash → dimensions → QA

不再把 raw output_hint 交给一个等待 stdin 的 saver。

只有当当前 orchestrator **确实不能在同一轮把已提取的 SourcePath 直接传给本地 helper** 时，才允许同一 Gate 内退到 task-scoped 小 JSON：

{ task_id, source_path }

而不是重新开 Gate。

### MAX_ENDPOINT_THIS_ROUND

1. fresh-read current main + Part 4 §25；
2. fresh-read R2R1T Reviewer decision + R2R1U upstream-alignment review；
3. 创建 fresh R2R1U run directory；
4. 创建 2 个 distinct 16:9 tasks + global call guard=2；
5. 创建最小 local-copy helper，只接受 TaskId / SourcePath / Destination / QA path；
6. 0-image smoke：用 allowed-root 下刻意不存在的 synthetic SourcePath 调 helper，必须到达 SOURCE_MISSING 类错误；
7. smoke PASS 后同一轮继续；
8. 同时提交 exactly 2 次 Codex 内置 imagegen；
9. 每个 live result 返回后：
   - orchestrator 直接读取该 task 的 output_hint；
   - 提取 exactly one absolute PNG path；
   - 校验路径位于 allowed generated_images root；
   - 优先直接把 SourcePath 交给 helper；
10. 若当前 orchestrator 无法安全直传 SourcePath，允许同轮创建 task-scoped 小 JSON {task_id, source_path}，helper 从文件读取；
11. 每路完成 exists → source SHA → copy SHA → dimensions → QA；
12. 记录 generation timing 与 post-return path-extract/copy/QA timing；
13. fresh readback；
14. STOP at Reviewer。

总 imagegen 调用上限 = 2。

### MANDATORY_REVIEW_STOP

STOP_AT_REVIEWER=YES

live 前仅以下情况停止：

- current main / Part 4 contract drift；
- local-copy helper smoke失败；
- fresh paths 冲突；
- call guard不满足；
- 发现当前 result 根本没有 output_hint。

若 helper smoke PASS，则不要为了 transport 方案选择单独停一次；优先 direct SourcePath，必要时同轮退到小 JSON source_path handoff，然后继续本轮两图 canary。

### TARGET_AND_SCOPE

允许读取：

1. current REVIEWER_HANDOFF 当前 Gate / Relay；
2. current Part 4 §25；
3. R2R1T Reviewer decision；
4. R2R1U upstream-alignment review；
5. fresh R2R1U files only。

允许继承：

- R2R1J：单路 output_hint → local PNG → hash/copy → QA 已正式 PASS；
- R2R1O：16:9 / no exact-native-pixel retry 已正式 PASS；
- R2R1T：concurrency-at-submit=2、两路 live calls 均返回、每路 output_hint_count=1 已实测成立。

当前 upstream Codex 设计参考：

- openai/codex tool.rs blob d2777fb2023782ad7508fc4bddc097d33fb96359；
- artifact.rs blob 6c6fce0f9812d88daf5a53880a77485c6eea6cb3；
- imagegen SKILL.md blob c39b1f921ce679f08416ab16ceb01945835bb950。

这些 upstream blobs 不是 Owner 本机 binary byte-identity 证明；本地兼容性由 R2R1T 的 live output_hint 事实补足。

禁止：

- stdin / write_stdin transport；
- saver 等待式 receiver；
- TTY/base64 image payload transfer；
- broad generated_images scan；
- R2R1J/R2R1T 历史目录重放；
- exact-pixel 研究；
- API fallback；
- retry / replacement / 第 3 次 imagegen；
- 6 Beat / H019；
- 修改 Part 2/3/4/4.5/SKILL 正式规则。

### APPLICABLE_CRITICAL_CONSTRAINTS

- PASS_CANDIDATE != PASS；
- accepted capability inheritance 生效；
- upstream 设计用于指导当前未执行 Gate，不替代本机 live evidence；
- global imagegen calls = 2；
- per-task attempt = 1；
- retries/replacements/fallback-imagegen = 0；
- 任一路失败不得补发；
- 另一路若已 in-flight 可自然完成；
- output_hint 每路独立解析；
- exactly one PNG path required；
- SourcePath 必须位于 current-user generated_images allowed root；
- no broad cache scan；
- local helper 只做 path/filesystem/hash/copy/dimensions/QA，不接 image bytes；
- small JSON fallback 仅在 direct SourcePath transport 不可用时允许，且只能含 task_id + source_path；
- native pixel mismatch 不失败/不重试；
- QA 只记录，不触发 retry；
- canary images 不自动进入 production library。

### PREFLIGHT

必须满足：

1. current main fresh-read；
2. Part 4 §25 仍为 16:9 only、1920×1080 target canvas/final target、无 exact native target；
3. 两个 fresh task IDs 唯一、prompt 只要求 16:9；
4. call guard=2 / per-task max attempt=1；
5. fresh output/QA/evidence paths 不冲突；
6. helper required 参数至少包括 TaskId / SourcePath / Destination；
7. helper 不含 Console.In / stdin / ReadLine；
8. helper 对 SourcePath 做：
   - absolute path；
   - real/normalized path；
   - allowed-root containment；
   - existing regular PNG；
   - source SHA；
   - copy；
   - copied SHA equality；
9. synthetic SourcePath smoke：
   - 路径在 allowed-root 下；
   - 文件刻意不存在；
   - 结果必须是 SOURCE_MISSING / SOURCE_NOT_FOUND 类；
   - 不得出现 INPUT_MISSING；
10. 若预先使用 JSON fallback helper，JSON 仅允许 task_id + source_path，<=65536 bytes；
11. logger / RUN_RECORD / fresh-readback 路径就绪。

若 1–11 PASS，立即进入 LIVE_CANARY。

### LIVE_RESULT_PATH_CONTRACT

每个 imagegen result 返回后：

1. 绑定 task id；
2. 读取该 result 的 output_hint；
3. output_hint 必须存在且为非空 bounded string；
4. 从 hint 提取 exactly one absolute .png path；
5. 不通过 broad scan 寻找“最新 PNG”；
6. path 必须位于 allowed generated_images root；
7. preferred：orchestrator 直接调用 helper，并传 SourcePath；
8. bounded fallback：若 direct SourcePath transport 在当前 orchestrator 实际不可用，则写 task-scoped JSON：
   - task_id
   - source_path
9. fallback JSON write/read-back 后 task_id 必须匹配；
10. 不把 image_url/base64 写普通日志或 handoff 文件。

### LIVE_CANARY

1. concurrency-at-submit=2；
2. exactly 2 imagegen calls；
3. task A/B each attempt=1；
4. no retry / replacement。

每个 result：

1. record call start / return timing；
2. direct parse output_hint → SourcePath；
3. record transport mode = DIRECT_SOURCE_PATH 或 JSON_SOURCE_PATH_FALLBACK；
4. helper validates SourcePath；
5. source SHA-256；
6. copy to fresh task destination；
7. copied SHA-256 == source SHA；
8. record native dimensions；
9. reach QA；
10. record QA；
11. record return→path-extract→copy→QA timing。

任一路 hint/path/hash 失败：

- fail closed；
- no broad scan；
- no TTY fallback；
- no replacement；
- preserve other in-flight result；
- whole Gate RETURN_*。

### REQUIRED_EVIDENCE

- IMAGEGEN_DIRECT_OUTPUT_HINT_TWO_CONCURRENT_LIVE_CANARY_R2R1U.md
- PREFLIGHT_EVIDENCE_R2R1U.md
- current main + Part 4 blob
- R2R1T Reviewer + R2R1U upstream-alignment pointers
- two fresh task fixtures
- local-copy helper source/hash
- proof no stdin read path
- synthetic SourcePath smoke result
- call guard
- concurrency-at-submit
- IMAGEGEN_CALLS=2
- attempts=1 each
- retries/replacements/fallback-imagegen=0
- per-task output_hint_count
- per-task extracted SourcePath
- per-task transport mode
- if JSON fallback used: file bytes/hash + task_id/source_path only
- per-task source/copy path + SHA
- per-task native dimensions
- per-task QA reachability/result
- generation timing
- post-return path-extract/copy/QA timing
- RUN_EVENTS.jsonl
- RUN_RECORD.json
- fresh readback
- formal project-rule delta=0

### ACCEPTANCE_CRITERIA

PASS_CANDIDATE_DIRECT_OUTPUT_HINT_TWO_CONCURRENT_LIVE_R2R1U requires：

1. lightweight preflight PASS；
2. helper has no stdin dependency；
3. synthetic SourcePath smoke reaches path-validation/filesystem stage；
4. exactly 2 concurrent imagegen calls；
5. two task identities correctly attributed；
6. per-task attempts=1；
7. retries/replacements/fallback-imagegen=0；
8. both live results expose exactly one output_hint/path；
9. no broad cache scan；
10. both SourcePaths pass allowed-root + existence checks；
11. each source SHA = copied SHA；
12. both images reach QA；
13. native dimensions recorded without exact-pixel retry；
14. no bulk TTY/base64 image transfer；
15. event chain reconstructable；
16. generation vs post-return path/copy timing separated；
17. no formal-rule changes；
18. fresh readback consistent。

Preferred acceptance uses DIRECT_SOURCE_PATH for both tasks.

If one or both tasks require JSON_SOURCE_PATH_FALLBACK but all other criteria pass, the Gate may still be PASS_CANDIDATE; Reviewer must record the actual transport mode and decide whether further simplification is necessary before 6 Beat.

Allowed results：

- PASS_CANDIDATE_DIRECT_OUTPUT_HINT_TWO_CONCURRENT_LIVE_R2R1U
- RETURN_PREFLIGHT_DRIFT
- RETURN_IMPLEMENTATION_DRIFT
- RETURN_TEST_FAILURE

### ROLLBACK_STATUS_OR_PLAN

- 只修改 fresh R2R1U harness；
- 正式规则无需回滚；
- helper smoke失败则 0 imagegen STOP；
- live失败不 retry；
- fresh canary evidence 保留；
- 不修改历史 R2R1T evidence。

### OWNER_ONLY_ACTIONS

NONE

### REVIEWER_TO_EXECUTOR_RELAY

从 current GitHub main 开始，只执行 R2R1U。

读取：

1. current REVIEWER_HANDOFF 当前 R2R1U Gate / Relay；
2. current Part 4 §25；
3. R2R1T Reviewer decision；
4. R2R1U upstream-alignment review。

不要读 broad history，不要复验历史目录。

执行：

1. fresh run directory；
2. 2 个 distinct 16:9 tasks；
3. call guard=2；
4. 建只接受 SourcePath 的 local-copy helper，不使用 stdin；
5. synthetic missing SourcePath smoke；
6. smoke PASS 后同一轮并发提交 2 tasks；
7. 每路 live result 直接读取 output_hint 并提取唯一 SourcePath；
8. 优先直接 SourcePath → helper；
9. 只有 current orchestrator 实际无法直传 SourcePath 时，才同轮 fallback 到小 JSON {task_id, source_path}；
10. helper → allowed path / exists / source hash / copy hash / dimensions / QA；
11. 不 retry、不 replacement、不第 3 张；
12. 记录 generation 与 post-return timing；
13. fresh readback；
14. STOP。

### EXECUTOR_TO_REVIEWER_RELAY

结果：PASS_CANDIDATE_DIRECT_OUTPUT_HINT_TWO_CONCURRENT_LIVE_R2R1U / RETURN_*
改动：仅新增 R2R1U fresh task/helper/evidence；正式规则和历史 evidence 未修改。
验证：一句话说明 helper smoke、2 路并发、IMAGEGEN_CALLS、每路 output_hint→SourcePath、transport mode、path/hash/dimensions/QA、zero retry/fallback-imagegen、timing 与 fresh readback。
问题：NONE，或“阻塞短语：一句通俗解释”。
回滚：正式规则无需回滚；fresh evidence/canary outputs 保留。
请 Reviewer 检查：是否真正 direct consume output_hint/source path、是否避免 stdin/TTY/base64/broad scan、两路 source/copy hash、QA、timing/readback。
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
- 当前 R2R1U：既有 Owner/Codex Windows 执行链；优先 direct output_hint→SourcePath，本轮最多 2 次并发 Codex 内置 imagegen；仅当直传 SourcePath 实际不可用时，同轮允许 task-scoped JSON source_path fallback；
- exact local target path：必须由 preserved Gate evidence 证明，未证明则 `UNKNOWN` / RETURN。

## CURRENT_ROLLBACK_STATUS

- GitHub 正式 Part 0–4.5 当前基线保持可追溯；R2R1L 已按 Owner 明确授权仅修改 Part 4 §25 的画幅 / 尺寸合同。
- R2R1J receiver patch 必须保留 pre-repair source/hash，可在 preflight failure 时恢复。
- H019 完整重跑尚未发生，不存在因 takeover 需要回滚的 H019 新生产状态。

## UNRESOLVED

1. **R2R1U direct-output-hint two-concurrent live canary**：按 Codex upstream 语义直接消费 output_hint/SourcePath，完成两路 end-to-end 并发验证；JSON 仅作为同轮 bounded fallback。
2. **6 Beat R2 完整复测**：R2R1U PASS 后由 Reviewer 决定是否直接进入。
3. **Final video 1920×1080 adaptation implementation**：标准画布已确定，具体视频阶段适配仍待 Part 5 正式迁移时实现。
4. **C-VB01 historical content QA**：旧 PNG 不接受为 final production asset。
5. **Part 2**：11 项 edit map 等待 Owner 逐项批准。
6. **Style Plate / Part 3→Part 4 Style contract / Part 4 H019 refinements**：仍待独立 Gate。
7. **Part 5 / Part 6**：尚未正式迁移。

## NEXT_STEP

直接执行并 Review R2R1U：

current main → SourcePath-only helper → synthetic missing-path smoke → smoke PASS → 同一轮 2 路同时 imagegen → direct output_hint→SourcePath → local hash/copy/QA → timing/readback → STOP

## OWNER_ACTION_REQUIRED

- **R2R1U 执行转交：**将当前 REVIEWER_HANDOFF.md 的 R2R1U Relay 交给 Windows / Codex Executor；优先直接消费 live `output_hint` 提取 `SourcePath` 后本地 copy/hash/QA；只有直传 SourcePath 实际不可用时才同轮退到小 JSON `{task_id, source_path}`；最多 2 次生图、禁止重试。
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
- R2R1T RETURN / R2R1U file-handoff live Gate: `comic-narrative/reviews/imagegen-speed/IMAGEGEN_TWO_CONCURRENT_LOGGER_REPAIR_AND_LIVE_CANARY_R2R1T_REVIEW.md`
- R2R1U upstream output_hint alignment: `comic-narrative/reviews/imagegen-speed/IMAGEGEN_R2R1U_UPSTREAM_OUTPUT_HINT_ALIGNMENT_REVIEW.md`
- Part 2 pending edit map: `comic-narrative/reviews/part2/PART2_FORMAL_EDIT_MAP.md`
- Current formal Part 3: `comic-narrative/part3/STORYBOARD_VISUAL_DIRECTOR.md`
- Current formal Part 4: `comic-narrative/part4/IMAGE_ASSET_EXECUTION.md`
- Current formal Part 4.5: `comic-narrative/part4_5/ASSET_REUSE_LIBRARY.md`
- Takeover discovery review: `comic-narrative/reviews/governance/TAKEOVER_DISCOVERY_20261003.md`
