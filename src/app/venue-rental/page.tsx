import type { Metadata } from "next";
import Link from "next/link";
import BorderGlow from "@/components/reactbits/BorderGlow";
import ScrollFloat from "@/components/reactbits/ScrollFloat";

export const metadata: Metadata = {
  title: "Venue & Hall Rental for Events | Hayat Care Center",
  description:
    "Host your private event, ceremony, or gathering at Hayat Care Center's facility in Colorado Springs. Our hall is available after 5 PM on weekdays and all day on weekends.",
  alternates: {
    canonical: "/venue-rental",
  },
  openGraph: {
    title: "Venue & Hall Rental for Events | Hayat Care Center",
    description:
      "Host your private event, ceremony, or gathering at Hayat Care Center's facility in Colorado Springs. Affordable hall rental with flexible scheduling.",
    url: "https://www.hayatcarecenter.org/venue-rental",
    type: "website",
  },
};

const availability = [
  {
    icon: "🗓️",
    label: "Monday – Friday",
    time: "After 5:00 PM",
    note: "Hall available every weekday evening for private events and ceremonies.",
  },
  {
    icon: "🌅",
    label: "Saturday & Sunday",
    time: "Full Day",
    note: "Enjoy unrestricted access to the hall throughout the entire weekend.",
  },
];

const features = [
  {
    title: "Spacious Hall",
    desc: "A large, well-maintained hall suited for gatherings of all sizes — celebrations, ceremonies, community meetings, and more.",
  },
  {
    title: "Prime Location",
    desc: "Conveniently located at our Hayat Care Center facility in Colorado Springs, easy to find and accessible for all guests.",
  },
  {
    title: "Flexible Scheduling",
    desc: "Weekday evenings after 5 PM and full weekend availability give you the freedom to plan events on your terms.",
  },
  {
    title: "Clean & Welcoming Space",
    desc: "Our facility is kept to a high standard of cleanliness and comfort, creating a great impression for your guests.",
  },
  {
    title: "Community-Friendly",
    desc: "We welcome community groups, families, and organizations looking for an affordable and reliable event venue.",
  },
  {
    title: "Easy Inquiry",
    desc: "Reach out via our contact form or call us directly to check availability and discuss your event requirements.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EventVenue",
      name: "Hayat Care Center Hall",
      description:
        "A spacious hall available for private events and ceremonies at the Hayat Care Center facility in Colorado Springs.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Colorado Springs",
        addressRegion: "CO",
        addressCountry: "US",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "17:00",
          closes: "22:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Saturday", "Sunday"],
          opens: "08:00",
          closes: "22:00",
        },
      ],
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
          name: "Venue Rental",
          item: "https://www.hayatcarecenter.org/venue-rental",
        },
      ],
    },
  ],
};

export default function VenueRentalPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero */}
      <section className="hero-grid">
        <div className="mx-auto max-w-7xl px-4 py-14 md:py-20">
          <p
            data-reveal
            className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-blue)]"
          >
            Venue &amp; Hall Rental
          </p>
          <div data-reveal data-reveal-delay={90}>
            <ScrollFloat
              as="h1"
              containerClassName="mt-3 max-w-4xl text-4xl font-bold text-[var(--ink)] md:text-5xl"
              textClassName="text-balance"
            >
              Host Your Event At Our Facility In Colorado Springs
            </ScrollFloat>
          </div>
          <p
            data-reveal
            data-reveal-delay={180}
            className="mt-5 max-w-2xl text-base leading-7 text-[var(--ink-soft)] md:text-lg"
          >
            Planning a ceremony, celebration, or community gathering? Our
            spacious hall at Hayat Care Center is available for private events.
            Whether it's a birthday, wedding reception, cultural ceremony, or
            any special occasion — we have the space for you.
          </p>
          <div
            data-reveal
            data-reveal-delay={260}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[var(--brand-navy)] px-7 py-3.5 text-sm font-bold text-white shadow-md transition hover:bg-[#052a52]"
            >
              Inquire About Availability
            </Link>
            <Link
              href="#availability"
              className="inline-flex items-center justify-center rounded-full border-2 border-[var(--brand-navy)] px-7 py-3.5 text-sm font-bold text-[var(--brand-navy)] transition hover:bg-[var(--brand-navy)] hover:text-white"
            >
              View Schedule
            </Link>
          </div>
        </div>
      </section>

      {/* Availability Schedule */}
      <section
        id="availability"
        className="scroll-mt-24 border-y border-slate-200 bg-slate-50/70 py-16 md:py-20"
      >
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <p
              data-reveal
              className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-coral)]"
            >
              Availability
            </p>
            <h2
              data-reveal
              data-reveal-delay={80}
              className="mt-3 text-3xl font-bold text-[var(--ink)] md:text-4xl"
            >
              When The Hall Is Open For You
            </h2>
            <p
              data-reveal
              data-reveal-delay={150}
              className="mt-4 text-base text-[var(--ink-soft)]"
            >
              We offer flexible timing so your event fits your schedule — not
              the other way around.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:max-w-3xl lg:mx-auto">
            {availability.map((slot, i) => (
              <BorderGlow
                key={slot.label}
                data-reveal
                data-reveal-delay={i * 100}
                borderRadius={20}
                glowRadius={28}
                className="h-full"
              >
                <div className="flex h-full flex-col rounded-[20px] bg-white p-8 text-center">
                  <span className="text-5xl">{slot.icon}</span>
                  <h3 className="mt-4 text-xl font-bold text-[var(--ink)]">
                    {slot.label}
                  </h3>
                  <p className="mt-1 text-2xl font-extrabold text-[var(--brand-navy)]">
                    {slot.time}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-[var(--ink-soft)]">
                    {slot.note}
                  </p>
                </div>
              </BorderGlow>
            ))}
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <p
              data-reveal
              className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-coral)]"
            >
              What We Offer
            </p>
            <h2
              data-reveal
              data-reveal-delay={80}
              className="mt-3 text-3xl font-bold text-[var(--ink)] md:text-4xl"
            >
              Everything You Need For A Memorable Event
            </h2>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <BorderGlow
                key={f.title}
                data-reveal
                data-reveal-delay={i * 60}
                data-tilt
                borderRadius={16}
                glowRadius={22}
                className="h-full"
              >
                <article className="h-full rounded-2xl bg-white p-6">
                  <h3 className="text-lg font-bold text-[var(--ink)]">
                    {f.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--ink-soft)]">
                    {f.desc}
                  </p>
                </article>
              </BorderGlow>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-200 bg-[var(--brand-navy)] py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Ready To Book The Hall?
          </h2>
          <p className="mt-4 text-base leading-7 text-white/80">
            Get in touch with us to check availability, discuss your event
            requirements, and reserve your date. We&apos;re happy to help make
            your event a success.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[var(--brand-coral)] px-8 py-4 text-sm font-bold text-white shadow-lg transition hover:bg-[var(--brand-coral-hover)]"
            >
              Contact Us Now
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-full border-2 border-white px-8 py-4 text-sm font-bold text-white transition hover:bg-white hover:text-[var(--brand-navy)]"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
