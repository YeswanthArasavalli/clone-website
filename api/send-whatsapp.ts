import type { VercelRequest, VercelResponse } from '@vercel/node';

// Using a simple approach - send data to FormSubmit which handles email
// and log the WhatsApp message intent for manual handling or future integration

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, message, phone } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Step 1: Send email via FormSubmit
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);
    formData.append('_captcha', 'false');

    const emailResponse = await fetch('https://formsubmit.co/yeswanthdatalabs@gmail.com', {
      method: 'POST',
      body: formData,
    });

    if (!emailResponse.ok) {
      throw new Error('Email submission failed');
    }

    // Step 2: Send WhatsApp message
    // Using Twilio SDK if credentials are available, otherwise simulate
    let whatsappStatus = 'pending';
    
    if (process.env.TWILIO_ACCOUNT_SID && process.env.TWILIO_AUTH_TOKEN) {
      try {
        const twilioResponse = await fetch(
          `https://api.twilio.com/2010-04-01/Accounts/${process.env.TWILIO_ACCOUNT_SID}/Messages.json`,
          {
            method: 'POST',
            headers: {
              'Authorization': `Basic ${Buffer.from(
                `${process.env.TWILIO_ACCOUNT_SID}:${process.env.TWILIO_AUTH_TOKEN}`
              ).toString('base64')}`,
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
              From: 'whatsapp:+14155238886',
              To: `whatsapp:${phone || '+916303321322'}`,
              Body: `New Contact Form Submission\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
            }).toString(),
          }
        );

        if (twilioResponse.ok) {
          whatsappStatus = 'sent';
        }
      } catch (error) {
        console.log('WhatsApp send attempted, logging for manual follow-up');
        whatsappStatus = 'queued';
      }
    }

    return res.status(200).json({
      success: true,
      message: 'Form submitted successfully',
      email: 'sent',
      whatsapp: whatsappStatus,
      data: { name, email },
    });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({
      error: 'Failed to process submission',
      details: error instanceof Error ? error.message : 'Unknown error',
    });
  }
}
