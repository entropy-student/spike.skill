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

`ACTIVE_REVIEW / H019_PRODUCTION_PACKAGE_RECONCILIATION_R1`

并行状态：
- 主执行线：R2R2R3 已正式 PASS，imagegen executor reliability 已 CLOSED。下一步转真实生产：先将 H019 酒店价格的 41-task 精简 Part 4 执行包与当前 canonical assets / fast-path / size / destination 合同对齐；本 Gate 不生图。
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
  - R2R2R3：**PASS**：真实 Windows host/user 已证明；exact synthetic source 删除前 regular/non-reparse/hash 与预期一致；只删除 exact PNG，parent 未删；final fresh readback=absent；IMAGEGEN_CALLS=0；repo clean。
  - **Imagegen executor reliability：CLOSED**：正式生产默认继承 `concurrency=2 → built-in imagegen → canonical consumer → official hint parser → SourcePath → local copy/hash/dimensions → QA`，输出路径固定 `outputs/<task_id>/<task_id>.png`。
- **H019 正式生产**：已进入生产包 reconciliation；live 41-task run 尚未授权，先完成 current-contract package compile。
- **Imagegen reliability synthetic testing**：CLOSED；除触发正式 revalidation 条件外，不再重复 synthetic live-image batch。
- **Part 5 / Part 6**：未正式迁移。

## CURRENT_GATE

### GATE_ID

H019_PRODUCTION_PACKAGE_RECONCILIATION_R1

### OBJECTIVE

把现有 H019 酒店价格精简 Part 4 图片执行包编译成 **当前可直接生产的 41-task package**，不修改故事、Visual Beat、POV、镜头或因果事实。

Source package：

`H019_酒店价格_Part4_精简图片执行包.zip`

Expected SHA-256：

`e4e2f3ce2a29f06eb08ee2995fff95e6e8ac7ae2f6c5267072fd3d904a9a6d97`

Expected size：`8,199,407 bytes`。

本 Gate `IMAGEGEN_CALLS=0`。

### MAX_ENDPOINT_THIS_ROUND

1. fresh-read current main / Part 3 / Part 4 / Part 4.5 / current fast-path README；
2. receive exact source ZIP and verify SHA/size before extraction；
3. fresh reconciliation workdir；
4. verify source package facts: 41 tasks / 38 GENERATE / 3 DERIVE_EDIT-equivalent；
5. copy fresh current canonical protagonist + two style references from GitHub worktree into the reconciled package and record SHA-256；
6. rewrite execution-only metadata/path contracts to current baseline；
7. preserve all story/beat/POV/camera/viewer-meaning fields unchanged；
8. compile current dependency graph and production destination map；
9. package-level QA；
10. emit one fresh self-contained reconciled H019 ZIP + manifest + reconciliation report；
11. fresh readback；
12. STOP at Reviewer。

### MANDATORY_REVIEW_STOP

`STOP_AT_REVIEWER=YES`

No live imagegen is authorized in this Gate。

### TARGET_AND_SCOPE

Source package identity：

- Library path: `/comic-narrative/part4/examples/H019_酒店价格_Part4_精简图片执行包.zip`;
- SHA-256: `e4e2f3ce2a29f06eb08ee2995fff95e6e8ac7ae2f6c5267072fd3d904a9a6d97`;
- 41 tasks;
- 38 generate / 3 derive-edit;
- package refs: 主角 / 主画风 / 辅助画风。

Current canonical references：

- `comic-narrative/part3/assets/characters/MAIN_CHARACTER_MASTER.png`;
- `comic-narrative/part3/assets/style/STYLE_PRIMARY_TWO_PERSON_DINING.png`;
- `comic-narrative/part3/assets/style/STYLE_SECONDARY_SINGLE_PERSON_DINING.png`。

Current fast-path tools：

- `comic-narrative/tools/imagegen-fast-path/consume_output_hint.ps1`;
- `official_hint_parser.ps1`;
- `local_copy.ps1`;
- `append_event.ps1`。

Reconciliation prep evidence：

`comic-narrative/reviews/production/H019_PRODUCTION_PACKAGE_RECONCILIATION_PREP_20261004.md`

### APPLICABLE_CRITICAL_CONSTRAINTS

- PASS_CANDIDATE != PASS；
- imagegen executor reliability is inherited / not re-tested；
- IMAGEGEN_CALLS=0；
- no story/Beat/POV/camera/semantic edits；
- current canonical references outrank binaries embedded in the historical package；
- current Part 4 execution-mode and size contracts outrank historical package wording；
- concurrency remains 2 for the later live Gate；
- no POST_OVERLAY / COMPOSITE_CROP / external layer assembly；
- exact text remains native image requirement；
- native pixel mismatch alone is not failure/retry；
- destination convention = `outputs/<task_id>/<task_id>.png`；
- DERIVE_EDIT source must be an actually accepted earlier output；
- no live output or production-library mutation in this Gate。

### RECONCILIATION_RULES

Package facts that must remain unchanged：

- task count = 41；
- task IDs/order = C-VB01 ... C-VB41；
- execution modes = 38 GENERATE + 3 DERIVE_EDIT-equivalent；
- DERIVE_EDIT:
  - C-VB05 ← C-VB02；
  - C-VB19 ← C-VB18；
  - C-VB33 ← C-VB32；
- exact-text tasks:
  - C-VB04 = `可以`；
  - C-VB41 = exactly one of `无房` / `售罄`；
- all existing narration/timing/acceptance/story constraints remain verbatim unless a purely mechanical field normalization is required。

Required current-contract changes：

1. every task:
   - aspect_ratio = 16:9；
   - target_canvas = 1920x1080；
   - native_pixel_target = NONE；
   - retry_on_native_pixel_mismatch = false；
2. output destination:
   - `<run_root>/outputs/<visual_beat_id>/<visual_beat_id>.png`；
3. QA destination:
   - `<run_root>/qa/<visual_beat_id>.QA.json` or equivalent under qa root；
4. historical `已完成图片/C-VBxx.png` source/reference paths become resolved nested production outputs；
5. C-VB02 is the main continuity anchor and may only release dependent tasks after its accepted output exists；
6. C-VB18 and C-VB32 similarly gate their respective DERIVE_EDIT children；
7. reference binaries are replaced from current canonical Part 3 assets and fresh SHA-256 values are written into the new manifest；
8. historical `1920x1080` wording is normalized to target canvas semantics, not native raster requirement；
9. technical retry is bounded to at most one retry for a transient tool/network/no-usable-image failure; no automatic retry for content hard failure in the first production run；
10. exact native text failure is content hard failure / HOLD-RETURN, never POST_OVERLAY fallback。

### PREFLIGHT

1. current main fresh-read；
2. source ZIP exact SHA/size PASS；
3. archive contains only expected package tree; no path traversal / absolute archive entries；
4. source JSON parses；
5. exactly 41 unique ordered task IDs；
6. current canonical reference files exist as regular PNGs in worktree；
7. record current reference SHA-256 / dimensions；
8. confirm source package protagonist binary differs from current canonical and is not reused；
9. no imagegen call path is invoked；
10. fresh output package path does not already exist。

### REQUIRED_EVIDENCE

- `H019_PRODUCTION_PACKAGE_RECONCILIATION_R1.md`；
- source ZIP SHA/size；
- source task statistics；
- current main + relevant formal blobs；
- current reference file paths/SHA/dimensions；
- old→new field/path mapping；
- dependency graph；
- 41 production destination mappings；
- execution-mode count；
- exact-text task list；
- forbidden-mode scan；
- reconciled package ZIP SHA/size；
- reconciled manifest；
- package QA result；
- IMAGEGEN_CALLS=0；
- repository formal-rule delta=0。

### ACCEPTANCE_CRITERIA

`PASS_CANDIDATE_H019_PRODUCTION_PACKAGE_RECONCILED_R1` requires：

1. exact source ZIP identity matches；
2. 41/41 tasks retained exactly once and in order；
3. 38 GENERATE + 3 DERIVE_EDIT；
4. no story/POV/camera/semantic drift；
5. current canonical reference binaries embedded and hashed；
6. stale package protagonist binary not used；
7. all output/source/dependency paths resolve to current nested convention；
8. size contract = 16:9 + target_canvas 1920x1080 + native target NONE；
9. native mismatch retry disabled；
10. exact text C-VB04/C-VB41 preserved as native-image requirements；
11. no forbidden execution modes / POST_OVERLAY；
12. retry contract is explicit and bounded；
13. package is self-contained for the later image executor；
14. package QA PASS；
15. IMAGEGEN_CALLS=0；
16. formal rules unchanged；
17. fresh readback consistent。

### ROLLBACK_STATUS_OR_PLAN

- source ZIP immutable；
- formal Part 3/4/4.5 unchanged；
- only fresh reconciled package/evidence may be created；
- pre-existing production outputs are not touched；
- reconciliation failure deletes nothing outside its fresh workdir。

### OWNER_ONLY_ACTIONS

Owner must provide the exact source H019 ZIP to the Windows/Codex Executor if it is not already present locally. No other Owner action。

### REVIEWER_TO_EXECUTOR_RELAY

从 current GitHub main 开始，只执行 H019_PRODUCTION_PACKAGE_RECONCILIATION_R1。

输入必须是 exact `H019_酒店价格_Part4_精简图片执行包.zip`，SHA-256=`e4e2f3ce2a29f06eb08ee2995fff95e6e8ac7ae2f6c5267072fd3d904a9a6d97`。

本轮 `IMAGEGEN_CALLS=0`。

按 Gate 将 41-task 历史执行包机械对齐到 current canonical Part 3 refs、Part 4 §25、canonical fast-path、nested destination 和 dependency contract。不要改故事、Beat、POV、镜头、口播或 viewer meaning。

最终返回 fresh reconciled ZIP + manifest + reconciliation report；STOP_AT_REVIEWER=YES。

### EXECUTOR_TO_REVIEWER_RELAY

```text
结果：PASS_CANDIDATE_H019_PRODUCTION_PACKAGE_RECONCILED_R1 / RETURN_*
改动：仅新增 fresh H019 reconciled production package/evidence；正式规则、source ZIP、已有 production outputs 未修改。
验证：一句话说明 source identity、41 tasks/modes、current refs、nested paths/dependencies、size/retry/text contract、package QA、IMAGEGEN_CALLS=0 与 fresh readback。
问题：NONE，或“短语：一句通俗解释”。
回滚：source ZIP/正式规则无需回滚；fresh reconciled package 可丢弃重建。
请 Reviewer 检查：41-task 无语义漂移、reference freshness、dependency/source paths、size/retry/exact-text contract、package completeness。
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
- 当前 H019 reconciliation：Owner/Codex Windows 执行链；IMAGEGEN_CALLS=0，只编译 current-contract 41-task production package；
- exact local target path：必须由 preserved Gate evidence 证明，未证明则 `UNKNOWN` / RETURN。

## CURRENT_ROLLBACK_STATUS

- GitHub 正式 Part 0–4.5 当前基线保持可追溯；R2R1L 已按 Owner 明确授权仅修改 Part 4 §25 的画幅 / 尺寸合同。
- R2R1J receiver patch 必须保留 pre-repair source/hash，可在 preflight failure 时恢复。
- H019 完整重跑尚未发生，不存在因 takeover 需要回滚的 H019 新生产状态。

## UNRESOLVED

1. **H019 production package reconciliation R1**：将现有 41-task H019 精简图片执行包机械对齐 current refs / fast-path / nested paths / size contract，形成可直接生产的新包。
2. **H019 41-task live production run**：reconciled package Reviewer PASS 后执行；并发固定 2。
3. **Final video 1920×1080 adaptation implementation**：标准画布已确定，具体视频阶段适配仍待 Part 5 正式迁移时实现。
4. **C-VB01 historical content QA**：旧 PNG 不接受为 final production asset。
5. **Part 2**：11 项 edit map 等待 Owner 逐项批准。
6. **Style Plate / Part 3→Part 4 Style contract / Part 4 H019 refinements**：仍待独立 Gate。
7. **Part 5 / Part 6**：尚未正式迁移。

## NEXT_STEP

执行并 Review H019_PRODUCTION_PACKAGE_RECONCILIATION_R1：

exact historical H019 ZIP → current canonical references/contracts → fresh self-contained 41-task production package → package QA → STOP

Reviewer PASS 后，下一 Gate 才开始 H019 41-task live production。
## OWNER_ACTION_REQUIRED

- **H019 source ZIP 转交：**把 exact `H019_酒店价格_Part4_精简图片执行包.zip` 交给 Windows / Codex Executor；期望 SHA-256=`e4e2f3ce2a29f06eb08ee2995fff95e6e8ac7ae2f6c5267072fd3d904a9a6d97`。
- 然后让 Executor 只执行当前 REVIEWER_HANDOFF.md 的 H019_PRODUCTION_PACKAGE_RECONCILIATION_R1 Relay。
- 本轮 `IMAGEGEN_CALLS=0`。
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
- R2R2R3 formal PASS / reliability closeout: `comic-narrative/reviews/imagegen-speed/IMAGEGEN_SYNTHETIC_SOURCE_CLEANUP_CLOSEOUT_R2R2R3_REVIEW.md`
- H019 production package reconciliation prep: `comic-narrative/reviews/production/H019_PRODUCTION_PACKAGE_RECONCILIATION_PREP_20261004.md`
- Canonical result consumer: `comic-narrative/tools/imagegen-fast-path/consume_output_hint.ps1`
- Canonical fast-path tools: `comic-narrative/tools/imagegen-fast-path/`
- R2R2 fixed fixture: `comic-narrative/reviews/imagegen-speed/fixtures/IMAGEGEN_SIX_TASK_RELIABILITY_R2R2_TASKS.json`
- Part 2 pending edit map: `comic-narrative/reviews/part2/PART2_FORMAL_EDIT_MAP.md`
- Current formal Part 3: `comic-narrative/part3/STORYBOARD_VISUAL_DIRECTOR.md`
- Current formal Part 4: `comic-narrative/part4/IMAGE_ASSET_EXECUTION.md`
- Current formal Part 4.5: `comic-narrative/part4_5/ASSET_REUSE_LIBRARY.md`
- Takeover discovery review: `comic-narrative/reviews/governance/TAKEOVER_DISCOVERY_20261003.md`
