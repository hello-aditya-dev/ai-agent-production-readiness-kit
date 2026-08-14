import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { SITE, absoluteUrl, OG_IMAGE, THEME_COLOR, THEME_COLOR_LIGHT } from "@/lib/site-config";
import { PRODUCT_LINKS, hasLink } from "@/lib/product-links";

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

const canonical = absoluteUrl("/");

/**
 * JSON-LD structured data.
 * Product (Agency Edition, flagship) + a secondary Offer for Standard.
 * No fake reviews, ratings, or SKUs.
 */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": canonical + "#website",
      url: canonical,
      name: SITE.fullName,
      description: SITE.description,
      publisher: { "@id": canonical + "#product" },
    },
    {
      "@type": "WebPage",
      "@id": canonical + "#webpage",
      url: canonical,
      name: "AI Agent Production Readiness Kit — Agency Edition",
      isPartOf: { "@id": canonical + "#website" },
      about: { "@id": canonical + "#product" },
      inLanguage: "en",
    },
    {
      "@type": "Product",
      "@id": canonical + "#product",
      name: "AI Agent Production Readiness Kit",
      description: SITE.description,
      category: "AI agent evaluation",
      brand: { "@type": "Brand", name: SITE.name },
      offers: [
        {
          "@type": "Offer",
          name: "Agency Edition",
          description:
            "Client-ready production-readiness evaluation system for AI agencies. Includes client discovery, project register, client readiness dashboard, client report, review presentation, agency workflow and failure-cost calculator, with client-engagement usage rights per the included license.",
          price: "299.00",
          priceCurrency: "USD",
          priceValidUntil: "2026-12-31",
          availability: "https://schema.org/InStock",
          url: hasLink("agency") ? PRODUCT_LINKS.agency : canonical + "#editions",
        },
        {
          "@type": "Offer",
          name: "Standard Edition",
          description:
            "Production-readiness evaluation system for teams evaluating their own AI agents. Includes the reusable test library, failure taxonomy, grounding, tool/recovery/escalation testing, adversarial tests, cost analysis, regression tracking, incident tracking, monitoring templates, the production release gate and the completed fictional demonstration.",
          price: "149.00",
          priceCurrency: "USD",
          priceValidUntil: "2026-12-31",
          availability: "https://schema.org/InStock",
          url: hasLink("standard") ? PRODUCT_LINKS.standard : canonical + "#editions",
        },
      ],
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(canonical),
  title: "AI Agent Production Readiness Kit | Agency Evaluation System",
  description:
    "A client-ready production-readiness evaluation system for AI agencies. Test agent tool use, grounding, recovery, escalation, adversarial behavior, cost and regression, then turn the evidence into a client-facing release review.",
  applicationName: SITE.name,
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  keywords: [
    ...SITE.supportingTopics,
    SITE.primaryTopic,
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  publisher: SITE.name,
  alternates: {
    canonical: "/",
  },
  formatDetection: { email: false, address: false, telephone: false },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/brand/mark.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: canonical,
    siteName: SITE.name,
    title: "AI Agent Production Readiness Kit — Agency Edition",
    description:
      "Find agent failures before your client does. A client-ready evaluation system for AI agencies — test tool use, grounding, recovery, escalation, cost and regression, then deliver a client-facing release review.",
    images: [
      {
        url: OG_IMAGE.src,
        width: OG_IMAGE.width,
        height: OG_IMAGE.height,
        alt: OG_IMAGE.alt,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Agent Production Readiness Kit — Agency Edition",
    description:
      "Find agent failures before your client does. Client-ready agent testing, evidence and release review for AI agencies.",
    images: [OG_IMAGE.src],
  },
  verification: {},
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: THEME_COLOR_LIGHT },
    { media: "(prefers-color-scheme: dark)", color: THEME_COLOR },
  ],
  colorScheme: "light dark",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
