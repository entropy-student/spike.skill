# Music Output Rules（歌曲输出契约）

本文件规定歌曲节点如何交付，并服从：

- `references/MEME_AMPLIFICATION_RULES.md`
- `references/LANGUAGE_FLEXIBILITY_RULES.md`

核心：

> **音乐是梗的放大器和演绎方式，不是新的主题生成器。**

---

## 1. 只有歌曲适合放大这个梗时才进入本节点

Router 先完成：

```text
热梗
→ 锁定 meme_core
→ 锁定 episode_name
→ 比较演绎形式
→ 只有歌曲合适或用户明确选择标准 Meme Music Episode
→ 才进入歌曲节点
```

不能因为 Skill 名字里有 Music 就默认所有梗都必须做歌。

---

## 2. 音乐类型

### 【原创】
原创音乐更能放大原梗。

### 【改编】
已有歌曲与原梗存在天然回环、双关、角色关系，或用户明确指定。

---

## 3. Theme Lock｜歌曲主题锁

调用 `music-quality-radar` 前必须先传：

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

1. `song_theme` 必须直接表达原梗核心动作 / 冲突 / 原句；
2. 歌曲主题不得与 `episode_name` 分叉成另一件事；
3. Chorus / Hook 至少出现一个明确的 `required_meme_anchor`；
4. 标题、歌词、Hook、旋律提示词必须讲同一个梗；
5. 不新增原梗没有的中心议题；
6. `music-quality-radar` 负责把这个主题写成更好的歌，**不得把主题改成另一件事**。

### 薛甄珠校准

原梗：薛甄珠冲进办公室找凌玲 / 手撕小三。

选中二创：印度电影歌舞版。

错误：`episode_name = 《把话摊开》`，主题变成“沟通 / 讲清楚”。

正确方向应继续围绕：找凌玲 / 找小三 / 冲进办公室手撕 / 护女儿上门算账。

---

## 4. Music Quality Radar 必须现场调用

每次正式生成 / 改编歌词、旋律 / 曲风提示词时，重新读取当前：

`music-quality-radar/SKILL.md`

若它指向任务相关 references，也现场读取。

读取失败：`LIVE_SKILL_READ_FAILED`。

同时把 `music_meme_lock` 作为不可改写的上游约束交给该 Skill。

---

## 5. 歌词格式与绑定

使用必要段落标签：

- `[Verse]`
- `[Pre-Chorus]`
- `[Chorus]`
- `[Bridge]`
- `[Outro]`

不为形式完整强行添加段落。

### Meme Binding Gate

歌词发送前检查：

> 把人物名换掉后，这首歌是否几乎可以原样用于大量无关剧情？

如果是，说明太泛，重写。

歌词与 Hook 应优先让用户一听就知道“在玩哪个梗”。

`episode_name` 不一定每段都重复，但歌词主题必须明显与其一致；适合时可直接把名称或核心短句做成 Hook。

---

## 6. 旋律 / 曲风提示词

最终第四项交付统一称为：

> **旋律 / 曲风提示词**

它只回答：

> **用什么音乐方式把已经锁定的梗和本期创意演出来？**

优先保留：

- `episode_name` / `song_theme` / 核心梗锚点；
- 主旋律的记忆方向，例如短句、重复、上行/下行、问答式、群呼式等高层描述；
- 核心风格；
- 节奏 / 能量；
- 关键乐器 / 声音；
- 人声 / 角色气质；
- Hook 与高潮结构；
- 少量关键禁止项。

长度：

- 推荐 **200–350 字**；
- 硬上限 **500 字**；
- 能更短表达清楚就更短。

不要重复完整剧情，不堆无效术语，也不要写与梗核无关的新主题。

---

## 7. 语言不锁死中文

歌词 / Hook / 标题可使用中文、英文、中英混合、方言或其他有明确作用的语言。

语言必须增强梗识别、角色身份、节奏 / 押韵、二创版本语境、反差或笑点。

不为了国际感随机塞外语。

---

## 8. 改编版权边界

若改编受版权保护歌曲：

- 优先使用用户提供的歌词 / 结构；
- 只有歌名时，不从网上抓取并复现整首歌词；
- 可处理用户提供文本、有限片段或高层结构。

---

## 9. 标准 Meme Music Episode 的音乐交付

固定交付中的音乐部分为：

3. **歌词**
4. **旋律 / 曲风提示词**

它们必须与前两项：

1. **名称 `episode_name`**
2. **带该标题的图片**

共享同一 `creative_lock`。

---

## 10. 发送前检查

```text
这次为什么适合用歌曲来玩这个梗？
↓
episode_name 是否仍绑定原梗？
↓
Theme 是否仍然是原梗，而不是新主题？
↓
Hook 是否直接含梗锚点？
↓
选中二创版本是否进入音乐演绎？
↓
是否 LIVE 读取 Music Quality Radar？
↓
歌词是否足够绑定这个梗？
↓
旋律 / 曲风提示词是否 ≤500 字？
↓
与名称、图片是否一致？
↓
最终交付
```

> **Meme first. Name locks the concept. Music amplifies it. Quality optimizes it.**