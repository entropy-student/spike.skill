import React from "react";
import {
  AbsoluteFill,
  Composition,
  Sequence,
  registerRoot,
} from "remotion";
import {TitleCard} from "@/remotion/scenes/title-card";
import {ComparisonTable} from "@/remotion/scenes/comparison-table";
import {FeatureList} from "@/remotion/scenes/feature-list";

const FPS = 30;
const S1 = 88;   // 00:03:19.792 -> 00:03:22.708
const S2 = 206;  // 00:03:22.708 -> 00:03:29.583
const S3 = 288;  // 00:03:29.583 -> 00:03:39.167
const S4 = 288;  // 00:03:39.167 -> 00:03:48.750
const TOTAL = S1 + S2 + S3 + S4; // 870f = 29.0s

const ACCENT = "#E8B86D";

const Subtitle: React.FC<{children: React.ReactNode}> = ({children}) => (
  <div
    style={{
      position: "absolute",
      left: 150,
      right: 150,
      bottom: 46,
      textAlign: "center",
      color: "rgba(255,255,255,0.92)",
      fontFamily: "Inter, Noto Sans CJK SC, Microsoft YaHei, sans-serif",
      fontSize: 34,
      fontWeight: 600,
      lineHeight: 1.35,
      textShadow: "0 2px 18px rgba(0,0,0,0.7)",
      zIndex: 20,
    }}
  >
    {children}
  </div>
);

const Subtitles: React.FC = () => {
  const cues = [
    [0, 88, "不过，事情也不能只往好的方向说。"],
    [88, 194, "宠物用品母婴化，不一定就代表消费升级，"],
    [194, 294, "它也可能变成商家制造焦虑的新办法。"],
    [294, 438, "普通清洁被包装成“专宠专用”，日常营养被说成复杂功能，"],
    [438, 582, "效果并不确定，却被暗示成健康承诺，最后价格也被抬高。"],
    [582, 732, "所以越像母婴用品，越需要透明、可验证的标准。真正该看的，"],
    [732, 870, "应该是成分、适用对象、生产资质、检测依据和售后责任。"],
  ] as const;
  return (
    <>
      {cues.map(([from, to, text]) => (
        <Sequence key={`${from}-${text}`} from={from} durationInFrames={to - from} layout="none">
          <Subtitle>{text}</Subtitle>
        </Sequence>
      ))}
    </>
  );
};

const Film: React.FC = () => (
  <AbsoluteFill style={{backgroundColor: "#080810"}}>
    <Sequence from={0} durationInFrames={S1}>
      <TitleCard
        eyebrow="观点转折"
        title={"事情不能只往\n好的方向说"}
        subtitle="宠物用品母婴化，也有另一面"
        accentColor={ACCENT}
        theme="dark"
        speed={1.05}
      />
    </Sequence>

    <Sequence from={S1} durationInFrames={S2}>
      <ComparisonTable
        title="母婴化 ≠ 自动等于消费升级"
        columns={["消费升级", "焦虑营销"]}
        rows={[
          {label: "宠物用品母婴化", cells: ["不一定", "也可能"]},
          {label: "普通清洁", cells: ["正常需求", "“专宠专用”"]},
          {label: "日常营养", cells: ["基础照护", "复杂功能"]},
          {label: "健康效果", cells: ["需要证据", "暗示承诺"]},
        ]}
        highlightColumn={1}
        highlightLabel="需要警惕"
        accentColor="#F59E0B"
        theme="dark"
        startAtSeconds={0.45}
        rowStaggerSeconds={0.34}
        speed={0.82}
      />
    </Sequence>

    <Sequence from={S1 + S2} durationInFrames={S3}>
      <FeatureList
        eyebrow="风险路径"
        title="焦虑是怎么被制造出来的？"
        items={[
          "普通清洁被包装成“专宠专用”",
          "日常营养被说成复杂功能",
          "效果并不确定，却被暗示成健康承诺",
          "最后价格也被抬高",
        ]}
        accentColor="#F59E0B"
        theme="dark"
        speed={0.72}
      />
    </Sequence>

    <Sequence from={S1 + S2 + S3} durationInFrames={S4}>
      <FeatureList
        eyebrow="真正该看的"
        title="透明、可验证的标准"
        items={[
          "成分",
          "适用对象",
          "生产资质",
          "检测依据",
          "售后责任",
        ]}
        accentColor="#60A5FA"
        theme="dark"
        speed={0.7}
      />
    </Sequence>

    <Subtitles />
  </AbsoluteFill>
);

const Root: React.FC = () => (
  <Composition
    id="SrtSemanticReuse"
    component={Film}
    durationInFrames={TOTAL}
    fps={FPS}
    width={1920}
    height={1080}
  />
);

registerRoot(Root);
