# Source Policy

## Source Tier

### Tier S — 直接榜单结构化数据
- 官方公开榜单 API
- 可验证 CLI 直接读取平台 toplist
- 平台当前榜单页面的结构化结果

可直接作为音乐排名证据。

### Tier A — 平台公开页面 / 发现页
可证明正在被平台推荐/曝光；只有页面明确命名为榜单时才记录具体榜单名。

### Tier B — 活跃维护的第三方 API / 聚合榜
可作为采集适配器，但应与另一来源交叉检查。

### Tier C — 搜索引擎 / 新闻 / 社媒
只能解释背景，不能单独作为音乐 Top 排名依据。

## Freshness

“今日”音乐排名原则上只使用 24 小时内可确认更新的数据。按周更新则明确写周榜。

B 站传播单独使用 7 天 / 30 天窗口，并对历史播放做时间衰减。

## Known adapters

### NetEase
- NeteaseCloudMusicApiEnhanced/api-enhanced
- `/toplist`
- `/toplist/detail`

### QQ Music
- tamnd/qqmusic-cli
- `top`, `top --chart new`, `top --chart rising`

### Qishui
- guowenye/qishui-api
- `/discover`, `/discover/mix`, `/recommend/playlist`, `/playlist/detail`

汽水若无直接榜单端点，默认降级为“发现热度”。

### Bilibili

B 站不是音乐榜单源，优先使用：

1. Bilibili 搜索结果中可验证的投稿时间、播放量、标题、UP 主；
2. 具体视频页的播放/互动与“发现《歌曲》”关联；
3. 同一歌曲的多创作者、多二创类型样本；
4. 挑战合集/系列只能作为“存在复制生态”的证据，不应把整个系列总播放误算成单首歌播放。

对 B 站证据必须记录：

```text
bili_latest_post_at
bili_recent_posts
bili_creator_count_sampled
bili_derivative_types
bili_max_recent_views
bili_score
```

搬运/无损试听类内容与舞蹈、翻唱、剧情 BGM、鬼畜等创作型内容分开计权。
