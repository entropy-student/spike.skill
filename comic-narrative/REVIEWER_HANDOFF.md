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

`ACTIVE_REVIEW / R2R1Q_R2R1J_EVIDENCE_RESTORE`

并行状态：
- 主执行线：R2R1P 因本机缺少 R2R1J preserved evidence 在 preflight fail-closed；原始已验收 R2R1J ZIP 已从 ChatGPT Library 找回，R2R1Q 只做恢复与零生图再认证。
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
  - R2R1P：**RETURN_PREFLIGHT_DRIFT — REVIEWER ACCEPTED**：本机 recorded R2R1J evidence root 与六个 mandatory items 缺失；因此 positive/negative preflight 未运行，`IMAGEGEN_CALLS=0`。Reviewer 已从 ChatGPT Library 找回原始 R2R1J ZIP，SHA-256 与 R2R1J formal PASS 记录完全一致。
- **H019 完整第二轮重跑**：`DEFERRED`。
- **6 Beat R2 完整复测**：未授权；先完成 R2R1P 两路并发 live fast-path canary，再由 Reviewer 决定是否进入 6 Beat。
- **Part 5 / Part 6**：未正式迁移。

## CURRENT_GATE

### GATE_ID

`IMAGEGEN_R2R1J_EVIDENCE_RESTORE_AND_PREFLIGHT_REQUALIFICATION_R2R1Q`

### OBJECTIVE

在 **0 次 imagegen** 前提下，把已正式 PASS 的原始 R2R1J evidence package 恢复到 Owner Windows recorded root，并重新证明 R2R1P 所需的 receiver / parser / runtime hash / positive+negative no-image preflight 全部可用。

本 Gate 不执行并发生图；只恢复已验收 evidence 并再认证。

### MAX_ENDPOINT_THIS_ROUND

1. Owner 将已找回的 exact R2R1J ZIP 放到指定 Windows 本地路径；
2. Executor 先证明 real Windows host / user / target path；
3. 验证 ZIP SHA-256 精确等于 accepted R2R1J package；
4. 若 target root 不存在或为空，解压到 fresh staging 后校验关键文件 hash，再原子/受控放置到 recorded root；
5. 若 target root 已存在且非空，禁止覆盖/删除，直接 RETURN；
6. 运行 R2R1J positive final-receiver sample；
7. 运行五个 R2R1H/R2R1J negative path-policy cases；
8. 验证 runtime helper / parser / receiver exact hashes；
9. 重新验证 R2R1P no-image preflight 所需条件；
10. fresh readback；
11. `IMAGEGEN_CALLS=0`；
12. STOP at Reviewer。

### MANDATORY_REVIEW_STOP

`STOP_AT_REVIEWER=YES`

本 Gate 不得：
- imagegen；
- 创建 R2R1P live canary task；
- 并发提交；
- retry；
- TTY bulk image transfer；
- 修改 Part 2/3/4/4.5/SKILL；
- 修改 historical R2R1J evidence 内容；
- 重建或重新生成 R2R1J 图片。

### TARGET_AND_SCOPE

Source package：

`_imagegen-output-hint-guard-repair-live-canary-r2r1j.zip`

Accepted package identity：

- bytes = `4,866,984`
- SHA-256 = `760fe40a9debd990bde48bf9f673a37457f7367cc90be51986862f0816dcd5b4`
- ZIP entries = 25
- unsafe absolute/traversal entries = 0

Owner-local ZIP input path：

`C:\Users\34707\Documents\ChatGPT\批量生图\_imagegen-output-hint-guard-repair-live-canary-r2r1j.zip`

Recorded extraction root：

`C:\Users\34707\Documents\ChatGPT\批量生图\_imagegen-output-hint-guard-repair-live-canary-r2r1j\`

Required critical members + accepted SHA-256：

- `source\r2r1j_receiver.cjs` = `311be53e5b2b738e0242a12f2915dad59078bc976fba3d2572cf3a0ebbcc85bd`
- `source\r2r1j_strict_parser.cjs` = `4cebf5426e13155beb9f53ac19fac9a943f2c37d02ca8f6ed300912b750d21ce`
- `source\r2r1j_runtime_datauri_helpers.js` = `655eceb2f232bb96ac86faf4ce870440f62401102cdcb803ff0efebd5f74416f`
- `source\r2r1j_run_log.cjs` = `092dd4acce986ac31f31bb35e8c907535aae4f72ab9ec2a7ce06391c120aa3f4`
- `outputs\C-VB01.png` = `a15eb872f24f29edcdbef9bf645cfe0b835ead19663f6517f5a92538bd3811e1`
- `PREFLIGHT_EVIDENCE_R2R1J.md` = `48c956f8a9da09f882803838a65486282ff7ab2150813ae71010f0a72007ccea`
- `FRESH_READBACK_R2R1J.json` = `c131eb7bc3effc4d9c18117802fbbe2bc9ce179d094f972b97cd6f612a53bb18`

Allowed：
- exact package verification；
- staging extraction；
- exact target-root restore when absent/empty；
- no-image positive/negative receiver/parser regression；
- bounded restoration evidence / readback。

Not allowed：
- overwrite non-empty target root；
- edit extracted historical files；
- replace any accepted file with reconstructed equivalents；
- regenerate R2R1J PNG；
- any live imagegen。

### APPLICABLE_CRITICAL_CONSTRAINTS

- `PASS_CANDIDATE != PASS`；
- real-host write follows Governance 11B target-host proof；
- same path in sandbox/WSL does not prove Windows host state；
- target-root non-empty / ambiguous => fail closed, no delete / overwrite；
- restored files must be byte-identical to accepted package；
- package recovery is evidence restoration, not production-rule change；
- R2R1P live canary remains unauthorized in this Gate；
- no Secret content is involved or permitted；
- historical accepted evidence must remain immutable。

### PREFLIGHT

Before extraction：

1. prove Windows host / user / shell context；
2. prove ZIP exists at exact Owner-local input path；
3. compute ZIP bytes + SHA-256 and require exact accepted identity；
4. list archive entries without extracting and reject absolute path / traversal；
5. inspect recorded target root：
   - absent => allowed；
   - empty directory => allowed；
   - non-empty => `RETURN_PREFLIGHT_DRIFT`, no overwrite/delete；
6. prepare fresh staging directory；
7. `IMAGEGEN_CALLS=0` guard active。

Any failure => STOP with zero imagegen.

### REQUIRED_EVIDENCE

- `IMAGEGEN_R2R1J_EVIDENCE_RESTORE_AND_PREFLIGHT_REQUALIFICATION_R2R1Q.md`
- `PREFLIGHT_EVIDENCE_R2R1Q.md`
- Windows host/user/shell evidence
- ZIP path / bytes / SHA-256
- archive path-safety result
- pre-restore target-root state
- staging extraction result
- seven critical member hashes listed above
- restored-root post-write readback
- positive final-receiver result
- five negative path-policy results
- receiver / parser / runtime helper exact paths + hashes
- `IMAGEGEN_CALLS=0`
- retries=0
- production-rule delta=0
- historical-file mutation=0
- `RUN_EVENTS.jsonl`
- `RUN_RECORD.json`
- fresh readback summary

### ACCEPTANCE_CRITERIA

`PASS_CANDIDATE_R2R1J_EVIDENCE_RESTORE_R2R1Q` requires all：

1. exact accepted ZIP identity matched；
2. archive path-safe；
3. target root was absent/empty before restore；
4. restored files byte-match accepted critical hashes；
5. positive R2R1J final-receiver replay PASS；
6. five negative path-policy cases fail closed；
7. no historical file was edited after extraction；
8. R2R1P no-image preflight dependencies are again locally available；
9. `IMAGEGEN_CALLS=0`；
10. no production/formal-rule modification；
11. event/run record reconstructable；
12. fresh readback consistent。

Allowed results：

- `PASS_CANDIDATE_R2R1J_EVIDENCE_RESTORE_R2R1Q`
- `RETURN_PREFLIGHT_DRIFT`
- `RETURN_TEST_FAILURE`
- `RETURN_IMPLEMENTATION_DRIFT`
- `RETURN_TARGET_HOST_EXECUTION_UNAVAILABLE`

### ROLLBACK_STATUS_OR_PLAN

- No production state is changed；
- restore only into absent/empty historical evidence root；
- if extraction/hash verification fails before promotion, delete only fresh staging；
- if post-promotion readback fails, do not mutate files to repair them in place；return precise failure and preserve evidence；
- never overwrite an existing non-empty historical root。

### OWNER_ONLY_ACTIONS

`ONE MINIMAL FILE PLACEMENT REQUIRED`

Owner only needs to place the exact recovered ZIP at：

`C:\Users\34707\Documents\ChatGPT\批量生图\_imagegen-output-hint-guard-repair-live-canary-r2r1j.zip`

No extraction/debugging is required from Owner; Executor performs all validation and restore steps.

### REVIEWER_TO_EXECUTOR_RELAY

Start from current GitHub main. Execute only R2R1Q.

Read：

1. current `comic-narrative/REVIEWER_HANDOFF.md` CURRENT_GATE / Relay；
2. `comic-narrative/reviews/imagegen-speed/IMAGEGEN_OUTPUT_HINT_TWO_CONCURRENT_LIVE_CANARY_R2R1P_REVIEW.md`；
3. `comic-narrative/reviews/imagegen-speed/IMAGEGEN_OUTPUT_HINT_GUARD_REPAIR_LIVE_CANARY_R2R1J_REVIEW.md`。

Do not scan broad history.

Required sequence：

1. prove real Windows host/user/shell；
2. verify exact ZIP at specified input path；
3. verify ZIP SHA/bytes + path safety；
4. inspect target root；non-empty => STOP；
5. extract to fresh staging；
6. verify critical hashes；
7. promote to recorded root only after all hashes PASS；
8. fresh readback restored root；
9. run positive final-receiver no-image sample；
10. run five negative cases；
11. verify R2R1P local preflight dependencies now available；
12. `IMAGEGEN_CALLS=0`；
13. fresh readback；
14. STOP。

Do not create live canary tasks and do not imagegen.

### EXECUTOR_TO_REVIEWER_RELAY

```text
结果：PASS_CANDIDATE_R2R1J_EVIDENCE_RESTORE_R2R1Q / RETURN_*
改动：一句话说明 exact R2R1J accepted ZIP 是否恢复到 recorded root。
验证：一句话说明 ZIP identity、critical hashes、positive/5 negatives、IMAGEGEN_CALLS=0 与 fresh readback。
问题：NONE，或“阻塞短语：一句通俗解释”。
回滚：一句话说明 target root 原始状态、staging/restore 状态，以及是否发生覆盖。
请 Reviewer 检查：核对 accepted ZIP identity、host-local restore、hashes、positive/negative regression 与 zero imagegen。
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
- 当前 R2R1Q：Owner Windows 本地恢复 exact accepted R2R1J evidence package；本轮 `IMAGEGEN_CALLS=0`；
- exact local target path：必须由 preserved Gate evidence 证明，未证明则 `UNKNOWN` / RETURN。

## CURRENT_ROLLBACK_STATUS

- GitHub 正式 Part 0–4.5 当前基线保持可追溯；R2R1L 已按 Owner 明确授权仅修改 Part 4 §25 的画幅 / 尺寸合同。
- R2R1J receiver patch 必须保留 pre-repair source/hash，可在 preflight failure 时恢复。
- H019 完整重跑尚未发生，不存在因 takeover 需要回滚的 H019 新生产状态。

## UNRESOLVED

1. **R2R1Q evidence restore**：需把已找回的 exact accepted R2R1J ZIP 恢复到 Owner Windows recorded root，并重新通过 positive / five-negative no-image preflight。
2. **R2R1P two-concurrent fast-path canary**：R2R1Q PASS 后再恢复；当前没有任何并发 live evidence。
3. **Final video 1920×1080 adaptation implementation**：标准画布已确定，具体视频阶段适配仍待 Part 5 正式迁移时实现。
4. **C-VB01 historical content QA**：旧 PNG 不接受为 final production asset。
5. **Part 2**：11 项 edit map 等待 Owner 逐项批准。
6. **Style Plate / Part 3→Part 4 Style contract / Part 4 H019 refinements**：仍待独立 Gate。
7. **Part 5 / Part 6**：尚未正式迁移。

## NEXT_STEP

执行并 Review `R2R1Q`：

`exact R2R1J ZIP → Windows host identity → ZIP/hash/path-safety → absent/empty target check → staging extract → critical hashes → restore → positive + 5 negatives → fresh readback → STOP`

R2R1Q 正式 PASS 后，再重新授权 R2R1P 两路 live canary；不重做 R2R1J 生图。

## OWNER_ACTION_REQUIRED

- **R2R1Q 最小动作：**下载已找回的 `_imagegen-output-hint-guard-repair-live-canary-r2r1j.zip`，保存到 `C:\Users\34707\Documents\ChatGPT\批量生图\`；不要解压、不要修改。
- 保存完成后，将当前 `REVIEWER_HANDOFF.md` 的 R2R1Q Relay 交给 Windows / Codex Executor。
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
- Part 2 pending edit map: `comic-narrative/reviews/part2/PART2_FORMAL_EDIT_MAP.md`
- Current formal Part 3: `comic-narrative/part3/STORYBOARD_VISUAL_DIRECTOR.md`
- Current formal Part 4: `comic-narrative/part4/IMAGE_ASSET_EXECUTION.md`
- Current formal Part 4.5: `comic-narrative/part4_5/ASSET_REUSE_LIBRARY.md`
- Takeover discovery review: `comic-narrative/reviews/governance/TAKEOVER_DISCOVERY_20261003.md`
