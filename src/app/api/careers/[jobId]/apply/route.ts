import { NextResponse } from "next/server";
import { submitJobApplication } from "@/lib/careersApi";

export async function POST(
  request: Request,
  context: { params: Promise<{ jobId: string }> },
) {
  const { jobId } = await context.params;

  if (!jobId) {
    return NextResponse.json({ ok: false, message: "Job id is required." }, { status: 400 });
  }

  let incoming: FormData;
  try {
    incoming = await request.formData();
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid form data." }, { status: 400 });
  }

  const resume = incoming.get("resume");
  if (!(resume instanceof File) || resume.size === 0) {
    return NextResponse.json(
      { ok: false, message: "Resume PDF is required (field name: resume)." },
      { status: 400 },
    );
  }

  const email = String(incoming.get("email") ?? "").trim();
  const name = String(incoming.get("name") ?? "").trim();

  if (!email || !name) {
    return NextResponse.json(
      { ok: false, message: "Name and email are required." },
      { status: 400 },
    );
  }

  const outbound = new FormData();
  for (const [key, value] of incoming.entries()) {
    outbound.append(key, value);
  }

  const result = await submitJobApplication(jobId, outbound);

  return NextResponse.json(
    { ok: result.ok, message: result.message, data: result.payload?.data ?? null },
    { status: result.status },
  );
}
