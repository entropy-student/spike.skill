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

本轮在多次中断后，不继承此前候选 PASS；先做文件身份核验，再从 ZIP 实际字节重新 REVIEW，最终形成：

`H002_AI性格画像_Part4_最终图片执行包_READY_R3_CANDIDATE_V2.zip`

状态：`PASS / OWNER_ACCEPTED / BACKFILLED_TO_X_LIBRARY`。

### 从零重新 REVIEW 实际发现与修正

1. 发现同名 R3 ZIP 与旧解压目录存在 62 Cue / 65 Cue 状态混淆；后续一律以 ZIP 实际字节为审查对象。
2. 确认并保留 B03/B04 的独立静帧拆分：“想去”与“这不像我”不再塞进一张图。
3. 机制桥保持 3 Cue / 3 Beat，并进一步附着在主角“回看旧材料 + 新经历”的动作上。
4. 删除“下一次模型证据必然更强”的过强机制说法，改为“如果继续不尝试，下一次回头看仍没有新的反例记录”。
5. 收紧发布包装：推荐标题改为“AI 太懂我，我差点拿它当理由拒掉一次想去的分享”；Hook 明确是主角自己想退缩，不把 AI 写成主动劝退者。
6. 重算 Part 3 长 hold 参数，修正视觉策略里的陈旧平均值 / >6s 数量。
7. 修正 ASSET_MANIFEST 中分享空间“B20建立”的陈旧注释为实际 B21。
8. 最终独立 QA 重新验证 ZIP / Manifest / Part2↔SRT / Cue / Beat / task / DAG / DERIVE source / reference hash / 输出合同，全部 PASS。

### H002 R2 → R3候选 V2 参数

| 参数 | R2 | R3候选 V2 |
|---|---:|---:|
| 预估时长 | 3:48.000 | 3:14.831 |
| SRT Cue | 75 | 62 |
| 口播净字符（按SRT） | 1372 | 841 |
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

### H002 R3候选 V2 独立 QA

- ZIP CRC / 18 文件列表：PASS
- 总清单 coverage / size / SHA-256 独立重算：PASS
- Part 2 锁稿 ↔ SRT 逐字同源：PASS
- SRT C1–C62 连续且无 gap / overlap：PASS
- 41 Beat 连续覆盖 C1–C62，每 Cue 恰好一次：PASS
- Beat ↔ 图片任务 Scene / Shot / time / spoken 逐项一致：PASS
- prerequisite 与 4 个 DERIVE_EDIT source earlier-only：PASS
- packaged reference 3/3 hash：PASS
- >6s Beat 人工复核：PASS；最长 B30=8.883s
- Part 4.5：metadata prefilter 后无 surviving reusable full-frame candidate
- Mini Master：NOT REQUIRED
- 输出合同 / 并发2 / 16:9 / 1920×1080 / native target null：PASS
- 禁止执行模式：PASS
- 入库前 V2 候选 ZIP SHA-256：`c06cff9585d6ccd2e513e974153a41f2524f3a91b9f19b285420fb1d8abbf98f`
- X 库正式 R3 ZIP SHA-256：`0c754be5d94153afccc38b0be632b0d693d7e274e9d9e1a62645b96e6a9b9176`

### H002 事实复核

- `Assessing personality using zero-shot generative AI scoring of brief open-ended text`：正式发表日期 **2026-01-30**。
- `Personality Trait Change in Adulthood`：`Current Directions in Psychological Science (2008)`。
- 正文继续区分 Big Five 研究与 MBTI 四字母标签，不把研究支持范围扩大为“标签能决定未来”。

## 5. 当前停止点

- Owner 已接受 H002 R3 V2 的重新 REVIEW 结果。
- 已规范化为正式入库文件：`H002_AI性格画像_Part4_最终图片执行包_READY_R3.zip`。
- X 部分原 H002 R2 已替换为 R3；README / INDEX / LIBRARY_MANIFEST / 整库 ZIP 已重建并 fresh read-back。
- X 库正式 R3 ZIP SHA-256：`0c754be5d94153afccc38b0be632b0d693d7e274e9d9e1a62645b96e6a9b9176`。
- 旧 R2 与阶段性 R3 候选保留在仓库外交接历史目录，不留在 X 当前层。
- 下一步是 H007 / H010 / H015 / H016 / H017 / H024 / H025 这 7 篇已重写 Part 2 的下游素材包重建。
- 不启动 live imagegen。


## 6. 仓库外持久交接资料

ChatGPT File Library：

`/comic-narrative_当前交接/2026-10-05_Part2定制重写与H002_R3候选/`

当前已保存：
- `Part2_重写_R2.zip`
- `PART2二次独立复查报告_R2.md`
- `H002_AI性格画像_Part4_最终图片执行包_READY_R3.zip`
- `H002_R3候选V2_重新REVIEW与参数对比.md`
- `H002_R3_CANDIDATE_V2_INDEPENDENT_QA.json`
- `PART2_CUSTOM_STORY_EXECUTION_AND_H002_R3_CANDIDATE_20261005.md`

该目录是本轮交接资料，不是 X部分 Owner认定执行包；H002 R3 在 Owner 批准前不得从这里自动升级为 X 库正式版本。
