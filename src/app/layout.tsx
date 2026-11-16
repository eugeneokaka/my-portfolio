import type { Metadata, Viewport } from "next";
import { Caveat, Inter, Sora } from "next/font/google";
import { site } from "@/lib/content";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

const title = "Eugene Okaka | NestJS Backend & AWS Cloud Engineer";
const description =
  "Eugene Okaka is a NestJS backend and AWS cloud engineer in Kenya, building scalable APIs, PostgreSQL systems, and full-stack products with Next.js and TypeScript.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: title,
    template: "%s | Eugene Okaka",
  },
  description,
  applicationName: "Eugene Okaka Portfolio",
  authors: [{ name: "Eugene Okaka", url: site.url }],
  creator: "Eugene Okaka",
  publisher: "Eugene Okaka",
  category: "technology",
  keywords: [
    "Eugene Okaka",
    "NestJS backend engineer",
    "NestJS developer",
    "NestJS backend developer Kenya",
    "NestJS Kenya",
    "AWS cloud engineer",
    "AWS cloud engineer Kenya",
    "cloud engineer Nairobi",
    "Node.js backend developer",
    "backend engineer Kenya",
    "backend developer Nairobi",
    "Next.js developer",
    "TypeScript developer",
    "PostgreSQL developer",
    "full-stack developer Kenya",
    "software engineer Kenya",
    "REST API developer",
    "Docker",
    "Linux",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: site.name,
    title,
    description,
    images: [
      {
        url: `${site.url}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Eugene Okaka, NestJS backend and AWS cloud engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [`${site.url}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffc83d",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${inter.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
