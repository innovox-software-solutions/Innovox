
import { NextResponse } from 'next/server';
import { google } from 'googleapis';
import nodemailer from 'nodemailer';

// --- IMPORTANT: Credentials are now read from environment variables ---
const GOOGLE_SHEET_ID = process.env.GOOGLE_SHEET_ID;
const GOOGLE_CLOUD_CREDENTIALS = {
  type: "service_account",
  project_id: process.env.PROJECT_ID,
  private_key_id: process.env.PRIVATE_KEY_ID,
  private_key: process.env.PRIVATE_KEY?.replace(/\\n/g, '\n'),
  client_email: process.env.CLIENT_EMAIL,
  client_id: process.env.CLIENT_ID,
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url: process.env.CLIENT_X509_CERT_URL
};
// ----------------------------------------------------------------------

export async function POST(request) {
  try {
    const { name, email, phone, message } = await request.json();

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { success: false, message: 'All fields are required.' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }
    // --- 1. Append data to Google Sheet (if configured) ---
    if (GOOGLE_SHEET_ID && process.env.CLIENT_EMAIL) {
      try {
        const auth = new google.auth.GoogleAuth({
          credentials: GOOGLE_CLOUD_CREDENTIALS,
          scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });

        const sheets = google.sheets({ version: 'v4', auth });

        await sheets.spreadsheets.values.append({
          spreadsheetId: GOOGLE_SHEET_ID,
          range: 'A1:D1',
          valueInputOption: 'USER_ENTERED',
          resource: {
            values: [[name, email, phone, message]],
          },
        });
      } catch (sheetError) {
        console.error('Google Sheets error:', sheetError);
        // Continue with email sending even if sheets fails
      }
    }

    // --- 2. Send email notification (if configured) ---
    if (process.env.EMAIL_HOST && process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      try {
        const transporter = nodemailer.createTransport({
          host: process.env.EMAIL_HOST,
          port: parseInt(process.env.EMAIL_PORT) || 587,
          secure: process.env.EMAIL_PORT === '465',
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
        });

        const mailOptions = {
          from: `"Innovox" <${process.env.EMAIL_FROM || process.env.EMAIL_USER}>`,
          to: process.env.EMAIL_USER,
          subject: '🚀 New Work Enquiry For You!',
          html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6;">
              <h2 style="color: #333;">New Inquiry from Your Website</h2>
              <p>You have received a new message from the contact form on your website. Here are the details:</p>
              <hr>
              <p><strong>👤 Name:</strong> ${name}</p>
              <p><strong>📧 Email:</strong> ${email}</p>
              <p><strong>📞 Phone:</strong> ${phone}</p>
              <p><strong>📝 Message:</strong></p>
              <p style="padding-left: 20px; border-left: 3px solid #eee;">${message}</p>
              <hr>
              <p style="font-size: 0.9em; color: #777;">This is an automated notification from your website contact form.</p>
            </div>
          `,
        };

        await transporter.sendMail(mailOptions);
      } catch (emailError) {
        console.error('Email sending error:', emailError);
      }
    }

    return NextResponse.json({ success: true, message: 'Your message has been sent successfully!' });

  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json({ success: false, message: 'Something went wrong. Please try again later.' }, { status: 500 });
  }
}
