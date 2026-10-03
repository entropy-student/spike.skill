# Part 4 — Source Coverage Audit

状态：`SOURCE_COLLECTION_REAUDIT_PASS / MERGED_BASELINE_PASS1`

## 结论

已完成第二轮反向覆盖复查，并已建立 `part4/IMAGE_ASSET_EXECUTION.md` 完整合并基线 Pass 1。

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

## 第二轮反向覆盖复查

重新从原 `ai-story-showrunner` 与 portable `story-showrunner` 的目录结构反查，而不是只依赖代码搜索。

新增补入 4 份材料：
- `ai-story-showrunner/README.md` → boundary：包含 G5/G6 执行位置、Antigravity 边界和当前生产状态总览；
- `docs/GOVERNANCE_ADAPTATION.md` → boundary：补齐 Asset Evidence、Executor 权限与 Gate 治理语义；
- `outputs/README.md` → boundary：补齐 outputs / run / retained artifacts 的职责；
- `outputs/blind-search-answer/INDEX.md` → evidence：补齐真实图片生产 20/44 与下游阻塞状态证据。

复查到但继续明确排除出 Part 4 正文的 portable 文件：
- `DIRECTOR_LANGUAGE.md`、`VIEWPOINT_GRAMMAR.md`、`WRITER_CONTRACT.md`：已由 Part 2–3 承接；
- `TIMELINE_RESOLVER.md`、`TIMING_COMPILER.md`、runtime：Part 5；
- ffmpeg renderer：Part 6；
- `shot.schema.json`：旧/上游镜头结构，不是 Part 4 资产执行主合同。

结论：补入后，暂未发现新的 Part 4 能力域级遗漏。后续如在合并时出现引用缺口，仍按“疑似相关先收录、再归类”处理。

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

完整合并基线已建立；下一步逐组提出“保留 / 合并 / 修改 / 降级 / 删除”建议给 Owner 确认。当前仍未开始结构简化。
