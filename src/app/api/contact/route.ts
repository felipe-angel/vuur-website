import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';


// ──────────────────────────────────────────────────────────────────────────────
// 1) Configure your SMTP transporter via environment variables.
//    Make sure to add the following to Vercel (or your local .env):
//      SMTP_HOST=smtp.example.com
//      SMTP_PORT=587
//      SMTP_USER=your_smtp_username
//      SMTP_PASS=your_smtp_password
//      EMAIL_TO=felipe@vuursocial.com
//      EMAIL_FROM=“Vuursocial Contact Form” <no-reply@vuursocial.com>
//
// 2) On Vercel, go to Project ▶️ Settings ▶️ Environment Variables,
//    and add the above four keys exactly as named. Then redeploy.
// ──────────────────────────────────────────────────────────────────────────────
const smtpHost = process.env.SMTP_HOST!;
const smtpPort = Number(process.env.SMTP_PORT ?? '587');
const smtpUser = process.env.SMTP_USER!;
const smtpPass = process.env.SMTP_PASS!;
const emailTo = process.env.EMAIL_TO!;
const emailFrom = process.env.EMAIL_FROM!;


// Create a Nodemailer transporter once at module‐level
const transporter = nodemailer.createTransport({
 host: smtpHost,
 port: smtpPort,
 secure: smtpPort === 465, // true for 465, false for other ports (e.g. 587)
 auth: {
   user: smtpUser,
   pass: smtpPass,
 },
});


/**
* POST handler for /api/contact
* Expects JSON: { firstName, lastName, email, phone, services: string[] }
*/
export async function POST(request: NextRequest) {
 try {
   const body = await request.json();
   const { firstName, lastName, email, phone, services } = body;


   // Basic validation
   if (!firstName || !email) {
     return NextResponse.json(
       { error: 'Missing required fields: firstName and email.' },
       { status: 400 }
     );
   }


   // Build an HTML‐formatted email body
   const servicesList = Array.isArray(services)
     ? services.map((s: string) => `<li>${s}</li>`).join('')
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


   // Send the email
   await transporter.sendMail({
     from: emailFrom,       // e.g. "Vuursocial Contact Form <no-reply@vuursocial.com>"
     to: emailTo,           // "felipe@vuursocial.com"
     subject: `New Contact Inquiry from ${firstName} ${lastName || ''}`,
     html: htmlBody,
   });


   return NextResponse.json({ message: 'Form submitted successfully.' }, { status: 200 });
 } catch (err: any) {
   console.error('Error in /api/contact:', err);
   return NextResponse.json(
     { error: 'Failed to send email. Please try again later.' },
     { status: 500 }
   );
 }
}



