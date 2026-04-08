import type { Metadata } from "next";
import Link from "next/link";
import { floorPlans } from "@/data/siteContent";

export const metadata: Metadata = {
  title: "Floor Plans | Hayat Care Center",
  description: "Compare suite layouts and floor plan options at Hayat Care Center.",
};

export default function FloorPlansPage() {
  return (
    <>
      <section className="hero-grid">
        <div className="mx-auto max-w-7xl px-4 py-14 md:py-16">
          <p
            data-reveal
            className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-blue)]"
          >
            Floor Plans
          </p>
          <h1
            data-reveal
            data-reveal-delay={90}
            className="mt-3 max-w-4xl text-4xl font-bold text-[var(--ink)] md:text-5xl"
          >
            Multiple Suite Layouts To Match Different Routines And Preferences
          </h1>
          <p
            data-reveal
            data-reveal-delay={180}
            className="mt-4 max-w-3xl text-base leading-7 text-[var(--ink-soft)] md:text-lg"
          >
            Hayat offers several suite styles so families can compare living
            space, comfort, and the support setting that feels right for the
            next chapter.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-5 lg:grid-cols-3">
            {floorPlans.map((plan, index) => (
              <article
                key={plan.title}
                data-reveal
                data-reveal-delay={index * 90}
                data-tilt
                className="rounded-3xl bg-white p-7 ring-1 ring-[var(--line)]"
              >
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--brand-orange)]">
                  {plan.layout}
                </p>
                <h2 className="mt-3 text-2xl font-bold text-[var(--ink)]">
                  {plan.title}
                </h2>
                <p className="mt-1 text-sm font-semibold text-[var(--brand-blue)]">
                  {plan.size}
                </p>
                <p className="mt-4 text-sm leading-6 text-[var(--ink-soft)]">
                  {plan.description}
                </p>
                <ul className="mt-5 space-y-2 text-sm text-[var(--ink-soft)]">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand-orange)]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div
            data-reveal
            data-reveal-delay={180}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-[var(--brand-orange)] px-6 py-3 text-sm font-bold text-white"
            >
              Request Pricing & Availability
            </Link>
            <Link
              href="/enrollment"
              className="inline-flex rounded-full bg-[var(--brand-navy)] px-6 py-3 text-sm font-bold text-white"
            >
              Review The Move-In Process
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
