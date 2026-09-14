<div align="center">

# 🎞️ Aroll Video Maker

### 语义驱动的横屏插画叙事视频 Skill

**固定人物 · 20 种画风可选 · 一句话可多图 · 多句话可共用一图 · 单彩色母图 + Remotion/CSS**

[简体中文](./README.md) · [English](./README_EN.md) · [完整 Skill 规则](./SKILL.md)

![Status](https://img.shields.io/badge/status-v0.1.0%20Calibrating-orange?style=flat-square)
![Format](https://img.shields.io/badge/output-16%3A9%20%7C%201920x1080-blue?style=flat-square)
![Video Model](https://img.shields.io/badge/video%20model-not%20required-success?style=flat-square)

</div>

---

## 它解决什么问题？

很多 AI 插画视频工作流的默认逻辑是：

```text
一句话
↓
一张图
↓
固定 reveal
↓
下一句话
```

这样很容易变成“动态 PPT / 自动配图”。

Aroll Video Maker 改成：

```text
口播 + 配音
↓
理解语义
↓
决定什么时候真的需要换画
↓
Visual Beat
↓
Shot Planner
↓
复用现有母图 OR 生成 1 张新彩色母图
↓
Remotion / CSS 做镜头变化
```

因此它允许：

- **一句话对应多张图**；
- **一张图跨多句话**；
- **一张图做多个镜头**；
- **Callback / Reuse**；
- **不使用视频模型**也能做出镜头节奏。

---

## 默认成片规格

```text
16:9
1920×1080
横屏
默认无字幕
不用视频模型
每个真正需要的新画面只生成 1 张彩色母图
```

黑白、detail、中间帧默认都不单独用 AI 生成。

如果需要黑白→彩色、遮罩、推近、横移、瞬间裁切等效果，由 Remotion/CSS 在彩色母图基础上完成。

---

## 三个核心能力

### 1. Character Lock

固定同一人物的：

- 脸型 / 五官
- 发型
- 年龄感
- 身材比例
- 服装
- 主色

每张人物新图都携带同一 Character Reference，并可追加上一张通过画面作为 continuity reference。

### 2. Style Lock

运行时读取 `gnipbao/story-to-handdrawn-video` 当前画风库，让用户从现有 20 种风格中选择一种。

同一条视频内保持风格稳定，不把风格库历史快照硬编码进本 Skill。

### 3. Semantic Director

不按标点机械换画，而是看：

- 人物 / 动作
- 情绪
- 时间 / 地点
- 对比 / 转折
- 笑点
- 视觉隐喻
- 证据 / 特写需求

只有新的视觉状态无法由现有母图表达时，才生成新图。

---

## 最终流程

```text
口播稿 + 成品配音 + 人物参考图
        ↓
选择当前 20 种画风之一
        ↓
Character Lock + Style Lock
        ↓
读取真实音频时间轴
        ↓
Semantic Director
        ↓
Visual Beat Planner
        ↓
Shot Planner
        ↓
Reuse first
        ↓
必要时每 Beat 生成 1 张彩色母图
        ↓
Consistency Gate
        ↓
Remotion / CSS
        ↓
可选字幕 / SFX / BGM
        ↓
1920×1080 MP4
```

---

## 关键规则

### Narration ≠ Visual Beat ≠ Shot ≠ Image

例如：

```text
“昨天它还正常，今天突然像变笨了一样。”
```

可以拆成：

```text
V01 昨天正常
V02 今天异常
V03 人物困惑
V04 夸张的异常隐喻
```

也可以反过来让连续几句话共享一个画面。

### 新 Shot 不等于新图

一张彩色母图可以继续做：

- 中景
- 人物特写
- 电脑特写
- Punch-in
- Pan
- Crop
- Hold
- Callback

不为这些镜头重新生成图片。

### 左→右 / 黑白→彩色只是可选效果

原始手绘项目的左→右 reveal、黑白→彩色不再是强制动画。

Aroll 默认优先：

```text
Hard Cut
Hold
Crop / Punch-in
Pan
Mask
Callback
```

需要时才使用 reveal。

---

## 上游

- `gnipbao/story-to-handdrawn-video`：画风库、角色一致性、图片生成与 Remotion 基础
- `luvisir/story-to-handdrawn-video`：音频测长、同步、DSP / FFmpeg 经验
- `Vincentwei1021/video-shotcraft`：可选 Shot / Motion Recipe 参考

本 Skill 不修改这些上游仓库。

---

## 最快调用方式

```text
按 Aroll Video Maker 做这条视频。
这是口播稿、成品配音和人物参考图。
让我从当前 20 种画风里选一种。
默认 16:9 横屏、无字幕，不用视频模型。
不要一句话一张图；按语义决定换画，一句话可多图，多句话也可共用一图。
每个真正需要的新画面只生成一张彩色母图，其余镜头变化都用 Remotion/CSS。
```

---

## 当前状态

**v0.1.0 — Calibrating**

第一版先验证四件事：

1. 人物一致性是否足够稳定；
2. Semantic Director 是否能避免“一句话一图”；
3. 一张母图多 Shot 是否能保持视频感；
4. 16:9 无字幕成片是否比原始 3:4 reveal 工作流更符合叙事目标。

---

<div align="center">

### Meaning first. Frames second.

**先理解语义，再决定画面。**

</div>
