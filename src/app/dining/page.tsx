import type { Metadata } from "next";
import Link from "next/link";
import BorderGlow from "@/components/reactbits/BorderGlow";
import ScrollFloat from "@/components/reactbits/ScrollFloat";
import { diningFeatures } from "@/data/siteContent";

export const metadata: Metadata = {
  title: "Senior Dining Program in Colorado Springs | Hayat Care Center",
  description:
    "Learn about Hayat Care Center's senior dining program in Colorado Springs, including meals, nutrition, hospitality, routine, dietary support, and social connection.",
  keywords: [
    "senior dining program Colorado Springs",
    "adult day care meals Colorado Springs",
    "senior meals Colorado Springs",
    "nutritious meals for seniors Colorado Springs",
    "adult day care dining Colorado Springs",
    "meal support for seniors Colorado Springs",
    "Hayat Care Center dining",
  ],
  alternates: {
    canonical: "/dining",
  },
  openGraph: {
    title: "Senior Dining Program in Colorado Springs | Hayat Care Center",
    description:
      "Meals, nutrition, hospitality, routine, dietary support, and social connection at Hayat Care Center in Colorado Springs.",
    url: "https://www.hayatcarecenter.org/dining",
    type: "website",
  },
};

export default function DiningPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "Senior Dining Program in Colorado Springs",
        provider: {
          "@type": "LocalBusiness",
          name: "Hayat Care Center",
        },
        areaServed: "Colorado Springs, CO",
        serviceType: "Senior Dining Program",
        url: "https://www.hayatcarecenter.org/dining",
        description:
          "Hayat Care Center provides a senior dining program in Colorado Springs with meals, nutrition, hospitality, routine, dietary support, and social connection.",
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
            name: "Dining",
            item: "https://www.hayatcarecenter.org/dining",
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
            Dining Experience
          </p>
          <div data-reveal data-reveal-delay={90}>
            <ScrollFloat
              as="h1"
              containerClassName="mt-3 max-w-4xl text-4xl font-bold text-[var(--ink)] md:text-5xl"
              textClassName="text-balance"
            >
              Meals Designed Around Hospitality, Routine, And Resident
              Enjoyment
            </ScrollFloat>
          </div>
          <p
            data-reveal
            data-reveal-delay={180}
            className="mt-4 max-w-3xl text-base leading-7 text-[var(--ink-soft)] md:text-lg"
          >
            Dining is one of the anchors of community life at Hayat. It creates
            comfort, social connection, and a familiar rhythm residents can look
            forward to each day.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {diningFeatures.map((item, index) => (
              <BorderGlow
                key={item.title}
                data-reveal
                data-reveal-delay={index * 80}
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
                    {item.text}
                  </p>
                </article>
              </BorderGlow>
            ))}
          </div>

          <BorderGlow
            data-reveal
            data-reveal-delay={180}
            data-tilt
            className="mt-10 h-full"
            borderRadius={24}
            glowRadius={30}
          >
            <div className="h-full rounded-3xl bg-[var(--bg)] p-8">
              <h3 className="text-2xl font-bold text-[var(--ink)]">
                Dining Should Feel Like A Highlight, Not A Task
              </h3>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-[var(--ink-soft)]">
                Hayat&apos;s dining philosophy is simple: create an atmosphere where
                meals are enjoyable, thoughtfully prepared, and easy to navigate
                for different preferences and support needs.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/meal-plan"
                  className="inline-flex rounded-full bg-[var(--brand-gold)] px-6 py-3 text-sm font-bold text-white"
                >
                  View 7 Day Meal Plan
                </Link>
               
                <Link
                  href="/contact"
                  className="inline-flex rounded-full bg-[var(--brand-navy)] px-6 py-3 text-sm font-bold text-white"
                >
                  Schedule A Visit
                </Link>
              </div>
            </div>
          </BorderGlow>
        </div>
      </section>
    </>
  );
}
