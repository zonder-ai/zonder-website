# Contact Form Setup

The contact form at `/contact` is ready to use and will send emails to `hello@zonder.ai`.

## Quick Setup (5 minutes)

### 1. Get a Resend API Key

1. Go to [resend.com](https://resend.com) and sign up
2. Navigate to API Keys section
3. Create a new API key
4. Copy the key (starts with `re_`)

### 2. Add Environment Variable

Create a `.env.local` file in the website directory:

```bash
RESEND_API_KEY=re_your_actual_api_key_here
```

### 3. Verify Domain (Optional, for production)

For testing, the form will work with the default `onboarding@resend.dev` sender.

For production:
1. In Resend dashboard, go to Domains
2. Add your domain (e.g., `zonder.ai`)
3. Add the DNS records they provide
4. Update line 11 in `app/api/contact/route.ts`:
   ```ts
   from: "Zonder Contact <contact@zonder.ai>",
   ```

### 4. Test It

1. Restart your dev server:
   ```bash
   npm run dev
   ```

2. Visit [http://localhost:3000/contact](http://localhost:3000/contact)

3. Fill out and submit the form

4. Check your inbox at `hello@zonder.ai`

## Features

- **Form validation**: Name, email, and message are required
- **Loading states**: Shows "Sending..." while processing
- **Success feedback**: Confirms submission with user's email
- **Error handling**: Shows helpful error messages
- **Reply-to**: Emails include the sender's email for easy replies
- **Clean design**: Matches the rest of your site

## Troubleshooting

**"Failed to send email"**
- Check that `RESEND_API_KEY` is in your `.env.local`
- Verify the API key is valid in your Resend dashboard
- Restart your dev server after adding the env variable

**Rate limits**
- Free tier: 100 emails/day
- Upgrade at resend.com/pricing if you need more

## Files Created

- `app/contact/page.tsx` - Contact form page
- `app/api/contact/route.ts` - API endpoint for sending emails
- `.env.example` - Example environment variables
