# Part 2 定制叙事执行与 H002 R3 候选交接｜2026-10-05

## 1. Owner 当前明确要求

- H003 / H004 不作为后续剧本的参考样板；后续一律只按当前 `part2/SCRIPT_NARRATIVE.md` 正式规则判断。
- 批量制作可以共享规则、事实核验方式和 QA，但**不能共享同一套文案模板 / 剧情骨架**。
- 每个题必须根据题目自身的 Human Process、冲突、机制与现实后果，独立选择故事发动方式。
- 批量写完后必须额外做一次跨稿件“同构检查”：开场、推进方式、转折、时间顺序、结尾若只是换题材套壳，应 RETURN 重写。
- Part 2 已有“不允许把某一种剧情模板固化”“纯解释只能作为桥”“角色不是知识主持人”等正式要求；本轮问题属于历史执行与 Reviewer 漏检，不先修改 Part 2 正文。

## 2. 本轮已完成的 Part 2 重写

H003 / H004 冻结且不作参考；以下 8 题已按 Part 2 正式规则完成 R2 定制重写与二次独立复查：

- H002 AI性格画像：一次重大选择 / 自我强化循环
- H007 AI旅行规划：旅行结束后的明信片倒叙
- H010 AI游戏NPC：NPC 对白冷开场 + 任务后果回溯
- H015 天气预报：被淋现场 + 次日两种出行情境
- H016 睡眠手表：连续一周双栏记录调查
- H017 外卖配送：两次相同绕路、不同服务结果对照
- H024 自助收银：一次完整结账现场，逐项追踪谁在完成工作
- H025 闪付验证：三次支付体验对照

这些结构不是未来模板；只记录本轮每题为何选择该发动方式。

## 3. 后续 Part 2 执行逻辑

每篇单独执行：

1. 锁定机制 / 事实 / 边界，不先选模板。
2. 从题目自身找到人物真实欲望与最能让机制产生后果的事件。
3. 用 `行动 → 世界/机制回应 → 后果 → 下一次选择` 推进；抽象解释只能补故事没法自己证明的最少部分。
4. 锁稿前按 Part 2 第 19 / 20 节逐项 QA。
5. 若同轮有多篇稿件，再做一次“跨稿同构检查”：不能因为批量效率，让多个题共享相同开场、事件数量、转折形式或收束句式。
6. 通过后才进入 Part 2.5；后续 Part 3 不能反向掩盖 Part 2 的讲解稿问题。

## 4. H002 当前状态

旧 X 库 Owner 认定版本仍为：`H002 R2`。

本轮基于 H002 Part 2 定制重写，已重建并完成**第二次独立 REVIEW 修订**：

`H002_AI性格画像_Part4_最终图片执行包_READY_R3_CANDIDATE.zip`

状态：`PASS_CANDIDATE_FOR_OWNER_REVIEW_AFTER_SECOND_INDEPENDENT_REVIEW`；**尚未回填 X 部分**。

### 二次 REVIEW 实际修正

1. 修正 Part 2 锁稿里的过期状态文案：不再写“Part 3 及后续未复查”。
2. 原 B03 同时承载“第一反应想去”与“第二反应这不像我”，违反单帧语义边界；已拆成两个独立 Visual Beat。
3. 后置机制命名从约 25.766s、5 个 Beat 压缩为约 13.837s、3 个 Beat，只保留故事无法自行证明的必要边界。
4. 重新执行 ZIP / Manifest / Cue / Beat / task / DAG / reference hash 独立 QA。

### H002 R2 → R3候选（二次 REVIEW）参数

| 参数 | R2 | R3候选 |
|---|---:|---:|
| 预估时长 | 3:48.000 | 3:14.831 |
| SRT Cue | 75 | 62 |
| 口播净字符 | 1372 | 821 |
| 功能空间 | 2 | 2 |
| 剧情 Scene | 9 | 8 |
| Semantic Shot | 9 | 9 |
| Visual Beat / 故事图 | 38 | 41 |
| GENERATE | 35 | 37 |
| DERIVE_EDIT | 3 | 4 |
| 平均单图停留 | 6.000s | 4.752s |
| 中位单图停留 | 5.673s | 4.378s |
| 最长单图 | 11.339s | 8.883s |
| >6s Beat | 18 | 11 |
| >8s Beat | 5 | 3 |
| >10s Beat | 2 | 0 |

### H002 R3候选二次独立 QA

- ZIP CRC / 文件列表：PASS
- 总清单 size / SHA-256 独立重算：PASS
- Part 2 锁稿 ↔ SRT 同源：PASS
- SRT C1–C62 连续且无 gap / overlap：PASS
- 41 Beat 连续覆盖 C1–C62，每 Cue 恰好一次：PASS
- Beat ↔ 图片任务字段逐项一致：PASS
- 依赖 earlier-only / 无环：PASS
- 4 个 DERIVE_EDIT source earlier-only：PASS
- packaged reference 3/3 hash：PASS
- >6s Beat 人工复核：PASS；最长 B30=8.883s
- Part 4.5：metadata prefilter 后无 surviving reusable full-frame candidate
- Mini Master：NOT REQUIRED
- 输出合同 / 并发2 / 16:9 / 1920×1080 / native target null：PASS
- 禁止执行模式：PASS
- 当前 ZIP SHA-256：`1d9c64328b37b292c876c246b2bff9a875190e6019e8cf66d86f062b20704e3b`

### H002 事实复核

- `Assessing personality using zero-shot generative AI scoring of brief open-ended text`：正式发表日期 **2026-01-30**；R3 候选已按官方记录修正。
- `Personality Trait Change in Adulthood`：`Current Directions in Psychological Science (2008)`。
- 二次 REVIEW 进一步把正文机制句收紧为“AI 可以从语言材料里估计一些人格倾向”，避免把证据范围扩写成无边界的“长期行为读取”。

## 5. 当前停止点

- H002 R3候选：等待 Owner 查看 R2 vs R3 对比并决定是否回填 X 部分。
- 在 Owner 明确确认前，不替换 X 库中的 H002 R2。
- 不自动开始 H007 等其他题的 Part 3 / 素材包重建。
- 不启动 live imagegen。


## 6. 仓库外持久交接资料

ChatGPT File Library：

`/comic-narrative_当前交接/2026-10-05_Part2定制重写与H002_R3候选/`

当前已保存：
- `Part2_重写_R2.zip`
- `PART2二次独立复查报告_R2.md`
- `H002_AI性格画像_Part4_最终图片执行包_READY_R3_CANDIDATE.zip`
- `H002_R2_vs_R3候选_完成前独立复查与参数对比.md`
- `H002_R3_CANDIDATE_INDEPENDENT_QA.json`
- `PART2_CUSTOM_STORY_EXECUTION_AND_H002_R3_CANDIDATE_20261005.md`

该目录是本轮交接资料，不是 X部分 Owner认定执行包；H002 R3 在 Owner 批准前不得从这里自动升级为 X 库正式版本。
