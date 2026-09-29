# Part 4 — 图片 / 资产执行（完整合并基线 Pass 1）

状态：`MERGED_BASELINE_PASS1 / NOT_SIMPLIFIED / OWNER_REVIEW_PENDING`

## 0. 文档职责

本文件是 Part 4「图片 / 资产执行」的第一版完整合并基线。

目标不是立刻简化旧 G5，而是先把原 `ai-story-showrunner`、portable `story-showrunner`、历史 Case、真实图片执行证据与当前 Part 0–3 已封板边界放进同一个可审计模型中，避免后续简化时误删能力。

规则：

- Part 0–3 是上游正式事实，Part 4 不得改写；
- `source-snapshots/04-image-assets/` 只作来源、证据与追溯，不参与运行；
- 历史能力必须先进入本基线再讨论去留；
- 与 Owner / Part 3 已封板决定冲突的旧能力，保留为兼容/历史记录，但不得恢复为默认运行规则；
- 当前尚不决定最终文件数量、最终 schema 数量或是否合并各记录层。

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
8. 可用的历史 Reference Library / production Registry / accepted outputs。

### Part 4 拥有

Part 4 负责把“应该画什么”编译为“如何稳定得到完整最终图片”：

- 单集资产需求发现；
- canonical reference lock；
- 参考图检索、兼容性判断与目标用途选择；
- Visual Beat → 可执行资产绑定；
- GENERATE / DERIVE_EDIT / exact full-frame reuse 等执行决策；
- Prompt / Edit 编译；
- 图片执行器的确定性输入；
- 图片级 QA；
- 运行记录、输出映射、Registry / Reference Library 的生产后 reconciliation；
- 校准例外与失败返回。

### Part 4 不拥有

Part 4 不得：

- 改剧本、对白或观点；
- 改 Semantic Shot / Visual Beat 的故事意义；
- 为迁就现有图片改变事件；
- 自行改 POV / 镜头策略；
- 为降低成本把两个意义不同的 Beat 合并；
- 发明上游没有的故事事件；
- 决定真实 TTS 后的最终绝对时间；
- 负责最终视频渲染。

时间轴最终重算属于 Part 5；最终视频渲染属于 Part 6。

---

## 2. 完整能力链

历史 G5 的能力完整保留为以下逻辑链：

```text
Episode Asset Requirement Extraction
→ Canonical Reference Lock
→ Reference / Library Search
→ Visual Acquisition / Style Calibration Check
→ Frame-level Requirement Resolution
→ Beat Asset Binding
→ Execution Decision
→ Prompt / Edit Compilation
→ Image Execution
→ Frame QA
→ Episode Image Output Reconciliation
→ Registry / Reference Library Update
```

这里的“逻辑链”不等于最终必须保留同样数量的文件或 schema。当前 Pass 1 只确认能力存在。

---

## 3. Episode Asset Requirement / Asset Manifest

每集先识别可能出现的资产：

- CHARACTER；
- SCENE；
- PROP；
- UI_DOCUMENT；
- STYLE。

历史 `Asset Manifest` 能力保留：

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

> Asset Inventory 只是候选资产清单，不代表所有被旁白提到的东西都必须进入某个 Beat。

真正绑定必须发生在帧意义和可见内容确定之后。

缺失真实参考不得伪造路径，必须显式标为 missing / hold / to-generate。

---

## 4. Canonical Reference Lock

历史 Bible / Manifest 能力全部保留：

- Character Bible；
- Scene Bible；
- Style Bible；
- Prop/UI Bible；
- Reference Manifest。

但当前项目的长期视觉基线由 Part 3 已封板：

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

对本集真正重复且因果重要的对象，可建立 episode-local stable ID / mini master：

- recurring supporting character；
- scene geometry；
- causal prop；
- UI shell / document shell。

需要锁定的内容可包括：

- silhouette / geometry；
- color；
- placement；
- screen axis / camera side；
- allowed state variants；
- causal quantity；
- reference path。

连续性不是“看起来差不多”，而是：

> 同一对象身份稳定，并且观众能认出来；状态变化只能改变故事事件要求改变的部分。

---

## 7. Frame Blueprint 历史能力与当前兼容边界

旧系统存在独立 `Frame Blueprint` 层，曾锁定：

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

这些能力不能丢失。

但 Part 3 已将其核心单帧能力吸收到 Visual Beat 正式结构中。

因此 Pass 1 的兼容结论是：

- **能力保留**；
- 当前 canonical 上游仍是 Part 3 Visual Beat；
- 旧 `Frame Blueprint` 可作为兼容视图 / 编译中间态存在；
- 它不得重新获得修改 Visual Beat 意义、POV 或镜头策略的权力。

是否保留独立 Blueprint 文件，留到下一轮简化决定。

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
- 把一堆候选参考交给执行器，让执行器自己导演。

每个目标 Beat 必须在执行前明确：

- primary execution decision；
- primary source（如适用）；
- supporting references 及各自用途；
- 不匹配原因；
- fallback / HOLD。

---

## 9. Reference Library / Production Registry / Outputs

三个记录层的历史职责全部保留，暂不合并。

### Outputs

`outputs/<episode>/runs/<run>/`

记录真实生产运行与 retained artifacts。

核心：

- `RUN_RECORD.json`；
- episode `INDEX.md`；
- final complete raster frames；
- `ASSET_OUTPUT_MANIFEST.json` 或同等 Visual Beat → final asset 映射。

### Production Registry

记录生产历史与 provenance：

- execution mode；
- source / derived-from；
- provider / model；
- prompt；
- QA；
- run；
- storage state；
- reuse scope。

“生产中过关”不自动等于“可跨集复用”。

### Reference Library

是可检索的复用索引。

每个 record 必须基于**完整 raster image**，而不是裁切素材。

`READY` 至少要求：

- 可读取的 durable binary；
- file path 真实；
- hash 匹配；
- 已审核用途；
- reuse scope 与 reuse modes 明确。

历史上本地 ZIP 中的 member path 不得伪装成 GitHub file path。

---

## 10. Reference Search 与复用用途

在编译新图片前允许搜索历史已接受图片，但检索结果只是候选。

必须打开 / 验证：

- viewer meaning；
- observable event；
- character identity；
- props / quantity；
- POV / camera / gaze / screen geometry；
- time / weather；
- exact text；
- withheld / reveal state；
- hash 与 storage availability。

历史用途能力保留：

### EXACT_FRAME / CARRY_OVER_FULL_FRAME

当目标 Beat 与已有完整图片在必要语义和物理状态上完全兼容时，可复用完全相同的 binary。

必须记录：

- source asset / frame；
- source hash；
- target Beat mapping。

两个 Beat 可以故意指向同一完整帧。

### REFERENCE

旧图只提供指定方面参考：

- identity；
- pose；
- expression；
- gaze；
- gesture；
- scene layout；
- composition；
- UI shell。

必须声明“参考什么”，而不是把整张图当作真相。

### DERIVE_EDIT_SOURCE

选定一张完整 source image，保持兼容的：

- POV family；
- camera side / crop；
- visible subject set；
- main geometry；
- identity；
- UI shell；

只修改一个主要状态 delta。

支持参考图不等于贴图层，最终仍输出一张完整新图片。

### GENERATE

没有合适 exact / edit source 时，根据 canonical refs 与执行要求直接生成新的完整图片。

---

## 11. Execution Mode — 当前运行边界

历史系统曾存在：

- `GENERATE`；
- `DERIVE_EDIT`；
- `COMPOSITE_CROP`。

为保证历史能力不丢失，`COMPOSITE_CROP` 记录继续保留在来源与兼容说明中。

但当前 Owner / Part 3 已封板规则为：

```text
ACTIVE:
GENERATE
DERIVE_EDIT
EXACT full-frame carry-over / reuse
REFERENCE as generation guidance

FORBIDDEN AS DEFAULT:
COMPOSITE_CROP
cut-and-paste assembly
external layer composition
SVG / HTML / Canvas / PIL text
```

因此 `COMPOSITE_CROP` 是**历史兼容能力，不是当前可执行默认模式**。

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

历史 Prompt / Edit Compiler 能力保留。

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

## 15. Text / UI Policy — 冲突保留与当前规则

旧 G5 / portable Candidate 曾默认：

`critical exact text → POST_OVERLAY`

后续 Owner-approved production patch 与 Part 3 当前边界改为：

```text
NONE
or
IMAGE_NATIVE
```

并明确禁止：

- POST_OVERLAY 作为默认修复；
- SVG；
- HTML；
- Canvas；
- PIL 文本；
- 外部图层。

因此：

- POST_OVERLAY 能力只保留为历史冲突记录；
- 当前 Part 4 不允许恢复为默认；
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

至少包含以下 Gate：

### Story / Beat Fidelity
图片表达当前 Beat，而不是相邻 Beat 或旁白抽象概念。

### Viewer Meaning
观众能读到 `viewer_must_understand` / 同等目标。

### Identity
Recurring character 是同一个人。

### Anatomy
手、手臂、肢体数量和连接合理。

### Physical Viewpoint
camera / gaze / screen / object geometry 成立。

### Continuity
角色、场景、prop、UI shell、时间 / 天气、数量不无故漂移。

### One Main Delta
连续状态只改变事件要求改变的主要内容。

### Setup / Reveal
setup 不提前泄漏 reveal。

### Text
exact causal text 正确。

### Style
符合当前 Style Reference / episode style lock。

### Full-frame Output
每个 Beat 最终得到完整 raster，不依赖裁切拼装。

### Source Compatibility
DERIVE_EDIT source 与 target 兼容。

---

## 19. Hard Failure 与 Minor Deviation

历史真实执行证据表明，QA 必须区分。

### Hard failure

包括但不限于：

- 第三只手 / 多肢体；
- 错误的 before / after；
- 假装一个动作已经发生；
- 因果 exact text 错误；
- 关键数量变化；
- 人物身份漂移；
- 不可能的屏幕 / 视线关系；
- flashback 时间 / 天气与已建立事件冲突；
- 抽象解释图取代故事事件；
- 禁止的拼装 / overlay；
- 不兼容的 DERIVE_EDIT source。

Hard failure 不得成为后续 reference / edit source。

### Minor deviation

只有在不改变：

- 事件；
- viewer meaning；
- 因果事实；
- identity；
- continuity；

时，才允许记录为 minor。

例如无害背景纹理、小硬件细节、轻微 crop 差异可以是 minor。

Owner / Reviewer 可推翻 executor 的 QA；必须保留原判定和后续 adjudication，不能静默改历史。

---

## 20. Calibration Exception

Manual / high-risk Pilot 不属于每集必经 Gate。

只有以下变化触发：

- 新长期 recurring character；
- 新视觉风格；
- image model / provider material change；
- executor material change；
- Prompt/Edit Compiler material change；
- 自动 QA 发现新的重复失败类型。

否则：

```text
compiled image instructions
→ automatic package QA
→ production execution
```

不要求 Owner 每集先审 key frames。

---

## 21. 输出与可追溯记录

每个真实生产 run 至少需要能够回答：

- 哪个 episode / run；
- 输入版本；
- executor / backend；
- 每个 Visual Beat 最终使用哪张完整图片；
- actual mode；
- source asset / source frame（如有）；
- supporting refs；
- final path；
- final hash；
- QA status；
- return / retry 原因；
- 哪些输出被 superseded。

历史 `RUN_RECORD.json`、episode `INDEX.md`、`ASSET_OUTPUT_MANIFEST.json` 能力全部保留。

---

## 22. Post-production Registry / Reference Library Gate

只有最终图片经过 story / frame review、存储与 hash reconciliation 后，才进入跨 run 复用评估。

原则：

- 每个 distinct final binary 只需要一个稳定 catalog identity；
- 同一 binary 可映射多个 Beat；
- before / after 等不同状态仍是不同 asset record；
- continuity group 只建立关系，不代表一张图技术上由另一张生成；
- defective / replaced 版本保留 provenance，但不可 READY；
- local-only / ZIP-only 文件在发布前不可宣称为跨 run READY。

没有固定“每集必须沉淀 N 张资产”的配额。

---

## 23. Executor Permission Boundary

原则：

> 上游思考充分，下游执行尽量无创意权限。

执行器可以：

- 解析逻辑资源；
- 加载模型；
- 调用 image generation / edit provider；
- 技术性等价重试；
- 输出指定 raster；
- 执行明确声明的 fallback；
- 写运行与 QA 记录。

执行器不可以：

- 改故事；
- 改 Visual Beat；
- 改 POV；
- 换角色身份；
- 因个人审美重写 prompt；
- 删掉“看起来没必要”的 Beat；
- 自行选一张候选图决定故事方向；
- 补齐缺失的创意决定。

缺少创意 / 语义输入：
`RETURN_EXECUTION_CONTRACT_UNRESOLVED`。

---

## 24. 与 Agent A → Owner → Agent B 批次流程的兼容

历史 IMAGE_BATCH_V1 能力保留：

Agent A：
- 读取正式规则与当前 episode；
- 编译自包含图片执行包；
- 不负责生图。

Owner：
- 当前历史流程中可手工转交 ZIP；
- ZIP 是 transport snapshot，不自动等于 repository outputs。

Agent B：
- 读取 package；
- 按行生成 / 编辑完整图片；
- 不重新导演；
- 写 run / manifest / QA；
- 只有真实 durable publication 后才能宣称 cross-run reusable。

现有历史 package 文件名只是兼容模板，不在 Pass 1 锁定为最终 Part 4 唯一格式。

---

## 25. 默认画幅与交付

历史默认：

- 16:9；
- 1920×1080 final delivery target。

当前 Part 3 长期 Master 原图尺寸不等于最终成片输出尺寸。

禁止为了交付尺寸：

- 改变 focal structure；
- 裁掉因果信息；
- 使用多图拼接补画面。

---

## 26. 当前明确冲突表（Pass 1 不做简化）

| 能力 / 旧规则 | 历史状态 | 当前 Part 4 Pass 1 |
|---|---|---|
| 独立 Frame Blueprint | canonical old G5 | 能力保留；是否独立文件待简化，当前不得覆盖 Part 3 Visual Beat |
| Asset Manifest + Beat Matrix +多个 Bible | canonical / validated | 全部能力保留；重复层待后续讨论 |
| Image Generation Row + Execution Row | 双轨历史 | 两套字段能力均保留；最终 schema 待统一 |
| COMPOSITE_CROP | 旧 G5 / portable allowed | 历史记录保留；当前默认禁止 |
| POST_OVERLAY | 旧 G5 default | 历史记录保留；当前禁止恢复为默认 |
| long-term fixed scenes/UI | 旧生产基线存在 | 不恢复；当前长期资产以 Part 3 3+2 为准 |
| Reference Library | validated | 保留 |
| Production Registry | validated | 保留 |
| Outputs ledger | validated | 保留 |
| manual Pilot every episode | 早期实践 | 不恢复；仅 calibration exception |
| 固定 DERIVE_EDIT 比例 | 曾讨论/使用 | 禁止 |
| Beat / image 数量配额 | 历史出现 | 禁止 |
| 一条 SRT 一张图 | 历史行为 | 禁止 |

---

## 27. Pass 1 尚未决定的问题

下一轮才逐组讨论：

1. Asset Manifest、Asset Inventory、Beat Asset Matrix 是否合并；
2. Character / Scene / Style / Prop-UI Bible 是否保留为独立文件，还是 episode reference section；
3. 独立 Frame Blueprint 是否完全取消，只保留 Visual Beat；
4. Frame Execution Row 与 Image Generation Row 如何统一；
5. Reference Manifest 是否并入 execution row / package manifest；
6. production Registry 与 Reference Library 是否保留双记录；
7. exact full-frame reuse 是否成为正式 execution mode enum，还是 manifest-level decision；
8. Prompt / Edit Compiler 是独立产物还是 execution-row 字段；
9. Part 4 到底在“编译包”结束，还是包含实际生图 + QA + catalog reconciliation；
10. Agent A / Agent B 的 ZIP 工作流是否成为正式默认，还是一个 adapter。

这些问题必须在完整基线通过后逐组给 Owner 选择，不在本轮擅自拍板。

---

## 28. 当前 Gate

本文件建立后：

```text
PART4_SOURCE_COLLECTION_REAUDIT = PASS_CANDIDATE
PART4_FULL_MERGED_BASELINE_PASS1 = PASS_CANDIDATE
PART4_SIMPLIFICATION = NOT_STARTED
PART4_FINAL_CONTRACT = NOT_LOCKED
```

下一步：

> 按“重复数据层 → 执行模式 → Reference / Registry / Outputs → Executor 边界 → 最终输出格式”的顺序分组，逐组提出保留 / 合并 / 修改 / 降级 / 删除建议，由 Owner 决定后再改正式基线。
