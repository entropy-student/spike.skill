---
name: video-director-orchestrator
description: 上层混合视频导演 Skill。运行时读取最新版 Vincentwei1021/video-talkcraft 与 vibe-motion/remotion-code-motion-explainer，不复制、不修改两者；用 TalkCraft 负责口播叙事、时间锚、真实素材与 SHOTBOOK，用 Code Motion Explainer 负责适合抽象表达的流程、因果、UI、系统与机制动效。新增 DIRECTOR_PLAN 作为两者之间的导演决策层：先判定 A-roll/B-roll/Evidence/Screen/Code Motion/Typography 等画面角色，再做模板匹配；锁定原生风格家族、模板单片一次、跨镜头 handoff、素材真实性与统一 QC。Code Motion 现成模板保持原版视觉，不做重新蒙皮。
---

# Video Director Orchestrator（混合视频导演编排器）

## 目标

这个 Skill 解决的不是“再做一个模板库”，而是解决：

> **如何让 TalkCraft 与 Remotion Code Motion Explainer 的优势组合成一支连续、统一、有真实素材、有抽象动效、像同一位导演完成的视频。**

它是**上层导演 / 路由 / 质量控制层**，不是两个上游 Skill 的 fork、复制版或替代品。

---

## 上游依赖（运行时读取，禁止内嵌快照）

### A. Narrative / spoken-video authority

- Repository: `https://github.com/Vincentwei1021/video-talkcraft`
- Authority: 当前 `SKILL.md` 及当前任务要求读取的 `references/`、`template/`、`scripts/`
- 主要负责：口播输入、配音时间锚、素材规则、SHOTBOOK、TalkCraft Recipe、全片节奏、渲染与其自身验收。

### B. Code-motion authority

- Repository: `https://github.com/vibe-motion/remotion-code-motion-explainer`
- Authority: 当前 `SKILL.md`、相关 `references/`、`assets/shot-library/shot-library.json` 与实际模板源码
- 主要负责：抽象机制、因果、流程、UI、系统、图表、可编辑 Remotion 动效、参考视频重建、连续空间与 motion QC。

### C. 可选视觉设计来源

- Repository: `https://github.com/VoltAgent/awesome-design-md`
- 仅在用户明确选择时作为 TalkCraft 全片视觉语言的参考来源；不用于重绘 Code Motion 现成模板。

### 更新兼容规则

每次调用本 Skill 时：

1. 重新读取当前两个上游 Skill，禁止依赖本文件对其历史流程的摘要。
2. 不复制上游 Recipe、Shot Library、TSX、references 或 DESIGN.md 到本 Skill 作为固定规则源。
3. 上游若更新步骤名或编号，以语义职责为准。
4. 本 Skill 不降低上游硬 Gate。发生冲突时，采用**更严格且可兼容**的路径。
5. 若 TalkCraft 当前要求真实 B-roll / 图片比例、素材 preflight、时间戳、SHOTBOOK 或其他硬规则，Code Motion 不得用来绕过这些规则。
6. 若 Code Motion 当前要求事实准确、授权素材、deterministic render、continuity/QC 等硬规则，TalkCraft 也不得绕过。

---

# 权责矩阵

| 问题 | Authority |
|---|---|
| 口播稿、配音、字幕 / 时间锚 | TalkCraft 当前规则 |
| 真实素材、B-roll、截图、证据与素材 preflight | TalkCraft 当前规则 + 用户授权边界 |
| SHOTBOOK 与口播镜头节奏 | TalkCraft 当前规则 |
| 抽象概念、流程、因果、系统、UI 的 Code Motion 设计 | Code Motion Explainer 当前规则 |
| Code Motion 模板搜索 / Reuse / Adapt / New | Code Motion Explainer 当前规则 + 本 Skill 模板限制 |
| A-roll / B-roll / Evidence / Code Motion 的镜头角色路由 | **本 Skill** |
| Native Style Family 选择 | **本 Skill** |
| 跨镜头 persistent object / handoff | **本 Skill**，实现遵循各上游能力边界 |
| 一条视频模板去重 | **本 Skill 硬规则** |
| 混合成片统一 QC | **本 Skill** + 两个上游现行 QC |

---

# 三条核心原则

## P1 — Visual Role before Template

禁止“看到一句话 → 搜一个好看的模板”。

每个语义 Beat 必须先回答：

> **观众此刻真正需要看见什么？**

然后先确定画面角色：

- `A_ROLL`：人物观点、信任、情绪、人格主体。
- `B_ROLL`：真实产品、真实场景、真实行为、真实过程。
- `EVIDENCE`：原始页面、报告、截图、数据来源、引用材料。
- `SCREEN_UI`：真实软件 / 网站 / App 操作或界面。
- `CODE_MOTION`：抽象机制、流程、因果、关系、系统、结构、无法直接拍摄的状态变化。
- `TYPOGRAPHY`：Hook、章节、极短强结论、关键词强调。
- `TRANSITION`：只负责承接，不承担新的主要信息。

**只有在 `visual_role` 已确定后，才允许搜 Recipe / Shot Library / 模板。**

Gate：任何 Code Motion 模板都必须能解释“为什么这里应该是 CODE_MOTION，而不是因为模板好看”。

---

## P2 — Evidence before abstraction

Code Motion 是解释工具，不是假证据生成器。

- 真实产品 / 场景 / 行为存在可用真实素材时，优先走 TalkCraft 的真实素材规则。
- 事实、产品行为、用户结果、数据、新闻 / 页面证据不得用代码 mock 冒充真实证据。
- 如果需要证据但素材暂缺：标记 `asset_gap`，按 TalkCraft 当前素材采集 / 降级规则处理。
- 只有当信息本质上是抽象关系、机制、系统或结构时，才把 Code Motion 作为主要表达。
- Code Motion 可以**解释证据之后的关系**，但不能取代证据本身。

---

## P3 — One film, one director

目标不是让每个镜头单独 90 分，而是让全片像同一个视觉世界。

必须维护：

- `style_family`
- `persistent_object_registry`
- `template_registry`
- `handoff_map`
- `asset_map`

这些统一写进 `DIRECTOR_PLAN.json`。

---

# Code Motion 模板硬规则

## R1 — 原生风格锁定（Native Style Lock）

对 `remotion-code-motion-explainer` 已存在的模板：

1. **禁止修改上游模板源码。**
2. **禁止把模板重新蒙皮成另一套视觉风格。**
3. 允许修改语义参数：标题、标签、步骤、文案、数值、经授权的素材输入等。
4. 若模板必须传 `accent` / color 等样式参数，优先使用当前上游 `Root.tsx` 或官方示例中该 Composition 的 canonical/default 值；不得为了“统一”随手换色。
5. 如果语义需要的视觉风格与模板原生风格不兼容，**不要改模板风格**：换同家族模板、改用 TalkCraft Recipe / B-roll / Evidence，或新建一个属于本片视觉系统的组件。

注意：TalkCraft 自己的 Recipe 若当前上游定义为“中性卡、进片必须蒙皮”，继续严格按 TalkCraft 规则执行；Native Style Lock 主要约束 Code Motion 的现成成品模板。

## R2 — 一条视频一个模板最多用一次

同一个 Code Motion Component / Template ID 在一条最终视频中最多出现 **1 个连续实例**。

- 一个实例可以连续覆盖多个相邻语义 Beat。
- 禁止在后面再次实例化同一个模板，只换文案继续用。
- `template_registry` 必须记录使用次数。
- 使用次数 > 1：`TEMPLATE_UNIQUENESS_GATE = FAIL`。

## R3 — Native Style Family Lock

Code Motion 模板优先从**同一个原生家族**选择，例如：

- `VibeCutReferenceShots`
- `AeProjectReferenceShots`
- `UiAeReferenceShots`
- `OfficialTemplateShots`
- 其他上游当前实际存在的 family

默认：**一条视频一个 primary family。**

如确实无法满足语义，可在 Director Pack 中预先声明最多 1 个 secondary family，并说明为什么；未在用户主 Gate 中获准前不得跨 family 实现。v0.1 默认不允许第三个 family。

### 风格桥接原则

不要把 Code Motion 模板改成 TalkCraft 风格；反过来：

> **在不违反 TalkCraft 当前视觉规则的前提下，让 TalkCraft 的 theme / 素材气质 / Recipe 蒙皮尽量围绕选定的 Code Motion Native Style Family 做兼容。**

也就是说，统一来自**选型与外围设计**，不是破坏现成模板原版风格。

---

# Continuity / Handoff 规则

## Persistent Object

每个主要段落至少识别一个可延续的对象，例如：

- 一个关键词
- 一个问题节点
- 一张真实截图
- 一个数字
- 一条连线
- 一个产品卡
- 一个流程节点
- 同一人物 / 同一物体

## 相邻镜头承接

除明确的 `chapter_reset` 外，相邻主要镜头必须至少存在一种可解释的 handoff：

1. **Direct object handoff**：同一对象直接变形 / 移位 / 进入下一镜。
2. **Semantic object handoff**：上一镜结果成为下一镜输入，例如“问题”→“三个解决路径”。
3. **Spatial handoff**：相同位置 / 轴线 / 运动方向承接。
4. **Media handoff**：同一真实素材从全景 → 局部 → 证据细节。
5. **Audio / label handoff**：同一关键词或声音事件桥接，但只能作为弱承接，不能掩盖完全无关的视觉重置。

如果上游现成模板无法实现直接 object handoff，不允许为了连续性修改模板内部；改用语义 / 媒体 / 空间承接，或选择更适合的模板。

Gate：连续非章节重置镜头若 `handoff = none`，必须重新规划。

---

# 执行流程

下面是**导演层逻辑**，不是替代两个上游的步骤编号。

## S0 — Load current upstreams

完整读取：

- 当前 `video-talkcraft/SKILL.md` 与本任务要求的 references；
- 当前 `remotion-code-motion-explainer/SKILL.md` 与本任务要求的 references；
- 如需要 Code Motion，读取当前 `assets/shot-library/shot-library.json`，并按语义检索候选模板；
- 如用户指定 awesome-design-md，再读取对应当前 DESIGN.md。

输出内部记录：上游 commit / version / read-at timestamp（若工具可获得）。

## S1 — Production Contract

由当前上游规则确定必需输入。

对口播视频，通常包括当前 TalkCraft 要求的脚本、成品配音、画幅、视觉语言等；若上游未来变化，以最新版为准。

同时确认：

- narration / subtitle authority
- aspect ratio / FPS / duration
- user-provided assets
- brand / style constraints
- factual red lines

不要为已经提供的信息重复询问。

## S2 — Run TalkCraft through material planning + SHOTBOOK

严格执行当前 TalkCraft 到实现前阶段。

在其素材与 SHOTBOOK 过程中，为每个镜头额外标注：

- `visual_role`
- `evidence_requirement`
- `asset_status`
- `code_motion_eligible: yes/no`

禁止因为 Code Motion 存在而降低 TalkCraft 的真实素材 / B-roll / 图片要求。

## S3 — Build DIRECTOR_PLAN.json

SHOTBOOK 完整后、正式 Recipe / Remotion 实现前，建立 `DIRECTOR_PLAN.json`。

至少包含：

- production contract summary
- style strategy
- Native Style Family
- beat / shot visual roles
- asset map / asset gaps
- persistent object registry
- handoff map
- Code Motion template candidates
- template registry
- planned chapter resets
- QC targets

模板参考：`templates/DIRECTOR_PLAN.example.json`。

## S4 — Code Motion semantic matching

只对 `CODE_MOTION` 或明确适合 Code Motion 的镜头：

1. 读取当前 `shot-library.json`。
2. 先在 primary native family 中按语义 job 搜索。
3. `Reuse > Adapt semantic props > New`。
4. 不以视觉炫酷程度作为首要选择依据。
5. 检查模板是否已在 `template_registry` 使用。
6. 检查原生风格是否与当前 Style Strategy 兼容。
7. 记录 `why_this_template` 与 `why_not_media`。

## GATE U1 — Director Pack 用户主确认

这是本 Skill 默认的**唯一新增主确认节点**，应尽量与 TalkCraft 当前已有的相邻 SHOTBOOK / 素材确认合并，不能为了流程感重复打断用户。

一次性向用户展示：

- SHOTBOOK 摘要
- A-roll / B-roll / Evidence / Screen / Code Motion 分布
- 需要用户自有素材时的缺口；如不需要用户提供，明确系统将按上游规则自行采集 / 处理
- primary / secondary Native Style Family
- Code Motion 模板候选与“每模板一次”检查
- persistent objects + 关键 handoff
- 需要跨 family、真实素材缺失、事实不确定等风险

用户可：

- `PASS`：继续到底；
- `PASS + 上传素材`：替换对应素材位并重新跑受影响 preflight；
- `RETURN`：只修改受影响计划并重新出 Director Pack。

除上游本身强制的额外用户决策外，不再人为增加确认点。

## S5 — Implementation

### TalkCraft shots

严格按当前 TalkCraft Recipe、蒙皮、运动命门、素材与实现规则执行。

### Code Motion shots

严格按当前 Code Motion Skill：

- copy reusable source into target project rather than editing installed Skill;
- deterministic Remotion;
- semantic props only for existing templates;
- Native Style Lock；
- template one-use；
- maintain persistent objects / continuity where component contract permits；
- reference reconstruction 任务按当前 reference-reconstruction 规则执行。

### Mixed sequencing

混合成片时，外层 sequencing 可以控制镜头时长、进入点、freeze / hold 与音频对齐；不得通过额外 wrapper Skin 改写 Code Motion 模板的原版视觉。

## S6 — Unified QC

先执行两个上游当前各自的 QC，再执行本 Skill 的统一导演 QC。

### Hard Gates

以下任一 FAIL，不能 Final：

- TalkCraft 当前 required material / timing / SHOTBOOK / preflight 未通过；
- 存在虚构证据、产品行为、数据或无授权素材；
- Code Motion 上游模板源码被修改；
- 同一 Code Motion 模板出现多个非连续实例；
- 未批准的跨 Native Style Family；
- 非 chapter reset 的关键相邻镜头完全无 handoff；
- 字幕 / narration authority 与可见事件明显错位；
- final technical QC 未通过。

### Director Score（硬 Gate 通过后才评分）

满分 100：

- Semantic Fit — 20
- Visual Continuity — 20
- Style Coherence — 15
- Asset / Evidence Appropriateness — 15
- Shot Variety — 10
- Timing / VO Sync — 10
- Template Integrity — 5
- Technical / Final Hold QC — 5

评分必须附证据，不得只给主观数字。

- `<75`：FAIL，不能交 Final
- `75–84`：Preview / Calibrating，不封板
- `85–92`：PASS
- `93+`：Exceptional candidate

自评分不能覆盖 Hard Gate。

## S7 — Delivery

交付物至少遵循两个上游当前交付要求，并额外包含：

- `DIRECTOR_PLAN.json`
- template registry
- style family record
- asset gap / source record
- unified QC / Director Score

---

# 素材不足时的统一 Fallback

不得简单执行“没素材 → 全部 Code Motion”。

```text
需要真实人物观点 / 信任
→ A-roll（有素材）
→ 无人物素材时按 TalkCraft 当前规则处理，不伪造真人证据

需要真实产品 / 场景 / 行为
→ B-roll / 图片 / Screen / Evidence
→ 缺素材：按 TalkCraft 当前采集 / 降级 / 未完成规则

需要事实 / 数据证明
→ 原始证据优先
→ 不允许 Code Motion mock 冒充证据

需要解释抽象关系 / 流程 / 机制
→ Code Motion

需要一句强结论 / Hook
→ Typography / TalkCraft Recipe / 合适的 Code Motion（通过模板规则后）
```

---

# 与 video-talkcraft-design-orchestrator 的关系

对于本 Skill 的混合工作流，**不要再叠加调用 `video-talkcraft-design-orchestrator`**，否则会产生重复的入口 / SHOTBOOK Gate。

本 Skill 已吸收其必要的“输入 / 风格 / SHOTBOOK 主确认”编排思想，但执行时仍直接读取最新版 `video-talkcraft` 与 `remotion-code-motion-explainer`。

`video-talkcraft-design-orchestrator` 继续适用于“只使用 TalkCraft、不需要 Code Motion 混合导演层”的稳定工作流。

---

# 禁止事项

- 禁止复制两套上游流程并声称本 Skill 是固定等价实现。
- 禁止先找模板再解释语义。
- 禁止用 Code Motion 绕过 TalkCraft 的真实素材硬规则。
- 禁止用代码 mock 冒充真实证据。
- 禁止修改 Code Motion 上游模板源码。
- 禁止给 Code Motion 现成模板重新蒙皮。
- 禁止同一 Code Motion 模板在一条视频里重复实例化。
- 禁止为了统一视觉而随手修改模板 accent / colors；必须采用 canonical/default 或选择兼容模板。
- 禁止默认混用多个 Native Style Family。
- 禁止每个镜头都全屏重置成一个新 Demo。
- 禁止技术 QC 全绿就自动认为导演质量 PASS。

---

# 用户看到的最简流程

```text
脚本 / SRT / 配音 / 可用素材
        ↓
读取最新版 TalkCraft + Code Motion
        ↓
TalkCraft：时间锚 + 素材规划 + SHOTBOOK
        ↓
导演层：Visual Role + Asset Map + Style Family
        ↓
导演层：Persistent Object + Handoff + Template Candidates
        ↓
DIRECTOR PACK
        ↓
【用户一次确认】
        ↓
TalkCraft 镜头 → TalkCraft 执行
Code Motion 镜头 → Code Motion 执行
        ↓
两个上游 QC + Unified Director QC
        ↓
Score ≥ 85 且 Hard Gates 全 PASS
        ↓
Final
```

---

## v0.1 校准重点

这是实验版。优先用真实项目验证以下假设：

1. Visual Role before Template 是否显著降低“模板合集感”。
2. Native Style Family Lock 是否能在不改模板原版风格的前提下提高全片统一度。
3. Template once-per-video 是否提高镜头多样性而不损害叙事清晰度。
4. Persistent Object / Handoff 是否是从“70 分单镜头”提升到“85 分整片”的关键变量。
5. 单一 Director Pack Gate 是否在不牺牲质量的前提下减少用户交互。

出现真实反例后再升级规则，不提前把假设写成永久真理。
