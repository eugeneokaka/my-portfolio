import type { IconName } from "@/components/icons";

export const site = {
  name: "Eugene Okaka",
  shortName: "Eugene",
  role: "Full-Stack & Cloud Engineer",
  url: "https://eugenecode.online",
  email: "eugeneokaka@gmail.com",
  phone: "+254790486537",
  location: "Nairobi, Kenya",
  description:
    "I build end-to-end products, taking ideas from concept to production, from backend architecture and APIs to frontend experiences, databases, and cloud infrastructure.",
  github: "https://github.com/eugeneokaka",
  linkedin: "https://www.linkedin.com/in/eugene-okaka-06174a312/",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const highlights: {
  icon: IconName;
  title: string;
  copy: string;
}[] = [
  {
    icon: "server",
    title: "Full-Stack Development",
    copy: "APIs, auth & business logic",
  },
  {
    icon: "cloud",
    title: "Cloud Engineering",
    copy: "AWS, Docker & Linux foundations",
  },
  {
    icon: "sparkles",
    title: "Open to Work",
    copy: "Software engineering & freelance",
  },
];

export const facts = [
  { label: "Education", value: "Diploma in IT — Kabarak University" },
  { label: "Focus", value: "Backend development & AWS cloud" },
  { label: "Based in", value: "Kenya" },
  { label: "Availability", value: "Open to opportunities" },
];

export const skillBars: { icon: IconName; label: string; caption: string }[] = [
  {
    icon: "server",
    label: "Backend Development",
    caption: "Node.js · NestJS · Express · REST APIs",
  },
  {
    icon: "layout",
    label: "Frontend Development",
    caption: "Next.js · React · TypeScript · Tailwind CSS",
  },
  {
    icon: "cloud",
    label: "Cloud & DevOps",
    caption: "AWS · Docker · Nginx · PM2",
  },
  {
    icon: "database",
    label: "Databases & Auth",
    caption: "PostgreSQL · Drizzle · Prisma · Better Auth",
  },
];

export const services: {
  icon: IconName;
  title: string;
  copy: string;
}[] = [
  {
    icon: "server",
    title: "Backend Development",
    copy: "REST APIs, authentication and business logic built with Node.js, NestJS and Express.",
  },
  {
    icon: "cloud",
    title: "Cloud & DevOps",
    copy: "Deploying and running applications on AWS with EC2, S3, IAM, Docker and Nginx.",
  },
  {
    icon: "layout",
    title: "Frontend & UI",
    copy: "Fast, responsive interfaces built with Next.js, React, TypeScript and Tailwind CSS.",
  },
  {
    icon: "database",
    title: "Databases & Auth",
    copy: "Relational data modelling with PostgreSQL, Drizzle, Prisma and secure auth flows.",
  },
];

export const stack: { group: string; items: string[] }[] = [
  {
    group: "Backend",
    items: ["Node.js", "NestJS", "Express.js", "REST APIs"],
  },
  {
    group: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    group: "Databases",
    items: ["PostgreSQL", "Neon", "Drizzle ORM", "Prisma"],
  },
  {
    group: "Cloud & DevOps",
    items: [
      "AWS EC2",
      "S3",
      "IAM",
      "VPC",
      "SQS",
      "CloudFront",
      "Docker",
      "Nginx",
      "PM2",
    ],
  },
  {
    group: "Authentication",
    items: ["Better Auth", "JWT", "Google OAuth"],
  },
  {
    group: "Tools",
    items: ["Git", "GitHub", "Linux", "Postman"],
  },
];

export const projects = [
  {
    title: "Ploody",
    tag: "Notes & Knowledge",
    copy: "A feature-rich notes application for organizing and retrieving information, with a rich-text editor, AI-powered document search using RAG, full-text search, and real-time collaboration.",
    tech: [
      "Next.js",
      "PostgreSQL",
      "Drizzle ORM",
      "Better Auth",
      "Ably",
      "Groq",
      "Cohere",
    ],
    image: "/ploody.png",
    url: "https://ploody.eugenecode.online/",
  },
  {
    title: "CloudStuff",
    tag: "Secure Storage",
    copy: "A cloud-based document storage solution for uploading and accessing documents securely, built around AWS infrastructure with controlled storage access and cloud-hosted delivery.",
    tech: ["AWS S3", "EC2", "IAM", "Next.js", "HTML", "AWS Cloud"],
    image: "/cloudstuff.png",
    url: "https://cloudstuf.eugenecode.online/",
  },
  {
    title: "M-Pesa Statement Analyzer",
    tag: "Fintech Tool",
    copy: "A tool that processes uploaded M-Pesa transaction statements and turns transaction data into useful financial insights.",
    tech: [
      "Next.js",
      "Python",
      "FastAPI",
      "Pandas",
      "pdfplumber",
      "AWS Lambda",
    ],
    image: "/mpesa.png",
    url: "https://mpesa.eugenecode.online/",
  },
];

export const experience = [
  {
    period: "Industry experience",
    title: "Software Developer",
    org: "Graywall Design Ltd",
    copy: "Worked at Graywall Design Ltd, a Kenyan-based technology company providing custom web development, mobile app development, and digital solutions for businesses. The company helps organisations build modern, user-friendly software to support their growth.",
    icon: "work" as const,
  },
  {
    period: "Expected December 2026",
    title: "Diploma in Information Technology",
    org: "Kabarak University",
    copy: "Currently pursuing a Diploma in Information Technology, building a strong foundation in software development, systems and infrastructure.",
    icon: "education" as const,
  },
  {
    period: "Industry experience",
    title: "Institutional IT Experience",
    org: "Kenya Airports Authority (JKIA)",
    copy: "Worked within a live institutional IT environment, supporting day-to-day operations and gaining hands-on exposure to enterprise systems and infrastructure.",
    icon: "work" as const,
  },
  {
    period: "Industry experience",
    title: "Institutional IT Experience",
    org: "Aljamea-tus-Saifiyah, Nairobi",
    copy: "Collaborated in an institutional IT setting, strengthening troubleshooting, systems and user-support skills while learning how real teams operate.",
    icon: "work" as const,
  },
];
