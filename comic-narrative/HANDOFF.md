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

## 当前停止点

`PART4_SOURCE_COLLECTION_REAUDIT_PASS_CANDIDATE / PART4_SAFE_SIMPLIFICATION_PASS1_CANDIDATE / BEHAVIOR_CHANGING_SIMPLIFICATION_PENDING`

## 安全边界

- 不修改原 `ai-story-showrunner`；
- 不修改原 `story-showrunner`；
- 不删除原始快照；
- `HANDOFF.md` 是唯一迁移 / 执行 / 决策交接入口。
