import Image from "next/image";
import Link from "next/link";
import BorderGlow from "@/components/reactbits/BorderGlow";
import CircularGallery from "@/components/reactbits/CircularGallery";
import LogoLoop, { type LogoItem } from "@/components/reactbits/LogoLoop";
import PixelCard from "@/components/reactbits/PixelCard";
import ScrollFloat from "@/components/reactbits/ScrollFloat";
import Threads from "@/components/reactbits/Threads";
import {
  communityStats,
  contactDetails,
  floorPlans,
  homeFeatureCards,
  homeQuickLinks,
  services,
} from "@/data/siteContent";

const trustLogos: LogoItem[] = [
  {
    node: (
      <span className="inline-flex items-center rounded-full border border-[var(--line)] bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.08em] text-[var(--brand-navy)]">
        Family-First Care
      </span>
    ),
  },
  {
    node: (
      <span className="inline-flex items-center rounded-full border border-[var(--line)] bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.08em] text-[var(--brand-blue)]">
        24/7 Support
      </span>
    ),
  },
  {
    node: (
      <span className="inline-flex items-center rounded-full border border-[var(--line)] bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.08em] text-[var(--brand-orange)]">
        Wellness-Led Living
      </span>
    ),
  },
  {
    node: (
      <span className="inline-flex items-center rounded-full border border-[var(--line)] bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.08em] text-[var(--brand-navy)]">
        Enrichment Programs
      </span>
    ),
  },
  {
    node: (
      <span className="inline-flex items-center rounded-full border border-[var(--line)] bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.08em] text-[var(--brand-blue)]">
        Hospitality Dining
      </span>
    ),
  },
  {
    node: (
      <span className="inline-flex items-center rounded-full border border-[var(--line)] bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.08em] text-[var(--brand-orange)]">
        Trusted By Families
      </span>
    ),
  },
];

const hayatGalleryImages = [
  {
    src: "/images/home/upload-01.jpg",
    alt: "Hayat community photo 1",
    title: "Community Moment 01",
  },
  {
    src: "/images/home/upload-02.jpg",
    alt: "Hayat community photo 2",
    title: "Community Moment 02",
  },
  {
    src: "/images/home/upload-03.jpg",
    alt: "Hayat community photo 3",
    title: "Community Moment 03",
  },
  {
    src: "/images/home/upload-04.jpg",
    alt: "Hayat community photo 4",
    title: "Community Moment 04",
  },
  {
    src: "/images/home/upload-05.jpg",
    alt: "Hayat community photo 5",
    title: "Community Moment 05",
  },
  {
    src: "/images/home/upload-06.jpg",
    alt: "Hayat community photo 6",
    title: "Community Moment 06",
  },
  {
    src: "/images/home/upload-07.jpg",
    alt: "Hayat community photo 7",
    title: "Community Moment 07",
  },
  {
    src: "/images/home/upload-08.jpg",
    alt: "Hayat community photo 8",
    title: "Community Moment 08",
  },
  {
    src: "/images/home/upload-09.jpg",
    alt: "Hayat community photo 9",
    title: "Community Moment 09",
  },
  {
    src: "/images/home/upload-10.jpg",
    alt: "Hayat community photo 10",
    title: "Community Moment 10",
  },
  {
    src: "/images/home/upload-11.jpg",
    alt: "Hayat community photo 11",
    title: "Community Moment 11",
  },
  {
    src: "/images/home/upload-12.jpg",
    alt: "Hayat community photo 12",
    title: "Community Moment 12",
  },
  {
    src: "/images/home/upload-13.jpg",
    alt: "Hayat community photo 13",
    title: "Community Moment 13",
  },
];

const heroShowcaseImage = "/images/home/hero-community-care.jpg";
const homeCircularGalleryItems = hayatGalleryImages.map((image) => ({
  image: image.src,
  text: image.title,
}));

export default function Home() {
  return (
    <>
      <section id="home-hero" className="hero-grid relative border-b-0 bg-transparent">
        <div className="absolute inset-0">
          <Image
            src={heroShowcaseImage}
            alt="Residents and caregivers in a bright, welcoming Hayat community space"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-85"
          />
        </div>
        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-35">
          {/* <Threads
            amplitude={1.1}
            color={[0.847, 0.455, 0.263]}
            enableMouseInteraction={false}
          /> */}
        </div>

        <div className="relative z-10 mx-auto flex min-h-[min(760px,calc(100svh-4.5rem))] max-w-7xl items-end px-4 py-16 md:py-20">
          <div className="max-w-4xl">
            <p
              data-reveal
              className="text-sm font-bold uppercase tracking-[0.22em] text-[var(--brand-orange)]"
            >
              Hayat Care Center
            </p>
            <div data-reveal data-reveal-delay={90}>
              <ScrollFloat
                as="h1"
                containerClassName="mt-3 max-w-4xl text-4xl font-bold leading-tight text-[var(--ink)] md:text-5xl lg:text-6xl"
                textClassName="text-balance"
              >
                Assisted Support In A Community Designed For Comfort,
                Connection, And Everyday Ease
              </ScrollFloat>
            </div>
            <p
              data-reveal
              data-reveal-delay={180}
              className="mt-5 max-w-2xl text-base leading-7 text-[var(--ink-soft)] md:text-lg"
            >
              Explore Hayat&apos;s amenities, dining, life enrichment, assisted
              support, floor plans, and move-in guidance through a clearer
              community-style website experience.
            </p>
            <div
              data-reveal
              data-reveal-delay={260}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[var(--brand-orange)] px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[var(--brand-orange-strong)]"
              >
                Schedule A Tour
              </Link>
              <a
                href={contactDetails.phoneHref}
                className="inline-flex items-center justify-center rounded-full border border-[var(--line)] bg-white px-7 py-3.5 text-sm font-bold text-[var(--brand-navy)] transition-colors hover:bg-[var(--surface-soft)]"
              >
                Call {contactDetails.phoneLabel}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="quick-navigation" className="bg-white py-10 md:py-12">
        <div className="mx-auto max-w-7xl px-4">
          <BorderGlow
            data-reveal
            borderRadius={24}
            glowRadius={30}
            className="h-full"
          >
            <aside data-tilt className="h-full rounded-3xl bg-white p-6 shadow-xl md:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-blue)]">
                Quick Navigation
              </p>
              <h2 className="mt-3 text-2xl font-bold leading-tight text-[var(--ink)]">
                Browse The Community
              </h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {homeQuickLinks.slice(0, 4).map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="rounded-2xl bg-white px-4 py-4 ring-1 ring-[var(--line)] transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <span className="block text-sm font-semibold text-[var(--ink)]">
                      {item.title}
                    </span>
                    <span className="mt-2 block text-xs leading-5 text-[var(--ink-soft)]">
                      {item.description}
                    </span>
                  </Link>
                ))}
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {communityStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl bg-[var(--bg)] px-4 py-4 ring-1 ring-[var(--line)]"
                  >
                    <p className="text-2xl font-bold text-[var(--brand-navy)]">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs leading-5 text-[var(--ink-soft)]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </aside>
          </BorderGlow>
        </div>
      </section>

      <section className="bg-white py-9">
        <div className="mx-auto max-w-7xl px-4">
          <p className="text-center text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-blue)]">
            Trusted Community Priorities
          </p>
          <LogoLoop
            className="mt-4"
            logos={trustLogos}
            speed={66}
            gap={18}
            logoHeight={16}
            fadeOut
            scaleOnHover
            ariaLabel="Key Hayat community strengths"
          />
        </div>
      </section>



      <section id="hayat-gallery" className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <p
            data-reveal
            className="text-center text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-blue)]"
          >
            Hayat Photo Gallery
          </p>
          <div data-reveal data-reveal-delay={70}>
            <ScrollFloat
              as="h2"
              containerClassName="mx-auto mt-3 max-w-4xl text-center text-3xl font-bold text-[var(--ink)] md:text-4xl"
              textClassName="text-balance"
            >
              A Closer Look At Daily Life At Hayat Care Center
            </ScrollFloat>
          </div>
          <p
            data-reveal
            data-reveal-delay={120}
            className="mx-auto mt-3 max-w-2xl text-center text-sm leading-6 text-[var(--ink-soft)]"
          >
            Explore spaces that reflect Hayat&apos;s focus on comfort, safety,
            social connection, and supportive care.
          </p>
          <BorderGlow
            data-reveal
            data-reveal-delay={180}
            className="mt-8 overflow-hidden"
            borderRadius={26}
            glowRadius={30}
          >
            <div className="h-[420px] rounded-3xl bg-white p-3 md:h-[520px] md:p-4">
              <CircularGallery
                items={homeCircularGalleryItems}
                bend={2.6}
                textColor="#f09a73"
                borderRadius={0.06}
                scrollSpeed={2.2}
                scrollEase={0.06}
              />
            </div>

          </BorderGlow>
          {/* <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {hayatGalleryImages.map((image, index) => (
              <BorderGlow
                key={image.src}
                data-reveal
                data-reveal-delay={180 + index * 70}
                borderRadius={24}
                glowRadius={28}
                className="h-full"
              >
                <article className="h-full overflow-hidden rounded-3xl bg-white">
                  <div className="relative h-56 w-full md:h-64">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                  <p className="px-4 py-3 text-sm font-semibold text-[var(--ink)]">
                    {image.title}
                  </p>
                </article>
              </BorderGlow>
            ))}
          </div> */}
        </div>
      </section>

      <section id="floor-plans-home" className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p
                data-reveal
                className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-blue)]"
              >
                Floor Plans
              </p>
              <div data-reveal data-reveal-delay={70}>
                <ScrollFloat
                  as="h2"
                  containerClassName="mt-3 text-3xl font-bold text-[var(--ink)] md:text-4xl"
                >
                  Compare Suite Styles
                </ScrollFloat>
              </div>
            </div>
            <div data-reveal data-reveal-delay={120}>
              <Link
                href="/floor-plans"
                className="inline-flex rounded-full bg-[var(--brand-orange)] px-6 py-3 text-sm font-bold text-white"
              >
                View All Floor Plans
              </Link>
            </div>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {floorPlans.map((plan, index) => (
              <BorderGlow
                key={plan.title}
                data-reveal
                data-reveal-delay={index * 90}
                data-tilt
                borderRadius={22}
                glowRadius={28}
                className="h-full"
              >
                <article className="h-full rounded-3xl bg-[var(--bg)] p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--brand-orange)]">
                    {plan.layout}
                  </p>
                  <h3 className="mt-3 text-2xl font-bold text-[var(--ink)]">
                    {plan.title}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-[var(--brand-blue)]">
                    {plan.size}
                  </p>
                  <p className="mt-4 text-sm leading-6 text-[var(--ink-soft)]">
                    {plan.description}
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-[var(--ink-soft)]">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand-orange)]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </article>
              </BorderGlow>
            ))}
          </div>
        </div>
      </section>

      <section id="assisted-support-home" className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <p
            data-reveal
            className="text-center text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-blue)]"
          >
            Assisted Support
          </p>
          <div data-reveal data-reveal-delay={70}>
            <ScrollFloat
              as="h2"
              containerClassName="mx-auto mt-3 max-w-3xl text-center text-3xl font-bold text-[var(--ink)] md:text-4xl"
              textClassName="text-balance"
            >
              Practical Help That Preserves Independence
            </ScrollFloat>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 3).map((service, index) => (
              <BorderGlow
                key={service.title}
                data-reveal
                data-reveal-delay={index * 90}
                data-tilt
                borderRadius={18}
                glowRadius={26}
                className="h-full"
              >
                <article className="h-full rounded-2xl p-6">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--bg)] text-[var(--brand-blue)] ring-1 ring-[var(--line)]">
                    <svg
                      className="h-6 w-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d={service.icon}
                      />
                    </svg>
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-[var(--ink)]">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--ink-soft)]">
                    {service.description}
                  </p>
                </article>
              </BorderGlow>
            ))}
          </div>
          <div data-reveal data-reveal-delay={220} className="mt-8 text-center">
            <Link
              href="/services"
              className="inline-flex rounded-full bg-[var(--brand-orange)] px-6 py-3 text-sm font-bold text-white"
            >
              Explore Care Options
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
