export const SITE_URL = "https://svrdev.fun";
export const SITE_NAME = "SVR Dev";

export const CONTACT = {
  email: "andreisv178@gmail.com",
  phone: "+37369742690",
  phoneDisplay: "+373 69 742 690",
  telegram: "https://t.me/Andreisvr",
  whatsapp: "https://wa.me/37369742690",
};

export const NAV = [
  { href: "/#proiecte", label: "Proiecte" },
  { href: "/crm-la-comanda", label: "CRM la comandă" },
  { href: "/erp-retail", label: "ERP retail" },
  { href: "/targeting", label: "Targeting" },
  { href: "/integrari", label: "Integrări" },
  { href: "/cum-lucram", label: "Cum lucrăm" },
];

/** Paginile publice — folosite de sitemap și llms.txt */
export const PAGES = [
  {
    path: "/",
    title: "SVR Dev — dezvoltare web, CRM la comandă și automatizări business",
    summary:
      "Pagina principală: servicii, portofoliu de proiecte realizate (site-uri, magazine online, CRM-uri) și contact.",
  },
  {
    path: "/crm-la-comanda",
    title: "CRM la comandă pentru companii",
    summary:
      "CRM construit pe procesele companiei: Kanban, remindere, telefonie cu înregistrarea convorbirilor și metrici pentru operatori (timp în apel, refuzuri, conversie, calitate), documente automate, roluri, analiză, migrare din amoCRM/Excel.",
  },
  {
    path: "/erp-retail",
    title: "ERP pentru retail — alternativă la 1C",
    summary:
      "ERP pentru magazine: depozite multiple, stocuri în timp real, documente de stoc, cost real FIFO și marjă, POS, scanner pe telefon, livrări, sincronizare automată cu site-ul, CRM-ul și curierii.",
  },
  {
    path: "/targeting",
    title: "Targeting Meta, Google Ads și YouTube",
    summary:
      "Targeting complet pe Meta (Facebook, Instagram), Google Ads (Search, Performance Max, Display), YouTube; GA4, Tag Manager, Pixel și Conversions API; reclame conectate la CRM, ERP sau site-ul existent.",
  },
  {
    path: "/integrari",
    title: "Integrări între sisteme",
    summary:
      "Telegram, Meta (Facebook/Instagram), telefonie PBX, SMS, Gmail, Google Sheets, curierat, site/magazin, ERP și orice serviciu cu API.",
  },
  {
    path: "/cum-lucram",
    title: "Cum lucrăm",
    summary:
      "Procesul de lucru de la primul mesaj pe Telegram până la lansare și suport: analiză, propunere, prototip, dezvoltare pe etape.",
  },
];

export const absoluteUrl = (path: string) =>
  path === "/" ? SITE_URL : `${SITE_URL}${path}`;
