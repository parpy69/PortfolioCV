# Portfolio Website

A modern, clean portfolio website built with Next.js 15, TypeScript, and Tailwind CSS.

## 🎨 Features

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS v4** for styling
- **Framer Motion** for smooth animations
- **Responsive Design** - works on all devices
- **Dark Theme** with purple/cyan gradient accents
- **SEO Optimized** with proper meta tags and Open Graph images
- **Easy to Edit** - all content centralized in one data file

## 📁 Project Structure

```
nextjs-portfolio/
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx             # Main homepage with all sections
│   └── globals.css          # Tailwind config and custom styles
├── components/
│   ├── Navbar.tsx           # Navigation bar
│   ├── Footer.tsx           # Footer component
│   ├── sections/            # All page sections
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   └── ContactSection.tsx
│   └── ui/                  # Reusable UI components
│       ├── button.tsx
│       ├── card.tsx
│       ├── badge.tsx
│       ├── input.tsx
│       └── textarea.tsx
├── lib/
│   ├── siteData.ts          # ⭐ EDIT THIS FILE TO UPDATE CONTENT
│   └── utils.ts             # Utility functions
└── public/                  # Static assets (images, favicon, etc.)
```

## ✏️ How to Edit Content

**All editable content is in one file: `lib/siteData.ts`**

This file contains:
- Hero section text and CTAs
- About section paragraphs and facts
- Skills organized by category
- Projects array (add new projects here!)
- Work experience entries
- Contact information and social links
- Navigation links
- SEO metadata

### Adding a New Project

Open `lib/siteData.ts` and add a new object to the `projects` array:

\`\`\`typescript
{
  title: "Your Project Name",
  description: "Project description here...",
  tags: ["Next.js", "TypeScript", "etc"],
  liveUrl: "https://your-project.com",
  detailsUrl: "#",
  featured: false,
  gradient: "from-purple-500/20 to-blue-500/20"
}
\`\`\`

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
\`\`\`bash
cd nextjs-portfolio
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub

2. Go to [vercel.com](https://vercel.com) and sign in

3. Click "New Project" and import your repository

4. Vercel will auto-detect Next.js and configure everything

5. Click "Deploy"

Your site will be live in ~2 minutes!

### Environment Variables

Before deploying, update these in `lib/siteData.ts`:
- `siteUrl` - Your actual domain
- `email` - Your real email address
- Social links (GitHub, LinkedIn, etc.)

## 🎨 Customization

### Colors

Edit the color scheme in `app/globals.css`:
- `--primary` - Main accent color (currently purple)
- `--background` - Background color
- `--foreground` - Text color

### Fonts

Fonts are configured in `app/layout.tsx`:
- **Inter** - Body text
- **Space Grotesk** - Headings
- **JetBrains Mono** - Code/mono text

### Adding New Sections

1. Create a new component in `components/sections/`
2. Import and add it to `app/page.tsx`
3. Add navigation link in `lib/siteData.ts`

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Support

For issues or questions, please open an issue on GitHub.

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
