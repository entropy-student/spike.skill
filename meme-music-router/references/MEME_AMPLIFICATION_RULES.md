# Meme Amplification Rules（热梗放大与演绎规则）

本规则是 `meme-music-router` 的创作核心。

> **热梗是主角；名称、图片、台词、歌曲、短视频只是放大梗和演绎梗的手段。**

形式不能反过来改写梗。

---

## 1. 先锁定梗核，再选形式

任何创作前先写清楚：

```yaml
meme_core:
  source_meme:
  parent_meme_or_ecosystem:
  selected_child_unit:
  core_person_or_character:
  core_action_or_conflict:
  iconic_line_or_object:
  why_it_is_funny:
  must_not_drift:
```

如果这一步说不清楚，不进入生图、写词或其他创作。

---

## 2. Creative Name Lock｜名称是整期统一锚点

梗核锁定后、用户确认选题前，先生成：

```yaml
creative_lock:
  episode_name:
  meme_core:
  selected_derivative:
  one_sentence_play:
  must_preserve:
```

名称必须同时完成两件事：

1. 让人知道在玩哪个梗；
2. 让人感受到这次怎么重新玩。

优先使用：人物、原句、动作、冲突、名场面 + 本期二创玩法。

禁止把具体梗抽象成泛主题。

### 薛甄珠示例

原梗：薛甄珠冲进办公室找凌玲 / 手撕小三。

玩法：印度电影歌舞版。

可用方向：

- 《凌玲你出来》
- 《我今天就是来找凌玲》
- 《找小三·印度歌舞版》

错误：

- 《把话摊开》

因为后者只剩“沟通 / 讲清楚”，丢了原梗。

名称一旦用户确认，后续图片标题、歌词主题、Hook、音乐提示词都必须沿用同一创意锁。

---

## 3. 形式是放大器，不是新主题生成器

锁定梗核与作品名后，再判断哪种形式最能让它更好笑、更荒诞、更爽、更容易传播：

- 图片 / 梗图
- 台词 / 对话 / 小剧场
- 歌曲
- 短视频 / 剧情演绎
- 混合形式

选择标准：

> **哪种形式最能放大这个梗本来就有的笑点、冲突、反差或人物关系？**

常见放大方式：夸张升级、字面化、角色回环、身份错位、文化 / 类型片移植、反转、经典场景再解释、把一句话演成完整世界、把一个动作升级成歌舞 / 剧情 / 仪式。

---

## 4. Theme Lock｜主题锁

最终作品主题必须直接继承 `core_action_or_conflict` 或 `iconic_line_or_object`。

禁止把原梗抽象成一个更“像作品”的新主题。

### 错误示例

原梗：薛甄珠冲进办公室找凌玲 / 手撕小三。

错误歌曲主题：《把话摊开》。

正确主题仍应围绕：找小三 / 找凌玲 / 冲进办公室手撕 / 护女儿上门算账。

印度电影歌舞只是**演绎方式**，不能成为新的剧情主题。

> **Music amplifies the meme. Image amplifies the meme. Format serves the meme.**

---

## 5. Song Theme Gate｜音乐主题门槛

当选择歌曲形式时，在调用 `music-quality-radar` 前必须传入：

```yaml
music_meme_lock:
  episode_name:
  meme_core:
  selected_derivative:
  music_role: amplifier
  song_theme:
  required_meme_anchor:
  forbidden_theme_drift:
```

固定要求：

1. `song_theme` 必须是梗核的直接表达或明显延伸；
2. 歌曲不得另起一个与 `episode_name` 冲突的新中心主题；
3. Chorus / Hook 至少出现一个 `required_meme_anchor`；
4. 不新增原梗没有的中心议题；
5. `music-quality-radar` 只能优化“怎么把这个主题写成更好的歌”，不能擅自改主题。

如果换掉人物名字后，这首歌还能用于大量无关剧情，说明梗绑定度过低，应重写。

---

## 6. Selected Derivative Fidelity｜二创版本必须保留

如果本期选中某个具体二创版本，作品必须同时满足：

```text
原梗识别度
+
本期二创版本识别度
```

例如：

```text
薛甄珠手撕凌玲
+
印度电影版
```

不能只剩“印度风”，也不能只剩原电视剧场景。

---

## 7. 标准 Meme Music Episode 四件套

当 Router 判断“图片 + 音乐”适合放大该梗，或用户明确选择这一模式时，最终固定交付：

1. **名称**：已锁定的 `episode_name`
2. **图片**：画面包含该标题，并体现原梗 + 本期创意
3. **歌词**：锁定相同 `meme_core`
4. **旋律 / 曲风提示词**：说明如何用音乐放大同一梗核

四件套必须共享同一 `creative_lock`。

---

## 8. 四个发送前测试

### A. Meme Recognition Test
去掉解释后，熟悉原梗的人还能认出在玩什么吗？

### B. Meme Binding Test
把人物名字换掉，作品是否仍然几乎可以原样用于另一个梗？

- 是 → 太泛，重做。

### C. Amplification Test
所选形式有没有让原梗变得更有趣、更荒诞、更爽、更容易传播？

### D. Name Consistency Test
名称、图片标题、歌词主题、Hook、音乐提示词是否还在讲**同一个梗 + 同一个创意玩法**？

- 任一漂移 → 回退重做。

---

## 9. 核心原则

> **先找到真正的热梗。**
>
> **再搞清楚这个梗到底好笑在哪里。**
>
> **选题阶段就锁定一个准确有梗的作品名。**
>
> **最后用最适合的形式把这个笑点放大。**

不是：

> 找到热梗 → 强行做歌 / 做图 → 最后再临时起名。

而是：

> **找到热梗 → 锁定梗核 → 锁定名称 → 选择最有趣的演绎方式 → 四个交付物保持一致 → 用真实反馈继续校准。**