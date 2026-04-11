"use client";

import { useMemo, useState } from "react";
import {
  inHouseActivityWeeks,
  inHouseSchedulePrinciples,
  scheduleDays,
  type ActivityWeek,
} from "@/data/inHouseActivitySchedule";

const DIAL_SIZE = 280;
const DIAL_CENTER = DIAL_SIZE / 2;
/** Distance from center to each week node (px) */
const NODE_RADIUS = 102;
/** Week index 0–3 → angle in degrees (0 = top, clockwise) */
function weekAngleDeg(weekIndex: number) {
  return -90 + weekIndex * 90;
}

function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    x: cx + r * Math.cos(rad),
    y: cy + r * Math.sin(rad),
  };
}

/** Arc path for the highlighted quarter-ring segment for selected week */
function describeArcSegment(
  cx: number,
  cy: number,
  outerR: number,
  innerR: number,
  startAngle: number,
  endAngle: number,
) {
  const outerStart = polarToCartesian(cx, cy, outerR, startAngle);
  const outerEnd = polarToCartesian(cx, cy, outerR, endAngle);
  const innerEnd = polarToCartesian(cx, cy, innerR, endAngle);
  const innerStart = polarToCartesian(cx, cy, innerR, startAngle);
  const largeArc = endAngle - startAngle <= 180 ? 0 : 1;
  return [
    "M",
    outerStart.x,
    outerStart.y,
    "A",
    outerR,
    outerR,
    0,
    largeArc,
    1,
    outerEnd.x,
    outerEnd.y,
    "L",
    innerEnd.x,
    innerEnd.y,
    "A",
    innerR,
    innerR,
    0,
    largeArc,
    0,
    innerStart.x,
    innerStart.y,
    "Z",
  ].join(" ");
}

function dayBlock(week: ActivityWeek, day: (typeof scheduleDays)[number]) {
  return week.days.find((d) => d.day === day);
}

export default function InHouseActivitySchedule() {
  const [activeId, setActiveId] = useState(inHouseActivityWeeks[0]!.id);
  const week = useMemo(
    () => inHouseActivityWeeks.find((w) => w.id === activeId) ?? inHouseActivityWeeks[0]!,
    [activeId],
  );
  const activeIndex = inHouseActivityWeeks.findIndex((w) => w.id === activeId);
  const safeIndex = activeIndex >= 0 ? activeIndex : 0;

  const activeStart = weekAngleDeg(safeIndex) - 42;
  const activeEnd = weekAngleDeg(safeIndex) + 42;
  const segmentPath = describeArcSegment(DIAL_CENTER, DIAL_CENTER, 118, 86, activeStart, activeEnd);

  const spokeEnd = polarToCartesian(DIAL_CENTER, DIAL_CENTER, NODE_RADIUS - 18, weekAngleDeg(safeIndex));

  return (
    <div className="mx-auto max-w-7xl px-4">
      <div className="overflow-hidden rounded-[2rem] border border-slate-200/80 bg-gradient-to-b from-slate-50 via-white to-[#f0f4fa] shadow-[0_20px_60px_-20px_rgba(7,61,122,0.25)] md:rounded-[2.25rem]">
        <div className="border-b border-slate-200/60 bg-white/70 px-6 py-8 backdrop-blur-sm md:px-10 md:py-10">
          <p className="text-center text-xs font-bold uppercase tracking-[0.28em] text-[#D5664B]">
            In-house program
          </p>
          <h2 className="mt-3 text-center text-2xl font-semibold text-slate-900 md:text-4xl">
            Weekly activity wheel
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-relaxed text-slate-600 md:text-base">
            Tap a point on the circle to choose a week—your full Mon–Fri chart appears below.
          </p>
        </div>

        <div className="relative px-4 pb-2 pt-8 md:px-8 md:pt-10">
          <div className="relative mx-auto aspect-square w-full max-w-[280px]">
            <svg
              className="pointer-events-none absolute inset-0 h-full w-full text-[#073D7A]"
              viewBox={`0 0 ${DIAL_SIZE} ${DIAL_SIZE}`}
              aria-hidden
            >
              <defs>
                <linearGradient id="dialSegmentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#073D7A" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#D5664B" stopOpacity="0.45" />
                </linearGradient>
                <linearGradient id="dialRingGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#e2e8f0" />
                  <stop offset="100%" stopColor="#f8fafc" />
                </linearGradient>
              </defs>

              <circle
                cx={DIAL_CENTER}
                cy={DIAL_CENTER}
                r={112}
                fill="url(#dialRingGrad)"
                stroke="#e2e8f0"
                strokeWidth="1"
              />
              <circle
                cx={DIAL_CENTER}
                cy={DIAL_CENTER}
                r={100}
                fill="none"
                stroke="#cbd5e1"
                strokeWidth="1"
                strokeDasharray="4 6"
                opacity="0.85"
              />

              <path
                d={segmentPath}
                fill="url(#dialSegmentGrad)"
                className="transition-all duration-500 ease-out motion-reduce:transition-none"
              />

              <line
                x1={DIAL_CENTER}
                y1={DIAL_CENTER}
                x2={spokeEnd.x}
                y2={spokeEnd.y}
                stroke="#073D7A"
                strokeWidth="2"
                strokeLinecap="round"
                opacity="0.2"
                className="transition-all duration-500 ease-out motion-reduce:transition-none"
              />
            </svg>

            <div
              className="absolute left-1/2 top-1/2 z-10 flex h-[5.25rem] w-[5.25rem] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-gradient-to-br from-[#073D7A] to-[#0a4a8f] text-white shadow-[0_12px_28px_-8px_rgba(7,61,122,0.55)] ring-4 ring-white/90 md:h-[5.75rem] md:w-[5.75rem]"
              aria-live="polite"
            >
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/75">Selected</span>
              <span className="text-xl font-bold tabular-nums md:text-2xl">{week.title}</span>
            </div>

            <div
              className="absolute inset-0 z-20"
              role="radiogroup"
              aria-label="Select program week"
            >
              {inHouseActivityWeeks.map((w, i) => {
                const deg = weekAngleDeg(i);
                const rad = (deg * Math.PI) / 180;
                const offsetPct = (NODE_RADIUS / DIAL_SIZE) * 100;
                const left = 50 + offsetPct * Math.cos(rad);
                const top = 50 + offsetPct * Math.sin(rad);
                const selected = w.id === activeId;

                return (
                  <button
                    key={w.id}
                    type="button"
                    role="radio"
                    aria-checked={selected}
                    aria-label={`${w.title}, ${w.subtitle}`}
                    onClick={() => setActiveId(w.id)}
                    className={`absolute flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border-2 text-xs font-bold shadow-md transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D5664B] focus-visible:ring-offset-2 motion-reduce:transition-none md:h-16 md:w-16 ${
                      selected
                        ? "scale-110 border-[#D5664B] bg-[#D5664B] text-white ring-4 ring-[#D5664B]/25"
                        : "border-white bg-white text-[#073D7A] hover:scale-105 hover:border-[#073D7A]/30 hover:shadow-lg"
                    }`}
                    style={{ left: `${left}%`, top: `${top}%` }}
                  >
                    <span className="leading-none">Wk</span>
                    <span className="text-sm leading-tight md:text-base">{w.id}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <p className="mt-6 text-center text-sm font-medium text-slate-500 md:mt-8">{week.subtitle}</p>
        </div>

        <div className="border-t border-slate-200/60 bg-gradient-to-b from-white/80 to-slate-50/90 px-4 py-8 md:px-8 md:py-10">
          <div
            key={week.id}
            id={`week-panel-${week.id}`}
            role="tabpanel"
            className="activity-week-panel mx-auto max-w-6xl"
          >
            <div className="mb-6 flex items-center justify-center gap-3">
              <span className="h-px flex-1 max-w-[4rem] bg-gradient-to-r from-transparent to-[#073D7A]/30" />
              <h3 className="text-center text-sm font-bold uppercase tracking-[0.2em] text-[#073D7A]">
                {week.title} · Mon–Fri chart
              </h3>
              <span className="h-px flex-1 max-w-[4rem] bg-gradient-to-l from-transparent to-[#073D7A]/30" />
            </div>

            <div className="hidden gap-4 lg:grid lg:grid-cols-5">
              {scheduleDays.map((day, dayIndex) => {
                const block = dayBlock(week, day);
                const hueShift = dayIndex * 3;
                return (
                  <div
                    key={day}
                    className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-[0_8px_30px_-12px_rgba(7,61,122,0.12)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_-14px_rgba(7,61,122,0.2)] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                  >
                    <div
                      className="relative overflow-hidden bg-gradient-to-br from-[#073D7A] via-[#0a4a8f] to-[#073D7A] px-3 py-4 text-center text-white"
                      style={{
                        backgroundImage: `linear-gradient(135deg, #073D7A 0%, hsl(210 58% ${42 + hueShift}%) 50%, #0a3566 100%)`,
                      }}
                    >
                      <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-white/10 blur-2xl" />
                      <p className="relative text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">
                        Day
                      </p>
                      <p className="relative mt-1 text-lg font-semibold leading-tight">{day}</p>
                    </div>
                    <div className="flex flex-1 flex-col gap-2.5 bg-gradient-to-b from-slate-50/50 to-white p-3.5">
                      {(block?.activities ?? []).map((line, i) => (
                        <div
                          key={`${day}-${i}`}
                          className="rounded-xl border border-slate-100 bg-white/90 px-3 py-2.5 text-xs leading-snug text-slate-700 shadow-sm ring-1 ring-slate-100/80 transition group-hover:border-[#073D7A]/10 md:text-[13px]"
                        >
                          <span className="mr-1.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#D5664B]/12 text-[10px] font-bold text-[#c4553a]">
                            {i + 1}
                          </span>
                          {line}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="grid gap-4 lg:hidden">
              {scheduleDays.map((day) => {
                const block = dayBlock(week, day);
                return (
                  <div
                    key={day}
                    className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-md"
                  >
                    <div className="bg-gradient-to-r from-[#073D7A] to-[#0a4a8f] px-4 py-3">
                      <p className="text-xs font-bold uppercase tracking-wider text-white/80">{day}</p>
                    </div>
                    <ul className="space-y-2 p-4">
                      {(block?.activities ?? []).map((line, i) => (
                        <li
                          key={`${day}-m-${i}`}
                          className="flex gap-3 rounded-xl border border-slate-100 bg-slate-50/80 px-3 py-2.5 text-sm text-slate-700"
                        >
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#D5664B]/15 text-xs font-bold text-[#b54a32]">
                            {i + 1}
                          </span>
                          <span>{line}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>

            <svg
              className="mx-auto mt-8 h-6 w-full max-w-3xl text-[#073D7A]/20"
              viewBox="0 0 800 24"
              preserveAspectRatio="none"
              aria-hidden
            >
              <path
                d="M0 12 Q 200 2, 400 12 T 800 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </div>
        </div>

        <div className="grid gap-5 border-t border-slate-200/60 bg-white/60 px-6 py-8 backdrop-blur-sm sm:grid-cols-2 md:px-10">
          {inHouseSchedulePrinciples.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-slate-200/70 bg-gradient-to-br from-white to-slate-50/80 p-5 shadow-sm"
            >
              <p className="text-xs font-bold uppercase tracking-wider text-[#D5664B]">{p.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
