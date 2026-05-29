export const EMPLOY_ONBOARDING_STORAGE_KEY = "hayat_employ_onboarding_unlocked";

/** Password staff enter on the protected page (UI gate only). */
export const EMPLOY_ONBOARDING_PAGE_PASSWORD = "Hayat2244";

/** Sent in POST body — must match backend EMPLOY_ONBOARDING_ACCESS_KEY (.env). */
export const EMPLOY_ONBOARDING_API_ACCESS_KEY =
  process.env.NEXT_PUBLIC_EMPLOY_ONBOARDING_ACCESS_KEY?.trim() || "Hayatcare345";

export const POLICY_ACKNOWLEDGEMENTS = [
  { id: "w2_employee", label: "W-2 Employee Acknowledgment" },
  { id: "background_check", label: "Background Check Authorization" },
  { id: "drug_screen", label: "Drug Screen Consent & Annual Testing" },
  { id: "confidentiality", label: "Confidentiality & Non-Disclosure" },
  { id: "hipaa_privacy", label: "HIPAA / Privacy Acknowledgment" },
  { id: "non_discrimination", label: "Non-Discrimination & Equal Opportunity" },
  { id: "workplace_conduct", label: "Workplace Conduct & Professional Standards" },
  { id: "attendance", label: "Attendance & Punctuality Policy" },
  { id: "social_media", label: "Social Media Policy" },
  { id: "employee_handbook", label: "Employee Handbook Acknowledgment" },
] as const;

export type EmployeeOnboardingPayload = {
  accessKey: string;
  personal: {
    firstName: string;
    lastName: string;
    middleName?: string;
    email: string;
    phone: string;
    address?: string;
    city?: string;
    state?: string;
    zip?: string;
    dateOfBirth?: string;
    ssnLast4?: string;
  };
  position: {
    positionApplied: string;
    department?: string;
    employmentType: string;
    startDate?: string;
    supervisor?: string;
    workSchedule?: string;
    payRate?: string;
  };
  compliance: {
    backgroundConsent: boolean;
    drugConsent: boolean;
    doraLicenseType?: string;
    doraLicenseNumber?: string;
    doraExpiration?: string;
    legallyAuthorizedToWork?: boolean;
    felonyDeclaration?: string;
  };
  policy: {
    acknowledgements: string[];
  };
  deposit: {
    directDeposit: string;
    bankName?: string;
    routingNumber?: string;
    accountNumber?: string;
    accountType?: string;
    accountHolderName?: string;
  };
  emergency: {
    primaryName: string;
    primaryRelationship: string;
    primaryPhone: string;
    primaryAltPhone?: string;
    primaryEmail?: string;
    secondaryName?: string;
    secondaryRelationship?: string;
    secondaryPhone?: string;
    secondaryAltPhone?: string;
    knownAllergies?: string;
    physicianName?: string;
    physicianPhone?: string;
  };
  signature: {
    legalName: string;
    signedDate: string;
    /** PNG data URL of the drawn electronic signature */
    signatureImage: string;
    method: "drawn";
    signedAt: string;
    contractAcknowledged: boolean;
  };
  meta?: {
    packetVersion?: string;
    submittedFrom?: string;
  };
};
