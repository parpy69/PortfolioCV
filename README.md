# Portfolio

My personal portfolio built with Next.js, TypeScript, and Tailwind.

## Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Dark theme with purple/cyan accents

## Structure

```
├── app/                     # Next.js app directory
├── components/              # React components
│   ├── sections/            # Page sections
│   └── ui/                  # Reusable UI components
├── lib/
│   └── siteData.ts          # Edit this to change content
└── public/                  # Images and static files
```

## Editing Content

Everything's in `lib/siteData.ts` - projects, skills, experience, contact info, etc.

To add a project, just add an object to the array:

\`\`\`typescript
{
  title: "Project Name",
  description: "What it does",
  tags: ["Next.js", "TypeScript"],
  liveUrl: "https://...",
  detailsUrl: "#",
  featured: false,
  gradient: "from-purple-500/20 to-blue-500/20"
}
\`\`\`

## Running Locally

\`\`\`bash
npm install
npm run dev
\`\`\`

Open http://localhost:3000

## Deploying

Push to GitHub, then import to Vercel. It'll auto-detect Next.js and deploy.

Update `siteUrl` in `lib/siteData.ts` after deploying.

## Customizing

Colors are in `app/globals.css` (look for `--primary`, `--background`, etc.)

Fonts are loaded in `app/layout.tsx`
