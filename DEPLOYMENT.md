# PH Hardware Deployment Guide (Vercel)

To go live globally in minutes, follow these steps:

### 1. Push to GitHub (Recommended)
The most reliable way to maintain and auto-update your site.
1. Create a new repository on GitHub named `ph-hardware-global`.
2. In your terminal, run:
   ```bash
   cd website
   git init
   git add .
   git commit -m "Initial commit: Professional Hardware Website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/ph-hardware-global.git
   git push -u origin main
   ```

### 2. Connect to Vercel
1. Go to [Vercel.com](https://vercel.com) and sign up with your GitHub account.
2. Click **"Add New"** > **"Project"**.
3. Import your `ph-hardware-global` repository.
4. **Important Framework Settings**:
   - Framework Preset: **Next.js**
   - Root Directory: `website`
5. Click **"Deploy"**.

### 3. Your Live URL
Vercel will provide a free URL like `ph-hardware-global.vercel.app`. 
You can later bind your official domain `www.phhardware.com.cn` in the **Settings > Domains** section.

### 4. Why Vercel?
- **Global Edge Network**: Your customers in Spain, France, and Russia will experience lightning-fast load speeds.
- **Auto-Update**: Whenever I edit the code for you, just push to GitHub, and the site updates automatically.
- **SSL Included**: Automatic HTTPS security for your professional image.
