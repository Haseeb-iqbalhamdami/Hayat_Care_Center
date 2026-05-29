"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const inputClassName =
  "mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50/70 px-3.5 py-3 text-sm text-slate-900 outline-none transition focus:border-[#D5664B] focus:bg-white focus:ring-2 focus:ring-[#ffd976]";

interface JobApplicationFormProps {
  jobId: string;
  jobTitle: string;
}

export default function JobApplicationForm({ jobId, jobTitle }: JobApplicationFormProps) {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setMessage(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const resume = formData.get("resume");
    if (!(resume instanceof File) || resume.size === 0) {
      setStatus("error");
      setMessage("Please attach your resume as a PDF file.");
      return;
    }

    if (resume.type !== "application/pdf" && !resume.name.toLowerCase().endsWith(".pdf")) {
      setStatus("error");
      setMessage("Resume must be a PDF file.");
      return;
    }

    if (resume.size > 10 * 1024 * 1024) {
      setStatus("error");
      setMessage("Resume must be 10MB or smaller.");
      return;
    }

    try {
      const response = await fetch(`/api/careers/${encodeURIComponent(jobId)}/apply`, {
        method: "POST",
        body: formData,
      });

      const result = (await response.json().catch(() => null)) as {
        ok?: boolean;
        message?: string;
      } | null;

      if (!response.ok || !result?.ok) {
        setStatus("error");
        setMessage(result?.message || "Unable to submit your application. Please try again.");
        return;
      }

      setStatus("success");
      setMessage(result.message || "Thank you! Your application has been submitted.");
      form.reset();
    } catch {
      setStatus("error");
      setMessage("Network error. Please check your connection and try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <p className="text-sm text-[var(--ink-soft)]">
        Applying for: <span className="font-semibold text-[var(--ink)]">{jobTitle}</span>
      </p>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-semibold text-[var(--ink)]">
            Full name *
          </label>
          <input id="name" name="name" required maxLength={120} className={inputClassName} />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-semibold text-[var(--ink)]">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            maxLength={120}
            className={inputClassName}
          />
        </div>
        <div>
          <label htmlFor="location" className="text-sm font-semibold text-[var(--ink)]">
            Location *
          </label>
          <input id="location" name="location" required maxLength={120} className={inputClassName} />
        </div>
        <div>
          <label htmlFor="minimumJoiningDate" className="text-sm font-semibold text-[var(--ink)]">
            Earliest joining date
          </label>
          <input
            id="minimumJoiningDate"
            name="minimumJoiningDate"
            type="date"
            className={inputClassName}
          />
        </div>
        <div>
          <label htmlFor="salaryMinExpected" className="text-sm font-semibold text-[var(--ink)]">
            Expected salary (min) *
          </label>
          <input
            id="salaryMinExpected"
            name="salaryMinExpected"
            type="number"
            min={0}
            required
            className={inputClassName}
          />
        </div>
        <div>
          <label htmlFor="salaryMaxExpected" className="text-sm font-semibold text-[var(--ink)]">
            Expected salary (max) *
          </label>
          <input
            id="salaryMaxExpected"
            name="salaryMaxExpected"
            type="number"
            min={0}
            required
            className={inputClassName}
          />
        </div>
        <div>
          <label htmlFor="experienceYears" className="text-sm font-semibold text-[var(--ink)]">
            Years of experience *
          </label>
          <input
            id="experienceYears"
            name="experienceYears"
            type="number"
            min={0}
            step={0.5}
            required
            className={inputClassName}
          />
        </div>
        <div>
          <label htmlFor="previousJob" className="text-sm font-semibold text-[var(--ink)]">
            Previous employer (optional)
          </label>
          <input id="previousJob" name="previousJob" maxLength={200} className={inputClassName} />
        </div>
      </div>

      <div>
        <label htmlFor="resume" className="text-sm font-semibold text-[var(--ink)]">
          Resume (PDF) *
        </label>
        <input
          id="resume"
          name="resume"
          type="file"
          accept=".pdf,application/pdf"
          required
          className="mt-1.5 block w-full text-sm text-[var(--ink-soft)] file:mr-4 file:rounded-full file:border-0 file:bg-[var(--brand-navy)] file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white"
        />
      </div>

      {message ? (
        <p
          className={`rounded-xl px-4 py-3 text-sm ${
            status === "success"
              ? "bg-emerald-50 text-emerald-800"
              : "bg-red-50 text-red-800"
          }`}
          role="status"
        >
          {message}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "submitting" || status === "success"}
        className="inline-flex rounded-full bg-[var(--brand-orange)] px-6 py-3 text-sm font-bold text-white disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" ? "Submitting…" : "Submit application"}
      </button>
    </form>
  );
}
