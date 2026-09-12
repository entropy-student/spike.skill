<div align="center">

# 🎬 Video Director Orchestrator（混合视频导演编排器）

### 把 TalkCraft 的叙事 / 素材 / SHOTBOOK 与 Code Motion 的连续动效 / Remotion 模板真正接起来

**先决定“该看什么”，再决定“用什么模板”。**

[简体中文](./README.md) · [English](./README_EN.md) · [完整 Skill 规则](./SKILL.md)

![Status](https://img.shields.io/badge/status-v0.1.0%20Experimental-orange?style=flat-square)
![Type](https://img.shields.io/badge/type-director%20orchestrator-blueviolet?style=flat-square)
![Upstreams](https://img.shields.io/badge/upstreams-TalkCraft%20%2B%20Code%20Motion-blue?style=flat-square)

</div>

---

## 它解决什么问题？

单个 Remotion 镜头可以很好看，但一整支片子仍可能像“多个 Demo 拼起来”。

这个 Skill 专门解决中间那一层：

- 哪些内容应该用 A-roll / B-roll / Evidence / Screen；
- 哪些内容才应该进入 Code Motion；
- 如何保留真实素材与证据；
- 如何选择同一原生风格家族，而不是靠重绘模板强行统一；
- 如何让上一镜的对象 / 结论成为下一镜的输入；
- 如何防止一个模板换文案反复使用；
- 如何在技术 QC 之外，再检查“整片导演质量”。

---

## 两个上游怎么分工？

```text
TalkCraft
= Narrative Director
= 口播 / 时间锚 / 真实素材 / SHOTBOOK / 口播节奏

Code Motion Explainer
= Motion Director
= 抽象机制 / 流程 / 因果 / UI / 系统 / Remotion 动效

Video Director Orchestrator
= Chief Director
= 画面角色路由 + 风格家族 + Continuity + Template Registry + Unified QC
```

本 Skill 每次运行都读取上游当前版本，不保存它们的固定副本。

---

## v0.1 的关键规则

1. **Visual Role before Template**：先判断 A-roll / B-roll / Evidence / Screen / Code Motion / Typography，再搜模板。
2. **Evidence before abstraction**：Code Motion 不能代替真实证据。
3. **Code Motion 原版风格不修改**：模板源码不改，不重新蒙皮。
4. **同一 Code Motion 模板一条片只出现一次**：一个连续实例可跨多个 Beat，但不能后面再实例化。
5. **Native Style Family Lock**：默认一条片只选一个 Code Motion 原生模板家族；必要时最多一个 secondary family，必须提前进入 Director Pack。
6. **Persistent Object + Handoff**：相邻主要镜头必须有对象、语义、空间或媒体承接，除非明确 chapter reset。
7. **只有一个新增主确认 Gate**：SHOTBOOK + 素材 + Style Family + Continuity + Template Candidates 合成一次 Director Pack 给用户确认。

---

## 核心产物：DIRECTOR_PLAN.json

它是 TalkCraft 与 Code Motion 之间的导演层：

```text
TalkCraft SHOTBOOK
        ↓
DIRECTOR_PLAN.json
        ↓
visual_role
asset_status
native_style_family
persistent_object
handoff
code_motion_candidate
template_registry
        ↓
Implementation
```

模板见 [`templates/DIRECTOR_PLAN.example.json`](./templates/DIRECTOR_PLAN.example.json)。

---

## 最简工作流

```text
脚本 / SRT / 配音 / 素材
        ↓
TalkCraft：时间锚 + 素材 + SHOTBOOK
        ↓
导演层：Visual Role + Style Family + Asset Map
        ↓
导演层：Persistent Object + Handoff + Template Candidates
        ↓
Director Pack
        ↓
【用户一次确认】
        ↓
TalkCraft 镜头 → TalkCraft
Code Motion 镜头 → Code Motion
        ↓
两个上游 QC + Unified Director QC
        ↓
Hard Gates 全 PASS + Director Score ≥ 85
        ↓
Final
```

---

## 最快调用方式

```text
按 Video Director Orchestrator v0.1 制作这条口播视频。
每次开始重新读取最新版 video-talkcraft 和 remotion-code-motion-explainer。
先完成 TalkCraft 的时间锚、素材规划与 SHOTBOOK；
再生成 DIRECTOR_PLAN，先决定画面角色，再搜索模板。
Code Motion 现成模板保持原版视觉，同一模板整片最多一个连续实例；
优先同一 Native Style Family，并为相邻镜头设计 handoff。
把 SHOTBOOK、素材缺口、Style Family、模板候选和 Continuity 合成一个 Director Pack 让我确认一次；
确认后一路执行到双上游 QC + Unified Director QC。
```

---

## 和 TalkCraft Design Orchestrator 的关系

- `video-talkcraft-design-orchestrator`：适合**纯 TalkCraft**稳定生产，已经 Frozen。
- `video-director-orchestrator`：适合需要**TalkCraft + Code Motion 混合导演**的片子，目前是 v0.1 Experimental。

混合工作流不要同时叠加两个 Orchestrator，避免重复 Gate。

---

## v0.1 要验证什么？

这版不假设已经完美，主要验证：

- “先画面角色、后模板”能否明显减少模板合集感；
- 不改 Code Motion 原生风格时，Style Family Lock 能否维持统一；
- 每模板一次是否提高镜头多样性；
- Persistent Object / Handoff 是否真的是目前缺失的那 20–30 分；
- Director Score 是否能识别“技术都 PASS，但成片仍像 70 分”的情况。

真实项目出现反例后再升级。
