import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, message, service, budget, timeline } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Here you would typically:
    // 1. Send email using a service like SendGrid, Nodemailer, or EmailJS
    // 2. Store in database
    // 3. Send to CRM system
    
    // For now, we'll log the data and return success
    console.log('Contact form submission:', {
      name,
      email,
      phone,
      company,
      message,
      service,
      budget,
      timeline,
      timestamp: new Date().toISOString()
    });

    // TODO: Implement actual email sending
    // Example with SendGrid:
    // await sendEmail({
    //   to: 'prowebnigeria@gmail.com',
    //   subject: `New Contact Form Submission from ${name}`,
    //   text: `
    //     Name: ${name}
    //     Email: ${email}
    //     Phone: ${phone || 'Not provided'}
    //     Company: ${company || 'Not provided'}
    //     Service: ${service || 'General inquiry'}
    //     Budget: ${budget || 'Not specified'}
    //     Timeline: ${timeline || 'Not specified'}
    //     Message: ${message}
    //   `
    // });

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
