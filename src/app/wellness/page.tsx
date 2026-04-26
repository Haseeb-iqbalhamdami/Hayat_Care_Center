import type { Metadata } from "next";
import Link from "next/link";
import BorderGlow from "@/components/reactbits/BorderGlow";
import ScrollFloat from "@/components/reactbits/ScrollFloat";
import { wellnessPillars } from "@/data/siteContent";

export const metadata: Metadata = {
  title: "Senior Wellness Program in Colorado Springs | Hayat Care Center",
  description:
    "Discover Hayat Care Center's senior wellness and life enrichment programs in Colorado Springs, including movement, health oversight, cognitive engagement, routine, and social connection.",
  keywords: [
    "senior wellness program Colorado Springs",
    "life enrichment program Colorado Springs",
    "adult day care wellness Colorado Springs",
    "senior activities and wellness Colorado Springs",
    "cognitive engagement for seniors Colorado Springs",
    "senior movement program Colorado Springs",
    "Hayat Care Center wellness",
  ],
  alternates: {
    canonical: "/wellness",
  },
  openGraph: {
    title: "Senior Wellness Program in Colorado Springs | Hayat Care Center",
    description:
      "Movement, health oversight, cognitive engagement, daily routine, and social connection for seniors at Hayat Care Center.",
    url: "https://www.hayatcarecenter.org/wellness",
    type: "website",
  },
};

export default function WellnessPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "Senior Wellness Program in Colorado Springs",
        provider: {
          "@type": "LocalBusiness",
          name: "Hayat Care Center",
        },
        areaServed: "Colorado Springs, CO",
        serviceType: "Senior Wellness and Life Enrichment",
        url: "https://www.hayatcarecenter.org/wellness",
        description:
          "Hayat Care Center provides senior wellness and life enrichment programs in Colorado Springs, including movement, health oversight, cognitive engagement, routine, and social connection.",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.hayatcarecenter.org",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Wellness",
            item: "https://www.hayatcarecenter.org/wellness",
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      <section className="hero-grid">
        <div className="mx-auto max-w-7xl px-4 py-14 md:py-16">
          <p
            data-reveal
            className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-blue)]"
          >
            Life Enrichment
          </p>
          <div data-reveal data-reveal-delay={90}>
            <ScrollFloat
              as="h1"
              containerClassName="mt-3 max-w-4xl text-4xl font-bold text-[var(--ink)] md:text-5xl"
              textClassName="text-balance"
            >
              Wellness Programs That Support Strength, Stability, And Purpose
            </ScrollFloat>
          </div>
          <p
            data-reveal
            data-reveal-delay={180}
            className="mt-4 max-w-3xl text-base leading-7 text-[var(--ink-soft)] md:text-lg"
          >
            Life enrichment at Hayat brings together movement, health oversight,
            cognitive engagement, and daily routine so residents feel more
            capable, connected, and confident in the flow of each week.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {wellnessPillars.map((item, index) => (
              <BorderGlow
                key={item.title}
                data-reveal
                data-reveal-delay={index * 70}
                data-tilt
                className="h-full"
                borderRadius={16}
                glowRadius={24}
              >
                <article className="h-full rounded-2xl bg-white p-6">
                  <h2 className="text-xl font-bold text-[var(--ink)]">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-[var(--ink-soft)]">
                    {item.description}
                  </p>
                </article>
              </BorderGlow>
            ))}
          </div>

          <div
            data-reveal
            data-reveal-delay={180}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <Link
              href="/adult-care-center"
              className="inline-flex rounded-full bg-[var(--brand-navy)] px-6 py-3 text-sm font-bold text-white"
            >
              Explore Care Options
            </Link>
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-[var(--brand-orange)] px-6 py-3 text-sm font-bold text-white"
            >
              Talk With Our Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
