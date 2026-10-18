import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "SVR Dev — Dezvoltare Web, CRM & Automatizări",
    short_name: "SVR Dev",
    description: "Website-uri, CRM la comandă, integrări și automatizări business în Moldova.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    lang: "ro",
    icons: [{ src: "/icon.png", sizes: "512x512", type: "image/png" }],
  };
}
