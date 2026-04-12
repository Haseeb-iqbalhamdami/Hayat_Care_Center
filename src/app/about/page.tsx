import type { Metadata } from "next";
import Link from "next/link";
import AboutAnimatedPin from "@/components/about/AboutAnimatedPin";
import AboutJourneyShowcase from "@/components/about/AboutJourneyShowcase";
import BorderGlow from "@/components/reactbits/BorderGlow";
import ScrollFloat from "@/components/reactbits/ScrollFloat";
import { communityStats, trustPoints } from "@/data/siteContent";

export const metadata: Metadata = {
  title: "About Us | Hayat Care Centers",
  description:
    "Learn how Hayat Care Centers combines an adult care center and home care agency to support older adults with dignity.",
};

export default function AboutPage() {
  return (
    <>
      <section className="hero-grid">
        <div className="mx-auto max-w-7xl px-4 py-14 md:py-16">
          <p data-reveal className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-blue)]">
            About Hayat
          </p>
          <div data-reveal data-reveal-delay={90}>
            <ScrollFloat
              as="h1"
              containerClassName="mt-3 max-w-4xl text-4xl font-bold text-[var(--ink)] md:text-5xl"
              textClassName="text-balance"
            >
              Care That Meets Families Where They Are—At Home Or At Our Center
            </ScrollFloat>
          </div>
          <p
            data-reveal
            data-reveal-delay={180}
            className="mt-4 max-w-3xl text-base leading-7 text-[var(--ink-soft)] md:text-lg"
          >
            Hayat Care Centers serves older adults through two connected offerings: a welcoming adult care center for
            structured daytime support, and a home care agency for personalized help where someone already lives. Our
            approach blends practical assistance, clear communication, and hospitality so daily life feels steadier—not
            more complicated.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <AboutJourneyShowcase />

          <div className="mt-8" data-reveal data-reveal-delay={40}>
            <AboutAnimatedPin />
          </div>

          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {communityStats.map((stat, index) => (
              <BorderGlow
                key={stat.label}
                data-reveal
                data-reveal-delay={index * 90}
                data-tilt
                className="h-full"
                borderRadius={16}
                glowRadius={24}
              >
                <article className="h-full rounded-2xl bg-white p-6">
                  <p className="text-3xl font-bold text-[var(--brand-navy)]">{stat.value}</p>
                  <p className="mt-1 text-sm text-[var(--ink-soft)]">{stat.label}</p>
                </article>
              </BorderGlow>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div data-reveal>
            <ScrollFloat as="h2" containerClassName="text-center text-3xl font-bold text-[var(--ink)] md:text-4xl">
              Why Families Explore Hayat
            </ScrollFloat>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {trustPoints.map((point, index) => (
              <BorderGlow
                key={point.title}
                data-reveal
                data-reveal-delay={index * 90}
                data-tilt
                className="h-full"
                borderRadius={18}
                glowRadius={26}
              >
                <article className="h-full rounded-2xl bg-[var(--bg)] p-6">
                  <h3 className="text-xl font-bold text-[var(--ink)]">{point.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--ink-soft)]">{point.text}</p>
                </article>
              </BorderGlow>
            ))}
          </div>

          <div
            data-reveal
            data-reveal-delay={220}
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Link
              href="/amenities"
              className="inline-flex rounded-full bg-[var(--brand-navy)] px-6 py-3 text-sm font-bold text-white"
            >
              Explore Amenities
            </Link>
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-[var(--brand-orange)] px-6 py-3 text-sm font-bold text-white"
            >
              Schedule A Tour
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
