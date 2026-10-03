# Part 4 — 图片 / 资产执行

## 0. 文档职责

本文件只定义 Part 4 当前有效的图片 / 资产执行规则、输入输出边界与 QA 要求。

- Part 0–3 是上游正式事实，Part 4 不得改写；
- `source-snapshots/04-image-assets/` 仅用于来源、证据与追溯，不参与运行；
- 当前状态、当前 Gate、待决问题与下一步统一记录在 `../REVIEWER_HANDOFF.md`；历史迁移、Owner 决策与旧执行记录保留在 `../HANDOFF.md`，默认不作为执行启动面。

---

## 1. Part 4 的职责边界

### 输入

Part 4 接收：

1. Part 2 锁定剧本 / Production Subtitle 语义；
2. Part 3 的整集视觉策略；
3. Part 3 的 Semantic Shot；
4. Part 3 的 Visual Beat；
5. Visual Beat 中已经确定的故事意义、可见事件、POV / 物理视角、景别、setup/reveal、连续性与单帧要求；
6. Part 3 封板的 3 Character Master + 2 Style Reference；
7. 当前集确有需要时产生的单集角色 / 场景 / 道具 / UI 参考；
8. Part 4.5 当前 active catalog 与对应完整图片。

### 图片规划 Agent：Part 4 + Part 4.5

默认由同一个**图片规划 Agent**完成 Part 4 与 Part 4.5 的生图前工作；Part 4.5 是素材库 / 复用服务职责，不要求独立成另一个 Agent。

图片规划 Agent 负责：

- 单集资产需求发现；
- canonical reference lock；
- 调用 Part 4.5 检索历史完整图片，并判断兼容性、`status / reuse_scope / reuse_modes`；
- 为每个 Visual Beat 锁定：新生成 / 基于旧图修改 / 完整图直接复用，以及仅作参考的历史图片用途；
- Visual Beat → 可执行资产绑定；
- Prompt / Edit 编译；
- 前置依赖、fallback、验收与失败返回条件；
- 执行包完整性 QA；
- 将全部执行信息编译为一个自包含图片执行包。

图片生成完成后，同一个图片规划 Agent 可以再次承担 Part 4.5 的生产后整理：把合格的最终完整图作为未来素材候选，核对并记录其复用资格。无需为此新增独立 Part 4.5 Agent。

### 生图执行 Agent

生图执行 Agent 是下一环节。它只按已锁图片执行包：

- 生成 / 编辑 / 完整图复用；
- 按既定验收条件完成逐图 QA；
- 全部图片完成后按原 Beat 顺序做整集结果 QA；
- 按既定 retry / return 条件处理失败；
- 保存最终 raster、路径、hash 与运行记录。

它不得重新查素材库、改变复用方式、替换参考图、改 POV / 镜头 / 人物 / 故事意义、增加临时资产或重新导演。

### 两个完成状态

必须区分：

1. **Part 4 规划完成 / 执行包完成**：所有目标 Beat 已形成自包含任务，真实参考、执行方式、依赖、fallback、验收与包 QA 均完整；
2. **Part 4 图片生产完成**：执行 Agent 已得到全部最终图片，逐图 QA、整集结果 QA、路径 / hash / 映射 reconciliation 均完成且无未处理 HOLD。

交出执行包不等于全部图片已经生产完成。

### Part 4 不拥有

Part 4 不得：

- 改剧本、对白或观点；
- 改 Semantic Shot / Visual Beat 的故事意义；
- 为迁就现有图片改变事件；
- 自行改 POV / 镜头策略；
- 为降低成本把两个意义不同的 Beat 合并；
- 发明上游没有的故事事件；
- 改变 Part 2.5 已锁定的最终语音时长 / SRT 时间；
- 负责最终视频渲染。

最终语音时长与正式 SRT 已由 Part 2.5 锁定；Part 4 不得重新计算或改变。后续视频时间轴装配 / 成片属于 Part 5；执行与项目管理属于 Part 6。

---

## 2. 当前执行链

```text
Part 3 锁定视觉规划
→ 图片规划 Agent（Part 4 + Part 4.5）
   → Episode Asset Requirement Extraction
   → Canonical Reference Lock
   → Part 4.5 历史素材检索 / 兼容性判断
   → Execution Decision
   → Beat Asset Binding
   → Prompt / Edit Compilation
   → 依赖 / fallback / acceptance 编译
   → 执行包 QA
→ 图片执行包
→ 生图执行 Agent
   → Image Execution
   → Frame QA
   → Episode Result QA
   → Output / hash / mapping Reconciliation
→ 图片规划 Agent（Part 4.5 生产后整理）
   → 未来素材候选 / 复用资格登记
```

这是职责链，不要求每一项对应独立 Agent、独立文件或审批环。

---

## 3. Episode Asset Requirement / Asset Manifest

`Asset Manifest` 是本集资产需求的 canonical machine-readable truth。`Asset Inventory` 如存在，只是从 `Asset Manifest` 派生的人类可读视图，不拥有独立事实。

每集先识别可能出现的资产：

- CHARACTER；
- SCENE；
- PROP；
- UI_DOCUMENT；
- STYLE。

`Asset Manifest` 至少记录：

- `asset_id`；
- `asset_type`；
- `scope`；
- `reference_status`；
- description；
- required views；
- canonical refs；
- used-by-beats；
- notes。

重要边界：

> `Asset Inventory` 若存在，只是 `Asset Manifest` 的展示视图；它不产生新事实，也不代表所有被旁白提到的东西都必须进入某个 Beat。

真正绑定仍必须发生在帧意义和可见内容确定之后。

缺失真实参考不得伪造路径，必须显式标为 missing / hold / to-generate。

---

## 4. Canonical Reference Lock

当前资产参考体系可以使用 Character / Scene / Style / Prop-UI Bible 与 Reference Manifest，但遵循单一事实源：

- Part 3 已锁定的长期 Character Master 与 Style Reference 不在 episode-local Bible 中复制定义；
- episode-local Bible 只补充本集新增或变化的信息；
- Reference Manifest 负责真实 reference path / availability 等执行可用性事实。

当前长期视觉基线由 Part 3 定义：

### 长期 Character Master

- 主角；
- 男生朋友 / 舍友；
- 女生朋友 / 同事。

### 长期 Style Reference

- 主参考：双人生活互动；
- 辅助参考：单人生活场景。

不恢复旧的“长期固定面馆 / 工作桌 / 固定 UI / 固定道具”作为默认资产体系。单集确有需要时，可以创建 episode-local reference / mini bible。

---

## 5. Character Identity / Reference Precedence

Recurring character 必须存在 canonical identity truth。

完整历史能力保留：

```text
canonical identity
> approved Character Master
> approved angle / pose reference
> accepted compatible production frame
> prompt prose
```

以前生成的帧：

- 可以帮助 continuity；
- 可以作为兼容的 edit source；
- 可以作为 pose / expression / composition reference；

但不能反向定义角色：

- 年龄 / 成熟度；
- 脸部几何；
- 身体比例；
- 发型大轮廓；
- 服装身份；
- 角色关系。

如果 source frame 已经发生身份漂移，不得继续作为 derivation chain 的来源。

QA 必须按可见范围判断。只看到手、袖口或背影时，不为了“方便过 QA”额外露出脸或全身。

---

## 6. Scene / Prop / UI Continuity

对本集对象，满足以下至少一项时，应锁定 episode-local stable ID 与必要连续性约束：

- 同一对象重复出现在多个 Visual Beat；
- 前后状态需要稳定连续；
- 对象承担关键因果证据；
- 不锁定参考时容易产生明显漂移。

典型对象包括 recurring supporting character、scene geometry、causal prop、UI shell / document shell。

**锁定稳定约束不等于必须额外生成 mini master。** 可按风险依次使用：

- 已有 canonical reference；
- Part 4.5 中兼容且获准用于当前用途的完整旧图；
- 本集较早生成并已通过 QA 的最终帧；
- 只有确有必要时才预生成 episode-local mini master。

若后续任务依赖本集较早最终帧，必须预先写明前置 task、用途和准入条件；只有前置图通过 QA、实际文件落盘并记录真实 hash 后，才能作为正式 source / reference。

一次性、低连续性、低因果风险的场景 / 道具 / UI 不单独生成临时参考资产，直接在最终图片任务中处理。

需要锁定的内容可包括 silhouette / geometry、color、placement、screen axis / camera side、allowed state variants、causal quantity 与 reference path。

连续性不是“看起来差不多”，而是同一对象身份稳定、观众能认出来；状态变化只改变故事事件要求改变的部分。

---

## 7. Frame Blueprint 兼容边界

`Frame Blueprint` 可承载：

- dramatic job；
- focus mode；
- P1 / P2；
- attention path；
- composition；
- density；
- text policy；
- brand mode；
- UI mode；
- continuity preserve；
- frame delta；
- withheld information；
- acceptance criteria。

Part 3 Visual Beat 是 canonical 上游。`Frame Blueprint` 若存在，只能作为兼容视图 / 编译中间态，不得修改 Visual Beat 的意义、POV 或镜头策略。

---

## 8. Beat Asset Binding

绑定发生在 Visual Beat / 单帧要求明确之后。

只绑定：

- 最终画面实际可见；
- 因果上必需；
- 为角色身份 / 场景 / UI / 道具连续性所必需；

的资产。

不得：

- 因为旁白提到了某对象就绑定；
- 为了利用已有资产反向修改 Beat；
- 把一堆候选参考交给执行器，让执行器自己导演；
- 因为长期资产存在，就默认把全部角色或全部画风参考绑定到每个任务。

每个任务只绑定实际需要的参考；未出镜角色、不承担当前画面风格锁定作用的参考图，不进入该任务。

每个目标 Beat 必须在执行前编译为一条自包含图片执行任务，至少明确：

- visual_beat_id；
- primary execution decision；
- primary source（如适用）；
- supporting references 及各自用途；
- prompt 或 edit instruction；
- continuity / preserve requirements；
- forbidden changes / negative constraints；
- exact required text（如适用）；
- output name / delivery spec；
- acceptance criteria；
- fallback / HOLD。

执行 Agent 不应再跨多个文件自行拼接创意或执行决定。

---

## 9. Production Records 与 Part 4.5 Active Library

当前需要区分“真实生产记录”和“未来可复用素材库”。

### Production Records

`outputs/<episode>/runs/<run>/` 或等价记录负责保存真实生产事实，例如：

- run / input version；
- execution mode；
- source / supporting refs；
- provider / model；
- actual prompt / edit；
- final path / hash；
- QA / retry / return；
- superseded 关系。

生产中过关不自动等于可跨集复用。

### Part 4.5 Active Library

当前正式历史素材复用入口是：

```text
part4_5/library/catalog.jsonl
part4_5/library/images/
```

`catalog.jsonl` 是当前 active 素材索引。历史 Reference Library / Registry / accepted outputs 仅作为来源证据；未经重新核对实际图片与当前复用权限，不得成为另一套平行 active 素材库。

跨集复用必须同时满足：真实 binary 可读、hash 匹配、当前 `status` 有效、当前目标落在 `reuse_scope` 内，并且所采用方式被 `reuse_modes` 明确允许。

---

## 10. Part 4.5 检索与复用决策

在为目标 Beat 锁定执行方式前，图片规划 Agent 必须做一次 Part 4.5 候选判断；可以对相同需求复用一次召回结果，不要求逐 Beat 全库遍历。

推荐顺序：

```text
目标 Visual Beat
→ 提取可见事件 / 人物 / 场景 / 动作 / POV / 道具 / UI / 时间天气 / 文字状态
→ 查询 Part 4.5 metadata
→ 只打开相关候选完整图片
→ 核对 viewer meaning、事件、身份、主体集合、物理视角、场景、道具数量、UI、时间天气、exact text、withheld / reveal
→ 同时核对 status / reuse_scope / reuse_modes / hash
→ 锁定最终执行方式
```

四种服务结果：

- **直接复用**：目标与旧完整图在必要语义和物理状态上兼容，且权限允许；
- **基于旧图修改**：选定一张兼容完整 source，权限允许 DERIVE_EDIT；
- **仅作参考**：最终仍按 GENERATE 执行，只继承明确指定的身份 / 姿势 / 表情 / 构图 / 场景布局 / UI 壳体等；
- **新生成**：没有充分兼容或获准候选时直接 GENERATE。

REFERENCE 是参考用途，不是独立图片执行模式。连续性参考也不自动等于 DERIVE_EDIT source。

图片规划 Agent 必须锁定具体 asset / source 与用途后再交付执行包；生图执行 Agent不再查库、不换候选、不重新选择模式。

不设置最低复用率、自动相似度阈值或每集必须复用 N 张的配额。正确性优先于复用。

---

## 11. Execution Mode — 当前运行边界

当前主执行操作为：

```text
ACTIVE:
GENERATE
DERIVE_EDIT
EXACT full-frame carry-over / reuse

REFERENCE:
仅作为 GENERATE / DERIVE_EDIT 等任务的指定参考用途，不是独立执行模式

FORBIDDEN:
COMPOSITE_CROP
cut-and-paste assembly
external layer composition
SVG / HTML / Canvas / PIL text
POST_OVERLAY
```

未经新的 Owner 决定，不得由执行端自行启用历史禁止分支。

---

## 12. GENERATE 合同

一条 GENERATE execution instruction 至少必须能确定：

- visual_beat_id；
- canonical upstream / frame requirement ref；
- character refs；
- scene refs；
- prop / UI refs；
- style refs；
- identity lock；
- prompt；
- negative constraints；
- aspect ratio；
- resolution / delivery target；
- output name；
- acceptance criteria。

执行器不得自行改变故事意义或镜头。

---

## 13. DERIVE_EDIT 合同

至少必须确定：

- target visual Beat；
- one accepted source frame；
- canonical recurring-character refs；
- immutable preserve list；
- exact main delta；
- forbidden changes；
- output name；
- acceptance criteria；
- incompatibility fallback。

禁止使用 DERIVE_EDIT 的典型情况：

- POV family materially changed；
- camera side / angle / crop 改变了谁在看；
- visible subject set materially changed；
- 目标关键 UI / prop geometry 在 source 不存在；
- source frame 已有 hard QA failure；
- 需要多图拼接才能实现。

失败：
`RETURN_DERIVE_SOURCE_INCOMPATIBLE`。

不存在固定 DERIVE_EDIT 百分比配额。

---

## 14. Prompt / Edit Compiler

Prompt / Edit Compiler 负责：

职责：

> 把上游已经决定的视觉意义与资产选择，转换成执行器无需创意判断即可执行的具体指令。

它可以展开：

- visual event；
- character performance；
- composition constraints；
- physical viewpoint；
- continuity locks；
- exact delta；
- negative constraints；
- required text；
- output spec；
- QA criteria。

它不得：

- 重新导演；
- 为“更好看”改 POV；
- 新增人物 / 道具 / 情节；
- 把真实事件替换成抽象解释图。

---

## 15. Text / UI Policy

当前 text render mode：

```text
NONE
or
IMAGE_NATIVE
```

禁止：

- POST_OVERLAY 作为默认修复；
- SVG；
- HTML；
- Canvas；
- PIL 文本；
- 外部图层。

因此：

- 因果必要的 exact text 必须进入 `exact_required_text` / 同等约束并在最终 raster 中核对；
- 若无法准确生成，返回 `UI_TEXT_FAILURE`，不得用 overlay 偷修。

普通 native UI 的 back arrow / navigation icon 不属于抽象解释箭头。

---

## 16. Story Event / Anti-PPT Gate

Part 4 必须继承 Part 3：

> 图片承担真实故事事件，不承担“把旁白做成信息图”的工作。

禁止用以下内容取代真实事件：

- 漂浮规则卡；
- 路径图；
- 流程图；
- 概念箭头；
- 关系线；
- branch diagram；
- 人格化手机 / AI 代理；
- 把口播比喻直接画成门、方向盘等解释图；
- 大段视觉化旁白文本。

允许真实因果对象：

- 手机 UI；
- 消息；
- 收据；
- 日历；
- 文件；
- 餐食；
- 天气；
- 空间变化；
- 人物反应。

如果唯一可画内容是“解释这个概念”，返回上游，不由图片执行器发明事件。

---

## 17. Physical Viewpoint Gate

图片必须在物理上成立。

涉及屏幕 / 文件 / 人物时至少检查：

- camera position；
- viewer sees which side；
- screen / object facing；
- character gaze；
- character can actually read what the image claims they read。

典型 hard failure：

> 屏幕完整朝向观众，同时画面又声称站在屏幕后的人正在阅读正面。

必要时应由 Part 3 拆成 discovery / reaction 等相邻 Beat；Part 4 不应在执行时偷偷修改镜头意义。

---

## 18. Image QA

### 18.1 逐图 QA

至少检查：

- **Story / Beat Fidelity**：图片表达当前 Beat，而不是相邻 Beat 或旁白抽象概念；
- **Viewer Meaning**：观众能读到 `viewer_must_understand` / 同等目标；
- **Focus / Causal Object**：主要焦点和关键食物、道具、UI / 因果对象不仅“存在”，而且观众能够辨认；
- **Identity**：Recurring character 是同一个人；
- **Anatomy**：手、手臂、肢体数量和连接合理；
- **Physical Viewpoint**：camera / gaze / screen / object geometry 成立；
- **Continuity**：角色、场景、prop、UI shell、时间 / 天气、数量不无故漂移；
- **Main Delta**：对连续状态 / compatible DERIVE_EDIT，主要变化与 preserve 边界正确；独立 GENERATE 不强制“整张图只能有一个差异”；
- **Setup / Reveal**：setup 不提前泄漏 reveal；
- **Text / Additional Facts**：因果 exact text 正确，同时检查模型额外生成的姓名、金额、日期、订单状态、品牌 / logo 等可读内容没有新增或改变故事事实；
- **Style**：符合当前 Style Reference / episode style lock；
- **Full-frame Output**：每个 Beat 最终得到完整 raster，不依赖裁切拼装；
- **Source Compatibility**：DERIVE_EDIT / exact source 与目标兼容且权限有效。

### 18.2 整集结果 QA

全部目标图片完成后，生图执行 Agent 按原 Visual Beat 顺序连续检查一次最终结果，重点确认：

- 跨帧 identity、场景、道具数量、UI、时间 / 天气与 setup → reveal / before → after 连续性；
- 最终图片是否真实实现 Part 3 已锁定的动作、反应、世界后果和画面关系；
- 复用 / 派生没有造成不合理重复、错误回忆或 source 缺陷传播；
- Beat → final image 映射、路径、hash 与 QA 状态一致。

整集 QA **只验证规划是否被正确实现，不在末端重新导演**：

- 如果 Part 3 原规划本身就连续重复、场景系统或现实演绎不足，返回 Part 3；
- 如果 Part 3 正确，但 Part 4 编译任务把不同画面错误压成同一种执行要求，返回图片规划 Agent修正 Part 4；
- 如果执行包正确，但模型成图没有照任务实现，由生图执行 Agent按既定 retry / return 合同处理。

不在此恢复固定秒数、固定镜数、固定场景数或 Tableau 比例。

---

## 19. Hard Failure、Minor Deviation 与失败路由

### Hard failure

包括但不限于：

- 第三只手 / 多肢体；
- 错误的 before / after；
- 假装一个动作已经发生；
- 因果 exact text 错误或额外可读事实改变故事；
- 关键数量变化；
- 人物身份漂移；
- 不可能的屏幕 / 视线关系；
- flashback 时间 / 天气与已建立事件冲突；
- 抽象解释图取代故事事件；
- 禁止的拼装 / overlay；
- 不兼容或无权限的 DERIVE_EDIT / exact source。

Hard failure 不得成为后续 reference / edit source。

### Minor deviation

只有在不改变事件、viewer meaning、因果事实、identity、continuity 时，才允许记录为 minor。无害背景纹理、小硬件细节、轻微 crop 差异可以是 minor。

### Retry / Return

- 网络超时、临时请求失败等技术问题，可在原合同不变的前提下按包内策略重试；
- 内容 hard failure 按任务已声明策略重试，不设全项目统一次数；
- source / reference 不兼容、缺失或权限不成立，不能靠重复生图解决，应执行已编译 fallback 或返回图片规划 Agent；
- 上游事件、POV、场景规划本身有问题，返回拥有该决定的 Part 3；
- 合同缺少创意 / 语义决定时，返回 `RETURN_EXECUTION_CONTRACT_UNRESOLVED`，执行 Agent不得自行补决策。

Owner / Reviewer 可推翻 executor 的 QA；必须保留原判定和后续 adjudication，不能静默改历史。

---

## 20. 执行包 QA 与 Calibration Exception

### 20.1 执行包 QA

图片规划 Agent 在交给生图执行 Agent 前完成包级 QA，至少确认：

- 所有目标 Visual Beat 一一覆盖，无漏项、重复 ID 或未知 Beat；
- execution mode、source、supporting refs、prompt / edit、output、acceptance、fallback 等条件完整；
- 所有已存在图片输入真实可读且 hash 匹配；
- 本 run 前置依赖存在且无循环，等待条件与失败动作明确；
- exact reuse 有确定 source；DERIVE_EDIT 有兼容 source、preserve、main delta 与 fallback；
- 禁止模式没有可执行入口；
- 执行 Agent无需访问仓库、重新查库或补充创意判断即可执行。

包级结构检查可用普通脚本辅助，但不能代替语义兼容性判断。

### 20.2 Calibration Exception

Manual / high-risk Pilot 不属于每集必经 Gate。

只有以下变化触发有界校准：

- 新长期 recurring character；
- 新视觉风格；
- image model / provider material change；
- executor material change；
- Prompt/Edit Compiler material change；
- 自动 QA 发现新的重复失败类型。

正常 episode 不要求 Owner 每集先审 key frames。参考创作者视频节奏研究 / 增长研究不属于 Part 4 每集正式运行链。

---

## 21. 图片执行包、输出与可追溯记录

### 21.1 Part 4 规划完成

Part 4 的规划阶段最终交付物是一个完整图片执行包。目录形式是正式逻辑结构；跨 Agent 转交时可打包为 ZIP transport snapshot。

最小执行包保持精简：

- 执行说明；
- 每个 Visual Beat 的自包含图片任务；
- 总清单 / 完整性校验；
- 实际使用的参考图片。

但“精简”不能省掉可执行事实。每条任务必须足够明确执行方式、真实 source / reference、用途、prompt / edit、continuity / preserve / forbidden constraints、exact text（如适用）、output、acceptance、依赖、fallback 与 retry / return。

所有**已经存在并会用于执行的图片输入**必须随包交付；canonical ID / 仓库路径只用于溯源，不能替代 binary。唯一可以不预装的是明确由本 run 前置任务产生的图片，此时必须完整声明前置 task 和准入条件。

执行包不承担上游资料归档职责；自包含任务已经承接执行所需信息时，不要求继续塞入 Part 3 原始文档副本。

### 21.2 Part 4 图片生产完成

只有在生图执行 Agent完成全部最终图片、逐图 QA、整集结果 QA，并完成路径 / hash / Beat 映射 reconciliation 后，才可声明图片生产完成。

每个真实生产 run 至少需要能够回答：

- episode / run 与输入版本；
- executor / backend；
- 每个 Visual Beat 最终使用哪张完整图片；
- actual mode；
- source asset / source frame（如有）；
- supporting refs；
- final path / final hash；
- QA status；
- return / retry 原因；
- 哪些输出被 superseded。

可使用 `RUN_RECORD.json`、episode `INDEX.md`、`ASSET_OUTPUT_MANIFEST.json` 或等价结构记录。

---

## 22. Post-production → Part 4.5 素材候选

图片生产完成后，同一个图片规划 Agent可以再次使用 Part 4.5 规则处理未来素材候选，不要求新增独立 Part 4.5 Agent。

只有最终图片经过 story / frame review、存储与 hash reconciliation 后，才进入跨 run 复用评估。Part 4.5 负责确定最终 `status / reuse_scope / reuse_modes`；执行 Agent的 ACCEPTED 不自动提升为可跨集复用。

原则：

- 每个 distinct final binary 只需要一个稳定 catalog identity；
- 同一 binary 可映射多个 Beat；
- before / after 等不同状态仍是不同 asset record；
- continuity group 只建立关系，不代表一张图技术上由另一张生成；
- defective / replaced 版本保留 provenance，但不可 READY；
- local-only / ZIP-only 文件在发布前不可宣称为跨 run READY；
- 没有固定“每集必须沉淀 N 张资产”的配额。

---

## 23. Executor Permission Boundary

原则：

> 图片规划 Agent（Part 4 + Part 4.5）完成全部生图前决策；生图执行 Agent按图片执行包执行，不补充创意决策。

生图执行 Agent只负责：

- 读取并验证图片执行包，加载指定参考；
- 按指定 GENERATE / DERIVE_EDIT / exact full-frame reuse 任务执行；
- 按既定 acceptance、QA 与 retry / return 条件处理；
- 完成逐图 QA 与全部图片后的整集结果 QA；
- 保存完整 raster、run / manifest / QA / path / hash 记录。

不得自行：

- 重新查询 Part 4.5 或更换候选；
- 改写 prompt 的故事 / 镜头意义；
- 替换参考图或执行方式；
- 改变 POV / 镜头 / 人物 / 故事意义；
- 增加临时资产；
- 为解决整集单调而重新导演。

发现执行包自身规划问题时返回图片规划 Agent；发现 Part 3 视觉规划问题时返回 Part 3。执行合同存在未定义的创意 / 语义决定时：`RETURN_EXECUTION_CONTRACT_UNRESOLVED`。

正常运行不要求另设独立 Review Agent；Owner / Reviewer 仍可在需要时做后续 adjudication。

---

## 24. ZIP 交接

需要跨 Agent 转交时，可将完整图片执行包打包为 ZIP。

- ZIP 只作为 transport snapshot；
- 所有已经存在、且执行会实际使用的图片输入必须包含在包内；
- canonical ID / repository path 仅用于溯源，不能代替实际 binary；
- 由本 run 前置任务产生的 source / reference 可以不预装，但必须在任务中明确依赖、用途与准入条件；
- 生图执行 Agent按包内任务逐项执行，不重新规划或重新查库；
- ZIP 本身不自动等于 repository outputs 或 cross-run reusable asset。

---

## 25. 默认画幅与交付

正式生产与交付统一画幅：

- 16:9 是唯一正式画幅；任务 / prompt 应明确要求 16:9 横屏构图，最终交付也保持 16:9；
- 1920×1080 是默认目标画布与 final delivery target；
- Codex 内置 imagegen 的 provider-native raster 由当前工具 / provider 决定，不要求天然精确等于 1920×1080，也不再设置第二个 native pixel target；
- native width × height 必须记录真实值，但“不是 1920×1080”本身不构成生成失败、内容失败或重试理由；
- 仅当实际画面明显偏离 16:9 横屏构图并影响后续画面语义 / 构图时，才作为 output-format / content QA 问题处理；接近 16:9 的像素取整差异不单独判失败；
- 禁止仅为了追求 exact pixel dimensions 重新生图或修改图片。

当前 Part 3 长期 Master 原图尺寸不等于最终成片输出尺寸。

最终进入视频 / 交付阶段时，以 1920×1080 作为统一标准画布；原始 PNG 保留，不要求先生成第二份“精确 1920×1080 原图”。

禁止为了交付尺寸：

- 改变 focal structure；
- 裁掉因果信息；
- 使用多图拼接补画面。
