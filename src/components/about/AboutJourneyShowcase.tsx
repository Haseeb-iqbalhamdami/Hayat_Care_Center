import Image from "next/image";

type Phase = {
  phase: string;
  title: string;
  body: string;
  bullets: string[];
  image: string;
  imageAlt: string;
};

const phases: Phase[] = [
  {
    phase: "01",
    title: "Listen first, then map support",
    body: "Each recommendation starts from routine, mobility, and family bandwidth so the plan is realistic from day one.",
    bullets: [
      "Clear intake conversation with family and participant",
      "Needs are prioritized before service scheduling",
      "Home care and center care can be combined in one path",
    ],
    image: "/images/home/gallery-comfortable-lounge.jpg",
    imageAlt: "Older adults relaxing in a comfortable community lounge",
  },
  {
    phase: "02",
    title: "Coordinate services around real life",
    body: "Hayat aligns services across center attendance, home support, and transportation so families do not manage separate systems.",
    bullets: [
      "Single team communication and transparent updates",
      "Adjustments made quickly when needs change",
      "Predictable routines reduce family stress",
    ],
    image: "/images/home/gallery-wellness-programs.jpg",
    imageAlt: "Daily wellness activities in an adult care center",
  },
  {
    phase: "03",
    title: "Sustain progress with ongoing updates",
    body: "The focus is steady follow-through, not one-time setup. Care evolves as health, preferences, and schedules shift.",
    bullets: [
      "Regular status notes and handoff communication",
      "Ongoing quality checks across service lines",
      "Respectful support that protects dignity and independence",
    ],
    image: "/images/home/gallery-compassionate-care.jpg",
    imageAlt: "Compassionate caregiver support for older adult well-being",
  },
];

export default function AboutJourneyShowcase() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-6 md:p-10">
      <p className="inline-flex items-center rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-[0.67rem] font-bold uppercase tracking-[0.16em] text-amber-700">
        How it works
      </p>
      <h2 className="mt-3 max-w-2xl font-[family-name:var(--font-playfair),serif] text-2xl font-bold leading-tight text-slate-900 md:text-3xl">
        A more connected model of care for families and participants
      </h2>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-500">
        Hayat is built to keep care coherent from first conversation through daily execution.
        Here is how the model works, phase by phase.
      </p>

      <div className="mt-10 grid gap-8 md:grid-cols-3">
        {phases.map((phase) => (
          <div key={phase.phase} data-reveal className="group">
            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src={phase.image}
                alt={phase.imageAlt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(min-width: 768px) 33vw, 90vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
              <span className="absolute bottom-3 left-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-xs font-bold text-[var(--brand-navy)] backdrop-blur-sm">
                {phase.phase}
              </span>
            </div>

            {/* Content */}
            <h3 className="mt-4 text-base font-bold text-slate-900">{phase.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-500">{phase.body}</p>

            <ul className="mt-3 space-y-1.5">
              {phase.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-2 text-xs leading-relaxed text-slate-600">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" aria-hidden />
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
