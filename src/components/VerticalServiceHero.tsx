import Image from "next/image";
import Link from "next/link";
import { contactDetails } from "@/data/siteContent";

export type VerticalServiceHeroCrumb = { label: string; href?: string };

export default function VerticalServiceHero({
  breadcrumbs,
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
  imageSrc,
  imageAlt,
}: {
  breadcrumbs: VerticalServiceHeroCrumb[];
  title: string;
  subtitle: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  imageSrc: string;
  imageAlt: string;
}) {
  return (
    <section className="relative isolate min-h-[420px] overflow-hidden border-b border-slate-900/25 sm:min-h-[460px] lg:min-h-[500px]">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#021022]/75 via-[#052a52]/62 to-[#073d7a]/40"
        aria-hidden
      />  
      {/* Light left vignette for text — kept subtle so the photo stays visible */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-[min(100%,52rem)] bg-gradient-to-r from-[#021022]/28 to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_80%_at_70%_40%,transparent_20%,rgba(2,16,34,0.55)_100%)]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex min-h-[inherit] w-full max-w-[1920px] flex-col justify-center px-4 py-14 sm:px-6 md:py-20 lg:py-24 xl:px-10">
        <div className="mx-auto w-full max-w-7xl">
          <nav aria-label="Breadcrumb" className="text-xs font-medium text-white/90 sm:text-sm">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
              {breadcrumbs.map((c, i) => (
                <li key={`${c.label}-${i}`} className="flex items-center gap-2">
                  {i > 0 && <span className="text-white/35" aria-hidden>/</span>}
                  {c.href ? (
                    <Link href={c.href} className="transition hover:text-white">
                      {c.label}
                    </Link>
                  ) : (
                    <span className="text-white/95" aria-current="page">
                      {c.label}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>

          <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight !text-[#f4b5a8] drop-shadow-[0_2px_24px_rgba(0,0,0,0.55)] md:text-5xl lg:text-[3.35rem]">
            {title}
          </h1>
          <p className="mt-3 max-w-2xl text-base font-semibold text-white md:text-lg">{subtitle}</p>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.35)] md:text-lg">
            {description}
          </p>

          <div className="mt-9 flex max-w-3xl flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
            <Link
              href={primaryCta.href}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--brand-gold)] px-7 py-3.5 text-sm font-bold text-white shadow-[0_12px_36px_-12px_rgba(0,0,0,0.45)] transition hover:bg-[var(--brand-gold-bright)]"
            >
              {primaryCta.label}
              <svg className="h-4 w-4 opacity-95" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            {secondaryCta ? (
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center justify-center rounded-full border-2 border-white/85 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/18"
              >
                {secondaryCta.label}
              </Link>
            ) : null}
            <a
              href={contactDetails.phoneHref}
              className="inline-flex items-center gap-2 text-sm font-semibold text-white sm:ml-1"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/25">
                <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </span>
              {contactDetails.phoneLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
