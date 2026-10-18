import type { Metadata } from "next";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaShoppingBag,
  FaSearch,
  FaBullseye,
  FaPenNib,
  FaChartLine,
  FaSlidersH,
  FaFileAlt,
  FaCheck,
  FaArrowRight,
  FaKey,
  FaFilter,
} from "react-icons/fa";
import {
  SiMeta,
  SiGoogleads,
  SiYoutube,
  SiGoogleanalytics,
  SiGoogletagmanager,
  SiGooglesearchconsole,
  SiLooker,
  SiGooglemaps,
  SiGoogledisplayandvideo360,
} from "react-icons/si";
import PageHero from "../components/page-hero";
import PageBackdrop from "../components/page-backdrop";
import Faq, { type FaqItem } from "../components/faq";
import ContactCta from "../components/contact-cta";
import JsonLd from "../components/json-ld";
import { SITE_URL, absoluteUrl } from "../lib/site";

const PATH = "/targeting";
const description =
  "Targeting și publicitate pe Meta (Facebook, Instagram), Google Ads, YouTube și Performance Max pentru companii din Moldova. Tracking complet cu GA4, Google Tag Manager, Pixel și Conversions API, conectat la CRM-ul, ERP-ul sau site-ul vostru.";

export const metadata: Metadata = {
  title: "Targeting Meta, Google Ads și YouTube — publicitate conectată la vânzări",
  description,
  alternates: { canonical: PATH },
  openGraph: { title: "Targeting Meta, Google & YouTube | SVR Dev", description, url: absoluteUrl(PATH) },
  keywords: [
    "targeting Moldova",
    "reclamă Facebook Moldova",
    "Google Ads Moldova",
    "publicitate YouTube",
    "setare Meta Ads",
    "specialist targeting Chișinău",
    "Performance Max",
  ],
};

const platforms = [
  { icon: <SiMeta />, name: "Meta Ads", text: "Facebook și Instagram: lead ads, mesaje, trafic, vânzări, remarketing.", color: "#1877f2" },
  { icon: <FaInstagram />, name: "Instagram", text: "Stories, Reels și feed, cu audiențe pe interese și lookalike.", color: "#e1306c" },
  { icon: <SiGoogleads />, name: "Google Search", text: "Reclame pe căutări, cu cuvinte-cheie alese pe intenția de cumpărare.", color: "#4285f4" },
  { icon: <SiYoutube />, name: "YouTube Ads", text: "Video in-stream, Shorts și campanii de awareness sau conversii.", color: "#ff0000" },
  { icon: <FaShoppingBag />, name: "Performance Max & Shopping", text: "Campanii automate pe toată rețeaua Google, cu catalog de produse.", color: "#fbbc04" },
  { icon: <SiGoogledisplayandvideo360 />, name: "Display & Demand Gen", text: "Bannere și remarketing vizual pe site-uri, Gmail și Discover.", color: "#34a853" },
  { icon: <SiGooglemaps />, name: "Google Maps & Business", text: "Profil de companie optimizat, recenzii și apariție în căutările locale.", color: "#ea4335" },
  { icon: <SiGoogleanalytics />, name: "Google Analytics 4", text: "Evenimente, conversii și pâlnia de vânzare măsurate corect.", color: "#f9ab00" },
  { icon: <SiGoogletagmanager />, name: "Google Tag Manager", text: "Toate tagurile — Pixel, GA4, Ads — într-un singur loc, fără cod nou pe site.", color: "#8ab4f8" },
  { icon: <SiGooglesearchconsole />, name: "Search Console & SEO", text: "Indexare, erori tehnice și cuvintele pe care vă găsesc clienții.", color: "#22d3ee" },
  { icon: <SiLooker />, name: "Looker Studio", text: "Rapoarte vizuale cu cheltuieli, leaduri și vânzări, actualizate singure.", color: "#a78bfa" },
  { icon: <FaFacebookF />, name: "Pixel & Conversions API", text: "Evenimente din site și de pe server, ca Meta să optimizeze pe vânzări reale.", color: "#60a5fa" },
];

const process = [
  { icon: <FaSearch />, title: "Audit", text: "Analizăm conturile, campaniile, site-ul și tracking-ul existent — ce funcționează și unde se pierd bani." },
  { icon: <FaBullseye />, title: "Strategie & audiențe", text: "Alegem platformele, obiectivele, audiențele și împărțirea bugetului după ce vindeți și cui." },
  { icon: <FaPenNib />, title: "Campanii & texte", text: "Structura campaniilor, cuvinte-cheie, texte și indicații pentru creative, în română și rusă." },
  { icon: <FaChartLine />, title: "Tracking & conversii", text: "GA4, Tag Manager, Pixel și Conversions API configurate, ca fiecare lead și vânzare să fie numărate." },
  { icon: <FaSlidersH />, title: "Optimizare continuă", text: "Ajustăm bugetele, audiențele, cuvintele negative și creativele pe baza datelor, nu a impresiilor." },
  { icon: <FaFileAlt />, title: "Raportare clară", text: "Cât ați cheltuit, câte leaduri și vânzări ați primit și cât a costat fiecare." },
];

const connected = [
  {
    title: "Pe softul nostru",
    lead: "Când CRM-ul sau ERP-ul e construit de noi, reclama și vânzarea sunt în același sistem.",
    points: [
      "Leadurile din Facebook și Instagram intră direct în CRM, cu sursa și campania",
      "Vedeți câte vânzări reale a adus fiecare campanie, nu doar câte click-uri",
      "Calitatea leadului din CRM se poate trimite înapoi în Meta și Google, ca algoritmul să caute clienți asemănători",
      "Catalogul de produse pentru reclame se poate genera din ERP, cu prețul și stocul actual",
    ],
    accent: "#3ee08f",
  },
  {
    title: "Pe softul vostru existent",
    lead: "Lucrăm și cu site-ul, magazinul online sau CRM-ul pe care le aveți deja.",
    points: [
      "Pixel, Conversions API, GA4 și Tag Manager instalate pe site-ul existent",
      "Evenimentele importante (cerere, apel, comandă) măsurate corect",
      "Parametrii de campanie (UTM) păstrați până în CRM-ul vostru",
      "Rapoarte care unesc cheltuiala din reclame cu rezultatele din vânzări",
    ],
    accent: "#2f8bff",
  },
];

const metrics = [
  "Cost per lead",
  "Cost per vânzare",
  "ROAS — venit la 1 leu cheltuit",
  "Rata de conversie a site-ului",
  "Calitatea leadurilor (din CRM)",
  "CTR și costul pe click",
];

const faq: FaqItem[] = [
  {
    q: "Pe ce platforme faceți targeting?",
    a: "Meta (Facebook și Instagram), Google Ads — căutare, Performance Max, Display, Demand Gen — și YouTube. Configurăm și sistemele conexe Google: Analytics 4, Tag Manager, Search Console, Merchant Center, profilul de companie pe Maps și rapoartele în Looker Studio.",
  },
  {
    q: "Ce experiență aveți în targeting?",
    a: "Rulăm campanii pentru multe companii, pe toate platformele importante, iar campaniile noastre au adus deja clienților vânzări de zeci de milioane de lei. Din respect pentru clienți, nu publicăm numele lor și nici cifrele exacte.",
  },
  {
    q: "Ce buget minim e nevoie?",
    a: "Depinde de nișă, de concurență și de obiectiv. După audit vă propunem un buget de pornire realist și cum se împarte între platforme, iar apoi îl ajustăm pe baza rezultatelor.",
  },
  {
    q: "Conturile de publicitate rămân ale noastre?",
    a: "Da. Lucrăm în conturile companiei, cu acces acordat nouă. Campaniile, audiențele și datele acumulate rămân ale voastre.",
  },
  {
    q: "Puteți conecta reclamele la CRM-ul nostru actual?",
    a: "De obicei, da. Dacă CRM-ul are API sau poate primi date din formulare, leadurile din reclame ajung direct în el, cu sursa campaniei. Dacă nu, putem lega reclamele de un CRM la comandă.",
  },
  {
    q: "De ce contează tracking-ul atât de mult?",
    a: "Pentru că Meta și Google optimizează exact pe ce le spunem că e o conversie. Dacă tracking-ul numără doar click-uri sau formulare goale, algoritmul aduce mai multe click-uri. Cu vânzări reale măsurate, aduce mai mulți cumpărători.",
  },
];

export default function TargetingPage() {
  return (
    <div className="page">
      <PageBackdrop variant="ads" />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Targeting Meta, Google Ads și YouTube",
          serviceType: "Online Advertising Management",
          description,
          url: absoluteUrl(PATH),
          areaServed: { "@type": "Country", name: "Moldova" },
          provider: { "@id": `${SITE_URL}/#organization` },
        }}
      />

      <PageHero
        path={PATH}
        crumb="Targeting"
        kicker="Targeting · Meta · Google · YouTube"
        title="Reclame care aduc"
        accent="vânzări, nu doar click-uri"
        lead="Facem targeting complet pe Meta, Google și YouTube pentru multe companii, de la strategie și campanii până la tracking și rapoarte. Diferența noastră: putem lega reclamele direct de CRM, ERP sau site, ca să vedeți ce campanie aduce bani."
      />

      <section className="page-section ads-proof" aria-label="Experiență" data-reveal>
        <div>
          <strong>Zeci de milioane de lei</strong>
          <span>vânzări aduse clienților prin campaniile noastre</span>
        </div>
        <div>
          <strong>Multe companii</strong>
          <span>din domenii diferite, de la retail la servicii</span>
        </div>
        <div>
          <strong>Toate platformele</strong>
          <span>Meta, Google, YouTube și sistemele conexe Google</span>
        </div>
      </section>

      <section className="page-section" aria-labelledby="plat-title">
        <h2 id="plat-title" className="section-title" data-reveal>
          Platformele pe care lucrăm
        </h2>
        <ul className="crm-integrations">
          {platforms.map((p, i) => (
            <li key={p.name} data-reveal style={{ "--c": p.color, "--d": `${(i % 4) * 0.06}s` } as React.CSSProperties}>
              <span className="crm-int-icon" aria-hidden="true">
                {p.icon}
              </span>
              <strong>{p.name}</strong>
              <span>{p.text}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="page-section" aria-labelledby="proc-title">
        <h2 id="proc-title" className="section-title" data-reveal>
          Ce include targeting-ul complet
        </h2>
        <ul className="card-grid three">
          {process.map((s, i) => (
            <li key={s.title} className="info-card ads-card" data-reveal style={{ "--d": `${(i % 3) * 0.06}s` } as React.CSSProperties}>
              <span className="info-card-icon" aria-hidden="true">
                {s.icon}
              </span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="page-section" aria-labelledby="conn-title">
        <h2 id="conn-title" className="section-title" data-reveal>
          Targeting conectat la soft
        </h2>
        <p className="page-note" data-reveal>
          Reclama e doar jumătate din drum. Cealaltă jumătate e să știi ce s-a întâmplat după click —
          și să spui asta înapoi platformelor.
        </p>
        <div className="crm-cases">
          {connected.map((c, i) => (
            <article
              key={c.title}
              className="crm-case"
              data-reveal
              style={{ "--accent": c.accent, "--d": `${i * 0.08}s` } as React.CSSProperties}
            >
              <h3>{c.title}</h3>
              <p>{c.lead}</p>
              <ul className="check-list">
                {c.points.map((pt) => (
                  <li key={pt}>
                    <FaCheck aria-hidden="true" /> {pt}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section" aria-labelledby="met-title">
        <h2 id="met-title" className="section-title" data-reveal>
          Ce urmărim, nu doar ce raportăm
        </h2>
        <ul className="chip-cloud ads-metrics" data-reveal>
          {metrics.map((m) => (
            <li key={m} style={{ "--c": "#ffc21a" } as React.CSSProperties}>
              <span aria-hidden="true">
                <FaFilter />
              </span>
              {m}
            </li>
          ))}
        </ul>
        <p className="page-note" data-reveal>
          <FaKey aria-hidden="true" className="inline-icon" /> Conturile de publicitate și datele rămân
          mereu ale companiei — lucrăm cu acces acordat, nu în conturi străine.
        </p>
      </section>

      <Faq items={faq} />

      <p className="crm-more" data-reveal>
        <Link href="/crm-la-comanda" className="inline-link">
          Leadurile din reclame lucrează cel mai bine într-un CRM la comandă <FaArrowRight aria-hidden="true" />
        </Link>
      </p>

      <ContactCta
        title="Vrei un audit al reclamelor actuale? Scrie-ne pe Telegram."
        text="Spune-ne pe ce platforme rulați acum și ce vindeți."
      />
    </div>
  );
}
