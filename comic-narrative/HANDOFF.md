# 漫画叙事 — 唯一交接文档

## 文档职责

- `part0/`–`part3/`：只保存当前有效规则、输入输出、判断标准和正式 Case 库。
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
