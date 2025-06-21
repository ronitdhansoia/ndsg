# Thank You Email Setup Guide

To enable automatic thank you emails to users who submit the contact form, follow these steps:

## 1. Create a New Email Template in EmailJS

1. Log into your [EmailJS Dashboard](https://dashboard.emailjs.com)
2. Go to **Email Templates**
3. Click **Create New Template**
4. Name it: "Thank You Email" or similar

## 2. Configure the Template

### Template Settings:
- **Subject**: `Thank you for contacting NDSG Associates`
- **From Name**: `NDSG Associates` 
- **From Email**: Your email address (ronitdhansoia@gmail.com)
- **Reply To**: `ronitdhansoia@gmail.com`
- **To Email**: `{{to_email}}` (this is important - it sends to the user)

### Template Content:
Copy the entire content from `email-template-thankyou.html` file into the template editor.

### Template Variables:
Make sure these variables are available:
- `{{to_email}}` - User's email address (for the "To" field)
- `{{from_name}}` - User's name
- `{{company}}` - Company name
- `{{project_type}}` - Selected project type
- `{{budget}}` - Budget range
- `{{timeline}}` - Project timeline

## 3. Get the Template ID

After saving the template:
1. Find the new template in your templates list
2. Copy the Template ID (looks like: template_xxxxxxx)

## 4. Update the Code

In `/components/sections/contact.tsx`, update line 74:
```typescript
const THANKYOU_TEMPLATE_ID = "template_thankyou"; // Replace with your actual template ID
```

Replace `"template_thankyou"` with your actual template ID.

## 5. Test

1. Submit a test inquiry through the contact form
2. Check that you receive the admin notification at ronitdhansoia@gmail.com
3. Check that the user receives the thank you email at their provided email address

## Notes

- The thank you email is sent after the admin notification
- If the thank you email fails, the form will still show success (admin email was sent)
- Check the browser console for any errors
- EmailJS free tier allows 200 emails/month (each form submission sends 2 emails)