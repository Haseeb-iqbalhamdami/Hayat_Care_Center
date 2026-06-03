import { backendBaseUrl } from "@/lib/apiBase";

export const ADMISSION_DOCUMENT_FIELDS = [
  {
    name: "medicalReport",
    label: "Client medical report (physician, within 6 months)",
    required: true,
  },
  {
    name: "immunizationRecords",
    label: "Immunization records or physician contraindication statement",
    required: true,
  },
  {
    name: "tbScreening",
    label: "TB screening documentation (within 12 months)",
    required: true,
  },
  {
    name: "guardianshipDocuments",
    label: "Guardianship, conservatorship, or power of attorney (if applicable)",
    required: false,
  },
  {
    name: "insuranceCards",
    label: "Insurance card copy",
    required: false,
  },
  {
    name: "governmentId",
    label: "Government-issued ID",
    required: false,
  },
  {
    name: "advanceDirectives",
    label: "Advance directives / living will / CPR-DNR (if applicable)",
    required: false,
  },
] as const;

export type AdmissionDocumentFieldName =
  (typeof ADMISSION_DOCUMENT_FIELDS)[number]["name"];

const ACCEPTED_DOC_TYPES = new Set([
  "application/pdf",
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
]);

const MAX_FILE_BYTES = 10 * 1024 * 1024;

export function validateAdmissionFile(file: File, required: boolean): string | null {
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

/** Forwards multipart to backend — do not set Content-Type (boundary is automatic). */
export async function submitAdmissionForm(formData: FormData) {
  const response = await fetch(`${backendBaseUrl}/admission-form`, {
    method: "POST",
    body: formData,
  });

  const payload = (await response.json().catch(() => null)) as {
    success?: boolean;
    ok?: boolean;
    message?: string;
    submissionId?: string;
    data?: { id?: string; submissionId?: string };
    errors?: Record<string, string[]>;
  } | null;

  return {
    ok:
      response.status === 201 ||
      (response.ok && (payload?.success === true || payload?.ok === true)),
    status: response.status,
    payload,
    message: payload?.message,
    submissionId:
      payload?.submissionId || payload?.data?.submissionId || payload?.data?.id || null,
    errors: payload?.errors,
  };
}
