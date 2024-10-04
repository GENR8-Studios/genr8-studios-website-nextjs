import type { Metadata } from "next";
import type { Viewport } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "GENR8 Studios | Animation & Game Development",
    template: "%s | GENR8 Studios",
  },
  description:
    "GENR8 Studios is a cutting-edge game development and animation company dedicated to creating immersive and innovative experiences that captivate people around the world.",
  keywords:
    "GENR8, Video Game, Game Development, 3D Render, Animation, UI Design, Rendering, Digital, Advertisement, Architectural, Visualization, Virtual, Renders, Graphics, Media",
  authors: [
    { name: "Khamisi Lawrence", url: "https://github.com/khamisilawrence" },
  ],
  openGraph: {
    type: "website",
    url: "https://genr8studios.com",
    title: "GENR8 Studios",
    description:
      "GENR8 Studios is a cutting-edge game development and animation company dedicated to creating immersive and innovative experiences that captivate people around the world.",
    siteName: "GENR8 Studios",
  },
  referrer: "origin-when-cross-origin",
  creator: "GENR8 Studios",
  generator: "Next.js",
  applicationName: "Next.js",
  publisher: "Vercel",
  formatDetection: {
    email: true,
    address: false,
    telephone: true,
    date: true,
    url: true,
  },
  manifest: "",
  robots: {
    index: true,
    follow: true,
    noarchive: false,
    nosnippet: false,
    nocache: true,
    notranslate: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  category: "Game Development",
};

export const viewport: Viewport = {
  themeColor: "#FF5405",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
