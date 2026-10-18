import {
  FaTelegramPlane,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
  FaSms,
  FaTruck,
  FaFileSignature,
  FaWarehouse,
  FaGlobe,
  FaTiktok,
  FaSearchDollar,
  FaCreditCard,
  FaRobot,
  FaCashRegister,
  FaCalculator,
} from "react-icons/fa";
import { SiGmail, SiGooglesheets, SiGoogleads } from "react-icons/si";

export type Integration = {
  slug: string;
  name: string;
  /** descriere scurtă, pentru grila de pe prima pagină */
  hint: string;
  /** descriere detaliată, pentru /integrari */
  details: string;
  examples: string[];
  /** „done” = folosită deja într-un proiect livrat; „on-demand” = o construim la cerere */
  status: "done" | "on-demand";
  icon: React.ReactNode;
  color: string;
};

export const integrations: Integration[] = [
  {
    slug: "telegram",
    name: "Telegram",
    hint: "notificări, remindere, boți pentru personal",
    details:
      "Telegram e cel mai rapid canal intern: echipa află imediat de un lead nou, o comandă sau un reminder, fără să stea în CRM toată ziua. Construim și boți dedicați pentru personal sau pentru clienți.",
    examples: [
      "Mesaj în grupul echipei la fiecare lead sau comandă nouă",
      "Remindere personale trimise managerului responsabil",
      "Boți interni pentru personal (rapoarte, căutare în bază, sarcini)",
    ],
    status: "done",
    icon: <FaTelegramPlane />,
    color: "#2aabee",
  },
  {
    slug: "meta",
    name: "Meta (Facebook)",
    hint: "leaduri Facebook și Instagram direct în Kanban",
    details:
      "Formularele de lead din reclamele Facebook și Instagram ajung direct în CRM, cu sursa campaniei, și sunt distribuite automat între manageri. Nimeni nu mai copiază manual din Ads Manager.",
    examples: [
      "Lead Ads → lead nou în CRM în câteva secunde",
      "Distribuție automată pe rând între manageri",
      "Evenimente Pixel / conversii pentru optimizarea reclamelor",
    ],
    status: "done",
    icon: <FaFacebookF />,
    color: "#1877f2",
  },
  {
    slug: "google-ads",
    name: "Google Ads & Analytics",
    hint: "GA4, Tag Manager, conversii pentru reclame",
    details:
      "Google Analytics 4 și Tag Manager configurate pe site, cu conversiile importante trimise în Google Ads, ca reclamele să fie optimizate pe cereri și vânzări reale.",
    examples: ["GA4 + Google Tag Manager", "Conversii din site trimise în Google Ads", "Rapoarte în Looker Studio"],
    status: "done",
    icon: <SiGoogleads />,
    color: "#4285f4",
  },
  {
    slug: "instagram",
    name: "Instagram",
    hint: "mesaje și formulare de lead",
    details:
      "Leadurile venite din Instagram (formulare, campanii) se adaugă la același pipeline ca restul, cu canalul marcat, ca să vezi exact ce aduce fiecare sursă.",
    examples: ["Canal separat pentru leadurile din Instagram", "Raportare pe sursă de trafic"],
    status: "done",
    icon: <FaInstagram />,
    color: "#e1306c",
  },
  {
    slug: "tiktok",
    name: "TikTok",
    hint: "pipeline și linie telefonică separate",
    details:
      "Vânzările din TikTok pot avea pipeline propriu și linie telefonică dedicată, cu apelurile direcționate automat către operatorul responsabil.",
    examples: ["Pipeline separat pentru TikTok", "Linie telefonică dedicată, legată de un operator"],
    status: "done",
    icon: <FaTiktok />,
    color: "#ff0050",
  },
  {
    slug: "telefonie",
    name: "Telefonie PBX",
    hint: "Orange, Moldcell — apeluri legate de lead, click-to-call",
    details:
      "Conectăm centrala telefonică virtuală (Orange, Moldcell) la CRM: fiecare apel se leagă automat de clientul potrivit, managerul vede cine sună înainte să răspundă și sună dintr-un click.",
    examples: [
      "Înregistrarea convorbirilor, ascultată din fișa clientului",
      "Card „sună acum” cu numele clientului și link spre lead",
      "Click-to-call din fișa clientului",
      "Listă de apeluri pierdute, ca să nu rămână niciun client fără răspuns",
      "Timp în apel, apeluri pierdute, refuzuri și conversie pe operator",
    ],
    status: "done",
    icon: <FaPhoneAlt />,
    color: "#ff7a00",
  },
  {
    slug: "sms",
    name: "SMS",
    hint: "mesaje trimise din CRM",
    details:
      "Trimiterea SMS-urilor direct din fișa clientului, cu istoric păstrat în cronologia leadului.",
    examples: ["SMS manual din fișa leadului", "Istoric SMS în cronologie"],
    status: "done",
    icon: <FaSms />,
    color: "#a66bff",
  },
  {
    slug: "curierat",
    name: "Curierat",
    hint: "AWB și statusul livrării verificat automat",
    details:
      "Verificăm automat, zilnic, statusul coletelor la curier și mutăm comanda în etapa corectă: livrată, returnată sau întârziată — cu reminder pentru manager acolo unde e nevoie.",
    examples: [
      "Import AWB în comenzi",
      "Livrat / retur detectat automat",
      "Reminder pentru livrările întârziate",
    ],
    status: "done",
    icon: <FaTruck />,
    color: "#ffc21a",
  },
  {
    slug: "site-magazin",
    name: "Site & magazin online",
    hint: "API securizat pentru comenzi și formulare",
    details:
      "Formularele de pe site, landingurile și comenzile din magazinul online intră direct în CRM printr-un API protejat (chei per sursă, limită de cereri, blocare la abuz).",
    examples: [
      "Preț, reducere și stoc trimise automat din ERP pe site",
      "Leaduri din landinguri cu canal separat per sursă",
      "Comenzi din magazin într-un pipeline propriu",
      "Protecție anti-spam și rate limiting",
    ],
    status: "done",
    icon: <FaGlobe />,
    color: "#22d3ee",
  },
  {
    slug: "erp",
    name: "ERP / stocuri",
    hint: "comenzi sincronizate cu depozitul",
    details:
      "CRM-ul și sistemul de depozit rămân separate, dar vorbesc între ele prin API: comanda confirmată pleacă la depozit, iar statusul și notele de livrare se întorc în CRM.",
    examples: ["Comenzi trimise automat în depozit", "Status și note de livrare înapoi în CRM"],
    status: "done",
    icon: <FaWarehouse />,
    color: "#3ee08f",
  },
  {
    slug: "pos",
    name: "POS magazin",
    hint: "vânzare în magazin din stocul real",
    details:
      "Punct de vânzare pentru magazinul fizic, legat direct de stocul din ERP: căutare după cod de bare sau poză, vânzarea scade stocul magazinului, istoric complet.",
    examples: ["Vânzare din stocul real al magazinului", "Căutare după cod de bare sau poză"],
    status: "done",
    icon: <FaCashRegister />,
    color: "#fb923c",
  },
  {
    slug: "documente",
    name: "Documente automate",
    hint: "contracte și acte DOCX / PDF",
    details:
      "Contractele, actele și ofertele se generează automat din datele clientului, în format Word și PDF, după șabloanele companiei.",
    examples: ["Contracte și acte generate dintr-un click", "Șabloane DOCX proprii ale companiei"],
    status: "done",
    icon: <FaFileSignature />,
    color: "#f472b6",
  },
  {
    slug: "extragere-date",
    name: "Extragere date",
    hint: "colectare automată de clienți potențiali",
    details:
      "Programe care colectează automat date publice (anunțuri, cataloage, portaluri) și le transformă în liste de clienți potențiali sau rapoarte.",
    examples: ["Colectare anunțuri de pe portaluri", "Automatizarea portalurilor fără API"],
    status: "done",
    icon: <FaSearchDollar />,
    color: "#facc15",
  },
  {
    slug: "plati",
    name: "Plăți online",
    hint: "plată la comandă sau pentru servicii",
    details:
      "Conectarea sistemelor de plată la site, cu confirmarea plății transmisă mai departe în CRM sau în Telegram.",
    examples: ["Plată online pentru servicii / cursuri", "Confirmare plată în CRM"],
    status: "done",
    icon: <FaCreditCard />,
    color: "#34d399",
  },
  {
    slug: "whatsapp",
    name: "WhatsApp",
    hint: "contact rapid din fișa clientului",
    details:
      "Deschiderea conversației WhatsApp direct din fișa clientului sau, prin WhatsApp Business API, mesaje automate de confirmare.",
    examples: ["Buton WhatsApp în fișa clientului", "Mesaje automate prin WhatsApp Business API"],
    status: "on-demand",
    icon: <FaWhatsapp />,
    color: "#25d366",
  },
  {
    slug: "gmail",
    name: "Gmail / email",
    hint: "emailuri, oferte și confirmări automate",
    details:
      "Trimiterea ofertelor și confirmărilor pe email din CRM, sau preluarea cererilor care vin pe email și transformarea lor automat în leaduri.",
    examples: ["Email automat la schimbarea etapei", "Cererile din inbox → leaduri în CRM"],
    status: "on-demand",
    icon: <SiGmail />,
    color: "#ea4335",
  },
  {
    slug: "google-sheets",
    name: "Google Sheets",
    hint: "rapoarte și exporturi sincronizate",
    details:
      "Rapoarte care se actualizează singure într-un tabel Google Sheets, pentru cei care preferă să lucreze în tabel, plus import de date din tabelele existente.",
    examples: ["Raport zilnic sincronizat automat", "Import din tabelele existente"],
    status: "on-demand",
    icon: <SiGooglesheets />,
    color: "#0f9d58",
  },
  {
    slug: "contabilitate",
    name: "Contabilitate & casă fiscală",
    hint: "export pentru contabil, casă de marcat fiscală",
    details:
      "Exportul documentelor din ERP în formatul cerut de contabil (inclusiv pentru 1C Contabilitate) și conectarea casei de marcat fiscale, în funcție de modelul folosit.",
    examples: ["Export documente pentru contabil", "Conectare casă de marcat fiscală"],
    status: "on-demand",
    icon: <FaCalculator />,
    color: "#94a3b8",
  },
  {
    slug: "ai",
    name: "AI & automatizări",
    hint: "analiza convorbirilor, rezumate, clasificare",
    details:
      "Modele AI integrate în procesele existente: clasificarea cererilor, rezumatul conversațiilor, extragerea datelor din documente sau răspunsuri propuse pentru manageri.",
    examples: [
      "Transcrierea și evaluarea calității convorbirilor",
      "Rezumat automat al apelului în fișa clientului",
      "Clasificare automată a cererilor",
      "Extragere date din documente",
    ],
    status: "on-demand",
    icon: <FaRobot />,
    color: "#818cf8",
  },
];

/** Selecția afișată pe prima pagină */
export const homeIntegrations = integrations.filter((i) =>
  [
    "telegram",
    "meta",
    "instagram",
    "tiktok",
    "whatsapp",
    "gmail",
    "google-sheets",
    "telefonie",
    "sms",
    "curierat",
    "site-magazin",
    "erp",
  ].includes(i.slug)
);
