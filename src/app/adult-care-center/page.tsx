import type { Metadata } from "next";
import Link from "next/link";
import StickyDayJourney from "@/components/adult-care/StickyDayJourney";
import VerticalServiceHero from "@/components/VerticalServiceHero";
import { adultCareCenterSummary, homeVerticalsDeepDive } from "@/data/siteContent";

export const metadata: Metadata = {
  title: "Adult Day Care Center in Colorado Springs | Hayat Care Center",
  description:
    "Hayat Care Center provides supervised adult day care in Colorado Springs with social activities, meals, daily structure, family support, and personalized care planning.",
  keywords: [
    "adult day care center Colorado Springs",
    "adult day care Colorado Springs",
    "adult day program Colorado Springs",
    "supervised adult day care Colorado Springs",
    "senior day care Colorado Springs",
    "daytime care for elderly parents Colorado Springs",
  ],
  alternates: {
    canonical: "/adult-care-center",
  },
  openGraph: {
    title: "Adult Day Care Center in Colorado Springs | Hayat Care Center",
    description:
      "Supervised adult day care with meals, activities, social engagement, and personalized support in Colorado Springs.",
    url: "https://www.hayatcarecenter.org/adult-care-center",
    type: "website",
  },
};

const btnPrimary =
  "inline-flex items-center justify-center rounded-full bg-[var(--brand-gold)] px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[var(--brand-gold-bright)]";
const btnOutline =
  "inline-flex items-center justify-center rounded-full border-2 border-[#073D7A] bg-[#073D7A] px-6 py-3 text-sm font-semibold text-white transition hover:border-[#052a52] hover:bg-[#052a52]";
const shell = "mx-auto w-full max-w-[1920px] px-4 sm:px-6 xl:px-10";
const inner = "mx-auto w-full max-w-7xl";
const sectionEyebrow = "text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-gold)]";

const relatedPaths = [
  {
    title: "Home care agency",
    description: "Keep support going in the evenings or weekends with caregiver visits at home.",
    href: "/home-care-agency",
  },
  {
    title: "Non-medical transportation",
    description: "Coordinate rides to and from the center or to appointments and errands.",
    href: "/non-medical-transportation",
  },
] as const;

export default function AdultCareCenterPage() {

  // ✅ ADDED SCHEMA ONLY
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "Adult Day Care Center in Colorado Springs",
        provider: {
          "@type": "LocalBusiness",
          name: "Hayat Care Center",
        },
        areaServed: "Colorado Springs, CO",
        serviceType: "Adult Day Care",
        url: "https://www.hayatcarecenter.org/adult-care-center",
        description:
          "Supervised adult day care with meals, activities, social engagement, and personalized support in Colorado Springs.",
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
            name: "Adult Care Center",
            item: "https://www.hayatcarecenter.org/adult-care-center",
          },
        ],
      },
    ],
  };

  return (
    <>
      {/* ✅ ADDED SCHEMA SCRIPT ONLY */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      <VerticalServiceHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Our care", href: "/#our-verticals" },
          { label: "Adult care center" },
        ]}
        title="Daytime care that combines supervision structure and genuine community"
        subtitle={adultCareCenterSummary.title}
        description={adultCareCenterSummary.body}
        primaryCta={{ label: "Plan a center visit", href: "/contact" }}
        secondaryCta={{ label: "Explore home care", href: "/home-care-agency" }}
        imageSrc="/images/usedimages/adultcare.png"
        imageAlt="Adult day care center in Colorado Springs with supervised daytime care"
      />

      {/* REST OF YOUR FILE EXACTLY SAME — NO CHANGES */}

      <section className="border-b border-slate-200 bg-white py-16 md:py-20">
        <div className={shell}>
          <div className={`${inner} grid gap-8 lg:grid-cols-2`}>
            <article data-reveal className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-semibold text-slate-900">What is included in center based care</h2>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-600 md:text-base">
                {adultCareCenterSummary.bullets.map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand-gold)]" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </article>

            <article
              data-reveal
              data-reveal-delay={70}
              className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6 shadow-sm md:p-8"
            >
              <h2 className="text-2xl font-semibold text-slate-900">Who this path fits best</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">{homeVerticalsDeepDive.adult.fitFor}</p>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {homeVerticalsDeepDive.adult.outcomes.map((outcome) => (
                  <span
                    key={outcome}
                    className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700"
                  >
                    {outcome}
                  </span>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* rest unchanged */}
    </>
  );
}
