import { NextResponse } from 'next/server';

export async function GET() {
  // Test if environment variables are loaded
  const config = {
    SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_ztiq5yj",
    TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_uzfsjdq",
    PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "tFGrBssQt92lRU8JF",
  };

  // Test direct API call to EmailJS
  try {
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: config.SERVICE_ID,
        template_id: config.TEMPLATE_ID,
        user_id: config.PUBLIC_KEY,
        template_params: {
          from_name: 'Test User',
          from_email: 'test@example.com',
          company: 'Test Company',
          project_type: 'Testing',
          budget: 'Test Budget',
          timeline: 'Test Timeline',
          message: 'This is a test message from the API endpoint',
        }
      }),
    });

    const result = await response.text();
    
    return NextResponse.json({
      success: response.ok,
      status: response.status,
      result: result,
      config: {
        SERVICE_ID: config.SERVICE_ID,
        TEMPLATE_ID: config.TEMPLATE_ID,
        PUBLIC_KEY: config.PUBLIC_KEY.substring(0, 10) + '...',
      }
    });
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      error: error.message,
      config: {
        SERVICE_ID: config.SERVICE_ID,
        TEMPLATE_ID: config.TEMPLATE_ID,
        PUBLIC_KEY: config.PUBLIC_KEY.substring(0, 10) + '...',
      }
    });
  }
}