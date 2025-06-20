// Test script to send email via EmailJS
// Run this with: node test-email.js

async function sendTestEmail() {
  try {
    console.log('Sending test email...');
    
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: 'service_ztiq5yj',
        template_id: 'template_uzfsjdq',
        user_id: 'tFGrBssQt92lRU8JF',
        template_params: {
          to_email: 'dhansoia@gmail.com',
          from_name: 'Test User',
          from_email: 'test@example.com',
          company: 'Test Company',
          project_type: 'Software Development',
          budget: '$10K - $25K',
          timeline: '1-3 Months',
          message: `This is a test email from NDSG website.
          
Company: Test Company
Email: test@example.com
Project Type: Software Development
Budget Range: $10K - $25K
Timeline: 1-3 Months

This is to confirm that the email integration is working correctly.`,
        }
      }),
    });

    if (response.ok) {
      console.log('✅ Test email sent successfully!');
      console.log('Check your inbox at dhansoia@gmail.com');
    } else {
      const error = await response.text();
      console.error('❌ Failed to send email:', error);
    }
  } catch (error) {
    console.error('❌ Error:', error);
  }
}

// Run the test
sendTestEmail();