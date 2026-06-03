import { NextResponse } from "next/server";
import {
  EMPLOY_DOCUMENT_FIELDS,
  submitEmployOnboarding,
  validateEmployDocument,
} from "@/lib/employOnboardingApi";

export async function POST(request: Request) {
  let incoming: FormData;
  try {
    incoming = await request.formData();
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid form data." }, { status: 400 });
  }

  const accessKey = String(incoming.get("accessKey") ?? "").trim();
  if (!accessKey) {
    return NextResponse.json(
      { ok: false, message: "Access key is required." },
      { status: 400 },
    );
  }

  const dataRaw = incoming.get("data");
  if (typeof dataRaw !== "string" || !dataRaw.trim()) {
    return NextResponse.json(
      { ok: false, message: "Onboarding data (JSON) is required." },
      { status: 400 },
    );
  }

  let parsed: { compliance?: { doraLicenseNumber?: string } };
  try {
    parsed = JSON.parse(dataRaw) as { compliance?: { doraLicenseNumber?: string } };
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid onboarding data JSON." }, { status: 400 });
  }

  const requiresDora = Boolean(parsed.compliance?.doraLicenseNumber?.toString().trim());

  for (const doc of EMPLOY_DOCUMENT_FIELDS) {
    const required =
      doc.required || (doc.name === "doraCredential" && requiresDora);
    const file = incoming.get(doc.name);
    const error = validateEmployDocument(
      file instanceof File ? file : new File([], ""),
      required,
    );
    if (error) {
      return NextResponse.json(
        { ok: false, message: `${doc.label}: ${error}`, errors: { [doc.name]: [error] } },
        { status: 400 },
      );
    }
  }

  const outbound = new FormData();
  for (const [key, value] of incoming.entries()) {
    outbound.append(key, value);
  }

  const result = await submitEmployOnboarding(outbound);

  return NextResponse.json(
    {
      ok: result.ok,
      success: result.ok,
      message: result.message,
      data: result.payload?.data ?? null,
      errors: result.errors,
    },
    { status: result.status },
  );
}
