type Stat = { readonly value: string; readonly label: string };

function StatChip({ stat }: { stat: Stat }) {
  return (
    <article className="flex h-full items-center gap-4 rounded-2xl border border-slate-200/90 bg-white px-4 py-3 shadow-sm sm:px-5 sm:py-3.5">
      <span className="inline-flex shrink-0 rounded-xl  p-[2px] shadow-sm shadow-[#ff9f45]/90">
        <span className="inline-flex min-h-[2.75rem] min-w-[3.25rem] items-center justify-center rounded-[0.625rem] bg-white px-2 text-center text-base font-bold tabular-nums text-[#ff7a2f] sm:min-w-[3.5rem] sm:text-lg">
          {stat.value}
        </span>
      </span>
      <p className="text-left text-xs font-medium leading-snug text-slate-600 sm:text-sm">{stat.label}</p>
    </article>
  );
}

export default function CommunityStatsMarquee({ items }: { items: readonly Stat[] }) {
  return (
    <section className="home-surface-soft border-b border-slate-200 py-10 md:py-12">
      <div className="mx-auto grid w-full max-w-12xl gap-3 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 xl:px-10">
        {items.map((stat) => (
          <StatChip key={stat.label} stat={stat} />
        ))}
      </div>
    </section>
  );
}
