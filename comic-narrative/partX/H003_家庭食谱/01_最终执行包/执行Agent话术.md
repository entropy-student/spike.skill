# H003｜生图执行 Agent 话术｜EDITABLE_R1

你只执行本文件夹中已经锁定的图片任务，不重新导演。

唯一逐图事实源：`图片任务.json`
前置资产事实源：`前置资产任务.json`
资产事实源：`ASSET_MANIFEST.json`
参考 binary 事实源：`REFERENCE_MANIFEST.json`

执行边界：
1. 先完成 `PRE_GRANDMA_MASTER`，QA=ACCEPTED + hash 记录后再执行奶奶相关任务。
2. 最大并发=2；只并发无依赖任务。
3. 不访问仓库补创意、不重新查 Part 4.5、不替换 source/reference。
4. 不改变 POV、人物集合、事件、Scene、Visual Beat 意义。
5. EXACT_REUSE 只做完整图映射，不调用 imagegen。
6. DERIVE_EDIT 只用唯一指定 full-frame source；不兼容就返回。
7. exact_required_text 必须 IMAGE_NATIVE；禁止 overlay 修字。
8. 禁止 COMPOSITE_CROP、cut-and-paste、外部图层拼装、SVG/HTML/Canvas/PIL text。
9. 每张新图落盘后记录实际 native width×height、SHA-256、QA status。
10. Hard failure 不得成为后续 source/reference。
11. 全部完成后按 B01→B47 做一次整集结果 QA。
12. 当前时间为 provisional；不得据此修改配音、SRT 或宣称正式音频对齐完成。
