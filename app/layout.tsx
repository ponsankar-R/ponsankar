import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Replace this with your actual domain once deployed (e.g., https://ponsankar.dev or https://ponsankar.vercel.app)
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ponsankar.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ponsankar R | MERN Stack Developer & AI Engineer | VSB Engineering College",
    template: "%s | Ponsankar R",
  },
  description:
    "Official portfolio of Ponsankar R (ponsakar), a MERN Stack Developer, Web Developer, and AI Engineer studying at VSB Engineering College (VSB). Explore software projects, full-stack web applications, and AI integrations.",
  keywords: [
    "Ponsankar",
    "ponsakar",
    "Ponsankar R",
    "ponsankar r",
    "VSB Engineering College",
    "VSB",
    "student in vsb",
    "MERN stack developer",
    "web developer",
    "AI engineer",
    "developer",
    "Full Stack Developer Portfolio",
    "Software Engineer India",
  ],
  authors: [{ name: "Ponsankar R" }],
  creator: "Ponsankar R",
  publisher: "Ponsankar R",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Ponsankar R | MERN Stack Developer & AI Engineer",
    description:
      "Portfolio of Ponsankar R, student at VSB Engineering College specializing in MERN Stack Development, Web Development, and AI Engineering.",
    siteName: "Ponsankar R Portfolio",
    images: [
      {
        url: "/images/og-image.png", // Put a preview screenshot of your portfolio at public/images/og-image.png
        width: 1200,
        height: 630,
        alt: "Ponsankar R - Portfolio Preview",
      },
    ],
  },
  verification: {
    google: "google94437337e3645343", 
  },
  twitter: {
    card: "summary_large_image",
    title: "Ponsankar R | MERN Stack Developer & AI Engineer",
    description:
      "Portfolio of Ponsankar R - MERN Stack Developer, Web Developer, and AI Engineer from VSB Engineering College.",
    images: ["/images/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

// JSON-LD Structured Data for Google Rich Snippets
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ponsankar R",
  alternateName: ["Ponsankar", "ponsakar", "Ponsankar R VSB"],
  url: siteUrl,
  jobTitle: ["MERN Stack Developer", "AI Engineer", "Web Developer"],
  worksFor: {
    "@type": "EducationalOrganization",
    name: "VSB Engineering College",
    alternateName: "VSB",
  },
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "VSB Engineering College",
    alternateName: "VSB",
  },
  sameAs: [
    // Add your social links here to strengthen your Google Knowledge Panel
    "https://github.com/ponsankar", 
    "https://linkedin.com/in/ponsankar",
  ],
  knowsAbout: [
    "MERN Stack",
    "Web Development",
    "React",
    "Node.js",
    "MongoDB",
    "Express.js",
    "Artificial Intelligence",
    "Next.js",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}