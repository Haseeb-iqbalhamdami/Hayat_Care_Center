import type { Metadata } from "next";
import Link from "next/link";
import ScrollFloat from "@/components/reactbits/ScrollFloat";
import { facilityRooms } from "@/data/siteContent";

export const metadata: Metadata = {
  title: "Our Rooms & Spaces in Colorado Springs | Hayat Care Center",
  description:
    "Explore the rooms and spaces at Hayat Care Center in Colorado Springs, including rest room, craft room, dining, recreation, wellness, and more.",
  keywords: [
    "adult day care rooms Colorado Springs",
    "Hayat Care Center facility spaces",
    "craft room adult day care Colorado Springs",
    "rest room senior day program",
    "adult day care amenities Colorado Springs",
  ],
  alternates: {
    canonical: "/floor-plans",
  },
  openGraph: {
    title: "Our Rooms & Spaces | Hayat Care Center",
    description:
      "See the rooms available at Hayat Care Center — rest room, craft room, dining, recreation, wellness, and more.",
    url: "https://www.hayatcarecenter.org/floor-plans",
    type: "website",
  },
};

export default function FloorPlansPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "Hayat Care Center Rooms and Spaces",
        provider: {
          "@type": "LocalBusiness",
          name: "Hayat Care Center",
        },
        areaServed: "Colorado Springs, CO",
        serviceType: "Adult Day Care Facility Spaces",
        url: "https://www.hayatcarecenter.org/floor-plans",
        description:
          "Rooms and spaces at Hayat Care Center including rest room, craft room, dining, recreation, and wellness areas.",
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
            name: "Our Rooms",
            item: "https://www.hayatcarecenter.org/floor-plans",
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
            Our Rooms & Spaces
          </p>
          <div data-reveal data-reveal-delay={90}>
            <ScrollFloat
              as="h1"
              containerClassName="mt-3 max-w-4xl text-4xl font-bold text-[var(--ink)] md:text-5xl"
              textClassName="text-balance"
            >
              Rooms Designed For Comfort, Activity, And Everyday Belonging
            </ScrollFloat>
          </div>
          <p
            data-reveal
            data-reveal-delay={180}
            className="mt-4 max-w-3xl text-base leading-7 text-[var(--ink-soft)] md:text-lg"
          >
            Instead of suite floor plans, here is a clear look at the rooms and spaces available at
            Hayat Care Center — including rest room, craft room, dining, recreation, wellness, and more.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-200 bg-slate-50 px-5 py-4 md:px-7">
              <h2 className="text-xl font-bold text-[var(--ink)] md:text-2xl">Rooms Available At Our Center</h2>
              <p className="mt-1 text-sm text-[var(--ink-soft)]">
                A practical list of the spaces participants and families can expect during a visit.
              </p>
            </div>

            <ul className="divide-y divide-slate-100">
              {facilityRooms.map((room, index) => (
                <li
                  key={room.title}
                  data-reveal
                  data-reveal-delay={index * 40}
                  className="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-start sm:gap-6 md:px-7 md:py-5"
                >
                  <p className="min-w-[12rem] text-base font-bold text-[var(--brand-navy)] md:min-w-[14rem]">
                    {room.title}
                  </p>
                  <p className="text-sm leading-6 text-[var(--ink-soft)] md:text-[0.95rem]">
                    {room.description}
                  </p>
                </li>
              ))}
            </ul>
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
              Schedule A Tour
            </Link>
            <Link
              href="/community/our-facility"
              className="inline-flex rounded-full bg-[var(--brand-navy)] px-6 py-3 text-sm font-bold text-white"
            >
              See Our Facility
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
