# Part 4 — 图片 / 资产执行

## 0. 文档职责

本文件只定义 Part 4 当前有效的图片 / 资产执行规则、输入输出边界与 QA 要求。

- Part 0–3 是上游正式事实，Part 4 不得改写；
- `source-snapshots/04-image-assets/` 仅用于来源、证据与追溯，不参与运行；
- 迁移进展、历史决策、待决问题、下一步规划统一记录在 `HANDOFF.md`。

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
- 校准例外与失败返回；
- 将全部执行信息编译为一个完整的图片执行包，作为 Part 4 的最终交付物。

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

## 2. 当前执行链

Part 4 当前逻辑链：

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

对本集对象，只有满足以下至少一项时，才建立 episode-local stable ID / mini master：

- 同一对象重复出现在多个 Visual Beat；
- 前后状态需要稳定连续；
- 对象承担关键因果证据；
- 不锁定参考时容易产生明显漂移。

典型对象包括：

- recurring supporting character；
- scene geometry；
- causal prop；
- UI shell / document shell。

一次性、低连续性、低因果风险的场景 / 道具 / UI 不单独生成临时参考资产，直接在对应最终图片任务中处理。

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
- 把一堆候选参考交给执行器，让执行器自己导演。

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

## 9. Reference Library / Production Registry / Outputs

当前三个记录层职责如下：

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

允许以下用途：

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

当前规则为：

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

`COMPOSITE_CROP` 不属于当前可执行默认模式。

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

QA 必须区分：

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

## 21. 图片执行包、输出与可追溯记录

Part 4 的最终交付物是一个完整的图片执行包。目录形式是正式逻辑结构；需要跨 Agent 转交时可打包为 ZIP transport snapshot。

图片执行包必须让执行 Agent 在不补充创意决策的前提下完成批量图片生产，至少包含：

- 本集资产需求与实际可用参考；
- 每个 Visual Beat 的自包含图片执行任务；
- GENERATE / DERIVE_EDIT / exact full-frame reuse 决策；
- prompt / edit instruction；
- continuity / preserve / forbidden constraints；
- exact text（如适用）；
- output naming / delivery spec；
- acceptance criteria 与明确的 retry / return 条件。

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

可使用 `RUN_RECORD.json`、episode `INDEX.md`、`ASSET_OUTPUT_MANIFEST.json` 或等价结构记录。

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

> Part 4 完成全部图片执行规划；执行 Agent 按图片执行包执行，不补充创意决策。

执行 Agent 只负责：

- 读取图片执行包并加载指定参考；
- 按指定 GENERATE / DERIVE_EDIT / exact full-frame reuse 任务执行；
- 按既定 QA 与 retry / return 条件处理；
- 保存完整 raster、run / manifest / QA 记录。

不得自行改写 prompt、替换参考图、改变 POV / 镜头 / 人物 / 故事意义、增加临时资产或重新导演。

执行合同存在未定义的创意 / 语义决定时：
`RETURN_EXECUTION_CONTRACT_UNRESOLVED`。

---

## 24. ZIP 交接

需要跨 Agent 转交时，可将完整图片执行包打包为 ZIP。

- ZIP 只作为 transport snapshot；
- ZIP 内必须包含执行所需的完整任务与可用参考，或明确可解析的 canonical reference；
- 执行 Agent 按包内任务逐项执行，不重新规划；
- ZIP 本身不自动等于 repository outputs 或 cross-run reusable asset。

---

## 25. 默认画幅与交付

默认：

- 16:9；
- 1920×1080 final delivery target。

当前 Part 3 长期 Master 原图尺寸不等于最终成片输出尺寸。

禁止为了交付尺寸：

- 改变 focal structure；
- 裁掉因果信息；
- 使用多图拼接补画面。
