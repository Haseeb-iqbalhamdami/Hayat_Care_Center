"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type JourneyStep = {
  title: string;
  detail: string;
  image: string;
  imageAlt: string;
  rightTitle: string;
  rightDetail: string;
};

const journeySteps: JourneyStep[] = [
  {
    title: "Home assessment and routine mapping",
    detail:
      "We review mobility, safety, medications, and daily rhythm inside the home so support starts from real-life needs.",
    image: "/images/seniors/senior-home-care-01.jpg",
    imageAlt: "Caregiver assisting an older adult during an in-home support visit",
    rightTitle: "A care plan built around the home environment",
    rightDetail:
      "The first visit focuses on comfort, safety, and routines so every next step is practical for the family.",
  },
  {
    title: "Caregiver match and weekly schedule",
    detail:
      "Families are matched with caregivers based on personality, language, and care tasks to build consistency and trust.",
    image: "/images/seniors/senior-health-check-01.jpg",
    imageAlt: "Care professional reviewing health and support needs with an older adult",
    rightTitle: "Consistency before complexity",
    rightDetail:
      "We start with a stable schedule and clear responsibilities, then adjust hours as needs change over time.",
  },
  {
    title: "Daily living support at home",
    detail:
      "Visits include personal care, meal support, reminders, and companionship to keep the day steady and less stressful.",
    image: "/images/seniors/senior-health-check-02.jpg",
    imageAlt: "Senior receiving attentive care and wellness support during a home visit",
    rightTitle: "Support that protects independence",
    rightDetail:
      "Caregivers help with what is needed while preserving choice and routine, so clients stay confident at home.",
  },
  {
    title: "Ongoing supervision and family updates",
    detail:
      "Supervisors check quality, monitor progress, and share updates so families remain informed without micromanaging care.",
    image: "/images/seniors/senior-mobility-support-01.jpg",
    imageAlt: "Caregiver helping an older adult with safe mobility and transfer support",
    rightTitle: "Reliable communication every week",
    rightDetail:
      "Families receive clear updates on wellness, mood, and follow-up recommendations after each phase of care.",
  },
];

export default function StickyHomeCareJourney() {
  const [activeIndex, setActiveIndex] = useState(0);
  const stepRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const activeEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        const next = activeEntries[0];
        if (!next) return;

        const nextIndex = Number((next.target as HTMLElement).dataset.stepIndex);
        if (Number.isNaN(nextIndex)) return;

        setActiveIndex(nextIndex);
      },
      {
        root: null,
        threshold: [0.35, 0.6, 0.85],
        rootMargin: "-18% 0px -34% 0px",
      },
    );

    stepRefs.current.forEach((node) => {
      if (node) observer.observe(node);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-10">
      <div className="order-1 space-y-6 sm:space-y-8 lg:space-y-10">
        {journeySteps.map((step, index) => (
          <article
            key={step.title}
            data-step-index={index}
            ref={(node) => {
              stepRefs.current[index] = node;
            }}
            className={`min-h-[44vh] px-1 pb-8 pt-4 transition-opacity duration-300 md:pb-10 md:pt-5 ${
              index !== journeySteps.length - 1 ? "border-b border-slate-200/70" : ""
            } ${activeIndex === index ? "opacity-100" : "opacity-70"}`}
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--brand-gold)]">Step {index + 1}</p>
            <h3 className="mt-2 text-2xl font-semibold text-slate-900">{step.title}</h3>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">{step.detail}</p>

            <div className="mt-5 block lg:hidden">
              <div className="relative h-56 overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
                <Image src={step.image} alt={step.imageAlt} fill className="object-cover" sizes="100vw" />
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="order-2 lg:sticky lg:top-28 lg:self-start">
        <div className="relative mx-auto h-[16rem] max-w-[34rem] overflow-hidden rounded-lg border border-slate-200/90 bg-slate-100 sm:h-[18rem] lg:h-[23rem]">
          {journeySteps.map((step, index) => (
            <div
              key={step.title}
              className={`absolute inset-0 transition-[opacity,transform] duration-500 ease-out ${
                activeIndex === index ? "opacity-100 scale-100" : "pointer-events-none opacity-0 scale-[1.02]"
              }`}
            >
              <Image
                src={step.image}
                alt={step.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 52vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-900/15 to-transparent" />
            </div>
          ))}
        </div>

        <div className="mt-5 border-t border-slate-300/80 pt-5">
          <h3 className="mt-2 text-2xl font-semibold !text-[#D5664B]">{journeySteps[activeIndex].rightTitle}</h3>
          <p className="mt-3 text-base leading-7 text-slate-600">{journeySteps[activeIndex].rightDetail}</p>
        </div>
      </div>
    </div>
  );
}
