"use client";

import Link from "next/link";
import { useCallback, useEffect, useId, useRef, useState } from "react";

const DELAY_MS = 4000;

const qaItems = [
  {
    q: "What is the difference between Adult Care Center and Home Care?",
    a: "Our Adult Care Center offers structured daytime support, social connection, and supervised activities in a community setting. Home Care brings trusted caregivers to your residence for personal care, companionship, and help with daily routines—ideal when someone wants to remain at home.",
  },
  {
    q: "What services does in-home care include?",
    a: "Typical support includes personal care, medication reminders, meal preparation, light housekeeping, transportation to appointments, companionship, and family updates—always matched to a written plan of care.",
  },
  {
    q: "How do we get started?",
    a: "Start with a short consultation: we learn your goals, schedule, and preferences, then recommend either daytime center enrollment or a home care plan. You can also request a tour or in-home assessment depending on which path fits best.",
  },
  {
    q: "Are caregivers screened and trained?",
    a: "Yes. Hayat emphasizes consistent staffing, background checks, orientation, and ongoing training so families feel confident about who is in the home or supporting loved ones at the center.",
  },
  {
    q: "What areas do you serve for home care?",
    a: "Coverage depends on your location and staffing availability. Contact us with your address and preferred schedule—we will confirm service area and next steps quickly.",
  },
] as const;

export default function HelpDock() {
  const titleId = useId();
  const [armed, setArmed] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const fabRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const t = window.setTimeout(() => setArmed(true), DELAY_MS);
    return () => window.clearTimeout(t);
  }, []);

  const closePanel = useCallback(() => {
    setMinimized(true);
    setExpandedId(null);
  }, []);

  const openPanel = useCallback(() => {
    setMinimized(false);
    requestAnimationFrame(() => panelRef.current?.focus());
  }, []);

  useEffect(() => {
    if (!minimized) return;
    const id = window.requestAnimationFrame(() => fabRef.current?.focus());
    return () => window.cancelAnimationFrame(id);
  }, [minimized]);

  useEffect(() => {
    if (!armed || minimized) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closePanel();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [armed, minimized, closePanel]);

  if (!armed) return null;

  return (
    <div className="help-dock-root pointer-events-none fixed inset-0 flex items-end justify-end p-4 sm:p-6">
      <div className="pointer-events-auto flex w-full max-w-md flex-col items-end gap-3">
        {!minimized && (
          <div
            ref={panelRef}
            role="dialog"
            aria-modal="false"
            aria-labelledby={titleId}
            tabIndex={-1}
            className="help-dock-panel w-full overflow-hidden rounded-2xl border border-[var(--line)] bg-white shadow-xl shadow-slate-900/10 outline-none"
          >
            <div className="flex items-start justify-between gap-3 border-b border-[var(--line)] bg-[var(--surface-soft)] px-4 py-3">
              <div>
                <p id={titleId} className="text-sm font-bold text-[var(--ink)]">
                  How can we help you?
                </p>
                <p className="mt-0.5 text-xs leading-5 text-[var(--ink-soft)]">
                  What are you looking for? Quick answers about adult care, home care, and getting started.
                </p>
              </div>
              <button
                type="button"
                onClick={closePanel}
                className="shrink-0 rounded-lg border border-[#073D7A] bg-[#073D7A] px-2.5 py-1.5 text-xs font-semibold text-white transition hover:border-[#052a52] hover:bg-[#052a52] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]"
                aria-label="Minimize help panel"
              >
                Close
              </button>
            </div>

            <div className="max-h-[min(420px,55vh)] overflow-y-auto px-2 py-2">
              <ul className="space-y-1">
                {qaItems.map((item, index) => {
                  const open = expandedId === index;
                  return (
                    <li key={item.q}>
                      <button
                        type="button"
                        onClick={() => setExpandedId(open ? null : index)}
                        aria-expanded={open}
                        className="flex w-full items-center justify-between gap-2 rounded-xl px-3 py-2.5 text-left text-sm font-semibold text-[var(--ink)] transition hover:bg-[var(--surface-soft)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]"
                      >
                        <span className="text-pretty pr-2">{item.q}</span>
                        <span
                          className={`shrink-0 text-[var(--brand-gold)] transition-transform ${open ? "rotate-180" : ""}`}
                          aria-hidden
                        >
                          ▼
                        </span>
                      </button>
                      {open && (
                        <p className="px-3 pb-3 text-sm leading-6 text-[var(--ink-soft)]">{item.a}</p>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="border-t border-[var(--line)] bg-[var(--surface-soft)] px-4 py-3">
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center rounded-full bg-[#D5664B] px-4 py-2.5 text-sm font-bold text-white transition hover:bg-[#c4553a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#073D7A]"
              >
                Talk with our team
              </Link>
            </div>
          </div>
        )}

        {minimized && (
          <button
            ref={fabRef}
            type="button"
            onClick={openPanel}
            className="help-dock-fab help-dock-fab--pulse flex h-14 w-14 items-center justify-center rounded-full border-2 border-white/30 bg-[var(--brand-navy)] text-white shadow-lg shadow-black/30 transition hover:scale-105 hover:bg-[#052a52] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]"
            aria-label="Open help and common questions"
          >
            <span className="text-xl font-bold" aria-hidden>
              ?
            </span>
          </button>
        )}
      </div>
    </div>
  );
}
