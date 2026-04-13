import Image from "next/image";
import Link from "next/link";

export type VerticalShowcaseItem = {
  index: string;
  title: string;
  tagline: string;
  description: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
};

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-4-4 4 4-4 4" />
    </svg>
  );
}

function VerticalsBranchGraphic() {
  return (
    <div
      data-reveal
      data-reveal-delay={96}
      className="mx-auto mb-7 flex max-w-5xl flex-col items-center gap-3 md:mb-9"
    >
      <p className="text-center text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-400">
        One organization · Three ways we care
      </p>
      <svg
        className="verticals-branch-svg h-14 w-[17rem] text-[#073D7A] md:h-16 md:w-[19rem]"
        viewBox="0 0 280 64"
        fill="none"
        aria-hidden
      >
        <path
          className="vb-path vb-path--stem"
          d="M140 12v16"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.55"
        />
        <path
          className="vb-path vb-path--left"
          d="M140 28L48 52"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.55"
        />
        <path
          className="vb-path vb-path--mid"
          d="M140 28v26"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.55"
        />
        <path
          className="vb-path vb-path--right"
          d="M140 28L232 52"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.55"
        />
        <circle className="vb-node vb-node--root" cx="140" cy="12" r="4" fill="currentColor" opacity="0.9" />
        <circle className="vb-node vb-node--left" cx="48" cy="52" r="3.5" fill="#d5664b" />
        <circle className="vb-node vb-node--mid" cx="140" cy="56" r="3.5" fill="#d5664b" />
        <circle className="vb-node vb-node--right" cx="232" cy="52" r="3.5" fill="#d5664b" />
      </svg>
    </div>
  );
}

function VerticalCard({ item, revealDelay }: { item: VerticalShowcaseItem; revealDelay: number }) {
  return (
    <Link
      href={item.href}
      data-reveal
      data-reveal-delay={revealDelay}
      data-vertical-card
      className="group relative flex h-full min-h-[320px] flex-col overflow-hidden rounded-[1.25rem] border border-slate-200/80 bg-white shadow-[0_10px_28px_-14px_rgba(7,61,122,0.32)] ring-1 ring-white/80 transition duration-500 ease-out hover:-translate-y-1.5 hover:border-[#073D7A]/25 hover:shadow-[0_22px_44px_-16px_rgba(7,61,122,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D5664B] focus-visible:ring-offset-2 motion-reduce:transition-none motion-reduce:hover:translate-y-0 md:min-h-[360px]"
      aria-label={`${item.title}: ${item.tagline}. Learn more.`}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100" aria-hidden>
        <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#073D7A]/10 blur-2xl" />
        <div className="absolute -bottom-8 -left-8 h-24 w-24 rounded-full bg-[#D5664B]/15 blur-2xl" />
      </div>

      <div className="vertical-card__media relative h-[46%] min-h-[170px] w-full shrink-0 overflow-hidden bg-slate-100">
        <Image
          src={item.imageSrc}
          alt={item.imageAlt}
          fill
          className="object-cover object-center transition duration-700 ease-out motion-reduce:transition-none group-hover:scale-[1.07]"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent opacity-75 transition duration-500 group-hover:opacity-90"
          aria-hidden
        />
        <span className="absolute left-3 top-3 inline-flex rounded-full border border-white/60 bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#073D7A] shadow-sm backdrop-blur-sm sm:text-[11px]">
          {item.index}
        </span>
        <span className="absolute inset-x-3 bottom-3 h-px bg-gradient-to-r from-[#D5664B] via-white/80 to-transparent" aria-hidden />
      </div>

      <div className="vertical-card__body relative flex min-h-0 flex-1 flex-col px-4 pb-4 pt-3.5 sm:px-5 sm:pb-5">
        <h3 className="text-lg font-bold leading-snug tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-[#073D7A]">
          {item.title}
        </h3>
        <p className="mt-1 text-xs font-semibold uppercase tracking-[0.11em] text-[#D5664B] transition duration-300 group-hover:text-[#c4553a] sm:text-[0.8rem]">
          {item.tagline}
        </p>
        <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-slate-600">{item.description}</p>
        <span className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-full border border-[#073D7A]/15 bg-[#073D7A]/5 px-3.5 py-1.5 text-sm font-semibold text-[#073D7A] transition-[gap,transform,background-color] duration-300 ease-out group-hover:gap-2.5 group-hover:bg-[#073D7A]/10">
          Learn more
          <ArrowRight className="h-3.5 w-3.5 shrink-0 text-[#D5664B] transition-transform duration-300 group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}

export default function VerticalShowcaseCards({ items }: { items: VerticalShowcaseItem[] }) {
  return (
    <div className="mx-auto mt-10 max-w-6xl lg:mt-12">
      <VerticalsBranchGraphic />
      <div className="grid grid-cols-1 items-stretch gap-5 sm:gap-6 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
        {items.map((item, index) => (
          <VerticalCard key={item.href} item={item} revealDelay={130 + index * 120} />
        ))}
      </div>
    </div>
  );
}
