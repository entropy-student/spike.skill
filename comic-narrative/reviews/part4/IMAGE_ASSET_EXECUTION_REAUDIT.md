# Part 4 — 图片 / 资产执行：独立复查整理版

> 状态：独立复查提案，未批准替代正式规则。日期：2026-10-01。
> 本文是一套可完整审阅的建议合同；文中“必须 / 不得”描述的是这套方案的要求，不代表新增要求已获批准。当前运行仍以 `IMAGE_ASSET_EXECUTION.md`、Part 3、Part 4.5 正式文档及已确认的项目决定为准。
> 对照基线：`entropy-student/spike.skill` 分支 `codex/comic-narrative-part4-snapshot`，提交 `311780e06bf31ba12b0b027ea6e27a07e1bc4c2b`。正式 Part 4 blob：`7a6c7d1fec2426b97eccc034c8817726f634d0b9`。
> 本次仅新增本文和修改建议文档；不修改正式模块、源快照、素材库或交接记录。具体差异、证据和待决定项见 [修改建议](IMAGE_ASSET_EXECUTION_MODIFICATION_SUGGESTIONS.md)。

## 1. 目标、交付与完成条件

Part 4 把已经锁定的 Visual Beat 编译成图片执行包：让执行 Agent 知道用哪些真实图片、采用什么方式、保持什么、改变什么，以及如何判断结果。生产目标是稳定获得可用于后续时间轴和成片的完整图片。

要区分两个完成点：

1. **执行规划完成**：每个目标 Beat 都有自包含任务，参考、依赖、输出规格和失败处理明确，执行包 QA 通过。完整图片执行包是 Part 4 规划的最终交付物。
2. **图片生产完成**：执行 Agent 按包得到全部最终图片，逐帧与整集图片 QA 通过，播放映射、文件和哈希核对一致，运行记录无未处理 HOLD。执行 Agent 可以是同一 Agent，也可以是外部执行器；角色不同不要求新增模块。

交出执行包不等于已经生图；生出部分合格图片不等于整集完成；整集图片通过也不等于素材已获准跨集复用。Part 4 同时说明规划合同与执行反馈合同，但不要求规划 Agent 必须亲自调用图片模型。

## 2. 职责与事实归属

| 责任方 | 拥有的决定 / 事实 | 向 Part 4 提供或从 Part 4 接收 |
|---|---|---|
| Part 2 | 剧本、口播、机制和事实边界、计划 SRT / 语义字幕单元 | 锁定内容；不得把假设或怀疑画成已发生事实 |
| Part 3 | 整集视觉策略、Semantic Shot、Visual Beat、事件、景别、POV、构图、焦点、连续性、reveal、时间锚点；长期 3+2 视觉基线 | 已接受的导演要求，不提前承担图片绑定和 prompt |
| Part 4 图片规划 | 资产需求、真实参考锁定、目标用途兼容性、最终执行方式与源图、prompt/edit、执行包与验收合同 | 将复用服务结果写入唯一的目标任务；没有创意缺口地交付执行 Agent |
| 执行 Agent / 图片后端 | 按锁定任务执行、按包处理技术失败和内容失败、逐帧检查、保存结果与运行事实 | 不改故事、镜头、参考选择或临时资产策略 |
| Part 4.5 | 当前历史素材库、候选检索、复用资格 / 范围 / 方式、生产后候选整理与入库 | 执行前提供经检查的复用结果；执行后接收最终完整图与来源证据 |
| 后续配音 / 时间轴 / 成片模块 | 真实 TTS、最终绝对时间、音画字幕对齐与成片渲染 | 接收 Beat → 最终完整图映射及原有语义锚点 |

Part 4 不增删、合并或重排 Visual Beat，不改口播、事实、时间锚点、POV、景别策略、角色关系，也不为迁就旧图改变事件。发现上游自身不可执行时，返回拥有该事实的阶段。

当前 `SKILL.md` 与历史交接对 Part 5 / Part 6 的渲染职责编号存在不一致。本方案按职责交付给后续模块，不在这里决定尚未迁移模块的最终编号。

全局节奏、场景系统和现实后果如何规划属于 Part 3。Part 4 检查图片是否忠实实现该规划，执行 Agent 不通过换地点、补动作或随机机位来补导演。C 方案只补 Semantic Shot 的故事变化与递进检查，不是 Part 4 或整套迁移的新版本。

## 3. 输入接收与版本锁定

开始编译前接收并核对：

- 锁定剧本、机制 / 事实边界及计划 SRT / 语义字幕单元；
- Part 3 整集 / 段落视觉策略、Shotbook、对应人可读 Shotboard；
- 当前长期角色 Master 和画风参考的实际图片；
- 单集确有需要且已锁定的角色、场景、道具、UI 约束与参考；
- Part 4.5 当前 catalog 和可读取的候选完整图片。

Shotbook 按 `semantic_shots[].visual_beats[]` 读取完整 Beat 对象；不得要求 Part 3 再维护一份顶层 Beat 真相。可在编译时展开为任务列表，保留原 ID、父 Shot、顺序和版本。

每个 Beat 的输入应能确定：口播范围、可见事件与前后状态、观众必须理解什么、人物 / 物件、景别与物理视角、焦点 / 构图、背景锚点、连续性、主要变化、withheld / reveal、必要精确文字、验收条件和时间锚点。字段名不同可做等义映射，不能在映射时重新解释故事。

记录输入提交 / 版本或文件哈希。源快照用于理解和追溯，不参与当前运行，也不能凭其 `CANONICAL` / `PASS` 标记覆盖现行规则。旧包不因还能读就自动成为本集合同。

发现缺少可见事件、物理要求矛盾、精确文字含义不明确或计划与锁定事实冲突，停止相关任务编译并返回；不把缺口交给执行 Agent 猜。若 Part 3 允许多个等价措辞，如“无房 / 售罄”，任务可声明允许的完整字符串集合，执行器只在该集合内选择，QA 核对实际采用的一项。

## 4. 推荐工作链

```text
接收并锁定上游版本
→ 提取本集资产需求与连续性风险
→ 锁定 canonical references，核对实际可用性
→ 按目标 Beat 画面要求调用 Part 4.5 候选检索与兼容性检查
→ 确定参考用途、源图、执行方式和依赖
→ 编译自包含图片任务与明确 fallback
→ 检查校准触发；无触发则不增加 Pilot
→ 执行包 QA 与交付
→ 按依赖执行、逐帧 QA 与失败处理
→ 整集顺序 QA、输出映射 / 哈希 reconciliation
→ 向后续模块交付；向 Part 4.5 移交入库候选
```

这是一条逻辑链，不要求每一步对应一个新文件、Agent 或审批环。历史 Asset Manifest、Beat Asset Matrix、Bible、Reference Manifest、Frame Blueprint、Execution Row 等可以保留为内部表示；不要求执行 Agent 跨这些文件拼装创意。结构合并是否进入正式规则仍须单独决定。

## 5. 本集资产需求与连续性准备

### 5.1 需求真相

`Asset Manifest` 保持为本集资产需求的机器可读真相，至少记录资产 ID、类型、作用域、描述、所需视图、参考状态、canonical 引用和使用它的 Beat。类型可沿用 CHARACTER、SCENE、PROP、UI_DOCUMENT、STYLE。

`Asset Inventory` 只是派生的人可读视图。需求清单表示可能需要什么，不代表凡是旁白提及的对象都必须可见。最终绑定以 Beat 的可见内容、因果和连续性需要为准。

### 5.2 稳定约束与临时参考图分开判断

对重复出现、前后状态连续、承担关键因果或容易明显漂移的对象，先锁定稳定 ID 与必要约束。例如场景几何、机位侧、人物外形、道具数量、UI 壳体、时间 / 天气与允许状态变化。

稳定约束不自动要求额外生一张参考图。按风险选择已有 canonical 图、兼容完整旧图、已接受的本集早期最终帧，或必要的单集 mini master。一次性低风险对象直接在最终图中处理；不恢复长期固定面馆、工作桌、UI、道具或庞大动作 / 表情 Master 库，也不规定临时资产数量。

如果早期最终帧承担后续连续性参考，必须把这一用途和依赖提前写入任务。它尚未生成时标为待本 run 产出，不伪造存在路径或哈希。确有必要的预生成 mini master 则作为包中明确的前置工作，写清生成与验收要求，不让执行 Agent 临场增加。

## 6. Canonical Reference Lock 与绑定

### 6.1 当前长期基线

长期身份和风格以 Part 3 的实际封板资产为准：

- `part3/assets/characters/MAIN_CHARACTER_MASTER.png`；
- `part3/assets/characters/MALE_FRIEND_ROOMMATE_MASTER.png`；
- `part3/assets/characters/FEMALE_FRIEND_COLLEAGUE_MASTER.png`；
- `part3/assets/style/STYLE_PRIMARY_TWO_PERSON_DINING.png`；
- `part3/assets/style/STYLE_SECONDARY_SINGLE_PERSON_DINING.png`。

角色图锁身份、外形、比例和轮廓；基础服装是默认参考，单集可按已锁剧情合理变化。男生默认朋友 / 舍友，女生默认朋友 / 同事；旧图不得引入未经确认的关系。画风图只锁线条、上色、完成度和生活气质，不把图中的地点、食物、道具、动作导入每个任务。

### 6.2 引用优先级与可见范围

```text
当前 canonical identity
> 已批准 Character Master
> 已批准 angle / pose reference
> 兼容且已接受的 production frame
> prompt prose
```

旧帧可用于连续性、表情、姿势或构图，不能反向定义年龄、脸、比例、发型、服装身份或关系。身份漂移或其他 hard failure 的图片不得继续作参考 / 编辑来源。

角色出现时按其可见身份线索绑定 canonical 参考和身份锁。只有手、袖口或背影就按可见范围 QA，不额外露出脸或全身。服装变化只落实已锁定的单集变化，不沿用历史酒红服装等文本覆盖当前 Master。

### 6.3 每张任务的实际输入

只绑定实际需要的参考；每张注明用途，例如身份、画风、姿势、场景布局、UI 壳体、邻接连续性或非相邻构图回声。`continuity_ref` 与 `composition_callback_ref` 都不自动构成 DERIVE_EDIT source。

对已存在输入核对真实文件、可读取性和 SHA-256；保留源 asset ID / run / hash。文字 Bible 是约束文档，不能伪装为图片模型的真实图像输入。执行所需文档约束展开到任务；图片文件作为图片绑定。

对将由本 run 生成的源帧写目标 Beat ID、依赖用途和可用条件，运行时在其接受且落盘后补真实路径与 hash。缺失外部参考明确 HOLD / missing，不以旧路径、ZIP member 或描述替代真实 binary。

## 7. Part 4.5 接口与四种结果

本方案建议将当前 active 历史素材接口明确为 `part4_5/library/catalog.jsonl` 和对应 `part4_5/library/images/`。历史 Registry / Reference Library / accepted outputs 只作来源证据或经明确审核的输入，不成为另一套平行 active 素材库。

每个 Beat 在执行方式锁定前完成一次候选检索判断；可以复用同组需求的召回结果，不要求逐 Beat 全库扫描。先按人物、场景、动作、姿态、景别、POV、道具、UI、时天气、文字和标签查 metadata，再只打开相关候选完整图。

候选须同时满足实际文件 / hash、当前复用状态、`reuse_scope` 和 `reuse_modes`。暂停复用和退役图片不能成为正式复用来源。“可复用”不代表允许所有方式；仅允许“仅作参考”的图片即使很像，也不能直接重放或用作编辑源。

针对所选用途检查 viewer meaning、事件、身份、主体集合、动作 / 表情、POV / 相机 / 目光 / 屏幕关系、场景、道具数量、UI、时天气、精确文字、withheld / reveal、当前角色与画风兼容性。直接复用要求目标所有必要状态兼容；参考用途只继承指定方面，不继承无关故事事实。

| 服务结果 | 图片任务的主执行方式 | 需要锁定 |
|---|---|---|
| 直接复用 | 完整图 carry-over / exact reuse | 一张确定完整源图、源 hash、目标映射；不改像素 |
| 基于旧图修改 | DERIVE_EDIT | 一张完整源图、preserve、主要 delta、canonical refs、fallback |
| 仅作参考 | GENERATE，携带指定参考用途 | 参考什么、不得继承什么、完整生成指令 |
| 新生成 | GENERATE | canonical refs、目标要求、prompt |

`REFERENCE` 是图片用途，`DERIVE_EDIT_SOURCE` 是来源角色；两者都不是独立图片执行模式。exact reuse 在这里用明确操作语义，不声称已批准新 schema 枚举。规划 Agent 整合 Part 4.5 服务结果并锁定具体 asset ID，执行 Agent 不再查库、换图或选模式。

无充分兼容候选时直接新生成；没有复用率、相似度自动阈值或每集沉淀数量。当前库入库批次有 35 张、31 张可复用、4 张暂停，29 张仅作参考、6 张基于旧图修改、0 张允许直接复用；这些是基线事实，不是未来配额。不得把该集内曾经整图重放的事实误读为当前 catalog 授予跨集直接复用权。

## 8. 执行方式与源帧决策

### 8.1 GENERATE

目标是新完整画面，或没有兼容 exact / edit source 时采用。输入须确定身份与风格参考、可见事件、物理视角、构图重点、因果对象、状态、精确文字、约束和输出规格。

GENERATE 可以产生上游要求的新 POV、主体或空间结构；不得为减少成本强行改为旧图的小改，也不套用“整张图只能有一个差异”的限制。

### 8.2 DERIVE_EDIT

只编辑一张已通过故事 / 画面 QA 的完整源图，保持兼容的 POV family、camera side / crop、可见主体集合、主要几何、身份和 UI 壳体，修改一个主要状态 delta。主要 delta 是故事变化，可以包含落实这一变化所必需的细节；不把它机械等同于只能改变一个字段。

明显更换 POV、相机侧、谁在看、主体集合，或需要源图不存在的关键 UI / 道具几何时，不兼容。源图有 hard failure 或需要多图拼装也不兼容。返回 `RETURN_DERIVE_SOURCE_INCOMPATIBLE`；只有已编译的 GENERATE fallback 可以由执行器执行，否则 HOLD 给规划 Agent。

源可在包内已有，也可指向本 run 前置任务。后一种在规划时是已锁定依赖，执行时还必须满足：前置图片已接受、binary 已保存、实际 hash 已记录、与目标再次核对兼容。不能一收到模型图片就立刻连锁编辑。

### 8.3 完整图 exact reuse

一张完整图可供多个 Beat 使用；每个 Beat 仍需独立的语义、验收和映射记录，不合并导演 Beat。逐项验证兼容后引用或字节复制，记录实际源 ID、源 hash 和所有目标。

如果源尺寸不满足交付合同，不能把另存、缩放后的 binary 仍称为字节相同。允许的整图尺寸归一化须提前声明，保留 source / final 两个 hash 和处理事实，再 QA；改变因果区域、构图或文字的处理不得以尺寸归一化名义进行。

### 8.4 当前生产禁令

不允许 COMPOSITE_CROP、裁切拼装、外部图层、程序绘制 UI / 文本或 post overlay 修图。最终每个 Beat 是一张完整 raster。参考输入不是贴图层；原始 Master 尺寸不是交付尺寸。

不通过固定编辑比例、每秒图片数或新资产配额决定模式。历史 schema / adapter 仍出现的 COMPOSITE_CROP 和 POST_OVERLAY 不能成为本方案的可执行选项。

## 9. Prompt / Edit 编译

编译器落实上游已有决定：事件、表演、物理视角、焦点、背景压低、连续性、preserve / delta、reveal、文字、输出与验收。不重新导演，不以“更好看”改镜头，不把真实事件换成概念图，也不增加未经批准人物、道具或事实。

一条任务至少应能独立回答以下问题；字段可采用等价名称，不强制新增正式 schema：

| 内容 | 最小要求 |
|---|---|
| 身份与来源 | episode / task / Visual Beat ID、父 Semantic Shot、上游版本与语义 / 时间锚点 |
| 帧意义 | viewer meaning、可见事件、state_before / after、必要事实边界 |
| 画面要求 | 可见主体、景别、POV / 摄像机 / gaze / 物体朝向、焦点、构图、背景锚点 |
| 执行决定 | 主模式；所选素材 ID；唯一主源及包内路径 / hash，或明确的前置 task 依赖 |
| 参考绑定 | 每个参考的实际图片与用途；当前 canonical identity；本集已锁变化 |
| 约束 | continuity、preserve、主要 delta、forbidden changes、withheld / reveal |
| 文本 | NONE / IMAGE_NATIVE、精确字符串或已锁允许集合；不得新增可读事实 |
| 指令 | 最终 prompt 或 edit instruction；不能仅写“按蓝图执行” |
| 后端与交付 | 所用 executor / 图片后端与必要参数、画幅 / 格式 / 尺寸、output_name |
| 验收与失败 | 具体 acceptance criteria、minor 边界、重试条件与上限、可执行 fallback 或 HOLD / return |

DERIVE_EDIT 必须同时有 preserve、delta 和源可用条件；fallback 如果只是写 `GENERATE` 而没有完整生成指令、参考和验收，仍不是可执行 fallback。exact reuse 必须有确定源而非一组候选；无图像模型调用时后端参数不适用。

自包含不等于复制所有上游档案。保留关键字段与来源标识，把共用的技术说明放在执行说明中；不在每行塞多套冲突定义。内部 Manifest / Bible / Blueprint 可以帮助编译，但最终任务是本次已锁执行事实的读取入口。

## 10. 文本、UI、品牌与事实边界

使用 `NONE` 或 `IMAGE_NATIVE`。因果必要文字列入任务，成图逐字核对；无法准确生成则 `UI_TEXT_FAILURE`，不 overlay 偷修。不要把旁白整段塞到画面，也不要求无关 UI 微字精确。

即使必需文字正确，额外生成的姓名、金额、日期、订单状态、消息发送人、会议标题等也可能新增事实；须检查其是否改变故事或时间线。NONE 不代表可以忽略模型自己画出的可读事实。

历史“无虚构品牌”的防线建议保留为当前编译约束：不为真实感自行添加品牌 / logo。已有品牌只落实上游锁定、确有因果必要且已确认的事实；如果授权或含义不明，返回规划 / 上游确认，执行器不自选。

真实 UI 内的返回箭头、列表导航、正常卡片允许；禁止的是漂浮解释箭头 / 规则卡 / 流程图等替代故事事件。人物的怀疑、计划、回忆或幻想须保留上游已锁的叙事属性，不能把“怀疑平台针对我”画成已证实的后台操作；如何表达主观状态由 Part 3 决定。

## 11. 最小图片执行包

建议延续已确认的四类交付：

```text
图片执行包/
├─ 执行说明.md
├─ 图片任务.json                 # 等价 JSONL 也可；每个 Beat 一条完整任务
├─ 总清单.json                   # 输入版本、文件 / hash、任务覆盖和依赖
└─ 参考图片/                     # 实际用到的 Master、旧完整图及必要参考
```

文件名是示意，不设第二套正式命名体系。总清单说明逻辑入口、任务数、包内已存在输入文件与 hash，以及将由本 run 产生的依赖。Asset Manifest 等内部数据仍保有各自事实职责；是否嵌入上述文件或保留独立文件属于待决定的结构优化，不借本提案默认为已批准合并。

所有执行时需要的**已存在图片输入**随包交付，包括选定旧图和 fallback 所需参考。canonical ID / Git 路径只用于溯源，不能替代 binary。唯一不预装的来源是明确由包内前置任务产生的图片；该任务及依赖在包内完整声明。

不附未使用角色或参考；不要求塞入 Part 3 三份原始文档来补任务缺口。ZIP 是跨 Agent transport snapshot，解压后仍执行同一目录合同；ZIP member 不能伪装为仓库发布路径，也不授予 READY。

## 12. 执行前 QA 与校准

### 12.1 可机械核对的执行包完整性

- 上游 Beat ID 与任务一一覆盖，顺序和父 Shot 保留；无漏项、重复 ID、未知 Beat 或静默改时间锚点。
- 每条主模式所需内容完整；output_name 不冲突；所有声明已有的图片真实可读、hash 相符。
- 前置任务存在，无自依赖或循环；依赖类型、等待接受条件、失败 fallback / HOLD 明确。
- fallback 指令同样完整；exact 源确定；文字模式只为 NONE / IMAGE_NATIVE；禁止模式无可执行入口。
- 来源、文件数和参考使用记录能对应；不存在伪路径或仅以 Bible 文本冒充图片参考。

这些检查可用普通脚本，不要求新增复杂验证平台。旧 schema 校验 PASS 不能代替上述当前合同检查。

### 12.2 规划语义 QA

核对任务与上游事件、POV、焦点、连续性、文字、reveal、事实边界一致；所选候选满足目标用途和 Part 4.5 权限。自动字段检查不能证明图像语义 / 物理正确，规划 Agent 仍须完成该判断。

### 12.3 校准例外

只有新长期角色、新风格、图片 model / provider、executor、Prompt/Edit Compiler 的实质变化，或 QA 发现新的重复失败类型，才触发有界校准。验证变化涉及的代表性风险，记录结论；不过关不放大生产。

正常 episode 不要求 Owner 先审 key frames 或重复 Pilot。旧 Visual Acquisition Review 的长期风格研究 / 增长实验、参考视频节奏分析都不成为每集生图 Gate。当前只核对 Part 3 封板风格和实际校准触发，不照搬旧“降低复杂度 15–25%”等研究数值。

## 13. 执行调度与重试权限

一次读取并验证执行包，按明确依赖执行。无依赖任务可以在实际后端能力允许时并行；依赖任务只有前置结果通过任务要求的故事 / 图片 QA 且落盘才可使用。

依赖源失败或被后来裁定无效，阻断受影响任务；已执行的后代标为待重新核对，不让缺陷继续传播。不依赖它的任务可以继续，整集状态仍保留未解决项。源替换后依据新 binary / hash 复核后代，不凭旧 ACCEPTED 标签自动放行。

执行器可按包重试相同请求、处理超时 / 临时技术错误，做预先允许的技术参数映射与保存操作；记录实际调用。不得借技术适配改写 prompt 意义、换参考、选新 provider、改镜头或增加资产。需要这些决定时返回规划 Agent。

内容 hard failure 先诊断再按任务策略重试；minor deviation 记录接受，不为无意义细节付费重画。每包 / 每任务声明技术与内容重试条件、上限、终止动作。相同 hard failure 重复出现时按声明 fallback 或 HOLD，避免无限尝试。历史 patch 的“重复两次”和 H019 实验的“最多重试一次”是不同背景的策略，不直接设为所有任务统一次数。

请求结果立即落盘，登记实际模式、源、hash、QA 和 attempt；恢复运行从这些真实记录继续，避免重画已接受任务。吞吐诊断可记录请求开始、返回、QA 完成及 retry 时间，区分包解析、模型等待与 QA；不能把推测的 2–4 并发当作平台上限或正式配额。

## 14. 图片 QA：单帧与整集

### 14.1 逐帧验收

| Gate | 核对问题 |
|---|---|
| 事件 / viewer meaning | 当前 Beat 是否发生，前后状态是否正确，观众是否读到要求的意义？ |
| 可见重点 | 主焦点是否容易发现；关键食物、道具、UI / 因果对象是否可辨，而非仅“存在”？ |
| 事实边界 | 是否把未发生 / 怀疑 / 假设画成事实；是否增加未经锁定的可读事实？ |
| 身份 | 可见年龄、脸、比例、轮廓、服装和关系是否与当前锁定身份一致？ |
| 解剖 | 所有可见手臂 / 手和身体连接是否合理；有无多肢体？ |
| 物理视角 | 相机、物体正反面、人物 gaze、屏幕可读方向是否能同时成立？ |
| 连续性 | 人物、场景、道具、UI 壳体、数量、时间 / 天气 / 回忆状态是否保留？ |
| preserve / delta | 连续状态和 DERIVE_EDIT 是否只改变事件要求改变的主要内容？不对独立 GENERATE 强套单 delta。 |
| setup / reveal | 是否提前泄露 withheld information 或缺失该出现的结果？ |
| 文本 / 品牌 | 必需字符串逐字正确；额外文字 / logo 不增事实，不用 overlay 修复？ |
| 风格 / 输出 | 当前画风、完整 raster、画幅 / 尺寸 / 格式正确，无裁切拼装？ |
| 来源 | exact / edit source 是否确定、可用、已接受、用途兼容且 hash 可追溯？ |

QA 按故事意义和可见范围，而不是把每个姿态短语 / 像素位置都当硬门。小硬件差异、无害纹理、轻微裁切和手指距离，只有不改事件、身份、因果、可读事实与连续性时才可记 minor。多余手、假动作已完成、因果文字错误、数量漂移、物理不可能、回忆时天气冲突、抽象图替代事件、setup 泄露和禁止拼装属于 hard failure。

执行器接受不是不可推翻的历史。Owner / Reviewer 后续裁定须与原 QA 同时保留；失败图不得再作来源。

### 14.2 整集顺序 QA

按原 Beat 播放顺序连续检查最终图片，包括共用图映射；不只查看独立文件是否都通过。

- 全部 Beat 都有最终完整图，状态无空洞；setup → reveal、before → after、回忆与原事件正确。
- 跨帧身份、空间、道具数量、UI、天气、时段一致；exact 重放有目标理由。
- 成图实现 Part 3 的焦点、动作 / 反应、世界后果和画面关系，未因生成漂移变成整段重复 UI / 姿势。
- 如原 Shotbook 本身存在全局单调或缺乏真实后果，反馈 Part 3；如规划有变化而成图未实现，修复图片 / 编译。不得在执行端补新事件。
- Beat / 口播锚点没有因复用或调度丢失；任务、最终映射、QA、hash 和 distinct binary 数量相互一致。

这一步验证已锁规划，不恢复固定镜数、秒数、场景数或 Tableau 比例。最终音频时长和音画字幕播放效果仍由后续模块验证。

## 15. 返回与修复路由

返回记录至少含 Beat / task ID、具体原因、失败证据、attempt / source hash、已采取动作、影响的后续依赖、需要谁解决。沿用项目已有返回码；下表是本方案的路由说明，不新增码注册体系。

| 问题 | 典型返回 / 状态 | 最小责任方与动作 |
|---|---|---|
| 无真实事件、把假设画成事实 | RETURN_NO_STORY_EVENT / RETURN_HYPOTHETICAL_AS_FACT | Part 3 核对要求；若锁剧本也无真实事件，再交 Part 2 |
| 上游物理视角本身矛盾 | RETURN_PHYSICAL_VIEWPOINT_CONFLICT | Part 3 改设计；执行器不改镜头 |
| 上游正确但生成物理 / 身份 / 连续性失败 | 对应图片 QA failure / HOLD | 执行器按包重试；需改编译 / 参考时交 Part 4 |
| 真参考缺失、路径 / hash 不符 | RETURN_REFERENCE_UNAVAILABLE 或等价已有码 | Part 4 补真实输入；角色缺失可用 RETURN_CHARACTER_REFERENCE_MISSING |
| edit source 不兼容或前置未接受 | RETURN_DERIVE_SOURCE_INCOMPATIBLE / 等待前置 / HOLD | 等待、执行已声明完整 fallback，或交 Part 4 重编译 |
| 必需文字错误 | UI_TEXT_FAILURE | 图片重试 / HOLD；含义需改时返回 Part 4 / Part 3 |
| 合同缺创意决定、fallback 不完整 | RETURN_EXECUTION_CONTRACT_UNRESOLVED | Part 4 补合同；不得让执行器猜 |
| 请求失败、后端能力不满足 | RETURN_EXECUTION_FAILURE / HOLD | 声明范围内技术重试；需后端更换时交规划 |
| 上游时间 / 覆盖矛盾 | RETURN_TIMING_VISUAL_CONFLICT / RETURN_SCRIPT_COVERAGE_GAP | 返回拥有锚点的上游 / 时间模块；不改 SRT |
| catalog 权限、状态或复用范围不成立 | 不采用候选，或 HOLD 待权限核对 | Part 4.5 核对；无兼容候选由 Part 4 新生成 |

现行和历史材料有 `UI_TEXT_FAILURE` / `RETURN_UI_TEXT_FAILURE` 等命名差异；在单个包内统一可识别写法并保留历史映射，不靠改名改变处理含义。普通无候选不是失败；事实 / 参考不可用也不通过技术重试解决。

## 16. 输出、版本修订与生产记录

默认交付 16:9、1920×1080 完整 PNG。后端原生尺寸不同时，任务明确允许的整图归一化；不得裁掉焦点 / 因果信息，或用拼接补画幅。保留原图与交付图的路径 / hash 和处理说明，检查文字可读性及几何。未声明的尺寸处理不能由执行器自由决定。

保留每次有意义生产 run 的最小记录，可沿用：

```text
outputs/<episode>/
├─ INDEX.md
└─ runs/<run>/
   ├─ RUN_RECORD.json
   ├─ frames/
   ├─ ASSET_OUTPUT_MANIFEST.json
   └─ QA_REPORT.md / REVIEW_INDEX.md（或等价记录）
```

这表示生产存储职责，不强制在尚未迁移完整的 comic-narrative 中新建整套目录。最少能回答 episode / run、输入版本、executor / provider / model、实际 prompt / edit、实际模式、source / supporting refs、attempt / return、最终路径 / hash、逐帧 QA、整集 review 和 storage 状态。

`frame_qa_status`、`story_review_status`、`storage_status` 分开：本地已接受可以供本 run 后续任务使用，但不是 Part 4.5 跨 run 可复用素材。未生成、失败、HOLD、被替代图片不得假写最终成功路径。

Beat 映射和 binary identity 分开计数：多个 Beat 可使用同一 binary；不同状态仍是不同图片。一个稳定 binary identity 可有多个真实存储副本 / 播放位置，不能因此重复入库。连续性组不代表技术派生关系。

后续裁定替换图片时创建版本修订或显式 amendment，保留原 hash 和原 QA；同步更新最终映射、hash、QA、run / episode 索引与所涉 Registry / catalog 资格。若源被否决，同步复核依赖链。不得把旧 asset ID 静默改指向不同像素。

Production Registry 如已有，保存生产 provenance；不要求凭空新增另一本与 run / manifest 同事实的账。Reference Library 的当前可复用真相交 Part 4.5 active catalog，不能由 executor 的 ACCEPTED 自动提升。

## 17. 生产后交付与 Part 4.5 入库

向后续模块交付原 Beat 顺序、语义 / 时间锚点、最终完整图片映射、真实路径 / hash、图片 QA 和 unresolved 项。全量通过才能声明整集图片生产完成；部分结果可交付诊断，但明确未完成，不宣称成片通过。

向 Part 4.5 提供已确定的 unique final binaries、来源 episode / run / Beat、实际 QA / 后续裁定、storage / hash、可观察画面事实及必要状态。生成提示词不能代替素材内容描述。

Part 4.5 按其正式规则确定候选取舍、最窄真实 `reuse_scope`、允许 `reuse_modes` 和 status；失败、被替代、未完成和仅 ZIP / 临时文件不自动可复用。不恢复历史“所有 accepted 图必须入库”，也不要求每集入库 N 张。当前素材记录可以自动形成候选，复用权限仍须有审核依据。

exact 重放只增加 Beat 使用关系，不为相同 binary 创建新素材；新编辑结果是新 binary，需独立评估。Part 4.5 以后撤销素材资格，不抹除它曾被使用的生产历史；新任务重新判断是否可用。

## 18. 方案采用前的最小验证

本次只是文档复查，未运行新生图。后续采用时，验证以下边界即可，不要求重复大批生产：

1. 从嵌套 Shotbook 编译任务：覆盖、ID、顺序、语义与时间锚点均不丢失。
2. 用“仅作参考 / 暂停 / 无直接复用权限”素材检查不会越权；没有候选时正常 GENERATE。
3. 一个前置源成功 / 失败的 edit 或 exact 链：QA 和 hash gate 生效，完整 fallback 可执行，不可用源不传播。
4. 一个精确中文 UI、一个 hands-only POV、一个 setup / reveal 或时天气回忆链：minor 不过度重试，hard failure 不被美观掩盖。
5. 多 Beat 共用图与版本替换：映射数、unique binary 数、源 / 最终 hash、旧裁定和新裁定一致。
6. 以当前可见H019终检版目录核对已有自包含与依赖能力，补齐失败分支；H015 / H019特定历史精简ZIP如取得，再核对版本差异。结构校验 PASS 不当作完整图片质量 PASS。

不以本方案批准历史配额、并发上限、全局场景规划恢复或正式 schema 重构。这些取舍及证据限制在修改建议文档单列。
