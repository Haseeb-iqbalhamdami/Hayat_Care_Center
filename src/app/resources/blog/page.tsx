import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollFloat from "@/components/reactbits/ScrollFloat";
import { blogPosts } from "@/data/siteContent";
import styles from "./BlogPage.module.css";

export const metadata: Metadata = {
  title: "Senior Care Blog in Colorado Springs | Hayat Care Center",
  description:
    "Read senior care articles, wellness tips, family guidance, and aging insights from Hayat Care Center in Colorado Springs.",
  keywords: [
    "senior care blog Colorado Springs",
    "senior wellness tips Colorado Springs",
    "aging guidance blog Colorado Springs",
    "caregiver advice Colorado Springs",
    "senior living articles Colorado Springs",
    "Hayat Care Center blog",
  ],
  alternates: {
    canonical: "/resources/blog",
  },
  openGraph: {
    title: "Senior Care Blog in Colorado Springs | Hayat Care Center",
    description:
      "Articles on senior wellness, caregiving, healthy aging, and family support in Colorado Springs.",
    url: "https://www.hayatcarecenter.org/resources/blog",
    type: "website",
  },
};

const [featuredPost, ...secondaryPosts] = blogPosts;
const spotlightPosts = secondaryPosts.slice(0, 3);

export default function BlogPage() {

  // ✅ SCHEMA ADDED ONLY
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Blog",
        name: "Hayat Care Center Blog",
        url: "https://www.hayatcarecenter.org/resources/blog",
        description:
          "Senior care articles, wellness tips, caregiver guidance, and aging resources for families in Colorado Springs.",
        publisher: {
          "@type": "Organization",
          name: "Hayat Care Center",
        },
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
            name: "Blog",
            item: "https://www.hayatcarecenter.org/resources/blog",
          },
        ],
      },
    ],
  };

  return (
    <>
      {/* ✅ SCHEMA SCRIPT */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      <section className="hero-grid">
        <div className="mx-auto max-w-7xl px-4 py-14 md:py-16">
          <p data-reveal className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-blue)]">
            Blog
          </p>
          <div data-reveal data-reveal-delay={90}>
            <ScrollFloat
              as="h1"
              containerClassName="mt-3 max-w-4xl text-4xl font-bold text-[var(--ink)] md:text-5xl"
              textClassName="text-balance"
            >
              Insights On Senior Wellness, Community, And Family Support
            </ScrollFloat>
          </div>
          <p
            data-reveal
            data-reveal-delay={180}
            className="mt-4 max-w-3xl text-base leading-7 text-[var(--ink-soft)] md:text-lg"
          >
            Practical articles written for families and caregivers who are exploring senior living, supporting a loved one,
            or looking for clear guidance on aging well.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className={styles.featureGrid}>
            <Link
              href={`/resources/blog/${featuredPost.slug}`}
              aria-label={`Read article ${featuredPost.title}`}
              data-reveal
              className={styles.featuredCard}
            >
              <Image
                src={featuredPost.image}
                alt={`Senior care blog article about ${featuredPost.title} in Colorado Springs`}
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                className={styles.featuredImage}
                priority
              />
              <div className={styles.featuredShade} />
              <div className={styles.featuredContent}>
                <p>
                  <span className={styles.badge}>{featuredPost.category}</span>
                  <span className={styles.metaText}>
                    {featuredPost.date} · {featuredPost.readTime} read
                  </span>
                </p>
                <h2 className={styles.featuredTitle}>{featuredPost.title}</h2>
                <p className={styles.featuredExcerpt}>{featuredPost.excerpt}</p>
                <ul className={styles.featuredHighlights}>
                  {featuredPost.highlights.map((point) => (
                    <li key={point} className={styles.featuredHighlight}>
                      {point}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm font-semibold text-white/95">Read Full Article →</p>
              </div>
            </Link>

            <div className={styles.spotlightStack}>
              {spotlightPosts.map((post, index) => (
                <Link
                  key={post.title}
                  href={`/resources/blog/${post.slug}`}
                  aria-label={`Read article ${post.title}`}
                  data-reveal
                  data-reveal-delay={110 + index * 80}
                  className={styles.spotlightCard}
                >
                  <div className={styles.spotlightMedia}>
                    <Image
                      src={post.image}
                      alt={`Senior wellness blog ${post.title}`}
                      fill
                      sizes="120px"
                      className={styles.spotlightImage}
                    />
                  </div>
                  <div className={styles.spotlightBody}>
                    <p className={styles.spotlightMeta}>
                      {post.category} · {post.readTime}
                    </p>
                    <h3 className={styles.spotlightTitle}>{post.title}</h3>
                    <p className={styles.spotlightExcerpt}>{post.excerpt}</p>
                    <p className="mt-2 text-xs font-semibold text-[var(--brand-blue)]">Read Full Article →</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div data-reveal className={styles.contentHeader}>
            <p className={styles.sectionTag}>Blog Content</p>
            <h2 className={styles.contentTitle}>Latest Care Guides For Families</h2>
            <p className={styles.contentBody}>
              Every article is written to help families make practical care decisions with confidence, covering daily
              routines, wellness, nutrition, and community life.
            </p>
          </div>

          <div className={styles.journalGrid}>
            {blogPosts.map((post, index) => (
              <Link
                key={post.title}
                href={`/resources/blog/${post.slug}`}
                aria-label={`Read article ${post.title}`}
                data-reveal
                data-reveal-delay={index * 75}
                data-tilt
                className={styles.journalCard}
              >
                <div className={styles.journalMedia}>
                  <Image
                    src={post.image}
                    alt={`Senior care article ${post.title}`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 740px) 50vw, 100vw"
                    className={styles.journalImage}
                  />
                </div>
                <div className={styles.journalBody}>
                  <p className={styles.journalMeta}>
                    {post.category} · {post.date} · {post.readTime} read
                  </p>
                  <h3 className={styles.journalTitle}>{post.title}</h3>
                  <p className={styles.journalExcerpt}>{post.excerpt}</p>
                  <div className={styles.tagRow}>
                    {post.highlights.map((point) => (
                      <span key={point} className={styles.inlineTag}>
                        {point}
                      </span>
                    ))}
                  </div>
                  <p className="mt-3 text-sm font-semibold text-[var(--brand-blue)]">Read Full Article →</p>
                </div>
              </Link>
            ))}
          </div>

          <div data-reveal data-reveal-delay={200} className="mt-12 text-center">
            <p className="text-sm text-[var(--ink-soft)]">Looking for specific guidance on senior living decisions?</p>
            <Link
              href="/resources/senior-living-guide"
              className="mt-3 inline-flex rounded-full bg-[var(--brand-navy)] px-6 py-3 text-sm font-bold text-white"
            >
              Explore The Senior Living Guide
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
