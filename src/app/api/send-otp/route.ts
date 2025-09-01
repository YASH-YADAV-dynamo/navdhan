import { NextRequest, NextResponse } from 'next/server';
import twilio from 'twilio';

const client = twilio(
  process.env.TWILIO_API_KEY_SID!,
  process.env.TWILIO_API_KEY_SECRET!,
  { accountSid: process.env.TWILIO_ACCOUNT_SID! }
);

export async function POST(request: NextRequest) {
  try {
    const { phoneNumber } = await request.json();

    if (!phoneNumber) {
      return NextResponse.json(
        { error: 'Phone number is required' },
        { status: 400 }
      );
    }

    // Format phone number to E.164 format if not already
    const formattedPhone = phoneNumber.startsWith('+') ? phoneNumber : `+91${phoneNumber}`;

    // Send OTP using Twilio Verify
    // COMMENTED OUT - TWILIO DISABLED
    // const verification = await client.verify.v2
    //   .services(process.env.TWILIO_VERIFY_SERVICE_ID!)
    //   .verifications.create({
    //     to: formattedPhone,
    //     channel: 'sms'
    //   });

    // MOCK: Return success without actual Twilio call
    return NextResponse.json({
      success: true,
      message: 'OTP sent successfully',
      sid: 'mock_sid_' + Date.now()
    });

  } catch (error) {
    console.error('Error sending OTP:', error);
    return NextResponse.json(
      { error: 'Failed to send OTP' },
      { status: 500 }
    );
  }
}
