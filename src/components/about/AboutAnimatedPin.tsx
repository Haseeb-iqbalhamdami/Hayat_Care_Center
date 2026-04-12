"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionTemplate, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import styles from "./AboutAnimatedPin.module.css";

export default function AboutAnimatedPin() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 88%", "end 30%"],
  });

  const pinY = useTransform(scrollYProgress, [0, 0.55, 1], [150, 0, -24]);
  const pinZ = useTransform(scrollYProgress, [0, 0.55, 1], [-290, 0, 26]);
  const pinRotateX = useTransform(scrollYProgress, [0, 0.55, 1], [42, 0, -6]);
  const pinScale = useTransform(scrollYProgress, [0, 0.55, 1], [0.78, 1, 1.03]);
  const pinOpacity = useTransform(scrollYProgress, [0, 0.35, 0.6, 1], [0.35, 0.78, 1, 1]);

  const glowScale = useTransform(scrollYProgress, [0, 0.55, 1], [0.78, 1, 1.08]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.45, 1], [0.18, 0.32, 0.42]);

  const pinTransform = useMotionTemplate`translate3d(0px, ${pinY}px, ${pinZ}px) rotateX(${pinRotateX}deg) scale(${pinScale})`;

  return (
    <section ref={sectionRef} className={styles.shell}>
      <div className={styles.grid}>
        <div>
          <p className={styles.eyebrow}>3D Care Pin</p>
          <h2 className={styles.heading}>A live pin view of how our care coordination stays connected</h2>
          <p className={styles.body}>
            This pin now animates on scroll. It starts deep on the Z axis and rises into the Y plane as the section enters
            view, mirroring a modern 3D reveal motion.
          </p>

          <ul className={styles.list}>
            <li>Single care coordination point for families</li>
            <li>Same day communication when plans change</li>
            <li>Flexible service path between center and home care</li>
          </ul>

          <div className={styles.actions}>
            <Link href="/contact" className="inline-flex rounded-full bg-[var(--brand-navy)] px-6 py-3 text-sm font-bold text-white">
              Talk With Our Team
            </Link>
            <Link
              href="/resources/blog"
              className="inline-flex rounded-full bg-[var(--brand-orange)] px-6 py-3 text-sm font-bold text-white"
            >
              Read Family Guides
            </Link>
          </div>
        </div>

        <div className={styles.stage}>
          <motion.div className={styles.pinEntry} style={{ transform: pinTransform, opacity: pinOpacity }}>
            <motion.div
              className={styles.pinWrap}
              animate={prefersReducedMotion ? undefined : { y: [0, -8, 0] }}
              transition={prefersReducedMotion ? undefined : { duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              <motion.span className={styles.glow} style={{ scale: glowScale, opacity: glowOpacity }} aria-hidden />

              <article className={styles.card}>
                <p className={styles.livePill}>Live family update</p>
                <h3 className={styles.cardTitle}>Care Coordination Pin</h3>
                <p className={styles.cardBody}>
                  A single view of daily routines, support status, and family communication, so decisions stay clear and
                  timely.
                </p>

                <div className={styles.media}>
                  <Image
                    src="/images/home/gallery-reception.jpg"
                    alt="Family speaking with care coordinator at reception"
                    fill
                    className={styles.image}
                    sizes="(min-width: 1024px) 380px, 90vw"
                  />
                </div>

                <div className={styles.metrics}>
                  <div>
                    <span>Response</span>
                    <strong>Same day</strong>
                  </div>
                  <div>
                    <span>Care paths</span>
                    <strong>2 connected</strong>
                  </div>
                  <div>
                    <span>Plan reviews</span>
                    <strong>Ongoing</strong>
                  </div>
                </div>
              </article>

              <span className={styles.stem} aria-hidden />
              <span className={styles.core} aria-hidden />
              <span className={styles.ringOne} aria-hidden />
              <span className={styles.ringTwo} aria-hidden />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
