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

`ACTIVE_REVIEW / R2R1R_EXISTING_ROOT_READONLY_QUALIFICATION`

并行状态：
- 主执行线：R2R1Q 因 recorded R2R1J root 已非空而按 Gate 停止；现有 root 的 9 个顶层名称与 accepted ZIP 完全一致。R2R1R 改为只读完整路径/hash 对照，不覆盖、不删除。
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
  - R2R1Q：**RETURN_PREFLIGHT_DRIFT — REVIEWER ACCEPTED**：ZIP 身份/路径安全 PASS，但 recorded root 已有 9 个顶层条目，按 R2R1Q 禁止覆盖规则立即停止；未解压、未覆盖、未回归、`IMAGEGEN_CALLS=0`。Reviewer 核对后确认这 9 个顶层名称与 accepted ZIP 的 9 个顶层名称完全一致，下一步改为只读资格认证。
- **H019 完整第二轮重跑**：`DEFERRED`。
- **6 Beat R2 完整复测**：未授权；先完成 R2R1P 两路并发 live fast-path canary，再由 Reviewer 决定是否进入 6 Beat。
- **Part 5 / Part 6**：未正式迁移。

## CURRENT_GATE

### GATE_ID

`IMAGEGEN_R2R1J_EXISTING_ROOT_READONLY_QUALIFICATION_R2R1R`

### OBJECTIVE

在 **0 次 imagegen、0 次覆盖、0 次删除**前提下，证明 Windows 上现存的 R2R1J root 是否与已正式 PASS 的原始 R2R1J ZIP **逐文件完全一致**。

如果完全一致，再运行既有 positive final-receiver 与五个 negative path-policy no-image 回归，重新满足 R2R1P 的本地 preflight 依赖。

### MAX_ENDPOINT_THIS_ROUND

1. fresh-read current GitHub main / R2R1Q Review / R2R1J Review；
2. prove real Windows host/user/path；
3. verify accepted ZIP exact identity；
4. read-only inventory existing root；
5. compare ZIP regular-file relative path set vs root regular-file relative path set；
6. require zero missing / zero extra files；
7. for every file, compare byte length + SHA-256；
8. require complete 1:1 equality before executing any historical fixture；
9. run accepted positive final-receiver replay；
10. run five negative path-policy cases；
11. verify receiver/parser/runtime-helper hashes；
12. `IMAGEGEN_CALLS=0`；
13. fresh readback；
14. STOP at Reviewer。

### MANDATORY_REVIEW_STOP

`STOP_AT_REVIEWER=YES`

本 Gate 不得：
- imagegen；
- live canary；
- create R2R1P tasks；
- extract over existing root；
- delete / rename / overwrite root files；
- modify historical R2R1J files；
- copy reconstructed replacements into root；
- modify Part 2/3/4/4.5/SKILL；
- run 6 Beat / H019。

### TARGET_AND_SCOPE

Immutable reference ZIP：

`C:\Users\34707\Documents\ChatGPT\批量生图\_imagegen-output-hint-guard-repair-live-canary-r2r1j.zip`

Accepted ZIP identity：

- bytes = `4,866,984`
- SHA-256 = `760fe40a9debd990bde48bf9f673a37457f7367cc90be51986862f0816dcd5b4`
- entries = 25
- top-level names = 9
- path traversal / absolute entries = 0

Existing root：

`C:\Users\34707\Documents\ChatGPT\批量生图\_imagegen-output-hint-guard-repair-live-canary-r2r1j\`

R2R1Q observed immediate entries：

- `outputs`
- `preflight`
- `source`
- `FRESH_READBACK_R2R1J.json`
- `IMAGEGEN_OUTPUT_HINT_GUARD_REPAIR_LIVE_CANARY_R2R1J.md`
- `PREFLIGHT_EVIDENCE_R2R1J.md`
- `QA_REPORT.md`
- `RUN_EVENTS.jsonl`
- `RUN_RECORD.json`

These exactly match the ZIP's nine top-level names, but full byte identity remains unproven until R2R1R.

Allowed：
- read-only root traversal；
- read-only ZIP entry traversal；
- byte length + SHA-256 computation；
- positive/negative no-image execution using existing files after identity PASS；
- new R2R1R evidence directory only。

Forbidden：
- any repair/mutation of existing R2R1J root；
- partial acceptance when missing/extra/mismatched files exist；
- using filename match alone as identity proof。

### APPLICABLE_CRITICAL_CONSTRAINTS

- `PASS_CANDIDATE != PASS`；
- Governance 11B real-host proof applies；
- target root is treated as unknown until full read-only qualification；
- unknown/non-identical historical evidence must not be overwritten merely to make the Gate pass；
- ZIP is immutable accepted reference；
- path-set equality + per-file hash equality are both required；
- any missing / extra / mismatch => fail closed；
- only after full identity PASS may historical positive/negative fixtures execute；
- `IMAGEGEN_CALLS=0` throughout；
- historical evidence remains immutable。

### PREFLIGHT

Before root hashing：

1. prove Windows OS / user / filesystem / exact working path；
2. verify ZIP exists；
3. verify ZIP bytes + SHA-256 = accepted identity；
4. list archive and confirm path-safety；
5. verify existing root exists and is directory；
6. arm no-write discipline:
   - no extraction；
   - no delete；
   - no overwrite；
   - no rename；
7. `IMAGEGEN_CALLS=0` guard active；
8. create only a fresh separate R2R1R evidence directory。

Failure => RETURN / STOP.

### READONLY_IDENTITY_QUALIFICATION

Build two normalized manifests.

**ZIP manifest**
- include regular file entries only；
- normalized relative path；
- uncompressed byte length；
- SHA-256 of entry bytes。

**Root manifest**
- include regular files recursively；
- normalized relative path from root；
- byte length；
- SHA-256。

Require：

1. exact relative-path set equality；
2. missing files = 0；
3. extra files = 0；
4. per-path byte length equality；
5. per-path SHA-256 equality；
6. directory names may be listed for diagnostics but file-set identity is authoritative。

If any mismatch：

- `RETURN_PREFLIGHT_DRIFT`
- do not run positive/negative fixtures；
- do not repair root；
- report bounded mismatch paths only。

### POSITIVE_NEGATIVE_REQUALIFICATION

Only after full identity PASS：

1. run the accepted R2R1J final receiver positive fixture through the exact receiver entry point；
2. require expected positive PNG/hash behavior；
3. run the five accepted path-policy negative cases；
4. require all five fail closed with no copy；
5. verify receiver/parser/runtime helper exact file hashes still match accepted package；
6. ordinary logs must not expose full base64 payload。

This proves local executability only; it does not rerun historical imagegen or change R2R1J history.

### REQUIRED_EVIDENCE

- `IMAGEGEN_R2R1J_EXISTING_ROOT_READONLY_QUALIFICATION_R2R1R.md`
- `PREFLIGHT_EVIDENCE_R2R1R.md`
- current main SHA
- R2R1Q Review + R2R1J Review pointers/hashes
- Windows host/user/path proof
- ZIP bytes/SHA/path-safety
- ZIP file manifest
- root file manifest
- path-set comparison summary
- missing/extra/mismatch counts
- per-file hash comparison result
- positive final-receiver result, if identity PASS
- five negative results, if identity PASS
- receiver/parser/runtime helper hashes
- `IMAGEGEN_CALLS=0`
- retries=0
- root mutations=0
- production/formal-rule changes=0
- `RUN_EVENTS.jsonl`
- `RUN_RECORD.json`
- fresh readback

### ACCEPTANCE_CRITERIA

`PASS_CANDIDATE_R2R1J_EXISTING_ROOT_QUALIFIED_R2R1R` requires：

1. exact accepted ZIP identity；
2. zero unsafe archive paths；
3. root file relative-path set exactly equals ZIP regular-file set；
4. missing=0 / extra=0；
5. every file byte length + SHA-256 matches；
6. root mutations=0；
7. positive receiver replay PASS；
8. five negative path-policy cases all fail closed；
9. receiver/parser/runtime helper hashes match；
10. `IMAGEGEN_CALLS=0`；
11. no historical/formal-rule changes；
12. fresh readback matches evidence。

Allowed results：

- `PASS_CANDIDATE_R2R1J_EXISTING_ROOT_QUALIFIED_R2R1R`
- `RETURN_PREFLIGHT_DRIFT`
- `RETURN_TEST_FAILURE`
- `RETURN_IMPLEMENTATION_DRIFT`
- `RETURN_TARGET_HOST_EXECUTION_UNAVAILABLE`

### ROLLBACK_STATUS_OR_PLAN

No target-root mutation is authorized, therefore no root rollback should be necessary.

Only fresh R2R1R evidence may be created.

If qualification fails：
- preserve current root unchanged；
- preserve ZIP unchanged；
- do not repair / overwrite / delete；
- STOP for Reviewer classification。

### OWNER_ONLY_ACTIONS

`NONE`

ZIP and populated root are already present. Owner should not extract, delete, rename, or copy anything.

### REVIEWER_TO_EXECUTOR_RELAY

Start from current GitHub main. Execute only R2R1R.

Read only：

1. current `comic-narrative/REVIEWER_HANDOFF.md` CURRENT_GATE / Relay；
2. `comic-narrative/reviews/imagegen-speed/IMAGEGEN_R2R1J_EVIDENCE_RESTORE_AND_PREFLIGHT_REQUALIFICATION_R2R1Q_REVIEW.md`；
3. `comic-narrative/reviews/imagegen-speed/IMAGEGEN_OUTPUT_HINT_GUARD_REPAIR_LIVE_CANARY_R2R1J_REVIEW.md`。

Do not read broad history.

Execution：

1. prove real Windows host/user/path；
2. verify exact accepted ZIP；
3. verify archive path-safety；
4. recursively hash ZIP regular-file entries into normalized manifest；
5. recursively hash existing root regular files into normalized manifest；
6. compare full path sets + lengths + hashes；
7. any mismatch => RETURN, no repair；
8. only if exact match, run positive receiver fixture；
9. run five negative path-policy fixtures；
10. verify receiver/parser/runtime helper hashes；
11. `IMAGEGEN_CALLS=0`；
12. fresh readback；
13. STOP。

Do not imagegen. Do not modify existing root.

### EXECUTOR_TO_REVIEWER_RELAY

```text
结果：PASS_CANDIDATE_R2R1J_EXISTING_ROOT_QUALIFIED_R2R1R / RETURN_*
改动：仅新增 R2R1R read-only qualification evidence；R2R1J root/ZIP 均未修改。
验证：一句话说明 ZIP/root 全量 path+hash 对照、positive、5 negatives、IMAGEGEN_CALLS=0 与 fresh readback。
问题：NONE，或“mismatch/fixture failure：一句通俗解释”。
回滚：无需 root 回滚；说明 root mutations=0。
请 Reviewer 检查：核对完整 manifest equality、positive/negative requalification、zero mutation/zero imagegen 与 fresh readback。
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
- 当前 R2R1R：Owner Windows 对现有 R2R1J root 做只读全量 qualification；本轮 `IMAGEGEN_CALLS=0`、root mutations=0；
- exact local target path：必须由 preserved Gate evidence 证明，未证明则 `UNKNOWN` / RETURN。

## CURRENT_ROLLBACK_STATUS

- GitHub 正式 Part 0–4.5 当前基线保持可追溯；R2R1L 已按 Owner 明确授权仅修改 Part 4 §25 的画幅 / 尺寸合同。
- R2R1J receiver patch 必须保留 pre-repair source/hash，可在 preflight failure 时恢复。
- H019 完整重跑尚未发生，不存在因 takeover 需要回滚的 H019 新生产状态。

## UNRESOLVED

1. **R2R1R existing-root qualification**：需证明现有 R2R1J root 与 accepted ZIP 全量路径 / bytes / SHA-256 完全一致，并重新通过 positive + five-negative no-image 回归。
2. **R2R1P two-concurrent fast-path canary**：R2R1R PASS 后再重新授权；当前仍没有并发 live evidence。
3. **Final video 1920×1080 adaptation implementation**：标准画布已确定，具体视频阶段适配仍待 Part 5 正式迁移时实现。
4. **C-VB01 historical content QA**：旧 PNG 不接受为 final production asset。
5. **Part 2**：11 项 edit map 等待 Owner 逐项批准。
6. **Style Plate / Part 3→Part 4 Style contract / Part 4 H019 refinements**：仍待独立 Gate。
7. **Part 5 / Part 6**：尚未正式迁移。

## NEXT_STEP

执行并 Review `R2R1R`：

`current main → Windows identity → accepted ZIP verify → ZIP/root full manifest comparison → exact-match only → positive + 5 negatives → fresh readback → STOP`

R2R1R PASS 后，再恢复 R2R1P 两路 live canary。

## OWNER_ACTION_REQUIRED

- **NONE。** ZIP 与现有 root 都已经在 Windows 上；请不要手工解压、删除、覆盖或重命名。
- 将当前 `REVIEWER_HANDOFF.md` 的 R2R1R Relay 交给 Windows / Codex Executor 即可。
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
- Part 2 pending edit map: `comic-narrative/reviews/part2/PART2_FORMAL_EDIT_MAP.md`
- Current formal Part 3: `comic-narrative/part3/STORYBOARD_VISUAL_DIRECTOR.md`
- Current formal Part 4: `comic-narrative/part4/IMAGE_ASSET_EXECUTION.md`
- Current formal Part 4.5: `comic-narrative/part4_5/ASSET_REUSE_LIBRARY.md`
- Takeover discovery review: `comic-narrative/reviews/governance/TAKEOVER_DISCOVERY_20261003.md`
