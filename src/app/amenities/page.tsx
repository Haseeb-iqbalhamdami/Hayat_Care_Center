import type { Metadata } from "next";
import Link from "next/link";
import BorderGlow from "@/components/reactbits/BorderGlow";
import ScrollFloat from "@/components/reactbits/ScrollFloat";
import { amenities } from "@/data/siteContent";

export const metadata: Metadata = {
  title: "Adult Day Care Amenities in Colorado Springs | Hayat Care Center",
  description:
    "Explore adult day care amenities at Hayat Care Center in Colorado Springs, including comfortable shared spaces, practical services, activities, and supportive daily conveniences.",
  keywords: [
    "adult day care amenities Colorado Springs",
    "senior care amenities Colorado Springs",
    "adult day care comforts Colorado Springs",
    "senior community amenities Colorado Springs",
    "Hayat Care Center amenities",
    "adult day center amenities Colorado Springs",
  ],
  alternates: {
    canonical: "/amenities",
  },
  openGraph: {
    title: "Adult Day Care Amenities in Colorado Springs | Hayat Care Center",
    description:
      "Comfortable shared spaces, practical services, activities, and daily conveniences at Hayat Care Center in Colorado Springs.",
    url: "https://www.hayatcarecenter.org/amenities",
    type: "website",
  },
};

export default function AmenitiesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "Adult Day Care Amenities in Colorado Springs",
        provider: {
          "@type": "LocalBusiness",
          name: "Hayat Care Center",
        },
        areaServed: "Colorado Springs, CO",
        serviceType: "Adult Day Care Amenities",
        url: "https://www.hayatcarecenter.org/amenities",
        description:
          "Hayat Care Center offers adult day care amenities in Colorado Springs, including welcoming shared spaces, activities, practical services, and daily comforts for seniors and adults.",
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
            name: "Amenities",
            item: "https://www.hayatcarecenter.org/amenities",
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
            Amenities
          </p>
          <div data-reveal data-reveal-delay={90}>
            <ScrollFloat
              as="h1"
              containerClassName="mt-3 max-w-4xl text-4xl font-bold text-[var(--ink)] md:text-5xl"
              textClassName="text-balance"
            >
              Comforts And Conveniences That Shape Everyday Life
            </ScrollFloat>
          </div>
          <p
            data-reveal
            data-reveal-delay={180}
            className="mt-4 max-w-3xl text-base leading-7 text-[var(--ink-soft)] md:text-lg"
          >
            Hayat combines welcoming shared spaces with practical services so
            residents can spend more time enjoying the community and less time
            managing logistics.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {amenities.map((item, index) => (
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
              href="/activities-events"
              className="inline-flex rounded-full bg-[var(--brand-navy)] px-6 py-3 text-sm font-bold text-white"
            >
              See Activities & Events
            </Link>
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-[var(--brand-orange)] px-6 py-3 text-sm font-bold text-white"
            >
              Book A Tour
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
