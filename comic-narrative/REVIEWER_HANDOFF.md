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

`ACTIVE_REVIEW / R2R1V_OFFICIAL_HINT_PARSER_TWO_CONCURRENT_LIVE_CANARY`

并行状态：
- 主执行线：R2R1U 已再次证明两路并发生图稳定返回，但 generic Windows-path regex 把官方 hint 中的 output_dir 与 output_path 拼成一个假路径。R2R1V 只修官方 hint parser，0-image parser tests 通过后同一轮直接再跑并发 2。
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
- **H019 完整第二轮重跑**：`DEFERRED`。
- **6 Beat R2 完整复测**：未授权；先完成 R2R1P 两路并发 live fast-path canary，再由 Reviewer 决定是否进入 6 Beat。
- **Part 5 / Part 6**：未正式迁移。

## CURRENT_GATE

### GATE_ID

IMAGEGEN_OFFICIAL_HINT_PARSER_TWO_CONCURRENT_LIVE_CANARY_R2R1V

### OBJECTIVE

只修 R2R1U 已确认的唯一阻塞：output_hint parser。

当前 Codex code-mode result 只直接暴露 image_url + optional output_hint；saved_path 是内部事件字段，不直接出现在 code-mode result object。

当前 upstream artifact.rs 的 hint 第一行格式为：

Generated images are saved to {image_output_dir} as {image_output_path} by default.

R2R1V 必须按该结构解析出唯一 output_path，然后继续现有 SourcePath helper / hash / copy / QA。

并发固定为 2，不再探索 3+。

### MAX_ENDPOINT_THIS_ROUND

1. fresh-read current main + Part 4 §25；
2. fresh-read R2R1U Reviewer decision；
3. fresh-read upstream tool.rs / artifact.rs accepted blob pointers；
4. 建 fresh R2R1V run directory；
5. 建 2 个 distinct 16:9 tasks，global concurrency/call guard=2；
6. 建/修最小 hint parser；
7. 0-image parser unit tests；
8. parser tests PASS 后同一轮直接同时提交 exactly 2 次 Codex built-in imagegen；
9. 每个 result：
   - require output_hint_count=1；
   - official-template parse → exactly one SourcePath；
   - allowed-root；
   - exists regular PNG；
   - source SHA；
   - copy；
   - copied SHA equality；
   - dimensions；
   - QA；
10. 记录 generation timing 与 post-return parser/copy/QA timing；
11. fresh readback；
12. STOP at Reviewer。

### MANDATORY_REVIEW_STOP

STOP_AT_REVIEWER=YES

live 前只在 parser/preflight 失败时停止。

若 parser unit tests PASS，则不得为了 parser repair 单独回 Reviewer；同一轮必须继续两路 live canary。

### TARGET_AND_SCOPE

允许读取：

1. current REVIEWER_HANDOFF 当前 Gate / Relay；
2. current Part 4 §25；
3. R2R1U Reviewer decision；
4. R2R1U upstream alignment review；
5. openai/codex current pointers：
   - tool.rs blob d2777fb2023782ad7508fc4bddc097d33fb96359；
   - artifact.rs blob 6c6fce0f9812d88daf5a53880a77485c6eea6cb3；
6. fresh R2R1V files only。

允许继承：

- R2R1J single output_hint/local-cache fast-path PASS；
- R2R1O size policy PASS；
- R2R1T/R2R1U concurrency=2 live return事实；
- R2R1U local-copy helper filesystem/hash/copy validation contract。

禁止：

- generic greedy drive-path regex；
- broad generated_images scan；
- stdin / write_stdin；
- TTY/base64 bulk；
- API fallback；
- retry / replacement / 第 3 次 imagegen；
- concurrency > 2；
- historical local evidence replay；
- exact-pixel 研究；
- 6 Beat / H019；
- 修改 Part 2/3/4/4.5/SKILL 正式规则。

### APPLICABLE_CRITICAL_CONSTRAINTS

- PASS_CANDIDATE != PASS；
- accepted capability inheritance；
- Owner concurrency decision: IMAGEGEN_CONCURRENCY=2；
- 不测试 3+，除非 Owner 未来明确改口；
- global imagegen call limit=2；
- per-task attempt=1；
- retries/replacements/fallback-imagegen=0；
- hint parser fail closed；
- no broad filesystem discovery；
- SourcePath must be under current-user generated_images root；
- local helper receives only explicit SourcePath/task/destination metadata；
- native pixel mismatch alone != failure/retry；
- content QA does not trigger retry；
- canary outputs do not auto-enter production library。

### OFFICIAL_HINT_PARSER

只解析 output_hint 第一行。

Require：

1. prefix exactly starts with:
   Generated images are saved to 
2. suffix exactly ends with:
   by default.
3. take the body between prefix and suffix；
4. enumerate each literal separator occurrence:
   ` as `
5. for each split:
   - left = candidate output_dir；
   - right = candidate output_path；
   - both must normalize as absolute Windows paths；
   - right extension = .png；
   - Parent(right) equals left after normalization, case-insensitive；
   - right is contained by allowed generated_images root；
6. require exactly one structurally valid split；
7. return only candidate output_path as SourcePath。

Do not choose “first C:\...”, “last C:\...”, newest file, or regex span to .png.

### PREFLIGHT

Must PASS with IMAGEGEN_CALLS=0：

1. current main / Part 4 fresh-read；
2. two task IDs unique；
3. call/concurrency guard=2；
4. parser source static check；
5. local-copy helper no stdin；
6. parser positive fixture using exact current upstream template；
7. positive fixture contains:
   - output_dir；
   - output_path under same dir；
   - expected parsed path known；
8. parser must return exact expected output_path；
9. negative fixture: missing suffix → fail；
10. negative fixture: parent(path) != output_dir → fail；
11. negative fixture: two structurally valid candidates → fail as ambiguous；
12. negative fixture: output path outside allowed root → fail；
13. R2R1U malformed joined candidate must not be accepted as SourcePath；
14. output/QA dirs fresh；
15. logger/RUN_RECORD/fresh-readback paths ready。

If all PASS, continue same round to LIVE_CANARY.

### LIVE_CANARY

1. submit exactly 2 tasks concurrently；
2. no third call；
3. each result independently parsed by OFFICIAL_HINT_PARSER；
4. each parsed SourcePath goes directly to local-copy helper；
5. helper validates allowed root / exists / regular PNG；
6. source SHA；
7. copy；
8. copied SHA == source SHA；
9. dimensions recorded；
10. QA reached；
11. record:
   - image_call_seconds；
   - parser_seconds；
   - copy_seconds；
   - return→QA seconds。

If one task fails parser/path/hash：

- fail closed；
- do not scan；
- do not retry；
- let already in-flight sibling finish；
- whole Gate RETURN_*。

### REQUIRED_EVIDENCE

- IMAGEGEN_OFFICIAL_HINT_PARSER_TWO_CONCURRENT_LIVE_CANARY_R2R1V.md
- PREFLIGHT_EVIDENCE_R2R1V.md
- current main + Part 4 blob
- parser source/hash
- parser fixture tests
- upstream tool/artifact blob pointers
- two task fixtures
- concurrency/call guard=2
- IMAGEGEN_CALLS=2
- attempts=1 each
- retries/replacements/fallback-imagegen=0
- per-task output_hint_count
- per-task parsed output_dir + SourcePath metadata
- per-task source/copy SHA
- per-task native dimensions
- per-task QA result
- generation/parser/copy/QA timings
- RUN_EVENTS.jsonl
- RUN_RECORD.json
- fresh readback
- formal project-rule delta=0

Ordinary logs need not store full output_hint; bounded parser diagnostics are sufficient.

### ACCEPTANCE_CRITERIA

PASS_CANDIDATE_OFFICIAL_HINT_PARSER_TWO_CONCURRENT_LIVE_R2R1V requires：

1. preflight parser tests PASS；
2. exactly 2 concurrent imagegen calls；
3. both results output_hint_count=1；
4. both official-template parses return exactly one SourcePath；
5. no generic greedy regex / broad scan；
6. both SourcePaths under allowed root and exist；
7. source SHA == copy SHA for both；
8. both native dimensions recorded；
9. both reach QA；
10. attempts=1 each；
11. retries/replacements/fallback-imagegen=0；
12. no TTY/base64 bulk；
13. event chain reconstructable；
14. timing split recorded；
15. no formal-rule changes；
16. fresh readback consistent。

Allowed results：

- PASS_CANDIDATE_OFFICIAL_HINT_PARSER_TWO_CONCURRENT_LIVE_R2R1V
- RETURN_PREFLIGHT_DRIFT
- RETURN_IMPLEMENTATION_DRIFT
- RETURN_TEST_FAILURE

### ROLLBACK_STATUS_OR_PLAN

- only fresh R2R1V harness may change；
- formal rules unchanged；
- parser preflight failure => IMAGEGEN_CALLS=0 / STOP；
- live failure => no retry；
- preserve fresh evidence/canary outputs；
- do not mutate R2R1U evidence。

### OWNER_ONLY_ACTIONS

NONE

Owner has also fixed normal imagegen concurrency at 2; no concurrency 3+ testing is authorized.

### REVIEWER_TO_EXECUTOR_RELAY

从 current GitHub main 开始，只执行 R2R1V。

只读：

1. current REVIEWER_HANDOFF R2R1V Gate / Relay；
2. current Part 4 §25；
3. R2R1U Reviewer decision；
4. R2R1U upstream alignment review。

不要读 broad history，不要复验历史本地目录。

执行：

1. fresh R2R1V run directory；
2. concurrency/call guard 固定为 2；
3. 按 OFFICIAL_HINT_PARSER 建 parser，不用 generic Windows path regex；
4. 跑 Gate 指定的 0-image parser fixtures；
5. parser fixtures PASS 后同一轮直接并发 2 次 imagegen；
6. 每路 output_hint → official-template parser → unique SourcePath → local helper → source/copy SHA → dimensions → QA；
7. no scan / stdin / TTY / base64 / retry / replacement / third call；
8. 记录 timing；
9. fresh readback；
10. STOP。

### EXECUTOR_TO_REVIEWER_RELAY

结果：PASS_CANDIDATE_OFFICIAL_HINT_PARSER_TWO_CONCURRENT_LIVE_R2R1V / RETURN_*
改动：仅新增 R2R1V fresh parser/task/helper/evidence；正式规则和历史 evidence 未修改。
验证：一句话说明 parser fixtures、2 路并发、IMAGEGEN_CALLS、每路 parsed SourcePath/path/hash/dimensions/QA、zero retry/fallback、timing 与 fresh readback。
问题：NONE，或“阻塞短语：一句通俗解释”。
回滚：正式规则无需回滚；fresh evidence/canary outputs 保留。
请 Reviewer 检查：official-template parser 唯一性、两路 source/copy hash、QA、concurrency=2、zero retry、timing/readback。
Owner 转交：NONE。

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
- 当前 R2R1V：既有 Owner/Codex Windows 执行链；按官方 output_hint 模板解析唯一 SourcePath；固定并发=2，不测试 3+；
- exact local target path：必须由 preserved Gate evidence 证明，未证明则 `UNKNOWN` / RETURN。

## CURRENT_ROLLBACK_STATUS

- GitHub 正式 Part 0–4.5 当前基线保持可追溯；R2R1L 已按 Owner 明确授权仅修改 Part 4 §25 的画幅 / 尺寸合同。
- R2R1J receiver patch 必须保留 pre-repair source/hash，可在 preflight failure 时恢复。
- H019 完整重跑尚未发生，不存在因 takeover 需要回滚的 H019 新生产状态。

## UNRESOLVED

1. **R2R1V official-hint-parser two-concurrent live canary**：修复 R2R1U generic regex 拼接路径问题，按 Codex 官方 hint 模板解析唯一 SourcePath，并完成固定并发=2 的 end-to-end 验证。
2. **6 Beat R2 完整复测**：R2R1V PASS 后由 Reviewer 决定是否直接进入。
3. **Final video 1920×1080 adaptation implementation**：标准画布已确定，具体视频阶段适配仍待 Part 5 正式迁移时实现。
4. **C-VB01 historical content QA**：旧 PNG 不接受为 final production asset。
5. **Part 2**：11 项 edit map 等待 Owner 逐项批准。
6. **Style Plate / Part 3→Part 4 Style contract / Part 4 H019 refinements**：仍待独立 Gate。
7. **Part 5 / Part 6**：尚未正式迁移。

## NEXT_STEP

直接执行并 Review R2R1V：

current main → official-hint parser fixtures → PASS → 同一轮固定并发 2 次 imagegen → unique SourcePath → local hash/copy/QA → timing/readback → STOP

## OWNER_ACTION_REQUIRED

- **R2R1V 执行转交：**将当前 REVIEWER_HANDOFF.md 的 R2R1V Relay 交给 Windows / Codex Executor；先跑 0-image 官方模板 parser fixtures，PASS 后同一轮直接并发 2 张图。
- 并发固定为 2；不要测试 3+。
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
- Part 2 pending edit map: `comic-narrative/reviews/part2/PART2_FORMAL_EDIT_MAP.md`
- Current formal Part 3: `comic-narrative/part3/STORYBOARD_VISUAL_DIRECTOR.md`
- Current formal Part 4: `comic-narrative/part4/IMAGE_ASSET_EXECUTION.md`
- Current formal Part 4.5: `comic-narrative/part4_5/ASSET_REUSE_LIBRARY.md`
- Takeover discovery review: `comic-narrative/reviews/governance/TAKEOVER_DISCOVERY_20261003.md`
