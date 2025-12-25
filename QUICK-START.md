# Quick Start

## Run it

```bash
npm install
npm run dev
```

Go to http://localhost:3000

## Change content

Edit `lib/siteData.ts` - that's where all the text, projects, skills, etc. live.

## Add a project

Open `lib/siteData.ts`, find the `projects` array, add:

```typescript
{
  title: "My App",
  description: "What it does",
  tags: ["Next.js", "TypeScript"],
  liveUrl: "https://...",
  detailsUrl: "#",
  featured: false,
  gradient: "from-purple-500/20 to-blue-500/20"
}
```

Save. Done.

## Deploy

1. Push to GitHub
2. Go to vercel.com
3. Import your repo
4. Click deploy

That's it.
