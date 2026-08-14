import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site-config";

/**
 * Next.js sitemap route → /sitemap.xml
 * Includes the canonical homepage. Add future routes here if genuinely
 * indexable routes are introduced. Dates are honest, not fabricated.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: absoluteUrl("/"),
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
