import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  formatDate,
  formatEmploymentType,
  formatSalaryRange,
  getJobById,
} from "@/lib/careersApi";

type JobDetailsPageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: JobDetailsPageProps): Promise<Metadata> {
  const { id } = await params;
  const job = await getJobById(id);

  if (!job) {
    return {
      title: "Job Not Found | Hayat Care Center",
    };
  }

  return {
    title: `${job.title} | Careers at Hayat Care Center`,
    description: job.description.slice(0, 160),
  };
}

export default async function JobDetailsPage({ params }: JobDetailsPageProps) {
  const { id } = await params;
  const job = await getJobById(id);

  if (!job) {
    notFound();
  }

  const salary = formatSalaryRange(job.salaryMin, job.salaryMax);
  const joiningDate = formatDate(job.minimumJoiningDate);

  return (
    <>
      <section className="hero-grid border-b border-slate-200">
        <div className="mx-auto max-w-4xl px-4 py-12 md:py-14">
          <Link
            href="/careers"
            className="text-sm font-semibold text-[var(--brand-blue)] hover:underline"
          >
            ← Back to careers
          </Link>
          <p className="mt-4 text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-blue)]">
            {formatEmploymentType(job.employmentType)}
          </p>
          <h1 className="mt-3 text-3xl font-bold text-[var(--ink)] md:text-4xl">{job.title}</h1>
          <div className="mt-4 flex flex-wrap gap-3 text-sm text-[var(--ink-soft)]">
            {job.location ? <span>{job.location}</span> : null}
            {salary ? (
              <>
                <span aria-hidden>•</span>
                <span>{salary}</span>
              </>
            ) : null}
            {joiningDate ? (
              <>
                <span aria-hidden>•</span>
                <span>Join from {joiningDate}</span>
              </>
            ) : null}
          </div>
          <Link
            href={`/careers/${job._id}/apply`}
            className="mt-8 inline-flex rounded-full bg-[var(--brand-orange)] px-6 py-3 text-sm font-bold text-white"
          >
            Apply for this role
          </Link>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-xl font-bold text-[var(--ink)]">About this role</h2>
          <p className="mt-4 whitespace-pre-line text-base leading-7 text-[var(--ink-soft)]">
            {job.description}
          </p>

          {job.skills && job.skills.length > 0 ? (
            <div className="mt-10">
              <h3 className="text-lg font-bold text-[var(--ink)]">Skills</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {job.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full bg-[var(--brand-blue)]/10 px-3 py-1 text-xs font-semibold text-[var(--brand-blue)]"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {job.benefits && job.benefits.length > 0 ? (
            <div className="mt-10">
              <h3 className="text-lg font-bold text-[var(--ink)]">Benefits</h3>
              <ul className="mt-3 space-y-2">
                {job.benefits.map((benefit) => (
                  <li key={benefit} className="flex gap-3 text-sm text-[var(--ink-soft)]">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[var(--brand-orange)]" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          <Link
            href={`/careers/${job._id}/apply`}
            className="mt-10 inline-flex rounded-full bg-[var(--brand-navy)] px-6 py-3 text-sm font-bold text-white"
          >
            Apply now
          </Link>
        </div>
      </section>
    </>
  );
}
