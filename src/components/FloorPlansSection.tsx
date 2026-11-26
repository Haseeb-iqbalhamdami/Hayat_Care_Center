import Link from "next/link";
import { facilityRooms } from "@/data/siteContent";

export default function FloorPlansSection() {
  return (
    <section id="floor-plans" className="bg-[var(--secondary)] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-[var(--foreground)] md:text-4xl">Our Rooms & Spaces</h2>
          <p className="mx-auto max-w-2xl text-[var(--text-muted)]">
            Explore the rooms available at Hayat Care Center — rest room, craft room, dining,
            recreation, wellness, and more.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">
          <ul className="divide-y divide-slate-100">
            {facilityRooms.map((room) => (
              <li
                key={room.title}
                className="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-start sm:gap-6 md:px-7"
              >
                <p className="min-w-[12rem] font-bold text-[var(--primary)] md:min-w-[14rem]">{room.title}</p>
                <p className="text-sm leading-6 text-[var(--text-muted)]">{room.description}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary)] transition-colors hover:text-[var(--primary-dark)]"
          >
            Schedule a tour to see these rooms
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
