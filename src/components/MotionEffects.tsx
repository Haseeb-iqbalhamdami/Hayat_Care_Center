"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function MotionEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    const finePointerMedia = window.matchMedia("(pointer: fine)");
    const reducedMotionMedia = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    const updateCursorMode = () => {
      const customCursorEnabled =
        finePointerMedia.matches && !reducedMotionMedia.matches;

      if (customCursorEnabled) {
        body.dataset.cursor = "custom";
        return;
      }

      delete body.dataset.cursor;
      delete body.dataset.pointerActive;
      delete body.dataset.pointerDown;
    };

    const updateScrollProgress = () => {
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;

      root.style.setProperty("--scroll-progress", progress.toFixed(4));
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (body.dataset.cursor !== "custom") {
        return;
      }

      root.style.setProperty("--cursor-x", `${event.clientX}px`);
      root.style.setProperty("--cursor-y", `${event.clientY}px`);
      body.dataset.pointerActive = "true";
    };

    const hidePointer = () => {
      delete body.dataset.pointerActive;
      delete body.dataset.pointerDown;
    };

    const handlePointerDown = () => {
      if (body.dataset.cursor === "custom") {
        body.dataset.pointerDown = "true";
      }
    };

    const handlePointerUp = () => {
      delete body.dataset.pointerDown;
    };

    updateCursorMode();
    updateScrollProgress();

    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });
    window.addEventListener("pointerdown", handlePointerDown, {
      passive: true,
    });
    window.addEventListener("pointerup", handlePointerUp, {
      passive: true,
    });
    window.addEventListener("scroll", updateScrollProgress, {
      passive: true,
    });
    window.addEventListener("resize", updateScrollProgress, {
      passive: true,
    });
    window.addEventListener("blur", hidePointer);
    finePointerMedia.addEventListener("change", updateCursorMode);
    reducedMotionMedia.addEventListener("change", updateCursorMode);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("scroll", updateScrollProgress);
      window.removeEventListener("resize", updateScrollProgress);
      window.removeEventListener("blur", hidePointer);
      finePointerMedia.removeEventListener("change", updateCursorMode);
      reducedMotionMedia.removeEventListener("change", updateCursorMode);
    };
  }, []);

  useEffect(() => {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;

    document.documentElement.style.setProperty(
      "--scroll-progress",
      progress.toFixed(4),
    );
  }, [pathname]);

  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion) {
      elements.forEach((element) => {
        element.dataset.revealed = "true";
      });

      return;
    }

    const timeouts = new Set<number>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          const element = entry.target as HTMLElement;
          const delay = Number(element.dataset.revealDelay ?? "0");

          observer.unobserve(element);

          const timeoutId = window.setTimeout(() => {
            element.dataset.revealed = "true";
            timeouts.delete(timeoutId);
          }, delay);

          timeouts.add(timeoutId);
        });
      },
      {
        threshold: 0.16,
        rootMargin: "0px 0px -12% 0px",
      },
    );

    elements.forEach((element) => {
      delete element.dataset.revealed;
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
      timeouts.forEach((timeoutId) => window.clearTimeout(timeoutId));
    };
  }, [pathname]);

  useEffect(() => {
    const customCursorEnabled =
      window.matchMedia("(pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!customCursorEnabled) {
      return;
    }

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-tilt]"),
    );
    const cleanups: Array<() => void> = [];

    elements.forEach((element) => {
      const resetTilt = () => {
        element.style.setProperty("--tilt-rotate-x", "0deg");
        element.style.setProperty("--tilt-rotate-y", "0deg");
        element.style.setProperty("--spotlight-x", "50%");
        element.style.setProperty("--spotlight-y", "50%");
      };

      const handlePointerMove = (event: PointerEvent) => {
        const rect = element.getBoundingClientRect();
        const px = (event.clientX - rect.left) / rect.width;
        const py = (event.clientY - rect.top) / rect.height;
        const rotateX = (0.5 - py) * 9;
        const rotateY = (px - 0.5) * 11;

        element.style.setProperty("--tilt-rotate-x", `${rotateX.toFixed(2)}deg`);
        element.style.setProperty("--tilt-rotate-y", `${rotateY.toFixed(2)}deg`);
        element.style.setProperty("--spotlight-x", `${(px * 100).toFixed(2)}%`);
        element.style.setProperty("--spotlight-y", `${(py * 100).toFixed(2)}%`);
      };

      resetTilt();

      element.addEventListener("pointermove", handlePointerMove);
      element.addEventListener("pointerleave", resetTilt);
      element.addEventListener("pointercancel", resetTilt);

      cleanups.push(() => {
        element.removeEventListener("pointermove", handlePointerMove);
        element.removeEventListener("pointerleave", resetTilt);
        element.removeEventListener("pointercancel", resetTilt);
      });
    });

    return () => {
      cleanups.forEach((cleanup) => cleanup());
    };
  }, [pathname]);

  return (
    <>
      <div aria-hidden className="scroll-progress" />
      <div aria-hidden className="cursor-layer">
        <span className="cursor-aura" />
        <span className="cursor-core" />
      </div>
    </>
  );
}
