import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import SiteNav from "./components/site-nav";
import Footer from "./components/footer";
import RevealObserver from "./components/reveal-observer";
import JsonLd from "./components/json-ld";
import { CONTACT, SITE_NAME, SITE_URL } from "./lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const description =
  "SVR Dev — dezvoltare website-uri și magazine online, CRM la comandă, ERP pentru retail (alternativă la 1C), integrări Telegram, Meta, telefonie și curierat, automatizări business și soft la cerere pentru companii din Moldova.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "SVR Dev – Dezvoltare Web, CRM la comandă & Automatizări Business",
    template: "%s | SVR Dev",
  },
  description,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  keywords: [
    "CRM la comandă",
    "ERP retail",
    "alternativă 1C",
    "program gestiune stocuri",
    "CRM personalizat Moldova",
    "dezvoltare web Chișinău",
    "creare site Moldova",
    "magazin online",
    "integrare Telegram",
    "bot Telegram",
    "automatizare business",
    "soft la comandă",
    "integrare Meta Lead Ads",
    "telefonie CRM",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "SVR Dev – Dezvoltare Web, CRM la comandă & Automatizări Business",
    description,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "ro_MD",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SVR Dev – Dezvoltare Web, CRM la comandă & Automatizări Business",
    description,
  },
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
  // Codul din Google Search Console → variabila de mediu GOOGLE_SITE_VERIFICATION la build
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined,
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
};

const organization = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  description,
  url: SITE_URL,
  logo: `${SITE_URL}/icon.png`,
  image: `${SITE_URL}/opengraph-image.png`,
  email: CONTACT.email,
  telephone: CONTACT.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Chișinău",
    addressCountry: "MD",
  },
  areaServed: { "@type": "Country", name: "Moldova" },
  sameAs: [CONTACT.telegram],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    telephone: CONTACT.phone,
    email: CONTACT.email,
    url: CONTACT.telegram,
    availableLanguage: ["ro", "ru"],
  },
  knowsAbout: [
    "Web Development",
    "Custom CRM Development",
    "Retail ERP",
    "Inventory Management",
    "Business Automation",
    "System Integration",
    "Telegram Bots",
    "SEO",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" className={geistSans.variable} suppressHydrationWarning>
      <head>
        {/* Animațiile de apariție se activează doar cu JS — fără JS, tot conținutul e vizibil */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className="antialiased">
        <JsonLd data={organization} />
        <SiteNav />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <RevealObserver />
      </body>
    </html>
  );
}
