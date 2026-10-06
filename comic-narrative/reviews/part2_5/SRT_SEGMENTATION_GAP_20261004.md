# SRT 拆分规则缺口记录

> Date: 2026-10-04  
> Scope: Part 2.5 / provisional SRT segmentation  
> Status: MIGRATED_TO_CANONICAL / CLOSED (2026-10-06 Owner authorized)

## 1. 问题

当前 `part2_5/VOICE_SRT_ALIGNMENT.md` 已规定字幕拆分优先级：

> 完整意义 > 对话轮次 > 戏剧落点 > 阅读长度 > 标点

但当前正式文档没有完整保留历史版本中更细的：

`Locked Spoken Script → Speech Unit → Subtitle Cue`

两层拆分流程。

如果实现只按“标点 + 字数范围”机械切分，会出现：

- 动作、反应、对白被合并为同一 cue；
- 不同说话者被合并；
- setup 与 punchline 被合并；
- reversal / reaction 因字数过短而被错误并入相邻句；
- 为满足 9–18 字而破坏完整意义或戏剧落点；
- Markdown 排版空行被错误解释为语义停顿。

## 2. 历史规则依据

### Speech Unit

历史 canonical timing standard 定义：

> Speech Unit 是自然口语 / 韵律单元，按 meaning、breath、setup/answer、reversal、punch、authored pause 拆分。

Speech Unit 先于 Subtitle Cue。

### Subtitle Cue

字幕是从锁定口播派生的“可读性单元”，与 Speech Unit 可以一对多 / 多对一。

当前 Part 2.5 的优先级仍然有效：

1. 完整意义；
2. 对话轮次；
3. 戏剧落点；
4. 阅读长度；
5. 标点。

### 经验范围

旧景岁 timing profile 提供：

- 普通 cue 约 9–18 中文字；
- 普通 cue 约 1.4–3.2 秒；
- 最多两行；
- punchline 可单独成 cue；
- 不拆固定搭配、人名、专名、数字与单位、梗核心词。

这些都是**经验范围，不是硬下限 / 硬上限**。

## 3. 正确拆分流程

```text
Locked Spoken Script
↓
Speech Unit
  - 完整小意思
  - 自然呼吸
  - 对话轮次
  - setup / answer
  - action / reaction
  - reversal
  - punchline
  - authored pause
↓
Subtitle Cue
  - 优先保持上述语义与戏剧边界
  - 过短的普通说明句可与相邻同义单元合并
  - 过长单元只在语义安全处拆分
  - punchline / reversal / reaction 可短
↓
Readability check
  - 9–18 中文字作为普通 cue 参考
  - 约 1.4–3.2 秒作为普通 cue 参考
  - 1–2 行
```

## 4. provisional SRT 的时间规则

无真实音频、仅做预览时：

- 使用明确选定的 provisional speaking rate；
- 当前历史景岁基线可用 5.9 中文字/秒；
- 加自然的句间 / 转折 / 落锤停顿；
- 不把 1.4–3.2 秒误当作每个 cue 的硬时间下限；
- 不把 Markdown 空行自动转换成停顿；
- 总时长应由锁定口播的可朗读量 + 真实语义停顿决定。

真实最终音频存在后：

> provisional timing 全部失效，正式 SRT 必须重新对齐真实音轨。

## 5. QA

生成 SRT 后至少检查：

- 文本与锁定口播逐字一致；
- 不漏句、不重复；
- 不同说话者不粘连；
- setup 与 punchline 未被错误合并；
- action / reaction / dialogue 的戏剧边界未被破坏；
- 无孤立标点或无意义单字 cue；
- 短 cue 是有意的 punch / reversal / reaction，而不是机械碎切；
- 9–18 字和 1.4–3.2 秒只作为普通 cue 参考；
- 估算 SRT 明确标记为 provisional / estimated；
- 正式音频出来后重新对齐。

## 6. 当前处理

本记录只保存**SRT 拆分规则缺口与恢复原则**。

不记录任何当前测试剧本正文、测试 SRT 内容或测试选题推进状态。

2026-10-06 Owner 已明确授权；上述细化规则已最小化迁移回 `part2_5/VOICE_SRT_ALIGNMENT.md`。本文件仅保留历史缺口与迁移追溯，不再作为运行时规则源。
