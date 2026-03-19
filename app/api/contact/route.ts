import { NextResponse } from 'next/server';

type ContactRequest = {
  name?: string;
  email?: string;
  message?: string;
};

const resendEndpoint = 'https://api.resend.com/emails';

export async function POST(request: Request) {
  const { name, email, message } = (await request.json()) as ContactRequest;

  const trimmedName = name?.trim();
  const trimmedEmail = email?.trim();
  const trimmedMessage = message?.trim();

  if (!trimmedName || !trimmedEmail || !trimmedMessage) {
    return NextResponse.json(
      { message: 'Please complete your name, email, and message before submitting.' },
      { status: 400 },
    );
  }

  const fromEmail = process.env.ORDER_FROM_EMAIL;
  const resendApiKey = process.env.RESEND_API_KEY;

  if (!fromEmail || !resendApiKey) {
    return NextResponse.json(
      { message: 'Email delivery is not configured yet. Please try again later.' },
      { status: 500 },
    );
  }

  const emailResponse = await fetch(resendEndpoint, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [fromEmail],
      reply_to: trimmedEmail,
      subject: `New portfolio contact from ${trimmedName}`,
      text: [
        `Name: ${trimmedName}`,
        `Email: ${trimmedEmail}`,
        '',
        'Message:',
        trimmedMessage,
      ].join('\n'),
    }),
  });

  if (!emailResponse.ok) {
    const errorText = await emailResponse.text();

    return NextResponse.json(
      {
        message: 'Sorry, your message could not be sent right now. Please try again in a moment.',
        error: errorText,
      },
      { status: 502 },
    );
  }

  return NextResponse.json({
    message: 'Thanks! Your message was sent successfully. I will get back to you soon.',
  });
}
