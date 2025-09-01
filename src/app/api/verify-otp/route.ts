import { NextRequest, NextResponse } from 'next/server';
import twilio from 'twilio';

const client = twilio(
  process.env.TWILIO_API_KEY_SID!,
  process.env.TWILIO_API_KEY_SECRET!,
  { accountSid: process.env.TWILIO_ACCOUNT_SID! }
);

export async function POST(request: NextRequest) {
  try {
    const { phoneNumber, otp } = await request.json();

    if (!phoneNumber || !otp) {
      return NextResponse.json(
        { error: 'Phone number and OTP are required' },
        { status: 400 }
      );
    }

    // Format phone number to E.164 format if not already
    const formattedPhone = phoneNumber.startsWith('+') ? phoneNumber : `+91${phoneNumber}`;

    // Verify OTP using Twilio Verify
    // COMMENTED OUT - TWILIO DISABLED
    // const verificationCheck = await client.verify.v2
    //   .services(process.env.TWILIO_VERIFY_SERVICE_ID!)
    //   .verificationChecks.create({
    //     to: formattedPhone,
    //     code: otp
    //   });

    // MOCK: Always approve any OTP for development
    // if (verificationCheck.status === 'approved') {
      return NextResponse.json({
        success: true,
        message: 'OTP verified successfully',
        status: 'approved'
      });
    // } else {
    //   return NextResponse.json({
    //     success: false,
    //     message: 'Invalid OTP',
    //     status: verificationCheck.status
    //   }, { status: 400 });
    // }

  } catch (error) {
    console.error('Error verifying OTP:', error);
    return NextResponse.json(
      { error: 'Failed to verify OTP' },
      { status: 500 }
    );
  }
}
