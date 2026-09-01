import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, dob, email, phone, citizenOf, destination, visaType, applicants, message } = body;

    // 1. Google Sheets Integration (Maintains your perfect Excel record)
    const sheetData = {
      data: [
        new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }), // Timestamp
        name,
        dob, 
        email,
        phone,
        citizenOf,
        destination,
        visaType || "N/A",
        applicants,
        message || "N/A"
      ]
    };

    if (process.env.GOOGLE_SHEET_WEBHOOK_URL) {
      await fetch(process.env.GOOGLE_SHEET_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(sheetData), 
      }).catch(err => console.error("Sheet Error:", err));
    }

    // 2. Send Email Notification to CONQUESTVISA@GMAIL.COM
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      const nodemailer = require("nodemailer");
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER, // Your server/sending email (can be the same as conquestvisa@gmail.com)
          pass: process.env.EMAIL_PASS, // App password
        },
      });

      const mailOptions = {
        from: `"${name} (New Lead)" <${process.env.EMAIL_USER}>`, // Shows the client's name as the sender name
        replyTo: email, // <-- MAGIC LINE: Clicking 'Reply' goes straight to the customer's email!
        // Inside your mailOptions in src/app/api/contact/route.ts
        to: "conquestvisa@gmail.com", // <-- lowercase here
        subject: `New Visa Lead: ${name} to ${destination}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-w-600px; padding: 20px; border: 1px solid #e2e8f0; border-radius: 10px;">
            <h2 style="color: #0c4a6e; border-bottom: 2px solid #0c4a6e; padding-bottom: 10px;">New Visa Application Lead</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Date of Birth:</strong> ${dob}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Citizen Of:</strong> ${citizenOf}</p>
            <p><strong>Destination:</strong> ${destination}</p>
            <p><strong>Visa Type:</strong> ${visaType || "N/A"}</p>
            <p><strong>Applicants:</strong> ${applicants}</p>
            <p><strong>Message / Notes:</strong></p>
            <div style="background-color: #f8fafc; padding: 15px; border-radius: 8px; margin-top: 10px;">
              ${message || "No specific requirements provided."}
            </div>
            <p style="font-size: 12px; color: #64748b; margin-top: 30px;">
              *Reply directly to this email to contact ${name}.
            </p>
          </div>
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