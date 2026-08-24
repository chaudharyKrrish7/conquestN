import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, citizenOf, destination, visaType, applicants, message } = body;

    // 1. Silent Email Dispatch to Owner
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"Conquest Leads" <${process.env.EMAIL_USER}>`,
      to: process.env.OWNER_EMAIL,
      subject: `New Visa Application / Inquiry: ${name}`,
      html: `
        <h2>New Lead Received - Conquest Visa & Immigration</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Citizen Of:</strong> ${citizenOf || "N/A"}</p>
        <p><strong>Destination:</strong> ${destination || "N/A"}</p>
        <p><strong>Visa Type:</strong> ${visaType || "N/A"}</p>
        <p><strong>Applicant Count:</strong> ${applicants || 1}</p>
        <p><strong>Message/Notes:</strong> ${message || "No notes provided"}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    // 2. Append directly to Google Sheet via Webhook
    if (process.env.GOOGLE_SHEET_WEBHOOK_URL) {
      await fetch(process.env.GOOGLE_SHEET_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    }

    return NextResponse.json({ success: true, message: "Lead processed successfully" }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}