import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import JobApplicationForm from "@/components/careers/JobApplicationForm";
import { getJobById } from "@/lib/careersApi";

type ApplyPageProps = {
  params: Promise<{ id: string }>;
};

export const metadata: Metadata = {
  title: "Apply for Job | Hayat Care Center",
  description: "Submit your application for an open role at Hayat Care Center.",
};

export default async function ApplyPage({ params }: ApplyPageProps) {
  const { id } = await params;
  const job = await getJobById(id);

  if (!job) {
    notFound();
  }

  return (
    <section className="hero-grid">
      <div className="mx-auto max-w-3xl px-4 py-12 md:py-16">
        <Link
          href={`/careers/${job._id}`}
          className="text-sm font-semibold text-[var(--brand-blue)] hover:underline"
        >
          ← Back to job details
        </Link>
        <h1 className="mt-4 text-3xl font-bold text-[var(--ink)] md:text-4xl">Apply online</h1>
        <p className="mt-3 text-sm leading-6 text-[var(--ink-soft)]">
          Complete the form below. Your resume is sent securely with your application.
        </p>

        <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
          <JobApplicationForm jobId={job._id} jobTitle={job.title} />
        </div>
      </div>
    </section>
  );
}
