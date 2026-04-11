import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ScrollFloat from "@/components/reactbits/ScrollFloat";
import { blogPosts, getBlogPostBySlug } from "@/data/siteContent";
import styles from "./BlogDetailPage.module.css";

type BlogDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Blog | Hayat Care Centers",
      description: "Senior wellness and family care guidance from Hayat Care Centers.",
    };
  }

  return {
    title: `${post.title} | Hayat Blog`,
    description: post.excerpt,
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 3);

  return (
    <>
      <section className="hero-grid">
        <div className="mx-auto max-w-7xl px-4 py-12 md:py-14">
          <div className={styles.heroWrap}>
            <div>
              <Link href="/resources/blog" className={styles.backLink}>
                &larr; Back To Blog
              </Link>
              <div className="mt-3">
                <ScrollFloat as="h1" containerClassName={styles.heroTitle} textClassName="text-balance">
                  {post.title}
                </ScrollFloat>
              </div>
              <p className={styles.heroExcerpt}>{post.excerpt}</p>
              <p className={styles.heroMeta}>
                <span className={styles.badge}>{post.category}</span>
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime} read</span>
                <span>•</span>
                <span>By {post.author}</span>
              </p>
            </div>

            <div className={styles.heroMedia}>
              <Image src={post.image} alt={post.imageAlt} fill sizes="(min-width: 1024px) 58vw, 100vw" className={styles.heroImage} priority />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className={styles.articleGrid}>
            <article className={styles.articleBody}>
              <p className={styles.overview}>{post.detail.overview}</p>

              {post.detail.sections.map((section) => (
                <section key={section.title} className={styles.sectionBlock}>
                  <h2 className={styles.sectionHeading}>{section.title}</h2>
                  <p className={styles.sectionText}>{section.content}</p>
                </section>
              ))}

              <section className={styles.ctaBlock}>
                <h3 className={styles.ctaTitle}>Need Personalized Guidance For Your Family</h3>
                <p className={styles.ctaText}>
                  Our team can help you evaluate care options and build a practical plan that fits your loved one and your
                  schedule.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link href="/contact" className="inline-flex rounded-full bg-[var(--brand-navy)] px-5 py-2.5 text-sm font-bold text-white">
                    Book A Consultation
                  </Link>
                  <Link
                    href="/resources/senior-living-guide"
                    className="inline-flex rounded-full bg-[var(--brand-orange)] px-5 py-2.5 text-sm font-bold text-white"
                  >
                    Read Senior Living Guide
                  </Link>
                </div>
              </section>
            </article>

            <aside className={styles.stepsPanel}>
              <h3 className={styles.stepsTitle}>Key Takeaways</h3>
              <ul className={styles.stepsList}>
                {post.detail.actionSteps.map((step) => (
                  <li key={step} className={styles.stepsItem}>
                    {step}
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-bold text-[var(--ink)] md:text-4xl">More From The Blog</h2>
          <p className="mt-3 max-w-3xl text-[var(--ink-soft)]">
            Continue exploring practical articles for families navigating care decisions and healthy aging.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {relatedPosts.map((related, index) => (
              <Link
                key={related.slug}
                href={`/resources/blog/${related.slug}`}
                data-reveal
                data-reveal-delay={index * 90}
                className={styles.relatedCard}
              >
                <div className={styles.relatedMedia}>
                  <Image
                    src={related.image}
                    alt={related.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className={styles.relatedImage}
                  />
                </div>
                <div className={styles.relatedBody}>
                  <p className={styles.relatedMeta}>
                    {related.category} • {related.readTime}
                  </p>
                  <h3 className={styles.relatedTitle}>{related.title}</h3>
                  <p className={styles.relatedExcerpt}>{related.excerpt}</p>
                  <p className={styles.relatedCta}>Read Full Article &rarr;</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
