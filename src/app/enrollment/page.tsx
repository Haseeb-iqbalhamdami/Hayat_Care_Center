import type { Metadata } from "next";
import Link from "next/link";
import { coverageOptions, processSteps } from "@/data/siteContent";

export const metadata: Metadata = {
  title: "Move-In Process | Hayat Care Center",
  description: "Review the consultation and move-in process at Hayat Care Center.",
};

const planningChecklist = [
  "Preferred move-in timeline",
  "Current care routines and mobility notes",
  "Medication list and physician contacts",
  "Questions about dining, programming, or support level",
  "Family priorities for communication and daily life",
] as const;

export default function EnrollmentPage() {
  return (
    <>
      <section className="hero-grid">
        <div className="mx-auto max-w-7xl px-4 py-14 md:py-16">
          <p
            data-reveal
            className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-blue)]"
          >
            Move-In Process
          </p>
          <h1
            data-reveal
            data-reveal-delay={90}
            className="mt-3 max-w-3xl text-4xl font-bold text-[var(--ink)] md:text-5xl"
          >
            A Clear Path From First Tour To A Comfortable Transition
          </h1>
          <p
            data-reveal
            data-reveal-delay={180}
            className="mt-4 max-w-3xl text-base leading-7 text-[var(--ink-soft)] md:text-lg"
          >
            We keep the process straightforward so families can make decisions
            with more clarity and less pressure.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            {processSteps.map((item, index) => (
              <article
                key={item.title}
                data-reveal
                data-reveal-delay={index * 90}
                data-tilt
                className="rounded-2xl bg-white p-6 ring-1 ring-[var(--line)]"
              >
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--brand-orange)]">
                  {item.step}
                </p>
                <h2 className="mt-2 text-xl font-bold text-[var(--ink)]">
                  {item.title}
                </h2>
                <p className="mt-2 text-sm leading-6 text-[var(--ink-soft)]">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>

          <aside
            data-reveal
            data-reveal-delay={120}
            data-tilt
            className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-[var(--line)]"
          >
            <h3 className="text-2xl font-bold text-[var(--ink)]">
              Prepare For Your Consultation
            </h3>
            <p className="mt-3 text-sm leading-6 text-[var(--ink-soft)]">
              Our team uses the first conversation to understand daily routines,
              support needs, timing, and the kind of community experience your
              family is looking for.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {coverageOptions.map((option) => (
                <span
                  key={option}
                  className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-semibold text-[var(--brand-navy)]"
                >
                  {option}
                </span>
              ))}
            </div>

            <h4 className="mt-7 text-sm font-bold uppercase tracking-[0.14em] text-[var(--brand-blue)]">
              Helpful Information To Bring
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-[var(--ink-soft)]">
              {planningChecklist.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand-orange)]" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-col gap-3">
              <Link
                href="/contact"
                className="inline-flex justify-center rounded-full bg-[var(--brand-orange)] px-6 py-3 text-sm font-bold text-white"
              >
                Request A Tour
              </Link>
              <Link
                href="/floor-plans"
                className="inline-flex justify-center rounded-full bg-[var(--brand-navy)] px-6 py-3 text-sm font-bold text-white"
              >
                Compare Floor Plans
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
