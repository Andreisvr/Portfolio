import type { Metadata } from "next";
import Link from "next/link";
import {
  FaTelegramPlane,
  FaSearch,
  FaFileContract,
  FaDraftingCompass,
  FaLayerGroup,
  FaRocket,
  FaLifeRing,
  FaArrowRight,
  FaCheck,
} from "react-icons/fa";
import PageHero from "../components/page-hero";
import PageBackdrop from "../components/page-backdrop";
import Faq, { type FaqItem } from "../components/faq";
import ContactCta from "../components/contact-cta";
import JsonLd from "../components/json-ld";
import { CONTACT, absoluteUrl } from "../lib/site";

const PATH = "/cum-lucram";
const description =
  "Cum lucrează SVR Dev: de la primul mesaj pe Telegram la analiză, propunere pe etape, prototip, dezvoltare, lansare, instruirea echipei și suport continuu pentru site-uri, CRM-uri și automatizări.";

export const metadata: Metadata = {
  title: "Cum lucrăm — de la idee la sistem funcțional",
  description,
  alternates: { canonical: PATH },
  openGraph: { title: "Cum lucrăm | SVR Dev", description, url: absoluteUrl(PATH) },
};

const steps = [
  {
    icon: <FaTelegramPlane />,
    title: "Primul mesaj",
    text: "Ne scrii pe Telegram, WhatsApp sau ne suni. Câteva rânduri despre ce faceți și ce vrei să schimbi sunt suficiente — nu e nevoie de caiet de sarcini.",
  },
  {
    icon: <FaSearch />,
    title: "Analiza procesului",
    text: "Discutăm cum lucrează echipa azi: de unde vin clienții, ce se face manual, ce servicii folosiți, unde se pierd informații. Uneori vedem împreună procesul pe loc.",
  },
  {
    icon: <FaFileContract />,
    title: "Propunere pe etape",
    text: "Primești o propunere scrisă: ce se construiește, în ce ordine, termenul și prețul fiecărei etape. Știi de la început ce primești.",
  },
  {
    icon: <FaDraftingCompass />,
    title: "Prototip",
    text: "Vezi primele ecrane devreme — structura site-ului sau a CRM-ului, etapele, câmpurile. Corecturile la început costă cel mai puțin.",
  },
  {
    icon: <FaLayerGroup />,
    title: "Dezvoltare pe etape",
    text: "Fiecare etapă se livrează funcțională și o poți testa imediat. Nu aștepți luni de zile un „totul gata” — folosești sistemul pe măsură ce crește.",
  },
  {
    icon: <FaRocket />,
    title: "Lansare & instruire",
    text: "Punem sistemul pe server, migrăm datele vechi și instruim echipa — managerii, depozitul, administratorul, fiecare pe partea lui.",
  },
  {
    icon: <FaLifeRing />,
    title: "Suport & dezvoltare continuă",
    text: "După lansare apar idei noi. Le adăugăm: funcții, rapoarte, integrări, pagini noi. Corecturile urgente se rezolvă prioritar.",
  },
];

const principles = [
  "Vorbești direct cu dezvoltatorul, pe Telegram",
  "Fiecare etapă e funcțională și testabilă",
  "Interfețe gândite deodată pentru telefon și calculator",
  "Codul și datele rulează pe serverul proiectului",
  "Viteză, SEO tehnic și accesibilitate incluse, nu „opțiuni”",
  "Nu schimbăm ce funcționează deja fără acordul tău",
];

const faq: FaqItem[] = [
  {
    q: "Trebuie să știu exact ce vreau înainte să vă scriu?",
    a: "Nu. E suficient să descrii problema: „pierdem clienți care sună”, „copiem comenzile manual în Excel”, „nu știm ce reclame aduc vânzări”. Soluția o construim împreună.",
  },
  {
    q: "Cum se stabilește prețul?",
    a: "După analiză, pe etape. Fiecare etapă are prețul și termenul ei, așa că poți începe cu ce e mai important și continua apoi.",
  },
  {
    q: "Lucrați și cu companii din afara Chișinăului?",
    a: "Da. Lucrăm cu companii din toată Moldova; discuțiile și demonstrațiile se pot face și online.",
  },
  {
    q: "Ce se întâmplă după lansare?",
    a: "Rămânem disponibili pentru suport, corecturi și funcții noi. La proiectele existente dezvoltarea continuă constant, la cererea echipei clientului.",
  },
  {
    q: "Faceți doar CRM-uri?",
    a: "Nu. Facem și ERP-uri pentru retail, site-uri de prezentare, magazine online, landinguri, boți Telegram, automatizări și SEO. CRM-ul e doar unul dintre sistemele pe care le construim.",
  },
];

export default function HowPage() {
  return (
    <div className="page">
      <PageBackdrop />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: "Cum lucrăm cu SVR Dev",
          description,
          step: steps.map((s, i) => ({
            "@type": "HowToStep",
            position: i + 1,
            name: s.title,
            text: s.text,
          })),
        }}
      />

      <PageHero
        path={PATH}
        crumb="Cum lucrăm"
        kicker="Procesul de lucru"
        title="De la un mesaj pe Telegram"
        accent="la un sistem funcțional"
        lead="Fie că e un site, un magazin online, un CRM sau o automatizare mică, drumul e același: înțelegem procesul, propunem o soluție pe etape și o construim împreună cu tine."
      />

      <section className="page-section" aria-labelledby="steps-title">
        <h2 id="steps-title" className="section-title" data-reveal>
          Pașii de lucru
        </h2>
        <ol className="steps-timeline">
          {steps.map((s, i) => (
            <li key={s.title} data-reveal>
              <span className="steps-icon" aria-hidden="true">
                {s.icon}
              </span>
              <div>
                <span className="how-flow-n">Pasul {i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="page-section" aria-labelledby="pr-title">
        <h2 id="pr-title" className="section-title" data-reveal>
          Principiile noastre
        </h2>
        <ul className="check-list big" data-reveal>
          {principles.map((p) => (
            <li key={p}>
              <FaCheck aria-hidden="true" /> {p}
            </li>
          ))}
        </ul>
      </section>

      <section className="page-section" aria-labelledby="what-title">
        <h2 id="what-title" className="section-title" data-reveal>
          Ce putem construi
        </h2>
        <div className="card-grid">
          <Link href="/crm-la-comanda" className="info-card link-card" data-reveal>
            <h3>CRM la comandă</h3>
            <p>Leaduri, telefonie, remindere, documente și analiză, pe procesul vostru.</p>
            <span className="inline-link">
              Detalii <FaArrowRight aria-hidden="true" />
            </span>
          </Link>
          <Link href="/erp-retail" className="info-card link-card" data-reveal>
            <h3>ERP pentru retail</h3>
            <p>Depozite, stocuri, POS, scanner, livrări și site — alternativă modernă la 1C.</p>
            <span className="inline-link">
              Detalii <FaArrowRight aria-hidden="true" />
            </span>
          </Link>
          <Link href="/integrari" className="info-card link-card" data-reveal>
            <h3>Integrări</h3>
            <p>Telegram, Meta, PBX, curier, site, ERP, Gmail, Sheets și orice serviciu cu API.</p>
            <span className="inline-link">
              Detalii <FaArrowRight aria-hidden="true" />
            </span>
          </Link>
          <Link href="/#proiecte" className="info-card link-card" data-reveal>
            <h3>Site-uri & magazine</h3>
            <p>Site-uri de prezentare, magazine online RO/RU, landinguri, SEO tehnic.</p>
            <span className="inline-link">
              Proiecte <FaArrowRight aria-hidden="true" />
            </span>
          </Link>
        </div>
      </section>

      <Faq items={faq} />

      <ContactCta
        title="Primul pas e un mesaj. Scrie-ne pe Telegram."
        text={`Sau sună la ${CONTACT.phoneDisplay}.`}
      />
    </div>
  );
}
