import type { Metadata } from "next";
import EmployeeOnboardingClient from "@/components/employ/EmployeeOnboardingClient";

export const metadata: Metadata = {
  title: "Employee Onboarding | Hayat Care Center",
  description: "Protected new employee HR packet onboarding for Hayat Care Center staff.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function EmployeeOnboardingPage() {
  return (
    <>
      <section className="hero-grid border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-12 md:py-14">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-blue)]">
            HR — Staff Only
          </p>
          <h1 className="mt-3 max-w-3xl text-3xl font-bold text-[var(--ink)] md:text-4xl">
            New Employee HR Packet
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-[var(--ink-soft)] md:text-base">
            Complete your onboarding and compliance documentation online. This page is not listed in
            the public menu — use the direct link and access key provided by HR.
          </p>
          <p className="mt-4 text-sm font-medium text-[var(--ink-soft)]">
            Direct link: <span className="text-[var(--brand-navy)]">/employee-onboarding</span>
          </p>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50/60 py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4">
          <EmployeeOnboardingClient />
        </div>
      </section>
    </>
  );
}
