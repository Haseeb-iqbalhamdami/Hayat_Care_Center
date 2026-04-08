import Link from "next/link";
import {
  communityStats,
  contactDetails,
  floorPlans,
  homeFeatureCards,
  homeQuickLinks,
  services,
} from "@/data/siteContent";

export default function Home() {
  return (
    <>
      <section className="hero-grid">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
          <div>
            <p
              data-reveal
              className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--brand-blue)]"
            >
              Hayat Care Center
            </p>
            <h1
              data-reveal
              data-reveal-delay={90}
              className="mt-3 max-w-4xl text-4xl font-bold leading-tight text-[var(--ink)] md:text-5xl lg:text-6xl"
            >
              Assisted Support In A Community Designed For
              <span className="text-[var(--brand-orange)]"> Comfort</span>,
              <span className="text-[var(--brand-blue)]"> Connection</span>,
              And Everyday Ease
            </h1>
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
                className="inline-flex items-center justify-center rounded-full border border-[var(--line)] bg-white px-7 py-3.5 text-sm font-bold text-[var(--brand-navy)]"
              >
                Call {contactDetails.phoneLabel}
              </a>
            </div>
          </div>

          <aside
            data-reveal
            data-reveal-delay={140}
            data-tilt
            className="glass rounded-3xl p-6 shadow-xl shadow-slate-900/10 md:p-8"
          >
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-blue)]">
              Quick Navigation
            </p>
            <h2 className="mt-3 text-2xl font-bold leading-tight text-[var(--ink)]">
              Browse The Community
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
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
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
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
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <p
            data-reveal
            className="text-center text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-blue)]"
          >
            Why Hayat
          </p>
          <h2
            data-reveal
            data-reveal-delay={70}
            className="mx-auto mt-3 max-w-3xl text-center text-3xl font-bold text-[var(--ink)] md:text-4xl"
          >
            A More Complete Community Experience
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {homeFeatureCards.map((item, index) => (
              <article
                key={item.title}
                data-reveal
                data-reveal-delay={index * 90}
                data-tilt
                className="rounded-2xl bg-white p-6 ring-1 ring-[var(--line)]"
              >
                <h3 className="text-xl font-bold text-[var(--ink)]">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--ink-soft)]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p
                data-reveal
                className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-blue)]"
              >
                Floor Plans
              </p>
              <h2
                data-reveal
                data-reveal-delay={70}
                className="mt-3 text-3xl font-bold text-[var(--ink)] md:text-4xl"
              >
                Compare Suite Styles
              </h2>
            </div>
            <div data-reveal data-reveal-delay={120}>
              <Link
                href="/floor-plans"
                className="inline-flex rounded-full bg-[var(--brand-navy)] px-6 py-3 text-sm font-bold text-white"
              >
                View All Floor Plans
              </Link>
            </div>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {floorPlans.map((plan, index) => (
              <article
                key={plan.title}
                data-reveal
                data-reveal-delay={index * 90}
                data-tilt
                className="rounded-3xl bg-[var(--bg)] p-6 ring-1 ring-[var(--line)]"
              >
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
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <p
            data-reveal
            className="text-center text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-blue)]"
          >
            Assisted Support
          </p>
          <h2
            data-reveal
            data-reveal-delay={70}
            className="mx-auto mt-3 max-w-3xl text-center text-3xl font-bold text-[var(--ink)] md:text-4xl"
          >
            Practical Help That Preserves Independence
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 3).map((service, index) => (
              <article
                key={service.title}
                data-reveal
                data-reveal-delay={index * 90}
                data-tilt
                className="rounded-2xl bg-white p-6 ring-1 ring-[var(--line)]"
              >
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
