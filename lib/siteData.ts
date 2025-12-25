// Site content - edit this to update your portfolio

// Hero section
export const hero = {
  badge: "Available for hire",
  title: "Full-Stack Developer",
  titleHighlight: "& SaaS Builder",
  description: "I build SaaS products end-to-end. UI, APIs, auth, billing, and deployment. I combine full-stack development with AI-assisted workflows so I can ship faster without losing control of the code.",
  primaryCTA: "View my projects",
  secondaryCTA: "Contact me",
};

// About section
export const about = {
  paragraphs: [
    "Hey, I'm Abdullah. I'm a developer who loves building real projects that solve practical problems. I don't just write code; I care about the end-user experience and shipping products that feel great to use.",
    "Whether it's a SaaS tool for developers or a clean landing page, I focus on performance, clean code, and modern design principles."
  ],
  facts: [
    { icon: "MapPin", text: "Based in Auckland, New Zealand" },
    { icon: "Code", text: "Breaking comfort zones one project at a time" },
    { icon: "User", text: "Enjoys gaming & building side projects" },
    { icon: "Cpu", text: "Playing with AI tools & LLMs" },
  ]
};

// Skills
export const skills = {
  Frontend: ["Next.js", "React", "TypeScript", "TailwindCSS", "Framer Motion"],
  Backend: ["Node.js", "PostgreSQL", "Prisma", "REST APIs", "Auth"],
  Tools: ["Vercel", "GitHub", "Stripe", "Neon", "Cursor", "Replit"],
};

// Projects
export const projects = [
  {
    title: "DBInsight",
    description: "AI-powered PostgreSQL schema explorer and documentation tool. Features schema diagrams, AI table summaries, and a local connector so you don't have to send your database to the cloud.",
    tags: ["Next.js", "AI", "PostgreSQL", "Tailwind"],
    liveUrl: "https://dbinsight.app",
    detailsUrl: "#",
    featured: true,
    gradient: "from-purple-500/20 to-blue-500/20"
  },
  {
    title: "E-commerce Frontend",
    description: "Modern storefront built with Next.js and Tailwind, focusing on clean UX, smooth animations, and optimized performance.",
    tags: ["React", "Stripe", "Framer Motion"],
    liveUrl: "https://luxe-store-lilac.vercel.app/",
    detailsUrl: "#",
    featured: false,
    gradient: "from-cyan-500/20 to-teal-500/20"
  },
  {
    title: "Booking Platform Frontend Redesign",
    description: "Freelance project redesigning the entire frontend for a booking platform. Modernized the UI/UX across the site including the calendar interface, scheduling system, and overall design.",
    tags: ["React", "UI/UX", "Freelance", "Redesign"],
    liveUrl: "https://www.youtube.com/watch?v=i2VuxZT8AOE",
    detailsUrl: "#",
    featured: false,
    gradient: "from-pink-500/20 to-rose-500/20"
  }
];

// Work experience
export const experience = [
  {
    role: "SaaS Builder",
    company: "DBInsight",
    period: "Present",
    description: "Designed, built, and shipped a full SaaS product. Handled Stripe billing integration, complex database schema visualization, and AI-powered documentation features."
  },
  {
    role: "Freelance Full-Stack Developer",
    company: "Self-Employed",
    period: "2025 - Present",
    description: "Building high-performance Next.js landing pages, custom dashboards, and e-commerce frontends for various clients. Focus on clean code and pixel-perfect implementation."
  },
  {
    role: "Software Tester",
    company: "AVGAR - TotalCoach",
    period: "2022 - 2024",
    description: "Performed testing for the TotalCoach app. Identified bugs, documented test cases, and ensured quality standards were met before deployment."
  }
];

// Contact info
export const contact = {
  heading: "Let's Connect",
  subheading: "Want to work together or have a project in mind? Reach out. I'm always open to discussing new opportunities and ideas.",
  email: "parpyfn@gmail.com",
  socialLinks: [
    {
      platform: "Email",
      icon: "Mail",
      url: "mailto:parpyfn@gmail.com",
      display: "parpyfn@gmail.com"
    },
    {
      platform: "GitHub",
      icon: "Github",
      url: "https://github.com/parpy69",
      display: "github.com/parpy69"
    },
    {
      platform: "LinkedIn",
      icon: "Linkedin",
      url: "https://www.linkedin.com/in/abdullah-khudeish-3a010923a/",
      display: "linkedin.com/in/abdullah-khudeish"
    }
  ]
};

// Navigation
export const navigation = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

// SEO metadata
export const siteMetadata = {
  title: "Abdullah Khudeish - Full-Stack Developer & SaaS Builder",
  description: "Portfolio of Abdullah Khudeish, a Full-Stack Developer & SaaS Builder. Building clean UIs, APIs & tools with Next.js, TypeScript, and modern web technologies.",
  author: "Abdullah Khudeish",
  siteUrl: "https://yoursite.com", // Update with your actual domain
  ogImage: "/opengraph.jpg", // Place your OG image in the public folder
};

// Footer
export const footer = {
  text: "Built with Next.js & Tailwind"
};

