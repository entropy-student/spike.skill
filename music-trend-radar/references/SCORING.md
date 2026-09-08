# Scoring — Music Trend Radar

## 1. Rank Score

对每个平台榜单中的排名 r（1 <= r <= N），使用：

```text
rank_component = 1 / log2(r + 1)
```

再按当轮候选中的理论最大值归一化到 0–100。Top 1–10 的差异应高于 70–100。

## 2. Music Cross-platform Score

只计算网易云 / QQ / 汽水三个音乐平台：

```text
1个平台 = 0
2个平台 = 60
3个平台 = 100
```

**B 站不进入这个数量。**它是二创传播层，避免把内容平台和音乐平台混成同一种证据。

## 3. Velocity Score

需要前一快照：

```text
velocity = previous_rank - current_rank
```

新入榜单单独记录 `new_entry=true`。建议大幅上升 80–100、中幅 50–79、小幅 20–49、下降 0–19，最终按 3–7 天校准。

## 4. Persistence Score

- 1天：20
- 2–3天：40
- 4–7天：65
- 8–14天：80
- 15天以上：100

## 5. Short-video / Social Breakout Score

用于抖音、汽水联动、微博等音乐平台外的短视频与社交复制：

```text
0   = 无可信传播证据
20  = 少量讨论/使用
40  = 多创作者开始使用
60  = 明确挑战/手势舞/BGM模板
80  = 大规模跨圈层二创/明星参与
100 = 现象级模板持续增殖
```

搜索结果或单篇新闻不能单独打到 80+。

## 6. Bili Breakout Score

B 站单独计分，重点衡量「二创生态」而不是原曲播放：

```text
0   = 无可信 B 站相关传播
20  = 单一音乐搬运/试听，几乎无衍生
40  = 多个创作者出现或单个高播放衍生
60  = 翻唱/舞蹈/剧情BGM/乐器等至少两类二创持续出现
80  = 明确挑战/系列化复制，多创作者、多圈层，最近7天仍有新投稿
100 = 平台级文化模板，长期多形态增殖且近期仍活跃
```

### 新鲜度衰减

“今日”报告必须优先看新投稿：

- 0–3 天：1.00
- 4–7 天：0.90
- 8–30 天：0.70
- 31–90 天：0.50
- >90 天：只能作为历史背景，不能单独支撑今日高分

历史百万播放 + 最近无新投稿，不等于今日 Bili 80。

## 7. 三种模式

### Run A — Current Heat

```text
CurrentHeat = 75% Rank + 25% MusicCrossPlatform
```

不加入社交/B站，确保回答“音乐平台现在谁最热”。

### Run B — Breakout

有历史：

```text
Breakout = 30% Velocity + 25% RisingChart + 15% ShortVideoSocial + 15% BiliBreakout + 10% MusicCrossPlatform + 5% Newness
```

无历史：只输出 RisingChart / Social / Bili 候选，不伪造 Velocity。

### Run C — Balanced Radar

有历史：

```text
Balanced = 30% Rank + 15% MusicCrossPlatform + 20% Velocity + 10% Persistence + 15% ShortVideoSocial + 10% BiliBreakout
```

无历史：

```text
Balanced(v0) = 50% Rank + 20% MusicCrossPlatform + 20% ShortVideoSocial + 10% BiliBreakout
```

并明确“历史维度尚未启用”。

## 8. S+/S/A/B 趋势等级

最终同时输出 `Rank + Tier + Confidence`。S/S+ 有硬门槛，见 `TIERING.md`。

## 9. 平台权重

三个音乐平台默认等权。B 站不是第四个音乐榜单，而是独立传播维度。
