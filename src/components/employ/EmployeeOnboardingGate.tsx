"use client";

import { useState } from "react";
import {
  EMPLOY_ONBOARDING_PAGE_PASSWORD,
  EMPLOY_ONBOARDING_STORAGE_KEY,
} from "@/lib/employeeOnboarding";

const inputClassName =
  "mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50/70 px-3.5 py-3 text-sm text-slate-900 outline-none transition focus:border-[#D5664B] focus:bg-white focus:ring-2 focus:ring-[#ffd976]";

type Props = {
  onUnlock: () => void;
};

export default function EmployeeOnboardingGate({ onUnlock }: Props) {
  const [accessKey, setAccessKey] = useState("");
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (accessKey.trim() !== EMPLOY_ONBOARDING_PAGE_PASSWORD) {
      setError("Invalid access key. Please contact HR for the correct link password.");
      return;
    }

    sessionStorage.setItem(EMPLOY_ONBOARDING_STORAGE_KEY, "true");
    setError(null);
    onUnlock();
  }

  return (
    <div className="mx-auto max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-blue)]">
        Staff Only
      </p>
      <h1 className="mt-3 text-2xl font-bold text-[var(--ink)]">Employee Onboarding</h1>
      <p className="mt-3 text-sm leading-6 text-[var(--ink-soft)]">
        This page is protected. Enter the access key provided by Hayat HR to open the new employee
        packet form.
      </p>

      <form onSubmit={handleSubmit} className="mt-6">
        <label className="text-sm font-semibold text-[var(--ink)]">
          Access Key
          <input
            type="password"
            value={accessKey}
            onChange={(e) => setAccessKey(e.target.value)}
            required
            autoComplete="off"
            className={inputClassName}
            placeholder="Enter access key"
          />
        </label>

        {error && (
          <p className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-900" role="alert">
            {error}
          </p>
        )}

        <button
          type="submit"
          className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[var(--brand-navy)] px-7 py-3.5 text-sm font-bold text-white transition hover:bg-[#052a52]"
        >
          Unlock Form
        </button>
      </form>
    </div>
  );
}
