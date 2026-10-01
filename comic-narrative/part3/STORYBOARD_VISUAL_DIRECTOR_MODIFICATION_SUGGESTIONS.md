# Part 3 — 正式版修改建议与独立复查依据

> 日期：2026-10-01。状态：独立审查意见，未批准修改正式规则。
> 对照基线：`codex/comic-narrative-part4-snapshot` @ `e22ad8dea0ee65845a872d2f91513c4df81e7c03`；正式 Part 3 blob：`959232ce1c689d2e5b286a49e11a546312c040da`。
> 本次仅新增本文及 [完整重整提案](STORYBOARD_VISUAL_DIRECTOR_REAUDIT.md)。正式 Part 3、Part 2、Part 4、Part 4.5、HANDOFF、案例与历史源文件均不修改。
> 下文“现有事实”指读取的规则、实际补丁或材料记录；“发现的问题”包含可证实的不一致及明确标为风险的判断；“建议”均为本次提案，不冒充 Owner 已批准规则。

## 1. 独立判断

当前 Part 3 的核心方向值得保留：先整体策略，再 Semantic Shot，再 Visual Beat；保护锁稿；C 补丁强化故事阶段推进；POV 与物理视角、完整图、原生文字、口播覆盖、Beat economy 和下游边界也比旧综合 Skill 更适合当前生产。

不支持“C 方案把整集规划、Scene System、隐喻或反应镜头删掉”的结论。正式 §6、18、27 仍有全局规划与 QA；C 的真实 Git 补丁只加强 Semantic Shot 有意义变化与递进，且明确保留独立 Visual Beat 的反应、揭示、证据和 POV discovery。

但“名词 / 字段还在”不足以证明能力完整迁移。当前整体策略对各段如何呈现行动、后果、空间、强度和关系的落实方式较概括；严格的局部语义正确性不能自动产生好看的整集。其次，事件硬门与合法隐喻 / 主观表达的范围、最终静帧状态、时间资料权限、逐字覆盖以及下游 QA 归因需要更清楚。

建议补的是生产判断和最小信息合同。无需恢复旧全部流程、固定Scene Master数量、画面比例、镜数评分、动作库或新增常设Reviewer。整体规划提前完成，局部设计承接，整集QA验证；不能把导演能力留给生图执行器。

## 2. 材料范围与证据强度

### 2.1 当前正式材料

| 来源 | 本轮用法 |
|---|---|
| [项目SKILL](../SKILL.md) | 核对目标、模块状态及Part5–6尚未完成迁移；不能把历史完整系统当现行链路 |
| [正式Part3](STORYBOARD_VISUAL_DIRECTOR.md) | 全文28节对照对象，不预设内容正确 |
| [Part2](../part2/SCRIPT_NARRATIVE.md) | 锁稿、比喻驱动、语义节奏、事实与Writer时间权限 |
| [最新Part4](../part4/IMAGE_ASSET_EXECUTION.md)及[Part4.5](../part4_5/ASSET_REUSE_LIBRARY.md) | 图片规划/执行、参考/素材资格、Scene Master、完整图及结果QA边界 |
| [HANDOFF](../HANDOFF.md) | Owner决定、A/C记录、历史迁移争议、缺失包位置及最新Part4落地；按后来的决定解释早期记录 |
| [选题库](../part0/TOPIC_LIBRARY.md)H019/H015 | 主题、机制与故事切口；不能用选题摘要替代两集完整锁稿 |

当前上游分支已包含 `0f900c7`、`1f10d1e`、`ef0af79`、`e22ad8d` 的Part4独立复查落地。图片规划Agent默认承担Part4+4.5生图前职责、执行Agent承担逐图/整集结果QA等已是当前正式边界，不再按早期“待确认”状态处理。本次Part3新建议仍未获批准。

### 2.2 仓库快照与真实历史

[Part3快照索引](../source-snapshots/03-storyboard-visual-director/SNAPSHOT_INDEX.md)收录146文件：direct25、cases63、historical6、boundary47、evidence5。本轮从直接规则、历史规则、案例、schema、边界材料及Git演进交叉核对；不宣称逐一审计了146个文件。旧快照只作证据，不成为当前runtime override。

| 证据组 | 关键读取材料与可支持的判断 |
|---|---|
| G4直接合同 | [语言规则](../source-snapshots/03-storyboard-visual-director/direct/project-docs/G4_DIRECTOR_LANGUAGE_RULES.md)、[V03复查](../source-snapshots/03-storyboard-visual-director/direct/project-docs/G4_DIRECTOR_RULES_FINAL_REREVIEW_V03.md)、[拆镜指南](../source-snapshots/03-storyboard-visual-director/direct/project-docs/G4_SHOT_DECOMPOSITION_GUIDE.md)、[编译合同](../source-snapshots/03-storyboard-visual-director/direct/project-docs/G4_DIRECTOR_COMPILER_CONTRACT.md)：局部正确不足、整体策略、层级/时间/覆盖职责 |
| POV/单帧合同 | [POV语法](../source-snapshots/03-storyboard-visual-director/direct/project-docs/G4_VIEWPOINT_GRAMMAR.md)、[Frame Blueprint](../source-snapshots/03-storyboard-visual-director/direct/project-docs/VISUAL_FRAME_BLUEPRINT_RULES.md)、[portable导演](../source-snapshots/03-storyboard-visual-director/direct/portable-skill/references/DIRECTOR_LANGUAGE.md)、[portable单帧](../source-snapshots/03-storyboard-visual-director/direct/portable-skill/references/FRAME_BLUEPRINT.md)：注意力衔接、非文字泄露、物理视角及小屏检查 |
| 历史研究 | [候选语言规则](../source-snapshots/03-storyboard-visual-director/historical/project-docs/G4_DIRECTOR_LANGUAGE_RULES_CANDIDATE.md)、[重建研究](../source-snapshots/03-storyboard-visual-director/historical/project-docs/G4_DIRECTOR_REBASELINE_RESEARCH.md)、[节奏profile](../source-snapshots/03-storyboard-visual-director/historical/project-docs/G4_JINGSUI_TIMING_PROFILE.md)：人物/空间/视觉变量的操作解释、节奏经验的适用范围 |
| G4R已知案例 | [Agent策略](../source-snapshots/03-storyboard-visual-director/cases/g4r-v03/agent/02_visual_strategy.md)、[Memory策略](../source-snapshots/03-storyboard-visual-director/cases/g4r-v03/context-memory/02_visual_strategy.md)、[Memory复查](../source-snapshots/03-storyboard-visual-director/cases/g4r-v03/context-memory/07_case_review.md)、[MCP策略](../source-snapshots/03-storyboard-visual-director/cases/g4r-v03/mcp/02_visual_strategy.md)、[汇总](../source-snapshots/03-storyboard-visual-director/cases/g4r-v03/VALIDATION_SUMMARY.md)、[已知案例复查](../source-snapshots/03-storyboard-visual-director/cases/g4r-v03/KNOWN_CASES_REVIEW.md)：四种主发动方式、功能区、强度弧与覆盖修复 |
| Search盲测 | [盲评](../source-snapshots/03-storyboard-visual-director/cases/g4r-v03/blind-search-answer/09_BLIND_REVIEW.md)、[POV审计](../source-snapshots/03-storyboard-visual-director/cases/g4r-v03/blind-search-answer/08_POV_AUDIT.md)、[计划时间审计](../source-snapshots/03-storyboard-visual-director/cases/g4r-v03/blind-search-answer/08B_REFERENCE_TIMING_AUDIT.md)：证据阅读可成立，8/44Beat的旁观偏置修复及重复归属风险 |
| 旧Memory分镜 | [G4A2复查](../source-snapshots/03-storyboard-visual-director/cases/legacy-g4/20260920-context-memory/G4A2_visual_beat_review_v1.md)：隐喻连续性比视觉新奇更重要 |
| 实际生产补丁 | [Story Event Frame Production Patch](../source-snapshots/03-storyboard-visual-director/direct/project-docs/STORY_EVENT_FRAME_PRODUCTION_PATCH_20260926.md)§7、9、10：整体后果、86→62合并、静帧状态、错误POV/回忆及硬失败/小偏差实证 |
| 旧schema | [Semantic Shot](../source-snapshots/03-storyboard-visual-director/direct/project-schemas/semantic_shot.schema.json)、[Visual Beat](../source-snapshots/03-storyboard-visual-director/direct/project-schemas/visual_beat.schema.json)：结构能力与现行补充不完全相同，不能用旧schema PASS证明完整导演合同 |

直接取得的旧综合Skill是Git归档 [v3.4 SKILL](https://github.com/entropy-student/spike.skill/blob/56619efc8b620f8e8304fca7a0e73ee8ba8244f5/jingsui-story-video-director/SKILL.md)及同提交的 [SHOT_GRAMMAR](https://github.com/entropy-student/spike.skill/blob/56619efc8b620f8e8304fca7a0e73ee8ba8244f5/jingsui-story-video-director/references/SHOT_GRAMMAR.md)、[VISUAL_IP_BIBLE](https://github.com/entropy-student/spike.skill/blob/56619efc8b620f8e8304fca7a0e73ee8ba8244f5/jingsui-story-video-director/references/VISUAL_IP_BIBLE.md)、[QUALITY_GATES](https://github.com/entropy-student/spike.skill/blob/56619efc8b620f8e8304fca7a0e73ee8ba8244f5/jingsui-story-video-director/references/QUALITY_GATES.md)、[VIDEO_CALIBRATION_PROFILE](https://github.com/entropy-student/spike.skill/blob/56619efc8b620f8e8304fca7a0e73ee8ba8244f5/jingsui-story-video-director/references/VIDEO_CALIBRATION_PROFILE.md)。它支持旧密度弧、人物/关系、主观夸张、标点镜头与数字QA的比较，但**不等于**HANDOFF所指具体两个本地附件 `SKILL(20260919-022919).md` / `SKILL(20260919-030233).md`。

### 2.3 Git演进、A/B/C与案例包可得性

| 材料 | 可核实事实 / 限制 |
|---|---|
| [六层→三层补丁26deb12](https://github.com/entropy-student/spike.skill/commit/26deb1282bbac2f5973a0b4469f276708f152a0b) | 把戏剧层级、意图、单帧与时间映射并入Shot/Beat，明确能力不删；全局策略仍保留。部分单帧操作解释变概括，不能推断“三层天然丢能力” |
| [C补丁9718a42](https://github.com/entropy-student/spike.skill/commit/9718a42752565fc7e8d96cfde5250bfa18ef8f1a) | 实际只加强Semantic Shot有意义阶段变化及递进QA，明确保留Visual Beat能力；没有设置减图片目标或改Part4 |
| [A/C交接记录5779748](https://github.com/entropy-student/spike.skill/commit/57797484239385685905a154ef1025671c6a3e15) | 记录H019 A14Shot/41VB→C12/41；H015 A14/36→C9/36。数量来自记录，本轮未取得原始对照包回算 |
| [嵌套结构补丁2191f1c](https://github.com/entropy-student/spike.skill/commit/2191f1cdacd88ad9e375f91b5cd859011a649f3f) | 完整Beat对象嵌入`semantic_shots[].visual_beats[]`，去掉重复顶层入口；保留 |
| A/B/C完整原件、C修改提案、H019/H015 Part3 ZIP | Git当前树、Part3历史及所查本地目录未取得。HANDOFF的Library路径不是“ZIP已在Git仓库”。不能评价B细节或冒称重新阅读了两集完整Shotbook |
| 本地H019 Part4终检包 | 实际读取任务和说明：12个C-Sxx / 41画面位置、38GENERATE/3DERIVE_EDIT、2张长期参考。它是下游辅助证据，不等同于原始Part3策略、A/C原件或最终成片 |

本地可读证据是 `_h019_execution_package/H019_酒店价格_第四部分图片执行包_终检版/图片任务.json` 与执行说明；位于本次工作树的同级工作区，未将其拷贝成第三份产物。任务SHA256为 `247596f838461f9f0a630d0186e8fc3c247f7a70e1ecc796e9474bb9a2c31726`；终检ZIP SHA256为 `5ba3aaba28ee0a46f0b6ba1e641db5f686c14df19ee25dc51fde2738580561bf`。后续复核应按来源和hash定位，不能仅靠同名包。

### 2.4 不能把历史PASS扩大成什么

G4R的PASS主要是规划、结构与覆盖验证，不是当前3+2风格或当前整集图片/成片的验证。Memory历史版本出现过931/1093字覆盖不足，后来修复；Search盲测接受44Beat、约3.04秒中位的证据阅读，并发现重复Shot归属与POV偏置。它们支持明确检查方法，不支持“一定要更多镜头 / 更少手机 / 更快切”。

历史生产补丁的86→62图有试生图相似状态依据，不是把Semantic Shot数量减少等同于成片变好；后续62图仍出现多手、错误屏幕方向和回忆天气失配，说明结构通过与执行通过必须分开。

## 3. 逐项发现与修改建议

### R1｜保留三层与C补强，纠正迁移归因

**现有事实：** 正式§3、5、7、8、9将层级/意图/单帧/时间收在策略、Shot、Beat；§8/18/27采用C补丁。HANDOFF已纠正C与更早综合Skill迁移两条时间线。

**发现的问题：** 把全局能力弱化直接归因于C会导向回滚正确的故事推进规则；另一方面，声称字段保留就一定是旧版完整超集也不成立。

**建议：保留。** 三层和C不回滚，恢复必要操作解释到当前字段及策略文档；不恢复六份独立中间文档。新版整理结构可以变化，但每项能力有承接位置。

**采用后的不同：** 少一个Shot并非少一张图；reaction/setup/reveal/证据仍可独立。H01912/41、H0159/36只是已记录结果，不能设成后续目标数。

### R2｜让总体策略在逐图前留下可核对的段落选择

**现有事实：** §6已要求全局策略；§18/27已要求全集检查。G4R策略明确写功能区、控制物件转移、强度弧、段落关系；HANDOFF P1要求规划阶段处理。

**发现的问题：** “世界/场景系统、强度变化、主发动方式”的列项未明确各段最少如何落实。可以形式齐全，却每段仍只有“主角看手机”，最后QA才发现重复。

**建议：修改/恢复操作说明，优先级最高。** 在现有策略文档按主要段落说明起止故事状态、主要载体、人物可见行为/世界后果、空间状态、强度和画面关系；这些选择再落实到Shot/Beat。不是每个分句填一张新表，也不新增统计系统。

**采用后的不同与代价：** 下游执行锁定方案，QA验证已有设计。增加少量前置思考；收益是提前暴露整体单调，而非花钱生成后再补导演。单地点、长insert和有意重复仍可成立。

### R3｜现实演绎优先，但不能用比例压掉必要证据

**现有事实：** §4、15、16、18已有现实行为/后果优先思想；没有Scene Tableau占比。HANDOFF P2倾向恢复正文真实演绎，比例未定。

**发现的问题：** 局部UI、reaction、object各自成立可能连续承担全部正文，缺少可观察行动和不同后果。H019下游C-VB01–17约0:00–1:24多为室内人物/手机；两张客房后C-VB20–31约1:36–3:06又集中报价/条件/认知，形成具体复查线索。它不直接证明原始Part3或最终播放失败。

**建议：修改优先级解释。** 优先利用锁稿已有的人物做事、世界状态、关系和后果承载正文；UI呈现确切条件，reaction表现受影响体验，不能默认每段“再看一页”。不设Tableau比例，不因长证据链自动失败。

**采用后的不同与取舍：** H015选题切口中的出行/雨若被完整锁稿保留，现实后果应支持认知变化，不能只换天气图标；H019匿名客房夜→晨可在上游授权边界内表现库存时效，但不能暗示证明个体涨价原因。Search的同页视线下移/证据阅读仍是有效导演，不强加地点或人物行动。锁稿缺事件要回Part2，不能为“正文主力”补写事实。

### R4｜恢复Scene System先规划的具体职责，不恢复Scene Master配额

**现有事实：** §6已有世界/场景系统，§17已有空间连续；最新Part4§6区分“需要稳定”和“必须生成独立master”。HANDOFF旧附件复查记录4–8Scene Master是旧明确要求，50镜常用5–8主要空间是经验值，原句附件未取得。

**发现的问题：** “Scene System”容易被理解成出问题再补参考图，或者误走向先生成多张房间图。戏剧Scene与物理地点同词，也容易混淆。

**建议：恢复能力、删除错误等同。** 逐图前明确实际地点/功能区、故事用途、人物和重要物件关系、进入/离开、时段天气、状态变化及重复锚点；只锁影响故事的空间。说明戏剧Scene是变化段落，物理location是地方。

**采用后的不同与取舍：** Memory一个房间的活动桌/溢出区/持久笔记区足以丰富；不用新增四间房。Part3给稳定需求，Part4决定是否生成mini master或使用已接受完整图。额外预生成0张不代表场景规划完成，也不是要保持0张的目标。

### R5｜把“实际发生”解释为授权故事世界中的可观察状态

**现有事实：** §4强调真实事件并禁止默认字面符号；§6–9/16仍允许演化隐喻、联想蒙太奇。Part2§5.2明确比喻驱动；HANDOFF P6允许可辨主观脑补。

**发现的问题：** 字面理解硬门会误禁已锁隐喻、回忆、假设、主观状态、匿名一般机制示范，缩窄已有能力。相反，泛化隐喻例外又可能把“怀疑平台针对我”画成真实后台事实。

**建议：澄清，需显式接受其范围。** 区分频道故事事件、已建立比喻世界事件、可辨主观/计划/假设/回忆、受机制约束的一般示范。都要有观众可读状态、事实身份和因果边界；不能凭空新增重要故事内容。

**采用后的不同：** 不准旁白提“方向盘”就画漂浮方向盘解释；已经建立且锁定的比喻世界可以持续演化。不恢复人格化AI解释代理。H019客房夜/晨是一般性房晚失效示范，不能证明主角那次订单实际发生该场景或具体涨价原因。

**具体可执行性风险：** 本地C-VB10验收希望“一眼看出想象”，设计却主要写“明显主观想象气氛”。建议在Part3锁定与现实区分的画面关系/表现方式，让Part4编译它；本轮未看该最终图，不能判定实际图片失败。

### R6｜Shot阶段变化、Beat图像增量与重复分别判断

**现有事实：** §8要求有意义故事变化；§9保留图像级意义，明确不按SRT/秒数配额。

**发现的问题：** 可把C误用为“每张图都要重大转折”而压掉反应/证据，也可只检查同一Shot内冗余，漏掉跨Shot的相近图。H019C-VB25/26/27焦点分别是报价+条件、价格+条件、单个报价卡+条件，存在复查线索，不是自动合并结论。

**建议：保留并补方法。** 新Shot看故事阶段；新Beat看新增动作、因果状态、发现、关注点、体验或落点；删除/合并一图后会丢什么，是实用测试。跨Shot也检查图像增量与阶段递进。

**采用后的不同：** 三张如果新增不同条件发现可保留；仅重复同一证据可合并视觉承接，口播不删。无法取得原Part3与最终视频时，只提出复查，不直接判冗余。必要setup、reaction、POV discovery、真实蒙太奇和长hold保留。

### R7｜机器Beat明确同一个最终静帧状态

**现有事实：** §9有事件、state_before/after；§26的人可读Shotboard明确有“最终画面状态”。历史生产补丁记录“after-bite却画成入口前”硬失败。

**发现的问题：** before/after不唯一确定最后一张图选哪一刻。人可读状态若未进入同一机器事实，下游可能自行选择动作起点；把整段动作一起写prompt又可能多状态拥挤。

**建议：修改最小合同，不加独立文件。** 在Beat中明确最终可见状态，供Shotboard同源展示；before/after只是因果上下文，不必须同框。仅真正新增意义才拆，不拆动画微帧。

**采用后的不同：** “主角尚未发出回复”能用空输入框/没有主角已发消息读清楚，不硬卡手指距离；这不能用于证明“朋友尚未回复”。“已咬后咀嚼”不能还把食物悬嘴前。下游不负责为导演选关键时刻。

### R8｜单帧恢复注意力操作解释与非文字reveal检查

**现有事实：** §9、10、14、15有焦点/密度/背景/withheld，历史Blueprint明确入口/出口、非文字泄露和小屏/字幕避让。

**发现的问题：** 字段名称存在但主焦点怎样获胜、DUAL为何成立、FIELD何时合理、注意力怎样跨图交接较弱；setup可能文字遮住但绿色成功图标已泄露结果。也可能把高强度误当高密度。

**建议：恢复说明。** SINGLE默认，DUAL关系与阅读次序清楚，无第三个同等竞争焦点；FIELD有整体模式理由。用尺度/色调/隔离/gaze等显著性使焦点可读；说明进入/交接/重置/有意跳切。reveal检查文字、颜色、图标、数量和表情。强度、信息密度、切换节奏分别规划。

**采用后的不同与成本：** 可在现有Beat验收写少量关键条件，避免概念字段模板化；不强制每张写九宫格坐标或完整显著性评分。小屏和已知字幕区域是规划检查，最终实图/成片才验证实际可读；不恢复统一25%、1秒、底部15%硬阈值。

### R9｜POV按局部任务落实；连续性优先级有硬边界

**现有事实：** §11/12已要求每Beat的pov_reason和物理视角；§13优先情绪→故事→节奏→视线→二维→三维连续。Search历史修复8/44Beat的旁观偏置。

**发现的问题：** Shot写混合POV不保证子图真的共享发现；“高层可以牺牲低层”可能被过读为可放弃屏幕几何、时空或身份连续。

**建议：保留并澄清。** 主要策略可混合，子Beat定实际旁观/关系旁观/主角POV/手部/越肩/客观insert及理由；跳切取舍不能授权错误事实、数量、身份、回忆时间天气或不可能屏幕阅读关系。

**采用后的不同：** 观众需要读证据就与主角一起看，读受影响表情就看主角；不机械轮换。镜头变化有意义才发生，不能把第一人称口播等同第一人称摄影。

### R10｜连续性说明对象范围，保留构图回扣能力

**现有事实：** §17保护关键身份/状态，§24说单主变化是工具而非普遍硬门。下游任务有邻接连续、回忆和非相邻构图回声。

**发现的问题：** 统一“主角、手机、页面必须保持”可能被继承到无主角的客房insert；本地执行说明另用“仅作用可见相关对象”修补，显示接口可更明确。将所有callback都当编辑源则职责错位。

**建议：修改。** 写真正出镜相关对象和适用范围；变化与不变有原因。区分邻接连续、同一原事件回忆、非相邻构图/母题回扣。Part3锁关系，Part4定技术source。少量有意义母题，不强制每集都有callback。

**采用后的不同：** 客观房间不塞主角；回忆必须匹配原事件天气时间；构图回声可以重生成。单主变化适合同机位setup/reveal，不限制新POV/新空间只有一个差异。

### R11｜澄清时间输入来源，保留直接语义锚点

**现有事实：** §3/19称“Part2产出计划SRT”；Part2§18 Writer输出没有时间戳，§21将时间转换交后续职责；HANDOFF当前沿用给定SRT/语义字幕单元、不引入Speech Unit。Part5–6尚未完成迁移。

**发现的问题：** 谁必须产生计划时间表述不一致，可能让Writer或Director恢复字/秒估算。给定计划时间、真实TTS时间、字幕结束和静默窗口没有完全区别。

**建议：修改来源表述。** Part3接收锁稿及当前已给定计划SRT/语义单元，记录来源/计划状态；不推定Writer计算时间，不自行造字符/秒。缺时间可先做明确草案，但完整时间QA/交付不能声称通过。

**采用后的不同：** hold可延续已给定停顿窗口，字幕不强行覆盖整个静默；真实TTS绝对切点重算保留语义/reveal，不自动重新导演。cue内部毫秒未有依据时保留语义位置交后续对齐，不补假精度；确实容纳不下返回时间职责。此建议澄清接口，不能代替尚未完备的Part5规范。

### R12｜100%覆盖补上可复核方法，不恢复Speech Unit工程

**现有事实：** §20要求Semantic Shot与Visual Beat都覆盖全部锁定口播。旧编译合同能核对文本范围，Search盲评发现段落重复归属。

**发现的问题：** cue引用完毕或字符总数相等不证明没漏、没乱序、没重复。多cue共图和一cue多图可能被当“必须一一对应”或重复播台词。

**建议：修改。** 保留现有cue/文本范围，按顺序核对两层覆盖；必要时指出一cue内子句/语义落点。一cue多图表示分担视觉承接，不是重复口播；不创建强制SpeechUnit。非口播标题/元数据不计入锁定口播覆盖。

**采用后的不同：** 难画句可由适合图共同承接或返回上游，不能静默删。人可读Shotboard和嵌套Shotbook来自同一内容，技术复用不改变播放顺序/语义锚点。

### R13｜图中文字合同、字幕层与3+2参考继续分清

**现有事实：** §1/21有3角色+2风格、成人生活化基线；§22/23禁止后期修图片关键字，允许原生UI；旧Skill角色也是成年角色，但使用大头小身、细线四肢的极简比例及较大动作/场景库。

**发现的问题：** “禁止overlay”可能误读成视频不许字幕；精确字串可能被下游收窄（H019“无房/售罄”曾被错锁成唯一售罄）；参考场景内容也可能被当本集固定场所。

**建议：保留并澄清。** Part3定必要字符串或完整允许集合，不增加姓名/日期/金额/logo；Part4原生渲染和逐字QA。普通视频字幕是后续视频层，Part3做必要避让，不接管排版。3+2锁身份/画风，餐馆/食物/动作不被风格图锁死；具体Beat参考绑定属下游。

**采用后的不同：** 不恢复16表情/18动作/6–10固定常用场景资产体系，也不恢复大头小身的极简比例。代价是更多常用姿态重新生成、可能增加成本/漂移；如需补偿，应审查Part4.5已有完整图检索元数据，不反向改故事或本次顺手改库。

### R14｜更新下游QA归因，保留硬失败与小偏差

**现有事实：** §23–25已把图片执行留给Part4；最新Part4正式落地图片规划与执行职责，并强调整集结果QA。

**发现的问题：** 粗称“重复都回Part3”或“成图错就重导演”会混淆规划、编译、生成三类原因；反过来把所有细节硬门会浪费尝试费用。

**建议：对齐已批准边界。** 原规划载体/场景/阶段不合理→Part3；正确规划被编译成相似或不充分任务→Part4+4.5图片规划Agent；正确任务成图偏离→执行Agent按retry/fallback/HOLD处理。Part3不承担正常流程每图末端验收，不新增独立Review Agent。

**采用后的不同：** 物理不可能、错误假设/已完成、关键文字/数量/身份、重要回忆时空等仍硬失败；无害手指距离、景别、背景纹理可记录。Part3验收以故事意义为中心，避免给下游不必要像素死锁。

### R15｜发动方式验证范围和旧schema不能过度声称

**现有事实：** §6称十种发动方式“历史已验证”；G4R汇总直接列四种主发动方式案例。旧Visual Beat schema也不完整约束当前所有event/withheld/pov_reason等信息。

**发现的问题：** 配置清单被当成十种都已实证，会夸大保障；schema通过被当整包语义/覆盖/连续性通过也会漏检。

**建议：修改证据表述。** 称支持的配置选项，另标行动/反应、演化隐喻、重复摩擦、调查/发现的直接案例；其他可按故事采用，不能声称已独立验证。旧schema只作结构参考；本次不另增schema文件或宣称完成runtime升级。

**采用后的不同：** 新配置靠具体策略与QA理由，而不是理论名称自动放行。历史拟人化AI、解释性类比或旧视觉风格案例，只迁移方法，不原样授予当前图形/事实权限。

### R16｜整理重复位置，保留原能力与返回码

**现有事实：** 事实/anti-PPT在§2/4/16/22，单帧在§9/14/15，全局检查在§18/27，接口/QA在§23/24/25交叉出现。

**发现的问题：** 同一规则多处出现可有帮助，但§16把当前不可自动使用的“明确解释图”列成最后一步，易被理解成例外；分散的接口细则也使查验费力。

**建议：整理表达。** 完整提案按输入→全局→Shot→Beat→镜头/单帧→跨帧→时间/覆盖→输出/QA串联；一个位置解释原则，在下游合同和QA作核对。删除解释图的自动fallback暗示；不删已有意图、景别、原型、密度、物理门、连续性、文本和return能力。

**采用后的不同：** 更容易沿一次生产流程检查，仍有三类输出和现有return。不是重新命名所有字段，也不要求每集新增Owner审批环。

## 4. 旧规则应怎样处理：明确行动后果

以下把直接Git材料和只能由HANDOFF核实的历史规则分开；没有取得原件的数字不假装精确源码已验证。表内“建议”未批准。

| 旧 / 当前规则与证据 | 实际会让Agent怎样做 | 本次建议及收益/副作用 |
|---|---|---|
| 六层独立产物→三层；实际26deb12 | 旧要逐层独立表达，现将意图/单帧/时间合入Shot/Beat | 保留三层；恢复必要解释。全量恢复会多份维护与重复事实 |
| 全局世界/强度/关系；G4R策略及当前§6 | 逐图前选整集发动、空间和变化 | 保留并具体化；删除它会让局部正确代替整集导演 |
| Scene Tableau正文主力/占比；HANDOFF旧附件记录、旧Skill人物/关系QA | 先找人物做事/现实场景，而非每段屏幕 | 恢复优先思想；不恢复比例。硬占比可能挤掉Search必要证据、诱发添动作 |
| 4–8Scene Master“先建立”；只由HANDOFF核实指定附件 | 即使小故事也先生产多张场景参考 | 不恢复数量；先规划逻辑世界，参考图由Part4按需要决定。直接恢复增加成本和参考依赖 |
| 50镜通常5–8主要空间；HANDOFF经验记录 | 可建议空间丰富度，但不应强加地点 | 不恢复普遍范围；Memory一房多区可有效，不能为数值改故事 |
| 无意图静止约6秒、3镜同类、15–20秒两类型；只由HANDOFF核实指定附件 | 提醒检查连续重复和长静止 | 保留按意义复核的功能；不恢复固定窗口硬门。无动作但正在阅读/等待/累积不自动失败 |
| Hook高密、尾段降密；旧Skill密度弧及HANDOFF | 预设开头/结尾图形变化 | 改为故事所需进入/好奇/转折/释放；不固定高密。强度高可以低密，硬套会塞满开头 |
| 旧Git工程范围“以2–4秒为主但不机械”、历史约2.7中位目标；HANDOFF明确拒绝固定规则 | 原意是节奏参考；若误用为固定配额，会按平均时长补图或合图 | 不恢复硬卡；旧SHOT_GRAMMAR也明确不要固定3秒切。给定语义时间承接与长hold复核仍保留，不能把旧经验全部说成硬门 |
| 历史5.9字/秒 / 节奏样本 | 把参考脚本估成计划时长 | 不恢复Director授权；本集计划由给定资料决定，真实TTS后重算绝对切点 |
| score≥3自动切Beat；Git旧SHOT_GRAMMAR | 新地点/字面化/联想累加就自动多图 | 不恢复自动阈值；以新增图像意义切，避免装饰性切图 |
| 0–2母题、1–3主要视觉因素；**当前§6** | 集中少量变量，不要求每集母题 | 本次保留；不是图数/场景数配额。不能笼统说“全部数字已删” |
| 16表情/18动作/6–10常用场景；Git旧VISUAL_IP_BIBLE | 先建庞大固定IP库，再套故事 | 不恢复；与当前3+2/成人生活基线不同。承认重复生成成本，不用假复用指标补偿 |
| 每集复用N素材/复用百分比；旧profile及HANDOFF | 为达标选旧图/改镜头 | 不恢复；profile自称工程目标而非作者实测比例。素材服务故事，完整图可兼容才复用 |
| 标点镜头、关键词卡；Git旧Skill | 用暗场/大字/强调卡制造停顿重点 | 不恢复旁白字卡；可用已锁行为、空间、构图/尺度/色调和落点承担强调 |
| 完整Frame Blueprint含attention/text/brand/UI；旧直接材料 | 每张说明注意力、阅读与信息边界 | 恢复关键内容到Beat，不恢复独立文件、全字段强填及像素阈值 |
| 小屏/字幕安全、1秒/25%/15%；旧单帧材料 | 缩小检查或按统一数值验收 | 保留可读/避让检查；不恢复统一硬阈值，实际字体与视频排版后续验证 |
| 参考视频4fps等校准；Gitprofile、HANDOFF P4 | 收参考视频、实测节奏后指导规划 | 不新增为本项目正式输入/阶段；按Owner当前链外方向，保留外部研究可能性，不声称已最终批准恢复 |
| SpeechUnit / Frame Execution独立结构；旧编译材料 | 新建语音中间层/执行层 | 本次不恢复；沿给定SRT语义锚点，机器Beat与派生Shotboard同源 |
| 历史可裁切拼装/补字fallback，被生产补丁及当前禁令覆盖 | 为省生成或修文字拼图/overlay | 不恢复；完整图与原生文字硬边界继续有效 |

“完整恢复旧版”有真实收益：前置总体规划更明确、人物行为/空间/强度和重复报警更可操作；也会带回固定资产负担、阈值切图、数字分布追求、与当前事实/anti-PPT/时间/完整图边界冲突。应恢复前者的能力，在当前三层承接，逐条拒绝不适用的生产要求，不能整套回滚或整套宣称已经超越。

## 5. 当前28节覆盖去向

对应[完整提案](STORYBOARD_VISUAL_DIRECTOR_REAUDIT.md)章节。这里仅说明重整承接，正式文档没有实际重排。

| 当前节 | 建议动作 | 提案承接 |
|---|---|---|
| 1职责/3+2 | 保留，补最新下游角色边界 | §1–2、12 |
| 2保护输入 | 保留，明确事实属性 | §2、4 |
| 3三层 | 保留，不恢复六层文件 | §3、7–8、14 |
| 4事件硬门 | 澄清隐喻/主观/一般示范，anti-PPT保留 | §4 |
| 5戏剧层级 | 保留，区分地点与戏剧Scene | §6–7 |
| 6整集策略 | 具体化段落/空间/强度，修验证范围 | §5–6 |
| 7意图 | 保留先意图后镜头 | §7–9 |
| 8Shot | 保留C，明确阶段单位 | §7 |
| 9Beat | 保留economy，补最终状态和可执行内容 | §8 |
| 10setup/reveal/reaction | 保留，补非文字泄露 | §8、11 |
| 11POV | 保留子图理由与混合策略区别 | §9 |
| 12物理 | 保留硬门 | §9 |
| 13景别/优先级 | 保留，限制连续性牺牲范围 | §9 |
| 14单帧字段 | 保留原型/焦点/密度，补说明 | §8、10 |
| 15注意力/背景 | 恢复交接与显著性操作，背景不乱加 | §10 |
| 16机制 | 保留优先顺序，去解释图自动例外暗示 | §4–5 |
| 17连续性 | 保留ID/可辨识/时空，补范围 | §6、12 |
| 18全集 | 在前置策略解决，连续QA验证 | §5、15 |
| 19时间 | 修输入归属，补pause/字幕/真实音频 | §2、13 |
| 20覆盖 | 保留双层100%，补按序文本复核 | §13 |
| 21风格 | 保留成人生活3+2，不恢复旧库 | §12 |
| 22文字/UI | 保留原生文字，允许集合/字幕区别 | §10、12 |
| 23Part4边界 | 对齐最新Part4/4.5正式职责 | §2、14 |
| 24单主变化 | 保留工具，不变普遍硬门 | §11–12、14 |
| 25图像反馈 | 保留硬/小偏差，补三类归因 | §15–16 |
| 26输出 | 保留嵌套唯一入口，人读同源 | §3、14 |
| 27QA | 整理前置/局部/连续复核 | §15 |
| 28returns | 保留现有原因，明确职责 | §16 |

## 6. 建议采用顺序、未决取舍与回归

优先处理R2–R5：总体规划的段落落实、现实演绎优先思想、Scene System与参考图分工、合法事实层。它们直接回应P1/P2/P3，不能仅靠补几个末端QA项代替。再处理R7/R11/R12：最终静帧、时间来源和覆盖方法，减少上下游自由解释。其余重点是补操作说明、去重复与对齐已批准下游合同。

尚需决定的是本次建议是否进入正式Part3及其精确强度；尤其“现实演绎优先”如何指导具体题材，而不变成Tableau比例，主观/一般机制示范怎样在锁稿事实边界内获得授权。完整提案给出一种可整体审阅方案，不表示这些问题已被用户批准。Scene System先规划可以与无新增mini master并存；既有0–2/1–3集中度约束本方案保留。

本轮没有执行新生图、TTS或成片，也没有伪造缺失A/B/C包测试。文档层验证只证明两个提案文件范围、来源链接、正式文件保持不变和语义承接；不证明新规则生产效果已达标。

若后续采用，建议用少量已有题材作完整规划回归，避免为审查新建生产体系：

- **H019：** 取得Part3原包后重看各段载体、查条件的图像增量、匿名客房机制边界、可辨脑补、认知/选择递进。保持锁稿/覆盖，不先规定合并C-VB25–27或增地点。
- **H015：** 取得完整锁稿和Part3原包，核对出行/雨的世界后果与天气概率边界、回忆时空，避免凭选题摘要编动作。
- **Memory：** 验证一房多功能区、累积/清空/持久笔记可维持变化，隐喻连续比新奇优先；迁移方法时剔除当前不允许的解释代理。
- **Search：** 验证必要长证据阅读、实际POV、setup颜色/icon不泄露，以及Shot/Beat覆盖无重复。不要以屏幕多直接判失败。

共同通过条件：锁稿逐字/顺序无损；不新增个案事实；整体策略具体并落实到每张；Shot与Beat分工正确；最终状态、POV、焦点、连续/reveal可执行；时间锚点可追溯；三类输出一致；Part4无需补导演；没有按图数/场景数/编辑率凑配额。真实图片和成片效果需后续独立验证，证据不足时保留问题状态。
