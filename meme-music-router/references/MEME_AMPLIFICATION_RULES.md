# Meme Amplification Rules（热梗放大与演绎规则）

本规则是 `meme-music-router` 的创作核心。

> **热梗是主角；图片、台词、歌曲、短视频只是放大梗和演绎梗的手段。**

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

## 2. 形式是放大器，不是新主题生成器

锁定梗核后，再判断哪种形式最能让它更好笑、更荒诞、更爽、更容易传播：

- 图片 / 梗图
- 台词 / 对话 / 小剧场
- 歌曲
- 短视频 / 剧情演绎
- 混合形式

选择标准不是“哪种形式我最会做”，而是：

> **哪种形式最能放大这个梗本来就有的笑点、冲突、反差或人物关系？**

常见放大方式：

- 夸张升级
- 字面化
- 角色回环
- 身份错位
- 文化 / 类型片移植
- 反转
- 经典场景再解释
- 把一句话演成完整世界
- 把一个动作升级成歌舞 / 剧情 / 仪式

---

## 3. Theme Lock｜主题锁

最终作品主题必须直接继承 `core_action_or_conflict` 或 `iconic_line_or_object`。

禁止把原梗抽象成一个更“像作品”的新主题。

### 错误示例

原梗：

> 薛甄珠冲进办公室找凌玲 / 手撕小三

错误歌曲主题：

> 《把话摊开》

问题：它把“找小三 / 手撕凌玲”抽象成了“沟通、讲清楚”，梗核消失。

### 正确方向

音乐主题应直接围绕：

> 找小三 / 找凌玲 / 冲进办公室手撕 / 护女儿上门算账

印度电影歌舞只是**演绎方式**，不能成为新的剧情主题。

> **Music amplifies the meme. Music does not replace the meme.**

同理：

> **Image amplifies the meme. Dialogue amplifies the meme. Format serves the meme.**

---

## 4. Song Theme Gate｜音乐主题门槛

当选择歌曲形式时，在调用 `music-quality-radar` 前必须传入：

```yaml
music_meme_lock:
  meme_core:
  selected_derivative:
  music_role: amplifier
  song_theme:
  required_meme_anchor:
  forbidden_theme_drift:
```

固定要求：

1. `song_theme` 必须是梗核的直接表达或明显延伸；
2. 标题默认优先使用人物、名场面、原句、动作或冲突，而不是抽象文学化标题；
3. Chorus / Hook 必须出现至少一个 `required_meme_anchor`；
4. 不新增原梗没有的中心议题，例如“体面”“成长”“沟通”“女性力量”，除非它本来就是梗的一部分；
5. `music-quality-radar` 只能优化“怎么把这个主题写成更好的歌”，不能擅自改主题。

如果换掉人物名字后，这首歌还能用于大量无关剧情，说明梗绑定度过低，应重写。

---

## 5. Selected Derivative Fidelity｜二创版本也必须保留

如果本期选中的不是原始梗，而是某个具体二创版本，则作品必须同时满足：

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

结果必须让人同时看出：

- 这是薛甄珠找凌玲 / 手撕小三；
- 这是被演成印度电影歌舞版。

不能只剩“印度风”，也不能只剩原电视剧场景。

---

## 6. 三个发送前测试

### A. Meme Recognition Test
去掉标题解释后，熟悉原梗的人还能认出在玩什么吗？

### B. Meme Binding Test
把人物名字换掉，这个作品是否仍然几乎可以原样用于另一个梗？

- 是 → 太泛，重做。
- 否 → 绑定度较高。

### C. Amplification Test
所选形式有没有让原梗变得更有趣、更荒诞、更爽、更容易理解或传播？

- 只是“更漂亮 / 更像一首歌 / 更像海报” → 不够。
- 真正把原梗的笑点、冲突或反差放大 → 通过。

---

## 7. 核心原则

> **先找到真正的热梗。**
>
> **再搞清楚这个梗到底好笑在哪里。**
>
> **最后选择最适合的形式，把这个笑点放大。**

不是：

> 找到热梗 → 强行做歌 / 做图。

而是：

> **找到热梗 → 锁定梗核 → 选择最有趣的演绎方式 → 放大梗 → 用真实反馈继续校准。**
