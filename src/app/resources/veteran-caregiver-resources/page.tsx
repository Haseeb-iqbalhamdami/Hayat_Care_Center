import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollFloat from "@/components/reactbits/ScrollFloat";
import { contactDetails, veteranCaregiverResourcesGuide } from "@/data/siteContent";
import styles from "./VeteranResources.module.css";

const guide = veteranCaregiverResourcesGuide;

export const metadata: Metadata = {
  title: "Top Veteran Caregiver Resources in Colorado Springs | Hayat Care Center",
  description: guide.excerpt,
  keywords: [
    "veteran caregiver resources Colorado Springs",
    "VA caregiver support Colorado Springs",
    "veteran adult day care Colorado Springs",
    "veteran home care Colorado Springs",
    "caregiver respite for veterans",
    "Hayat Care Center veteran families",
  ],
  alternates: {
    canonical: "/resources/veteran-caregiver-resources",
  },
  openGraph: {
    title: "Top Veteran Caregiver Resources That Actually Help | Hayat Care Center",
    description: guide.excerpt,
    url: "https://www.hayatcarecenter.org/resources/veteran-caregiver-resources",
    type: "article",
  },
};

export default function VeteranCaregiverResourcesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: guide.title,
        description: guide.excerpt,
        datePublished: "2026-11-20",
        author: {
          "@type": "Organization",
          name: "Hayat Care Center",
        },
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
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
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
            name: "Resources",
            item: "https://www.hayatcarecenter.org/resources/blog",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Veteran Caregiver Resources",
            item: "https://www.hayatcarecenter.org/resources/veteran-caregiver-resources",
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
        <div className="mx-auto max-w-7xl px-4 py-12 md:py-14">
          <div className={styles.heroWrap}>
            <div>
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
              <p className={styles.heroExcerpt}>{guide.excerpt}</p>
              <p className={styles.heroMeta}>
                <span className={styles.badge}>Veteran Families</span>
                <span>{guide.date}</span>
                <span>•</span>
                <span>{guide.readTime}</span>
                <span>•</span>
                <span>By Hayat Care Team</span>
              </p>
            </div>

            <div className={styles.heroMedia}>
              <Image
                src={guide.heroImage}
                alt={guide.heroImageAlt}
                fill
                sizes="(min-width: 1024px) 58vw, 100vw"
                className={styles.heroImage}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className={styles.layout}>
            <article className={styles.article}>
              {guide.intro.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={styles.intro}>
                  {paragraph}
                </p>
              ))}

              {guide.sections.map((section, index) => (
                <section key={section.title} className={styles.sectionBlock}>
                  <h2 className={styles.sectionHeading}>{section.title}</h2>
                  <p className={styles.sectionText}>{section.content}</p>

                  {"subsections" in section &&
                    section.subsections?.map((sub) => (
                      <div key={sub.title} className={styles.subBlock}>
                        <h3 className={styles.subHeading}>{sub.title}</h3>
                        <p className={styles.sectionText}>{sub.content}</p>
                      </div>
                    ))}

                  {index === 2 && (
                    <div className={styles.midMedia}>
                      <Image
                        src={guide.midImage}
                        alt={guide.midImageAlt}
                        fill
                        sizes="(min-width: 1024px) 55vw, 100vw"
                        className={styles.midImage}
                      />
                    </div>
                  )}
                </section>
              ))}

              <section className={styles.sectionBlock}>
                <h2 className={styles.sectionHeading}>Questions families ask us</h2>
                <div className={styles.faqWrap}>
                  {guide.faq.map((item) => (
                    <div key={item.question} className={styles.faqItem}>
                      <h3 className={styles.faqQuestion}>{item.question}</h3>
                      <p className={styles.faqAnswer}>{item.answer}</p>
                    </div>
                  ))}
                </div>
              </section>
            </article>

            <aside className={styles.sidebar}>
              <div className={styles.stepsPanel}>
                <h3 className={styles.stepsTitle}>Key Takeaways</h3>
                <ul className={styles.stepsList}>
                  {guide.actionSteps.map((step) => (
                    <li key={step} className={styles.stepsItem}>
                      {step}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.ctaPanel}>
                <h3 className={styles.ctaPanelTitle}>Need a local plan that fits?</h3>
                <p className={styles.ctaPanelText}>
                  Tour Hayat at {contactDetails.address}. We help veteran families pair daytime support,
                  home care, and rides into one clear path.
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
          <div className={styles.resourcesSection}>
            <h2 className={styles.resourcesHeading}>Resource toolkit</h2>
            <p className={styles.resourcesLead}>
              Start with the sharpest pain point in your home — then layer VA support, local help, and
              Hayat services that your loved one will actually accept.
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
                      <p className={styles.resourceCta}>
                        {card.external ? "Open resource →" : "Explore at Hayat →"}
                      </p>
                    </div>
                  </>
                );

                if (card.external) {
                  return (
                    <a
                      key={card.title}
                      href={card.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.resourceCard}
                    >
                      {inner}
                    </a>
                  );
                }

                return (
                  <Link key={card.title} href={card.href} className={styles.resourceCard}>
                    {inner}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
