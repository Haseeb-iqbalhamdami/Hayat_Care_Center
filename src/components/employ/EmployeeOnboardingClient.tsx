"use client";

import { useEffect, useState } from "react";
import { EMPLOY_ONBOARDING_STORAGE_KEY } from "@/lib/employeeOnboarding";
import EmployeeOnboardingForm from "@/components/employ/EmployeeOnboardingForm";
import EmployeeOnboardingGate from "@/components/employ/EmployeeOnboardingGate";

export default function EmployeeOnboardingClient() {
  const [unlocked, setUnlocked] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setUnlocked(sessionStorage.getItem(EMPLOY_ONBOARDING_STORAGE_KEY) === "true");
    setReady(true);
  }, []);

  if (!ready) {
    return (
      <div className="mx-auto max-w-md rounded-3xl border border-slate-200 bg-white p-8 text-center text-sm text-slate-600">
        Loading...
      </div>
    );
  }

  if (!unlocked) {
    return <EmployeeOnboardingGate onUnlock={() => setUnlocked(true)} />;
  }

  return <EmployeeOnboardingForm />;
}
