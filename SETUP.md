# Environment Setup

## API Configuration

The application uses environment variables to configure the API endpoint.

### Local Development

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Update `.env` with your local API endpoint:
   ```
   VITE_API_BASE=http://127.0.0.1:8000
   ```

3. Run development server:
   ```bash
   npm run dev
   ```

### Production (Vercel)

Set the environment variable in Vercel dashboard:

1. Go to your Vercel project settings
2. Navigate to **Settings** → **Environment Variables**
3. Add new variable:
   - Name: `VITE_API_BASE`
   - Value: `https://your-api-domain.com` (your production API URL)
4. Redeploy the project

### Common Issues

**"Failed to fetch" on mobile/deployed app:**
- Ensure `VITE_API_BASE` points to your production API URL
- Check if the API has CORS enabled for your domain
- Verify the API endpoint is accessible from the internet

**CORS errors:**
- Ensure your backend API has CORS headers configured to accept requests from your frontend domain

