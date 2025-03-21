import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { firstName, lastName, email, message } = await req.json();
    const token = process.env.MAILTRAP_TOKEN;
    const mailRes = await fetch("https://send.api.mailtrap.io/api/send", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: { email: "hello@thenexaim.com", name: "Mailtrap Test" },
        to: [{ email: "sma271992@gmail.com" }],
        subject: `New Message from ${firstName} ${lastName}`,
        text: `Email: ${email}\nMessage: ${message}`,
        category: "Integration Test",
      }),
    });
    if (!mailRes.ok) return NextResponse.json({ error: "Mail sending failed" }, { status: 400 });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
