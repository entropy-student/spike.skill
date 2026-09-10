# SRT Delivery

输出一个独立 UTF-8 `.srt` 文件，内容只包含标准 SRT 字幕，不混入标题、说明、Markdown 或分析文字。

```srt
1
00:00:00,000 --> 00:00:02,500
{segment_1}

2
00:00:02,500 --> 00:00:05,300
{segment_2}
```

生成规则见 `references/05_SRT_TIMING.md`。

元信息在聊天说明中单独报告：

- SRT timing source: `{DEFAULT | USER | MEASURED | ALIGNED}`
- Speaking rate: `{speaking_rate_cps}` chars/s
- Estimated / measured duration: `{duration}`
- Script source: `Best Hook + Body Continuation`
