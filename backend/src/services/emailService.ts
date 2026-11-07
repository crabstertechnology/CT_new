import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

export interface EnquiryPayload {
  name: string;
  email: string;
  phone: string;
  description: string;
}

export interface SendEmailResult {
  success: boolean;
  messageId?: string;
  previewUrl?: string | false;
  mode: 'real' | 'simulated';
  note?: string;
}

const TARGET_RECIPIENT = process.env.TARGET_EMAIL || 'crabstertech@gmail.com';

/**
 * Creates and returns a configured Nodemailer transporter
 */
async function getTransporter() {
  // Re-read .env to always pick up newly configured credentials without requiring a manual restart
  dotenv.config({ override: true });

  const emailUser = process.env.EMAIL_USER?.trim();
  // Strip any accidental spaces from Gmail app passwords (e.g. "abcd efgh ijkl mnop" -> "abcdefghijklmnop")
  const emailPass = process.env.EMAIL_PASS?.replace(/\s+/g, '');
  const smtpHost = process.env.SMTP_HOST?.trim();

  // Custom SMTP configuration
  if (smtpHost && emailUser && emailPass) {
    return {
      transporter: nodemailer.createTransport({
        host: smtpHost,
        port: Number(process.env.SMTP_PORT) || 587,
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
          user: emailUser,
          pass: emailPass,
        },
      }),
      mode: 'real' as const,
    };
  }

  // Gmail configuration via App Password
  if (emailUser && emailPass) {
    return {
      transporter: nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: emailUser,
          pass: emailPass,
        },
      }),
      mode: 'real' as const,
    };
  }

  // Development/Test fallback with Ethereal Email
  try {
    const testAccount = await nodemailer.createTestAccount();
    return {
      transporter: nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass,
        },
      }),
      mode: 'simulated' as const,
      testAccount,
    };
  } catch (err) {
    console.warn('[EmailService] Could not create Ethereal test account. Using JSON mock transporter.', err);
    return {
      transporter: nodemailer.createTransport({
        jsonTransport: true,
      }),
      mode: 'simulated' as const,
    };
  }
}

/**
 * Formats HTML email template with Crabster Technology branding
 */
function createHtmlEmail(enquiry: EnquiryPayload): string {
  const { name, email, phone, description } = enquiry;
  const receivedAt = new Date().toLocaleString('en-US', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'full',
    timeStyle: 'medium',
  });

  return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <title>New Plant Enquiry - Crabster Technology</title>
  </head>
  <body style="margin: 0; padding: 24px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; color: #0f172a;">
    <div style="max-width: 620px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-top: 4px solid #E87121; padding: 32px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);">
      
      <div style="margin-bottom: 24px; border-bottom: 1px solid #f1f5f9; padding-bottom: 16px;">
        <span style="font-size: 11px; font-weight: 800; letter-spacing: 0.1em; color: #E87121; text-transform: uppercase;">
          CRABSTER TECHNOLOGY • NEW INCOMING ENQUIRY
        </span>
        <h1 style="margin: 8px 0 0; font-size: 22px; font-weight: 800; color: #09090b;">
          Customer Plant Modernization Enquiry
        </h1>
        <p style="margin: 4px 0 0; font-size: 13px; color: #64748b;">
          Received on ${receivedAt} (IST)
        </p>
      </div>

      <div style="margin-bottom: 24px;">
        <h2 style="font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #475569; margin-bottom: 12px;">
          Contact Information
        </h2>
        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
          <tr>
            <td style="padding: 10px 12px; background-color: #f8fafc; font-weight: 600; width: 120px; color: #334155; border: 1px solid #e2e8f0;">Name</td>
            <td style="padding: 10px 12px; border: 1px solid #e2e8f0; color: #0f172a; font-weight: 500;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px 12px; background-color: #f8fafc; font-weight: 600; color: #334155; border: 1px solid #e2e8f0;">Email</td>
            <td style="padding: 10px 12px; border: 1px solid #e2e8f0;">
              <a href="mailto:${email}" style="color: #E87121; text-decoration: none; font-weight: 600;">${email}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 10px 12px; background-color: #f8fafc; font-weight: 600; color: #334155; border: 1px solid #e2e8f0;">Phone</td>
            <td style="padding: 10px 12px; border: 1px solid #e2e8f0;">
              <a href="tel:${phone}" style="color: #0f172a; text-decoration: none; font-weight: 600;">${phone}</a>
            </td>
          </tr>
        </table>
      </div>

      <div style="margin-bottom: 28px;">
        <h2 style="font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #475569; margin-bottom: 12px;">
          Plant Issue & Requirements
        </h2>
        <div style="background-color: #fffaf5; border: 1px solid #fed7aa; padding: 18px; border-left: 4px solid #E87121; font-size: 15px; line-height: 1.6; color: #1e293b; white-space: pre-wrap;">
${description}
        </div>
      </div>

      <div style="border-top: 1px solid #e2e8f0; padding-top: 20px; text-align: center;">
        <a href="mailto:${email}?subject=Re:%20Crabster%20Technology%20Plant%20Enquiry%20Follow-up" 
           style="display: inline-block; background-color: #E87121; color: #ffffff; text-decoration: none; font-weight: 700; font-size: 14px; padding: 12px 24px; border-radius: 2px;">
          Reply Directly to ${name}
        </a>
      </div>

      <div style="margin-top: 24px; font-size: 12px; color: #94a3b8; text-align: center;">
        Sent automatically from Crabster Technology web enquiry portal to ${TARGET_RECIPIENT}.
      </div>
    </div>
  </body>
  </html>
  `;
}

/**
 * Sends enquiry email to crabstertech@gmail.com
 */
export async function sendEnquiryEmail(enquiry: EnquiryPayload): Promise<SendEmailResult> {
  dotenv.config({ override: true });
  const targetRecipient = process.env.TARGET_EMAIL?.trim() || 'crabstertech@gmail.com';
  const { transporter, mode } = await getTransporter();

  const senderFrom = process.env.EMAIL_USER?.trim() 
    ? `"Crabster Website" <${process.env.EMAIL_USER.trim()}>` 
    : `"Crabster Website" <no-reply@crabstertech.com>`;

  const mailOptions = {
    from: senderFrom,
    to: targetRecipient,
    replyTo: `"${enquiry.name}" <${enquiry.email}>`,
    subject: `[New Plant Enquiry] from ${enquiry.name}`,
    text: `New Plant Enquiry from Crabster Website:\n\n` +
          `Name: ${enquiry.name}\n` +
          `Email: ${enquiry.email}\n` +
          `Phone: ${enquiry.phone}\n\n` +
          `Plant Issue / Description:\n${enquiry.description}\n`,
    html: createHtmlEmail(enquiry),
  };

  const info = await transporter.sendMail(mailOptions);
  const previewUrl = nodemailer.getTestMessageUrl(info);

  if (mode === 'real') {
    console.log(`[EmailService] Live email successfully dispatched to ${targetRecipient}! ID: ${info.messageId}`);
    return {
      success: true,
      messageId: info.messageId,
      mode: 'real',
    };
  } else {
    console.log(`\n======================================================`);
    console.log(`[EmailService - DEV/SIMULATION MODE]`);
    console.log(`Recipient: ${targetRecipient}`);
    console.log(`From User: ${enquiry.name} (${enquiry.email}, ${enquiry.phone})`);
    console.log(`Message:   ${enquiry.description}`);
    if (previewUrl) {
      console.log(`Preview URL: ${previewUrl}`);
    }
    console.log(`💡 To send actual emails directly to ${TARGET_RECIPIENT}, add EMAIL_USER and EMAIL_PASS to backend/.env`);
    console.log(`======================================================\n`);

    return {
      success: true,
      messageId: info.messageId,
      previewUrl: previewUrl || false,
      mode: 'simulated',
      note: 'Simulated dev dispatch. Configure backend/.env with real credentials to send via Gmail SMTP.',
    };
  }
}

