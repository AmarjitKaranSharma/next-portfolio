import { emailTemplate } from "@/components/template/email";
import { NextRequest, NextResponse } from "next/server";
import { createTransport } from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

export async function POST(request: NextRequest) {
  try {
    const { name, message, email, phone } = await request.json();

    const transporter = createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USERNAME,
        pass: process.env.GMAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.GMAIL_USERNAME,
      to: process.env.GMAIL_RECIPIENT_EMAIL,
      subject: `Contact Portfolio - ${name} wants to connect with you`,
      html: emailTemplate(name, email, message, phone), // HTML body
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error("Error in POST request:", error);
    return NextResponse.error();
  }
}
