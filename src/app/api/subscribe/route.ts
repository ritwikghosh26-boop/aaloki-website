import { NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const email = (body as Record<string, unknown>)?.email;
  if (typeof email !== "string" || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Server misconfiguration" }, { status: 500 });
  }

  let brevoRes: Response;
  try {
    brevoRes = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ email, listIds: [3], updateEnabled: true }),
    });
  } catch {
    return NextResponse.json({ error: "Network error" }, { status: 500 });
  }

  if (!brevoRes.ok) {
    return NextResponse.json({ error: "Brevo error" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
