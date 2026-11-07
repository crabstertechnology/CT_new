import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { z } from 'zod';
import { sendEnquiryEmail } from './services/emailService.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const clientDistPath = path.resolve(__dirname, '../../dist');

const app = express();
const PORT = Number(process.env.PORT) || 5000;

// Enable JSON middleware and Cross-Origin Resource Sharing
app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/api/health', (_req: Request, res: Response) => {
  res.json({
    status: 'ok',
    service: 'Crabster Technology Backend',
    timestamp: new Date().toISOString(),
  });
});

// Validation schema for enquiry form submission
const enquirySchema = z.object({
  name: z.string().trim().min(1, 'Name is required'),
  email: z.string().trim().email('Valid email address is required'),
  phone: z.string().trim().min(5, 'Phone number must be at least 5 characters'),
  description: z.string().trim().min(5, 'Please provide details about what is not working'),
});

// Enquiry submission endpoint
app.post('/api/enquiry', async (req: Request, res: Response) => {
  try {
    const parseResult = enquirySchema.safeParse(req.body);

    if (!parseResult.success) {
      const errorMessages = parseResult.error.errors.map(err => err.message).join(', ');
      return res.status(400).json({
        success: false,
        error: errorMessages,
      });
    }

    const { name, email, phone, description } = parseResult.data;

    const emailResult = await sendEnquiryEmail({
      name,
      email,
      phone,
      description,
    });

    return res.status(200).json({
      success: true,
      message: 'Enquiry received successfully! An engineer will review your floor requirements and get back to you.',
      data: emailResult,
    });
  } catch (error: any) {
    console.error('[Server Error] Failed to process enquiry:', error);
    return res.status(500).json({
      success: false,
      error: 'An internal error occurred while processing your enquiry. Please try again or contact crabstertech@gmail.com directly.',
    });
  }
});

// Serve frontend build in production
if (fs.existsSync(clientDistPath)) {
  app.use(express.static(clientDistPath));

  app.get('*', (req: Request, res: Response, next) => {
    if (req.path.startsWith('/api')) {
      return next();
    }
    res.sendFile(path.join(clientDistPath, 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`🚀 Crabster Technology Server is running on port ${PORT}`);
  console.log(`📬 Enquiry endpoint: http://localhost:${PORT}/api/enquiry`);
  if (fs.existsSync(clientDistPath)) {
    console.log(`🌐 Serving production frontend from ${clientDistPath}`);
  }
});
