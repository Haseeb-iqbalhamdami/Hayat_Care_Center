import type { Metadata } from "next";
import Link from "next/link";
import AdmissionForm from "@/components/admission/AdmissionForm";

export const metadata: Metadata = {
  title: "Admission Form | Hayat Care Center",
  description:
    "Complete the Hayat Care Center admission form online for adult day care enrollment, intake review, and program scheduling.",
  alternates: {
    canonical: "/admission-form",
  },
};

const requiredDocuments = [
  "Client medical report signed by a licensed physician within the last 6 months",
  "Guardianship, conservatorship, or power of attorney documents if applicable",
  "Insurance cards and government-issued identification",
  "Immunization records or physician statement of contraindications",
  "Tuberculosis screening documentation from the last 12 months",
  "Advance directives, living will, or CPR/DNR orders if applicable",
] as const;

export default function AdmissionFormPage() {
  return (
    <>
      <section className="hero-grid border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-14 md:py-18">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-blue)]">
            Direct Intake Link
          </p>
          <h1 className="mt-3 max-w-4xl text-4xl font-bold text-[var(--ink)] md:text-5xl">
            Hayat Admission Form
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-[var(--ink-soft)] md:text-lg">
            This page gives clients and families a direct link to submit intake details online.
            The fields are based on your Hayat admission packet so your team can review the
            client, medical, schedule, and contact information before follow-up.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="#form"
              className="inline-flex items-center justify-center rounded-full bg-[var(--brand-navy)] px-7 py-3 text-sm font-bold text-white transition hover:bg-[#052a52]"
            >
              Go To Form
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border-2 border-[var(--brand-navy)] px-7 py-3 text-sm font-bold text-[var(--brand-navy)] transition hover:bg-[var(--brand-navy)] hover:text-white"
            >
              Contact Intake Team
            </Link>
          </div>
          <p className="mt-5 text-sm font-medium text-[var(--ink-soft)]">
            Direct link: <span className="text-[var(--brand-navy)]">/admission-form</span>
          </p>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50/60 py-14 md:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 md:p-7">
            <h2 className="text-2xl font-bold text-[var(--ink)]">Before You Submit</h2>
            <p className="mt-3 text-sm leading-6 text-[var(--ink-soft)]">
              The packet also asks families to provide supporting documents before the first day
              of service and to schedule an intake meeting with the director or nurse.
            </p>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-[var(--ink-soft)]">
              {requiredDocuments.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand-orange)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-[var(--brand-navy)] p-6 text-white md:p-7">
            <h2 className="text-2xl font-bold">What This Form Covers</h2>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-white/85">
              <li>Client information and address</li>
              <li>Emergency contact and responsible party details</li>
              <li>Preferred attendance days and transportation</li>
              <li>Medical, dietary, and mobility information</li>
              <li>Social history, interests, and family goals</li>
            </ul>
            <p className="mt-5 text-sm leading-6 text-white/75">
              This page is wired for the dedicated admission backend contract and can submit
              directly to the HayatCare API instead of the generic inquiry email flow.
            </p>
          </div>
        </div>
      </section>

      <section id="form" className="py-14 md:py-18">
        <div className="mx-auto max-w-7xl px-4">
          <AdmissionForm />
        </div>
      </section>
    </>
  );
}
