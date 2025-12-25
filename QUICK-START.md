# Quick Start Guide

## 🚀 Run Locally (3 commands)

```bash
cd nextjs-portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## ✏️ Edit Your Content

**Everything you need to edit is in ONE file:**

### `lib/siteData.ts` ← EDIT THIS FILE

This file contains:

1. **Hero Section** - Your name, title, tagline
2. **About Section** - Bio paragraphs and fun facts
3. **Skills** - Frontend, Backend, Tools
4. **Projects** - Array of your projects
5. **Experience** - Work history
6. **Contact** - Email and social links
7. **SEO** - Meta titles and descriptions

### Example: Add a New Project

Open `lib/siteData.ts` and find the `projects` array. Add:

```typescript
{
  title: "My Awesome App",
  description: "What it does...",
  tags: ["Next.js", "TypeScript"],
  liveUrl: "https://myapp.com",
  detailsUrl: "#",
  featured: true,
  gradient: "from-purple-500/20 to-blue-500/20"
}
```

Save the file. The page updates automatically!

## 🎨 Change Colors

Edit `app/globals.css` and find the `:root` section:

```css
--primary: 263 70% 50%;  /* Change this for different accent color */
```

Use [HSL Color Picker](https://hslpicker.com/) to find colors.

## 📁 File Structure (What's What)

```
nextjs-portfolio/
├── lib/siteData.ts          ← EDIT YOUR CONTENT HERE
├── app/
│   ├── page.tsx             ← Main page (don't need to touch)
│   ├── layout.tsx           ← SEO & fonts
│   └── globals.css          ← Colors & styles
├── components/
│   ├── sections/            ← Each section of your site
│   └── ui/                  ← Buttons, cards, etc.
└── public/                  ← Put images here
```

## 🌐 Deploy to Vercel

1. Push to GitHub:
```bash
git init
git add .
git commit -m "My portfolio"
git remote add origin YOUR_GITHUB_URL
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your repo
5. Click "Deploy"

**Done!** Live in 2 minutes.

## 🆘 Common Tasks

### Add a new skill
Open `lib/siteData.ts` → find `skills` → add to array

### Change your email
Open `lib/siteData.ts` → find `contact.email`

### Update social links
Open `lib/siteData.ts` → find `contact.socialLinks`

### Add your photo
1. Put image in `public/` folder (e.g., `public/avatar.jpg`)
2. Edit `components/sections/AboutSection.tsx`
3. Add `<img src="/avatar.jpg" />` where you want it

### Change fonts
Open `app/layout.tsx` → import different Google Fonts

## 📝 Before Deploying

- [ ] Update all text in `lib/siteData.ts`
- [ ] Change `siteUrl` to your actual domain
- [ ] Update email and social links
- [ ] Replace `public/opengraph.jpg` with your image
- [ ] Test on mobile (Chrome DevTools → Toggle Device)

## 🎯 Next Steps

1. **Customize content** in `lib/siteData.ts`
2. **Test locally** with `npm run dev`
3. **Deploy to Vercel** (see DEPLOYMENT.md)
4. **Share your portfolio!**

---

Need help? Check README.md or DEPLOYMENT.md for detailed guides.

