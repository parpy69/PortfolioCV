# Deployment Guide

## Quick Deploy to Vercel (2 minutes)

### Step 1: Prepare Your Code

1. Make sure all your content is updated in `lib/siteData.ts`
2. Update `siteUrl` in `lib/siteData.ts` with your actual domain (or use the Vercel URL later)

### Step 2: Push to GitHub

```bash
cd nextjs-portfolio
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### Step 3: Deploy on Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "New Project"
4. Import your repository
5. Vercel auto-detects Next.js - no config needed!
6. Click "Deploy"

**Done!** Your site will be live at `https://your-project.vercel.app`

### Step 4: Custom Domain (Optional)

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Update DNS records as instructed
5. Update `siteUrl` in `lib/siteData.ts` to your new domain
6. Push changes - Vercel auto-deploys!

## Alternative: Deploy to Netlify

1. Build your project:
```bash
npm run build
```

2. Go to [netlify.com](https://netlify.com)
3. Drag and drop the `.next` folder
4. Or connect your GitHub repo for auto-deploys

## Alternative: Deploy to Your Own Server

1. Build the project:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

3. Use PM2 or similar to keep it running:
```bash
npm install -g pm2
pm2 start npm --name "portfolio" -- start
pm2 save
pm2 startup
```

## Environment Variables

No environment variables needed! Everything is configured in `lib/siteData.ts`.

## Performance Tips

- Images in `public/` folder are automatically optimized by Next.js
- Use `.webp` format for images when possible
- Keep images under 500KB for best performance

## Troubleshooting

### Build fails on Vercel

- Check that all imports are correct
- Make sure `package.json` has all dependencies
- Check build logs for specific errors

### Images not showing

- Make sure images are in the `public/` folder
- Reference them with `/image-name.png` (starting with `/`)

### Fonts not loading

- Fonts are loaded from Google Fonts automatically
- Check your internet connection during build

## Post-Deployment Checklist

- [ ] Test all navigation links
- [ ] Verify contact form (if you add backend)
- [ ] Check mobile responsiveness
- [ ] Test on different browsers
- [ ] Verify Open Graph image shows on social media
- [ ] Update `siteUrl` in `lib/siteData.ts` to production URL
- [ ] Add Google Analytics (optional)
- [ ] Set up custom domain (optional)

## Need Help?

- [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Discord](https://discord.gg/nextjs)

