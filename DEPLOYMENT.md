# 🚀 Jai Education Academy - Vercel Deployment Guide

This project is fully optimized for [Vercel](https://vercel.com/) deployment with zero configuration. Follow these steps to get your site live:

### 1. Push to GitHub (Recommended)
First, ensure your latest code is pushed to your preferred git provider (GitHub, GitLab, or Bitbucket).

```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

### 2. Import to Vercel
1. Log in to [Vercel](https://vercel.com/).
2. Click **"Add New"** > **"Project"**.
3. Import your **`jai`** repository.

### 3. MANDATORY: Set Environment Variables
The application relies on specific environment variables for contact details. You **MUST** add these in the Vercel Dashboard under **Settings > Environment Variables**:

| Variable | Example Value |
| :--- | :--- |
| `NEXT_PUBLIC_SITE_NAME` | `Jai Education Academy` |
| `NEXT_PUBLIC_SITE_PHONE` | `+91 98765 43210` |
| `NEXT_PUBLIC_SITE_EMAIL` | `contact@jaiacademy.com` |
| `NEXT_PUBLIC_SITE_ADDRESS` | `Sector 45, Gurgaon, Haryana, India` |
| `NEXT_PUBLIC_SITE_WHATSAPP` | `919876543210` |

### 4. Deploy from CLI (Alternative)
If you prefer deploying directly from your terminal:

```bash
# Install Vercel CLI
npm i -g vercel

# Login and Deploy
vercel
```

### 5. Remove Vercel Toolbar (Optional)
If you want to remove the Vercel editing/collaboration toolbar on your preview URLs:

1. Go to your **Vercel Project Dashboard**.
2. Click on the **"Settings"** tab.
3. Under the **"General"** section, scroll down to **"Vercel Toolbar"**.
4. Set it to **"Disabled"**.
5. Click **"Save"**.

---
*Created with Excellence for Jai Education Academy.*
