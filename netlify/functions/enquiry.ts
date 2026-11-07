import type { Handler, HandlerEvent } from '@netlify/functions';
import nodemailer from 'nodemailer';

const TARGET_RECIPIENT = process.env.TARGET_EMAIL || 'crabstertech@gmail.com';

export const handler: Handler = async (event: HandlerEvent) => {
  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' }),
    };
  }

  try {
    const body = JSON.parse(event.body || '{}');
    const { name, email, phone, description } = body;

    if (!name || !email || !description) {
      return {
        statusCode: 400,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ success: false, error: 'Name, email, and description are required.' }),
      };
    }

    const emailUser = process.env.EMAIL_USER?.trim();
    const emailPass = process.env.EMAIL_PASS?.replace(/\s+/g, '');

    const transporter = (emailUser && emailPass)
      ? nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: emailUser,
            pass: emailPass,
          },
        })
      : nodemailer.createTransport({
          jsonTransport: true,
        });

    const receivedAt = new Date().toLocaleString('en-US', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'full',
      timeStyle: 'medium',
    });

    const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head><meta charset="utf-8"></head>
    <body style="margin: 0; padding: 24px; font-family: sans-serif; background-color: #f8fafc; color: #0f172a;">
      <div style="max-width: 620px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-top: 4px solid #E87121; padding: 32px;">
        <span style="font-size: 11px; font-weight: 800; letter-spacing: 0.1em; color: #E87121; text-transform: uppercase;">
          CRABSTER TECHNOLOGY • NEW ENQUIRY
        </span>
        <h1 style="margin: 8px 0 0; font-size: 22px; font-weight: 800; color: #09090b;">Customer Plant Enquiry</h1>
        <p style="margin: 4px 0 16px; font-size: 13px; color: #64748b;">Received on ${receivedAt} (IST)</p>
        
        <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 20px;">
          <tr>
            <td style="padding: 10px; background-color: #f8fafc; font-weight: 600; width: 100px; border: 1px solid #e2e8f0;">Name</td>
            <td style="padding: 10px; border: 1px solid #e2e8f0;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px; background-color: #f8fafc; font-weight: 600; border: 1px solid #e2e8f0;">Email</td>
            <td style="padding: 10px; border: 1px solid #e2e8f0;"><a href="mailto:${email}" style="color: #E87121;">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px; background-color: #f8fafc; font-weight: 600; border: 1px solid #e2e8f0;">Phone</td>
            <td style="padding: 10px; border: 1px solid #e2e8f0;">${phone || 'N/A'}</td>
          </tr>
        </table>

        <div style="background-color: #fffaf5; border: 1px solid #fed7aa; padding: 16px; border-left: 4px solid #E87121; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">
${description}
        </div>
      </div>
    </body>
    </html>
    `;

    const info = await transporter.sendMail({
      from: emailUser ? `"Crabster Website" <${emailUser}>` : `"Crabster Website" <no-reply@crabstertech.in>`,
      to: TARGET_RECIPIENT,
      replyTo: `"${name}" <${email}>`,
      subject: `[New Enquiry] Plant Modernization from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage:\n${description}`,
      html: htmlContent,
    });

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        success: true,
        message: 'Enquiry received successfully! An engineer will review your floor requirements and get back to you.',
        data: { messageId: info.messageId },
      }),
    };
  } catch (err: any) {
    console.error('Netlify function error:', err);
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ success: false, error: 'Server error processing enquiry.' }),
    };
  }
};

