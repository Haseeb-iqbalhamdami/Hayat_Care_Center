"use client";

import { useEffect, useState, type FormEvent } from "react";
import { backendBaseUrl, getApiErrorMessage, type ApiErrorPayload } from "@/lib/apiBase";
import {
  EMPLOY_ONBOARDING_API_ACCESS_KEY,
  POLICY_ACKNOWLEDGEMENTS,
  type EmployeeOnboardingPayload,
} from "@/lib/employeeOnboarding";

type Status = "idle" | "submitting" | "success" | "error";

const inputClassName =
  "mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50/70 px-3.5 py-3 text-sm text-slate-900 outline-none transition focus:border-[#D5664B] focus:bg-white focus:ring-2 focus:ring-[#ffd976]";

const sectionClassName = "rounded-3xl border border-slate-200 bg-white p-6 md:p-7";

const positionOptions = [
  "Administrator",
  "Administrative Assistant",
  "Caregiver",
  "Other",
] as const;

const employmentTypeOptions = ["Full-Time", "Part-Time", "PRN"] as const;

function getPolicyAcknowledgements(fd: FormData) {
  return POLICY_ACKNOWLEDGEMENTS.map((item) => item.id).filter((id) => fd.get(`policy_${id}`) === "on");
}

function OnboardingSuccessModal({ packetId, onClose }: { packetId: string | null; onClose: () => void }) {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="employ-success-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-slate-950/55 backdrop-blur-[2px]"
        aria-label="Close"
        onClick={onClose}
      />
      <div className="relative w-full max-w-md overflow-hidden rounded-3xl border border-emerald-200/80 bg-white shadow-2xl">
        <div className="bg-gradient-to-br from-emerald-50 via-white to-[#fff7f0] px-6 pb-6 pt-8 text-center sm:px-8">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 ring-8 ring-emerald-50">
            <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 id="employ-success-title" className="mt-5 text-2xl font-bold text-slate-900">
            Packet Submitted Successfully
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Your new employee HR packet has been received. HR will review your submission and follow up
            before or on your start date.
          </p>
          {packetId && (
            <p className="mt-4 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs text-slate-600">
              Reference ID: <span className="font-semibold text-slate-900">{packetId}</span>
            </p>
          )}
        </div>
        <div className="border-t border-slate-100 px-6 py-5 sm:px-8">
          <button
            type="button"
            onClick={onClose}
            className="inline-flex w-full items-center justify-center rounded-full bg-[var(--brand-navy)] px-7 py-3.5 text-sm font-bold text-white transition hover:bg-[#052a52]"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}

export default function EmployeeOnboardingForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [packetId, setPacketId] = useState<string | null>(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [directDeposit, setDirectDeposit] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage(null);

    const form = event.currentTarget;
    const fd = new FormData(form);

    const acknowledgements = getPolicyAcknowledgements(fd);
    const depositChoice = String(fd.get("directDeposit") ?? "").trim().toLowerCase();

    if (acknowledgements.length !== 10) {
      setErrorMessage("Please acknowledge all 10 required policies before submitting.");
      setStatus("error");
      return;
    }

    if (!fd.get("backgroundConsent")) {
      setErrorMessage("Background check authorization is required.");
      setStatus("error");
      return;
    }

    if (!fd.get("drugConsent")) {
      setErrorMessage("Drug screening consent is required.");
      setStatus("error");
      return;
    }

    if (depositChoice === "yes") {
      const bankName = String(fd.get("bankName") ?? "").trim();
      const routingNumber = String(fd.get("routingNumber") ?? "").trim();
      const accountNumber = String(fd.get("accountNumber") ?? "").trim();
      const accountType = String(fd.get("accountType") ?? "").trim();
      if (!bankName || !routingNumber || !accountNumber || !accountType) {
        setErrorMessage("Please complete all direct deposit bank fields.");
        setStatus("error");
        return;
      }
    }

    const positionApplied =
      String(fd.get("positionApplied") ?? "").trim() === "Other"
        ? String(fd.get("positionOther") ?? "").trim()
        : String(fd.get("positionApplied") ?? "").trim();

    const payload: EmployeeOnboardingPayload = {
      accessKey: EMPLOY_ONBOARDING_API_ACCESS_KEY,
      personal: {
        firstName: String(fd.get("firstName") ?? "").trim(),
        lastName: String(fd.get("lastName") ?? "").trim(),
        middleName: String(fd.get("middleName") ?? "").trim() || undefined,
        email: String(fd.get("email") ?? "").trim().toLowerCase(),
        phone: String(fd.get("phone") ?? "").trim(),
        address: String(fd.get("address") ?? "").trim() || undefined,
        city: String(fd.get("city") ?? "").trim() || undefined,
        state: String(fd.get("state") ?? "").trim() || undefined,
        zip: String(fd.get("zip") ?? "").trim() || undefined,
        dateOfBirth: String(fd.get("dateOfBirth") ?? "").trim() || undefined,
        ssnLast4: String(fd.get("ssnLast4") ?? "").trim() || undefined,
      },
      position: {
        positionApplied,
        department: String(fd.get("department") ?? "").trim() || undefined,
        employmentType: String(fd.get("employmentType") ?? "").trim(),
        startDate: String(fd.get("startDate") ?? "").trim() || undefined,
        supervisor: String(fd.get("supervisor") ?? "").trim() || undefined,
        workSchedule: String(fd.get("workSchedule") ?? "").trim() || undefined,
        payRate: String(fd.get("payRate") ?? "").trim() || undefined,
      },
      compliance: {
        backgroundConsent: true,
        drugConsent: true,
        doraLicenseType: String(fd.get("doraLicenseType") ?? "").trim() || undefined,
        doraLicenseNumber: String(fd.get("doraLicenseNumber") ?? "").trim() || undefined,
        doraExpiration: String(fd.get("doraExpiration") ?? "").trim() || undefined,
        legallyAuthorizedToWork: fd.get("legallyAuthorizedToWork") === "yes",
        felonyDeclaration: String(fd.get("felonyDeclaration") ?? "").trim() || undefined,
      },
      policy: { acknowledgements },
      deposit: {
        directDeposit: depositChoice,
        bankName: String(fd.get("bankName") ?? "").trim() || undefined,
        routingNumber: String(fd.get("routingNumber") ?? "").trim() || undefined,
        accountNumber: String(fd.get("accountNumber") ?? "").trim() || undefined,
        accountType: String(fd.get("accountType") ?? "").trim() || undefined,
        accountHolderName: String(fd.get("accountHolderName") ?? "").trim() || undefined,
      },
      emergency: {
        primaryName: String(fd.get("primaryName") ?? "").trim(),
        primaryRelationship: String(fd.get("primaryRelationship") ?? "").trim(),
        primaryPhone: String(fd.get("primaryPhone") ?? "").trim(),
        primaryAltPhone: String(fd.get("primaryAltPhone") ?? "").trim() || undefined,
        primaryEmail: String(fd.get("primaryEmail") ?? "").trim() || undefined,
        secondaryName: String(fd.get("secondaryName") ?? "").trim() || undefined,
        secondaryRelationship: String(fd.get("secondaryRelationship") ?? "").trim() || undefined,
        secondaryPhone: String(fd.get("secondaryPhone") ?? "").trim() || undefined,
        secondaryAltPhone: String(fd.get("secondaryAltPhone") ?? "").trim() || undefined,
        knownAllergies: String(fd.get("knownAllergies") ?? "").trim() || undefined,
        physicianName: String(fd.get("physicianName") ?? "").trim() || undefined,
        physicianPhone: String(fd.get("physicianPhone") ?? "").trim() || undefined,
      },
      signature: {
        legalName: String(fd.get("legalName") ?? "").trim(),
        signedDate: String(fd.get("signedDate") ?? "").trim(),
      },
      meta: {
        packetVersion: "2026-hr-packet",
        submittedFrom: "hayat-website-employee-onboarding",
      },
    };

    setStatus("submitting");

    try {
      const response = await fetch(`${backendBaseUrl}/employ/onboarding`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await response.json().catch(() => null)) as
        | { success?: boolean; data?: { id?: string }; message?: string }
        | ApiErrorPayload
        | null;

      const isSuccess =
        response.status === 201 ||
        (response.ok && (data as { success?: boolean })?.success === true);

      if (!isSuccess) {
        setErrorMessage(getApiErrorMessage(data as ApiErrorPayload));
        setStatus("error");
        return;
      }

      const id = (data as { data?: { id?: string } })?.data?.id ?? null;
      setPacketId(id);
      setStatus("success");
      setShowSuccessModal(true);
      form.reset();
      setDirectDeposit("");
    } catch {
      setErrorMessage("Could not reach the backend API. Please try again later.");
      setStatus("error");
    }
  }

  return (
    <>
      {showSuccessModal && (
        <OnboardingSuccessModal
          packetId={packetId}
          onClose={() => {
            setShowSuccessModal(false);
            setStatus("idle");
            setPacketId(null);
          }}
        />
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {status === "error" && errorMessage && (
          <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-900" role="alert">
            {errorMessage}
          </p>
        )}

        <section className={sectionClassName}>
          <h2 className="text-2xl font-bold text-[var(--ink)]">Personal Information</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <label className="text-sm font-semibold text-[var(--ink)]">
              First Name
              <input name="firstName" required maxLength={120} className={inputClassName} />
            </label>
            <label className="text-sm font-semibold text-[var(--ink)]">
              Last Name
              <input name="lastName" required maxLength={120} className={inputClassName} />
            </label>
            <label className="text-sm font-semibold text-[var(--ink)]">
              Middle Name
              <input name="middleName" maxLength={120} className={inputClassName} />
            </label>
            <label className="text-sm font-semibold text-[var(--ink)]">
              Date Of Birth
              <input name="dateOfBirth" type="date" className={inputClassName} />
            </label>
            <label className="text-sm font-semibold text-[var(--ink)]">
              Phone
              <input name="phone" type="tel" required maxLength={50} className={inputClassName} />
            </label>
            <label className="text-sm font-semibold text-[var(--ink)]">
              Email
              <input name="email" type="email" required maxLength={200} className={inputClassName} />
            </label>
            <label className="text-sm font-semibold text-[var(--ink)]">
              SSN (Last 4 Digits)
              <input name="ssnLast4" maxLength={4} pattern="\d{4}" className={inputClassName} placeholder="1234" />
            </label>
            <label className="text-sm font-semibold text-[var(--ink)] md:col-span-2">
              Address
              <input name="address" maxLength={300} className={inputClassName} />
            </label>
            <label className="text-sm font-semibold text-[var(--ink)]">
              City
              <input name="city" maxLength={120} className={inputClassName} />
            </label>
            <label className="text-sm font-semibold text-[var(--ink)]">
              State
              <input name="state" maxLength={60} defaultValue="CO" className={inputClassName} />
            </label>
            <label className="text-sm font-semibold text-[var(--ink)]">
              ZIP
              <input name="zip" maxLength={20} className={inputClassName} />
            </label>
          </div>
        </section>

        <section className={sectionClassName}>
          <h2 className="text-2xl font-bold text-[var(--ink)]">Position & Employment</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <label className="text-sm font-semibold text-[var(--ink)]">
              Position Applied For
              <select name="positionApplied" required defaultValue="" className={inputClassName}>
                <option value="" disabled>
                  Select position
                </option>
                {positionOptions.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>
            <label className="text-sm font-semibold text-[var(--ink)]">
              If Other, Specify
              <input name="positionOther" maxLength={200} className={inputClassName} placeholder="Position title" />
            </label>
            <label className="text-sm font-semibold text-[var(--ink)]">
              Employment Type
              <select name="employmentType" required defaultValue="" className={inputClassName}>
                <option value="" disabled>
                  Select type
                </option>
                {employmentTypeOptions.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>
            <label className="text-sm font-semibold text-[var(--ink)]">
              Department
              <input name="department" maxLength={120} className={inputClassName} />
            </label>
            <label className="text-sm font-semibold text-[var(--ink)]">
              Start Date
              <input name="startDate" type="date" className={inputClassName} />
            </label>
            <label className="text-sm font-semibold text-[var(--ink)]">
              Supervisor
              <input name="supervisor" maxLength={200} className={inputClassName} />
            </label>
            <label className="text-sm font-semibold text-[var(--ink)]">
              Work Schedule
              <input name="workSchedule" maxLength={200} className={inputClassName} placeholder="e.g. Mon-Fri 8am-4pm" />
            </label>
            <label className="text-sm font-semibold text-[var(--ink)]">
              Pay Rate / Salary
              <input name="payRate" maxLength={120} className={inputClassName} placeholder="Hourly or annual" />
            </label>
          </div>
        </section>

        <section className={sectionClassName}>
          <h2 className="text-2xl font-bold text-[var(--ink)]">Compliance & Screening</h2>
          <div className="mt-5 space-y-4">
            <label className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50/70 px-4 py-4 text-sm leading-6 text-[var(--ink-soft)]">
              <input name="backgroundConsent" type="checkbox" required className="mt-1 h-4 w-4 accent-[#D5664B]" />
              <span>
                I authorize Hayat to conduct a background check as described in the employee packet.
              </span>
            </label>
            <label className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50/70 px-4 py-4 text-sm leading-6 text-[var(--ink-soft)]">
              <input name="drugConsent" type="checkbox" required className="mt-1 h-4 w-4 accent-[#D5664B]" />
              <span>
                I consent to pre-employment and required drug screening per company policy.
              </span>
            </label>
            <div className="grid gap-4 md:grid-cols-3">
              <label className="text-sm font-semibold text-[var(--ink)]">
                DORA License Type
                <input name="doraLicenseType" maxLength={120} className={inputClassName} />
              </label>
              <label className="text-sm font-semibold text-[var(--ink)]">
                License Number
                <input name="doraLicenseNumber" maxLength={80} className={inputClassName} />
              </label>
              <label className="text-sm font-semibold text-[var(--ink)]">
                License Expiration
                <input name="doraExpiration" type="date" className={inputClassName} />
              </label>
            </div>
            <label className="text-sm font-semibold text-[var(--ink)]">
              Legally Authorized To Work In The US?
              <select name="legallyAuthorizedToWork" defaultValue="" className={inputClassName}>
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </label>
            <label className="text-sm font-semibold text-[var(--ink)] md:col-span-2">
              Felony Declaration (if applicable)
              <textarea name="felonyDeclaration" rows={2} maxLength={1000} className={inputClassName} />
            </label>
          </div>
        </section>

        <section className={sectionClassName}>
          <h2 className="text-2xl font-bold text-[var(--ink)]">Policy Acknowledgments</h2>
          <p className="mt-2 text-sm text-[var(--ink-soft)]">All 10 policies must be acknowledged.</p>
          <div className="mt-5 space-y-3">
            {POLICY_ACKNOWLEDGEMENTS.map((item) => (
              <label
                key={item.id}
                className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm text-[var(--ink-soft)]"
              >
                <input
                  name={`policy_${item.id}`}
                  type="checkbox"
                  className="mt-0.5 h-4 w-4 accent-[#D5664B]"
                />
                <span>{item.label}</span>
              </label>
            ))}
          </div>
        </section>

        <section className={sectionClassName}>
          <h2 className="text-2xl font-bold text-[var(--ink)]">Direct Deposit</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <label className="text-sm font-semibold text-[var(--ink)] md:col-span-2">
              Direct Deposit Choice
              <select
                name="directDeposit"
                required
                value={directDeposit}
                onChange={(e) => setDirectDeposit(e.target.value)}
                className={inputClassName}
              >
                <option value="" disabled>
                  Select option
                </option>
                <option value="yes">Yes — authorize direct deposit</option>
                <option value="no">No — paper check</option>
              </select>
            </label>
            {directDeposit === "yes" && (
              <>
                <label className="text-sm font-semibold text-[var(--ink)]">
                  Bank Name
                  <input name="bankName" required maxLength={200} className={inputClassName} />
                </label>
                <label className="text-sm font-semibold text-[var(--ink)]">
                  Account Holder Name
                  <input name="accountHolderName" maxLength={200} className={inputClassName} />
                </label>
                <label className="text-sm font-semibold text-[var(--ink)]">
                  Routing Number
                  <input name="routingNumber" required maxLength={9} pattern="\d{9}" className={inputClassName} />
                </label>
                <label className="text-sm font-semibold text-[var(--ink)]">
                  Account Number
                  <input name="accountNumber" required maxLength={30} className={inputClassName} />
                </label>
                <label className="text-sm font-semibold text-[var(--ink)]">
                  Account Type
                  <select name="accountType" required defaultValue="" className={inputClassName}>
                    <option value="" disabled>
                      Select account type
                    </option>
                    <option value="checking">Checking</option>
                    <option value="savings">Savings</option>
                  </select>
                </label>
              </>
            )}
          </div>
        </section>

        <section className={sectionClassName}>
          <h2 className="text-2xl font-bold text-[var(--ink)]">Emergency Contacts</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <label className="text-sm font-semibold text-[var(--ink)]">
              Primary Contact Name
              <input name="primaryName" required maxLength={200} className={inputClassName} />
            </label>
            <label className="text-sm font-semibold text-[var(--ink)]">
              Relationship
              <input name="primaryRelationship" required maxLength={120} className={inputClassName} />
            </label>
            <label className="text-sm font-semibold text-[var(--ink)]">
              Primary Phone
              <input name="primaryPhone" type="tel" required maxLength={50} className={inputClassName} />
            </label>
            <label className="text-sm font-semibold text-[var(--ink)]">
              Alternate Phone
              <input name="primaryAltPhone" type="tel" maxLength={50} className={inputClassName} />
            </label>
            <label className="text-sm font-semibold text-[var(--ink)] md:col-span-2">
              Primary Email
              <input name="primaryEmail" type="email" maxLength={200} className={inputClassName} />
            </label>
            <label className="text-sm font-semibold text-[var(--ink)]">
              Secondary Contact Name
              <input name="secondaryName" maxLength={200} className={inputClassName} />
            </label>
            <label className="text-sm font-semibold text-[var(--ink)]">
              Secondary Relationship
              <input name="secondaryRelationship" maxLength={120} className={inputClassName} />
            </label>
            <label className="text-sm font-semibold text-[var(--ink)]">
              Secondary Phone
              <input name="secondaryPhone" type="tel" maxLength={50} className={inputClassName} />
            </label>
            <label className="text-sm font-semibold text-[var(--ink)]">
              Secondary Alternate Phone
              <input name="secondaryAltPhone" type="tel" maxLength={50} className={inputClassName} />
            </label>
            <label className="text-sm font-semibold text-[var(--ink)] md:col-span-2">
              Known Allergies (optional)
              <input name="knownAllergies" maxLength={300} className={inputClassName} />
            </label>
            <label className="text-sm font-semibold text-[var(--ink)]">
              Primary Care Physician
              <input name="physicianName" maxLength={200} className={inputClassName} />
            </label>
            <label className="text-sm font-semibold text-[var(--ink)]">
              Physician Phone
              <input name="physicianPhone" type="tel" maxLength={50} className={inputClassName} />
            </label>
          </div>
        </section>

        <section className={sectionClassName}>
          <h2 className="text-2xl font-bold text-[var(--ink)]">Final Signature</h2>
          <p className="mt-2 text-sm text-[var(--ink-soft)]">
            By signing, you confirm that you have reviewed the Hayat New Employee HR Packet and agree to
            comply with all policies.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <label className="text-sm font-semibold text-[var(--ink)] md:col-span-2">
              Legal Name (typed signature)
              <input name="legalName" required maxLength={200} className={inputClassName} />
            </label>
            <label className="text-sm font-semibold text-[var(--ink)]">
              Signed Date
              <input
                name="signedDate"
                type="date"
                required
                defaultValue={new Date().toISOString().slice(0, 10)}
                className={inputClassName}
              />
            </label>
          </div>
          <div className="mt-6 flex justify-end">
            <button
              type="submit"
              disabled={status === "submitting"}
              className="inline-flex rounded-full bg-[var(--brand-orange)] px-8 py-3.5 text-sm font-bold text-white transition enabled:hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "submitting" ? "Submitting..." : "Submit Employee Packet"}
            </button>
          </div>
        </section>
      </form>
    </>
  );
}
