# Version

`v0.4-calibration`

新增：

- Bili Breakout Score（B站独立二创传播层）
- B站 7/30 天新鲜度衰减
- 多创作者 / 多二创形态校验，避免把搬运播放当传播
- Social 与B站拆分计分，避免重复奖励
- S+ Culture-persistence 规则：音乐榜回落但文化模板仍扩散时不误降级
- Balanced / Breakout 评分加入 B站维度
- A级新增 `platform-led` 路径：单音乐平台直接榜单 Top5 可进入 A，避免平台冠军被错误降成 B
- S级新增 Music-consensus 路径：双音乐平台均 Top20 且至少一方 Top10，可在无强社交模板时进入 S
- 新增 `calibration_runs/2026-09-08.md`，记录 B站维度接入后的首轮真实校准
- 新增 `S+ (legacy)`：用于已脱离当前榜单周期、但已经沉淀为长期文化/BGM模板的历史文化资产；与 `active`、`culture` 明确区分。

当前仍处于人工校准阶段。
