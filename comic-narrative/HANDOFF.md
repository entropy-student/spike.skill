# 漫画叙事 — 唯一交接文档

## 文档职责

- `part0/`、`part1/`、`part2/`、`part2_5/`、`part3/`、`part4/`、`part4_5/`：只保存当前有效规则、输入输出、判断标准和正式运行资产。
- `HANDOFF.md`：保存迁移过程、Owner 决策、执行记录、回归结果、历史规则、审计结论、当前建议和下一步。
- `source-snapshots/`：只作原始备份和追溯，不参与运行。

## 当前状态

分支：`codex/comic-narrative-part4-snapshot`

原 `ai-story-showrunner`、`story-showrunner` 未修改。

---

## Part 0 — 历史选题库

正式文档：`part0/TOPIC_LIBRARY.md`

当前：
- 20 个正式 Case；
- H001 美食推荐保留原版本；
- H015–H020 为本轮新增测试 Case。

### 已移出的执行记录

20 个 Case 曾按当时 D1–D5 做过一次整体复查：
- D1：均为 Evergreen 测试 Case，无同一热点信号重复；
- D2：未发现相同“主机制 + Human Process + Human Problem + Audience Payoff”；
- D3：未发现仅换技术对象但实际讲同一问题；
- D4：少量结构相似，但故事与视觉母题不同；
- D5：20 个 Meaning Fingerprint 均不同；
- 当轮结果：`20 / 20 PASS`。

该结果是历史执行证据，不属于 Part 0 当前规则正文。

---

## Part 1 — 选题策略

正式文档：`part1/TOPIC_STRATEGY.md`

已确认：
- X 是主菜，科技是变量；
- 先让人认出自己的生活，再解释科技；
- 不默认只做反思题；
- 新候选必须对照 Part 0 做 D1–D5 历史复查；
- “发布后的反馈”已从 Part 1 正式规则移除。

Owner 已明确否决，后续不得擅自恢复：
1. 导入旧项目完整历史选题；
2. 把现有 Case 改成“证据待核验”；
3. 删除 D3 的“主要结论”判断；
4. 修改 D5 Meaning 判定公式；
5. 删除 / 降级对白、潜台词、幽默、句尾、排版等现有写作规则。

Part 1 当前未发现需要从正式文档移出的执行记录；其三个 Case 保留为规则示例。

---

## Part 2 — 剧本与叙事

正式文档：`part2/SCRIPT_NARRATIVE.md`

### 当前正式变化

1. 核心故事骨架保持：
   `人物欲望 → 行动 → 预期落差 → 后果变化 → 转折 → 理解 / 选择`。
2. 新增视角确认门：
   - 默认第一人称亲历；
   - 旁观 / 听说只有在明显更合适时提出；
   - 非亲历视角必须经 Owner 确认后才能锁 StoryPremise。
3. 新增 SRT 下游合同：
   - 语义节拍、TTS 单元、字幕单元不视为同一层；
   - 字幕按完整意义 / 对话轮次 / 戏剧落点 / 阅读长度切分；
   - 最终 SRT 以真实 TTS / 对齐结果为准。

### 明确保留未改

- 事件驱动 / 比喻驱动；
- 开放问题先于观点；
- 固定 IP 与半固定世界；
- 对白、潜台词、幽默、动作、停顿、句尾、排版；
- 故事理解型 / 故事行动型；
- 发现 / 信任 / 解决；
- Writer 不拥有最终时间戳或分镜控制权。

### 回归执行记录

用于判断 Part 2 的样本：
- 历史酸菜肉丝面稿；
- 天气预报：亲历；
- 睡眠手表：亲历；
- 酒店价格：亲历；
- 外卖配送：旁观；
- 手机翻译：听说。

当轮结论：
- 原核心故事骨架继续有效；
- 没有证据支持大改 Part 2；
- 视角入口可以降低连续多篇“我又亲自遇到了”的重复感；
- 旧 SRT 最大缺口是没有把字幕作为独立编译层。

### 已移出的历史规则

以下旧规则不再属于当前正式基线：
- 70–85 秒作为 Bilibili 最终标准时长；
- 4–6 分钟 / 3–8 分钟作为唯一标准；
- 强制“大家好，我是……”；
- 强制英文尾签；
- 强制搞笑 / 固定笑点频率；
- 固定三幕比例 / 固定分钟转折；
- 独立第三种“教程型”模式；
- 每条必须表达观点 / 给方法 / CTA；
- Writer 拥有最终 SRT 时间戳；
- Writer 拥有视觉 / 分镜控制权。

### 合并审计记录

Part 2 建立时对照了 `source-snapshots/02-script-narrative/` 的 50 份原样备份。

当轮未发现以下能力丢失：
- 故事因果；
- 机制准确性；
- 观点形成；
- 口语 / 对白；
- IP / POV；
- Hook / 留存；
- 方法与内容模式；
- 时长基线；
- Writer 与下游职责边界。

---

## Part 3 — 分镜与视觉导演

正式文档：`part3/STORYBOARD_VISUAL_DIRECTOR.md`

### 备份与合并记录

Part 3 整理前共复制 **146 份**相关或疑似相关源文件：
- direct：25；
- cases：63；
- historical：6；
- boundary：47；
- evidence：5。

覆盖 G4、G4R、POV、Semantic Shot、Visual Beat、Frame Blueprint、Story Event Frame Patch、G5 下游边界、portable Skill 合同和执行证据。

### 第一轮结构调整

旧多层工作流收敛为：

```text
整集 / 段落视觉策略
→ Semantic Shot
→ Visual Beat
```

调整方式：
- 戏剧层级 → Semantic Shot 的故事变化字段；
- 视觉意图 → Semantic Shot / Visual Beat 字段；
- Frame Blueprint → Visual Beat 单帧字段；
- 时间映射 → Visual Beat 时间字段。

核心能力未删除。

### 长期视觉基线决定

Owner 已确认长期视觉资产最小化，仅封存 **5 张长期图片资产**：

角色 Master：
- 主角：酸菜肉丝面版本；
- 男生朋友 / 舍友；
- 女生朋友 / 同事，默认非恋爱关系。

画风参考：
- 主参考：双人吃饭 / 生活互动场景；
- 辅助参考：单人餐桌 / 生活场景。

资产位置：
- `part3/assets/characters/`
- `part3/assets/style/`

不建立长期固定场景、旧类比场景、长期 UI 或长期道具；面馆、老板、食物、酒店、街道、具体 UI / 道具等全部按单集故事产生。

两张画风参考只锁定视觉语言与完成度，不锁定画面中的具体地点、物件或动作。

### 视觉叙事原则最小补充（C 方案）

Owner 在酒店价格 H019 与天气预报 H015 的 A / C 对照后确认采用 C 方案。

正式变化仅两项：
1. Semantic Shot 增加“有意义故事变化”判断：优先确认人物的处境、认知、关系、选择、策略或重要后果是否真正改变；关键转折可用目标 / 阻力 / 预期 / 实际辅助判断，但不新增强制字段体系；
2. 全集 / Part 3 QA 增加 Semantic Shot 递进检查，防止连续多个 Shot 只重复同一种困难、困惑、情绪或解释。

明确未改：
- Visual Beat 仍按图像级意义变化拆分；
- reaction、setup / reveal、因果证据、UI / 道具状态、必要 POV discovery、喜剧落点等仍可独立成为 Visual Beat；
- 不要求每张图产生重大价值变化；
- 不新增生产层、正式输出文件或强制 JSON 字段；
- Part 0–2、3+2 长期视觉资产、Part 4 边界均不变。

回归证据：
- H019 酒店价格：A = 14 Semantic Shot / 41 Visual Beat；C = 12 / 41；
- H015 天气预报：A = 14 Semantic Shot / 36 Visual Beat；C = 9 / 36。

两轮均显示：C 主要改善 Semantic Shot 的故事阶段组织，不以减少最终画面为目标。


### 视觉基线资产修复

已将 Part 3 的 5 张长期视觉资产统一替换为**完整尺寸 PNG 原图**，不再使用 WebP 作为长期 Master 格式。

同时纠正男生朋友 / 舍友资产：
- 旧误封存的酒红上衣男性角色不再作为男舍友 Master；
- 男舍友改为 Owner 最新确认的深发、灰绿色外搭角色三视图。

当前完整尺寸：
- 主角：1448×1086；
- 男生朋友 / 舍友：1672×941；
- 女生朋友 / 同事：1672×941；
- 主画风参考：1672×941；
- 辅助画风参考：1672×941。

本次只修复长期资产文件与引用，不修改角色关系、画风选择、资产数量或视觉叙事规则。

### 当前时间决定

Owner 已确认：
- Part 3 时间先直接绑定 Part 2 产出的 SRT / 语义字幕单元；
- 当前阶段暂不额外引入新的 Speech Unit 体系；
- 真实 TTS 后的最终时间重算留给后续配音 / 时间轴模块。

### 历史验证与生产证据

验证链：
- 早期 Agent / Context-Memory / MCP；
- G4R v0.3：Agent、Context-Memory、MCP、Blind Search Answer。

验证过的关键结论：
- Semantic Shot → Visual Beat 两层可稳定工作；
- 具体景别放在 Visual Beat；
- Visual Beat 可局部覆盖视觉意图；
- setup / reveal 可以拆；
- 口播覆盖必须 100%；
- 口头列举不能自动膨胀为蒙太奇。

后续执行证据：
- Agent permission boundary 暴露故事事件、物理视角、UI 文本和 QA 过严问题；
- 酸菜肉丝面曾从 86 Beat 重审到 62 Beat，支持“Beat 数量不是配额”；
- Owner 后续复核曾发现第三只手、屏幕朝向不可能、雨夜回忆变晴天等硬失败。

这些案例仅作为规则来源和回归证据，不属于 Part 3 正式正文。

### 已被后续规则覆盖的旧行为

不得恢复为默认：
- 固定平均秒数决定 Beat 数量；
- 2.5–3 分钟必须 60+ 张图；
- 一条 SRT 默认一张图；
- 抽象流程图 / 卡片 / 箭头承担主要机制解释；
- 为视觉丰富随意增加镜头；
- 所有第一人称旁白都使用第一人称 POV；
- exact text 默认 `POST_OVERLAY`；
- `COMPOSITE_CROP`；
- SVG / HTML / Canvas / PIL 文本；
- 裁切拼装 / 外部图层；
- 追求固定 DERIVE_EDIT 比例；
- 执行器自行决定故事意义 / 镜头；
- 因无意义小细节持续高成本重画；
- 只做逐帧 QA、不做整集视觉重复检查。

### 合并审计记录

当轮确认以下能力均进入 Part 3 正式规则：
- Story Event Gate；
- 戏剧 / 镜头层级；
- POV / 物理视角；
- Semantic Shot / Visual Beat；
- setup / reveal；
- 单帧注意力；
- Beat economy；
- anti-PPT；
- 视觉连续性与整集多样性；
- 时间线边界；
- 100% 口播覆盖；
- Part 4 handoff；
- 分镜 QA。

第一轮结构简化后反向检查通过，没有发现核心能力因三层化丢失。

---

## 原项目反向审计

对当前原项目再次按文件内容 SHA 核对：

- `ai-story-showrunner`：259 个文件；176 个当前 blob 已有完全相同快照，83 个未复制；
- portable `story-showrunner`：37 个文件；29 个已有完全相同快照，8 个未复制。

大多数未复制文件属于尚未迁移的 Part 4–6：
- 图片资产 / Reference Library / Registry；
- TTS / GPT-SoVITS；
- G6 / Timeline runtime；
- renderer；
- governance / output / tool execution。

已发现但尚未补入快照的相关边界材料：
- `MIGRATION_MAP_V1.md`；
- `ADAPTER_FIELD_MAPPINGS.md`；
- `RUNTIME_STATE_LOCATOR.md`；
- Timeline Resolver / TTS manifest 相关文件属于后续时间轴模块。

当前判断：Part 0–3 核心能力没有发现大块遗漏；上述未复制文件主要属于边界 / 迁移证据或 Part 4–6。

---



### Part 3 Shotbook 结构统一（2026-09-29）

Owner 选择“规则与示例彻底统一”的方案，并要求最小修改。

本轮实际修改：
- H019 酒店价格参考包不改，作为目标结构；
- H015 天气预报参考包只修改 `SHOTBOOK.json` 的组织方式；
- H015 原顶层 `visual_beats[]` 的 36 个完整对象，按原有 `semantic_shot_id` / 原顺序嵌入对应 `semantic_shots[].visual_beats[]`；
- 删除 H015 重复的顶层 `visual_beats[]`；
- H015 仍为 9 个 Semantic Shot / 36 个 Visual Beat；
- `VISUAL_STRATEGY.md` 与 `DIRECTOR_SHOTBOARD.md` 未改；
- 不改任何 Beat 文本、镜头、POV、时长、连续性、验收条件或 Part 4 边界。

Part 3 正式文档只新增一条机器可读 Shotbook 结构约束：
`semantic_shots[]` 为唯一正式入口；每个 Semantic Shot 内直接包含完整 Visual Beat 对象；不再维护重复的顶层 `visual_beats[]`。

当前 Library 示例：
- `/comic-narrative/part3/examples/H019_酒店价格_Part3_参考产出.zip`
- `/comic-narrative/part3/examples/H015_天气预报_Part3_参考产出.zip`

其余关于 Part 4 执行包、临时资产控制、执行 Agent 权限的已确认方向暂只记录在交接文档，后续如需具体删改正式规则，先提交 Owner 确认。

### Part 3 参考产出样例留存（2026-09-29）

Owner 提供两份 Part 3 参考产出 ZIP，已按原始内容留存到 Library：
- `/comic-narrative/part3/examples/H019_酒店价格_Part3_参考产出.zip`
- `/comic-narrative/part3/examples/H015_天气预报_Part3_参考产出.zip`

两份包均包含：
- `VISUAL_STRATEGY.md`
- `DIRECTOR_SHOTBOARD.md`
- `SHOTBOOK.json`

核对结果：
- H019：12 Semantic Shot / 41 Visual Beat；
- H015：9 Semantic Shot / 36 Visual Beat；
- 两份均明确 `part4_binding_status = NOT_ASSIGNED_IN_PART3`；
- Visual Beat 已包含故事事件、景别、POV、主焦点、前后状态、连续性、withheld information、audience_must_understand、acceptance criteria 等 Part 4 所需上游语义；
- 未包含 asset binding、reference path/hash、execution mode、prompt/edit instruction、exact text contract、output naming、image QA execution fields，属于 Part 4 应补充的执行层信息。

当前判断：Part 3 → Part 4 边界成立。Part 4 应从这些 Visual Beat 编译出自包含图片执行包，而不要求 Part 3 提前承担生图绑定或 prompt 编译。

---

## Part 4 — 图片 / 资产执行

当前分支：`codex/comic-narrative-part4-snapshot`

正式合并基线：
- `part4/IMAGE_ASSET_EXECUTION.md`

### 第二轮材料复查

在第一轮 96 份文本源材料基础上，重新从原 `ai-story-showrunner` 与 portable `story-showrunner` 的目录结构做反向覆盖复查，而不是只依赖关键词搜索。

补入 4 份遗漏 / 疑似相关材料：
- 原项目 `README.md`（boundary）；
- `docs/GOVERNANCE_ADAPTATION.md`（boundary）；
- `outputs/README.md`（boundary）；
- `outputs/blind-search-answer/INDEX.md`（evidence）。

当前文本源合计 **100 份**：
- direct：15；
- cases：18；
- historical：5；
- boundary：52；
- evidence：7；
- suspected-external：3。

历史 Reference Library 的 10 张 PNG 仍只记录 path / SHA / size，不重复复制；Part 3 的 3 Character Master + 2 Style Reference 继续作为正式上游。

复查到但确认不属于 Part 4 正文的 portable 文件：
- Director / Viewpoint / Writer → 已由 Part 2–3 承接；
- Timeline Resolver / Timing Compiler / runtime → Part 5；
- ffmpeg renderer → Part 6；
- 旧 shot schema → 上游兼容材料，不作为 Part 4 主合同。

当前判断：暂未发现新的 Part 4 **能力域级遗漏**。

### 完整合并基线 Pass 1

已建立：
`part4/IMAGE_ASSET_EXECUTION.md`

本轮遵循前几部分相同原则：
- 先合并完整能力，不为了简洁删能力；
- 不修改 Part 0–3；
- 不恢复已被 Owner / Part 3 覆盖的旧规则；
- 历史冲突保留在正文中显式标记；
- 不在本轮决定最终 schema / 文件数量。

已纳入的能力包括：
- Episode Asset Requirement / Asset Manifest；
- Character / Scene / Style / Prop-UI Bible；
- Reference Manifest；
- Character Identity / reference precedence；
- scene / prop / UI continuity；
- legacy Frame Blueprint 能力；
- Beat Asset Binding；
- Reference Library / production Registry / Outputs；
- EXACT_FRAME / REFERENCE / DERIVE_EDIT_SOURCE / GENERATE；
- Prompt / Edit Compiler；
- image executor 权限；
- Story Event / anti-PPT；
- physical viewpoint；
- exact text / UI；
- image QA；
- hard failure vs minor deviation；
- calibration exception；
- Agent A → Owner → Agent B；
- output / hash / provenance / catalog reconciliation。

### 当前冲突边界

历史能力已保留，但下列旧行为不恢复为当前默认：
- `COMPOSITE_CROP`；
- `POST_OVERLAY`；
- SVG / HTML / Canvas / PIL 文本；
- cut-and-paste / external layer assembly；
- 固定 DERIVE_EDIT 比例；
- 图片数量配额；
- 一条 SRT 一张图；
- 长期固定场景 / UI / 道具作为默认资产库；
- executor 自行导演或改变 Beat 意义。

### Safe simplification Pass 1

已完成一轮**不改变流程、执行输入或输出结果**的安全去重：
- `Asset Manifest` 继续作为本集资产需求的 canonical machine-readable truth；
- `Asset Inventory` 若保留，仅作为从 `Asset Manifest` 派生的人类可读视图，不再拥有独立事实，也不要求双份人工维护；
- Part 3 已锁定的长期 Character Master / Style Reference 不在 episode-local Bible 中重复定义，只允许引用并补充本集新增/变化信息；
- 未删除 Beat Asset Matrix、Character/Scene/Style/Prop-UI Bible、Reference Manifest，也未改变 Beat 绑定或图片执行顺序。


### 正式文档职责整理（2026-09-29）

已将 Part 4 正式规则文档整理为“只保留当前有效规则、输入输出边界和 QA 合同”。

从 `part4/IMAGE_ASSET_EXECUTION.md` 移出的内容统一留在本 HANDOFF：
- 当前迁移进展 / Pass 状态；
- Safe simplification 过程说明；
- 历史能力与当前规则的冲突对照；
- 尚未决定的结构问题；
- 下一步优化顺序；
- Gate / stop point。

当前正式规则文档不再承担项目管理、迁移记录或规划职责。

### 当前未决问题

以下可能影响结构或流程，继续等待 Owner 逐项确认：
1. Beat Asset Matrix 是否并入执行层；
2. 多个 Bible 是否保留独立文件；
3. legacy Frame Blueprint 是否保留独立文件；
4. Frame Execution Row / Image Generation Row 如何统一；
5. Reference Manifest 是否并入其他记录；
6. Registry / Reference Library 是否继续双记录；
7. EXACT_FRAME 是否成为正式 execution mode；
8. Prompt/Edit Compiler 是否独立；
9. Part 4 是否包含实际生图 + QA + catalog reconciliation；
10. Agent A/B ZIP 是否是默认流程还是 adapter。

## 当前建议 / 下一步

1. Part 3 保持封板；
2. Part 4 Source Re-audit 暂按 PASS_CANDIDATE；
3. Part 4 Full Merged Baseline Pass 1 暂按 PASS_CANDIDATE；
4. 已完成 Safe simplification Pass 1；下一步只审查**可能影响结构/流程的优化项**，先提出建议，Owner 确认后再修改；
5. 所有原始快照持续保留。


### Part 4 执行包合同确认（2026-09-29）

Owner 已批准按最小化原则将以下四项写入 Part 4 正式规则：
- Part 4 最终交付物明确为完整“图片执行包”，跨 Agent 时可使用 ZIP transport snapshot；
- 每个 Visual Beat 在交付执行前编译为一条自包含图片执行任务；
- 单集临时资产只在重复出现、连续性重要、承担关键因果或易明显漂移时建立，一次性低风险元素直接在最终图处理；
- Part 4 完成图片执行规划，执行 Agent 只按包执行，不补充创意决策。

本轮没有删除 Frame Blueprint、Asset Manifest、Beat Asset Matrix、各类 Bible、Reference Manifest、Registry / Reference Library / Outputs，也没有修改 Part 3。

已开始用封板后的 H015 天气预报与 H019 酒店价格 Part 3 参考包编译 Part 4 图片执行包，作为新合同的第一轮实际回归。

### Part 4 首轮执行包回归（2026-09-29）

已基于封板后的两份 Part 3 参考产出，编译两份 Part 4 图片执行包并完成结构校验：

- H015 天气预报：36 / 36 Visual Beat 全覆盖；
  - GENERATE：33；
  - DERIVE_EDIT：1；
  - EXACT full-frame reuse：2；
  - exact native text task：2；
  - 预生成临时资产：0。
- H019 酒店价格：41 / 41 Visual Beat 全覆盖；
  - GENERATE：38；
  - DERIVE_EDIT：3；
  - exact native text task：2；
  - 预生成临时资产：0。

两份包均包含：
- `PACKAGE_MANIFEST.json`
- `EPISODE_ASSET_SPEC.json`
- `REFERENCE_MANIFEST.json`
- `IMAGE_EXECUTION_ROWS.json`
- `README.md`
- 原 Part 3 三份 upstream 文件

长期角色 / 画风图片不复制进 ZIP，使用明确 repository / branch / path 的 canonical reference 解析；不可用时返回 `RETURN_REFERENCE_UNAVAILABLE`，执行 Agent 不得自行替换。

本轮采用最小临时资产策略：不预生成独立临时参考图；重复 UI / 场景优先把已通过 QA 的早期最终帧作为后续 continuity reference / edit source。

Library 留存：
- `/comic-narrative/part4/examples/H015_天气预报_Part4_图片执行包.zip`
- `/comic-narrative/part4/examples/H019_酒店价格_Part4_图片执行包.zip`


### Part 4 执行包精简与首轮回归（2026-09-29）

Owner 要求优先修改执行包，不继续修改 Part 4 正式文档。本轮只调整 H015 / H019 两份 Part 4 示例执行包，并记录审计结论。

已完成：
- 执行包结构从“项目资料归档包”收缩为“执行成品包”；
- 删除包内重复的 Part 3 原始三份文档副本；
- 每份包仅保留：
  1. `执行说明.md`
  2. `图片任务.json`
  3. `总清单.json`
  4. `参考图片/`
- 参考图片改为直接随 ZIP 交付，执行 Agent 不再需要访问仓库；
- 当前两篇实际使用的长期参考只放入主角 + 两张画风参考，不为未出镜的长期配角额外塞图；
- 参考图片在 `总清单.json` 中记录文件大小与 SHA-256 校验值；
- H019 末尾“无房 / 售罄”修正为允许二选一，不再错误锁死“售罄”；
- 清理“无”类空禁止项与重复句号等编译噪声；
- H015 仍为 36 个 Visual Beat / 36 个最终画面位置；
- H019 仍为 41 个 Visual Beat / 41 个最终画面位置；
- 额外预生成临时参考图仍为 0。

当前 Library 示例：
- `/comic-narrative/part4/examples/H015_天气预报_Part4_精简图片执行包.zip`
- `/comic-narrative/part4/examples/H019_酒店价格_Part4_精简图片执行包.zip`

仍未修改：
- “参考图绑定过多”问题暂未调整，等待 Owner 单独确认；
- Part 4 正式规则文档未因本轮执行包精简发生新增修改。


### Part 4 执行包精简与修复（2026-09-29）

本轮只修改两份 Part 4 图片执行包，不修改 `part4/IMAGE_ASSET_EXECUTION.md` 正式规则。

执行包调整：
- 由原来的多文件资料包收缩为 4 类内容：`执行说明.md`、`图片任务.json`、`总清单.json`、`参考图片/`；
- 不再把 Part 3 的 `VISUAL_STRATEGY.md`、`DIRECTOR_SHOTBOARD.md`、`SHOTBOOK.json` 作为执行包附件；其执行所需信息已编译进入逐张图片任务；
- 使用 Owner 提供的 `assets.zip` 作为当前封板资产来源，不再要求执行 Agent 访问仓库下载图片；
- 两份包当前实际只使用主角参考图与辅助画风参考图，因此每包只放入这 2 张，不复制未使用的两名配角与主画风图；
- 每张包内参考图记录文件校验值；
- H019 最后一张房源状态由固定“售罄”修正为允许“无房 / 售罄”二选一，保持 Part 3 上游语义范围；
- 清理无意义的“无”字段与重复标点；
- 当前未修改此前发现的“前序参考绑定可能过多”问题，等待 Owner 单独确认。

完整性结果：
- H015：36 个最终画面位置 / 36 个任务；包内固定参考图 2 张；额外预生成临时参考图 0 张；
- H019：41 个最终画面位置 / 41 个任务；包内固定参考图 2 张；额外预生成临时参考图 0 张；
- 两包均通过任务编号唯一、任务顺序连续、包内参考图片齐全检查。


### Part 4 当前封板（2026-09-29）

Owner 已确认 Part 4 暂时封板。

当前正式规则已包含并确认：
- 图片执行包作为最终交付；
- 每个 Visual Beat 编译为自包含图片执行任务；
- 单集临时资产最小生成规则；
- 执行 Agent 只按包执行，不补充创意决策；
- 执行包直接包含实际使用的参考图片；
- 每个任务只绑定实际需要的参考图；
- 执行包允许精简为执行说明、自包含图片任务、总清单/完整性校验、实际参考图片。

当前不继续做 Part 4 结构重构；后续只有真实生产回归暴露明确问题时再重新打开。


### Part 4.5 — 素材库与图片复用（2026-09-29）

Owner 决定新增 Part 4.5，用于历史图片复用与生产后素材入库。

唯一正式文档：
- `part4_5/ASSET_REUSE_LIBRARY.md`

定位：
- Part 3 决定画面意义；
- Part 4 负责图片执行规划；
- Part 4.5 是双向服务层：执行前检索历史素材并给出复用决策，执行后把通过验收的新图片登记为未来可检索素材；
- 不要求按编号线性地“先完成 Part 4 再运行 Part 4.5”。

当前正式复用结果：
- 直接复用完整图片；
- 基于一张完整旧图修改；
- 旧图仅作明确方面参考；
- 无兼容素材时重新生成。

当前原则：
- 元数据只用于召回候选，必须打开实际图片做兼容性检查；
- 不允许为了复用旧图修改 Visual Beat、POV、关键人物/道具/数量、时间天气或 reveal；
- 不建立裁切拼装体系；
- 没有固定复用率和每集入库数量；
- 执行 Agent 不自行搜索或重新选择素材，最终决定必须写回图片执行任务。

已从 Part 4 历史快照中独立归档 7 份 4.5 直接来源材料到：
`source-snapshots/045-asset-reuse/`

包括：
- 旧 Reference Library 说明与 catalog；
- 旧 Production Registry 说明与 assets 记录；
- `REFERENCE_LIBRARY_PRODUCTION_WORKFLOW.md`；
- 实际图片运行的 `ASSET_OUTPUT_MANIFEST.json`；
- 实际图片运行的 `RUN_RECORD.json`。

这些历史来源只用于追溯，不参与当前正式运行。

当前 Part 4 保持封板，本轮未修改 Part 4 正式文档。



### Part 4.5 三部分结构收敛（2026-09-29）

Owner 确认 Part 4.5 只保留三类信息：

1. 唯一正式文档：`part4_5/ASSET_REUSE_LIBRARY.md`
   - 当前规则；
   - 最小字段合同；
   - 生图前检索与四种复用结果；
   - 生图后入库；
   - 使用说明。

2. 历史文档：`source-snapshots/045-asset-reuse/`
   - 只用于追溯；
   - 不参与当前运行；
   - 已归档旧 Reference Library、Registry、复用工作流和真实运行记录。

3. 当前素材库：`part4_5/library/`
   - `catalog.jsonl`：唯一机器可读索引；
   - `images/`：实际完整栅格图片，首批图片提交时创建；
   - 不维护第二份 README、人工表格或重复索引。

当前 active catalog 初始化为空。历史 catalog / registry 不自动转正；必须重新核对实际图片、去重、确认状态和复用边界后才能进入当前素材库。

当前素材目录记录已按最小化原则压缩为：素材编号、实际路径、校验值、来源、画面描述、人物、场景、动作、镜头、关键状态、少量标签、状态、复用范围、复用方式。无用字段不得为了“完整”而保留。

大图片包后续交由本地 Codex 批量梳理：只提交必要的唯一完整图片和最小 catalog 记录；失败尝试、重复二进制、明显无复用价值的中间图不进入 active library。处理完成后再由当前 Agent 做第二轮结构与复用质量审查。

Part 4 继续保持封板，本轮未修改 Part 4 正式文档。


### Part 4.5 第一批候选素材 Review 完成（2026-09-29）

来源 episode：
- `ep-ai-noodle-preference-20260927`

候选整理结果：
- 62 个最终画面位置；
- 60 张不同最终图片；
- 2 组完整整图复用：VB032/VB039、VB034/VB049；
- 35 张进入候选 Review；
- 三个候选压缩包已全部 Review 完成。

Review 结论：
- 35/35 图片本身通过；
- 不需要重新生图；
- 不需要修改像素、文件名或 SHA；
- 不淘汰当前 35 张候选；
- 当前仅需修正 `candidate_catalog.jsonl` 中少量“剧情推断式描述”，改成图片可直接观察到的事实；
- `RL-NOODLE-007` 至 `RL-NOODLE-010` 的 `reuse_scope` 由“同一角色”收窄为“同一场景”；
- 其余复用方式与候选暂停判断保持不变；
- `RL-NOODLE-031/032/033/035` 继续保持“候选暂停”，正式入库前不扩大复用权限。

下一步：
1. Codex 在本地只修订候选 `candidate_catalog.jsonl`；
2. 不重新生图；
3. 不修改候选 PNG；
4. 修订后返回新的候选目录与差异摘要；
5. Review Agent 再做一次轻量核对；
6. 通过后再执行 GitHub 正式素材库上传。


## 当前停止点

`PART4_SOURCE_COLLECTION_REAUDIT_PASS_CANDIDATE / PART4_SAFE_SIMPLIFICATION_PASS1_CANDIDATE / BEHAVIOR_CHANGING_SIMPLIFICATION_PENDING`

## 安全边界

- 不修改原 `ai-story-showrunner`；
- 不修改原 `story-showrunner`；
- 不删除原始快照；
- `HANDOFF.md` 是唯一迁移 / 执行 / 决策交接入口。

## Part 4.5 第一批正式素材入库

日期：2026-09-29

来源：ep-ai-noodle-preference-20260927

结果：
- 62 个最终画面位置；60 张不同最终图片。
- 35 张经 Review 后正式进入素材库：31 张状态为“可复用”，4 张状态为“暂停复用”。
- 复用方式：29 张允许“仅作参考”，6 张允许“基于旧图修改”，0 张允许“直接复用”。
- 35 个 PNG 的 SHA-256 与 Review 版本一致；图片未重新生成、未修改内容或尺寸。
- 正式图片目录：comic-narrative/part4_5/library/images/ep-ai-noodle-preference-20260927/
- 正式 catalog：comic-narrative/part4_5/library/catalog.jsonl
- Git 提交编号（35 张图片批次）：8ef400c4324e77ed2d797d116b903cbb83f715db
- 本轮没有修改 Part 4 或 Part 4.5 正式规则文档。
- Review 阶段指出的剧情推断式描述已在候选阶段修正完成。

### Part 4 / Part 4.5 连接缺口待修（2026-09-30）

本轮只记录待修改项，不改 Part 4 / Part 4.5 正式规则。

当前确认：
- Part 4 已具备历史 Reference Library / production Registry / accepted outputs 的检索、兼容性判断、复用决策与执行包编译能力；
- Part 4.5 已建立当前正式素材库：`part4_5/library/catalog.jsonl` + `part4_5/library/images/`；
- 两边逻辑上已能衔接，但正式接口还没有完全写死，后续 Agent 仍可能按旧的泛化 `Reference Library` 理解，而不是调用当前 Part 4.5 active library。

建议后续仅做最小连接补丁，不重构：

Part 4 待补：
1. 明确当前正式历史素材库唯一来源为 `part4_5/library/catalog.jsonl` 及对应 `images/`；
2. 明确每个 Visual Beat 在 GENERATE / DERIVE_EDIT / exact reuse 决策前，先做一次素材库候选检索；
3. 明确由 Part 4 图片执行规划 Agent 选择具体 `asset_id` 并锁定“直接复用 / 基于旧图修改 / 仅作参考 / 新生成”；
4. 明确选中的旧素材实际图片必须进入图片执行包，任务内记录素材编号、来源校验值、用途、preserve / delta；执行 Agent 不再查库或换图。

Part 4.5 待补：
1. 明确检索为“先查 `catalog.jsonl` 元数据召回候选，再只打开候选完整图片做兼容性检查”，不逐张遍历素材库；
2. 明确不设置最低复用率或自动相似度阈值；复用优先，但找不到充分兼容候选时直接新生成；
3. 明确本集图片 QA 通过不等于自动成为可复用素材；生产后仍需 Part 4.5 入库审核决定 `status / reuse_scope / reuse_modes`。

保持不变：
- 四种结果：直接复用 / 基于旧图修改 / 仅作参考 / 新生成；
- 不为迁就旧图修改 Part 3 的故事意义、POV、人物、道具、时间天气或 reveal；
- 执行 Agent 只执行已锁定图片任务，不承担素材选择；
- 完整图优先，不恢复裁切拼装体系；
- 当前无固定复用率目标。

状态：待 Owner 后续确认后再修改正式规则。


---

## 当前待解决工作：Codex 生图速度异常 + 旧版/当前版文档差异复查（2026-10-01）

本节记录调查、实验、Owner 讨论与后续解决过程。当前不修改 Part 3、Part 4、Part 4.5 正式规则。

### A. Codex 端批量生图速度异常

#### 当前现象

- H019《酒店价格》当前图片执行规模为 41 个最终画面位置。
- Owner 已优化 VPN / 网络链路，但 Codex 端批量生图仍明显偏慢。
- 当前没有可靠证据证明“单个 Codex Agent 内部最多可并发 N 个不同图片任务”，因此此前建议的“2–4 并发”只能作为实验范围，不能当作平台正式上限。
- Owner 当前已观察到本轮约 29 张成图；其中多数发生在室内。速度问题与整集视觉丰富度问题分别处理。

#### 已完成的执行层实验准备

已制作 H019 高速执行候选包，仅用于本轮实验，不作为 Part 4 正式规则变更。当前候选策略：

1. 不改 41 个 Visual Beat 的故事意义、人物、POV、构图目的、参考图、exact text、DERIVE source 或验收标准。
2. 启动时一次性解析执行包，不在每张图前重复通读全包。
3. 先建立依赖图，再按依赖波次执行。
4. 无依赖任务允许小并发实验，但实际并发数必须以运行结果为准。
5. 单张完成后先做 hard-failure QA；整集连续性 Review 在全部图片完成后统一执行。
6. 当前实验候选仅在 hard failure 时自动重试，建议单任务最多自动重试 1 次；仍失败则记录并继续不依赖任务。
7. 每张完成后立即落盘并更新运行记录。
8. 执行 Agent 不重新规划剧情、镜头、素材选择或 Part 4.5 检索。

H019 当前依赖图可分为三层：第一层 15 个无前置依赖任务；第二层 24 个依赖第一层的任务；第三层 2 个依赖第二层的任务。该分层只用于调度，不改变图片任务合同。

#### 下一步速度诊断

先做小规模并发探针，不直接用 41 张猜并发能力：

- 选 4 个互不依赖的 H019 任务，候选为 C-VB01、C-VB03、C-VB06、C-VB18。
- 先测试 2 个任务是否真的同时进入图片生成等待。
- 每个任务记录 TASK_START、IMAGE_REQUEST_START、IMAGE_RETURN、QA_COMPLETE。
- 将瓶颈区分为 PACKAGE_PARSE / AGENT_REASONING、IMAGE_QUEUE / IMAGE_GENERATION、QA、RETRY。
- 若 2 并发真实成立且稳定，再测试 3；必要时再测试 4。
- 若单 Agent 实际仍串行，再评估多个 Codex Agent / Thread，并按连续性链而不是按编号平均拆任务。

#### 质量边界

速度优化不得通过删除单 Beat 核心约束、放宽 identity / anatomy / physical viewpoint / exact text / continuity、改变 DERIVE source、降低输出规格或跳过最终整集 Review 来换取。

目标是减少重复读取、重复规划、重复深度 QA 和无上限重试，把时间主要花在真实图片生成上，而不是降低图片标准。

状态：OPEN / NEEDS_MEASURED_CONCURRENCY_AND_TIMING_BREAKDOWN。

解决完成前，每轮实测的有效并发、请求前准备时间、图片等待时间、QA 时间、重试数量和总耗时继续补回本节。

---

### B. 旧版视觉生产规则 → 当前 comic-narrative 正式规则差异复查

#### 本轮复查范围

重新对照旧版 SKILL(20260919-022919).md、SKILL(20260919-030233).md，以及当前 Part 3、Part 4、Part 4.5 正式规则。

复查目的不是回滚，而是检查在“去配额、去机械规则、职责拆层”过程中，是否同时淡化了仍有价值的视觉活力 / 节奏报警能力。

#### 复查确认

当前正式体系相较旧版已经强化并保留：Semantic Shot、Visual Beat、Story Event Gate、anti-PPT、POV / 物理视角、setup / reveal、连续性、exact text、identity、GENERATE / DERIVE_EDIT / exact full-frame reuse / reference、Part 4.5 素材复用、hard failure、100% 口播覆盖、执行 Agent 权限边界、hash / provenance / run record。

因此当前问题不是“旧版大量能力误删”，而更集中在：
当前规则更擅长保证“每张图正确、故事正确”，但旧版一些用来发现“整集虽然正确却开始视觉单调”的保险丝变弱或不再显式。

#### 合并后的 6 个待讨论项

P1｜视觉节奏 / 多样性 Soft Watch
- 旧版：无意图静止约 6 秒、连续 3 镜同类人物讲话 / 反应、约 15–20 秒窗口至少 2 种视觉类型、Hook 前段高视觉密度等经验报警器。
- 当前：会检查长时间坐桌前看手机、连续相似 UI、重复 reaction，但不再使用固定时间窗 / 连续镜数。
- 候选方向：只恢复 soft warning，不自动拆 Beat、不强迫换地点。

P2｜现实场景演绎 / 世界后果是否需要重新成为优先视觉载体
- 旧版：Scene Tableau / 人物做事被明确视为正文主力，并曾用人物做事 / 场景事件占比较高作为经验 QA。
- 当前：不再设 Tableau 比例；UI、reaction、object insert 只要语义成立都可能连续出现。
- 候选方向：不恢复固定比例，但当机制能通过真实行为、真实空间变化或世界后果表达时，避免长期只靠 UI / reaction。
- H019 例：酒店房间库存会过期，可用夜晚酒店客房 → 清晨 → 昨晚销售机会消失来表现，而不是整段只看订房 UI。

P3｜少场景题材的丰富度 QA
- 旧版：4–8 Scene Master、50 镜常用 5–8 个主要空间。
- 当前：取消场景数量配额；只有重复、连续、因果关键或易漂移的场景才建 mini master。
- 候选方向：不恢复硬数字；改检查同一地点内的戏剧状态、人物行为、POV / 视觉载体、现实后果是否变化。
- H019 例：只有主角室内 + 匿名酒店客房可以成立，但视觉上应能经历购买 → 等待 → 被打脸 → 怀疑 → 调查 → 理解 → 新选择，而不是都呈现为室内看手机。

P4｜参考视频实测 Calibration Mode
- 旧版：支持约 4fps 抽样、区分真正换图与推拉 / 字幕 / 局部变化，统计 visual beat 中位时长、P25/P75、开头切换频率、视觉类型占比、同 Scene 连续长度等。
- 当前：Part 3 / Part 4 正式链路没有等价的“参考创作者视频节奏校准”；Part 4 Calibration 主要针对角色、风格、模型、provider、executor、compiler 变化。
- 候选方向：恢复为可选模式，只学习节奏与视觉语法，不复制人物造型或具体镜头，也不变成所有视频的硬模板。

P5｜动作 / 表情 / 场景 / 构图的可复用资产意识
- 旧版：明确动作库、表情库、场景库、视觉梗库。
- 当前：长期固定资产收敛为 3 Character Master + 2 Style Reference，其他由 Part 4.5 按完整图片和元数据复用。
- 候选方向：不恢复“每集至少复用 N 个资产”，更可能在 Part 4.5 加强 action / expression / scene / composition 的检索用途。优先级低于 P1–P4。

P6｜确认哪些旧数字规则不恢复
当前初步不建议恢复为正式硬规则：
- 50 镜必须 5–8 个物理场景；
- 每集至少 3 个视觉比喻；
- 每集至少复用 N 个旧资产；
- 第 5 条视频后必须降低新资产比例；
- score >= 3 自动拆 Visual Beat；
- 固定 2–4 秒 / 张；
- 150–180 秒必须 50–70 张；
- 为了丰富而随机换地点 / 配角 / 机位。

#### 逐项讨论顺序

1. P1 视觉节奏 / 多样性 Soft Watch；
2. P2 现实场景演绎 / 世界后果优先级；
3. P3 少场景题材丰富度 QA；
4. P4 参考视频实测 Calibration Mode；
5. P5 Part 4.5 动作 / 表情 / 场景 / 构图复用意识；
6. P6 最终确认哪些旧硬数字规则明确不恢复。

每一项必须先由 Owner 确认：是否存在真实缺口；属于硬规则、soft watch、可选模式还是不调整；应落在 Part 3、Part 4、Part 4.5 还是后续模块；是否需要对 H019 / H015 做回归。

Owner 未确认前，不修改正式规则。

状态：OPEN / REVIEW_ITEMS_P1_TO_P6_PENDING_OWNER_DECISION。


### Owner 复查要求更新（2026-10-01）

Owner 确认：
- 文档规则复查不能只讨论 P1–P6 六个高层问题后结束；
- 必须把“旧版 → 当前版”的所有不同差异逐项过完，允许将同类项合并成一个讨论单元，但不得因合并而遗漏差异；
- 当前 P1–P6 六项均暂定为“需要进一步判断”，没有任何一项在本轮直接批准写入正式规则；
- 后续讨论需要对每个合并单元同时给出：旧版做法、当前做法、具体画面/流程例子、可能收益、可能副作用、建议落点（Part 3 / Part 4 / Part 4.5 / 后续模块）；
- 只有 Owner 对单项明确确认后，才允许修改对应正式文档；
- 本轮仍不修改 Part 3、Part 4、Part 4.5 正式规则。

后续复查方式：
1. 先建立覆盖全部差异的“合并讨论清单”；
2. 按清单逐项讨论；
3. 每项记录 Owner 决定（保留当前 / 恢复旧能力 / 改为 soft watch / 改为可选模式 / 移交其他模块）；
4. 所有差异过完后，再统一形成正式修改提案，不在讨论中途零散修改正式规则。


### 规则复查讨论记录：P1–P6 第一轮 Owner 意见（2026-10-01）

本轮仍只记录讨论，不修改 Part 3 / Part 4 / Part 4.5 正式规则。

Owner 当前意见与澄清：

- P1：Owner 明确认为“视觉节奏 / 多样性”不应只在最终 QA 才发现，而应在 Part 3 规划阶段提前想清楚；执行 Agent 应只执行已锁定规划，不能靠执行阶段补导演判断。Owner 将该问题理解为“总体规划与局部 Beat 正确性之间的关系”，并质疑当前版是否真的是在旧版基础上的完整优化。
- 当前复查结论：当前版不是旧版的纯超集。它强化了局部语义正确性、故事推进、物理视角、资产执行等能力，但旧版部分“整集节奏 / 视觉类型分布 / 场景系统先规划”的全局保险并未完整保留。后续应优先讨论“规划阶段建立整集视觉分布 + 最终 QA 只做验证”，而不是把 P1 仅作为末端 Soft Watch。
- P2：Owner倾向旧版“现实场景演绎 / Scene Tableau 是正文主力”的方向，认为当前把 UI / reaction / object / world-state 等完全平级后，可能过度削弱现实演绎。当前暂定需要调整方向，但尚未决定是否恢复任何比例数字。
- P3：Owner倾向旧版“先建立 Scene 系统 / Scene Master”的方向，认为当前仅在连续性风险出现时才建立 mini master 可能过度简化。澄清：旧版“4–8 个 Scene Master”写在“必须先建立”的清单中，属于较硬的生产要求；“50 镜通常只需要 5–8 个主要空间”中的“通常”是经验值，不是绝对硬下限。后续需单独判断应恢复“预先规划 Scene 系统”，还是连 4–8 数量范围也恢复。
- P4：已向 Owner 澄清，该能力不是图片执行 Agent 的生图步骤，而是更上游的可选预生产校准：当 Owner 提供目标参考视频时，在 Part 3 正式分镜规划之前先实测参考视频节奏 / 视觉类型 / 同 Scene 连续长度等，再把结果作为规划参考；没有参考视频则跳过。它应影响规划，不直接替代故事判断。
- P5：Owner倾向保留当前“3 Character Master + 2 Style Reference + Part 4.5 完整图片复用”的方案，避免重新建立庞大的动作 / 表情 / 场景 Master 库。当前需继续说明其影响：优点是资产不膨胀、旧资产不反向限制新故事；代价是常用姿势 / 表情 / 构图需要更多重新生成，可能增加生成成本与漂移。后续若需补偿，优先考虑增强 Part 4.5 的 action / expression / pose / composition 元数据检索，而不是恢复固定资产配额。
- P6 例1澄清：旧版“4–8 个 Scene Master”是明确生产要求；“50 镜通常 5–8 个主要空间”是经验建议，并非写死所有视频必须 5–8 个物理地点。
- P6 例2澄清：“破坏事实边界”指画面把剧本中的怀疑 / 假设画成已经发生的客观事实。例如 H019 只说主角怀疑平台“看出来我想订了”，且后文明确不能证明平台针对个人；如果画面直接客观展示平台后台给主角贴“已上钩，给他涨价”标签，而没有明确标记为主角脑补，观众会把未经证明的怀疑误读成事实。若明确设计为主角主观脑补 / 幻想，并在画面语法上与客观现实区分，则不必一概禁止。
- P6 例3、例4：Owner同意不恢复固定 2–4 秒 / 张、不恢复每集固定复用 N 个素材的硬规则。

当前状态：
- P1：高优先级，方向调整为“规划阶段先解决，总体规划 + 局部 Beat 双层控制”，待细化。
- P2：倾向恢复旧版现实演绎优先思想，待细化。
- P3：倾向恢复旧版 Scene 系统先规划思想，数量规则待单独判断。
- P4：已澄清为 Part 3 之前的可选参考视频校准，是否正式恢复待判断。
- P5：倾向保留当前资产体系，是否只增强 Part 4.5 元数据待判断。
- P6：继续逐条分类哪些旧数字规则保留 / 软化 / 不恢复。


### 规则复查讨论记录：P1–P6 第二轮 Owner 意见（2026-10-01）

本轮继续只记录讨论与方向，不修改 Part 3 / Part 4 / Part 4.5 正式规则。

Owner 当前意见：
- P1 / P2 / P3：继续评估“是否直接恢复旧版”。Owner倾向旧版的全局视觉规划、现实场景演绎和 Scene System 先规划能力，但要求先说明如果完整恢复旧规则会引入什么问题。
- P4：Owner认为当前项目本身没有“参考视频”作为正式输入；最终目标是生成图片并拼成视频。参考视频风格/节奏校准更适合作为 Skill 或外部可选能力，不应成为 comic-narrative 项目正式运行链的一部分。
- P5：Owner继续确认使用当前资产策略：3 Character Master + 2 Style Reference + Part 4.5 完整图片复用；不恢复庞大的动作 / 表情 / 场景 Master 库。
- P6：Owner认为“旧数字规则 vs 当前规则”的边界仍不够清楚，需要用更通俗、具体的方式解释前后差异，不接受抽象的“硬规则/软规则”表述直接带过。

当前工作要求：
1. 对 P1 / P2 / P3 分别说明“完整恢复旧版”的收益与副作用；
2. P4 暂按“项目正式链路外、Skill 层可选能力”方向处理，待 Owner 最终确认；
3. P5 暂按“保持当前版”方向；
4. P6 需要重新按具体规则逐条解释：旧版实际会让 Agent 怎么做、当前版会怎么做、成片会发生什么不同，再由 Owner 判断是否恢复。


### 规则复查基线纠正：C 方案不是“新版整套规则”（2026-10-01）

Owner 提醒“新版”记忆中只是一个补丁文件。复查确认该记忆正确：PART3_C方案_正式修改提案.md 明确是小范围补丁，不是 Part 3 第二次重构。

因此此前“旧版 vs 新版”的称呼需要纠正为两条不同时间线，后续审计不得混在一起：

#### 1. A 基线 Part 3 → C 方案补丁
C 方案只补两类能力：
- Semantic Shot 增加“有意义故事变化”判断；
- 全集 / Part 3 QA 增加“故事是否持续递进”检查。

C 方案明确不改：
- Visual Beat 的图像级意义拆分规则；
- reaction / setup / reveal / evidence / POV discovery 等独立 Beat 能力；
- Beat 数量规则；
- 3+2 长期视觉资产；
- Part 0–2；
- Part 4 边界；
- 既有整集视觉多样性检查中的地点 / 人物动作 / 道具 / POV / 手机 UI / 真实后果。

因此 P1（全局视觉规划）、P2（现实场景演绎）、P3（Scene System）、P4（参考视频校准）、P5（资产体系）等差异，不能归因于 C 方案补丁。

#### 2. 历史旧 Skill → 当前 comic-narrative 正式体系
此前列出的 P1–P6 和后续 R1–R13 大多数差异，实际属于更早的“旧综合 Skill 迁移 / 重构为 Part 0–Part 4.5”过程，而不是 C 补丁造成。

后续复查必须分别回答：
- C 补丁是否改错 / 漏改；
- 旧综合 Skill 迁移到当前分层体系时，哪些能力被保留、优化、移位、弱化或删除。

当前暂定：
- C 补丁本身仍按“小改”理解，目前未发现它删除 P1–P5 能力；
- P1 / P2 / P3 的问题继续作为“历史迁移差异”审查，不再称为“C 新版造成”；
- P4 参考视频校准倾向不进入 comic-narrative 正式项目链，保留在 Skill / 外部可选研究能力；
- P5 保持当前 3 Character Master + 2 Style Reference + Part 4.5 完整图片复用体系；
- P6 不再作为一个混合桶，拆回各所属规则组逐项审查。

后续所有差异审计使用上述双层基线，避免再次把“小补丁”和“整体迁移”混为一谈。


### Part 4 独立复查：Owner 当前决策记录（2026-10-01）

本轮只记录已确认或当前方向，不修改 Part 4 / Part 4.5 正式文档。

已确认：
- Reviewer 总体整理方向通过：不推倒当前 Part 4，以当前正式版为底稿吸收必要补丁。
- 资产体系继续保持当前轻量方案：3 Character Master + 2 Style Reference + Part 4.5 完整图片素材库，不恢复庞大动作 / 表情 / 场景 Master 库。
- Scene / UI / 道具稳定性采用 Reviewer 方向：需要稳定不等于必须额外生成 mini master；可使用已存在 canonical 图、兼容旧完整图、已接受的本集早期最终帧，只有真正必要时才预生成 mini master。
- 图片执行包采用“严格但精简”：保持最小包结构，但真实参考、依赖、hash、fallback、验收与失败条件必须足够完整，执行 Agent 不应跨仓库补创意或补输入。
- Executor 权限边界通过：规划 Agent / Part 4 锁定执行决策，执行 Agent 只执行，不自行换参考、改镜头、改故事意义、增加资产或重新导演。
- QA / 失败处理采用 Reviewer 方向，但保持精简：补关键对象可辨、额外可读事实、明确失败路由和重试边界，不扩张成庞大机械打勾体系。
- Part 4 完成状态拆分通过：明确区分“Part 4 规划完成 / 执行包完成”和“Part 4 图片生产完成 / 全部最终图与 QA 完成”。

仍需澄清 / 待 Owner 决策：
- Part 4 与 Part 4.5 的正式接口关系（历史素材检索、复用资格、执行方式锁定）需要用更通俗流程说明后再决定是否正式接入。
- 整集图片 QA 的具体执行责任与问题归因需要澄清：规划本身单调属于 Part 3；Part 4 编译造成的重复属于 Part 4 规划 / 编译；执行结果偏离已锁任务属于执行 / 生图问题。整集 QA 负责识别来源并路由，不得在末端重新导演。
- P1 / P2 / P3 属于 Part 3 的上游视觉规划审查，不属于 Part 4 Reviewer 的主要修改范围；后续需要单独继续审查。


### Part 4 独立复查：Owner 最终确认并落地（2026-10-01）

Owner 已确认本轮 Part 4 / Part 4.5 分工与执行边界，正式规则已更新。

正式修改：
- `comic-narrative/part4/IMAGE_ASSET_EXECUTION.md` commit `1f10d1efabe6917e4af3db3ecdb47acc6b7246a5`；
- `comic-narrative/part4_5/ASSET_REUSE_LIBRARY.md` commit `ef0af79c27a072c0679a4b812967666c4f46f145`。

本轮确认的正式结构：
1. **图片规划 Agent = Part 4 + Part 4.5 生图前职责**。默认由同一个 Agent 完成资产需求、Part 4.5 历史素材查询、复用兼容性判断、GENERATE / DERIVE_EDIT / exact reuse 决策、参考用途锁定、Prompt/Edit 编译、依赖 / fallback / acceptance 与执行包 QA。
2. **生图执行 Agent是下一环节**。只按已锁图片执行包生成 / 编辑 / 完整复用图片，不重新查库、不换模式、不换参考、不改镜头、不补创意决策。
3. **Part 4.5 不是必须独立成一个 Agent**。它是图片规划 Agent 使用的素材库 / 复用规则；图片生产完成后，同一规划 Agent可再次按 Part 4.5 规则登记未来素材候选。
4. **QA 分工**：图片规划 Agent负责执行包 QA；生图执行 Agent负责逐图 QA 与全部图片完成后的整集结果 QA。正常流程不要求新增独立 Review Agent；Owner / Reviewer 仍可做后续 adjudication。
5. **整集 QA 只检查是否忠实实现规划，不在末端重新导演**：
   - Part 3 原规划本身重复 / 场景系统或现实演绎不足 → 返回 Part 3；
   - Part 3 正确但 Part 4 编译把不同画面错误压成同类任务 → 返回图片规划 Agent修正 Part 4；
   - 执行包正确但模型成图偏离任务 → 生图执行 Agent按 retry / return 合同修复。
6. **完成状态拆分**：
   - Part 4 规划完成 / 执行包完成；
   - Part 4 图片生产完成 / 全部最终图 + 逐图 QA + 整集 QA + path/hash/mapping reconciliation 完成。
7. **执行包继续严格但精简**：只保留执行说明、自包含任务、总清单 / 完整性校验、实际使用参考图；但真实 binary、hash、前置依赖、fallback、验收与失败条件不得省略。
8. **Scene / UI / 道具稳定性**：需要稳定不等于必须额外生成 mini master；优先使用 canonical reference、Part 4.5 兼容完整旧图、本集已接受早期最终帧，只有真正必要时才预生成 mini master。
9. **Part 4.5 正式接口接通**：执行方式锁定前由图片规划 Agent 查询当前 active catalog，并同时核对 binary/hash、status、reuse_scope、reuse_modes 与目标语义 / 物理兼容性。无充分兼容候选时直接新生成，不设固定复用率。
10. **QA / 失败处理保持精简但更明确**：补关键对象可辨、额外可读事实、source权限 / 兼容性、明确 retry / fallback / return 路由；不扩张为庞大机械评分体系。

H019 当前 P1 / P2 / P3 问题归因也已澄清：现有证据更支持其主要属于 Part 3 生图前视觉规划问题，而不是生图执行 Agent自由发挥：
- P1 整体视觉分布 / 局部正确但整体重复 → Part 3；
- P2 现实人物 / 真实场景演绎不足、UI易连续承担正文 → Part 3；
- P3 Scene System 是否在生图前被整体规划 → Part 3；
- Part 4 / 执行 Agent只在“Part 3已经规划正确但编译或成图没有实现”时承担对应责任。

因此 Part 4 独立复查主线本轮可视为已完成落地；P1 / P2 / P3 及剩余旧 Skill → 当前 Part 3 迁移差异继续作为独立 Part 3 复查，不再混入 Part 4。


### Part 3 独立 Reviewer：第一轮 Owner 决策（2026-10-01）

本轮只记录已确认方向，暂不修改 Part 3 正式规则。

Owner 已确认：
- 保留当前 `整集视觉策略 → Semantic Shot → Visual Beat` 三层结构与 C 补丁，不推倒重来；
- QA 继续按职责归因并与最新 Part 4 对齐：Part 3 规划问题回 Part 3，Part 4 编译问题回图片规划 Agent，正确任务的成图偏差由生图执行 Agent处理；
- 同意加强生图前的整集视觉规划，使每个主要段落的视觉载体、人物行动、世界后果、UI职责与段落差异在逐 Beat 设计前被明确；
- 同意恢复 Scene System 的前置规划能力，但明确 Scene System ≠ Scene Master 图片库，不恢复 4–8 Scene Master 或固定地点数量配额；
- 同意澄清客观事件、已锁隐喻、主观脑补 / 假设、一般机制示范的不同授权边界，避免把未证实猜测画成客观事实。

仍待 Owner 进一步决策：
- “现实人物行动 / 世界后果优先于连续 UI”应以何种强度写入正式规则，倾向原则优先而非比例配额；
- Visual Beat 是否明确记录最终静帧停留状态，以及是否复用现有字段而不新增 schema；
- 时间链是否新增 Part 2.5：在 Part 2 锁稿后先完成最终 TTS / 对齐 SRT，再进入 Part 3，以真实音频时间替代计划估时；若采用，需要同步重定义后续 Part 5 的职责。



### Part 3 独立 Reviewer：Owner 批准项正式落地（2026-10-01）

Owner 已确认本轮已讨论项目全部通过，并要求同步正式文档。

正式修改：
- Part 2.5 新建：`part2_5/VOICE_SRT_ALIGNMENT.md`，commit `f7317ac2b8f80a80e80586003bdb19f8b98ee215`；
- Part 2 下游时间边界更新，commit `3bedfb2507462c124e4b076e9450bf7b50a3f376`；
- Part 3 正式规则更新，commit `f43b8f809618676143a5236760b18823a8b8383f`；
- Part 4 时间边界与 Part 2.5 对齐，commit `0fe211531fd3a0806b9f0ae5e81376a405e6ea76`；
- `SKILL.md` 生产链同步，commit `0c76e459c9a1f6d557b0df88e03b38965766499d`。

本轮正式决策：
1. 保留当前三层导演结构与 C 补丁：`整集 / 段落视觉策略 → Semantic Shot → Visual Beat`。
2. 整集视觉规划必须在逐 Beat 设计前真正完成：先明确各主要段落的状态变化、主要视觉载体、人物行动、世界后果、UI职责、重复风险与画面关系。
3. Scene System 恢复为 Part 3 正式前置规划能力，但只规划地点 / 功能区、故事用途、状态变化与空间锚点；Scene System ≠ Scene Master 图片库，不恢复 4–8 Scene Master 或固定地点数量。
4. 现实人物行动、空间变化、关系变化和世界后果在剧本已经提供时优先承担正文；精确条件需要 UI 时继续用 UI。不设 Tableau 比例或现实场景配额。
5. 正式区分四类视觉事实：客观故事事件、已锁隐喻世界、主观脑补 / 假设 / 计划、一般机制示范。主观内容必须可辨；一般机制示范不得冒充本集个案因果证据。
6. Visual Beat 明确最终静帧状态；`state_before / state_after` 只作因果上下文，不把完整多步过程塞进一张图。
7. QA 分成前置策略 QA 与 Shotbook 完成后的整体验证；末端 QA 不重新导演。
8. QA 责任继续按已封板 Part 4 对齐：Part 3 原规划问题回 Part 3；Part 4 + 4.5 编译问题回图片规划 Agent；正确任务的成图偏差由生图执行 Agent处理。
9. 新增 Part 2.5：Part 2 锁稿后先用最终准备采用的声音 / 语速 / 停顿生成最终配音，并对齐正式 SRT；Part 3 直接使用真实音频时间，不再以计划字速 / 字符数估正式时长。
10. Part 5 不再负责首次生成正式配音，后续方向调整为视频时间轴 / 图片或有限动画合成 / 字幕视频层 / 成片输出。

旧说明中“Part 3 绑定 Part 2 计划 SRT、真实 TTS 后再由 Part 5 重算”的内容现为历史过程，不再是当前正式运行规则。

当前状态：
- Part 4：SEALED；
- Part 2.5：正式基线已建立；
- Part 3：本轮已批准项已落地，但独立 Reviewer 的其余建议仍需继续复查，未自动批准。



### Part 3 已批准项落地后的复查（2026-10-01）

同步性检查：
- Part 2 → Part 2.5 → Part 3 → Part 4 / 4.5 的正式时间与职责链已对齐；
- Part 3 人可读 Shotboard 中残留的“计划时间”已改为“Part 2.5 最终音频 / SRT 的正式时间”，commit `3ef5e9b1dca0164e02878a9c16333f6cca8f7f22`；
- Part 4 残留“真实 TTS 后再决定最终时间”的旧措辞已移除，commit `c4df07d119de698e61fbe8bc1eeecb80201bd562`。

独立 Reviewer 的剩余建议中，仍有以下问题尚未由 Owner 逐项确认，因此本轮未继续修改正式规则：

1. **Setup / Reveal 的非文字泄露与注意力操作**：当前规则会检查 withheld / reveal，但未明确颜色、成功图标、数量、表情也可能提前泄露；SINGLE / DUAL / FIELD 的“焦点怎样真正获胜”仍较概括。
2. **POV 与连续性优先级措辞**：当前仍有“高层意义可以有理由牺牲低层连续性”，可能被误读为允许牺牲身份、数量、时空或物理屏幕关系；需决定是否加硬边界。
3. **连续性对象适用范围 / callback**：当前连续性列表较全，但未明确只约束实际出镜相关对象，也未正式区分邻接连续、同一原事件回忆、非相邻构图 / 母题回扣。
4. **跨 Semantic Shot 的图像增量复查**：当前已有整集重复检查，但还未明确写“跨 Shot 也要判断相邻 Beat 是否只是重复同一证据 / 同一关注点”。
5. **图片文字合同与视频字幕边界**：当前禁止图片后期 overlay，但尚未专门澄清“普通视频字幕属于后续视频层，不受图片 overlay 禁令影响”，以及 exact text 与允许文本集合的正式写法。
6. **机制画面 §16 的‘明确解释图’末位项**：当前虽然紧接着说明不能替代真实故事事件，但保留“第7项明确解释图”仍可能被误读为自动 fallback；需决定是否直接删除该入口。
7. **Part 5 正式规范尚未建立**：SKILL 已把 Part 5 调整为视频时间轴 / 合成 / 成片，但尚无正式 Part 5 文档；未来建立时必须继承“不得重新首次配音 / 重算口播时间”的 Part 2.5 边界。

以上仅为待讨论项，不代表已批准修改。



### Reviewer 文档归档规则更新（2026-10-01）

为避免独立审查材料与正式运行规则混在模块目录中，Reviewer 产物统一放入独立 `reviews/` 区域；正式 `part*/` 目录只保留当前有效规则与正式运行资产。

当前 Part 3 Reviewer 两份文档已从 `comic-narrative/part3/` 移出，在独立审查分支 `codex/comic-part3-reaudit-20261001` 归档到：
- `comic-narrative/reviews/part3/STORYBOARD_VISUAL_DIRECTOR_REAUDIT.md`
- `comic-narrative/reviews/part3/STORYBOARD_VISUAL_DIRECTOR_MODIFICATION_SUGGESTIONS.md`

最终清理 commit：`04325e8bc0719f94cc3ef1f8d298657c7dac38f5`。

Part 4 Reviewer 文档继续按同一原则放在独立 `reviews/part4/` 区域，不进入正式 `part4/`。

规则：
- `part*/` = 当前正式运行规则；
- `reviews/` = Reviewer / 独立审查 / 修改建议，不直接参与运行；
- `source-snapshots/` = 历史原始证据与备份；
- `HANDOFF.md` = Owner 决策、迁移、审查结论、当前状态与下一步。



### H019 图片样板诊断：三包 Reviewer 完成（2026-10-01）

本轮按 Owner 要求只把 H019 作为真实生产样板做问题诊断；**不进入第二轮重跑，也不修改 Part 3 / Part 4 / Part 4.5 / SKILL 正式规则**。后续需先修问题，再完整重跑验证，验证通过后才决定是否写回正式规则。

#### 样板范围

- 计划画面位置：41；
- 已生成并审核：36；
- 尚未执行：C-VB35、C-VB36、C-VB37、C-VB39、C-VB40；
- 原执行 QA：33 PASS、3 FAIL；原 QA 采用“逐张只做硬失败，整集连续性后置”的执行策略，因此未覆盖本轮 Reviewer 的跨帧 / 整段视觉诊断；
- Reviewer 已完成三包现有图片逐张检查，并同时对照 H019 Part 3 Shotboard / Visual Strategy、Part 4 图片任务、执行说明与 QA 记录。

#### Reviewer 当前明确返修项

需要重新处理：
- C-VB02：原本只允许“六百多”，成图出现“六百多 元起”，新增价格条件语义；
- C-VB09：主线夜间生活空间漂移为白天餐饮空间；
- C-VB10：主观脑补被画成箭头 / 图解 / 额外人物，且两次执行均失败；
- C-VB11：继续处于未经授权的白天餐饮空间；
- C-VB12：继续场景 / 时段漂移，调查动作也不够清楚；
- C-VB22：出现解释卡 / 额外因果文字，违反 Anti-PPT 与事实边界；
- C-VB24：主线调查时空漂移为白天 / 黄昏桌面；
- C-VB33：matched before / after 的主要动作差异两次都不可辨，重试上限耗尽。

依赖 / 轻度复核项：
- C-VB05、C-VB08：依赖 C-VB02 的同页面 / 来源链，C-VB02 修复后需重新确认；
- C-VB21：出现未锁定精确日期，但主语义成立；
- C-VB25、C-VB29、C-VB34：相对报价 / 列表顺序虽基本成立，仍有解释标签感或可读性不足；
- C-VB32、C-VB38：语义成立，但场景明显受辅助画风参考图污染。

#### 主要系统性问题与当前归因

1. **画风参考污染场景 / 构图**
   - 辅助画风参考中的白天木桌、条纹杯、餐饮空间被多个任务继承到不该出现的主线镜头。
   - Part 4 任务虽然声明其用途是“画风锁定”，但 Prompt 只写“线条、上色、人物与环境完成度遵循指定画风参考”，没有足够强地禁止继承参考图的具体空间、道具、昼夜、姿态和构图。
   - 当前归因：主要是 Part 4 编译 / reference-purpose 隔离不足；模型执行是表现层。

2. **局部 Beat 正确但整段视觉重复**
   - C-VB13–17、C-VB25–31 等多张在故事意义上不同，但成片视觉长期停留在“同一人物 + 手机 + 夜间室内 + 类似越肩构图”。
   - 当前样板 Part 3 C 版只列出世界 / 场景系统与整体递进，没有像现已更新正式 Part 3 那样在逐 Beat 前明确每个主要段落的视觉载体、人物行动、世界后果与 UI 职责。
   - 当前归因：历史样板的 Part 3 前置整体规划不足 + Part 4 编译时构图差异不足；不是单纯生图模型失败。

3. **主观脑补授权太抽象**
   - C-VB10 只要求“明显主观想象气氛”，没有锁定观众如何一眼区分现实与脑补。
   - 下游两次都退化成箭头 / 图解 / 解释性人物。
   - 当前归因：Part 3 画面关系 / 主观状态表达合同不够具体，Part 4 又不能自行重导演；需在返修方案中先明确主观语法，再重编译。

4. **matched before / after 的主要动作不可辨**
   - C-VB32 → C-VB33 在 Part 3 已明确“刷新动作 → 检查条件动作”，Part 4 选择 DERIVE_EDIT 维持 matched 构图合理；但两次成图仍看不出动作变化。
   - 当前归因：Part 4 的编辑任务没有把“动作差异必须肉眼可辨”编译成足够强的验收 / 执行约束，且执行模型未实现；不需要重写 Part 3 故事意义。

5. **逐张硬失败 QA 无法替代整集 Reviewer**
   - 原执行说明明确逐张只检查身份、肢体、视角、关键文字、关键状态和规格，整集连续性留到最后。
   - 因此 C-VB09 / 11 / 12 / 24 的时空漂移和成段重复可以逐张 PASS。
   - 当前结论：该执行策略本身解释了“原 QA 33 PASS 与 Reviewer 发现更多问题”之间的差异；不是原 QA 记录造假或简单判断错误。后续仍需保留整集结果 QA。

#### 暂定修复方向（尚未进入执行）

- 强化 style reference 的用途隔离：只继承线条 / 上色 / 完成度，显式禁止继承具体场景、木桌、条纹杯、食物、窗景、昼夜、人物姿态和构图；
- 为主线“夜间生活空间”提供更明确的 Scene anchor / continuity contract，避免画风参考覆盖场景；
- C-VB10 先重做导演级主观脑补表达，再重新编译任务，不再机械复用原 Prompt；
- C-VB33 重编译为“动作变化必须可见”的 matched-after 任务，必要时不拘泥于原编辑方案；
- 返修时先处理 C-VB02，再处理依赖它的 C-VB05 / C-VB08；
- 其余 5 张未执行画面暂不继续生成；
- 修复完成后再做一轮完整 H019 重跑，对比旧样板与新结果，之后才决定正式规则是否还需调整。

状态：`H019_SAMPLE_DIAGNOSIS_COMPLETE / SECOND_RERUN_DEFERRED / FORMAL_RULES_UNCHANGED`。



### H019 样板诊断：完整问题归纳与第二轮准备完成（2026-10-01）

Owner 要求：本轮一口气完成所有不需要实际重跑的诊断 / 返修规划 / 规则覆盖核对；随后再逐项讨论。继续保持：**不启动第二轮生图，不修改 Part 3 / Part 4 / Part 4.5 / SKILL 正式规则。**

#### Reviewer 最终计数修正

36 张已生成画面的统一 Reviewer 状态：
- PASS：19；
- PASS WITH NOTE：7；
- HOLD / 依赖：2；
- RETURN：8；
- 未生成：C-VB35、C-VB36、C-VB37、C-VB39、C-VB40。

此前第三包口头统计曾写成“7 PASS + 4 NOTE + 1 RETURN”；复核后正确应为：
- 第三包：6 PASS + 5 PASS WITH NOTE + 1 RETURN。
后续以本记录为准。

明确 RETURN：
- C-VB02；
- C-VB09；
- C-VB10；
- C-VB11；
- C-VB12；
- C-VB22；
- C-VB24；
- C-VB33。

依赖 HOLD：
- C-VB05；
- C-VB08。

#### 完成的系统性诊断

1. **Style Reference 内容污染**
   - 多个镜头继承辅助画风参考中的白天木桌、条纹杯、餐饮空间、窗光与构图。
   - 说明旧执行包只定义“画风锁定”，但没有把“继承什么 / 明确不继承什么”编译得足够强。
   - 下一轮优先验证“style only；scene / prop / lighting / pose / composition excluded”的用途隔离，不先修改正式规则。

2. **旧 C 样板 Scene System 只有场景类别，没有逐段可执行 Scene anchor**
   - 主角夜间生活空间、匿名酒店客房、later event 虽被列出，但任务没有稳定映射到 accepted current-run scene reference。
   - 导致 C-VB09/11/12/24 等逐张可读但整段时空漂移。
   - 当前正式 Part 3 已补 Scene System / 段落载体 / 前置重复检查；第二轮用于验证是否已解决。

3. **局部 Beat 正确但整段视觉重复**
   - C-VB13–17 与 C-VB25–31 是典型：故事意义推进，但长期停留在“主角 + 手机 + 夜间室内 + 类似越肩 UI”。
   - 当前正式 Part 3 已覆盖前置段落视觉载体规划与全集验证；暂不继续加规则。

4. **主观脑补合同不够可执行**
   - C-VB10 只锁“明显主观想象气氛”，下游两次都退化为箭头 / 图解 / 额外人物。
   - 下一轮必须由 Part 3 重新决定主观视觉语法；必要时允许重新拆 Beat，不机械重试旧 prompt。
   - 当前正式规则已经保护“主观 ≠ 客观事实”，但具体视觉语法是否仍不足，需要第二轮实证。

5. **matched before/after 的动作 delta 未实现**
   - C-VB32→33 的故事意图清楚，但 DERIVE_EDIT 两次都没有把“刷新 → 查条件”画出可辨差异。
   - 当前正式 Part 4 已有 main delta / source compatibility / fallback / HOLD；下一轮应验证执行，不先追加规则。

6. **逐图 hard-failure QA 无法代替整集 QA**
   - 原 run 有意把逐图 QA 限于硬失败，所以场景漂移 / 成段重复可以逐张 PASS。
   - 当前正式 Part 4 已要求逐图 continuity + additional facts + 全集结果 QA；第二轮必须真正跑完而非仅存在文档。

7. **UI 文本有三类问题**
   - 未授权限定词：C-VB02 “六百多”被扩成“六百多 元起”；
   - 未授权精确日期：C-VB21；
   - 为解释相对状态而出现人工标签：C-VB25/29/34。
   - 下一轮区分 exact required text / allowed set / 不需要文字三类；可用 matched UI 状态证明的，不再依赖说明性标签。

#### Beat 级返修准备已完成

不启动执行，仅完成设计方向：

- C-VB02：如需要可读价格，只允许“六百多”语义；禁止“起 / 起价 / 精确房价 / 会员价”等新增条件。
- C-VB09/11/12/24：必须回到主线夜间 scene anchor；style ref 不得决定场景内容。
- C-VB10：返回 Part 3 重新规划 subjective 视觉语法；不机械重试旧 prompt。
- C-VB22：旁白负责命名“收益管理”，画面只显示用户可见公开报价 / 方案，不显示解释性因果文字。
- C-VB33：主要动作差异必须肉眼可辨；edit 不可行时 fallback GENERATE，保持 matched relation 但不强制同一 source。
- C-VB05/08：只有新的 C-VB02 通过后才能继续用其页面连续参考。
- C-VB21：禁止未锁定精确日期。
- C-VB29：下一轮优先建立明确 before/setup，再用 matched reveal 证明列表顺序变化，避免“更高/稍贵”标签代替证据。
- C-VB32/38：不得再让辅助 Style Reference 的餐饮空间成为实际 scene。

#### 5 张未生成画面的预检查已完成

- C-VB35：旧任务回跳 C-VB02 作为页面连续参考不理想；下一轮应承接当时最新 accepted page / scene state。
- C-VB36：以完成预订状态为 continuity，人物反应优先，不需要重新堆复杂 UI。
- C-VB37：方向合理，应保留“手机离开视觉中心 / 身体后靠”的现实行为回报。
- C-VB39：later-event 内检查条件，禁止四项编号教程卡；是否一张能承载由下一轮 Part 3 重新判断。
- C-VB40：继续 later-event，重点是“谨慎而非笃定”的人物状态，不再新增一页解释 UI。

#### 当前正式规则覆盖核对

大部分样板问题已经被刚完成的新正式规则覆盖：
- 整段手机 / UI 重复：当前 Part 3 已覆盖；
- Scene System / 时空连续：当前 Part 3 + Part 4 已覆盖大部分；
- C-VB33 delta / source fallback：当前 Part 4 已覆盖；
- failed source 传播：当前 Part 4 已禁止；
- 额外金额 / 日期 / 因果文字：当前 Part 4 Text / Additional Facts QA 已覆盖；
- Anti-PPT：当前 Part 3 / Part 4 已覆盖；
- 逐图 PASS 但整集差：当前 Part 4 已有整集结果 QA。

仍需第二轮实证，而不是现在直接改规则：
1. Style Reference 的“内容隔离”是否需要升级为正式条文；
2. 主观脑补的具体视觉语法是否还需要 Part 3 增加操作合同；
3. C-VB29 这类比较状态是否需要更明确的 setup / reveal 可执行约束。

#### 第二轮完整重跑入口（只定义，暂不执行）

下一轮不在旧 41 张包上补丁续跑，按当前正式链重新开始：

```text
Part 2 锁稿保持
→ Part 2.5 最终配音 + 真实 SRT 对齐
→ Part 3 按当前正式规则重新规划
→ Part 4 + Part 4.5 重新编译执行包
→ 生图执行
→ 逐图 QA
→ 整集结果 QA
→ 与第一轮样板对照
```

不锁死旧 12 Semantic Shot / 41 Visual Beat / C-VB ID / GENERATE-DERIVE 比例 / 场景数量。

#### 下一步逐项讨论队列

Owner 要求下一阶段逐个过。建议按以下顺序：
1. Style Reference 内容隔离强度；
2. 主线 Scene Anchor 的产生与复用；
3. 主观脑补视觉语法；
4. 比较状态（如旧 C-VB29）的 setup / reveal 合同；
5. DERIVE_EDIT 失败后的 fallback；
6. UI 文字 exact / allowed / no-text 边界；
7. 第二轮是否严格从 Part 2.5 开始，而不是只重跑 Part 3 / Part 4。

当前状态：
`H019_SAMPLE_ANALYSIS_COMPLETE / RERUN_PREP_COMPLETE / SECOND_RERUN_DEFERRED / FORMAL_RULES_UNCHANGED / READY_FOR_OWNER_ITEM_REVIEW`。



### H019 样板问题 Owner 决策收敛（2026-10-01）

本轮只记录 Owner 已确认的修改方向；**正式 Part 3 / Part 4 尚未改动**，等待 Owner 审阅精简修改清单后再写入。

已确认：
- Style Reference：改为优先使用 1–2 张专用 Style Plate，减少具体场景 / 道具 / 构图污染；正式落点待写入 Part 3 长期视觉基线与 Part 4 reference 使用规则。
- Scene Anchor：通过。Part 3 锁空间身份 / 时间状态 / 进入离开边界，Part 4 负责选择真实连续性参考，不恢复固定数量 Scene Master。
- 主观脑补视觉语法：通过。Part 3 需要明确主观画面与客观现实的可辨边界，不能只写“主观气氛”。
- before / after 证据：通过。重要状态变化需要能从画面本身辨认；必要时用 setup → matched reveal / before → after。
- DERIVE_EDIT fallback：通过。若连续两次主要 delta 仍不可辨，不再继续同类 edit，剩余尝试切 GENERATE。
- 单 Beat 生图上限：通过。每个 Beat 最多 3 次有效生图（首次 + 最多 2 次重试）；未真正产出图片的技术失败不计入这 3 次，但技术重试另受限制。
- UI 文本：通过“关键事实严格、非关键文字宽松”。只把会改变观众理解 / 故事结论的 UI 文字或状态设为硬验收；非关键小字不因轻微偏差自动重生成，但不得新增会改变事实的金额、日期、品牌、订单状态等。
- “第二轮从 Part 2.5 还是 Part 3 开始”本轮淘汰，暂不纳入规则讨论。

待 Owner 下一步：
1. 审阅仅包含“哪份正式文档 / 哪个章节 / 新增或删改什么内容”的精简修改清单；
2. 通过后再分别更新 Part 3 与 Part 4；
3. 在此之前不修改正式模块正文。

当前状态：
`H019_OWNER_DECISIONS_RECORDED / FORMAL_PART3_PART4_UNCHANGED / WAITING_EDIT_MAP_APPROVAL`。



### 生图速度排查结论与下一步执行计划（2026-10-01）

Owner 已完成并认可本轮生图速度排查的核心方向；本轮仍不启动 H019 第二轮重跑，也不修改 Part 3 / Part 4 正式规则。

#### 当前核心判断

- 现有证据不支持把 VPN / VPS / MTU 作为主要瓶颈；OpenAI API 网络探测为秒级，而 H019 图片调用为分钟级，不在同一量级。
- 图片调用本身是显著耗时来源；H019 图片调用中位约 3 分 18 秒，长尾可到约 10 分钟。
- 图片返回后的等待区间更长，但当前日志只能证明该区间包含 QA 排队、波次调度与后续处理，不能把这部分全部等同为“纯 QA 耗时”。
- 文件保存耗时约秒级，不是当前优化重点。
- TEST-A / TEST-B 样本不足以证明“参考图固定增加多少耗时”，只可作为后续对照线索。
- 当前最值得优化的是：图片返回后立即保存 / QA / 释放依赖，以及减少无效重试。

#### 已确认执行边界

- 单个 Visual Beat 最多 3 次有效生图：首次 + 最多 2 次重试。
- 同一种语义错误连续出现 2 次，应停止机械重试，返回重新编译 / 重新规划。
- DERIVE_EDIT 连续 2 次主要 delta 仍不可辨时，停止同类 edit，剩余有效尝试切 GENERATE。
- 未真正产出图片的网络超时 / 请求失败不计入 3 次有效生图，但技术重试另受限制。

#### 下一次建议的批量执行规模

下一次正式生图先以 **并发 2** 作为基线，不直接把 4 并发视为最优。

建议第一轮测速批次：
- 一次调度 **6 张无依赖图片**；
- 运行方式：并发 2，即最多同时生成 2 张；
- 每张返回后立即：保存 → 硬门 QA → PASS 后释放依赖；
- 不等待整批全部返回后再统一 QA。

6 张的目的不是追求产量，而是获得足够样本判断并发 2 的真实吞吐与图片返回后等待是否已明显下降。完成后再决定是否把并发提高到 3；只有数据支持时才测试 4。

#### 时间预估

按 H019 历史图片调用中位约 3 分 18 秒估算：
- 理想情况下，并发 2 的 6 张分 3 个 wave，纯图片调用理论约 10–12 分钟；
- 考虑长尾、保存、即时 QA、少量调度开销，正常预估约 **15–25 分钟**；
- 若遇到 P90 级慢调用或内容重试，可能延长至 **30–45 分钟**；
- 若多张命中重试上限，则不继续机械生成，而是提前返回问题，因此不以“全部硬跑完”为目标。

该时间仅是基于现有 H019 与最小测速数据的执行估算，不是 SLA。

#### 下一轮必须记录的时间点

每张图至少记录：
- submit；
- image_return；
- saved；
- QA_start；
- QA_end；
- dependency_released；
- effective_attempt_number；
- concurrency_at_submit。

T3（服务内部开始生成）如工具仍不可观察，则继续标为不可观察。

#### 当前推荐流程

```text
一次解析任务 / 依赖图
→ 选 6 张无依赖任务
→ concurrency = 2
→ 图片返回即保存
→ 立即硬门 QA
→ PASS 即释放后续依赖
→ FAIL 按最多 3 次有效生图规则处理
→ 统计 6 张总墙钟 / 单张调用 / QA等待 / 重试
→ 再决定并发 3 或 4
```

当前状态：
`IMAGEGEN_SPEED_DIAGNOSIS_REVIEWED / NEXT_BATCH_6 / CONCURRENCY_2_BASELINE / FORMAL_RULES_UNCHANGED / H019_RERUN_STILL_DEFERRED`。



# CURRENT STATUS SNAPSHOT — H019 样板诊断 / 生图速度优化（2026-10-01）

> 本节是当前状态总览，供下一位 Agent 优先读取。历史讨论与完整证据仍保留在上文；正式 Part 3 / Part 4 规则尚未按本轮样板结论继续修改。

## 1. 当前项目状态

- Part 4：仍为已封板正式基线；
- Part 3：上一轮已批准项已落地，但 H019 样板本轮新增观察尚未正式写回；
- H019 第一轮：仅作为诊断样板，不作为新版规则最终验证；
- H019 已生成并 Reviewer 检查 36 张；5 张尚未生成；
- 第二轮完整重跑：暂缓；
- 正式 Part 3 / Part 4：本轮尚未按 H019 新发现继续修改；
- Owner 已要求先审阅“具体改哪份文档 / 哪个章节 / 新增删改什么”，确认后再改正式正文。

## 2. Owner 已确认方向

### Part 3 相关
- Scene Anchor：通过；
- 主观脑补必须有可执行且可辨的视觉语法：通过；
- 重要 before / after 状态变化需要可见证据：通过；
- Style Reference 改为优先使用 1–2 张专用 Style Plate：方向通过。

### Part 4 相关
- Style Plate 只承担画风，不继承具体场景 / 道具 / 昼夜 / 姿态 / 构图：方向通过；
- Part 4 负责把 Part 3 的 Scene Anchor 落成真实 continuity reference：通过；
- DERIVE_EDIT 连续两次主要 delta 仍不可辨时，停止同类 edit，剩余尝试改 GENERATE：通过；
- 单个 Visual Beat 最多 3 次有效生图（首次 + 最多 2 次重试）：通过；
- 未真正产出图片的技术失败不计入这 3 次，但技术重试应另有上限；
- UI 文字采用“关键事实严格、非关键文字宽松”：通过；
- “第二轮必须从 Part 2.5 还是 Part 3 开始”本轮淘汰，不讨论。

## 3. 生图速度排查结论

当前证据支持：
1. 网络与文件保存不是主要瓶颈；
2. 图片工具 / 服务调用本身存在分钟级等待，是主要外部耗时；
3. 图片返回后的队列 / 波次 / QA 等后续等待区间也很大，是目前最值得优化的可控部分；
4. 现有日志不能把“QA 计算时间”和“排队 / 波次等待”完全拆开，因此不得把整个返回后区间都称为纯 QA 耗时；
5. 简单 TEST-A 约 32 秒，而 H019 图片调用中位约 3 分 18 秒，说明真实 H019 工作负载明显更慢，但目前不能单独归因给参考图、网络或模型服务；
6. 现阶段不优先调整 VPN / VPS / MTU。

## 4. 下一次小规模执行建议（尚未启动）

先做一个 **6 张图片的小批次**：
- 并发基线：2；
- 目的：同时验证新版执行调度、即时 QA、3 次上限、reference / scene / UI 新边界；
- 不做大规模 H019 重跑；
- 每张图返回后立即：保存 → 硬门 QA → 释放其依赖任务；
- 无依赖任务不因其他图片失败而暂停；
- 记录：submit / return / saved / QA start / QA end / dependency released；
- 同一种语义错误连续 2 次：停止机械重试，返回重新编译 / 规划；
- DERIVE_EDIT 连续 2 次 main delta 不可辨：剩余有效尝试切 GENERATE。

### 时间预估

按现有 H019 与 TEST-A/B 数据：
- 无明显失败 / 重试：约 15–25 分钟完成 6 张；
- 有 1–2 次内容重试：约 25–40 分钟；
- 若服务进入 H019 的 P90 级慢调用，可能更久，因此以上仅作执行预算，不是 SLA。

6 张足以观察：
- 并发 2 的真实吞吐；
- 图片返回后是否仍有长时间空等；
- 即时 QA 是否能缩短依赖释放；
- Style Plate / Scene Anchor / UI 文本策略是否减少返工。

若这一批运行稳定，再决定是否比较并发 3 / 4；不预设并发 4 最优。

## 5. 下一步顺序

1. Owner 审阅正式 Part 3 / Part 4 修改位置清单；
2. 经 Owner 明确批准后，再修改两份正式文档；
3. Style Plate 需要先生成 / 选定并确认后，才写入长期视觉资产清单；
4. 之后再决定是否启动 6 张小批次验证；
5. 只有小批次验证后仍重复出现的问题，才继续升级正式规则；
6. H019 第二轮完整重跑继续保持 DEFERRED。

当前状态：
`H019_SAMPLE_DIAGNOSIS_COMPLETE / SPEED_BOTTLENECK_REVIEWED / FORMAL_PART3_PART4_PENDING_OWNER_EDIT_MAP_APPROVAL / NEXT_PILOT_PLANNED_6_IMAGES_CONCURRENCY_2 / FULL_RERUN_DEFERRED`



### Part 3：H019 已批准规则补强正式落地（2026-10-03）

Owner 已明确要求先完成 Part 3 修改；本轮仅修改正式 `part3/STORYBOARD_VISUAL_DIRECTOR.md`，Part 4 暂不动。

正式 Part 3 已落地：
- 长期画风基线由“2 张具体生活场景 Style Reference”改为“1–2 张经确认的 Style Plate”；
- Style Plate 只锁线条、上色、人物比例、阴影/材质、色彩关系与整体完成度，不定义具体场景、道具、昼夜、姿势或构图；
- 主观脑补 / 假设 / 计划必须具备可执行的主观视觉语法，不能只写“主观气氛”；
- Scene System 对关键重复空间增加 Scene Anchor：空间身份、时间/昼夜/天气、故事用途、延续范围与允许切换边界；具体 reference 绑定仍归 Part 4；
- 当结论依赖 before → after 变化时，必须提供可见证据；必要时采用 setup → matched reveal / before → after，不依赖解释标签证明变化；
- Part 3 QA 已同步增加 Scene Anchor、主观视觉语法和 before/after 可见证据检查。

正式修改 commit：
- `b9c561a6368a5f21c3cfd5076b574f3964b41a3e`

当前边界：
- Part 3：本轮 H019 已批准补强已落地；
- Part 4：仍保持原正式基线，等待后续单独修改；
- Style Plate 的具体图片资产尚未生成 / 确认，不在本轮创建；
- H019 第二轮完整重跑仍未启动。

当前状态：
`PART3_H019_REFINEMENTS_APPLIED / PART4_PENDING / STYLE_PLATE_ASSET_PENDING / FULL_RERUN_DEFERRED`。



### Imagegen Speed Batch R1 — Reviewer Decision（2026-10-03）

Reviewer 对 Owner 提供的 `_imagegen-speed-batch-r1.zip` 做了 fresh readback。证据包 SHA-256：
`12c011dc0be8d93824f71dd076a50c645077fb82007aa526faaa607bfa9c26b0`。

Reviewer verdict：**`RETURN_IMPLEMENTATION_DRIFT`**。

已直接核验：
- 6 个目标 Beat；
- 11 个 manifest attempt 图片 + 1 个重复副本；
- CSV 11 行 attempt 与图片 manifest 一致，11 个 SHA-256 均与实际文件匹配；
- 最终 3 PASS / 3 FAIL；
- 9/11 有可用 image-call timing；
- 最后 2 次 retry 因日志持久化失败缺 T0/T1/T2。

RETURN 原因：
1. 前 9 张图片 output-path 解析失败，必须人工从缓存恢复，导致 return→save / return→QA 指标失真；
2. 完整 RUN_RECORD 通过超长 Windows 命令写入，后期发生持久化失败；
3. C-VB01 在 QA 尚未及时完成时继续发出第三次同策略生成，没有真正执行“同类语义错误两次即停”；
4. 因此本轮没有证明“返回即保存 → 立即 QA → 立即释放/续跑”的新编排，也不能据此升 concurrency=3。

该 RETURN 路由为**执行器 / 测试 harness 缺陷**，不升级为 Part 3 / Part 4 正式规则问题；本轮三个内容 FAIL 不作为新版 Part 3 的回归结论。

下一 Gate：
`IMAGEGEN_EXECUTOR_RELIABILITY_R2`

顺序：
`保留 R1 证据 → 修 output path → append-only durable event log → 解耦无依赖生图槽与 QA → 无生图 preflight → 同 6 Beat / concurrency=2 复测 → fresh readback → Reviewer 再决定是否测试 concurrency=3`。

正式 Part 3 / Part 4 / Part 4.5 / SKILL：本轮不改。
H019 第二轮完整重跑：继续 DEFERRED。



### Part 2 独立 Reviewer 审查与正式修改清单（2026-10-03）

独立 Reviewer 已在分支 `codex/comic-part2-reaudit-20261003` 完成 Part 2 复查，commit：
`1366c53d0277ce2d30d970c68031664df9239ef1`。

Reviewer 产物：
- `comic-narrative/reviews/part2/SCRIPT_NARRATIVE_REAUDIT.md`
- `comic-narrative/reviews/part2/SCRIPT_NARRATIVE_MODIFICATION_SUGGESTIONS.md`

主 Reviewer 复核结论：
- 当前 Part 2 的叙事骨架不需要推倒；
- 主要缺口位于证据 / 事实身份、锁定 / 重锁权限、下游交接、RETURN 路由和整稿 QA；
- 不建议整篇替换候选方案；
- 优先吸收 R1 / R2 / R3 / R5 / R8 / R15；
- R4 / R6 / R7 / R9 / R10 / R11 / R12 / R13 / R14 仅以必要澄清方式并入现有章节，不扩成新体系；
- R16 全文重构暂不做；
- R17 历史溯源 / 证据修正留在 Reviewer / HANDOFF，不写入每次运行的正式规则。

Owner 已同意先形成正式修改位置清单，再决定是否写入 Part 2 正文。

已新增：
`comic-narrative/reviews/part2/PART2_FORMAL_EDIT_MAP.md`

该清单只记录：
`正式 Part 2 哪一节 → 新增 / 修改 / 删除什么`，
不包含问题背景、历史论证或长篇解释。

当前正式 `part2/SCRIPT_NARRATIVE.md` **尚未修改**。

下一步：
1. Owner 审阅 `PART2_FORMAL_EDIT_MAP.md`；
2. Owner 明确批准后，再一次性修改正式 Part 2；
3. 修改后由 Reviewer fresh readback，确认没有把候选全文、历史审计或新配额误写入 runtime 规则；
4. 再决定是否进入 Part 2 小范围回归。

当前状态：
`PART2_REAUDIT_REVIEWED / FORMAL_EDIT_MAP_READY / FORMAL_PART2_UNCHANGED / WAITING_OWNER_APPROVAL`。



### Part 2 正式修改清单：Owner 整体概览确认记录（2026-10-03）

Owner 已先完成对 Part 2 修改清单的整体概览；**本轮仅记录，不修改正式 Part 2**。

当前 11 个拟修改点：
1. Part 1 输入承接 + 来源 / scope；
2. 证据 / 故事身份边界；
3. 机制核 → 故事前提 → Writer 的锁定 / 重锁权限；
4. “推进”按主要叙事单元检查，避免逐句机械化；
5. 第一人称默认入口与真实性冲突处理；
6. Hook 承诺强度不得超过机制 / 正文可兑现范围；
7. 术语默认后置，但必要时允许早提名称；
8. Part 2.5 真实成音后的返修回路；
9. 最终交接补充事实身份、关键非口播事件、说话者 / 轮次、语义锚点与不可改事实；
10. 整稿 QA 增加发现依据、承诺兑现、信息释放、最终策略覆盖与连读检查；
11. RETURN 按失败真相路由到 Part 1 / Part 2 机制核 / 故事前提 / Writer / Part 2.5 / Part 3。

整体可压缩为五类：
`输入别丢 → 事实别混 → 权限别乱 → 交接别猜 → QA / RETURN 别修错层`。

Owner 当前尚未逐项批准正式写入；下一步应继续逐项审阅 / 确认，确认后再修改 `part2/SCRIPT_NARRATIVE.md`。

当前状态：
`PART2_EDIT_MAP_OVERVIEW_RECORDED / FORMAL_PART2_UNCHANGED / WAITING_OWNER_ITEM_APPROVAL`。



### IMAGEGEN_EXECUTOR_RELIABILITY_R2 — Reviewer Decision（2026-10-03）

Reviewer 对 Owner 提供的 `_imagegen-executor-reliability-r2.zip` 做了 fresh readback。证据包 SHA-256：
`39121fbda7232162e9734281cf60f4b2eee46846789117ac692e41c0c88a31ce`。

Reviewer verdict：**`RETURN_IMPLEMENTATION_DRIFT`**。

直接核验：
- 目标仍为 6 Beat / concurrency=2；
- 实际只提交 C-VB01、C-VB02；
- 两个请求均在执行路径返回图片，但 R2 中 0 张成功保存；
- 0 QA、0 retry、0 dependency release，另外 4 Beat 未启动；
- RUN_EVENTS.jsonl 共 14 条可解析记录，sequence `10` 重复、`11` 缺失；
- C-VB02 的 T2→T4 为 65.726s，但 source-path resolver 未找到实际 PNG；
- C-VB01 的 IMAGE_RETURNED 日志因并发文件锁冲突丢失。

Preflight PASS 不足以放行：其路径 fixture 与真实 image-result adapter 的数据形状不一致；真实 JavaScript adapter 没有转发实际所需的 top-level result 字段。停止后 PowerShell resolver 与 named-mutex 日志压力测试均通过，但只属于 `LOCAL_COMPONENT_PASS / END_TO_END_NOT_VERIFIED`。

R2 本地未找到 standalone R1 reviewer 文件不是阻塞项；canonical 文件在仓库：
`comic-narrative/reviews/imagegen-speed/IMAGEGEN_SPEED_BATCH_R1_REVIEW.md`。

下一 Gate：
**`IMAGEGEN_EXECUTOR_RELIABILITY_R2R1`**

R2R1 不再直接跑 6 Beat，而是：
`修真实 JS adapter + 统一锁内 append → 同 runtime path 无生图 preflight → C-VB01/C-VB02 两张真实并发 canary → 自动保存/hash/log/QA fresh readback → STOP → Reviewer`。

R2R1 期间：
- concurrency 固定 2；
- 两张 canary 不做内容 retry；
- 不启动另外 4 Beat；
- 不测 concurrency=3；
- 不启动 H019 完整重跑；
- 不修改正式 Part 3 / Part 4 / Part 4.5 / SKILL。

只有 R2R1 获得 `PASS_CANDIDATE_EXECUTOR_INTEGRATION_R2R1` 并经 Reviewer 接受后，才进入完整 6 Beat 的后续 R2 复测。

当前状态：
`R2_RETURN_IMPLEMENTATION_DRIFT / NEXT_R2R1_INTEGRATION_CANARY / CONCURRENCY_2_ONLY / FULL_6_BEAT_RETEST_NOT_AUTHORIZED`。



### IMAGEGEN_EXECUTOR_RELIABILITY_R2R1 — Reviewer Decision（2026-10-03）

R2R1 Preflight 返回 `RETURN_IMPLEMENTATION_DRIFT`，未调用生图。

Reviewer 复核后区分两个阻塞：

1. **Reviewer 文件本机缺失不是 canonical blocker。**
   两份文件均存在于 GitHub 正式分支：
   - `comic-narrative/reviews/imagegen-speed/IMAGEGEN_EXECUTOR_RELIABILITY_R2_REVIEW.md`
   - `comic-narrative/reviews/imagegen-speed/IMAGEGEN_SPEED_BATCH_R1_REVIEW.md`
   后续执行应从 canonical repo fetch，不再依赖本机旧 worktree 是否带有副本。

2. **R2 原始 JavaScript imagegen 返回对象缺失是真实 blocker。**
   R2 没有保存 adapter 变形前的 raw result，也没有等价结构化 capture，因此不能诚实构造“与真实返回完全同形”的 adapter fixture。

下一 Gate 改为：
**`IMAGEGEN_EXECUTOR_RESULT_CAPTURE_R2R1A`**

R2R1A 只做一次 instrumentation：
`在 JS adapter 之前加 raw capture → 仅调用 1 次 imagegen → 立即保存真实返回对象 / 结构 → 标出 direct asset/source 字段 → STOP → Reviewer`。

该 instrumentation 图片不算 R2R1 canary attempt，不做内容 QA / retry。

只有 R2R1A 经 Reviewer 接受后，才继续：
`真实 shape → 修 JS adapter → 同 runtime no-image preflight → C-VB01/C-VB02 concurrency=2 两张 canary`。

仍禁止：
- concurrency=3；
- H019 完整重跑；
- 修改正式 Part 3 / Part 4 / Part 4.5 / SKILL。

当前状态：
`R2R1_RETURN_IMPLEMENTATION_DRIFT / NEXT_RAW_RESULT_CAPTURE_R2R1A / CANARY_NOT_AUTHORIZED_YET`。



### IMAGEGEN_EXECUTOR_RESULT_CAPTURE_R2R1A — Reviewer PASS（2026-10-03）

Reviewer 按 `vps-project-governance/VNEXT.md` v0.2.6 完成 fresh readback。

证据包：
- `_imagegen-result-capture-r2r1a.zip`
- SHA-256：`483c45c8284bb883cd86abc66b98b2a1f21da0facf68efd1e6f98afb7db3f7a7`

正式 Reviewer verdict：**`PASS`**。

已直接核验：
- raw JavaScript result 顶层仅有 `image_url`、`output_hint`；
- `image_url` 为 PNG data URI；
- 解码后 923,749 bytes，PNG signature 有效；
- payload SHA-256：`bf622d490194e90f4587b4d90869e6f5d4c792d6b52f7e6e2471cfcf44f3ff5d`；
- `output_hint` 仅作为 opaque metadata，不作为 machine path contract；
- legacy adapter 只保留 `structuredContent` / text `content`，而真实 raw object 不含这两个字段，因此会丢失真正的图片 payload。

同一次调用内未继续执行 legacy projection 的限制已披露；Reviewer 接受，因为本 Gate 只要求获得可复核的 pre-adapter raw shape。legacy projection 后续 replay 是确定性验证，不影响 raw shape 结论。

证据质量 NOTE：
- R2R1A 两份 Markdown 中有未展开的 `$rawPath/$rawHash/$rawUtc` 与少量控制字符；
- 不阻塞本 Gate，因为 Reviewer 已从真实文件重新计算关键 hash；
- 后续不得把这些占位字段继续当 canonical evidence。

下一 Gate：
**`IMAGEGEN_EXECUTOR_INTEGRATION_R2R1B`**

最大终点：
`真实 raw fixture → 修 live JS adapter → 修统一 JSONL append → 同 runtime 无生图 preflight → C-VB01/C-VB02 attempt1 concurrency=2 → 2/2 自动保存/hash/QA → fresh readback → STOP → Reviewer`。

关键执行合同：
- 直接使用 `image_url` data URI 解码并保存；
- 不解析 `output_hint` 或其他自然语言文本寻找路径；
- 所有 event writer 走同一 append API，sequence allocate + append + flush 同锁；
- 本轮两张 canary 不做 retry；
- content QA PASS/FAIL 不影响 integration Gate，只要 plumbing 完整；
- 不启动另外 4 Beat；
- 不测 concurrency=3；
- 不启动 H019 完整重跑；
- 不修改正式 Part 2 / Part 3 / Part 4 / Part 4.5 / SKILL。

只有 Executor 返回 `PASS_CANDIDATE_EXECUTOR_INTEGRATION_R2R1B` 且 Reviewer fresh readback 正式 PASS 后，才允许恢复完整 6 Beat R2 复测。

当前状态：
`R2R1A_PASS / NEXT_R2R1B_INTEGRATION_CANARY / CONCURRENCY_2_ONLY / FULL_6_BEAT_RETEST_NOT_AUTHORIZED`。



### IMAGEGEN_EXECUTOR_INTEGRATION_R2R1B — Reviewer RETURN（2026-10-03）

Reviewer 按 `vps-project-governance/VNEXT.md` v0.2.6 完成 fresh readback。

证据包：
- `_imagegen-executor-integration-r2r1b-evidence.zip`
- SHA-256：`f463c97d2e6123f38c6dbbabde87076adad36946dd121aef4442c3dcd118027d`

正式 verdict：**`RETURN_TEST_FAILURE`**。

已核验：
- Preflight 在生图前全部 PASS；
- full-size R2R1A fixture 可由正式 adapter 正确解码 / 保存，hash 匹配；
- logger 32-process stress PASS，R2R1B 正式事件日志 16 条，sequence 1–16 连续唯一；
- 实际只调用 C-VB01 / C-VB02 attempt1，两张均在 concurrency=2 下返回；
- C-VB01 T2→T4 69.886s；C-VB02 136.175s；
- 但两份 full-size raw result 经 live terminal/input bridge 传入 adapter receiver 时均未完成；
- 0 canary PNG、0 destination hash、0 QA、0 retry；
- 没有人工缓存恢复，没有再次调用 imagegen。

当前故障域已收敛为：
**大尺寸 raw imagegen result 从 tool/orchestration return 到本地 JS adapter receiver 的传输边界。**

由于自动落盘链已经多轮出现相近失败，按 Governance §6 不再直接继续真实生图重试，下一 Gate 改为纯本地 bounded diagnostic：

**`IMAGEGEN_LARGE_PAYLOAD_TRANSPORT_DIAGNOSTIC_R2R1C`**

R2R1C：
- 0 次 imagegen；
- 用已保存的 1,232,262-byte R2R1A raw fixture；
- 先通过与 R2R1B live 相同 transport 做单路 full-size replay；
- 单路通过后再做两路 concurrent full-size replay；
- 记录 sender / receiver byte counts、完成状态、耗时与保存 hash；
- 若复现失败，只允许一个基于证据的 transport repair，再各复测一次；
- STOP_AT_REVIEWER。

仍禁止：
- 6 Beat；
- concurrency=3；
- H019 完整重跑；
- 修改正式 Part 2 / Part 3 / Part 4 / Part 4.5 / SKILL。

当前状态：
`R2R1B_RETURN_TEST_FAILURE / NEXT_R2R1C_TRANSPORT_DIAGNOSTIC / IMAGEGEN_CALLS_NEXT_GATE_0 / FULL_RETEST_NOT_AUTHORIZED`。



### IMAGEGEN_LARGE_PAYLOAD_TRANSPORT_DIAGNOSTIC_R2R1C — Reviewer RETURN（2026-10-03）

Reviewer 按 `vps-project-governance/VNEXT.md` v0.2.6 完成 fresh readback。

证据包：
- `_imagegen-large-payload-transport-diagnostic-r2r1c.zip`
- Reviewer-computed SHA-256：`e01619fbaa14ef83fc4512ee28d40e03aaf97faa7d12a8f627510168237fb542`

正式 verdict：**`RETURN_TEST_FAILURE`**。

直接核验：
- `IMAGEGEN_CALLS=0`；
- RUN_EVENTS 66 条、sequence 1–66 连续可解析；
- baseline Test A 的原始 one-shot TTY/write_stdin transport 实际已成功把完整 fixture 交给 adapter，并保存出正确 PNG：
  - 923,749 bytes
  - SHA-256 `bf622d490194e90f4587b4d90869e6f5d4c792d6b52f7e6e2471cfcf44f3ff5d`；
- 但 receiver 没有 durable completion report，session exit code=1；
- 唯一一次 chunk+ACK repair 在 180 秒内只确认 851,968 / 1,232,262 bytes，未进入 adapter save；
- Test B 按 Gate 正确未启动。

Reviewer 修正当前故障定位：
**不能再概括为“大 payload 无法通过 transport”。**
baseline 已证明 one-shot full-size payload 能到达并成功保存图片。当前最窄未解故障是：
**receiver 在成功保存之后的 final event/report/stdout/cleanup/clean-exit 链。**

chunk+ACK 方案增加大量 round-trip 开销且失败，不作为下一默认方案。

下一 Gate：
**`IMAGEGEN_RECEIVER_COMPLETION_DIAGNOSTIC_R2R1D`**

R2R1D：
- `IMAGEGEN_CALLS=0`；
- 回到已证明能传完整 payload 的原始 one-shot transport；
- 在 adapter save 后的 completion path 增加独立 crash-safe phase trace；
- 精确定位 final append / report write / stdout / stdin cleanup / process exit 哪一步失败；
- 最多一次基于证据的 completion-path repair；
- 单路 clean PASS 后才运行两路 concurrent one-shot fixture；
- STOP_AT_REVIEWER。

仍禁止：
- 新 transport 架构；
- 真实生图；
- 6 Beat；
- concurrency=3；
- H019；
- 正式 Part 2/3/4/4.5/SKILL 修改。

当前状态：
`R2R1C_RETURN_TEST_FAILURE / NEXT_R2R1D_RECEIVER_COMPLETION_DIAGNOSTIC / IMAGEGEN_CALLS_NEXT_GATE_0 / FULL_RETEST_NOT_AUTHORIZED`。



### IMAGEGEN_RECEIVER_COMPLETION_DIAGNOSTIC_R2R1D — Reviewer PASS（2026-10-03）

Reviewer 按 `vps-project-governance/VNEXT.md` v0.2.6 完成 fresh readback。

证据包：
- `_imagegen-receiver-completion-diagnostic-r2r1d.zip`
- Reviewer-computed SHA-256：`06fd29dd27aff99eb65e71ac7d33ac12ccd382204c65ef7b2adf828cd6199438`

正式 verdict：**`PASS`**。

直接核验：
- `IMAGEGEN_CALLS=0`；
- 未做 completion-path repair；
- Test A 原 one-shot full-size path clean PASS：
  - 1,232,262 payload bytes；
  - PNG 923,749 bytes；
  - SHA-256 `bf622d490194e90f4587b4d90869e6f5d4c792d6b52f7e6e2471cfcf44f3ff5d`；
  - durable receiver report 存在；
  - exit code=0；
- Test B 仅在 Test A PASS 后启动，两路 concurrent one-shot 均完整接收、保存相同正确 hash、写 report、exit code=0；
- 三个有效 phase trace 均完整经过 PNG hash、final append、report、stdout、cleanup / exit；
- 无 uncaught exception / unhandled rejection / process error；
- RUN_EVENTS 28 条，sequence 1–28 连续；
- 三张实际 PNG fresh hash 均匹配预期。

一次 pre-send abort 已单独保留：
- receiver 实际收到 0 bytes；
- sender orchestration 在真实发送前 ReferenceError；
- 之后对已关闭 session 的写入无 delivery confirmation；
- append-only correction 已明确将旧 `TEST_A_SENDER_SUBMITTED` 记录从 transfer accounting 中作废；
- Reviewer 接受其为 pre-test orchestration abort，不算 Test A、不算隐藏重试。

R2R1C 历史 exit-1 / missing-report 症状本轮未复现，因此**具体历史根因仍为 UNVERIFIED**，不得事后猜测归因。

非阻塞观察：
receiver 内部存在 nominal 90-second deadline，但三个有效 full-size run 实际约 123–130 秒且未触发该 timer。本 Gate 不改 timer；下一真实 canary 增加外部 orchestration watchdog，避免把该内部 timer 当成可靠 wall-clock guard。

下一 Gate：
**`IMAGEGEN_EXECUTOR_INTEGRATION_CANARY_R2R1E`**

最大终点：
`no-image preflight → C-VB01/C-VB02 attempt1 only → concurrency=2 → raw return → one-shot receiver → auto save/hash → QA → fresh readback → STOP → Reviewer`。

R2R1E：
- 只允许 2 次 imagegen；
- 不做 attempt2；
- content QA PASS/FAIL 都不触发 retry；
- receiver/session 失败也不得重放 imagegen；
- 不启动另外 4 Beat；
- 不测 concurrency=3；
- 不启动 H019；
- 不修改正式 Part 2/3/4/4.5/SKILL。

当前状态：
`R2R1D_PASS / NEXT_R2R1E_LIVE_INTEGRATION_CANARY / TWO_IMAGEGEN_CALLS_MAX / FULL_6_BEAT_RETEST_NOT_AUTHORIZED`。
