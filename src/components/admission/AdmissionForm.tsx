"use client";

import { useEffect, useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const inputClassName =
  "mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50/70 px-3.5 py-3 text-sm text-slate-900 outline-none transition focus:border-[#D5664B] focus:bg-white focus:ring-2 focus:ring-[#ffd976]";

const sectionClassName = "rounded-3xl border border-slate-200 bg-white p-6 md:p-7";

const weekdayOptions = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
] as const;

const equipmentOptions = ["Glasses", "Hearing aids", "Oxygen", "Dentures"] as const;

const relationshipOptions = [
  "Self",
  "Spouse",
  "Son",
  "Daughter",
  "Parent",
  "Sibling",
  "Grandchild",
  "Guardian",
  "Power of attorney",
  "Caregiver",
  "Case manager",
  "Other",
] as const;

const maritalStatusOptions = [
  "Single",
  "Married",
  "Widowed",
  "Divorced",
  "Separated",
  "Partnered",
  "Other",
] as const;

const stateOptions = [
  "AL",
  "AK",
  "AZ",
  "AR",
  "CA",
  "CO",
  "CT",
  "DE",
  "FL",
  "GA",
  "HI",
  "ID",
  "IL",
  "IN",
  "IA",
  "KS",
  "KY",
  "LA",
  "ME",
  "MD",
  "MA",
  "MI",
  "MN",
  "MS",
  "MO",
  "MT",
  "NE",
  "NV",
  "NH",
  "NJ",
  "NM",
  "NY",
  "NC",
  "ND",
  "OH",
  "OK",
  "OR",
  "PA",
  "RI",
  "SC",
  "SD",
  "TN",
  "TX",
  "UT",
  "VT",
  "VA",
  "WA",
  "WV",
  "WI",
  "WY",
] as const;

const backendBaseUrl =
  process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/$/, "") || "https://hayatbackend.onrender.com/api";

type AdmissionApiError = {
  success?: boolean;
  message?: string;
  errorCode?: string;
  errors?: Record<string, string[]>;
};

type AdmissionApiSuccess = {
  ok?: boolean;
  success?: boolean;
  submissionId?: string;
  data?: { id?: string };
};

function getValues(fd: FormData, key: string) {
  return fd
    .getAll(key)
    .map((value) => String(value).trim())
    .filter(Boolean);
}

function AdmissionSuccessModal({
  submissionId,
  onClose,
}: {
  submissionId: string | null;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="admission-success-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-slate-950/55 backdrop-blur-[2px]"
        aria-label="Close success dialog"
        onClick={onClose}
      />

      <div className="relative w-full max-w-md overflow-hidden rounded-3xl border border-emerald-200/80 bg-white shadow-2xl">
        <div className="bg-gradient-to-br from-emerald-50 via-white to-[#fff7f0] px-6 pb-6 pt-8 text-center sm:px-8">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 ring-8 ring-emerald-50">
            <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h2 id="admission-success-title" className="mt-5 text-2xl font-bold text-slate-900">
            Submission Successful
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Thank you. Your admission form has been received. Our intake team will review your
            information and contact you soon.
          </p>

          {submissionId && (
            <p className="mt-4 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs text-slate-600">
              Reference ID:{" "}
              <span className="font-semibold text-slate-900">{submissionId}</span>
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

function getApiErrorMessage(payload: AdmissionApiError | null | undefined) {
  if (payload?.errors) {
    const firstFieldErrors = Object.values(payload.errors).find(
      (messages) => Array.isArray(messages) && messages.length > 0,
    );

    if (firstFieldErrors?.[0]) {
      return firstFieldErrors[0];
    }
  }

  return payload?.message || "Something went wrong. Please try again or call us.";
}

function isAdmissionSuccess(response: Response, data: AdmissionApiSuccess | AdmissionApiError | null) {
  if (response.status === 201) return true;
  if (!response.ok) return false;

  const payload = data as AdmissionApiSuccess | null;
  return payload?.ok === true || payload?.success === true;
}

function getSubmissionId(data: AdmissionApiSuccess | null) {
  if (!data) return null;
  return data.submissionId || data.data?.id || null;
}

export default function AdmissionForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [submissionId, setSubmissionId] = useState<string | null>(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  useEffect(() => {
    if (!showSuccessModal) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setShowSuccessModal(false);
        setStatus("idle");
        setSubmissionId(null);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [showSuccessModal]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage(null);

    const form = event.currentTarget;
    const fd = new FormData(form);

    const clientName = String(fd.get("clientName") ?? "").trim();
    const nickname = String(fd.get("nickname") ?? "").trim();
    const dateOfBirth = String(fd.get("dateOfBirth") ?? "").trim();
    const programStartDate = String(fd.get("programStartDate") ?? "").trim();
    const clientPhone = String(fd.get("clientPhone") ?? "").trim();
    const streetAddress = String(fd.get("streetAddress") ?? "").trim();
    const city = String(fd.get("city") ?? "").trim();
    const state = String(fd.get("state") ?? "").trim();
    const zip = String(fd.get("zip") ?? "").trim();

    const emergencyName = String(fd.get("emergencyName") ?? "").trim();
    const emergencyPhone = String(fd.get("emergencyPhone") ?? "").trim();
    const emergencyRelationship = String(fd.get("emergencyRelationship") ?? "").trim();

    const contactName = String(fd.get("contactName") ?? "").trim();
    const contactRelationship = String(fd.get("contactRelationship") ?? "").trim();
    const contactAddress = String(fd.get("contactAddress") ?? "").trim();
    const contactHomePhone = String(fd.get("contactHomePhone") ?? "").trim();
    const contactCellPhone = String(fd.get("contactCellPhone") ?? "").trim();
    const contactWorkPhone = String(fd.get("contactWorkPhone") ?? "").trim();
    const contactEmail = String(fd.get("contactEmail") ?? "").trim().toLowerCase();
    const employer = String(fd.get("employer") ?? "").trim();

    const preferredDays = getValues(fd, "preferredDays");
    const scheduleStart = String(fd.get("scheduleStart") ?? "").trim();
    const scheduleEnd = String(fd.get("scheduleEnd") ?? "").trim();
    const transportation = String(fd.get("transportation") ?? "").trim();

    const physicianName = String(fd.get("physicianName") ?? "").trim();
    const physicianPhone = String(fd.get("physicianPhone") ?? "").trim();
    const physicianFax = String(fd.get("physicianFax") ?? "").trim();
    const hospitalPreference = String(fd.get("hospitalPreference") ?? "").trim();
    const primaryDiagnosis = String(fd.get("primaryDiagnosis") ?? "").trim();
    const healthConditions = String(fd.get("healthConditions") ?? "").trim();
    const allergies = String(fd.get("allergies") ?? "").trim();
    const dietaryRestrictions = String(fd.get("dietaryRestrictions") ?? "").trim();
    const medications = String(fd.get("medications") ?? "").trim();
    const mobility = String(fd.get("mobility") ?? "").trim();
    const equipmentAids = getValues(fd, "equipmentAids");

    const maritalStatus = String(fd.get("maritalStatus") ?? "").trim();
    const spousePartner = String(fd.get("spousePartner") ?? "").trim();
    const birthplace = String(fd.get("birthplace") ?? "").trim();
    const languages = String(fd.get("languages") ?? "").trim();
    const workHistory = String(fd.get("workHistory") ?? "").trim();
    const hobbies = String(fd.get("hobbies") ?? "").trim();
    const favoriteFood = String(fd.get("favoriteFood") ?? "").trim();
    const favoriteMusic = String(fd.get("favoriteMusic") ?? "").trim();
    const organizations = String(fd.get("organizations") ?? "").trim();
    const familyGoals = String(fd.get("familyGoals") ?? "").trim();

    const policiesAccepted = fd.get("policiesAccepted") === "on";
    const contactConsent = fd.get("contactConsent") === "on";

    if (!policiesAccepted) {
      setErrorMessage("Please confirm the packet policies before submitting.");
      setStatus("error");
      return;
    }

    if (!contactConsent) {
      setErrorMessage("Please agree to be contacted so our intake team can follow up.");
      setStatus("error");
      return;
    }

    const fullAddress = [streetAddress, city, state, zip].filter(Boolean).join(", ");

    setStatus("submitting");

    try {
      const response = await fetch(`${backendBaseUrl}/admission-form`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          clientName,
          nickname,
          dateOfBirth,
          programStartDate,
          clientPhone,
          streetAddress,
          city,
          state,
          zip,
          emergencyName,
          emergencyPhone,
          emergencyRelationship,
          contactName,
          contactRelationship,
          contactAddress,
          contactHomePhone,
          contactCellPhone,
          contactWorkPhone,
          contactEmail,
          employer,
          preferredDays,
          scheduleStart,
          scheduleEnd,
          transportation,
          physicianName,
          physicianPhone,
          physicianFax,
          hospitalPreference,
          primaryDiagnosis,
          healthConditions,
          allergies,
          dietaryRestrictions,
          medications,
          mobility,
          equipmentAids,
          maritalStatus,
          spousePartner,
          birthplace,
          languages,
          workHistory,
          hobbies,
          favoriteFood,
          favoriteMusic,
          organizations,
          familyGoals,
          policiesAccepted,
          contactConsent,
        }),
      });

      const data = (await response.json().catch(() => null)) as
        | AdmissionApiSuccess
        | AdmissionApiError
        | null;

      if (!isAdmissionSuccess(response, data)) {
        setErrorMessage(getApiErrorMessage(data as AdmissionApiError | null));
        setStatus("error");
        return;
      }

      setSubmissionId(getSubmissionId(data as AdmissionApiSuccess));
      setStatus("success");
      setShowSuccessModal(true);
      form.reset();
    } catch {
      setErrorMessage("Could not reach the backend API. Make sure the backend is running.");
      setStatus("error");
    }
  }

  function closeSuccessModal() {
    setShowSuccessModal(false);
    setStatus("idle");
    setSubmissionId(null);
  }

  return (
    <>
      {showSuccessModal && (
        <AdmissionSuccessModal
          submissionId={submissionId}
          onClose={closeSuccessModal}
        />
      )}

    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      {status === "error" && errorMessage && (
        <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-900" role="alert">
          {errorMessage}
        </p>
      )}

      <section className={sectionClassName}>
        <h2 className="text-2xl font-bold text-[var(--ink)]">Client Information</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <label className="text-sm font-semibold text-[var(--ink)] md:col-span-2">
            Full Name
            <input name="clientName" required maxLength={200} className={inputClassName} placeholder="Client full name" />
          </label>

          <label className="text-sm font-semibold text-[var(--ink)]">
            Nickname
            <input name="nickname" maxLength={120} className={inputClassName} placeholder="Preferred name" />
          </label>

          <label className="text-sm font-semibold text-[var(--ink)]">
            Date Of Birth
            <input name="dateOfBirth" type="date" required className={inputClassName} />
          </label>

          <label className="text-sm font-semibold text-[var(--ink)]">
            Program Start Date
            <input name="programStartDate" type="date" className={inputClassName} />
          </label>

          <label className="text-sm font-semibold text-[var(--ink)]">
            Client Phone Number
            <input name="clientPhone" type="tel" required maxLength={50} className={inputClassName} placeholder="Client phone number" />
          </label>

          <label className="text-sm font-semibold text-[var(--ink)] md:col-span-2">
            Street Address
            <input name="streetAddress" required maxLength={300} className={inputClassName} placeholder="Street address" />
          </label>

          <label className="text-sm font-semibold text-[var(--ink)]">
            City
            <input name="city" required maxLength={120} className={inputClassName} placeholder="City" />
          </label>

          <label className="text-sm font-semibold text-[var(--ink)]">
            State
            <select name="state" required defaultValue="CO" className={inputClassName}>
              <option value="" disabled>
                Select state
              </option>
              {stateOptions.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>

          <label className="text-sm font-semibold text-[var(--ink)]">
            ZIP Code
            <input name="zip" required maxLength={20} className={inputClassName} placeholder="ZIP" />
          </label>
        </div>
      </section>

      <section className={sectionClassName}>
        <h2 className="text-2xl font-bold text-[var(--ink)]">Emergency Contact</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          <label className="text-sm font-semibold text-[var(--ink)]">
            Full Name
            <input name="emergencyName" required maxLength={200} className={inputClassName} placeholder="Emergency contact name" />
          </label>

          <label className="text-sm font-semibold text-[var(--ink)]">
            Phone
            <input name="emergencyPhone" required type="tel" maxLength={50} className={inputClassName} placeholder="Phone number" />
          </label>

          <label className="text-sm font-semibold text-[var(--ink)]">
            Relationship
            <select name="emergencyRelationship" required defaultValue="" className={inputClassName}>
              <option value="" disabled>
                Select relationship
              </option>
              {relationshipOptions.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>
        </div>
      </section>

      <section className={sectionClassName}>
        <h2 className="text-2xl font-bold text-[var(--ink)]">Responsible Party / Best Contact</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <label className="text-sm font-semibold text-[var(--ink)]">
            Name
            <input name="contactName" required maxLength={200} className={inputClassName} placeholder="Responsible party name" />
          </label>

          <label className="text-sm font-semibold text-[var(--ink)]">
            Relationship
            <select name="contactRelationship" defaultValue="" className={inputClassName}>
              <option value="">Select relationship</option>
              {relationshipOptions.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>

          <label className="text-sm font-semibold text-[var(--ink)] md:col-span-2">
            Address
            <input name="contactAddress" maxLength={300} className={inputClassName} placeholder="Responsible party address" />
          </label>

          <label className="text-sm font-semibold text-[var(--ink)]">
            Home Phone
            <input name="contactHomePhone" type="tel" maxLength={50} className={inputClassName} placeholder="Home phone" />
          </label>

          <label className="text-sm font-semibold text-[var(--ink)]">
            Cell Phone
            <input name="contactCellPhone" type="tel" maxLength={50} className={inputClassName} placeholder="Cell phone" />
          </label>

          <label className="text-sm font-semibold text-[var(--ink)]">
            Work Phone
            <input name="contactWorkPhone" type="tel" maxLength={50} className={inputClassName} placeholder="Work phone" />
          </label>

          <label className="text-sm font-semibold text-[var(--ink)]">
            Email
            <input name="contactEmail" type="email" required maxLength={200} className={inputClassName} placeholder="Best contact email" />
          </label>

          <label className="text-sm font-semibold text-[var(--ink)] md:col-span-2">
            Employer
            <input name="employer" maxLength={200} className={inputClassName} placeholder="Employer (optional)" />
          </label>
        </div>
      </section>

      <section className={sectionClassName}>
        <h2 className="text-2xl font-bold text-[var(--ink)]">Program Schedule</h2>
        <div className="mt-5 space-y-5">
          <fieldset>
            <legend className="text-sm font-semibold text-[var(--ink)]">Preferred Days</legend>
            <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {weekdayOptions.map((day) => (
                <label key={day} className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50/70 px-3.5 py-3 text-sm text-slate-800">
                  <input name="preferredDays" type="checkbox" value={day} className="h-4 w-4 rounded border-slate-300 accent-[#D5664B]" />
                  <span>{day}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <div className="grid gap-4 md:grid-cols-3">
            <label className="text-sm font-semibold text-[var(--ink)]">
              Start Time
              <input name="scheduleStart" type="time" className={inputClassName} />
            </label>

            <label className="text-sm font-semibold text-[var(--ink)]">
              End Time
              <input name="scheduleEnd" type="time" className={inputClassName} />
            </label>

            <label className="text-sm font-semibold text-[var(--ink)]">
              Transportation
              <select name="transportation" defaultValue="" className={inputClassName}>
                <option value="">Select transportation</option>
                <option value="Family drop-off">Family drop-off</option>
                <option value="Access-a-Ride">Access-a-Ride</option>
                <option value="Hayat transportation">Hayat transportation</option>
              </select>
            </label>
          </div>
        </div>
      </section>

      <section className={sectionClassName}>
        <h2 className="text-2xl font-bold text-[var(--ink)]">Medical Information</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <label className="text-sm font-semibold text-[var(--ink)]">
            Primary Care Physician
            <input name="physicianName" maxLength={200} className={inputClassName} placeholder="Physician name" />
          </label>

          <label className="text-sm font-semibold text-[var(--ink)]">
            Physician Phone
            <input name="physicianPhone" type="tel" maxLength={50} className={inputClassName} placeholder="Phone number" />
          </label>

          <label className="text-sm font-semibold text-[var(--ink)]">
            Physician Fax
            <input name="physicianFax" type="tel" maxLength={50} className={inputClassName} placeholder="Fax number" />
          </label>

          <label className="text-sm font-semibold text-[var(--ink)]">
            Preferred Hospital
            <input name="hospitalPreference" maxLength={200} className={inputClassName} placeholder="Hospital preference" />
          </label>

          <label className="text-sm font-semibold text-[var(--ink)] md:col-span-2">
            Primary Diagnosis
            <input name="primaryDiagnosis" maxLength={300} className={inputClassName} placeholder="Primary diagnosis" />
          </label>

          <label className="text-sm font-semibold text-[var(--ink)] md:col-span-2">
            Other Health Conditions
            <textarea name="healthConditions" rows={3} maxLength={1000} className={inputClassName} placeholder="Other conditions or health concerns" />
          </label>

          <label className="text-sm font-semibold text-[var(--ink)]">
            Allergies
            <input name="allergies" maxLength={300} className={inputClassName} placeholder="Food / medication allergies" />
          </label>

          <label className="text-sm font-semibold text-[var(--ink)]">
            Dietary Restrictions
            <input name="dietaryRestrictions" maxLength={300} className={inputClassName} placeholder="Dietary restrictions" />
          </label>

          <label className="text-sm font-semibold text-[var(--ink)] md:col-span-2">
            Medications Taken At Center
            <textarea name="medications" rows={4} maxLength={1500} className={inputClassName} placeholder="Medication name, dosage, and reason" />
          </label>

          <label className="text-sm font-semibold text-[var(--ink)]">
            Mobility
            <select name="mobility" defaultValue="" className={inputClassName}>
              <option value="">Select mobility status</option>
              <option value="Independent">Independent</option>
              <option value="Cane">Cane</option>
              <option value="Walker">Walker</option>
              <option value="Wheelchair">Wheelchair</option>
              <option value="Incontinence care">Incontinence care</option>
            </select>
          </label>

          <fieldset className="md:col-span-2">
            <legend className="text-sm font-semibold text-[var(--ink)]">Equipment / Aids</legend>
            <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {equipmentOptions.map((item) => (
                <label key={item} className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50/70 px-3.5 py-3 text-sm text-slate-800">
                  <input name="equipmentAids" type="checkbox" value={item} className="h-4 w-4 rounded border-slate-300 accent-[#D5664B]" />
                  <span>{item}</span>
                </label>
              ))}
            </div>
          </fieldset>
        </div>
      </section>

      <section className={sectionClassName}>
        <h2 className="text-2xl font-bold text-[var(--ink)]">Social History</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <label className="text-sm font-semibold text-[var(--ink)]">
            Marital Status
            <select name="maritalStatus" defaultValue="" className={inputClassName}>
              <option value="">Select marital status</option>
              {maritalStatusOptions.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>

          <label className="text-sm font-semibold text-[var(--ink)]">
            Spouse / Partner
            <input name="spousePartner" maxLength={200} className={inputClassName} placeholder="Spouse or partner name" />
          </label>

          <label className="text-sm font-semibold text-[var(--ink)]">
            Birthplace
            <input name="birthplace" maxLength={200} className={inputClassName} placeholder="Birthplace" />
          </label>

          <label className="text-sm font-semibold text-[var(--ink)]">
            Languages Spoken
            <input name="languages" maxLength={300} className={inputClassName} placeholder="Languages spoken" />
          </label>

          <label className="text-sm font-semibold text-[var(--ink)] md:col-span-2">
            Education / Work History
            <textarea name="workHistory" rows={3} maxLength={1000} className={inputClassName} placeholder="Education and work history" />
          </label>

          <label className="text-sm font-semibold text-[var(--ink)]">
            Hobbies / Interests
            <input name="hobbies" maxLength={300} className={inputClassName} placeholder="Hobbies or interests" />
          </label>

          <label className="text-sm font-semibold text-[var(--ink)]">
            Favorite Food
            <input name="favoriteFood" maxLength={200} className={inputClassName} placeholder="Favorite food" />
          </label>

          <label className="text-sm font-semibold text-[var(--ink)]">
            Favorite Music
            <input name="favoriteMusic" maxLength={200} className={inputClassName} placeholder="Favorite music" />
          </label>

          <label className="text-sm font-semibold text-[var(--ink)]">
            Organizations / Church / Clubs
            <input name="organizations" maxLength={300} className={inputClassName} placeholder="Organizations, church, or clubs" />
          </label>

          <label className="text-sm font-semibold text-[var(--ink)] md:col-span-2">
            Family Goals For Participation
            <textarea name="familyGoals" rows={4} maxLength={1500} className={inputClassName} placeholder="Tell us the goals for the client's participation" />
          </label>
        </div>
      </section>

      <section className={sectionClassName}>
        <h2 className="text-2xl font-bold text-[var(--ink)]">Acknowledgment</h2>
        <div className="mt-5 space-y-4">
          <label className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50/70 px-4 py-4 text-sm leading-6 text-[var(--ink-soft)]">
            <input name="policiesAccepted" type="checkbox" required className="mt-1 h-4 w-4 rounded border-slate-300 accent-[#D5664B]" />
            <span>
              I confirm that the information above is correct and I have reviewed the packet policies, required documents, and intake expectations.
            </span>
          </label>

          <label className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50/70 px-4 py-4 text-sm leading-6 text-[var(--ink-soft)]">
            <input name="contactConsent" type="checkbox" required className="mt-1 h-4 w-4 rounded border-slate-300 accent-[#D5664B]" />
            <span>
              I agree to be contacted by Hayat Care Center by phone or email regarding admission, scheduling, and follow-up questions.
            </span>
          </label>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-[var(--ink-soft)]">
            This online form sends directly to the Hayat admission backend endpoint for intake review.
          </p>
          <button
            type="submit"
            disabled={status === "submitting"}
            className="inline-flex rounded-full bg-[var(--brand-orange)] px-7 py-3 text-sm font-bold text-white transition enabled:hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "submitting" ? "Submitting..." : "Submit Admission Form"}
          </button>
        </div>
      </section>
    </form>
    </>
  );
}
