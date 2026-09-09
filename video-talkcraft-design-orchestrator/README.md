<div align="center">

# 🎬 TalkCraft Design Orchestrator（TalkCraft 视觉编排器）

### 为 video-talkcraft 增加可选设计风格与 SHOTBOOK 素材确认层

**不 fork、不复制、不改写 TalkCraft；只在原流程前后增加两个用户交互点。**

[简体中文](./README.md) · [English](./README_EN.md) · [完整 Skill 规则](./SKILL.md)

![Status](https://img.shields.io/badge/status-active-success?style=flat-square)
![Type](https://img.shields.io/badge/type-orchestrator-blueviolet?style=flat-square)
![Upstream](https://img.shields.io/badge/upstream-video--talkcraft-orange?style=flat-square)

</div>

---

## 它解决什么问题？

`video-talkcraft` 已经有完整的视频制作流程、SHOTBOOK、Recipe、Remotion、渲染与验收体系。

这个 Skill 不重新实现这些能力，而是解决两个实际使用问题：

1. **开工前先明确视觉风格**，而不是默认只能沿用 TalkCraft 自带风格。
2. **SHOTBOOK 完成后让用户确认素材镜头**，有自有素材时可替换；没有就继续 TalkCraft 原流程。

---

## 一句话流程

```text
TalkCraft 要求的输入
        ↓
选择视觉风格
默认 / awesome-design-md / 用户自定义
        ↓
按最新 video-talkcraft 生成 SHOTBOOK
        ↓
用户确认分镜 + 可选补充素材
        ↓
未补素材 → 原 TalkCraft 流程继续
补了素材 → 替换并重新体检
        ↓
恢复最新 video-talkcraft 全部后续流程
        ↓
最终视频
```

---

## 两个新增交互点

### ① 开始前：选择视觉风格

用户从三类中选择：

- **TalkCraft 默认风格**：完全采用当前 `video-talkcraft` 的视觉语言规则。
- **awesome-design-md 风格**：从 `VoltAgent/awesome-design-md` 当前 DESIGN.md 库选择，例如 Apple、Runway、Nike、Stripe、Linear、Notion、Spotify、WIRED 等；实际可选项以调用时仓库现状为准。
- **用户自定义风格**：可上传 DESIGN.md、品牌规范、截图、参考图或文字风格要求。

选择外部风格时，只把它映射成 TalkCraft 允许修改的视觉皮肤；**Recipe 的核心动画逻辑仍由 TalkCraft 决定。**

### ② SHOTBOOK 后：确认分镜与素材

SHOTBOOK 完成后暂停一次，提醒用户检查涉及真实素材的镜头。

可能推荐补充：

- 人物 / 主播视频
- B-roll
- 产品图 / 人物图 / 事件图
- 网页 / UI / 软件截图
- Logo / 品牌资产
- 数据图、报告、文章、证据截图

用户**不需要必须上传**。

- 不上传：继续 `video-talkcraft` 原素材采集和制作流程。
- 上传：替换对应素材位，重新执行上游要求的素材体检 / preflight 后继续。

---

## 为什么做成 Orchestrator？

因为两个上游项目都可能持续更新：

- `Vincentwei1021/video-talkcraft`
- `VoltAgent/awesome-design-md`

如果把它们复制进本 Skill，很快就会产生版本漂移。

因此这里采用：

```text
本 Skill = 交互编排层
video-talkcraft = 唯一视频制作规则源
awesome-design-md = 可选视觉设计语言源
```

每次调用都应读取当前上游规则，而不是依赖这里保存的历史快照。

---

## 最快调用方式

```text
按 TalkCraft Design Orchestrator 制作这条视频。
先按当前 video-talkcraft 检查输入，然后让我选择视觉风格；
SHOTBOOK 完成后先给我确认，并提醒哪些镜头适合补充自有素材；
除这两个节点外，其余严格按当前 video-talkcraft 执行。
```

如果已经知道想要的风格：

```text
按 TalkCraft Design Orchestrator 制作，
视觉风格使用 awesome-design-md 里的 Runway 风格。
SHOTBOOK 做完后再让我确认素材镜头，其余严格按当前 video-talkcraft。
```

---

## 上游依赖

- **视频制作主 Skill**：`Vincentwei1021/video-talkcraft`
- **可选设计语言库**：`VoltAgent/awesome-design-md`

> 本目录不保存 Recipe、TSX、TalkCraft references 或 DESIGN.md 的固定副本。

---

## 边界

这个 Skill **不会**：

- 修改 `video-talkcraft`；
- 修改 `awesome-design-md`；
- 重新实现 TalkCraft Recipe；
- 跳过 SHOTBOOK、preflight、渲染或验收；
- 把“可上传素材”变成“必须上传素材”；
- 在两个新增交互点之外接管 TalkCraft 的后续制作规则。

---

<div align="center">

### Keep the pipeline. Upgrade the art direction.

**保留 TalkCraft 的制作系统，只增加更清晰的视觉选择与素材确认。**

</div>
