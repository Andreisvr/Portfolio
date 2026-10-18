import Hero from "./components/hero";
import JsonLd from "./components/json-ld";
import { SITE_NAME, SITE_URL } from "./lib/site";

const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_NAME,
  url: SITE_URL,
  inLanguage: "ro",
  publisher: { "@id": `${SITE_URL}/#organization` },
};

const services = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: "Servicii SVR Dev",
  itemListElement: [
    "CRM la comandă",
    "ERP pentru retail — depozite, stocuri, POS, alternativă la 1C",
    "Integrări între sisteme (Telegram, Meta, telefonie, curierat, ERP)",
    "Dezvoltare website-uri și magazine online",
    "Automatizări procese business și soft la cerere",
    "Boți Telegram și sisteme interne pentru personal",
    "Targeting Meta, Google Ads și YouTube, tracking GA4 și Conversions API",
    "SEO și promovare pe Google și Meta",
  ].map((name) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name, provider: { "@id": `${SITE_URL}/#organization` } },
  })),
};

export default function Home() {
  return (
    <>
      <JsonLd data={website} />
      <JsonLd data={services} />
      <Hero />
    </>
  );
}
