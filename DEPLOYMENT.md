# Deployment

## Vercel (easiest)

1. Push code to GitHub
2. Go to vercel.com
3. Sign in with GitHub
4. Click "New Project"
5. Select your repo
6. Click "Deploy"

Done. It auto-detects Next.js.

## After deploying

Update `siteUrl` in `lib/siteData.ts` to your actual domain (or the Vercel URL).

Push the change and Vercel auto-deploys.

## Custom domain

In Vercel dashboard:
- Settings → Domains
- Add your domain
- Update DNS as instructed
- Update `siteUrl` in the code

## Troubleshooting

**Build fails?** Check the Vercel logs. Usually it's a missing dependency or import error.

**Images not showing?** Make sure they're in the `public/` folder and referenced with `/image.png`.

**Fonts not loading?** They're from Google Fonts - check your internet connection during build.
