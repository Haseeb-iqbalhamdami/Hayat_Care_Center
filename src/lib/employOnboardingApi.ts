import { backendBaseUrl } from "@/lib/apiBase";
import { EMPLOY_ONBOARDING_API_ACCESS_KEY } from "@/lib/employeeOnboarding";

/** From New Hire Checklist (Employee PACKET) — items employees upload as PDF/image */
export const EMPLOY_DOCUMENT_FIELDS = [
  {
    name: "governmentPhotoId",
    label: "Government-issued photo ID (for I-9)",
    required: true,
    checklist: "Copy of valid government-issued photo ID",
  },
  {
    name: "socialSecurityCard",
    label: "Social Security card or I-9 alternative document",
    required: true,
    checklist: "Copy of Social Security card or acceptable I-9 alternative",
  },
  {
    name: "w4Form",
    label: "Completed federal W-4",
    required: true,
    checklist: "Completed federal W-4 (Employee's Withholding Certificate)",
  },
  {
    name: "i9Form",
    label: "Completed I-9 (Employment Eligibility Verification)",
    required: true,
    checklist: "Completed I-9 with supporting documents",
  },
  {
    name: "signedOfferLetter",
    label: "Signed offer letter",
    required: false,
    checklist: "Signed offer letter",
  },
  {
    name: "signedEmploymentApplication",
    label: "Signed employment application (if HR provided a copy to upload)",
    required: false,
    checklist: "Completed and signed employment application",
  },
  {
    name: "benefitsEnrollment",
    label: "Benefits enrollment form (if applicable)",
    required: false,
    checklist: "Benefits enrollment form",
  },
  {
    name: "doraCredential",
    label: "DORA credential / license verification (if position requires licensure)",
    required: false,
    checklist: "DORA credential verification completed",
  },
  {
    name: "professionalLicense",
    label: "Professional license or certification copy",
    required: false,
    checklist: "Professional license / certification",
  },
] as const;

const ACCEPTED_DOC_TYPES = new Set([
  "application/pdf",
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
]);

const MAX_FILE_BYTES = 10 * 1024 * 1024;

export function validateEmployDocument(file: File, required: boolean): string | null {
  if (!file || file.size === 0) {
    return required ? "This document is required." : null;
  }
  if (file.size > MAX_FILE_BYTES) {
    return "File must be 10MB or smaller.";
  }
  const type = file.type.toLowerCase();
  const name = file.name.toLowerCase();
  const okType =
    ACCEPTED_DOC_TYPES.has(type) ||
    name.endsWith(".pdf") ||
    name.endsWith(".jpg") ||
    name.endsWith(".jpeg") ||
    name.endsWith(".png") ||
    name.endsWith(".webp");
  if (!okType) {
    return "Upload a PDF or image file (PDF, JPG, PNG).";
  }
  return null;
}

export type EmployOnboardingDataPayload = {
  personal: Record<string, unknown>;
  position: Record<string, unknown>;
  compliance: Record<string, unknown>;
  policy: { acknowledgements: string[] };
  deposit: Record<string, unknown>;
  emergency: Record<string, unknown>;
  signature: Record<string, unknown>;
  meta?: Record<string, unknown>;
};

/** Multipart: accessKey + JSON `data` field + files + signatureImage. Do not set Content-Type. */
export async function submitEmployOnboarding(formData: FormData) {
  const response = await fetch(`${backendBaseUrl}/employ/onboarding`, {
    method: "POST",
    body: formData,
  });

  const payload = (await response.json().catch(() => null)) as {
    success?: boolean;
    message?: string;
    data?: { id?: string };
    errors?: Record<string, string[]>;
  } | null;

  return {
    ok: response.status === 201 || (response.ok && payload?.success === true),
    status: response.status,
    payload,
    message: payload?.message,
    packetId: payload?.data?.id ?? null,
    errors: payload?.errors,
  };
}

export function buildEmployFormData(
  data: EmployOnboardingDataPayload,
  signatureImage: string,
  files: FormData,
) {
  const outbound = new FormData();
  outbound.append("accessKey", EMPLOY_ONBOARDING_API_ACCESS_KEY);
  outbound.append("data", JSON.stringify(data));
  outbound.append("signatureImage", signatureImage);

  for (const doc of EMPLOY_DOCUMENT_FIELDS) {
    const file = files.get(doc.name);
    if (file instanceof File && file.size > 0) {
      outbound.append(doc.name, file, file.name);
    }
  }

  return outbound;
}
