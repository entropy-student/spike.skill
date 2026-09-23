#!/usr/bin/env python3
"""Deterministic Story Showrunner runtime timeline resolver.

Consumes locked Speech Units, real normalized TTS durations, and durable visual
timing bindings. Emits final subtitle/timeline/shot-timeline artifacts without
changing creative meaning.
"""

from __future__ import annotations

import argparse
import csv
import json
from pathlib import Path
from typing import Any


def _load_json(path: Path) -> Any:
    return json.loads(path.read_text(encoding="utf-8"))


def _duration_map(payload: Any) -> dict[str, float]:
    if isinstance(payload, dict) and all(
        isinstance(k, str) and isinstance(v, (int, float)) for k, v in payload.items()
    ):
        return {k: float(v) for k, v in payload.items()}

    rows = None
    if isinstance(payload, dict):
        for key in ("units", "rows", "results"):
            if isinstance(payload.get(key), list):
                rows = payload[key]
                break
    elif isinstance(payload, list):
        rows = payload

    if rows is None:
        raise ValueError("actual durations must be an id->seconds object or a row list")

    result: dict[str, float] = {}
    for row in rows:
        if not isinstance(row, dict):
            continue
        sid = row.get("speech_unit_id")
        duration = None
        for key in (
            "actual_normalized_duration_sec",
            "normalized_duration_sec",
            "actual_duration_sec",
            "duration_sec",
            "actual_duration",
        ):
            if isinstance(row.get(key), (int, float)):
                duration = float(row[key])
                break
        if sid and duration is not None:
            result[str(sid)] = duration

    if not result:
        raise ValueError("no speech_unit_id + actual duration pairs found")
    return result


def _srt_time(seconds: float) -> str:
    total_ms = max(0, round(seconds * 1000))
    hours, rem = divmod(total_ms, 3_600_000)
    minutes, rem = divmod(rem, 60_000)
    secs, ms = divmod(rem, 1000)
    return f"{hours:02d}:{minutes:02d}:{secs:02d},{ms:03d}"


def _resolve_anchor(anchor: dict[str, Any], by_id: dict[str, dict[str, Any]]) -> float:
    sid = anchor["speech_unit_id"]
    if sid not in by_id:
        raise ValueError(f"anchor references unknown speech unit: {sid}")
    edge_map = {
        "START": "final_start",
        "SPEECH_END": "final_speech_end",
        "WINDOW_END": "final_window_end",
    }
    edge = anchor["edge"]
    if edge not in edge_map:
        raise ValueError(f"unsupported anchor edge: {edge}")
    return float(by_id[sid][edge_map[edge]]) + float(anchor.get("offset_ms", 0)) / 1000.0


def resolve(
    speech_units_payload: dict[str, Any],
    actual_durations_payload: Any,
    bindings_payload: dict[str, Any],
) -> tuple[dict[str, Any], list[dict[str, Any]], dict[str, Any]]:
    units = speech_units_payload.get("units")
    bindings = bindings_payload.get("bindings")
    if not isinstance(units, list) or not units:
        raise ValueError("speech units payload has no units")
    if not isinstance(bindings, list) or not bindings:
        raise ValueError("bindings payload has no bindings")

    actual = _duration_map(actual_durations_payload)
    resolved_units: list[dict[str, Any]] = []
    by_id: dict[str, dict[str, Any]] = {}
    cursor = 0.0
    drift_ids: list[str] = []

    for unit in units:
        sid = unit["speech_unit_id"]
        planned = float(unit.get("allocated_window_duration", 0))
        pause = float(unit.get("authored_pause_after", 0))
        tts_required = bool(unit.get("tts_required", True))

        if tts_required:
            if sid not in actual:
                raise ValueError(f"missing actual TTS duration for {sid}")
            actual_speech = float(actual[sid])
        else:
            actual_speech = 0.0

        final_start = cursor
        final_speech_end = final_start + actual_speech
        final_window_end = final_speech_end + pause
        cursor = final_window_end

        planned_speech = max(0.0, planned - pause)
        extra_speed_if_forced = (
            actual_speech / planned_speech
            if tts_required and planned_speech > 0
            else 1.0
        )
        profile_drift = bool(tts_required and extra_speed_if_forced > 1.05)
        if profile_drift:
            drift_ids.append(sid)

        row = {
            "speech_unit_id": sid,
            "text": unit.get("text", ""),
            "tts_required": tts_required,
            "lock_class": unit.get("lock_class"),
            "planned_window_duration": planned,
            "actual_duration": round(actual_speech, 6),
            "final_start": round(final_start, 6),
            "final_speech_end": round(final_speech_end, 6),
            "resolved_pause_after": round(pause, 6),
            "final_window_end": round(final_window_end, 6),
            "delta_vs_planned_ms": round((final_window_end - final_start - planned) * 1000),
            "required_extra_speed_if_forced_to_plan": round(extra_speed_if_forced, 6),
            "profile_drift": profile_drift,
            "repair_level_used": "LEVEL_1_ACCEPT_ACTUAL_DURATION",
        }
        resolved_units.append(row)
        by_id[sid] = row

    shot_rows: list[dict[str, Any]] = []
    seen_beats: set[str] = set()
    for binding in bindings:
        beat_id = binding["visual_beat_id"]
        if beat_id in seen_beats:
            raise ValueError(f"duplicate visual beat binding: {beat_id}")
        seen_beats.add(beat_id)

        start = _resolve_anchor(binding["start_anchor"], by_id)
        end = _resolve_anchor(binding["end_anchor"], by_id)
        if end <= start:
            raise ValueError(f"non-positive resolved window for {beat_id}")

        planned_start = binding.get("planned_start")
        planned_ref = float(planned_start) if isinstance(planned_start, (int, float)) else start

        shot_rows.append({
            "visual_beat_id": beat_id,
            "speech_unit_id": binding["speech_unit_id"],
            "final_start": round(start, 6),
            "final_end": round(end, 6),
            "timing_source": "RESOLVED_RUNTIME_TIMELINE",
            "delta_vs_planned_ms": round((start - planned_ref) * 1000),
            "repair_level_used": "LEVEL_1_ACCEPT_ACTUAL_DURATION",
            "timing_flex": binding.get("timing_flex", "ELASTIC"),
            "planned_end": binding.get("planned_end"),
        })

    expected_beats = {u.get("visual_beat_id") for u in units if u.get("visual_beat_id")}
    if seen_beats != expected_beats:
        missing = sorted(expected_beats - seen_beats)
        extra = sorted(seen_beats - expected_beats)
        raise ValueError(f"binding coverage mismatch missing={missing} extra={extra}")

    final_timeline = {
        "artifact": "FINAL_TIMELINE",
        "timing_source": "RESOLVED_RUNTIME_TIMELINE",
        "unit_count": len(resolved_units),
        "final_total_duration_sec": round(cursor, 6),
        "units": resolved_units,
    }
    report = {
        "artifact": "TIMELINE_RESOLUTION_REPORT",
        "result": "PASS",
        "unit_count": len(resolved_units),
        "visual_beat_count": len(shot_rows),
        "planned_total_duration_sec": round(
            sum(float(u.get("allocated_window_duration", 0)) for u in units), 6
        ),
        "final_total_duration_sec": round(cursor, 6),
        "profile_drift_ids": drift_ids,
        "profile_drift_role": "DIAGNOSTIC_UNLESS_LOCKED_CONSTRAINT_INFEASIBLE",
        "creative_fields_changed": False,
    }
    return final_timeline, shot_rows, report


def write_outputs(
    out_dir: Path,
    final_timeline: dict[str, Any],
    shot_rows: list[dict[str, Any]],
    report: dict[str, Any],
) -> None:
    out_dir.mkdir(parents=True, exist_ok=True)
    (out_dir / "FINAL_TIMELINE.json").write_text(
        json.dumps(final_timeline, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )
    (out_dir / "TIMELINE_RESOLUTION_REPORT.json").write_text(
        json.dumps(report, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )

    with (out_dir / "FINAL_SHOT_TIMELINE.csv").open(
        "w", encoding="utf-8-sig", newline=""
    ) as fh:
        fields = [
            "visual_beat_id", "speech_unit_id", "final_start", "final_end",
            "timing_source", "delta_vs_planned_ms", "repair_level_used",
            "timing_flex", "planned_end",
        ]
        writer = csv.DictWriter(fh, fieldnames=fields)
        writer.writeheader()
        writer.writerows(shot_rows)

    srt_parts: list[str] = []
    for index, unit in enumerate(final_timeline["units"], start=1):
        srt_parts.extend([
            str(index),
            f"{_srt_time(unit['final_start'])} --> {_srt_time(unit['final_window_end'])}",
            str(unit.get("text", "")),
            "",
        ])
    (out_dir / "FINAL_SUBTITLES.srt").write_text(
        "\n".join(srt_parts), encoding="utf-8"
    )


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--speech-units", required=True, type=Path)
    parser.add_argument("--actual-durations", required=True, type=Path)
    parser.add_argument("--bindings", required=True, type=Path)
    parser.add_argument("--out-dir", required=True, type=Path)
    args = parser.parse_args()

    final_timeline, shot_rows, report = resolve(
        _load_json(args.speech_units),
        _load_json(args.actual_durations),
        _load_json(args.bindings),
    )
    write_outputs(args.out_dir, final_timeline, shot_rows, report)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
