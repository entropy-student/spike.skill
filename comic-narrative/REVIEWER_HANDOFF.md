# 漫画叙事 — REVIEWER_HANDOFF

> GOVERNANCE=`vps-project-governance/VNEXT.md v0.2.7`  
> CURRENT_STATE_AUTHORITY=THIS_FILE  
> LEGACY_HISTORY=`comic-narrative/history/HANDOFF.md`  
> LAST_RECONCILED=2026-10-05

本文件只维护**当前状态、当前 Gate、关键约束和下一步**。历史迁移、旧执行轮次、长篇审计与失败链不再堆在根目录启动面；需要追溯时读取 `history/`、`reviews/` 或 `source-snapshots/`。

## PROJECT_GOAL

建立可复用的漫画叙事生产链：

`选题 → 剧本 → 最终配音/SRT → 分镜 → 图片资产 → 素材复用 → 视频时间轴/成片`

当前正式实现覆盖 Part 0–4.5；Part 5–6 尚未完成正式迁移。

## PROJECT_STAGE

`REVIEW_PENDING / H015_R3_CANDIDATE_BUILT`

当前状态：

- imagegen executor reliability 已正式封板；
- Windows 本地 `批量生图` 深度清理 R2 已正式 PASS；
- 本地文档/证据去冗余 R3 已正式 PASS；
- H019 酒店价格 41 图生产 **DEFERRED_BY_OWNER**，当前不测试该剧本；
- 当前无 live imagegen；H002 R3、H007 R3 均已正式回填 X 部分。H015 已完成新 R3 候选素材包**建立**，按 Owner 要求本轮未做独立 REVIEW、未回填 X 库；下轮先 REVIEW H015。
- X 部分 H002 当前唯一有效版本为 `H002_AI性格画像_Part4_最终图片执行包_READY_R3.zip`，SHA-256=`0c754be5d94153afccc38b0be632b0d693d7e274e9d9e1a62645b96e6a9b9176`；旧 R2 已移出 X 库并保存在仓库外交接历史目录。
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
Part 5  视频时间轴 / 合成 / 成片      [PENDING]
  ↓
Part 6  执行与项目管理               [PENDING]
```

## CURRENT_ACCEPTED_STATE

- **Part 0 / Part 1**：正式基线已建立。Part 0 当前共有 **100 个 Case**：H001–H023 保留为已接受 PASS 基线；H024–H100 为扩展候选 `CANDIDATE / EVIDENCE_PENDING`。Owner 已授权直接调整后 80 题，本轮冻结 H001–H020，对 H021–H100 做类型配平，并重写 9 个过度机制化候选。当前按主类型统计：机制 20、判断 18、惊奇 15、实用 15、体验 10、反思 8、趋势 8、探索 6。
- **Topic library**：H001–H100 均保留在 `part0/TOPIC_LIBRARY.md` 供历史去重与选题；其中 H001–H023 为 accepted PASS，H024–H100 为候选储备。候选必须先完成 Part 1 事实证据 Gate 与最终 D1–D5，再允许进入 Part 2；内部题面仍不自动等于最终发布标题。
- **Part 2**：`part2/SCRIPT_NARRATIVE.md` 为现行正式规则；已按 Owner 批准的最小方案加入“内部选题题面 ≠ 最终发布标题”的发布包装步骤：剧本锁定后生成 3 个差异化标题候选、1 个推荐标题、开场 Hook 与封面方向，并做真实性 / 非同义改写 / 非机械重复检查；11 项 edit map 仍等待 Owner 逐项批准，未写入正文。
- **Part 2.5**：`part2_5/VOICE_SRT_ALIGNMENT.md` 为正式配音 / SRT 对齐基线。
- **Part 3**：`part3/STORYBOARD_VISUAL_DIRECTOR.md` 为当前视觉导演基线；长期角色 / 画风资产位于 `part3/assets/`。Scene System 已明确按剧情 Scene / 状态阶段检查，不把物理地点数量当作 Scene 数量。
- **Part 4**：`part4/IMAGE_ASSET_EXECUTION.md` 保持封板；图片规划 Agent 与生图执行 Agent 职责分离。单集高频且连续性重要、漂移风险高的临时角色须在批量生图前判断是否需要 episode-local mini master；素材包完成前须跨 Part 2/2.5/3/4/4.5 与当前 imagegen 合同做整体复查。
- **Part 4.5**：`part4_5/ASSET_REUSE_LIBRARY.md` 为当前素材复用与入库基线。
- **Imagegen executor reliability**：正式 **PASS / CLOSED**。生产默认继承：
  - Codex built-in imagegen；
  - concurrency = 2；
  - canonical fast-path tools = `comic-narrative/tools/imagegen-fast-path/`；
  - `output_hint → canonical consumer → official hint parser → SourcePath → local copy → SHA/dimensions → QA`；
  - production destination = `<run_root>/outputs/<task_id>/<task_id>.png`；
  - native pixel target = NONE；
  - 16:9 为唯一正式画幅；
  - 1920×1080 为 target/final canvas；
  - native pixel mismatch 本身不失败、不重生。
- **H019 酒店价格**：历史 41-task 执行包及 reconciliation prep 均保留为历史/候选生产材料，但 Owner 已明确暂停，不是当前任务。
- **Local workspace cleanup R2**：正式 **PASS**。已删除 206 个 confirmed disposable 文件（33,241,076 bytes），归档暂停 H019 workspace 52 文件（316,939,451 bytes，52/52 SHA-256 verified），保留 2 个 KEEP_UNKNOWN 测试图片；`.git` 未改、tracked path=0、tracked changes=0。Executor 的 `RETURN_TEST_FAILURE` 由 Reviewer 纠正为 PASS，因为该本地 repo baseline 本身无 HEAD/remote/tracked files，porcelain-clean 条件不适用。
- **Local doc/evidence purge R3**：正式 **PASS**。17 个 proven-redundant 文件被删除，回收 153,449,311 bytes；3 个 H019 image-review ZIP 在 36/36 PNG hash 对应证明后删除；unique `审核其他资料.zip` 与未证明冗余的 QA/RUN/REVIEWER/queue 文档保留；H019 inputs/refs/tasks/manifest/36 outputs preserved；IMAGEGEN_CALLS=0。
- **Part 5 / Part 6**：PENDING。

## CURRENT_GATE

### GATE_ID

H015_R3_CANDIDATE_BUILT_REVIEW_DEFERRED

### OBJECTIVE

记录 H015 R3 候选素材包已完成建立，但独立 REVIEW 由 Owner 明确延后到下一轮；在 REVIEW 前不回填 X 部分、不启动 live imagegen。

### MAX_ENDPOINT_THIS_ROUND

- no live imagegen；
- H002 X-library backfill completed；
- H007 X-library backfill completed；
- no automatic live production；剩余 6 题继续逐篇重建并单独 Review；
- no H019 production；
- no cleanup rerun。

### MANDATORY_REVIEW_STOP

`STOP_AT_OWNER_REVIEW=YES`

### TARGET_AND_SCOPE

- Target：H015 天气预报 R3 candidate build；
- Candidate ZIP SHA-256：`1092c900f70ce00c3442ecce6b5b4f07e120d5b9b652198e0c7ffd011de200ce`；
- Current X-library accepted H015：仍为 R2；
- Candidate build 参数：3:08.000 / 38 Cue / 4 functional spaces / 7 Scene / 7 Semantic Shot / 38 Beat / GENERATE 28 / DERIVE_EDIT 10；
- Part 2.5 时间仍是 Owner 测试例外下的同源预估 SRT，不宣称正式真实音频对齐。

### APPLICABLE_CRITICAL_CONSTRAINTS

- H003/H004 不作为参考模板；H007 已只按当前 Part 2 / Part 3 / Part 4 / Part 4.5 正式规则完成重建与回填；
- imagegen concurrency = 2；
- no live imagegen；
- H002 / H007 已接受并回填；后续其他题仍需各自完成 Owner 认定后才替换 X 库；
- H019 = DEFERRED_BY_OWNER。

### PREFLIGHT

H007 已完成重新 REVIEW：
- Part 2 删除无必要普遍化句，并明确“由主角主动让软件补选项”；
- Part 3 修正 B17 / B23 / B26 / B38 / B41 的过程式静帧描述；
- Part 4 修复 B04 / B26 execution_mode 已为 GENERATE、但 prompt 仍残留 DERIVE 指令的合同冲突；
- 重新生成 source-aligned SRT / Beat 时间并重算长 hold；
- ZIP / Manifest / Part2↔SRT / Cue / Beat / task / DAG / prompt-mode / reference hash 独立 QA 全部 PASS；
- H003 / H004 未作为 H007 剧情模板。

### REQUIRED_EVIDENCE

- `reviews/continuity/PART2_CUSTOM_STORY_EXECUTION_AND_H002_R3_CANDIDATE_20261005.md`
- ChatGPT File Library current handoff：`/comic-narrative_当前交接/2026-10-05_Part2定制重写与H002_R3候选/`
- H007 X-library R3 ZIP SHA-256：`69bdb4787e52f04572d0fe07064fe31a174a60458053804cfa4d1bf55e3e68c9`

### ACCEPTANCE_CRITERIA

H015 本轮只完成素材包建立；未执行独立 REVIEW，因此当前没有 ACCEPTANCE 结论。下一轮必须先 REVIEW，只有 Owner 接受后才允许替换 X 部分 H015 R2。

### ROLLBACK_STATUS_OR_PLAN

无需运行态回滚；旧 H007 R2 已移出 X 当前层并保存在仓库外交接历史目录，可作为回滚基线。

### OWNER_ONLY_ACTIONS

- H015 下一轮先做独立 REVIEW；当前无需 Owner 立即决定回填。

### REVIEWER_TO_EXECUTOR_RELAY

当前没有生图 Executor 任务。不要调用 imagegen；H015 R3 candidate 仅为 BUILT 状态，下一轮先 REVIEW。

### EXECUTOR_TO_REVIEWER_RELAY

```text
NONE — OWNER REVIEW GATE ONLY.
```

## CRITICAL_CONSTRAINTS

- `PASS_CANDIDATE != PASS`。
- 已正式 PASS 的能力默认继承；只有相关实现/接口/运行环境发生可能影响能力的变化，或新证据与旧 PASS 冲突，才要求重验。
- imagegen concurrency = 2；不主动测试 3+。
- 16:9 是唯一正式画幅；1920×1080 是 target/final canvas；native pixel target = NONE。
- canonical imagegen fast-path 位于 `tools/imagegen-fast-path/`。
- production output 必须使用 `outputs/<task_id>/<task_id>.png` nested destination。
- 历史 `history/HANDOFF.md` 不作为 Reviewer / Executor 默认启动面。
- `reviews/` 是正式 Review 证据，不等于当前待执行 Gate。
- H019 当前暂停；未获得 Owner 新指令前不得启动其 41-task live production。

## DEFAULT_EXECUTION_CHANNEL

- Canonical docs / reviews：GitHub `main`。
- 当前状态：H002 R3、H007 R3 已正式回填 X 部分；H015 R3 candidate 已建立、等待下一轮 REVIEW；无 live Executor。
- X 部分 H015 仍是 R2，未被候选包覆盖。
- 下一动作：先 REVIEW H015 candidate；通过并由 Owner 接受后再考虑回填。
- Windows/Codex local paths 必须由对应 Gate 证明，不从历史路径猜测。

## CURRENT_ROLLBACK_STATUS

- Part 0–4.5 canonical baseline 保持可追溯。
- imagegen fast-path canonical tools 已封板并留在仓库。
- 本地 deep cleanup R2 已完成：confirmed disposable 已删除，H019 已归档，可按 exact mapping 恢复 archive 项。
- H019 未开始新的 41-task production run，因此无新生产输出需要回滚。

- **H007 SRT 可读性修订与回填（Owner 2026-10-05）**：在不改 Part 2 口播文字、不跨 Visual Beat 合并 Cue、不改变 42 个 Beat 时间边界的前提下，将 SRT 从 72 Cue 调整为 60 Cue；随后 Owner 接受并正式回填为 H007 R3。X 库正式 ZIP SHA-256=`69bdb4787e52f04572d0fe07064fe31a174a60458053804cfa4d1bf55e3e68c9`。

## OWNER_DISCUSSION_CONTINUATION

Owner 于 2026-10-04 要求把本轮长对话整理进 `main`，用于下一 Reviewer 续接，但暂不修改 Part 0–4.5 / `SKILL.md` 正式正文。

续接入口：

- `reviews/continuity/OWNER_DISCUSSION_HANDOFF_20261004.md`
- `reviews/continuity/MATERIAL_PACKAGE_FOUR_SUPPLEMENTAL_CHECKS_20261004.md`
- `reviews/continuity/PART2_CUSTOM_STORY_EXECUTION_AND_H002_R3_CANDIDATE_20261005.md`

发布标题 / Hook 调研已完成，Owner 已批准最小接入方案并正式写入 Part 2：Part 1 继续保留内部 WHY 题面，最终发布包装在 Part 2 剧本锁定后编译；**Part 1 未修改，也未引入标题公式库**。H001–H023 的发布标题已在对话中完成一轮候选复查，但未写入题库作为永久标题，因为最终发布标题仍应以对应 Part 2 锁稿后的真实故事为准。

Owner 已确认的四项批量素材包补查现已完成正式对齐：Scene System 剧情状态已明确写入 Part 3；长 hold 原规则已完整覆盖、未重复修改；高频临时角色 Mini Master 判断与完成前跨模块整体复查已写入 Part 4。独立清单继续保留为来源记录。

H003 / H004 本轮测试仅在续接文档记录状态摘要；完整测试脚本、分镜和 ZIP 本轮未提交为 GitHub canonical production package。

当前新增两点续接记录：

- **机制标签与画面密度观察**：基于当前已完成并进入素材包库的 8 个样本，带“机制”标签的剧本（当前 H015 / H016 / H017）出现更长的平均单画面停留时长与更多长 hold；当前只记录为**小样本相关性信号**，不等同于“机制题必然稀疏”，也暂不修改 Part 1 / Part 3 正式规则。后续批量素材包继续积累样本后，再判断是否需要建立“机制型剧本视觉密度风险”检查。
- **批量素材包生产状态**：仓库外 **X部分｜Owner认定执行包** 当前已收录 H002、H003、H004、H007、H010、H015、H016、H017、H024、H025 共 10 个题；X 部分仍不是 GitHub canonical 项目规则，不反向修改 Part 0–4.5。H002、H007 已由 Owner 接受并正式升级为 R3。
- **Part 2 批量执行纠偏（Owner 2026-10-05）**：H003/H004 不再作为后续剧本参考样板；后续剧本只按当前 Part 2 正式规则逐篇定制。批量任务可共享规则、事实核验和 QA，但不得共享同一套开场、剧情骨架、转折或收束模板。每批完成后必须追加跨稿“同构检查”；若只是换题材套同一结构，应 RETURN 重写。此前 H015/H016/H017 等长讲解问题被确认主要属于执行与 Reviewer 漏检，而非 Part 2 缺少“演出来/防讲课”规则。
- **Part 2 当前重写状态**：H003/H004 冻结且不作参考；H002、H007、H010、H015、H016、H017、H024、H025 已按 Part 2 正式规则完成定制 R2 重写与二次独立复查。H002、H007 已正式回填 R3；H015 已完成新 R3 candidate build（38 Cue / 38 Beat / 3:08.000），但本轮按 Owner 要求**未做独立 REVIEW**，X 库仍保留 H015 R2；H010/H016/H017/H024/H025 尚未完成新的下游素材包重建。

## UNRESOLVED

1. **下一测试目标**：不再限定 H021 / H022 / H023。Owner 可从 H001–H100 中选择；H001–H023 可直接进入 Part 2，H024–H100 必须先完成事实证据 Gate + 最终 D1–D5 后才能升级为 PASS 并进入 Part 2。
2. **Part 2**：11 项 edit map 等待 Owner 逐项批准。
3. **Style Plate / Part 3→Part 4 style contract**：仍有后续独立对齐空间。
4. **Part 5 / Part 6**：尚未正式迁移。
5. **Final video 1920×1080 adaptation**：留待 Part 5 实现。
6. **发布标题层 / 防科普化**：结构问题已解决并写入 Part 2；现有 23 个题的对话版标题仅作候选基准，具体 episode 的最终发布标题仍需在该剧本锁稿后编译。

## NEXT_STEP

下一轮第一件事：**独立 REVIEW H015 天气预报 R3 candidate**。

Review 必须覆盖：
- Part 2 解释密度与机制是否继续由行动/后果演出；
- Part 2.5 SRT 同源、断句与时间连续性；
- Part 3 Scene System / Semantic Shot / Visual Beat / 单帧状态 / 长 hold；
- Part 4 GENERATE / DERIVE source compatibility、连续性、prompt / dependency / output contract；
- Part 4.5 历史素材复用判断；
- 包级 Manifest / hash / DAG / 文件完整性。

当前 candidate：
`H015_天气预报_Part4_最终图片执行包_BUILT_R3_CANDIDATE.zip`
SHA-256=`1092c900f70ce00c3442ecce6b5b4f07e120d5b9b652198e0c7ffd011de200ce`

Review 通过且 Owner 接受前：**不回填 X 部分 H015 R2，不启动 live imagegen。**

后续尚待重建：H010 / H016 / H017 / H024 / H025。

## OWNER_ACTION_REQUIRED

- 当前无立即决策；下一轮先看 H015 独立 REVIEW 结果。
## EVIDENCE_POINTERS

- Legacy history: `comic-narrative/history/HANDOFF.md`
- History index: `comic-narrative/history/README.md`
- Current Part 2: `comic-narrative/part2/SCRIPT_NARRATIVE.md`
- Part 2 pending edit map: `comic-narrative/reviews/part2/PART2_FORMAL_EDIT_MAP.md`
- Current Part 3: `comic-narrative/part3/STORYBOARD_VISUAL_DIRECTOR.md`
- Current Part 4: `comic-narrative/part4/IMAGE_ASSET_EXECUTION.md`
- Current Part 4.5: `comic-narrative/part4_5/ASSET_REUSE_LIBRARY.md`
- Canonical imagegen tools: `comic-narrative/tools/imagegen-fast-path/`
- Final imagegen reliability closeout: `comic-narrative/reviews/imagegen-speed/IMAGEGEN_SYNTHETIC_SOURCE_CLEANUP_CLOSEOUT_R2R2R3_REVIEW.md`
- H019 reconciliation prep (paused): `comic-narrative/reviews/production/H019_PRODUCTION_PACKAGE_RECONCILIATION_PREP_20261004.md`
- Superseded root-only cleanup: `comic-narrative/reviews/maintenance/LOCAL_WORKSPACE_ROOT_CLEANUP_R1.md`
- Current deep cleanup plan: `comic-narrative/reviews/maintenance/LOCAL_WORKSPACE_DEEP_CLEANUP_R2.md`
- Deep cleanup R2 formal PASS: `comic-narrative/reviews/maintenance/LOCAL_WORKSPACE_DEEP_CLEANUP_R2_REVIEW.md`
- ChatGPT File Library current handoff: `/comic-narrative_当前交接/2026-10-05_Part2定制重写与H002_R3候选/`
