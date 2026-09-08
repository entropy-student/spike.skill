<div align="center">

# 🎬 Narrative Motion Semantics（叙事动效语义库）

### Narrative Motion Gallery 的语义模板与调用系统

**把“这一段信息应该怎么动”从视觉装饰问题，转成信息语义与叙事结构问题。**

[简体中文](./README.md) · [English](./README_EN.md) · [完整 Skill 规则](./SKILL.md)

![Version](https://img.shields.io/badge/version-v0.1-orange?style=flat-square)
![Status](https://img.shields.io/badge/status-INCOMPLETE-red?style=flat-square)
![Semantics](https://img.shields.io/badge/semantics-4-blueviolet?style=flat-square)

</div>

> [!WARNING]
> **状态：未完成（INCOMPLETE）。** 当前已整理流程、时间、对比、因果 4 个语义包；跨语义自动路由、更多语义类型与统一生产链仍未完全封板。四个导入包本身可能处于各自的 Stable Baseline，但这个“统一 Skill”仍是未完成状态。

---

## 当前包含的 4 个语义包

| 语义 | 核心问题 | 模板数量 | 参考包 |
|---|---|---:|---|
| **Process（流程）** | 这件事怎么一步一步完成 / 下一步怎么走？ | 10 | [`semantics/process/`](./semantics/process/) |
| **Time（时间）** | 同一个对象随真实时间发生了什么变化？ | 9 | [`semantics/time/`](./semantics/time/) |
| **Comparison（对比）** | A 与 B 到底哪里不同，观众最终该记住哪个差异？ | 10 | [`semantics/comparison/`](./semantics/comparison/) |
| **Causal（因果）** | 原因通过什么机制产生结果？ | 10 | [`semantics/causal/`](./semantics/causal/) |

合计 **39 个现有模板**。

---

## 最重要的判断：先识别语义，再选视觉

```text
旁白 / 信息
    ↓
它真正想解释什么关系？
    ↓
流程 / 时间 / 对比 / 因果
    ↓
选择对应的信息拓扑
    ↓
选择 Template ID
    ↓
旁白同步 + Motion Grammar
    ↓
Visual Master / Remotion
    ↓
QA
```

不要因为有年份就选“时间”，不要因为有箭头就选“流程/因果”，也不要因为有两个对象就机械做左右对比。

---

## 四种语义的边界

### Process（流程）
> **怎么做 / 怎么推进。**

强调操作、步骤、交接、并行、检查、循环、状态推进。

### Time（时间）
> **同一主体在真实时间里怎么变化。**

强调演化、累积、换代、转折、周期与速度变化。

### Comparison（对比）
> **对象之间真正重要的差异或关系是什么。**

强调差值、范围、位置、重叠、缺口、路径分叉等比较拓扑。

### Causal（因果）
> **为什么会产生这个结果，机制如何发生。**

强调原因 → 机制 → 结果；不能用箭头伪造因果。

---

## 最快调用方式

```text
按 Narrative Motion Semantics 分析这段旁白。
先判断主语义属于流程、时间、对比还是因果；
不要先挑好看的模板。
说明为什么属于这个语义、为什么不是另外三种，
然后选择最合适的 Template ID，并按对应 Call Protocol 给出制作输入。
```

---

## 文件结构

```text
narrative-motion-semantics/
├── README.md
├── README_EN.md
├── SKILL.md
├── metadata.yml
└── semantics/
    ├── process/
    │   ├── GUIDE.md
    │   ├── MODULES.md
    │   └── RUNTIME.md
    ├── time/
    ├── comparison/
    └── causal/
```

为了让 Skill 在 GitHub 里可直接阅读，四个上传包被整理成三类文本参考：

- `GUIDE.md`：入口、handoff、核心规则、Call Protocol、QA 等；
- `MODULES.md`：模板总表与逐模块复现规则；
- `RUNTIME.md`：invoke schema、registry、tokens、status、checksums 等文本运行时资料。

原包中的 standalone Visual Master HTML 没有嵌进这些文本参考，因此这也是当前 Skill 保持 **INCOMPLETE** 的原因之一。

---

## 当前未完成项

1. 跨语义自动路由在复杂旁白中的准确率；
2. 一段内容同时包含多种语义时的拆段 / 主次语义策略；
3. 路径、数据、分类等后续语义是否应纳入同一体系；
4. 四套 runtime schema 是否需要统一成一个稳定调用协议；
5. standalone Visual Master HTML 的正式迁移与统一管理；
6. Visual Master → Remotion 的统一生产接口；
7. 更多真实视频案例下的模板边界与反例校准。

因此当前状态保持：**INCOMPLETE / 未完成**。

---

## 核心原则

> **Motion 不是装饰。**
>
> **先判断信息关系，再让运动承担语义。**

<div align="center">

### Semantic first. Motion second.

**先理解关系，再设计运动。**

</div>
