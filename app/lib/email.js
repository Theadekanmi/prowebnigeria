// Email service configuration for contact form
// You can use any of these services:

// Option 1: EmailJS (Client-side, no backend required)
export const emailJSConfig = {
  serviceId: 'YOUR_EMAILJS_SERVICE_ID',
  templateId: 'YOUR_EMAILJS_TEMPLATE_ID',
  userId: 'YOUR_EMAILJS_USER_ID'
};

// Option 2: Formspree (No backend required)
export const formspreeConfig = {
  endpoint: 'https://formspree.io/f/YOUR_FORMSPREE_ID'
};

// Option 3: SendGrid (Backend required)
export const sendGridConfig = {
  apiKey: process.env.SENDGRID_API_KEY,
  fromEmail: 'noreply@prowebnigeria.ng',
  toEmail: 'prowebnigeria@gmail.com'
};

// Option 4: Nodemailer (Backend required)
export const nodemailerConfig = {
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: process.env.SMTP_PORT || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER || 'prowebnigeria@gmail.com',
    pass: process.env.SMTP_PASS || 'your-app-password'
  }
};

// Recommended setup for ProWeb Nigeria:
// 1. Start with EmailJS or Formspree (easiest, no backend)
// 2. Move to SendGrid or Nodemailer when you have backend infrastructure
// 3. Consider using a CRM like HubSpot or Zoho for lead management

export const recommendedSetup = {
  immediate: 'EmailJS or Formspree',
  shortTerm: 'SendGrid with Next.js API routes',
  longTerm: 'CRM integration with automated follow-ups'
};
