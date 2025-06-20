# Email Setup Guide for NDSG Website

The contact form uses EmailJS to send emails directly from the browser without needing a backend server.

## Setup Instructions

### 1. Create an EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account

### 2. Create an Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the instructions to connect your email account
5. Note down your **Service ID**

### 3. Create an Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Set up your template with these variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{company}}` - Company name
   - `{{project_type}}` - Project type
   - `{{budget}}` - Budget range
   - `{{timeline}}` - Timeline
   - `{{message}}` - Full message content

Example template:
```
Subject: New Inquiry from {{from_name}} - NDSG Website

You have received a new inquiry from the NDSG website:

Name: {{from_name}}
Email: {{from_email}}
Company: {{company}}
Project Type: {{project_type}}
Budget: {{budget}}
Timeline: {{timeline}}

Message:
{{message}}
```

4. Set the "To Email" field to: dhansoia@gmail.com
5. Save the template and note down your **Template ID**

### 4. Get Your Public Key
1. Go to "Account" in your dashboard
2. Find your **Public Key** in the API Keys section

### 5. Configure the Website
1. Create a `.env.local` file in the project root
2. Add your EmailJS credentials:
```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

### 6. Test the Form
1. Restart your development server
2. Fill out the contact form
3. Submit and check if the email is received

## Alternative: Simple Mailto Option

If you prefer not to use EmailJS, you can use the simple mailto version:

1. Replace the import in `app/page.tsx`:
   ```tsx
   // Change this:
   import { ContactSection } from "@/components/sections/contact";
   
   // To this:
   import { ContactSectionSimple as ContactSection } from "@/components/sections/contact-simple";
   ```

This will open the user's default email client with a pre-filled email when they submit the form.

## Troubleshooting

- **Email not sending**: Check browser console for errors
- **Invalid service**: Verify your Service ID is correct
- **Template not found**: Check your Template ID
- **Unauthorized**: Verify your Public Key is correct
- **Rate limit**: Free EmailJS accounts have a limit of 200 emails/month