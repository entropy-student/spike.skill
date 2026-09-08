# Final Music Prompt Generator — Validation Plan

> 当前状态：**UNVERIFIED**

这个文件用于回答一个关键问题：

> **最终把 `MUSIC_BRIEF` 转成 Suno / 其他音乐模型提示词的 Skill，到底有没有达到可稳定调用的水平？**

在真实生成结果没有通过下面的测试前，不把它视为稳定能力。

---

## 1. 理想 Prompt Skill 不等于“Prompt 写得很长”

真正要验证的是生成结果，而不是提示词文字看起来是否专业。

Prompt Generator 的目标：

1. 能准确保留 Router 选定的梗与人物 POV；
2. 能把 Music Quality Radar 的质量要求翻译成模型实际能执行的音乐指令；
3. 能稳定得到可用版本，而不是偶尔撞中大奖；
4. 能在失败后知道应该改哪一类参数，而不是整段重写；
5. 能针对不同 Route A/B/C/D 调整提示结构。

---

## 2. 必测的四种输入

至少分别测试：

### Case A — 原生音乐梗

热点本身已有歌曲/旋律记忆，需要保留其传播识别度并重新编曲/演绎。

### Case B — 近期热歌再叙事

需要保留“熟悉感”，但避免粗暴复制原曲。

### Case C — 经典歌曲再叙事

重点验证：是否能抓住经典歌曲的情绪/结构母题，同时生成具有独立性的版本。

### Case D — 原创音乐化

没有现成歌曲，需要完全从梗、人物和场景生成原创歌曲。

如果只在一种 Route 上有效，不能视为通用 Prompt Skill。

---

## 3. 每次生成的最低测试协议

每个 Case 至少生成 4 个候选版本。

记录：

```text
输入 MUSIC_BRIEF
↓
Prompt vN
↓
生成 4 个版本
↓
Music Quality Radar 评分
↓
人工反馈
↓
记录失败原因
↓
只修改最可能的原因
↓
再次生成
```

禁止只听一个幸运版本就宣布 Prompt Skill 成熟。

---

## 4. 七项结果评分

沿用 Music Quality Radar，但增加“梗完成度”。

| 项目 | 分值 | 判断 |
|---|---:|---|
| 梗 / 人物完成度 | 20 | 听众是否能感受到这首歌就是这个人物/场景？ |
| 旋律与 Hook | 15 | 15–30 秒内有没有记得住的东西？ |
| 编曲与结构 | 15 | 是否有起伏、高潮、反差，而不是一路平均？ |
| 歌词 / 表达 | 15 | 是否具体、自然、有角色口吻？ |
| 情绪推进 | 10 | 是否真正发生变化？ |
| 声音与制作 | 10 | 是否清晰、有主次、不过度拥挤？ |
| 独特性 / 重听 | 15 | 脱离热点以后是否仍有再听价值？ |
| **总计** | **100** | |

---

## 5. Prompt Skill 达到“可用”的门槛

### BETA

- 4 个版本中至少 1 个达到 A；
- 主要失败原因可以被清楚解释；
- Prompt 改动与结果变化存在基本可重复关系。

### STABLE

至少连续 5 个不同选题满足：

- 每个选题 4 个版本中至少 2 个达到 A；
- 至少 1 个有 S 潜力；
- 梗/人物完成度平均 ≥ 16/20；
- 不出现大面积“AI平均感”；
- 不需要每次完全人工重写 Prompt 才能救回来。

### IDEAL

至少连续 10 个不同选题：

- ≥70% 的首轮生成就有可发布版本；
- ≥40% 的首轮生成达到 Music Quality Radar 的 S 潜力；
- Route A/B/C/D 均有成功案例；
- 失败时可以通过结构化参数修正，而不是靠运气；
- 用户能够只确认 `MUSIC_BRIEF`，不必再手工参与 Prompt 编写。

---

## 6. 常见失败类型

每次失败必须归因到下面至少一类：

- `HOOK_WEAK`：没有记忆点；
- `ENERGY_WRONG`：能量与梗不匹配；
- `POV_LOST`：人物视角丢失；
- `LYRIC_GENERIC`：歌词像普通 AI 情歌；
- `ARRANGEMENT_FLAT`：从头到尾平均；
- `PAYOFF_WEAK`：没有高潮/反转；
- `TOO_LITERAL`：把梗解释得太直白；
- `TOO_FAR_FROM_SOURCE`：Route A/B/C 时失去熟悉感；
- `TOO_CLOSE_TO_SOURCE`：过度模仿源歌曲，缺少独立性；
- `VOCAL_MISMATCH`：人声气质不适合角色；
- `MODEL_LIMITATION`：更像生成模型能力边界，而非 Prompt 问题。

---

## 7. 当前结论

现在应该把链路理解为：

```text
Meme Music Router          = 已整理 / Calibrating
Music Quality Radar        = 已存在 / Calibrating
Final Music Prompt Skill   = UNVERIFIED
Suno / Music Provider      = 待真实接入测试
```

下一阶段不应该继续凭空扩写 Prompt 规则，而应该：

> **选 3–5 个已经确认的 S/A 级选题，用真实生成结果反向校准 Prompt Generator。**

只有结果稳定以后，才建立独立的最终 Music Prompt Skill。
