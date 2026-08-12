import { NextResponse } from "next/server";

const TO_EMAIL = "daesoungcs@daesoung.com";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = String(body.name || "").trim();
    const company = String(body.company || "").trim();
    const email = String(body.email || "").trim();
    const phone = String(body.phone || "").trim();
    const inquiry = String(body.inquiry || "").trim();
    const message = String(body.message || "").trim();

    if (!name || !email || !inquiry || !message) {
      return NextResponse.json({ error: "Please complete all required fields." }, { status: 400 });
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.CONTACT_FROM_EMAIL;

    if (!apiKey || !fromEmail) {
      return NextResponse.json({ error: "The website email service is not configured yet." }, { status: 503 });
    }

    const subject = `[DSEC Website Inquiry] ${inquiry}`;
    const text = [
      "DAESOUNG ELECTRIC COMPONENTS — Website Inquiry",
      "",
      `Name: ${name}`,
      `Company: ${company || "-"}`,
      `Email: ${email}`,
      `Phone: ${phone || "-"}`,
      `Inquiry Type: ${inquiry}`,
      "",
      "Message:",
      message,
    ].join("\n");

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [TO_EMAIL],
        reply_to: email,
        subject,
        text,
      }),
    });

    if (!response.ok) {
      console.error("Contact email provider error:", await response.text());
      return NextResponse.json({ error: "We could not send your inquiry. Please try again later." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json({ error: "We could not send your inquiry. Please try again later." }, { status: 500 });
  }
}
