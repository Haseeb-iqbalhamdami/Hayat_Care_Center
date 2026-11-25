import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollFloat from "@/components/reactbits/ScrollFloat";
import { contactDetails } from "@/data/siteContent";
import { veteranCaregiverResourcesGuide as guide } from "@/data/veteranCareContent";
import styles from "./VeteranResources.module.css";

export const metadata: Metadata = {
  title: "Proudly Serving Those Who Served Our Nation | Hayat Care Center",
  description: guide.excerpt,
  keywords: [
    "veteran care Colorado Springs",
    "veteran home care Colorado Springs",
    "veteran adult day care Colorado Springs",
    "Hayat Care Center veterans",
    "military veteran caregiver support",
  ],
  alternates: {
    canonical: "/resources/veteran-caregiver-resources",
  },
  openGraph: {
    title: guide.title,
    description: guide.excerpt,
    url: "https://www.hayatcarecenter.org/resources/veteran-caregiver-resources",
    type: "article",
  },
};

function BulletList({ items }: { items: readonly string[] }) {
  return (
    <ul className={styles.bulletList}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function VeteranCaregiverResourcesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: guide.title,
        description: guide.excerpt,
        datePublished: "2026-11-25",
        author: { "@type": "Organization", name: "Hayat Care Center" },
        publisher: {
          "@type": "Organization",
          name: "Hayat Care Center",
          url: "https://www.hayatcarecenter.org",
        },
        image: `https://www.hayatcarecenter.org${guide.heroImage}`,
        mainEntityOfPage: "https://www.hayatcarecenter.org/resources/veteran-caregiver-resources",
      },
      {
        "@type": "FAQPage",
        mainEntity: guide.faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <section className="hero-grid">
        <div className="mx-auto max-w-7xl px-4 py-12 md:py-14">
          <Link href="/resources/blog" className={styles.backLink}>
            &larr; Back To Resources
          </Link>
          <p className="mt-4 text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-blue)]">
            {guide.eyebrow}
          </p>
          <div className="mt-2">
            <ScrollFloat as="h1" containerClassName={styles.heroTitle} textClassName="text-balance">
              {guide.title}
            </ScrollFloat>
          </div>
          <p className={styles.heroExcerpt}>{guide.tagline}</p>
          <p className={styles.heroMeta}>
            <span className={styles.badge}>America&apos;s Veterans</span>
            <span>{guide.date}</span>
            <span>•</span>
            <span>{guide.readTime}</span>
          </p>

          <div className={`mt-8 ${styles.tributeSection}`}>
            <div className={styles.tributeImageFrame}>
              <Image
                src={guide.heroImage}
                alt={guide.heroImageAlt}
                fill
                sizes="(min-width: 900px) 55vw, 100vw"
                className={styles.tributeMainImage}
                priority
              />
            </div>
            <div className={styles.tributeTextBlock}>
              <p className={styles.tributeEyebrow}>Proudly Serving Those Who Served Our Nation</p>
              <h2 className={styles.tributeTitle}>{guide.tagline}</h2>
              <div className={styles.tributeRule} aria-hidden />
              <p className={styles.tributeText}>{guide.saluteLine}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className={styles.layout}>
            <article className={styles.article}>
              {guide.opening.map((paragraph, index) => (
                <p
                  key={paragraph.slice(0, 40)}
                  className={styles.intro}
                  style={index === 0 ? { fontWeight: 600, color: "#0f172a" } : undefined}
                >
                  {paragraph}
                </p>
              ))}

              <div className={styles.midMedia}>
                <Image
                  src={guide.supportImage}
                  alt={guide.supportImageAlt}
                  fill
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  className={styles.midImage}
                />
              </div>

              <section className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>{guide.heroesTitle}</h2>
                <p className={styles.sectionLead}>{guide.heroesTagline}</p>
                {guide.heroesBody.map((p) => (
                  <p key={p.slice(0, 40)} className={styles.sectionText}>
                    {p}
                  </p>
                ))}
                <BulletList items={guide.branches} />
                {guide.heroesClose.map((p) => (
                  <p key={p.slice(0, 40)} className={styles.sectionText}>
                    {p}
                  </p>
                ))}
              </section>

              <div className={styles.midMedia}>
                <Image
                  src={guide.groupImage}
                  alt={guide.groupImageAlt}
                  fill
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  className={styles.midImage}
                />
              </div>

              <section className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>{guide.servicesIntro.title}</h2>
                <p className={styles.sectionText}>{guide.servicesIntro.body}</p>
              </section>

              <section className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>{guide.homeCare.title}</h2>
                <p className={styles.sectionLead}>{guide.homeCare.subtitle}</p>
                {guide.homeCare.body.map((p) => (
                  <p key={p.slice(0, 40)} className={styles.sectionText}>
                    {p}
                  </p>
                ))}
                <div className={styles.subBlock}>
                  <h3 className={styles.subHeading}>{guide.homeCare.skilledTitle}</h3>
                  <p className={styles.sectionText}>{guide.homeCare.skilledLead}</p>
                  <BulletList items={guide.homeCare.skilledItems} />
                  <p className={styles.sectionText}>{guide.homeCare.skilledClose}</p>
                </div>
                <div className={styles.subBlock}>
                  <h3 className={styles.subHeading}>{guide.homeCare.nonSkilledTitle}</h3>
                  <p className={styles.sectionText}>{guide.homeCare.nonSkilledLead}</p>
                  <BulletList items={guide.homeCare.nonSkilledItems} />
                  {guide.homeCare.nonSkilledClose.map((p) => (
                    <p key={p.slice(0, 40)} className={styles.sectionText}>
                      {p}
                    </p>
                  ))}
                </div>
              </section>

              <section className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>{guide.adultDay.title}</h2>
                <p className={styles.sectionLead}>{guide.adultDay.subtitle}</p>
                {guide.adultDay.body.map((p) => (
                  <p key={p.slice(0, 40)} className={styles.sectionText}>
                    {p}
                  </p>
                ))}
                <div className={styles.subBlock}>
                  <h3 className={styles.subHeading}>{guide.adultDay.friendshipTitle}</h3>
                  <p className={styles.sectionText}>{guide.adultDay.friendshipLead}</p>
                  <BulletList items={guide.adultDay.friendshipItems} />
                  <p className={styles.sectionText}>{guide.adultDay.friendshipClose}</p>
                </div>
                <div className={styles.subBlock}>
                  <h3 className={styles.subHeading}>{guide.adultDay.activitiesTitle}</h3>
                  <p className={styles.sectionText}>{guide.adultDay.activitiesLead}</p>
                  <BulletList items={guide.adultDay.activitiesItems} />
                  {guide.adultDay.activitiesClose.map((p) => (
                    <p key={p.slice(0, 40)} className={styles.sectionText}>
                      {p}
                    </p>
                  ))}
                </div>
                <div className={styles.subBlock}>
                  <h3 className={styles.subHeading}>{guide.adultDay.mealsTitle}</h3>
                  {guide.adultDay.mealsBody.map((p) => (
                    <p key={p.slice(0, 40)} className={styles.sectionText}>
                      {p}
                    </p>
                  ))}
                </div>
                <div className={styles.subBlock}>
                  <h3 className={styles.subHeading}>{guide.adultDay.facilityTitle}</h3>
                  <p className={styles.sectionText}>{guide.adultDay.facilityLead}</p>
                  <BulletList items={guide.adultDay.facilityItems} />
                  <p className={styles.sectionText}>{guide.adultDay.facilityClose}</p>
                </div>
              </section>

              <section className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>{guide.transport.title}</h2>
                <p className={styles.sectionLead}>{guide.transport.subtitle}</p>
                {guide.transport.body.map((p) => (
                  <p key={p.slice(0, 40)} className={styles.sectionText}>
                    {p}
                  </p>
                ))}
                <div className={styles.subBlock}>
                  <h3 className={styles.subHeading}>{guide.transport.adultTitle}</h3>
                  <BulletList items={guide.transport.adultItems} />
                </div>
                <div className={styles.subBlock}>
                  <h3 className={styles.subHeading}>{guide.transport.homeTitle}</h3>
                  <BulletList items={guide.transport.homeItems} />
                </div>
                {guide.transport.close.map((p) => (
                  <p key={p.slice(0, 40)} className={styles.sectionText}>
                    {p}
                  </p>
                ))}
              </section>

              <section className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>{guide.families.title}</h2>
                {guide.families.body.map((p) => (
                  <p key={p.slice(0, 40)} className={styles.sectionText}>
                    {p}
                  </p>
                ))}
              </section>

              <section className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>{guide.journey.title}</h2>
                <p className={styles.sectionText}>{guide.journey.lead}</p>
                <BulletList items={guide.journey.items} />
                {guide.journey.close.map((p) => (
                  <p key={p.slice(0, 40)} className={styles.sectionText}>
                    {p}
                  </p>
                ))}
              </section>

              <section className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>{guide.whyChoose.title}</h2>
                <p className={styles.sectionText}>{guide.whyChoose.lead}</p>
                <BulletList items={guide.whyChoose.items} />
                <p className={styles.sectionText}>{guide.whyChoose.close}</p>
              </section>

              <section className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>{guide.benefits.title}</h2>
                {guide.benefits.body.map((p) => (
                  <p key={p.slice(0, 40)} className={styles.sectionText}>
                    {p}
                  </p>
                ))}
                <p className={styles.sectionLead}>{guide.benefits.resourcesTitle}</p>
                <ul className={styles.bulletList}>
                  {guide.benefits.resources.map((item) => (
                    <li key={item.href}>
                      <a href={item.href} target="_blank" rel="noopener noreferrer" className={styles.inlineLink}>
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
                <p className={styles.sectionText}>{guide.benefits.note}</p>
              </section>

              <section className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>{guide.commitment.title}</h2>
                {guide.commitment.body.map((p) => (
                  <p key={p.slice(0, 40)} className={styles.sectionText}>
                    {p}
                  </p>
                ))}
              </section>

              <section className={styles.ctaBlock}>
                <h3 className={styles.ctaTitle}>{guide.visit.title}</h3>
                <p className={styles.ctaText}>{guide.visit.body}</p>
                <p className={styles.ctaText}>
                  <strong>{guide.visit.org}</strong>
                  <br />
                  {guide.visit.address}
                  <br />
                  Phone:{" "}
                  <a href={guide.visit.phoneHref} className={styles.inlineLink}>
                    {guide.visit.phone}
                  </a>
                  <br />
                  Email: {guide.visit.email}
                  <br />
                  Website:{" "}
                  <a href={guide.visit.websiteHref} className={styles.inlineLink}>
                    {guide.visit.website}
                  </a>
                  <br />
                  {guide.visit.hours}
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link href="/contact" className="inline-flex rounded-full bg-[var(--brand-navy)] px-5 py-2.5 text-sm font-bold text-white">
                    Schedule a Tour
                  </Link>
                  <Link href="/home-care-agency" className="inline-flex rounded-full bg-[var(--brand-orange)] px-5 py-2.5 text-sm font-bold text-white">
                    Request Home Care
                  </Link>
                  <Link href="/adult-care-center" className="inline-flex rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-bold text-slate-800">
                    Explore Adult Day Care
                  </Link>
                </div>
              </section>

              <section className={styles.closingBlock}>
                {guide.closing.map((line, index) => (
                  <p key={line} className={index === 0 ? styles.closingLead : styles.closingText}>
                    {line}
                  </p>
                ))}
              </section>
            </article>

            <aside className={styles.sidebar}>
              <div className={styles.stepsPanel}>
                <h3 className={styles.stepsTitle}>Next Steps</h3>
                <ul className={styles.stepsList}>
                  {guide.actionSteps.map((step) => (
                    <li key={step} className={styles.stepsItem}>
                      {step}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.ctaPanel}>
                <h3 className={styles.ctaPanelTitle}>Visit Hayat Care Center</h3>
                <p className={styles.ctaPanelText}>
                  {contactDetails.address}
                  <br />
                  Tours daily 9:00 AM – 6:00 PM
                </p>
                <div className={styles.ctaActions}>
                  <Link href="/contact" className={styles.ctaPrimary}>
                    Plan a tour
                  </Link>
                  <a href={contactDetails.phoneHref} className={styles.ctaSecondary}>
                    {contactDetails.phoneLabel}
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50/70 py-14 md:py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className={styles.resourcesHeading}>Helpful next paths</h2>
          <p className={styles.resourcesLead}>
            Explore VA resources and Hayat care options for veterans and military families in Colorado Springs.
          </p>
          <div className={styles.resourceGrid}>
            {guide.resourceCards.map((card) => {
              const inner = (
                <>
                  <div className={styles.resourceMedia}>
                    <Image
                      src={card.image}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className={styles.resourceImage}
                    />
                  </div>
                  <div className={styles.resourceBody}>
                    <span className={styles.resourceTag}>{card.tag}</span>
                    <h3 className={styles.resourceTitle}>{card.title}</h3>
                    <p className={styles.resourceText}>{card.body}</p>
                    <p className={styles.resourceCta}>{card.external ? "Open resource →" : "Explore at Hayat →"}</p>
                  </div>
                </>
              );

              return card.external ? (
                <a
                  key={card.title}
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.resourceCard}
                >
                  {inner}
                </a>
              ) : (
                <Link key={card.title} href={card.href} className={styles.resourceCard}>
                  {inner}
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
