import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site-config";

/**
 * Next.js robots route → /robots.txt
 * Single authoritative implementation. The static /public/robots.txt was
 * removed to avoid a duplicate conflicting implementation.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
    host: absoluteUrl("/"),
  };
}
