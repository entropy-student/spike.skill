# Part 4 — Source Coverage Audit

状态：`SOURCE_COLLECTION_PASS / MERGED_BASELINE_NOT_STARTED`

## 结论

本轮先完成“材料整理”，尚未建立 Part 4 正式规则。

已覆盖的能力域：
- G5 资产需求提取、Reference Lock、Beat Asset Binding；
- Character / Scene / Style / Prop-UI Bible；
- Frame Blueprint 到 execution row / image row；
- GENERATE / DERIVE_EDIT 与历史 COMPOSITE_CROP 边界；
- Prompt / Edit Compiler；
- Character Identity、continuity、reference precedence；
- Reference Library、production Registry、输出记录；
- Antigravity / image provider / executor 权限边界；
- 图片 QA、Pilot、reference-path validation；
- 2026-09-26 实际图片执行证据；
- Agent A → Owner → Agent B 图片批次交接；
- portable Story Showrunner 对应 contracts / adapters / schemas；
- G6 下游生产包中与图片执行直接相连的接口。

## 明确不在本轮作为 Part 4 正文处理

- TTS / 真实语音时长 / Timeline Resolver：留给 Part 5；
- ffmpeg / 最终视频渲染：留给 Part 6；
- 历史图片二进制：只索引，不复制；
- Part 0–3 已封板正文与 3+2 PNG：作为上游输入，不改写。

## 当前发现的后续整理重点

这些只是“待审查”，还没有决定删改：
1. 旧 G5 同时存在 Asset Manifest、Beat Asset Matrix、多个 Bible、Reference Manifest、Frame Blueprint、Execution Row、Image Generation Row，可能有明显重复层；
2. portable Skill 与原项目 G5 合同存在同义但字段不同的双轨；
3. 历史 `COMPOSITE_CROP`、`POST_OVERLAY` 与当前 Part 3 已封板边界存在冲突，后续必须显式 reconcile，不能直接沿用；
4. Reference Library / production Registry / final outputs 三套记录用途不同，但历史文档之间存在重叠，需要保留职责而避免重复维护；
5. G5 与 G6 的图片执行边界曾多次移动，Part 4 正式基线必须重新锁定“做到哪一步为止”。

下一步：先形成**完整合并基线**，只把现有能力合到一起；不做简化。完成后再逐组提出“保留 / 合并 / 修改 / 降级 / 删除”建议给 Owner 确认。
