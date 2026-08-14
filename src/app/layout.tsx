import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { SITE_URL } from "@/lib/product-links";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

/**
 * SEO metadata.
 * `metadataBase` resolves to SITE_URL when configured (production),
 * otherwise falls back to localhost so OG/Twitter URLs still resolve in dev.
 * Do not hard-code a fake deployed domain — set SITE_URL in product-links.ts
 * once the real domain is known.
 */
export const metadata: Metadata = {
  metadataBase: SITE_URL ? new URL(SITE_URL) : new URL("http://localhost:3000"),
  title: "AI Agent Production Readiness Kit | Test Before Production",
  description:
    "A structured evaluation system for testing AI agent reliability, tool use, grounding, recovery, escalation, cost, regression and release readiness.",
  keywords: [
    "AI agent testing",
    "agent production readiness",
    "agent evaluation",
    "agent reliability",
    "tool use testing",
    "grounding evaluation",
    "agent regression testing",
    "release gate",
  ],
  authors: [{ name: "Readiness Kit" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "AI Agent Production Readiness Kit",
    description:
      "Find the failures your AI agent demo does not show. A structured evaluation system for AI agent reliability, recovery, escalation, cost, regression and release readiness.",
    siteName: "AI Agent Production Readiness Kit",
    type: "website",
    images: [
      {
        url: "/og/og-image.svg",
        width: 1200,
        height: 630,
        alt: "AI Agent Production Readiness Kit — find the failures your demo does not show",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Agent Production Readiness Kit",
    description:
      "Find the failures your AI agent demo does not show. Test tool use, grounding, recovery, escalation, cost, regression and release readiness before production.",
    images: ["/og/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/brand/mark.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
