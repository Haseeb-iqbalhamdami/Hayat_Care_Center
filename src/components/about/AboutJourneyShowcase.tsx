"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./AboutJourneyShowcase.module.css";

type HighlightItem = {
  phase: string;
  title: string;
  hint: string;
  metric: string;
  image: string;
  imageAlt: string;
  body: string;
  bullets: string[];
};

const highlights: HighlightItem[] = [
  {
    phase: "Phase 01",
    title: "Listen first then map support",
    hint: "We begin with practical family goals and current care pressure points.",
    metric: "Care planning",
    image: "/images/home/gallery-comfortable-lounge.jpg",
    imageAlt: "Older adults relaxing in a comfortable community lounge",
    body: "Each recommendation starts from routine, mobility, and family bandwidth so the plan is realistic from day one.",
    bullets: [
      "Clear intake conversation with family and participant",
      "Needs are prioritized before service scheduling",
      "Home care and center care can be combined in one path",
    ],
  },
  {
    phase: "Phase 02",
    title: "Coordinate services around real life",
    hint: "Scheduling is built for weekdays, appointments, and caregiver availability.",
    metric: "Operational rhythm",
    image: "/images/home/gallery-wellness-programs.jpg",
    imageAlt: "Daily wellness activities in an adult care center",
    body: "Hayat aligns services across center attendance, home support, and transportation so families do not manage separate systems.",
    bullets: [
      "Single team communication and transparent updates",
      "Adjustments made quickly when needs change",
      "Predictable routines reduce family stress",
    ],
  },
  {
    phase: "Phase 03",
    title: "Sustain progress with ongoing updates",
    hint: "Families receive practical updates that support better decisions.",
    metric: "Long term confidence",
    image: "/images/home/gallery-compassionate-care.jpg",
    imageAlt: "Compassionate caregiver support for older adult well-being",
    body: "The focus is steady follow through, not one time setup. Care evolves as health, preferences, and schedules shift.",
    bullets: [
      "Regular status notes and handoff communication",
      "Ongoing quality checks across service lines",
      "Respectful support that protects dignity and independence",
    ],
  },
];

const AUTO_ROTATE_MS = 4300;

export default function AboutJourneyShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % highlights.length);
    }, AUTO_ROTATE_MS);

    return () => window.clearInterval(timer);
  }, []);

  const active = highlights[activeIndex];

  return (
    <section className={styles.shell}>
      <div className={styles.inner}>
        <div>
          <span className={styles.pill}>About experience</span>
          <h2 className={styles.headline}>A more connected model of care for families and participants</h2>
          <p className={styles.subline}>
            Hayat is built to keep care coherent from first conversation through daily execution. Hover or tap each phase to
            preview how the model works.
          </p>
        </div>

        <div className={styles.contentGrid}>
          <div className={styles.track}>
            {highlights.map((item, index) => {
              const activeStep = index === activeIndex;
              return (
                <button
                  key={item.phase}
                  type="button"
                  className={`${styles.stepButton} ${activeStep ? styles.stepActive : ""}`}
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                  aria-pressed={activeStep}
                >
                  <p className={styles.stepTag}>{item.phase}</p>
                  <p className={styles.stepTitle}>{item.title}</p>
                  <p className={styles.stepHint}>{item.hint}</p>
                  <span className={`${styles.stepLine} ${activeStep ? styles.stepLineActive : ""}`} />
                </button>
              );
            })}
          </div>

          <div className={styles.visual}>
            <div className={styles.visualAuraA} />
            <div className={styles.visualAuraB} />
            <div className={styles.orbit} />
            <div className={styles.orbitSmall} />

            <AnimatePresence mode="wait">
              <motion.figure
                key={active.phase}
                className={styles.imageFrame}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.52, ease: "easeOut" }}
              >
                <Image src={active.image} alt={active.imageAlt} fill priority={activeIndex === 0} className={styles.image} />
              </motion.figure>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.article
                key={active.title}
                className={styles.overlay}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.38, ease: "easeOut" }}
              >
                <p className={styles.metric}>{active.metric}</p>
                <h3 className={styles.cardTitle}>{active.title}</h3>
                <p className={styles.cardBody}>{active.body}</p>
                <ul className={styles.bulletList}>
                  {active.bullets.map((line) => (
                    <li key={line} className={styles.bulletItem}>
                      <span className={styles.bulletDot} aria-hidden />
                      {line}
                    </li>
                  ))}
                </ul>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
