import type { MetadataRoute } from "next";
import { PAGES, absoluteUrl } from "./lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.map((p) => ({
    url: absoluteUrl(p.path),
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: p.path === "/" ? 1 : 0.8,
  }));
}
