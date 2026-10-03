# Part 2 — 独立重新审查：演变、证据与修改建议

> 日期：2026-10-03。状态：独立 Reviewer 意见，未批准进入正式规则。
> 对照：`codex/comic-narrative-part4-snapshot` @ `064d852127ab3bb037b15ebbb9ececa6bde0e17f`；正式Part 2 blob：`e788b495162b2f82d8fea464b21f27a3f6ec8d3c`。
> 独立分支：`codex/comic-part2-reaudit-20261003`。本次只在 `reviews/part2/` 新增本文及 [完整候选](SCRIPT_NARRATIVE_REAUDIT.md)，未修改正式模块、案例或HANDOFF。

## 1. 结论先行

当前 Part 2 足以作为叙事方向和写作原则的基线，不足以仅凭Agent填完字段就可靠宣称“完成生产链中的剧本职责”。问题主要不在缺一套新的写作理论，而在机制证据、故事授权、锁定顺序、下游交付和整稿QA的操作合同较弱。

迁移没有发生可以证实的大规模叙事能力删除。因果、人物、观点、对白、潜台词、Hook、比喻、语义节奏及两种编辑模式均保留；`d8a422b`减少的主要是历史 / 审计文字，`3bedfb2`的时间细则迁出主要是Part 2.5职责迁移，不能按行数判丢能力。

但有局部弱化 / 未充分承接：关键来源没有明确传入最终机制核心输出；版本 / 时间 / 比喻停止对应的范围趋于泛称“边界”；口语连读、张弛与信息释放QA操作较薄；Part 1重复提醒和最新Part 3事实属性缺稳定交付位置。内部“谁锁什么、何时能返修”也尚不清楚。

最重要的五个问题：

1. **研究事实与故事演示的边界不够可执行。** “故事证明”容易让模拟事件替机制作证，Hook、比喻与结论可能比支持范围更强。
2. **合并了机制 / 故事 / Writer，但没充分说明锁定与重锁权限。** 正确表达优化和越权改因果之间存在操作歧义。
3. **交接不完整。** 来源、事实身份、关键非口播事件、对白说话者、语义锚点和Part 1提醒不应靠下游猜。
4. **QA偏向局部正确与原则自问。** 新策略是否回应全部重要失败、发现是否有依据、开头承诺强度、听众的信息路径和轻盈感需要整稿检查。
5. **推进与时长规则可被机械执行。** 每个换行都要状态变会误删呼吸 / 包袱；实际成音不适配目标时缺明确编辑回路。

存在结构性的**接口与权限问题**，不支持推倒当前故事模型。建议Owner审阅后作有限正式修订：先补证据 / 事实身份、锁定 / RETURN和最小交接，再增强整稿QA与误读防护。不建议现在整套恢复旧Skill，或未回归就全篇用候选替代正式Part 2。本次保持正式文件不动，完成后停止。

## 2. 证据分类与审查范围

本文使用以下区分，不把材料中的PASS混成一种证明：

| 标签 | 含义 |
|---|---|
| 当前正式 | 本基线的正式Part 1 / 2 / 2.5 / 3及SKILL |
| 历史规则 | Git原文、旧项目合同及源快照；已被覆盖部分不再生效 |
| Owner决定 | 材料明确记录的批准 / 否决；历史批准有范围，不等于今天重验效果 |
| 历史Reviewer意见 | 审查记录的判断；不自动成为当前规则 |
| Case原件 | 实际知识核心、前提、稿件、执行 / QA记录，可读取内容与版本 |
| 本次分析 | 本Reviewer据原文提出的风险或取舍；不伪装成已批准bug |
| NOT VERIFIED | 原件 / 数据 / 当前有效性未取得或未核验；不得补造历史事实 |

### 2.1 主要来源索引

| 编号 | 材料与用途 |
|---|---|
| S1 当前链路 | [Part 2](../../part2/SCRIPT_NARRATIVE.md)、[Part 1](../../part1/TOPIC_STRATEGY.md)、[Part 2.5](../../part2_5/VOICE_SRT_ALIGNMENT.md)、[Part 3](../../part3/STORYBOARD_VISUAL_DIRECTOR.md)、[SKILL](../../SKILL.md)、[HANDOFF](../../HANDOFF.md)：全文规则 / 最新批准与边界 |
| S2 知识 / 最早写作验证 | [G2 review](../../source-snapshots/02-script-narrative/direct/project/docs/G2_VALIDATION_REVIEW.md)、[G3 review](../../source-snapshots/02-script-narrative/direct/project/docs/G3_VALIDATION_REVIEW.md)：锁机制 / 前提、短稿验证与重复风险 |
| S3 G3R批准 | [G3R editorial review](../../source-snapshots/02-script-narrative/direct/project/docs/G3R_EDITORIAL_REVIEW.md)、[Narrative Style](../../source-snapshots/02-script-narrative/direct/project/docs/NARRATIVE_STYLE_CONTRACT.md)、[Writer Quality](../../source-snapshots/02-script-narrative/direct/project/docs/WRITER_QUALITY_CONTRACT.md)：Reviewer和Owner PASS的叙事 / 编辑基线 |
| S4 编辑与业务 | [Bilibili Channel Strategy](../../source-snapshots/02-script-narrative/direct/project/docs/BILIBILI_CHANNEL_STRATEGY.md)、[Content Strategy](../../source-snapshots/02-script-narrative/direct/project/docs/CONTENT_STRATEGY_AND_CONVERSION.md)：热点术语可早提、三任务与两模式、时长和发布假设 |
| S5 对白恢复过程 | [Dialogue候选](../../source-snapshots/02-script-narrative/historical/project/docs/DIALOGUE_PROSE_REFINEMENT_CANDIDATE.md)：明确SUPERSEDED并已晋升稳定规则，不是尚未批准的空候选 |
| S6 通用拆分 | [portable Writer](../../source-snapshots/02-script-narrative/direct/story-showrunner/references/WRITER_CONTRACT.md)、[编辑profile](../../source-snapshots/02-script-narrative/direct/story-showrunner/profiles/editorial/bilibili-first-person-story/PROFILE.md)、[AI知识adapter](../../source-snapshots/02-script-narrative/boundary/story-showrunner/adapters/domains/ai/TOPIC_AND_KNOWLEDGE.md)：通用叙事 / 频道配置 / domain边界分离 |
| S7 原阶段权限 | [Worker Contracts](../../source-snapshots/02-script-narrative/boundary/project/docs/WORKER_CONTRACTS.md)、[Pipeline](../../source-snapshots/02-script-narrative/boundary/project/docs/PIPELINE_AND_GATES.md)、[迁移R1](../../source-snapshots/02-script-narrative/boundary/project/docs/skill-migration-review/R1_CANONICAL_RECONCILIATION_REVIEW.md)、[迁移R2](../../source-snapshots/02-script-narrative/boundary/project/docs/skill-migration-review/R2_CANDIDATE_MIGRATION_REVIEW.md)：锁定、允许变化、协调PASS与runtime区分 |
| S8 Agent | [Knowledge](../../source-snapshots/02-script-narrative/cases/agent/02_knowledge_core.md)、[Premise](../../source-snapshots/02-script-narrative/cases/agent/03_story_premise.md)、[短稿](../../source-snapshots/02-script-narrative/cases/agent/04_script.md)、[G3R v1](../../source-snapshots/02-script-narrative/cases/agent/G3R_narrative_test_v1.md)、[v2](../../source-snapshots/02-script-narrative/cases/agent/G3R_narrative_test_v2.md)、[v2自评](../../source-snapshots/02-script-narrative/cases/agent/G3R_narrative_test_review_v2.md)：事件、前提变化、反应 / 方法与检验 |
| S9 Memory | [Knowledge](../../source-snapshots/02-script-narrative/cases/context-memory/02_knowledge_core.md)、[Premise](../../source-snapshots/02-script-narrative/cases/context-memory/03_story_premise.md)、[短稿](../../source-snapshots/02-script-narrative/cases/context-memory/04_script.md)、[G3R v1](../../source-snapshots/02-script-narrative/cases/context-memory/G3R_narrative_test_v1.md)、[v2](../../source-snapshots/02-script-narrative/cases/context-memory/G3R_narrative_test_v2.md)、[v2 review](../../source-snapshots/02-script-narrative/cases/context-memory/G3R_narrative_test_review_v2.md)：持续隐喻、后续任务回报及完美比喻风险 |
| S10 MCP | [Knowledge](../../source-snapshots/02-script-narrative/cases/mcp/02_knowledge_core.md)、[Premise](../../source-snapshots/02-script-narrative/cases/mcp/03_story_premise.md)、[短稿](../../source-snapshots/02-script-narrative/cases/mcp/04_script.md)、[G3R](../../source-snapshots/02-script-narrative/cases/mcp/G3R_narrative_test_v1.md)、[review](../../source-snapshots/02-script-narrative/cases/mcp/G3R_narrative_test_review_v1.md)：重复摩擦、命名与回报证据 |
| S11 Search | [Knowledge](../../source-snapshots/03-storyboard-visual-director/cases/g4r-v03/blind-search-answer/01_KNOWLEDGE_CORE.md)、[完整锁稿](../../source-snapshots/03-storyboard-visual-director/cases/g4r-v03/blind-search-answer/02_SCRIPT.md)、[盲评](../../source-snapshots/03-storyboard-visual-director/cases/g4r-v03/blind-search-answer/09_BLIND_REVIEW.md)、[高风险pilot review](../../source-snapshots/04-image-assets/cases/g5-blind-search-answer/17_HIGH_RISK_PILOT_REVIEW.md)：调查 / 阅读就是事件、来源真不等于结论真、模拟政策身份 |
| S12 生产补丁 | [Story Event Frame Patch](../../source-snapshots/03-storyboard-visual-director/direct/project-docs/STORY_EVENT_FRAME_PRODUCTION_PATCH_20260926.md)§7/9/10：剧本缺行动时返回、86→62是分镜经济、图像失败及Owner修正 |
| S13 原项目记录 / 听觉QA | [PROJECT_RECORD](https://github.com/entropy-student/project/blob/010df38211029cdc06a60088f1c0bfaabed07e89/ai-story-showrunner/PROJECT_RECORD.md)§18–23及9月21–23日记录、[G6A Audio QA](https://github.com/entropy-student/project/blob/010df38211029cdc06a60088f1c0bfaabed07e89/ai-story-showrunner/docs/G6A_AUDIO_QA_AND_TTS_MIGRATION_TRIAL.md)：候选到批准、常态脚本无需逐稿审批、真实音频RETURN及候选换声未正式晋升 |

还搜索了整个 `spike.skill` 可见Git树与历史，实际读取 [景岁v3.4 SCRIPT_ENGINE](https://github.com/entropy-student/spike.skill/blob/56619efc8b620f8e8304fca7a0e73ee8ba8244f5/jingsui-story-video-director/references/SCRIPT_ENGINE.md)、同版SKILL / CONTENT_DNA / HUMOR_ENGINE / LANGUAGE_PATTERN_PROFILE / QUALITY_GATES，以及 [short-form v0.1.3](https://github.com/entropy-student/spike.skill/blob/56619efc8b620f8e8304fca7a0e73ee8ba8244f5/short-form-spoken-script/SKILL.md)的内容合同、留存、口语QA与SRT规则。它们提供语句 / 承诺 / 连读等方法，不因为是可用Skill就成为当前项目规则。本次是文档溯源，没有调用它们生成剧本。

原 `ai-story-showrunner` 不在本次 `spike.skill` HEAD独立目录；在同级本地 `reference-library-worktree` 找到 `entropy-student/project.git` @ `010df38211029cdc06a60088f1c0bfaabed07e89`，只读Git原文，包括 [Pipeline](https://github.com/entropy-student/project/blob/010df38211029cdc06a60088f1c0bfaabed07e89/ai-story-showrunner/docs/PIPELINE_AND_GATES.md)、[Adapter mappings](https://github.com/entropy-student/project/blob/010df38211029cdc06a60088f1c0bfaabed07e89/ai-story-showrunner/docs/ADAPTER_FIELD_MAPPINGS.md)、叙事合同、S13记录与案例。该工作树有已有未提交修改；未编辑它，不把未提交文件自动视为批准基线。

02目录50份快照中40份映射原project仓库，已逐文件比较Git blob：39份与 [2d1bd4c](https://github.com/entropy-student/project/commit/2d1bd4c4a3d27bf507643a660b4e3637c97d41a2)完全一致；`boundary/project/docs/CURRENT_DOC_INDEX.md`与project历史ref `70dcb36`一致，blob为`06a6df8d8798e6517fdd63156dc653016dccacb1`。来源按不同历史ref保存，不是统一HEAD镜像。其余10份属于portable `story-showrunner`，逐文件与本次基线根目录对应路径的Git blob一致；Writer / profile还与上述提取提交核对。主要Narrative / Writer / Channel合同及三题核心原件也与project当前HEAD一致；Content Strategy / Worker合同则对应上述历史ref，差异不是备份失真。

原项目叙事合同及三题材料主要在 [d74fe0c](https://github.com/entropy-student/project/commit/d74fe0c4a724fef097f686dc8b9ac53009da616d)（2026-09-26）一次大批入库。9月20日各阶段批准可由PROJECT_RECORD §18–23和文内日期核验，不能编造成每阶段都有独立Git提交。完整逐次编辑 / 批准链仍为 `NOT VERIFIED`，不能说所有历史版本均已核验。

### 2.2 本地生产原件与限制

以下材料实际读取，位于本次Reviewer工作树外，不复制成额外产物。路径以 `C:/Users/34707/Documents/ChatGPT/视觉引擎/` 为根。

| 材料 | 路径 / 可证明什么 |
|---|---|
| Noodle锁稿 | `director-output/ep-ai-noodle-preference-20260927-v2-62/LOCKED_SCRIPT.md`；SHA256 `24410565af5b1434233b16a754c6e2870a0144db128b57cebd4b6725ec29ca10`。含机制、真实性、完整口播、来源、self-QA |
| Permission锁稿 | `director-output/ep-agent-permission-boundary-20260926-v3/LOCKED_SCRIPT.md`；SHA256 `de195a8a5f82b14a0bd1b2688a8ea8dce2a2a0e8c92ca3b9fe0ea43c1f878016`。含虚构身份、动作后果、最后规则、Writer Gate |
| Noodle pilot Reviewer | `reviewer-handoff/2026-09-27-noodle-pilot-review/REVIEW.md`。12图Reviewer与86→62预估；技术QA不等叙事QA；不改正确锁稿 |
| Noodle Owner图片决定 | `reviewer-handoff/2026-09-28-noodle-library-handoff/OWNER_REVIEW_DECISIONS.md`。接受总体批次，修三手 / 屏幕 / 回忆；明确不授权script/SRT重写 |
| H019下游任务 | `_h019_execution_package/H019_酒店价格_第四部分图片执行包_终检版/图片任务.json`；SHA256 `247596f838461f9f0a630d0186e8fc3c247f7a70e1ecc796e9474bb9a2c31726`。可读口播转录 / 状态，不等于原Part 2锁稿和知识依据 |

严格限制：

- H019独立Part 2锁稿 / 完整知识来源：`NOT VERIFIED`。H015完整锁稿及原包、睡眠手表 / 外卖 / 翻译等Part 2回归原件：`NOT VERIFIED`。HANDOFF称当轮有效，只能作为记录引用。
- 两个指定旧Skill附件、A/B/C原包若未取得：`NOT VERIFIED`；Git v3.4不能冒充同名附件。
- 历史source refs文本可读，不代表本次已联网重核其中所有产品能力、论文或政策在2026-10-03的真实性 / 适用性：`NOT VERIFIED`。本轮核验历史合同与稿件语义，未重新研究每个领域。
- 当前新Part 2.5链下稳定生产3–5分钟 / 较短稿的成功率、真实观众留存、频道人格辨识、日更吞吐：`NOT VERIFIED`。未观看最终发布视频，没有发布数据，不把自评分或schema PASS当故事质量PASS。
- 50份快照与对应来源Git内容同一性已核验；完整历史版本链及“完全无能力丢失”的旧结论仍为 `NOT VERIFIED`。内容相同不证明规则有效，本次依据能力与Case判断，不冒称穷尽所有历史版本。

## 3. 历史演变重建：Agent实际怎样改变

### 3.1 时间线

| 阶段 | 旧 / 新行为与证据 | 审查判断 |
|---|---|---|
| 景岁v3.4 | 从具体生活经历、反应、梗链到认知；同时写SRT / 分镜；固定签名 / 英文尾签、长度 / 比例和梗预算。Git原文可读 | 保留具体人、口语、连续梗的功能；生活观察不替代技术依据，旧跨层权限和固定模板不适合当前模块 |
| G2知识→故事 | 先KnowledgeCore锁事实与一个主机制，再StoryPremise；No-name、欲望、Gap与机制后果。S2 | 保留准确性与因果；故事不能替知识证明 |
| G3短稿验证 | 三篇约74–78秒，第三人称可用，Writer限权；术语在直觉之后，估算SRT。S2 | 历史手工写作证据；70–85秒 / 估时已被后来覆盖 |
| G3R重定基线 | S3明确Reviewer和Owner PASS；Bilibili、第一人称IP、3–5分钟、两模式；开放问题、正反力量、对白 / 潜台词、轻盈、可持续比喻 | 当前大部分能力来自这里；不能把其PASS说成程序化生产 / 受众效果验证 |
| 对白候选晋升 | S5从逐句修改建议并入稳定Narrative / Writer合同，文件SUPERSEDED | 能力后来恢复 / 加强且已合并；不把原Agent逐句修改变普遍规则 |
| Owner常态自主流程 | S13的2026-09-21记录明确正常final script无需Owner批准；仅覆盖常态，不推翻后来的叙事入口确认门 | 不恢复每稿审批，不因本次Reviewer意见新增审批层 |
| 通用Story Showrunner拆分 | [fdb5246](https://github.com/entropy-student/spike.skill/commit/fdb5246a6b5294f4b2177507b9df5a4a0fde9d02)抽Writer；[441b9e1](https://github.com/entropy-student/spike.skill/commit/441b9e1d4ae00d1cd2052ed7e7c02b3e2955b7c9)抽editorial profile；S6/S7协调通用core、domain和频道 | 迁移 / 协调PASS与runtime独立；保留轻量分工，不把旧编排框架全部带回 |
| 原样收集 | [ac933ec](https://github.com/entropy-student/spike.skill/commit/ac933ec284625ad2ce582812a0667252e9bb26af)，02快照50文件 | 收集范围证据，不等于50份逐字内容有效或完整生产验证 |
| Part 2完整合并 | [35883a0](https://github.com/entropy-student/spike.skill/commit/35883a0c1a4ab1aa360368367734393a8e38c7ed)，初稿880行，将知识 / 故事 / Writer / 时长 / 输出 / QA合一 | 主要能力迁入，不支持仅因合并就推定失效；内部阶段权限需更明确 |
| 当前叙事入口门 | [4c5460e](https://github.com/entropy-student/spike.skill/commit/4c5460ea5cd97aa803bc2a792d851868ee4effd8)：旁观/听说须Owner确认；字幕/TTS/节拍不等同 | 当前明确决定应保留；不能推广成所有第三人称句子要审批 |
| 规则与历史分离 | [d8a422b](https://github.com/entropy-student/spike.skill/commit/d8a422bbe50a362c4b0212edda186d14f87e1f0f)：去废弃清单 / 合并审计，核心叙事正文仍在 | 是归档，不是恢复被否决旧规则的理由，也不是大量删能力证据 |
| 真实音频前置 | [f7317ac](https://github.com/entropy-student/spike.skill/commit/f7317ac2b8f80a80e80586003bdb19f8b98ee215)建Part 2.5；[3bedfb2](https://github.com/entropy-student/spike.skill/commit/3bedfb2507462c124e4b076e9450bf7b50a3f376)改Part 2接口；S1最新Owner落地记录 | 正式锁稿→最终音频/SRT→分镜；不恢复Writer估正式时间 |
| 最新相邻Part 3 | [b9c561a](https://github.com/entropy-student/spike.skill/commit/b9c561a6368a5f21c3cfd5076b574f3964b41a3e)：主观视觉语法、Scene Anchor、before/after证据、Style Plate | 导演需充分故事事实输入；这些具体视觉决定不前移给Part 2 |

### 3.2 能力去向与每种差异的判断

| 能力 | 当前剩下什么 / 差异 | 独立选择 |
|---|---|---|
| 人类WHY→机制 | §1/2保留，Part 1已有题目路径；Part 2输入较概括 | 用更简单方式承接受众 / 主问题 / 收获，勿重跑选题系统 |
| 锁知识再故事再Writer | 锁定原则保留，模块内顺序未展开 | 恢复阶段权限说明，不恢复多worker治理 |
| 来源 / 版本 / scope | §2有来源边界，§18输出不完整；domain旧合同更具体 | 恢复必要来源与范围到已有机制核心 |
| 事实 / 虚构 / 假设 | §7真实性原则、§2事实保护有；下游四类事实未稳定交接 | 补必要事实身份与比喻映射，不建全句分类表 |
| 欲望 / 行动 / Gap / 转折 / 选择 | §3/4/18/19完整保留 | 保留；细化发现与结果依据，防六步模板化 |
| 事件与持续隐喻 | §5保留两种 | 保留；不穷尽所有发动方式、不恢复拟人即机制 |
| 观点为中心意义 | §6保留开放问题 / 正反力量；旧“只能余味”已G3R否决 | 坚决保留当前，可有中心意义但非演讲 |
| 术语后置 | §10默认保留，热点早名例外未显写 | 恢复已批准例外的说明，不改为百科开场 |
| Hook / 留存 / payoff | §9/19原则保留 | 增强承诺强度与具体兑现检查，不恢复Hook候选配额或总评分 |
| Dialogue / subtext /词汇 / economy | §12–14合并保留 | 保留并校验落点，非每句都藏意义 / 讲笑话 |
| 轻盈 / 张弛 | §8、20有表面 / 返回；旧Lightness Guard更可操作 | 恢复几个整稿检查，不单建理论层 |
| 连读口语QA / Hook仅读一次 | 部分原则在，实际连读与干净口播未明确 | 简单恢复检查，拒绝4.8cps与±5%字量预算 |
| 两模式 / 三业务任务 | §15/16保留 | 保留，不恢复教程第三模式、必有方法/CTA或70/30 |
| 第一人称IP /视角 | 当前比早G3更受限，Owner门后来加 | 保留已批准门，澄清真实性优先与门的范围 |
| 母题 / 近期重复 | Part 1 D4仍在，Part 2缺承接 | 恢复提醒在前提/交接中的去向，不恢复固定换场景指标 |
| 语义节奏→正式时间 | §21移交Part 2.5，详细字幕规范迁出 | 保留新链路；补文本锚点/说话者，不夺回音频 / SRT权 |
| 字幕细则承接 | Part 2.5保留主要切分/QA；部分旧两行失衡等具体项不详列 | 如需补属Part 2.5审查，Part 2仅交正确文本/轮次；本次不改 |
| 3–5分钟 / 短稿 | §17目标与不凑时长保留，实际音频冲突回审不明确 | 简单补回审；稳定生产效果证据不足 |
| 小阶段RETURN与版本传播 | §2/21部分保留，§20统一“修剧本” | 恢复最小责任路由 / 重锁，不恢复完整状态机 |
| 固定签名 / 尾签 / 秒数 / 结构比例 /梗配额 / Writer镜头权 | 已移出正式基线 | 不恢复；恢复会伤害真实证据和当前生产边界 |
| 旧发布metrics / 自动化 / 21天实验组合 | 不属Part 2内容职责；原成功数据未取得 | 不新增为Writer系统；效果 `NOT VERIFIED` |

## 4. 真实Case说明了什么，不能说明什么

**Agent：** S8旧前提的大额退款会停下；G3R v2改成先退完、全问我、再建立新边界并用下一难单验证。这是改变因果的编辑重定基线，不是普通Writer只润色同一锁前提。S3明确批准最终方向；与旧前提逐次对应的重锁原件 `NOT VERIFIED`。因此应记录版本变化，不据此给Writer静默改骨架权限。v2在59/2999之后写出难单未执行并交回控制权，是新规则得到故事内检验的正例；不是实际Agent执行实证。其91/100明确script-only自评，不是独立受众评分。

**Memory：** S9比喻确实连续变化，下一任务从笔记找到偏好形成回报，应保留。旧短稿“只要纸还在桌上，秘书记得特别清楚”可能比知识核的“当前可用工作区”更强；这是比喻语义风险，不是本轮实测模型事实。Review也警告桌子太完美、视觉可能变解释动画。可恢复映射边界与杂乱人类行为，不应将比喻类整体封杀。

**MCP：** S10短稿用新物流部已办完检验改进；G3R更口语，但新策略检验主要以“不用每个部门重新入职”的感受收束。读起来更长、更顺，不保证结尾证据更充分。此为复查线索，不宣布已批准稿失败；可以检查是否需要具体新情境，不能硬加一轮测试或为了导演便利增部门。重复入口、培训与字段解释有积累功能，也有复述风险，应逐段判断新增成本 / 策略 / 理解。

**Search：** S11知识核明确平台和政策为虚构，口播却用“有一次”“官方网页”讲述。制作交付若丢掉虚构身份，可能误读成真实平台测评；一般检索 / 证据机制与故事内政策分开。错答案进入成本表 → 读例外 → 追问支持句 → 答案改变，是证据推动判断的正例。不能因为画面长时间是页面，就认定Part 2缺故事或强加现实动作。

**Noodle：** 本地机制明确限定“用户长期设最稳妥目标压缩探索，新偏好可能更少形成”；Hook却说“最先消失……自己的口味”。本次分析认为有承诺强度风险，也可能是可辨戏剧夸张；不是Owner已判废。正文对面条从一般到想念、推荐确有多样性和重复接触的限定有价值，不能为纯故事删掉准确性桥。结尾只收藏臭豆腐，未冒称已经喜欢，是合理开放探索回报。推荐排序与重复接触是否构成不可缺的两个机制，须进一步按Part 1判断；既不能把one mechanism误作one fact，也不能以服务同一问题自动放行双机制。

**Permission：** 本地稿运动提醒段展示“不贵、不涉及别人、可撤回，仍改变个人优先级”；紧接着把“真正危险”聚焦能否撤回，末规则对这类个人优先级没有直接保护。三份午餐回扣了Hook，但不代替新权限规则覆盖全部关键失败的证明。此为本次剧本逻辑观察，不是已有Owner认定失败。应在Writer QA复核，不能交图片QA补造新授权故事。

**H019 / H015：** H019转录显示报价 / 条件 / 库存一般机制、未知个案原因和再查条件；解释是否维持期待可审，但原Part 2锁稿 / KnowledgeCore `NOT VERIFIED`。HANDOFF的现有样板归因为Part 3前置载体及Part 4编译 / QA，不能按手机图多就判Part 2坏。H015原稿 `NOT VERIFIED`，选题切口“不带伞→半路下雨→回看预报”不是可擅自补进完整锁稿的事实。

**生产QA：** S12及本地Noodle Reviewer明确86→62是图像状态经济；酸菜不可辨、咬后仍入口前、多手、屏幕反向、回忆天气不符是下游问题，不能靠重写正确锁稿处理。Owner图片总体接受也不证明Hook强度 / 所有事实推理 / 受众留存已重新独立通过。

**真实音频QA：** S13记录Search的43个发声单元与1个反应单元已生成、真实时长约143.0936秒，但Owner听觉QA仍RETURN：硬拼接、停顿过长、尾切风险、数字 / “AI” / “正确的官网”读错、局部拥挤和情感不足。它证明“有文件 / 有实测时间”不等“听起来好”；不能反推剧本文字全部有错。Writer需交清语义与必要读法，语音实现和总音频试听属Part 2.5。旧换声试验是PASS_CANDIDATE且未由这份记录正式晋升，不能把旧候选声线写成今天默认。

## 5. 逐项修改建议

每项均列“现有事实 / 发现问题 / 建议”，建议与问题不合并成已批准规则。优先级表示本次判断，不是新评分体系。

### R1｜补全来源与适用范围的交付（优先）

**现有事实：** 当前§2要求来源 / 证据边界，§18.1最终机制核心没有明确来源字段；S6/S7及Case均有source refs和必要scope。

**发现问题：** 下游可能只获得一句机制和事实列表，无法辨别来源支持的一般规律与个案。是输出明确性缺口，不是已证明每次执行都丢来源。

**建议：恢复到现有产物。** 关键主张→支持来源 / 范围→关键文本对应；需要时记录版本 / 时点 / 对象 / 核验状态。不要求逐句证据标签或新独立事实系统。

**行为 / 收益 / 风险：** 锁稿前核实强主张，下游收到同一来源范围；减少泛化和错误“相关链接即支持”。多一点研究 / 核对成本；普通场景动作不强制外部实证。**待Owner决定：** 是否接受最小交付字段及证据不足的处置强度。

### R2｜把“故事证明”与研究证据分开（优先）

**现有事实：** §3机制改变结果、§6故事先证明；§7允许虚构但不冒充亲历。S8/S9/S11及本地稿有模拟 / 比喻。

**发现问题：** 虚构场景能按作者安排成功，却不能证明真实产品或个案因果；Hook和比喻也可能夸大。Noodle/Memory风险详见§4，均为本次判断。

**建议：澄清并补QA。** 研究主张、故事内事件、人物怀疑、一般示范和观点分清；故事演示已支持关系 / 测试价值取舍，不作实证。比喻说明对应 / 不对应。Hook与标题强度不超过机制与正文。

**行为 / 收益 / 风险：** 不用真实来源核验虚构午餐数量，但核验一般因果；不把虚构官网当实测。避免虚构证据洗成事实；内部标签过密会破坏写作，应只标关键歧义。**待Owner决定：** 是否采用事实身份 / 映射和承诺强度检查，而非禁止虚构故事。

### R3｜明确本模块内阶段、锁定和重新打开（优先）

**现有事实：** §1由Part 2构造机制 / 故事；§2却禁止Writer改已锁骨架 / 欲望。S7明确Knowledge→Story→Writer；当前§21已允许实质修改后重锁。

**发现问题：** Agent可能从第一句就认为自己无权设计故事，或认为一个Agent承担三职即可一路覆盖。Agent版本差异不能作为普通Writer改骨架许可。

**建议：以更简单方式恢复。** 一个模块串明机制核→前提→语言→分层QA→锁稿；修失败事实的最小阶段，显式重锁受影响部分，传播到2.5 / 3。无需三个Agent或普遍Owner门。

**行为 / 收益 / 风险：** 可以有依据返修，不“顺手润色”改变已发生状态；也不把锁稿理解为永不允许改稿。轻量版本管理有成本，但比整包多事实更少。**待Owner决定：** 是否接受顺序 / 状态记录；已有批准对象的权限不能由本提案放宽。

### R4｜承接Part 1的题目合同、重讲与重复提醒

**现有事实：** Part 1§5 D4允许继续但必须提醒下游换故事 / 视觉结构；Part 2只泛称已通过题目。S2/S4早就发现老板 / 秘书跨题重复。

**发现问题：** 人类问题、WHY、收获、REVISIT边界或母题提醒可能丢失；Part 2也可能把meaning seed当必证明观点。

**建议：最小输入 / 输出承接。** 引用已有题目依据和提醒，前提锁前解决故事表达重复，纯视觉提醒传Part 3；实质换主问题回Part 1。

**行为 / 收益 / 风险：** 不新增一轮D1–D5、Ledger维护或强制换地点 / 配角。避免题目没重复但剧情反复同一模板；已有资料不必重填。**待Owner决定：** 是否接受承接内容，非新增选题系统。

### R5｜明确人物发现与最终策略的根据（优先）

**现有事实：** §3/18/19有转折 / 选择 / 结果；Agent和Search给具体证据 / 后续情境，MCP / Permission有较抽象收束线索。

**发现问题：** 填了“理解 / 结果”即可自PASS，但人物凭什么知道、结尾规则是否回应前文关键困难不一定成立。Hook回扣不是所有机制问题都已解决。

**建议：补整稿QA而非剧情配额。** 定位发现依据、转折证据、重要失败→最终选择 / 边界的对应；需要时用新情境 / 可见结果检验，也允许诚实保留局限。

**行为 / 收益 / 风险：** Agent不复制每稿多一轮测试；有规则缺口则修前提/结论，不交Part 3发明。增强故事回报与行动可信度；硬执行会增加尾段，应按意义而非测试数量。**待Owner决定：** 是否采用此验收标准；既有Case线索不是已批准返修单。

### R6｜状态推进按叙事单元检查，不按排版行

**现有事实：** §4“每一段变化”、六问与删除测试；§12–14同时允许潜台词 / 反应 / 停顿。S8/S10有“鼠标 / 很好 / 审批插件”等分行落点。

**发现问题：** 机械逐行删会伤喜剧、伏笔、setup和张力。这里是规则误读风险，不是已经实测新Agent一定这样写。

**建议：澄清 / 保留当前能力。** 主要段落推进；局部反应、铺垫、准确性桥、回扣服务既有 / 后续变化。删除测试兼顾理解、张力、节奏和兑现。

**行为 / 收益 / 风险：** 六问不变每句话任务；避免论文式问题→结论或全程强冲突。例外不能用来放过纯复述，要指明功能。**待Owner决定：** 明确检查单位与例外功能。

### R7｜信息结构与故事因果并查

**现有事实：** 当前有术语后置、Hook和开放问题；S3/S4/短口播有orientation、progress、承诺。未显式整体核对人物知情和观众已知的差异。

**发现问题：** 因果技术上成立，观众仍可能不知“它”是什么、太早知道答案或关键前提太晚；只填转折字段不能发现。

**建议：以简单方式加强。** 在现有前提 / QA用主要问题、关键发现与信息释放说明，连读时按观众已知 / 未知检查；不另建强制信息地图。

**行为 / 收益 / 风险：** 不是隐藏正确事实骗悬念，而是让每次发现有价值；避免解释先泄露后再重复演。少量记录增加可审性，不用每句表格。**待Owner决定：** 是否加入整稿检查。

### R8｜补足Part 2.5 / Part 3所需语义交接（优先）

**现有事实：** §18/21已交口播、事实、节奏 / 对白轮次；Part 2.5要已确认角色声音；最新Part 3要四类事实和受保护故事事件。

**发现问题：** 说话者、可朗读正文、语义标注对应文本、非口播关键行动和事实身份的交付位置不明确。最新导演要求不能仅凭“尊重锁稿”实施。

**建议：在原三类产物补清。** 纯口播含Hook一次；说明区给说话者 / 轮次、关键停顿 / 末词锚点、必要读法、不可改事实、关键非口播状态和授权。Part 3负责主观视觉语法 / Scene Anchor / 镜头和图数；已有机制支持且不冒充个案事实的一般示范仍可由导演落实。

**行为 / 收益 / 风险：** TTS不读制作说明，导演不补关键事件。音画允许各有作用，不要求每个微表情写死；只记录故事必需内容。**待Owner决定：** 最小交接强度；角色声音确认责任仍需由现有声音 / 生产配置明确，本提案不指定Writer或新审批人。

### R9｜保留视角确认门，处理真实性冲突

**现有事实：** `4c5460e`明确旁观 / 听说先Owner确认，未确认继续默认亲历；同时§7禁止伪造真人经历。

**发现问题：** 默认入口若不能真实或可辨虚构成立，继续亲历会制造事实。叙事入口又可能被误作语法人称或摄影POV。

**建议：不删已有门。** 默认成立才继续；不成立先做独立机制 / 草案，不锁前提，提出具体入口冲突。配角第三人称句 / 第一人称见证 / 摄影外部视角，不一律当切入口。

**行为 / 收益 / 风险：** 防止假亲历；可能在真实输入不足时返回，不能用“未答就默认”获得真实经历。**待Owner决定：** 是否接受冲突优先解释；不是本Reviewer擅自取消确认门。

### R10｜恢复可操作轻盈与听觉QA

**现有事实：** §8/12/19/20有口语 / 故事太重；S3 Lightness Guard更具体，short-form有连读Mouth/Breath/Pronoun。

**发现问题：** 黑名单0命中、自问“像人吗”、90+评分，不保证顺口或好看。全程每段大转折也会像培训案例。

**建议：恢复少量检查。** 整稿连读 / 等效口语预读，检绊嘴 / 指代 / 数字 / 缩写；核对小具体代价、张弛、一个细节胜三段说明、必要解释的长度、人物不从答案终点出发。实际未出声 / 未试听就标未验证。

**行为 / 收益 / 风险：** 不要求新付费TTS阶段，不必每句都有潜台词 / punch。防文面自然听觉僵硬；不能把模拟阅读声称真实观众反馈。**待Owner决定：** QA采用何种可核实预读标准。

### R11｜术语早名例外，不早讲定义

**现有事实：** §10写默认后置，不是绝对禁术语；S4 Channel§2允许搜索 / 热点名早出现。

**发现问题：** 例外未显写，Agent可能为“术语必须晚”让对象持续不明；§12专名首次解释也可能被误读成完整架构课。

**建议：恢复说明。** 名字必要时早提，解释服务理解；通常先具体处境 / 直觉再命名，不按百分比拖名。

**行为 / 收益 / 风险：** 既不假藏观众已知对象，也不定义开场。允许范围太宽会退科普，QA仍查情节是否成立。**待Owner决定：** 明确例外文字；属已有历史方向澄清，有Agent行为影响。

### R12｜解释桥与观点规则避免过压和伪平衡

**现有事实：** §6允许有观点但最多轻点，§10两句对比优先，§11纯解释作桥；S3批准观点可为灵魂，旧“只能余味”已否决。

**发现问题：** 减说明可能删掉必要条件 / 未知；“故事证明”可能压成故事只能自我解释。“两边合理”也不意味着错误事实应获得同等地位。

**建议：保留思想并澄清。** 一个机制 / 中心意义，必要准确性说明不按两句 / 三句配额；规范性取舍呈现真实吸引力，事实错误不作对等反方。事实问题已有答案不必伪造作者未知。

**行为 / 收益 / 风险：** 既不鸡汤 / 演讲，也不因少解释损准确；额外说明仍要展示此刻必要的新增区别。**待Owner决定：** 是否接受例外与事实 / 取舍区别，不恢复“观点只能结尾一句”。

### R13｜一个主机制保留，但允许必要支持事实

**现有事实：** Part 1/2默认一个主机制；S2区分Agent主题与guardrails边界，Noodle同时用推荐和有限重复接触知识。

**发现问题：** one mechanism若被当one fact，会删必要支持；反过来把多主题都叫辅助也会绕过拆题。

**建议：澄清而非取消。** 支持同一个主问题的条件 / 例外 / 辅助知识可保留；若核心解释必须依赖两个机制共同成立，不能重命名成辅助事实，须缩窄题目、按Part 1拆题 / 返回。独立展开、回报或改变主WHY的第二机制同样返回。Noodle两组知识是待判断实例，不是本提案自动批准的合并许可。

**行为 / 收益 / 风险：** 拒绝百科堆叠，保留因果充分性。边界需具体判断，不能靠字段命名绕过。**待Owner决定：** 是否接受此解释；不修改Part 1五硬检查。

### R14｜目标时长与真实成音的编辑回路

**现有事实：** §17不凑3–5分钟，§21正式链以Part 2.5真实时间为准；旧字速 / 固定标准已覆盖。

**发现问题：** 锁稿前不知实际时长，成音明显过长 / 过短后的处理未明确。仍不能用固定字速给正式时码。

**建议：最小回路。** 目标指导范围，DRAFT预读可检查明显负担，正式成音后必要时回Part 2压缩 / 改范围→重锁→2.5重做。合理短稿可提出保留，不让P3快切 / 拉hold补分钟。

**行为 / 收益 / 风险：** 不恢复4.8/5.9字速、±5%预算或2–4秒配额；返修有配音成本，应先锁稿QA，不能日常二次创作。**待Owner决定：** 何时实际时长冲突需要返修与何时容许目标例外；目前稳定能力 `NOT VERIFIED`。

### R15｜RETURN按失败真相所属职责路由

**现有事实：** §20笼统“修剧本、不进分镜”，§2事实不足先研究，§21改稿重锁；S7有最小阶段与mutation规则。

**发现问题：** 语言修正可能越权修事实，图片重复可能无依据重写故事；新Part 2.5入口也未在§20说清。

**建议：恢复小表。** 题目→Part 1；证据→研究机制核；欲望 / 因果→故事；措辞→Writer；语音 / SRT→2.5；正确故事的视觉落实→Part 3。带文本、依据、影响和允许改项，不增常设Reviewer / 大状态机。按实际变更传播：仅改非口播说明且声音不变不强制重配，文本 / 配音意图或音频实现改变才重做受影响音频 / 对齐。

**行为 / 收益 / 风险：** 不重开所有上游、不让下游偷改；来源判断仍可能需协商，不能只用return code推卸定位。**待Owner决定：** 是否接受路由与版本传播。

### R16｜去重复并保持三类内容，不增体系

**现有事实：** §3/4/5/22反复因果，§6/10/11/12反复解释 /总结，§18/19/20分输出 /QA /返回；重复有提醒作用。

**发现问题：** 不是全部重复都该删，但散布会让最低字段与运行顺序不清。候选可以重新结构，不以篇幅短为优化证明。

**建议：重整说明。** 候选按输入 / 锁定 / 证据 / 故事 / 信息 /语言 /时间交接 /输出 /QA /返回串联。保留三类产物内容、两编辑模式 / 三任务、必要原规则；避免把相同事实维护在多份独立文档。

**行为 / 收益 / 风险：** 便于走一次完整流程；仅重排不解决逻辑，必须连同接口 / QA澄清。**待Owner决定：** 若采用可最小改正式原结构，无须整篇替换。

### R17｜历史验证与来源表述的事实纠正

**现有事实：** S3 G3R明确Reviewer / Owner批准；90–92是稿件自评；S7迁移PASS不是E2E；H019样板不少问题在下游。

**发现问题：** “已验证”容易被理解为现行生产稳定、观众爱看、日更已证。旧50份完整性记录也不是本次重核事实。

**建议：纠正证据标注，不改运行行为。** 分别写编辑批准、稿件语义证据、结构检查、实图Reviewer、真实受众 / 成片数据。缺证据标NOT VERIFIED。

**收益 / 风险：** 避免在错误实证基础上回滚或扩规则；不由验证有限反推已批准方向无效。**待Owner决定：** 无新增写作权限；更新正式证据措辞仍由Owner决定，本次不动正式文档。

## 6. 不恢复 / 不新增的规则与实际副作用

| 来源规则 | 若恢复Agent会怎样做 | 本次判断 |
|---|---|---|
| 景岁签名 / 英文尾签 | 每期开头问候、末尾加无关英文 | 不恢复；当前Hook / 干净结束更适合 |
| 景岁150–240秒结构比例、完整观点不要前1/3说完、前50–60%以事件 / 证据为主 | 机械套比例会拖延必要信息；若扩成按比例禁技术名词，更属误用 | 不恢复硬比例；旧版没有按百分比禁名词，按语义需要决定 |
| 70–85秒 / 4–6分钟 / 3–8分钟唯一标准 | 把历史试验目标当所有稿件长度 | 不恢复；现行3–5分钟为编辑目标而非配额 |
| 将历史4.8cps、5.7–6.2cps、±5%字量估算恢复为当前正式时间权威 | 按字数猜时码，再让语音迁就；这是恢复时可能的误用 | 不恢复为正式时钟；旧short-form本身也区分估算与真实音频对齐 |
| 连续3句解释自动RETURN、抽象词2句门 | 为句数拆假动作或删准确性边界 | 不恢复硬门；保留解释过载复核功能 |
| 每篇3–5Hook候选、90分通过 | 多填表 / 评分代替兑现判断 | 不新增配额或总分；必要时可比较不同Hook |
| 历史梗预算、18–45字常规句长；另外引入固定笑点频率的假设 | 机械恢复 / 新增配额会拼笑话、固定断句追指标 | 不恢复硬门或新增频率；未核验景岁v3.4有“每几秒笑点”原规则，集中梗 / 顺口是有用倾向 |
| 故事 / 解释比例、70/30模式、5:2发布组合 | 按份额补事件 / 方法、削必要解释 | 不恢复为Part 2要求；旧组合是实验假设 |
| 每篇灾难 / 假解 / 矫枉过正 / 折中 | 所有题变同一教训模板 | 不恢复；当前明确反模板值得保留 |
| 必有观点 / 方法 / CTA /教程第三模式 | 结尾硬接课程 /鸡汤 /销售 | 不恢复；保持理解也可完整收束 |
| Writer Visual Beat /镜头 /prompt /source权 | 为好画改故事并提前锁死导演 | 不恢复；内容事件明确≠摄影决定 |
| 大型证据图谱 / 每句事实分类 / 新Review Agent | 稳定低风险文案也需复杂治理 | 不新增；现有三类内容与关键对应足够 |
| 固定场景资产库 / 地点数量配额 | 让选题和故事被现存素材反向限制 | 不新增到Part 2；保留半固定世界、常驻地点与关系的可选复用。当前Part 3无固定长期Scene Master资产要求，最新Style Plate还未确认 |
| 发布metrics与自动化全套 | Writer兼运营 /生产管理、宣称数据验证 | 不新增；需要真实后续数据，不能靠规则推导效果 |

## 7. 当前正式22节与候选的对应

| 正式节 | 动作 | 候选承接 |
|---|---|---|
| 1职责 | 保留，补现行链路与成功范围 | §1–2 |
| 2输入 / 锁 | 保留，补Part 1承接、来源scope和阶段 | §2–4 |
| 3机制世界规则 | 保留，区分演示和证明 | §4–5 |
| 4段落推进 | 澄清单位 / 删除测试 | §6、8、16 |
| 5两发动 | 保留，不穷尽题材 / 模板 | §6 |
| 6观点 | 保留中心意义和边界，防伪平衡 | §4、10 |
| 7角色 /视角 | 保留Owner门，补事实身份 /默认冲突 | §7 |
| 8表面感觉 | 保留，恢复轻盈QA | §11、16 |
| 9开头 | 保留，补承诺强度 /兑现 | §8–9 |
| 10直觉 /术语 | 保留默认，说明热点早名与必要限定 | §10 |
| 11口播功能 | 保留解释服务故事，增加信息路径判断 | §6、8、10 |
| 12口语 /对白 | 保留，补说话者 /连读 /非口播依托 | §11–12、16 |
| 13动作 /停顿 | 保留语义，不变正式时码 | §12 |
| 14幽默 | 保留非配额，不能假事实 | §11 |
| 15两模式 | 保留方法六条件 /理解也完整 | §14 |
| 16任务 | 保留三任务，承接已有选择 | §2、14 |
| 17时长 | 保留目标，补实际成音回审 | §13 |
| 18输出 | 三内容不变，补最小来源 /事实 /节奏交付 | §15 |
| 19QA | 增强整稿 /承诺 /发现 /规则覆盖 /听觉 | §16 |
| 20RETURN | 按知识 /故事 /语言 /下游职责细分 | §17 |
| 21时间 /分镜边界 | 坚决保留2.5，补锚点与版本 | §2、12–13、17 |
| 22原则 | 整合而非再列新理论 | 全文 |

## 8. Owner决策清单与验证建议

**建议优先批准的行为补充：** R1来源 /scope、R2事实身份及承诺强度、R3锁定与重锁、R5发现 /最终规则覆盖、R8最小交接、R15返回路由。它们直接影响“下游是否需要猜故事”，不必等整篇重构。

**适合随后澄清：** R4重复提醒、R6段落单位、R7信息路径、R9默认真实性冲突、R10轻盈 /连读、R11术语例外、R12解释 /观点、R13支持事实、R14时长回路。都不需要恢复旧数字范围。声音确认职责与实际目标时长冲突如何处理仍需Owner / 原生产配置明确，不能由Reviewer发明新的审批人。

**仅事实 / 溯源纠正：** R17；另包括G3→G3R版本区分、对白候选已晋升、d8历史分离不等删能力、时间职责迁出不等消失、10月3日Part 3已更新。它们本身不批准新写作行为。R16结构整理可独立选择，不能以“文件更短”代替行为改进。

建议文本回归先用现有原件，核对：Agent重锁版本及新策略检验、Memory比喻范围 /叙事呼吸、MCP新方案回报、Search虚构政策身份 /证据发现；再独立看Noodle Hook与机制等强、Permission最终规则是否覆盖个人优先级。**这不是本轮修改或判废这些稿的授权。**

采用后的小范围生产回归，应在正确锁稿→Part 2.5正式成音/SRT→Part 3的链上检查：文本无漏 /改写，关键停顿和对白可实现，导演无须新增事件 /事实，时长由真实音频给出且不靠快切修脚本。缺原H019/H015稿先补材料；不为验证再造评分体系或批量付费实验。

当前已有机制保护、因果推进、反模板、事件 /持续比喻、开放问题、潜台词 /口语、非强制幽默、两模式、无硬CTA、真实音频权限和Writer不导演等规则应坚决保留。它们比整套旧综合Skill更适合现在的模块链路。

**是否建议现在改正式Part 2：** 建议Owner审阅后做有限、可回归的正式修订；不建议直接整体替换，也不建议仅因过去PASS就不再审查。本次Reviewer工作到两份文件和结论为止，停止；不改正式模块、不进生产、不更新HANDOFF。
