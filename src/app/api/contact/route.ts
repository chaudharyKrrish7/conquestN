import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, dob, email, phone, citizenOf, destination, visaType, applicants, message } = body;

    // 1. Format the data array EXACTLY as the columns appear in Google Sheets
    // A: Timestamp, B: Name, C: DOB, D: Email, E: Phone, F: Citizen Of, G: Destination, H: Visa Type, I: Applicants, J: Message
    const sheetData = {
      data: [
        new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }), // Timestamp
        name,
        dob, // <-- Added Date of Birth here to fix the column shifting!
        email,
        phone,
        citizenOf,
        destination,
        visaType || "N/A",
        applicants,
        message || "N/A"
      ]
    };

    // 2. Send to Google Sheets Webhook
    if (process.env.GOOGLE_SHEET_WEBHOOK_URL) {
      await fetch(process.env.GOOGLE_SHEET_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(sheetData), // Send the formatted array
      }).catch(err => console.error("Sheet Error:", err));
    }

    // 3. Send Email Notification (Optional: updating your email body to include DOB)
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      const nodemailer = require("nodemailer");
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.OWNER_EMAIL,
        subject: `New Visa Lead: ${name} to ${destination}`,
        html: `
          <h2>New Visa Application Lead</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Date of Birth:</strong> ${dob}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Citizen Of:</strong> ${citizenOf}</p>
          <p><strong>Destination:</strong> ${destination}</p>
          <p><strong>Visa Type:</strong> ${visaType || "N/A"}</p>
          <p><strong>Applicants:</strong> ${applicants}</p>
          <p><strong>Message:</strong> ${message || "None"}</p>
        `,
      };

      await transporter.sendMail(mailOptions);
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ error: "Failed to submit application" }, { status: 500 });
  }
}