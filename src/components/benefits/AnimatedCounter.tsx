"use client";

import { useEffect, useMemo, useRef, useState } from "react";

interface AnimatedCounterProps {
  value: string;
  className?: string;
}

/**
 * Scroll-triggered counter that animates numbers up from 0.
 * Non-numeric values (e.g. "24/7", "1:1") get a scale-pop entrance instead.
 */
export default function AnimatedCounter({ value, className = "" }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [displayed, setDisplayed] = useState<string | null>(null);
  const hasAnimated = useRef(false);

  const numericTarget = useMemo(() => {
    const m = value.match(/^(\d+)$/);
    return m ? parseInt(m[1], 10) : null;
  }, [value]);

  useEffect(() => {
    const el = ref.current;
    if (!el || hasAnimated.current) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimated.current) return;
        hasAnimated.current = true;
        observer.disconnect();

        if (prefersReducedMotion) {
          setDisplayed(value);
          return;
        }

        if (numericTarget !== null) {
          const duration = 1200;
          const start = performance.now();

          const tick = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            // ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(eased * numericTarget);
            setDisplayed(String(current));
            if (progress < 1) requestAnimationFrame(tick);
          };

          requestAnimationFrame(tick);
        } else {
          // Non-numeric: scale-pop entrance
          el.classList.add("benefit-stat-pop");
          setDisplayed(value);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, numericTarget]);

  return (
    <span ref={ref} className={className}>
      {displayed ?? "\u00A0"}
    </span>
  );
}
