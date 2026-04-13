"use client";

import Link from "next/link";
import { Bot, MessageCircle, Sparkles, X } from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

type PromptState = {
  message: string;
  key: number;
};

type AssistantMode = "idle" | "walkthrough" | "compare" | "how";

const FEEDBACK_HINTS = ["I can explain this in 20 seconds.", "Want a quick summary?", "Need guidance here?"] as const;

const WALKTHROUGH_STEPS = [
  {
    title: "Hero section",
    text: "This top section quickly explains the 3 core services and lets families contact your team immediately.",
    targetId: "home",
  },
  {
    title: "Community stats",
    text: "These numbers communicate trust fast: care paths, 24/7 support, and personalized planning.",
    targetId: "adult-day-center",
  },
  {
    title: "Our verticals",
    text: "This section compares Adult Care, Home Care, and Transportation side by side.",
    targetId: "our-verticals",
  },
] as const;

function getClickableLabel(target: EventTarget | null) {
  if (!(target instanceof Element)) return "this feature";
  const clickable = target.closest("a,button,[role='button'],summary,input,select,textarea");
  if (!clickable) return "this feature";

  const aria = clickable.getAttribute("aria-label");
  const text = clickable.textContent?.trim().replace(/\s+/g, " ");
  const fallback =
    clickable.getAttribute("name") ??
    clickable.getAttribute("title") ??
    clickable.getAttribute("placeholder") ??
    clickable.getAttribute("href");

  const label = aria || text || fallback || "this feature";
  return label.length > 56 ? `${label.slice(0, 53)}...` : label;
}

export default function SiteAIAssistant() {
  const rootRef = useRef<HTMLDivElement>(null);
  const hidePromptTimeoutRef = useRef<number | null>(null);
  const clickCooldownRef = useRef(0);

  const [armed, setArmed] = useState(false);
  const [panelOpen, setPanelOpen] = useState(false);
  const [prompt, setPrompt] = useState<PromptState | null>(null);
  const [assistantMode, setAssistantMode] = useState<AssistantMode>("idle");
  const [walkthroughIndex, setWalkthroughIndex] = useState(0);
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const timeout = window.setTimeout(() => setArmed(true), 1500);
    return () => window.clearTimeout(timeout);
  }, []);

  const clearPromptTimer = useCallback(() => {
    if (hidePromptTimeoutRef.current) {
      window.clearTimeout(hidePromptTimeoutRef.current);
      hidePromptTimeoutRef.current = null;
    }
  }, []);

  const pushPrompt = useCallback(
    (message: string) => {
      clearPromptTimer();
      setPrompt({ message, key: Date.now() });
      hidePromptTimeoutRef.current = window.setTimeout(() => setPrompt(null), 5600);
    },
    [clearPromptTimer],
  );

  useEffect(() => {
    if (!armed) return;

    const onMouseMove = (event: MouseEvent) => {
      const x = event.clientX / Math.max(window.innerWidth, 1);
      const y = event.clientY / Math.max(window.innerHeight, 1);
      setMouse({ x, y });
    };

    const onScroll = () => {
      setScrollY(window.scrollY);
    };

    const onAnyClick = (event: MouseEvent) => {
      const inAssistant = rootRef.current?.contains(event.target as Node);
      if (inAssistant) return;
      if (!(event.target instanceof Element)) return;
      const isClickable = event.target.closest("a,button,[role='button'],summary,input,select,textarea");
      if (!isClickable) return;

      const now = Date.now();
      if (now - clickCooldownRef.current < 1800) return;
      clickCooldownRef.current = now;

      const label = getClickableLabel(event.target);
      const suffix = FEEDBACK_HINTS[Math.floor(Math.random() * FEEDBACK_HINTS.length)];
      pushPrompt(`I noticed "${label}". ${suffix}`);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("click", onAnyClick, true);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("click", onAnyClick, true);
    };
  }, [armed, pushPrompt]);

  useEffect(() => {
    return () => clearPromptTimer();
  }, [clearPromptTimer]);

  const scrollToSection = useCallback((targetId: string) => {
    const section = document.getElementById(targetId);
    if (!section) return;
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const orbTransform = useMemo(() => {
    const moveX = (mouse.x - 0.5) * 10;
    const moveY = (mouse.y - 0.5) * 10;
    const bob = Math.sin(scrollY * 0.02) * 2.5;
    return `translate3d(${moveX.toFixed(2)}px, ${(moveY + bob).toFixed(2)}px, 0)`;
  }, [mouse.x, mouse.y, scrollY]);

  const pupilStyle = useMemo(() => {
    const x = (mouse.x - 0.5) * 8;
    const y = (mouse.y - 0.5) * 8;
    return { transform: `translate(${x.toFixed(2)}px, ${y.toFixed(2)}px)` };
  }, [mouse.x, mouse.y]);

  if (!armed) return null;

  return (
    <div
      ref={rootRef}
      className="help-dock-root pointer-events-none fixed inset-0 z-[9999] flex items-end justify-end p-4 sm:p-6"
    >
      <div className="relative flex items-end justify-end">
        {prompt && (
          <div className="pointer-events-auto mr-3 w-[min(88vw,336px)] rounded-2xl border border-white/20 bg-[#082449]/95 p-3 text-white shadow-2xl backdrop-blur-md">
            <div className="flex items-start justify-between gap-2">
              <p key={prompt.key} className="text-xs leading-5 text-white/90">
                {prompt.message}
              </p>
              <button
                type="button"
                onClick={() => setPrompt(null)}
                className="rounded-md p-1 text-white/70 transition hover:bg-white/10 hover:text-white"
                aria-label="Dismiss AI hint"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="mt-2.5 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => {
                  setPanelOpen(true);
                  setAssistantMode("how");
                  setPrompt(null);
                }}
                className="rounded-full bg-[#D5664B] px-3 py-1.5 text-[11px] font-semibold text-white transition hover:bg-[#c4553a]"
              >
                Tell me more
              </button>
              <button
                type="button"
                onClick={() => {
                  setPanelOpen(true);
                  setAssistantMode("idle");
                }}
                className="rounded-full border border-white/25 px-3 py-1.5 text-[11px] font-semibold text-white/95 transition hover:bg-white/10"
              >
                Open AI
              </button>
              <button
                type="button"
                onClick={() => setPrompt(null)}
                className="rounded-full border border-white/20 px-3 py-1.5 text-[11px] font-semibold text-white/75 transition hover:bg-white/10"
              >
                Not now
              </button>
            </div>
          </div>
        )}

        {panelOpen && (
          <div className="pointer-events-auto absolute bottom-[84px] right-0 w-[min(90vw,340px)] rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl">
            <div className="flex items-center justify-between gap-2">
              <p className="text-sm font-bold text-slate-900">Hayat AI Assistant</p>
              <button
                type="button"
                onClick={() => setPanelOpen(false)}
                className="rounded-md p-1 text-slate-500 transition hover:bg-slate-100 hover:text-slate-800"
                aria-label="Close assistant panel"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <p className="mt-1.5 text-xs leading-5 text-slate-600">I can explain sections while you browse. Choose one:</p>
            <div className="mt-3 grid gap-2">
              <button
                type="button"
                onClick={() => {
                  const firstIndex = 0;
                  setAssistantMode("walkthrough");
                  setWalkthroughIndex(firstIndex);
                  scrollToSection(WALKTHROUGH_STEPS[firstIndex].targetId);
                }}
                className="rounded-xl border border-slate-200 px-3 py-2 text-left text-xs font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Quick page walkthrough
              </button>
              <button
                type="button"
                onClick={() => {
                  setAssistantMode("compare");
                  scrollToSection("our-verticals");
                }}
                className="rounded-xl border border-slate-200 px-3 py-2 text-left text-xs font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Compare our services
              </button>
              <button
                type="button"
                onClick={() => setAssistantMode("how")}
                className="rounded-xl border border-slate-200 px-3 py-2 text-left text-xs font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                How this AI works
              </button>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-[#D5664B] px-3 py-2 text-xs font-bold text-white transition hover:bg-[#c4553a]"
              >
                Talk to our team
              </Link>
            </div>

            {assistantMode === "walkthrough" && (
              <div className="mt-3 rounded-xl border border-[#073D7A]/15 bg-[#073D7A]/5 p-3">
                <p className="text-xs font-bold text-[#073D7A]">
                  Step {walkthroughIndex + 1}: {WALKTHROUGH_STEPS[walkthroughIndex].title}
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-700">{WALKTHROUGH_STEPS[walkthroughIndex].text}</p>
                <div className="mt-2.5 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      const next = Math.max(0, walkthroughIndex - 1);
                      setWalkthroughIndex(next);
                      scrollToSection(WALKTHROUGH_STEPS[next].targetId);
                    }}
                    className="rounded-full border border-slate-300 px-3 py-1 text-[11px] font-semibold text-slate-700 transition hover:bg-white"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      const next = Math.min(WALKTHROUGH_STEPS.length - 1, walkthroughIndex + 1);
                      setWalkthroughIndex(next);
                      scrollToSection(WALKTHROUGH_STEPS[next].targetId);
                    }}
                    className="rounded-full bg-[#073D7A] px-3 py-1 text-[11px] font-semibold text-white transition hover:bg-[#052a52]"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}

            {assistantMode === "compare" && (
              <div className="mt-3 rounded-xl border border-[#D5664B]/25 bg-[#D5664B]/10 p-3">
                <p className="text-xs font-bold text-[#8d3a25]">Service match guide</p>
                <p className="mt-1 text-xs leading-5 text-slate-700">
                  Adult Care: daytime center routine. Home Care: support at home. Transportation: scheduled non-medical rides.
                </p>
              </div>
            )}

            {assistantMode === "how" && (
              <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-3">
                <p className="text-xs font-bold text-slate-800">How this AI works</p>
                <p className="mt-1 text-xs leading-5 text-slate-600">
                  It tracks clicks on important buttons/links, shows a quick helper prompt, and can walk you to key sections.
                </p>
              </div>
            )}
          </div>
        )}

        <button
          type="button"
          onClick={() => setPanelOpen((p) => !p)}
          className="pointer-events-auto relative flex h-[72px] w-[72px] items-center justify-center rounded-full border border-white/35 bg-gradient-to-br from-[#073D7A] via-[#0b4c90] to-[#D5664B] text-white shadow-[0_14px_36px_-14px_rgba(0,0,0,0.7)] transition hover:scale-[1.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          style={{ transform: orbTransform }}
          aria-label="Open AI assistant"
        >
          <span className="absolute inset-1 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.35),transparent_55%)]" />
          <span className="absolute inset-0 rounded-full border border-white/20" aria-hidden />
          <span className="relative flex items-center gap-1.5">
            <span className="flex items-center gap-1">
              <span className="relative h-3.5 w-3.5 rounded-full bg-white">
                <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#073D7A]" style={pupilStyle} />
              </span>
              <span className="relative h-3.5 w-3.5 rounded-full bg-white">
                <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#073D7A]" style={pupilStyle} />
              </span>
            </span>
            <Bot className="h-4 w-4 opacity-90" />
          </span>
          <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#D5664B] px-1 text-[10px] font-bold text-white">
            {panelOpen ? <MessageCircle className="h-3 w-3" /> : <Sparkles className="h-3 w-3" />}
          </span>
        </button>
      </div>
    </div>
  );
}
