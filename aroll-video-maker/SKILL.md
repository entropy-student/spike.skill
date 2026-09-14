---
name: aroll-video-maker
description: 面向横屏插画叙事视频的语义导演 Skill。读取并复用 gnipbao/story-to-handdrawn-video 的 20 种画风与角色一致性机制，吸收 luvisir/story-to-handdrawn-video 的配音测长与音画同步思路，并参考 video-shotcraft 的镜头运动语法；彻底取消“一句话=一镜/一图”，改为配音主时间轴 + Semantic Director + Visual Beat + Shot Planner。默认 16:9、1920x1080、无字幕、不调用视频模型；每个真正需要新画面的 Visual Beat 最多生成 1 张彩色母图，其余镜头变化由 Remotion/CSS 完成。
---

# Aroll Video Maker

## 目标

把口播稿和成品配音转换成**人物稳定、画风稳定、语义驱动画面切换的 16:9 横屏插画叙事视频**。

核心不是“每句话配一张图”，而是：

```text
Narration / Voiceover
        ↓
Semantic Director
        ↓
Visual Beats
        ↓
Shot Planner
        ↓
Reuse existing color master OR generate one new color master
        ↓
Remotion / CSS motion
        ↓
Final 16:9 video
```

必须允许：

- 一句话对应多张图；
- 一张图跨越多句话；
- 一张彩色母图衍生多个 Shot；
- 已有画面 callback / reuse；
- 只有出现新的、无法由现有画面表达的视觉状态时才生成新图。

---

## 上游来源与边界

### A. 画风 / 图片 / 角色一致性基础

- Repository: `https://github.com/gnipbao/story-to-handdrawn-video`
- 使用：当前 20 种 style library、Character Reference / Character Lock、图片生成与 Remotion 工程经验。

### B. 配音 / 音画同步基础

- Repository: `https://github.com/luvisir/story-to-handdrawn-video`
- 使用：TTS/配音测长、音频处理、时间同步、最终 FFmpeg 合成经验。

### C. 镜头运动参考（非强依赖）

- Repository: `https://github.com/Vincentwei1021/video-shotcraft`
- 使用：Shot Recipe / 运镜语法参考。

### 运行时更新规则

每次正式执行本 Skill 时：

1. 读取当前可访问版本的 `gnipbao/story-to-handdrawn-video`，确认其 style library、角色一致性输入方式与当前渲染结构。
2. 如任务需要自动配音或精确音频后处理，再读取当前 `luvisir/story-to-handdrawn-video` 的相关流程。
3. 如需要更复杂的静态图运镜，再读取当前 `video-shotcraft` 的相关 recipe；不得为了“有动画”而机械套卡。
4. 不把上游的 `sentence = scene`、3:4、字幕层、黑白→彩色 reveal 等旧约束带入本 Skill；这些是被明确替换的行为。
5. 不修改上游仓库。需要执行时，在工作项目中复用 / 改造其能力。

---

# 默认输出契约

```yaml
aspect_ratio: 16:9
resolution: 1920x1080
video_model: false
subtitle: false
image_generation_unit: one color master per genuinely new visual beat
motion_engine: Remotion/CSS
voiceover_is_master_timeline: true
```

除非用户明确要求，否则：

- 不生成 3:4 / 9:16；
- 不加字幕；
- 不使用视频生成模型；
- 不额外 AI 生成黑白图、detail 图、中间帧；
- 不把左→右 reveal 或黑白→彩色当成默认效果。

---

# Step 0 — 一次性收集输入

正式开工前，只补齐当前缺失项，不重复索取已经提供的内容。

优先需要：

1. **口播稿**；
2. **与口播稿对应的成品配音**（wav/mp3 等）；
3. **人物参考图**；
4. **画风选择**：从 gnipbao 当前 style library 中选择一种；
5. 可选：是否加字幕（默认否）。

如果用户没有人物参考图但明确希望 AI 设计人物，则先根据描述生成一个 Character Reference；只有这个身份锚点通过后才开始批量生成正文画面。

如果用户尚未选择画风，读取当前上游 style library 后用简洁方式展示可选项，不凭历史记忆硬编码 20 种名称。

---

# Step 1 — Character Lock

建立唯一 `CHARACTER_REFERENCE`。

锁定至少：

- 脸型与核心五官；
- 发型 / 发色；
- 年龄感；
- 身材比例；
- 服装款式与主色；
- 角色特有标志；
- 不应变化的身份特征。

每个包含该角色的新彩色母图都必须携带同一 Character Reference。

连续场景可额外使用上一张已通过的彩色母图作为 continuity reference，但上一张画面不能替代 Character Reference。

目标是**显著降低漂移**，不是声称生成模型可以理论上 100% 零漂移。

---

# Step 2 — Style Lock

读取用户选择的当前上游 style profile，建立 `STYLE_LOCK`。

锁定：

- 线条语言；
- 上色方式；
- 材质；
- 色板倾向；
- 阴影方式；
- 背景复杂度；
- 完成度；
- 禁止项。

后续所有正文彩色母图必须使用同一个 `STYLE_LOCK + CHARACTER_REFERENCE`。

**画风可以换版本；同一条视频生产过程中不得无理由换画风。**

---

# Step 3 — Audio Master Timeline

配音是唯一主时间轴。

先获取真实音频时长并建立 Narration Timeline：

```text
N01  00:00.000–00:02.180  ...
N02  00:02.180–00:05.420  ...
N03  00:05.420–00:07.910  ...
```

不得先按 Scene 猜时长，再让配音适配 Scene。

如果需要字幕，字幕也绑定音频 timestamp，而不是根据 Scene 时长估算。

---

# Step 4 — Semantic Director（核心）

## 原则

**标点控制语言结构，语义变化控制画面。**

禁止：

```text
Sentence 01 → Scene 01 → Image 01
Sentence 02 → Scene 02 → Image 02
```

必须先理解整段在讲什么，再决定视觉节拍。

## 每个语义片段至少检查

- 主体 / 人物是否变化；
- 动作是否变化；
- 情绪是否变化；
- 时间是否跳转；
- 地点 / 环境是否变化；
- 是否出现因果、反转、对比；
- 是否出现笑点 / punchline；
- 是否适合视觉隐喻；
- 是否需要证据 / UI / 物体特写；
- 当前画面是否已经足以表达。

## 拆分规则

单句内出现以下情况时，允许拆成多个 Visual Beat：

- A→B 状态变化；
- 明确对比；
- 动作连续变化；
- 情绪反应；
- punchline；
- 视觉隐喻；
- 重要信息需要单独强调。

## 合并规则

相邻多句话若：

- 仍处于同一地点 / 同一人物状态；
- 只是补充同一观点；
- 不产生新的视觉信息；
- 通过 Hold / Crop / Punch-in 已足够表达；

则应合并到同一 Visual Beat 或复用同一彩色母图。

## 节奏规则

不要追求平均切镜。

- 很短的 Beat 只有在反应、笑点、连续切换等场景才合理；
- 长段解释可以 Hold；
- 长时间静止时先考虑同图裁切 / 推近 / callback，而不是机械生成新图；
- 只有真正出现新视觉状态时才新增 Visual Beat。

---

# Step 5 — Visual Beat Planner

建立与 Narration Timeline 解耦的 Visual Timeline。

必须支持 many-to-many：

```text
N01 → V01 + V02 + V03
N02 + N03 → V04
N04 → V05
```

每个 Visual Beat 至少包含：

- `beat_id`
- 对应 narration 时间范围
- `semantic_intent`
- `visual_concept`
- `character_state`
- `environment`
- `new_image_required: yes/no`
- `reuse_asset_id`（如有）
- 生成新图的必要性说明

正式格式参考 `templates/SHOTBOOK.md`。

---

# Step 6 — Shot Planner

Visual Beat 不是 Shot，Shot 也不是图片。

一个 Visual Beat 可以拆成多个 Shot，例如：

```text
V07：主角发现电脑回答异常

S07A：中景 Hold
S07B：同图裁人物表情
S07C：同图裁电脑区域
```

这三个 Shot 可以只用一张彩色母图。

允许的基础 Shot / Motion：

- hard cut
- hold
- crop / reframe
- punch-in / zoom
- pan
- opacity change
- mask reveal
- step / instant mask jump
- local emphasis
- callback
- locally-derived grayscale → color（可选）

左→右 reveal 和黑白→彩色只作为可选 Motion Recipe，绝不默认套在每个镜头上。

---

# Step 7 — Image Plan：先复用，再生成

对每个 Visual Beat 依次判断：

```text
现有已通过彩色母图能否清楚表达当前视觉语义？
│
├─ YES → REUSE / CROP / REFRAME / CALLBACK
│
└─ NO  → 允许生成 1 张新的彩色母图
```

硬规则：

1. **需要一个新 Shot ≠ 需要一张新图。**
2. **一个 genuinely new Visual Beat 最多生成 1 张彩色母图。**
3. 不为黑白、detail、推近、横移、局部特写额外调用图片模型。
4. 黑白效果如需要，从彩色母图本地派生。
5. 不调用视频模型来解决静态镜头问题。

---

# Step 8 — Color Master Generation

每张新彩色母图至少使用：

```text
STYLE_LOCK
+
CHARACTER_REFERENCE
+
当前 Visual Beat 的动作 / 情绪 / 环境 / 构图
+
16:9 composition rules
+
必要时上一张已通过画面作为 continuity reference
```

默认禁止：

- 画面内生成字幕；
- 无意义海报式大标题；
- 自动信息图排版；
- 未要求的文字；
- 未要求的额外人物；
- 与角色锁不一致的服装 / 五官 / 发型；
- 为了“丰富”擅自加入高信息噪声。

彩色母图应像**视频中的正常静止帧**，不是社交媒体封面。

---

# Step 9 — Consistency Gate

每张新母图进入素材池前必须检查：

### Character
- 人脸是否仍是同一人；
- 发型、年龄感、体型、服装是否漂移；
- 是否出现异常肢体 / 多余人物。

### Style
- 线条、材质、色板、阴影、背景细节是否偏离 STYLE_LOCK。

### Scene
- 动作 / 情绪 / 场景是否正确表达 Visual Beat；
- 是否有错误可读文字；
- 构图是否适合 16:9 与计划的后续裁切。

结果：

```text
PASS   → 加入正式素材池
RETURN → 只重做受影响母图
```

单张母图默认最多自动重试 2 次；仍不稳定时必须显式标记，不得静默接受严重漂移。

---

# Step 10 — SHOTBOOK Gate

在批量生成 / 正式 Remotion 实现前，输出一个紧凑 SHOTBOOK 供用户确认，至少展示：

- Narration 时间段；
- Visual Beat；
- 是否生成新图 / 复用哪张图；
- Shot 数量与关键构图；
- Motion Recipe；
- 预计新生成彩色母图总数。

如果用户已明确授权全自动推进，则无需为普通低风险细节反复询问；但若人物身份、画风、整体视觉方向发生变化，必须暂停确认。

---

# Step 11 — Remotion / CSS Motion

Remotion / CSS 负责“怎么演”，图片模型只负责“画什么”。

优先使用静态图可稳定完成的效果：

- 硬切；
- Hold；
- 连续 / 瞬间 crop；
- 连续 / 瞬间 zoom；
- pan；
- clip-path / mask；
- opacity；
- 局部强调；
- reuse / callback；
- step function 式瞬间变化。

允许遮罩在指定时间点瞬间跳变，例如：

```text
0.00–0.99s  reveal = 20%
1.00s       reveal = 60%
2.00s       reveal = 100%
```

无需视频模型。

---

# Step 12 — Subtitle（可选）

默认 `subtitle = false`。

用户开启字幕时：

1. 使用配音时间戳进行对齐；
2. 字幕进入 Remotion 独立文本层；
3. 不把字幕烘焙进 AI 图片；
4. 以音频 timestamp 为准，而不是“每 Scene 大约几秒”。

目标是接近帧级同步。

---

# Step 13 — Audio / Render

- Voiceover 为主；
- BGM 可选；
- SFX 可选；
- 最终使用 Remotion / FFmpeg 完成合成；
- 输出默认 `1920×1080 / 16:9 / MP4`。

渲染前检查：

- 总时长是否与配音一致；
- 是否出现无意空帧；
- 是否仍有 3:4 / 竖屏遗留布局；
- 是否意外出现字幕；
- 是否有错误文字；
- 是否有明显人物 / 画风漂移；
- 是否存在“每句话机械换图”的退化。

---

# 必须避免的退化

- `sentence = scene`
- `scene = image`
- `shot = new image`
- 每个画面固定左→右 reveal
- 每个画面固定黑白→彩色
- 每句话固定同一时长
- 为了避免静止而过度运镜
- 为了镜头变化重复生成几乎相同图片
- 用字幕承担本应由画面表达的主要语义
- 角色 / 画风在一条视频内持续漂移
- 把正常视频帧做成海报 / 信息图 / 小红书封面

---

# 交付物

至少保留：

```text
project/
├── input/
│   ├── script.*
│   ├── voiceover.*
│   └── character-reference.*
├── plan/
│   ├── narration-timeline.*
│   ├── visual-beats.*
│   └── shotbook.*
├── assets/
│   └── color-masters/
├── remotion/
└── out/
    └── final.mp4
```

不要只保留最终视频；Visual Beat、Shot Plan 和母图映射必须可追踪，便于后续修改单一镜头而不重做整片。

---

# 最简调用方式

```text
按 Aroll Video Maker 做这条视频。
这是口播稿、成品配音和人物参考图。
先让我从当前 20 种画风里选一种；默认 16:9 横屏、无字幕。
不要一句话配一张图，按语义决定画面切换；一句话可以多图，多句话也可以共用一图。
每个真正需要的新画面只生成一张彩色母图，其余镜头变化用 Remotion/CSS 完成。
```

# 一句话原则

> **先理解语义，再决定画面；先决定画面，再决定镜头；只有现有画面无法表达新的视觉状态时，才生成一张新的彩色母图。**
