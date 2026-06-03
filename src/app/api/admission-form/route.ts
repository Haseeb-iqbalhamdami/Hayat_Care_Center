import { NextResponse } from "next/server";
import {
  ADMISSION_DOCUMENT_FIELDS,
  submitAdmissionForm,
  validateAdmissionFile,
} from "@/lib/admissionApi";

export async function POST(request: Request) {
  let incoming: FormData;
  try {
    incoming = await request.formData();
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid form data." }, { status: 400 });
  }

  const clientName = String(incoming.get("clientName") ?? "").trim();
  const contactEmail = String(incoming.get("contactEmail") ?? "").trim();

  if (!clientName) {
    return NextResponse.json(
      { ok: false, message: "Client name is required.", errors: { clientName: ["Required"] } },
      { status: 400 },
    );
  }

  if (!contactEmail) {
    return NextResponse.json(
      { ok: false, message: "Contact email is required.", errors: { contactEmail: ["Required"] } },
      { status: 400 },
    );
  }

  for (const doc of ADMISSION_DOCUMENT_FIELDS) {
    const file = incoming.get(doc.name);
    const error = validateAdmissionFile(
      file instanceof File ? file : new File([], ""),
      doc.required,
    );
    if (error) {
      return NextResponse.json(
        { ok: false, message: error, errors: { [doc.name]: [error] } },
        { status: 400 },
      );
    }
  }

  const outbound = new FormData();
  for (const [key, value] of incoming.entries()) {
    outbound.append(key, value);
  }

  const result = await submitAdmissionForm(outbound);

  return NextResponse.json(
    {
      ok: result.ok,
      success: result.ok,
      message: result.message,
      submissionId: result.submissionId,
      data: result.payload?.data ?? null,
      errors: result.errors,
    },
    { status: result.status },
  );
}
