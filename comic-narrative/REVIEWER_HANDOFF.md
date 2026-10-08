# 漫画叙事 — REVIEWER_HANDOFF

> GOVERNANCE=`vps-project-governance/VNEXT.md v0.2.7`  
> CURRENT_STATE_AUTHORITY=THIS_FILE  
> LEGACY_HISTORY=`comic-narrative/history/HANDOFF.md`  
> LAST_RECONCILED=2026-10-08

本文件只维护**当前状态、当前 Gate、关键约束和下一步**。历史迁移、旧执行轮次、长篇审计与失败链不再堆在根目录启动面；需要追溯时读取 `history/`、`reviews/` 或 `source-snapshots/`。

## PROJECT_GOAL

建立可复用的漫画叙事生产链：

`选题 → 剧本 → 最终配音/SRT → 分镜 → 图片资产 → 素材复用 → 视频时间轴/成片`

当前正式实现覆盖 Part 0–4.5；Part 5–6 尚未完成正式迁移。

## PROJECT_STAGE

`TOPIC_48_CURATED_SHORTLIST / FORMAL_PASS_PENDING`

当前状态：

- **当前首要任务**：对精简后48条逐题完成实际发生/近期关注、科技因果、D1–D5与3–5分钟独立故事的正式审查；未取得PASS者不能进入Part2制作。

- imagegen executor reliability 已正式封板；
- Windows 本地 `批量生图` 深度清理 R2 已正式 PASS；
- 本地文档/证据去冗余 R3 已正式 PASS；
- **2026-10-08 Owner 最新选题精简**：以最近一次对话排序 S6/A25/B52/R17 为基线，从B删35（67.3%），R（Owner称C档）17条全删，现行 Part0 48条：S6/A25/B17，0正式PASS。历史删除条目保留在Git提交；H编号不连续，以防误映射。
- 当前无 live imagegen；legacy H002（AI性格画像）R3、legacy H007（AI旅行规划）R3 既有正式回填保持不变。legacy H015（天气预报）已移出当前库存，其历史包仅保留为历史资产，不再继续 REVIEW、回填或生产。
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

- **Part 0 / Part 1**：Part1正式两处最小补丁继续有效；**本轮对话热点优先没有写入Part1**。当前 Part0 为48条活跃精选：S6/A25/B17、正式制片PASS=0。每题一个题面、一组故事问题，来源及审查状态保留；市场信号类型8条FREQUENCY_EVIDENCED、3条ATTENTION_EVIDENCED、37条CATEGORY_PROXY（不能冒充细题热度）。正式Gate仍待完整回读。
- **Topic library**：现行48条沿用原H001–H100中的非连续编号，52条被删（B35+C/R17），48条统一套话式反常与Controlling Question已改为对应题目的问题；23条套话式人物过程/科技改变/观众收获已改写；H019/H028来源更新为2026年国内现实案例，H080/H091改写成当年国内直接题材并保留上版标题。旧资产身份仍按标题/来源核对。
- **Part 2**：`part2/SCRIPT_NARRATIVE.md` 为现行正式规则；已按 Owner 批准的最小方案加入“内部选题题面 ≠ 最终发布标题”的发布包装步骤：剧本锁定后生成 3 个差异化标题候选、1 个推荐标题、开场 Hook 与封面方向，并做真实性 / 非同义改写 / 非机械重复检查；11 项 edit map 仍等待 Owner 逐项批准，未写入正文。
- **Part 2.5**：`part2_5/VOICE_SRT_ALIGNMENT.md` 为正式配音 / SRT 对齐基线。
- **Part 3**：`part3/STORYBOARD_VISUAL_DIRECTOR.md` 为当前视觉导演基线；长期角色 / 画风资产位于 `part3/assets/`。Scene System 已明确按剧情 Scene / 状态阶段检查，不把物理地点数量当作 Scene 数量。
- **Part 4**：`part4/IMAGE_ASSET_EXECUTION.md` 保持封板；图片规划 Agent 与生图执行 Agent 职责分离。单集高频且连续性重要、漂移风险高的临时角色须在批量生图前判断是否需要 episode-local mini master；素材包完成前须跨 Part 2/2.5/3/4/4.5 与当前 imagegen 合同做整体复查。
- **Part 4.5**：`part4_5/ASSET_REUSE_LIBRARY.md` 为当前素材复用与入库基线。
- **X 素材包库（仓库外 Library）**：此前 Owner-accepted 包保持不变，不随多轮题库重编号自动变更题目身份。旧 H002 性格画像、旧 H007 旅行规划的 R3 包仍为历史接受资产，但不是当前 H002/H007；旧 H024 自助收银在旧 30 题快照曾对应 H005，在**当前新 100 题库已经不能按该编号认定**。本轮未改 X 库。
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

**2026-10-08 最新精简已生效**：Part0当前48活跃精选（S6/A25/B17）；52条旧题正文已删并由Git保存历史。Part1未增加“近期热点优先”新规。0正式PASS，仍须逐题审核。

## CURRENT_GATE

### GATE_ID
TOPIC_48_EDITORIAL_SHORTLIST_FORMAL_VALIDATION_PENDING

### OBJECTIVE
Owner 本轮要求：沿用最近一次对话的S6/A25/B52/R17，B类删除约三分之二，C类（上一轮R）全删；再次复核后更新**原文档**。已完成 **S6/A25/B17 = 48活跃候选**，B删除35、C/R删除17，合计52条。

### CURRENT_READBACK / QA
- Part0活跃题 = 48；唯一原编号 = 48；唯一最终题面 = 48；原始Source/Signal可回读URL覆盖 = 48。非连续编号有意保留。
- 本轮清除了原100库中7处无独立编号历史段落：其中5处在被保留的父编号内被明确截去，2处随父条目删除。
- 已重写48条反常/Controlling Question的模板句、23条通用Human Process/科技改变过程/Audience Payoff；按2026年国内报道重建 H080/H091，并更新H019/H028现实来源，事实范围明确保留。
- 状态计数：正式制片PASS 0；HOLD_SIGNAL 37；CANDIDATE / FORMAL_GATE_PENDING 11。市场标识：FREQUENCY_EVIDENCED 8，ATTENTION_EVIDENCED 3，CATEGORY_PROXY 37。**这只是来源和编辑层的精选，不意味着48条均取得正式PASS**。
- 近期事件/近期讨论/UP相近选题优先是本次排序口径，**不得据此修改Part1正式规则**。同类视频有播放不等于每条候选能获得同样播放。

### MANDATORY_REVIEW_STOP
STOP_AT_EDITORIAL_REVIEW=YES；严格核实真人问题证据、科技因果、具体受众市场信号、正式D1–D5及每条3–5分钟独立故事后，才能签发PASS并进入Part2。绝不凭配额或题库精选数量自动签发。

### CONSTRAINTS
- 不修改Part2–Part4.5和既有X素材/图像及配音执行包，不触发imagegen或 live executor。
- 保留旧H-ID，不将当前同号内容静默当成旧视频题目。删去内容由Git历史恢复。
- 监管案件区分指控、调查和事实；产品FAQ只证明指定产品条件，不能证明真人困扰。
- H064/H067/H068、H042/H096、H074/H089、H049/H051 属于需要重点区分主机制/人物后果的簇，不能未经新证据同构量产。

### ROLLBACK
本轮变更仅是 GitHub 文字与条目裁剪；从上一轮 Part0 提交 `f56d199068aba2c3d1ce4abb58367ae6181832d1` 可恢复100条历史快照（但其中原先隐藏残留必须另外处理）。原H002/H007历史制作包不改。

### OWNER_ONLY_ACTIONS
NONE — Owner已授权正式精简，不需额外确认；后续只有满足正式选题Gate后才能制片。

### EXECUTOR_TO_REVIEWER_RELAY
DONE_EDITORIAL_PRUNE_48 / S6_A25_B17 / C17_REMOVED / B35_REMOVED / FORMAL_PASS_0.

## CRITICAL_CONSTRAINTS

- **ID migration warning**：现行48条使用旧H001–H100中的非连续编号，与历史H001–H030、H001–H094及已交付素材不属于同一批题；必须按题名/来源/制作时编号确认身份。
- `PASS_CANDIDATE != PASS`。
- 已正式 PASS 的能力默认继承；只有相关实现/接口/运行环境发生可能影响能力的变化，或新证据与旧 PASS 冲突，才要求重验。
- imagegen concurrency = 2；不主动测试 3+。
- 16:9 是唯一正式画幅；1920×1080 是 target/final canvas；native pixel target = NONE。
- canonical imagegen fast-path 位于 `tools/imagegen-fast-path/`。
- production output 必须使用 `outputs/<task_id>/<task_id>.png` nested destination。
- 历史 `history/HANDOFF.md` 不作为 Reviewer / Executor 默认启动面。
- `reviews/` 是正式 Review 证据，不等于当前待执行 Gate。
- 已从当前题库删除的 Case（包括旧 H015 / H019 等）只保留历史资产；未经 Owner 新决定不得恢复为 active production target。

## DEFAULT_EXECUTION_CHANNEL

- Canonical docs / reviews：GitHub `main`。
- 当前状态：Part0精简为48条活跃：S6/A25/B17；FREQUENCY_EVIDENCED 8、ATTENTION_EVIDENCED 3、CATEGORY_PROXY 37；0正式PASS，旧X库保留，无live Executor。
- 下一动作：优先完成48条的严格来源全文复查、同题中国受众证据、科技因果和D1–D5；37条CATEGORY_PROXY维持HOLD，未正式通过不得进入Part2。
- Windows/Codex local paths 必须由对应 Gate 证明，不从历史路径猜测。

## CURRENT_ROLLBACK_STATUS

- Part 0–4.5 canonical baseline 保持可追溯。
- imagegen fast-path canonical tools 已封板并留在仓库。
- 本地 deep cleanup R2 已完成：confirmed disposable 已删除，H019 已归档，可按 exact mapping 恢复 archive 项。
- H019 未开始新的 41-task production run，因此无新生产输出需要回滚。

- **H007 SRT 可读性修订与回填（Owner 2026-10-05）**：在不改 Part 2 口播文字、不跨 Visual Beat 合并 Cue、不改变 42 个 Beat 时间边界的前提下，将 SRT 从 72 Cue 调整为 60 Cue；随后 Owner 接受并正式回填为 H007 R3。X 库正式 ZIP SHA-256=`69bdb4787e52f04572d0fe07064fe31a174a60458053804cfa4d1bf55e3e68c9`。

## OWNER_DISCUSSION_CONTINUATION

- **现实证据扩库至 100 候选（Owner 2026-10-08）**：旧 30 题通过 Git 历史恢复；对另一版 100 候选再做质量删改，剔除 34 条旧候选、补充 34 条监管与真实研究案例，当时 H001–H100 均为 PASS_CANDIDATE（历史快照，现行已重新分档与标记RETURN/HOLD）。正式跨题去重、独立故事价值与双证据再审未完成，不因达到 100 自动视作 PASS。

- **现实证据 Gate 94→30（Owner 2026-10-08，历史已覆盖）**：Owner 授权不保数量；Part 1 已升级、Part 0 保留 30 / 删除 64、H001–H030 重新编号。旧 94 题冻结现已失效，历史素材保持。

- **100→94 最终筛选（Owner 2026-10-05，历史）**：当时删除 C 6 题、保留 A/B 94 题且暂停修改；已被 2026-10-08 新指令覆盖。

- **64→100 扩库（Owner 2026-10-05）**：在上一轮结构筛选保留的 64 题基础上新增 36 个全新候选 H065–H100；扩库遵循 Part 1 五项硬检查、D1–D5、Reach / Asset Value、生产优先级和母题簇复查，不恢复已淘汰弱题。

- **100→64 题库筛选（Owner 2026-10-05）**：基于上一轮 A/B/C 复查，A 42 全保留；B 43 中保留 22、删除 21；C 15 全删。删除主要优先移除母题同构较弱版本、科技因果偏弱、设备小知识、事实依赖特定平台实现或 Asset Value 明显较低的题。

- **Part 1 题库结构去重补充（Owner 2026-10-05）**：§6 已新增库级母题簇复查；即使单题未触发 D2/D3/D5，只要 Human Problem / Human Tension / 主机制 / Audience Payoff 大部分高度相似，也应视为同一母题簇，同簇默认只优先保留 1–2 个最强代表，其余降优先级或淘汰，除非人的后果、机制、受众或 Content Job 有实质差异。

Owner 于 2026-10-04 要求把本轮长对话整理进 `main`，用于下一 Reviewer 续接，但暂不修改 Part 0–4.5 / `SKILL.md` 正式正文。

续接入口：

- `reviews/continuity/OWNER_DISCUSSION_HANDOFF_20261004.md`
- `reviews/continuity/MATERIAL_PACKAGE_FOUR_SUPPLEMENTAL_CHECKS_20261004.md`
- `reviews/continuity/PART2_CUSTOM_STORY_EXECUTION_AND_H002_R3_CANDIDATE_20261005.md`

发布标题 / Hook 调研已完成，Owner 已批准最小接入方案并正式写入 Part 2：Part 1 继续保留内部 WHY 题面，最终发布包装在 Part 2 剧本锁定后编译；本轮仅在 Part 1 §6 追加生产优先级句，不引入标题公式库。历史发布标题候选不写入题库作为永久标题，最终标题仍以对应 Part 2 锁稿后的真实故事为准。

Owner 已确认的四项批量素材包补查现已完成正式对齐：Scene System 剧情状态已明确写入 Part 3；长 hold 原规则已完整覆盖、未重复修改；高频临时角色 Mini Master 判断与完成前跨模块整体复查已写入 Part 4。独立清单继续保留为来源记录。

H003 / H004 本轮测试仅在续接文档记录状态摘要；完整测试脚本、分镜和 ZIP 本轮未提交为 GitHub canonical production package。

当前新增两点续接记录：

- **机制标签与画面密度观察（历史）**：旧样本曾观察到 H015 / H016 / H017 等机制题出现更长 hold；这些题现已移出当前库存，因此该观察仅保留为历史执行信号，不构成当前选题规则。
- **批量素材包生产状态**：仓库外 X 部分历史上曾收录 H002、H003、H004、H007、H010、H015、H016、H017、H024、H025；本轮题库裁剪不自动删除这些历史资产。H002、H007 既有 R3 accepted 状态保持；被删题对应资产不再视为 active production package。
- **Part 2 批量执行纠偏（Owner 2026-10-05）**：H003/H004 不再作为后续剧本参考样板；后续剧本只按当前 Part 2 正式规则逐篇定制。批量任务可共享规则、事实核验和 QA，但不得共享同一套开场、剧情骨架、转折或收束模板。每批完成后必须追加跨稿“同构检查”；若只是换题材套同一结构，应 RETURN 重写。此前 H015/H016/H017 等长讲解问题被确认主要属于执行与 Reviewer 漏检，而非 Part 2 缺少“演出来/防讲课”规则。
- **Part 2 历史重写状态**：原 H002/H007 R3 包仍为 accepted 历史资产，但现行 H002/H007 是新题；原 H024 自助收银曾在旧 30 题快照编号为 H005，但新 100 题库存不再沿用此映射；历史包一律按题名、制作时编号及来源核对。

## UNRESOLVED

1. **下一测试目标**：当前仅48活跃精选候选（S6/A25/B17），不代表48个正式PASS；优先补近期待验证题的直接市场信号和故事证据。
2. **Part 2**：11 项 edit map 等待 Owner 逐项批准。
3. **Style Plate / Part 3→Part 4 style contract**：仍有后续独立对齐空间。
4. **Part 5 / Part 6**：尚未正式迁移。
5. **Final video 1920×1080 adaptation**：留待 Part 5 实现。
6. **发布标题层 / 防科普化**：结构问题已解决并写入 Part 2；具体 episode 的最终发布标题仍需在该剧本锁稿后编译。

## NEXT_STEP

下一轮第一件事：**优先补S6/A25中尚缺的国内同题受众证据，并继续完成严格因果/真人遭遇/D1–D5与故事价值审查；已删C17不得再进入Part2。**

- 只有逐题证据核实与故事价值都通过，才能升级正式 PASS；
- 仍有不支持题面的来源、重复或贫乏故事价值时，直接删除/替换，不将猜想写为事实；
- 不继续旧 H015 天气预报 Review；
- 不自动恢复任何已删除题；
- 不启动 live imagegen，除非新的正式 Gate 明确要求。

## OWNER_ACTION_REQUIRED

- 暂无需要Owner执行的操作；目前没有达到全部正式Gate的制作选题。
## EVIDENCE_POINTERS

- Current 48-topic curated library: `comic-narrative/part0/TOPIC_LIBRARY.md` (commit `681becf3e9acc1d4a958103a49cfa31c4488cba9`)
- Part1 X/market signal minimal addition: `comic-narrative/part1/TOPIC_STRATEGY.md` (commit `abd9ae6ef06a1305a0a7c5308952840434aba2a8`)
- Part1 historical examples fixed: comic-narrative/part1/TOPIC_STRATEGY.md (commit 192074b4f0c18725cf35f905aac3a0fbba38dfab)

- Current Part1 minimal X+market gate: comic-narrative/part1/TOPIC_STRATEGY.md — commit abd9ae6ef06a1305a0a7c5308952840434aba2a8 (the earlier 00be98 reality-gate version was restored/replaced)
- Quality filtered Part 0: comic-narrative/part0/TOPIC_LIBRARY.md — commit c85db1703f006bfdc3e0a26e9205d284caa84600

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
