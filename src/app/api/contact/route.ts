import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// ──────────────────────────────────────────────────────────────────────────────
// Environment variables (set these in Vercel Settings → Environment Variables):
//   SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, EMAIL_TO, EMAIL_FROM
// ──────────────────────────────────────────────────────────────────────────────
const smtpHost = process.env.SMTP_HOST!;
const smtpPort = Number(process.env.SMTP_PORT ?? '587');
const smtpUser = process.env.SMTP_USER!;
const smtpPass = process.env.SMTP_PASS!;
const emailTo = process.env.EMAIL_TO!;
const emailFrom = process.env.EMAIL_FROM!;

const transporter = nodemailer.createTransport({
  host: smtpHost,
  port: smtpPort,
  secure: smtpPort === 465,
  auth: {
    user: smtpUser,
    pass: smtpPass,
  },
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, services } = body as {
      firstName: string;
      lastName?: string;
      email: string;
      phone?: string;
      services: string[];
    };

    if (!firstName || !email) {
      return NextResponse.json(
        { error: 'Missing required fields: firstName and email.' },
        { status: 400 }
      );
    }

    const servicesList = Array.isArray(services)
      ? services.map((s) => `<li>${s}</li>`).join('')
      : '';

    const htmlBody = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName || ''}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || '—'}</p>
      <p><strong>Interested In:</strong></p>
      <ul>${servicesList}</ul>
      <hr/>
      <p>Sent from: VUUR Website Contact Page</p>
    `;

    await transporter.sendMail({
      from: emailFrom,
      to: emailTo,
      subject: `New Contact Inquiry from ${firstName} ${lastName || ''}`,
      html: htmlBody,
    });

    return NextResponse.json({ message: 'Form submitted successfully.' }, { status: 200 });
  } catch (err) {
    console.error('Error in /api/contact:', err);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}
