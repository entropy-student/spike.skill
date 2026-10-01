# Part 4 — 独立复查发现与修改建议

> 状态：独立建议，未批准实施。日期：2026-10-01。
> 对照：`codex/comic-narrative-part4-snapshot` @ `311780e06bf31ba12b0b027ea6e27a07e1bc4c2b`；当前正式 `IMAGE_ASSET_EXECUTION.md` blob 为 `7a6c7d1fec2426b97eccc034c8817726f634d0b9`。
> 本文把“材料已经显示什么”与“建议以后如何改”分开。配套 [完整复查方案](IMAGE_ASSET_EXECUTION_REAUDIT.md) 是便于整体审阅的候选合同，不替代正式文档，也不代表已批准下面的连接补丁或结构调整。

## 1. 结论与本次边界

现行 Part 4 已覆盖大部分核心能力：资产需求、canonical identity、按帧绑定、生成 / 编辑 / 完整图复用、prompt 编译、故事 / 物理 / 文字 / 连续性 QA、输出与来源记录、校准例外、执行器权限、自包含执行包。没有证据支持把它整体推倒或恢复旧综合 Skill。

真正需要优先处理的是：Part 4.5 成立后接口未明确；包内真实输入与 ZIP 条款不一致；尚未生成的 source 与依赖缺操作合同；包 QA、retry / return 和完成状态不够具体；少数历史有价值的验收点没有显式保留；文件层与运行真相的关系仍未最终决定。

本轮只新增两份 Markdown。未改正式文档、HANDOFF、SKILL、schema、图片、catalog、Registry 或历史快照；未生图、未试跑并发，也未宣称验证当前整集执行效果。

## 2. 证据基线与阅读范围

本轮先 fetch 指定分支。原本地 HEAD 为 `0df32b0`，远端为 `311780e`；两者差异仅在 HANDOFF，包含 2026-09-30 的 Part 4 / 4.5 连接待修，以及 2026-10-01 速度实验、Owner 两轮意见与 C 补丁基线纠正。因此未把旧本地交接当成最新结论。

下列链接相对本文所在目录。材料按事实用途区分，不按文件里自称的 `CANONICAL` / `PASS` 自动提高优先级。

| 证据组 | 本轮核对的材料 | 可支持什么 / 限制 |
|---|---|---|
| 当前正式接口 | [Part 4](../../part4/IMAGE_ASSET_EXECUTION.md)、[Part 3](../../part3/STORYBOARD_VISUAL_DIRECTOR.md)、[Part 4.5](../../part4_5/ASSET_REUSE_LIBRARY.md)、[SKILL](../../SKILL.md)、[HANDOFF](../../HANDOFF.md) | 当前模块职责、已确认取舍与仍待决定项；不能把 HANDOFF 的建议当正式规则 |
| 收集与迁移 | [快照索引](../../source-snapshots/04-image-assets/SNAPSHOT_INDEX.md)、[覆盖审计](../../source-snapshots/04-image-assets/SOURCE_COVERAGE_AUDIT.md)、SOURCE_MANIFEST、BINARY_REFERENCE_INDEX、boundary 迁移和 adapter 材料 | 100 份文本的来源分类与能力域覆盖；收集 PASS 不证明现行整集生产 PASS |
| 直接历史合同 | [G5 合同](../../source-snapshots/04-image-assets/direct/project-docs/G5_IMAGE_ASSET_PACKAGE_CONTRACT.md)、[生产补丁](../../source-snapshots/04-image-assets/direct/project-docs/STORY_EVENT_FRAME_PRODUCTION_PATCH_20260926.md)、CHARACTER_IDENTITY_LOCK、PRODUCTION_VISUAL_STYLE、VISUAL_ACQUISITION_REVIEW_GATE、OUTPUT_RECORD_STANDARD、REFERENCE_LIBRARY_PRODUCTION_WORKFLOW | 历史能力、故障和修复原则；旧服装、场景、overlay、crop 等已被覆盖 |
| 编译案例 | [蓝图重编译 Review](../../source-snapshots/04-image-assets/cases/g5-blind-search-answer/15_FRAME_BLUEPRINT_RECOMPILE_REVIEW.md)、资产清单 / Bible / Ref Manifest、执行行 V02、[高风险 Pilot](../../source-snapshots/04-image-assets/cases/g5-blind-search-answer/17_HIGH_RISK_PILOT_REVIEW.md)、[路径验证](../../source-snapshots/04-image-assets/cases/g5-blind-search-answer/18_REFERENCE_PATH_VALIDATION.md) | 可见 source 不兼容、角色漂移、reveal、真实路径的作用；不是当前规则的直接执行包 |
| 运行证据 | [G5 Gate Review](../../source-snapshots/04-image-assets/evidence/G5_GATE_REVIEW.md)、[最新快照 QA](../../source-snapshots/04-image-assets/evidence/latest-image-run/QA_REPORT.md)、对应 RUN_RECORD / OUTPUT_MANIFEST / REVIEW_INDEX、BLIND_SEARCH_ANSWER_OUTPUT_INDEX | 区分包级验证、部分图片生产、HOLD、被替换尝试和后续裁定 |
| 下游执行合同 | boundary/g6-image-handoff 的 v1 / v2 执行顺序、[LOW_LEVEL_EXECUTION_PACKAGE](../../source-snapshots/04-image-assets/boundary/project-docs/LOW_LEVEL_EXECUTION_PACKAGE.md)、portable EXECUTOR_CONTRACT / QA_AND_RETURN_CODES / ASSET_COMPILER / image adapter；[历史执行行 schema](../../source-snapshots/04-image-assets/direct/project-schemas/frame_execution_row.schema.json) | 技术重试和权限、模式条件、旧 schema 与现行禁令不相容 |
| 复用实例 | [当前 catalog](../../part4_5/library/catalog.jsonl)、对应 35 张完整图片、[旧复用流程](../../source-snapshots/045-asset-reuse/REFERENCE_LIBRARY_PRODUCTION_WORKFLOW.md) | status / scope / modes、同集来源与跨 run READY 的差别；本轮对 35 个文件路径和 SHA-256 核对无不匹配，未重新对所有图片做像素语义审核 |

还检查了仓库外、同一工作区已有的实际执行材料：

- `director-output/ep-ai-noodle-preference-20260927-v2-62/00_EXECUTION_ORDER.md` 与执行行：实际包含候选 carry-over、前置 Beat 编辑源、fallback、不同 QA / storage 状态；它要求执行器再检查旧图，不能直接当作已精简合同样板。
- `episode-final-delivery/ep-ai-noodle-preference-20260927_video_image_package_final.zip`：核对成员，并读取 `README_FIRST.md`、`records/OWNER_REVIEW_DECISIONS.md`、`records/RUN_RECORD.json`。它记录 62 播放位置 / 60 binary、两张 Owner 修正版、两组 exact 重放、LOCAL_ONLY、NOT_READY、TTS 和 video 未完成。这是最终图片交付归档，不是新任务执行包的最小结构要求。
- 该集 Part 4.5 review 目录中的 `review_summary.md`、`catalog_revision_summary.md`：图片不变而描述改为可观察事实、scope 收窄、四张暂停；后续正式入库以当前 catalog / HANDOFF 为准，不沿用本地 Review 文件的“尚未上传”时间状态。
- `_h019_execution_package/H019_酒店价格_第四部分图片执行包_终检版/` 及 `H019_执行/` 下同名包：补读执行说明、总清单和图片任务。前者实际解析得到41个唯一任务、38生成 / 3编辑；总清单所列4个输入文件（两图、任务、执行说明）的路径 / SHA-256均匹配。它已声明按依赖调度、前序验收、参考用途、active library核对及无跨集素材锁定，不能说这些操作在实际生产包中完全缺失。它仍未明确内容重试上限和完整的source不兼容fallback；其现有图片或自报完整性不证明整集图像QA，也没有据原始Shotbook独立证明所有语义未改。

H015 / H019 的特定历史 Part 3 / Part 4 示例 ZIP 在 HANDOFF 以 Library 路径记录，指定 Git 提交树与当前可见工作区未找到这些历史 ZIP binary；上述H019终检版目录是另一个可见版本，不能混同。本轮使用历史交接摘要核对合同演进，**没有声称解压核验这些历史包**。旧 `SKILL(20260919-...)` 原件也未在本轮可见仓库树找到；P1–P6 的旧差异仅使用最新 HANDOFF 已记录内容，不声称已穷尽旧原件全部差异。本次完整覆盖对象是现行 Part 4 和已取得的相关来源，不是未取得旧 Skill 的全量逐字 diff。

### 2.1 Git 历史的意义

`acea207` 建立完整合并基线，`1837c68` 做不改变行为的去重，`6ae081a` 将过程记录移出正式文档，`f056a87` 明确执行包合同，`afcb983` 最小化并自包含。后续 Part 4.5 成立、35 张图片入库，以及最新 HANDOFF 补充接口缺口，未继续改 Part 4 正式 blob。

所以当前问题更接近“执行包合同已推进，后来的服务接口与操作细节尚未对齐”，不能把所有问题归因于最近 C 方案。

### 2.2 最新讨论状态不能提升为实施许可

- P1 / P2 / P3：Owner 倾向全局视觉规划、现实演绎与 Scene System 先规划，仍待细化；是否恢复旧数量要求尚未决定，属于上游规划讨论。
- P4：最新方向是参考视频校准留在正式链外的 Skill / 外部可选能力，最终确认仍待定；本复查方案不把它加进 Part 4。
- P5：最新方向保持 3+2 和 Part 4.5 完整图复用；动作 / 表情 / 构图 metadata 增强可另行评估，不恢复庞大 Master 库。
- H019 高速包：并发探针、15 / 24 / 2 依赖波次、自动重试最多一次均为该轮实验记录 / 候选策略，不能成为全项目事实或上限。
- C 补丁：只补有意义故事变化和持续递进；上述历史迁移差异不能归因于 C，也不能据此回退 C。

### 2.3 历史 PASS 的实际覆盖范围

| 记录 | 实际验证状态 | 本次不作的推论 |
|---|---|---|
| Blind Search Answer G5 / 路径验证 | 44 条执行行、9 个已用资产引用可解析；8 张高风险 Pilot 曾达到接受状态 | 不推论当前模式、当前素材或整集最终图已通过；旧 Pilot 仍有 overlay / crop 历史背景 |
| latest-image-run 快照 | 15 / 71 张生成并被执行器接受、56 未生成、7 个被替代失败尝试，整批 HOLD_OWNER_REVIEW | 不推论整集完成；其中抽象卡片的旧 ACCEPTED 已不符合后续生产补丁 |
| 生产补丁 §8 的另一次 Pilot | 11张接受、17个拒绝候选，仍HOLD_OWNER_REVIEW | 不与8张Blind Search Pilot或15张latest run混为一批，不推广到未生成图片 |
| noodle 最终本地交付 | 62 播放位置、60 distinct binary；Owner 修正第三手与屏幕关系，并指定两组回忆完整图重放；仍 LOCAL_ONLY / NOT_READY | 不推论已有 TTS / 视频，也不推论所有60张可进入当前素材库 |
| 当前 Part4.5 catalog | 35 条正式记录、31 可复用、4 暂停；29 仅参考、6 可编辑、0 直接复用；本轮文件 / hash 一致 | 不扩大 scope / mode，不用入库批次数量证明任何全局复用率或图片质量指标 |

历史源码中的 `PASS`、执行器 `ACCEPTED`、最终本地交付和当前库许可是不同结论。来源覆盖审计不能代替这四层核对。

## 3. 建议保留的能力

以下均已有正式依据，应保留语义，只整理表达：

- Part 3 是事件、POV、构图、reveal、必要文字和时间锚点的上游真相；Part 4 不导演、不改事实、不以旧图改 Beat。
- 本集需求 Manifest 是单一事实源；Inventory 为派生展示；长期 Master 不在本集 Bible 重复定义。
- 当前 3 Character Master + 2 Style Reference；场景 / UI / 道具按单集故事，临时参考按真实风险建立。
- 身份引用优先级、只按可见范围 QA、失败 source 不延续、历史图不反向定义角色。
- 真图片 / hash / scope / 用途；多个 Beat 可以映射一个完整 binary；连续性组不冒充派生链。
- GENERATE、兼容源的 DERIVE_EDIT、完整图 exact reuse、明确用途的 reference；不设模式或数量配额。
- 完整 raster；IMAGE_NATIVE / NONE；无 crop 拼装、外部图层和文字 overlay。
- 故事事件、物理视角、连续性、解剖、文字、reveal；hard failure 与 minor 区分；后续裁定保留历史。
- 正常集不强制 Owner 首批 Pilot；有实质变化才有界校准。
- 自包含图片任务与执行包；包内实际使用参考；执行器无创意权限；运行事实和复用权限分开。

## 4. 发现的问题与具体建议

每项“建议”都未实施到正式文档。标为“恢复”是恢复显式表达 / 操作能力，不是恢复整套历史默认。

### M01｜执行规划交付与图片生产完成混在一个“最终交付”概念里

**发现的问题。** 正式 §1、§2、§18、§22 说明 Part 4 包含图片执行、QA 和 reconciliation；§21 又以执行包为最终交付。§23 区分规划 Agent / 执行 Agent，但没有明确两个完成点。历史 G5 合同 §16 明说包合同验证不要求整集生图，实际运行又经常 HOLD。

**建议：修改。** 明确“规划完成 = 包 QA 通过”“图片生产完成 = 全部最终图 + 逐帧 / 整集 QA + 输出核对”。保留图片执行和反馈合同，允许外部执行 Agent 负责调用后端，不凭空新增模块。

**原因与代价。** 防止交包被误报为产图，也不把规划 Agent 限成只写 prompt；需要 run / manifest 区分包与生产状态。复查版 §1、§2、§16–17。

### M02｜Part 4.5 接口缺口与平行库职责

**发现的问题。** 正式 §9、§10、§22 仍泛指历史 Reference Library / Registry 并描述更新；§10 是“允许搜索”。Part 4.5 §3 已有唯一 active catalog，§5 / §9 / §10 提供双向服务。09-30 HANDOFF 专门记录连接补丁，但明确待 Owner 确认。

**建议：修改 / 新增接口。** 指向当前 Part 4.5 active catalog；锁模式前做候选检索判断；Part 4 规划 Agent 将服务结果锁成 asset ID / source / 用途 / preserve / delta / fallback；执行器只执行。入库决策交 Part 4.5，生产 provenance 保留。

**原因与代价。** 避免 Agent 调用旧库、默认全新生成或自行更新复用资格。增加轻量 metadata 查询与目标候选判断，不新增检索平台、人工重复表或强制全库遍历。这属于连接补丁提案，不能称为现行 Part 4 已明确强制。复查版 §7、§17。

### M03｜复用资格未充分强调 status、scope 和 mode 的交集

**发现的问题。** 正式 §9 / §10 有 storage、hash、scope 和模式，但没有把具体 task 的许可检查写成明确准入步骤。当前 35 条中 4 条暂停、29 条仅参考、6 条可编辑，没有直接复用权限；生产历史两组 exact 重放不代表这些 catalog 记录可跨集 exact。

**建议：新增具体检查。** 候选可用须同时检查真实 binary / hash、status、当前目标 scope 和允许 mode。仅参考不能转 edit / exact；暂停 / 退役不能用。历史来源重新审核后才迁入 active 库。

**原因与代价。** 这是执行既有 Part 4.5 规则的接口细化，防止“很像 + hash 正确”被当许可；只增加现有字段核对。复查版 §7。

### M04｜ZIP 条款保留了已被后续封板覆盖的外部解析口径

**发现的问题。** 正式 §21 要求参考图片本身随包，§24 却允许“或明确可解析的 canonical reference”。HANDOFF 首轮回归确实用过仓库解析，后续“精简与修复 / 当前封板”已改为实际图片入包、不再访问仓库。

**建议：删除过时例外、统一。** 已存在且实际用于执行的图片都入包；仓库 path / canonical ID 用于追溯，不能替代 binary。只允许包内前置任务产生的图片延后可用，且必须明确依赖。

**原因与代价。** 使正式条款与已确认合同一致；包略大，但只收实际用图。不能把尚未生成 source 强行要求预装。复查版 §6、§11。

### M05｜前置源帧有规划用途，却没有等待与准入合同

**发现的问题。** 正式 §13 要 one accepted source，却未解释编包时尚未生成的前序 Beat。历史补丁 §4 与旧复用流程明确其可预先命名，只有故事 QA 通过、binary 可用才 eligible；真实 62 图执行行也依赖前置源。

**建议：恢复操作能力。** 声明前置 task / Beat、依赖用途、等待 QA / 落盘 / hash、源失败的 fallback / HOLD。源无效时阻断相关后代；不影响独立任务。源被后续推翻时复核已生成后代。

**实际实现补充。** H019终检版已写先解析依赖、前置验收后执行、用途限定，并显式指定三条edit source；本项主要是把已有生产包能力补进统一文档，并补源失败、版本替换和hash准入细节，不宣称依赖调度从未实现。

**原因与代价。** 避免边生成边传播缺陷，也避免把 source 未生成当假路径。使用简单任务依赖即可，不要求复杂工作流引擎或新 Agent 层。复查版 §6、§8、§12–13。

### M06｜模式、参考用途和普通连续性容易混读

**发现的问题。** 正式 §10 / §11 把 EXACT_FRAME、REFERENCE、DERIVE_EDIT_SOURCE、GENERATE 放在邻近分类；HANDOFF 仍列 exact mode 是否正式枚举为未决。历史重编译案例 VB009 保留前帧 continuity，却因 POV / 主体变化改 GENERATE，证明连续性不等于 edit source。

**建议：修改表达。** 三类主执行操作：新生成、编辑完整源、完整图不改像素复用；REFERENCE 是用途，编辑源是来源角色。区分 identity / pose / continuity / composition callback / primary edit source。具体 schema enum 另行批准。

**原因与代价。** 减少 executor 自选模式和假派生；不要求把历史文件全面改名。复查版 §6–8。

### M07｜Single Main Delta 容易成为无条件单帧硬规则

**发现的问题。** 正式 §18 把它作为通用 Gate；Part 3 §24 明确它是连续性工具，不是每图只有一个差异。旧 source 缺主要 UI 几何等情形不能靠无限局部 edit 解决。

**建议：修改适用范围。** 限定在连续状态 / compatible DERIVE_EDIT 的 preserve 与主要状态变化；独立 GENERATE 只忠实落实上游。一个主要故事变化可以包含必要细节，不按字段数量机械判失败。

**原因与代价。** 防止减少必要画面内容或重写上游；保留 source 兼容性硬门。复查版 §8、§14。

### M08｜禁止模式被写成“默认禁止”，易造成执行端自授例外

**发现的问题。** 正式 §11 为 `FORBIDDEN AS DEFAULT`；Part 3 §23 是明确 FORBIDDEN。旧 schema 和 adapter 仍可枚举 crop / overlay，容易被误作能力许可。

**建议：修改措辞。** 当前生产合同明确禁止裁切拼装、external layers、程序绘制 UI / text 和 post overlay；未经新决定不得启用旧分支。

**原因与代价。** 与上游一致；不删除历史 schema / adapter，仅注明不能用作当前运行合同。复查版 §8、§10、§12。

### M09｜automatic package QA 只有名称，缺通过条件

**发现的问题。** 正式 §20 / §21 提到自动包 QA，却未定义覆盖、真实 binary、条件必需字段、fallback、依赖和禁止模式检查。历史 schema 允许已禁止模式，GENERATE 不强制 prompt、DERIVE 不强制 source / delta，不能据此证明当前合同有效。

**建议：新增验收清单。** 检查 Beat 一一覆盖、ID / 顺序 / 锚点、模式必需项、实际输入 / hash、无环依赖、完整 fallback、确定 exact source、输出规格和禁止模式。同时保留规划语义 QA，区分机械结构检查与视觉判断。

**原因与代价。** 让“可执行包”可验；普通脚本足够。本轮只给 Markdown 合同，不新增 schema 或 validator，未来是否统一两种 row 另行决定。复查版 §9、§12。

### M10｜重试、修复和 return 没有明确路由

**发现的问题。** 正式 §21 要明确 retry / return，但 §23 禁 prompt 改写而未界定等价技术重试。历史 low-level 合同允许技术适配；补丁要求重复失败后 fallback / HOLD；最新 H019 的一次自动重试只是实验候选。

**建议：恢复 / 新增。** 区分技术重试、同合同内容重试、规划重编译、上游修改。每包声明条件 / 上限 / 终止动作；fallback 必须有完整指令与参考，不能仅写 mode。返回最小拥有问题事实的阶段，并列失败证据与依赖影响。

**原因与代价。** 防止无限重画，也不因禁止改 prompt 把普通超时重试禁掉；不设全局一次 / 两次、不设固定并发。复查版 §9、§13、§15。

### M11｜需要恢复显式的重点 / 因果对象辨认检查

**发现的问题。** 正式 §18 有 viewer meaning、style 和 continuity，但不显式问 P1 是否容易发现、关键对象是否可认。历史 G5 Focus Gate 与生产补丁的“酸菜只是绿色点”说明对象稳定存在仍不等于传达意义。

**建议：恢复 QA 能力。** 检查主焦点与关键道具 / 食物 / UI 可辨。失败先修编译 / 图片实现，不让执行器自由改上游构图。

**原因与代价。** 保留 Part 3 已锁单帧注意力在成图上的验证；增加语义核对，不设像素级评分体系。复查版 §14。

### M12｜必需文字正确仍可能存在额外 UI 事实 / 品牌扩张

**发现的问题。** 正式 §15 强调 exact causal text，§7 仅列 brand mode 未给规则；历史 G5 §11 / 补丁 §8–9 明确虚构品牌、日期、会议、发送人可改变故事。Part 3 已禁新增可读事实，Part 4 QA 应显式承接。

**建议：恢复 / 修改。** 同时核查新增可读事实；不为了真实感造品牌 / logo，只落实上游必要且已确认内容。保留 Part 3 已允许的措辞集合，如“无房 / 售罄”，不再无依据锁死单一版本。

**原因与代价。** 防止文本 QA 过窄或过严；不恢复 overlay，也不新增独立品牌研究流程。复查版 §3、§10、§14。

### M13｜参考优先级需服从当前服装与身份，而非旧文本

**发现的问题。** 正式 §5 的身份优先级值得保留；但历史材料有酒红服装、V1 / V2、本集四视图等特定约束。Part 3 §1 明确基础服装可因单集故事合理变化，两张 style 图不锁场景 / 食物 / 动作。

**建议：保留并澄清。** 以当前 Master 和已锁单集变化为准；参考用途明确，不将旧服装、恋爱关系、餐馆或姿势自动带入。hands-only 按可见范围 QA。

**原因与代价。** 避免以恢复历史 identity 能力为名回退资产；不新增身份体系或长期库。复查版 §6。

### M14｜“稳定约束”与“额外生成 mini master”容易绑定过紧

**发现的问题。** 正式 §6 把 stable ID / mini master 放在同一触发句；生产可能把每个重复 UI / 场景都理解为要先生图，也可能为省临时图完全不锁其状态。HANDOFF 记载 H015 / H019 临时预生成图为 0，但这不是所有集必须为 0。

**建议：修改判断。** 对有连续性 / 因果风险对象锁 ID 与必要约束；另行选择已有参考、旧完整图、本集接受帧或必要 mini master。预生成只按真正缺口，不能让 executor 临场决定。

**原因与代价。** 同时保留连续性和最小成本；不把 P3“恢复 Scene System”讨论偷偷写进 Part 4，也不取消必要参考。复查版 §5。

### M15｜整集成图 QA 与 Part 3 的规划 QA 要区分

**发现的问题。** 正式 §18 主要逐帧 Gate，缺明确整集结果通过条件。Part 3 §18 / §27 已要求全局视觉多样性与递进；H019 最新讨论更要求在规划阶段解决，不能末端补导演。

**建议：新增执行验证、保留上游职责。** 最终按原序检查跨帧连续性、reveal、回忆、复用映射及是否实现已锁动作 / 世界后果 / 关系。成图漂移交 Part 4；原规划单调交 Part 3，不修改 Beat 换场景。

**原因与代价。** 逐帧通过不再自动等于整集通过；增加一次连续查看，不恢复 6 秒 / 3 镜 / 15–20 秒等计数规则，不增加 Owner 每集预审。复查版 §14、§17。

### M16｜QA、storage、版本修订与 READY 的不同事实需写具体

**发现的问题。** 正式 §19 保留后续裁定，§21 / §22 有 hash reconciliation，但未明确替换后所有映射和依赖联动。真实 noodle 执行器曾接受第三手 / 物理冲突，最终 ZIP 修正后仍 LOCAL_ONLY / NOT_READY；后来 Part 4.5 才筛 35 张入库。

**建议：恢复具体操作。** 分开 frame QA、story / episode review、storage；修订创建新 hash / provenance，保留旧裁定，更新 Beat 映射、QA、run / INDEX、所涉 Registry / catalog 资格，并复核后代。候选描述最终可观察画面，不抄 prompt 或心理 / 剧情推断。

**原因与代价。** 防止旧 ACCEPTED 继续传播和地方 ZIP 冒充远端路径；不强制每张图都入库，不新增三份同事实账本。复查版 §13、§16–17。

### M17｜exact byte reuse 与尺寸归一化要分开记录

**发现的问题。** 正式 §10 允许同 binary exact，§25 默认 1920×1080，却未说旧图 / 后端尺寸不匹配如何处理。历史 Owner 修正版从 1672×941 整图缩放后 hash 改变；另两组重放是字节一致。

**建议：修改。** exact 不改像素；预声明的整图尺寸归一化记录 source / final hash 和处理事实，再检查可读性 / 构图。不能改尺寸后仍把 final hash 写成 source hash；不以缩放授权裁切、补画、overlay。

**原因与代价。** 使尺寸合同能真实执行；保留后端产图与交付图差别，不增加图像后处理体系。复查版 §8、§16。

### M18｜Visual Acquisition / 校准命名继承了不清楚的旧职责

**发现的问题。** 正式 §2 有 Visual Acquisition / Style Calibration Check；§20 则是角色 / 风格 / 后端 / compiler 实质变化。历史 Visual Acquisition Review 讨论增长、挑战画风和复杂度降低，不是每集图片 Gate。最新 P4 已倾向参考视频测量放在正式链外。

**建议：修改名称和位置。** 常规流程核验 Part 3 封板风格；按已存在触发做有界技术 / 风格校准。增长实验、参考视频研究保持链外能力，不恢复为每集必经，也不继承 15–25% 数值。

**原因与代价。** 清楚保留校准能力，避免重新研究已经封板的长期风格；不删除原快照。复查版 §4、§12。

### M19｜Part 5 / Part 6 编号与项目模块表不一致

**发现的问题。** 正式 §1 和历史 HANDOFF 将最终时间归 Part 5、渲染归 Part 6；SKILL 模块表 Part 5 是“配音 / 时间轴 / 成片”，Part 6 是“执行与项目管理”。当前没有正式 Part 5 / 6 文件可消歧。

**建议：修改边界表述。** Part 4 明确不负责真实 TTS 绝对时间和成片渲染，交后续配音 / 时间轴 / 成片职责；最终编号在模块迁移时统一。本轮不改 SKILL / HANDOFF。

**原因与代价。** 避免下游误路由；不由本次图片审计擅自决定模块组织。复查版 §2。

## 5. 对现行 §0–§25 的覆盖映射

这张表保证重排文档后仍能逐章对照；并不授权删除历史文件。

| 正式章节 | 建议处理 | 完整复查版落点 / 相关建议 |
|---|---|---|
| §0 文档职责 | 保留正式职责；复查稿另标未批准 | §1–2、文首状态 |
| §1 边界 | 保留禁改上游；明确完成点、4.5和后续职责 | §1–3；M01/M02/M19 |
| §2 执行链 | 重排检索 / 校准 / QA / 反馈位置 | §4；M02/M18 |
| §3 Manifest | 保留 canonical / 派生关系，不默认删除文件 | §5；M14 |
| §4 Reference Lock | 保留3+2和本集补充，落实真实输入 | §6；M13 |
| §5 Identity | 保留优先级和可见范围，服从当前上游变化 | §6；M13 |
| §6 连续性 | 分开稳定约束与预生成图 | §5；M14 |
| §7 Blueprint | 保留兼容视图，不另导演 | §3–4、§9；M09 |
| §8 Binding | 保留自包含、实际所需绑定；补来源 / 依赖用途 | §6、§9；M05/M06 |
| §9 Outputs / Registry / Library | 保留生产事实；当前库接口交4.5 | §7、§16–17；M02/M16 |
| §10 搜索与用途 | 对接active库，补权限与模式区分 | §7–8；M02/M03/M06 |
| §11 模式边界 | 澄清禁令和REFERENCE用途 | §7–8；M06/M08 |
| §12 GENERATE | 保留，补模式条件与完整fallback | §8–9；M09/M10 |
| §13 DERIVE_EDIT | 保留兼容性，补前置源准入 | §8、§13；M05/M07 |
| §14 Compiler | 保留职责，减少重复；不要求独立新增模块 | §9；M09 |
| §15 Text / UI | 保留native，补新增可读事实和允许集合 | §10；M12 |
| §16 Story / anti-PPT | 保留，承接假设/事实属性 | §3、§10、§14–15 |
| §17 Physical Viewpoint | 保留，区分上游冲突和成图失败 | §9、§14–15 |
| §18 Image QA | 保留Gate，限定delta，补重点和整集验证 | §12、§14；M07/M11/M15 |
| §19 Hard / Minor | 保留，补状态与后续裁定联动 | §13–16；M10/M16 |
| §20 Calibration | 保留触发；补包QA；链外研究不混入 | §12；M09/M18 |
| §21 包与输出 | 分开两完成点，明确最小内容和结果 | §1、§9、§11–12、§16；M01/M04 |
| §22 库Gate | 改为给4.5候选，不自动更新资格 | §16–17；M02/M03/M16 |
| §23 Executor | 保留无创意权；补技术重试和路由 | §13、§15；M10 |
| §24 ZIP | 合并重复说明，去掉外部图片替代口径 | §11；M04 |
| §25 画幅 | 保留默认规格，补whole-frame归一化记录 | §8、§16；M17 |

## 6. 建议不恢复或不纳入 Part 4 的内容

| 处理 | 内容 | 理由 / 边界 |
|---|---|---|
| 不恢复 | COMPOSITE_CROP、POST_OVERLAY、程序绘制文字 / UI、外部图层、source-crop comparison | 已与当前 Part 3 / Part 4 生产边界冲突；旧成功案例不构成当前授权 |
| 不恢复 | 固定图片数、固定秒数、SRT一条一图、DERIVE比例、每集复用N张 / 入库N张 | 对成本和质量的机械代理，不能凌驾事件 / viewer meaning；不恢复2–4秒与复用N的方向已有Owner记录 |
| 不恢复 | 旧酒红衣身份、固定工作桌 / 类比场景 / UI、庞大动作 / 表情 / 场景Master库 | 当前3+2和单集故事是正式基线；P5最新方向保持当前 |
| 不新增 | 每集Owner key-frame预审、参考视频正式输入、增长研究Gate、复杂度下降百分比 | 常规校准不是风格研究；增加无必要流程，与最新讨论方向不合 |
| 不交执行器 | 全局视觉分布、Scene System、世界后果如何设计、增减Beat / 换镜头 | 属Part3规划；P1–P3仍待细化，不由Part4补导演 |
| 暂不落实 | 删除Matrix / Bible / Blueprint / Reference Manifest，统一两种row，重命名exact enum或独立Compiler | HANDOFF仍列结构未决；应先证明不丢事实和运行接口，不能因执行包精简就推定内部文件全应删除 |
| 保留历史 | 失败provenance、源快照、旧schema、旧QA和后续adjudication | 需要可追溯；“从候选运行链移除”不等于物理删除历史材料 |

旧经验报警器是否有价值，应由其所属规划模块进一步审查；本次不把“拒绝硬数字”偷换为“任何整集检查都不要”。复查版保留整集成图验证，但不建立新计分、阈值或强制场景配额。

## 7. 重复层和过度简化分别怎么处理

**可直接建议整理表达的重复。** 正式 §8 / §12 / §13 / §14 / §21 / §23 多次列任务合同与执行权限；§9 / §21 / §22 重复输出与库的描述；§21 / §24 重复transport说明。建议形成“通用任务要求 + 模式条件 + 包交付 + 结果记录”，复查版已按此重排。

**不能顺手删除的内部结构。** Asset Manifest 管需求，Ref Manifest 管实际可用性，任务管目标绑定和指令，production records 管真实执行，catalog 管未来许可。这些是不同事实，不能为了减少文件全部压成一份同含义清单。展示文件可派生，执行器不跨文件猜导演；内部是否合并仍是提案。

**应补回的操作细节。** 自包含任务如果没有前置源等待、完整fallback、条件字段、实际参考图 / hash、QA状态和失败路由，只是文件少，不等于完整可执行。恢复这些语义比恢复完整历史多层目录更小、更有用。

## 8. 实施顺序建议与验证要求

建议先采纳低范围、可核对的条款修正，再讨论结构重构：

1. **边界和矛盾修正**：M01–M04、M07–M08、M19。验证：正式上游 / Part4.5 / 包说明读起来只有一个执行输入和许可口径，且不改变Beat。
2. **可执行合同补齐**：M05–M06、M09–M10。验证：覆盖、模式必需内容、QA/hash依赖、完整fallback、失败终止与恢复可机械检查；无需大批生图。
3. **质量与结果核对**：M11–M18。验证：重点可辨、额外事实、hands-only、reveal、回忆、hard/minor、修订hash和映射能得到正确结果；必要时用少量真实生产帧验证。
4. **独立讨论结构**：Matrix / Bible / Blueprint / Ref Manifest / row统一、Registry是否另存。验证：证明各事实只有一个拥有者且执行包不丢内容，才考虑合并；不在前三项中暗带实施。

可用的回归情境：不兼容旧图必须新生成；仅参考许可不得exact；暂停素材不使用；前置edit源失败阻断而独立任务继续；fallback不是完整合同就HOLD；图中多一只手不能minor；真实返回箭头不能因anti-PPT误拒；允许字符串集合不锁死；多个Beat共图保持映射；尺寸归一化记录新hash；Owner推翻source要复核后代。

本次验证完成的是资料、条款、路径 / 当前库hash与改动范围核对。它不证明新方案能稳定生图，不证明H019并发能力，也不代替未取得示例ZIP的后续执行验证。两份文档留存后仍保持原正式规则有效。
