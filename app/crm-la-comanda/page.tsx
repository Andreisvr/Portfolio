import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  FaColumns,
  FaBell,
  FaPhoneAlt,
  FaFileSignature,
  FaChartPie,
  FaUserShield,
  FaFileImport,
  FaMobileAlt,
  FaCheck,
  FaTimes,
  FaArrowRight,
} from "react-icons/fa";
import PageHero from "../components/page-hero";
import PageBackdrop from "../components/page-backdrop";
import Faq, { type FaqItem } from "../components/faq";
import ContactCta from "../components/contact-cta";
import JsonLd from "../components/json-ld";
import TelephonySection from "../components/telephony-section";
import { integrations } from "../data/integrations";
import { SITE_URL, absoluteUrl } from "../lib/site";

const PATH = "/crm-la-comanda";
const description =
  "CRM la comandă pentru companii din Moldova: Kanban, remindere, telefonie Orange/Moldcell cu înregistrarea convorbirilor și metrici pentru operatori, leaduri din Meta și site, notificări Telegram, documente automate, roluri și analiză. Fără abonament per utilizator.";

export const metadata: Metadata = {
  title: "CRM la comandă pentru companii din Moldova",
  description,
  alternates: { canonical: PATH },
  openGraph: { title: "CRM la comandă | SVR Dev", description, url: absoluteUrl(PATH) },
};

const modules = [
  {
    icon: <FaColumns />,
    title: "Kanban pe etapele voastre",
    text: "Pipeline-uri separate pentru vânzări, stoc, comenzi sau surse (site, TikTok, magazin). Leadurile se mută cu drag & drop, cu acțiuni în masă și filtre salvate.",
  },
  {
    icon: <FaBell />,
    title: "Remindere care nu se uită",
    text: "Board propriu de remindere, notificări pe Telegram, remindere automate pentru livrări întârziate sau clienți de recontactat.",
  },
  {
    icon: <FaPhoneAlt />,
    title: "Telefonie în CRM",
    text: "Apelurile se înregistrează și se leagă automat de client, vezi cine sună înainte să răspunzi, suni dintr-un click și urmărești timpul în apel al fiecărui operator.",
  },
  {
    icon: <FaFileSignature />,
    title: "Documente automate",
    text: "Contracte, acte și oferte generate din datele clientului, în Word și PDF, după șabloanele companiei.",
  },
  {
    icon: <FaChartPie />,
    title: "Analiză pe operatori",
    text: "Comenzi confirmate, cec mediu, top produse, locații și clienți, performanța fiecărui operator — pe orice perioadă.",
  },
  {
    icon: <FaUserShield />,
    title: "Roluri & securitate",
    text: "Fiecare rol vede doar ce trebuie: manager, depozit, administrator. Sesiuni securizate, blocare la parole greșite, jurnal de acțiuni.",
  },
  {
    icon: <FaFileImport />,
    title: "Migrare date",
    text: "Mutăm datele din amoCRM, Excel sau din sistemul vechi, ca echipa să nu înceapă de la zero.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Pe telefon și calculator",
    text: "Interfața e gândită pentru ambele: managerii lucrează de pe telefon, administratorul de pe calculator.",
  },
];

const compare = [
  { label: "Etape, câmpuri și reguli exact pe procesul vostru", custom: true, generic: false },
  { label: "Integrări locale (Orange, Moldcell, curieri din Moldova)", custom: true, generic: false },
  { label: "Fără abonament lunar per utilizator", custom: true, generic: false },
  { label: "Datele stau pe serverul proiectului", custom: true, generic: false },
  { label: "Funcții noi adăugate la cerere", custom: true, generic: false },
  { label: "Pornire în aceeași zi, fără dezvoltare", custom: false, generic: true },
];

const cases = [
  {
    logo: "/projects/svr-crm.webp",
    title: "CRM pentru o echipă de vânzări",
    text: "Un CRM care a înlocuit complet un sistem cu abonament folosit ani de zile. Acoperă două fluxuri pe același schelet: vânzări (un pipeline per manager) și gestiunea stocului.",
    points: [
      "Leaduri din site și din reclamele Meta, distribuite automat",
      "Un apel nou se atașează leadului existent — fără sute de dubluri",
      "Telefonie PBX, notificări și remindere pe Telegram",
      "Acte generate automat (DOCX + PDF)",
    ],
    accent: "#8bd317",
  },
  {
    logo: "/projects/svr-erp.webp",
    title: "CRM + ERP pentru retail",
    text: "Un CRM construit de la zero și un ERP separat pentru depozit, care funcționează independent și comunică prin API.",
    points: [
      "Telefonie PBX: card „sună acum”, click-to-call, apeluri pierdute",
      "Leaduri din landinguri, rețele sociale și magazinul online, pe canale separate",
      "Verificare zilnică automată a livrărilor la curier",
      "Roluri distincte pentru manageri, depozit și administrator",
    ],
    accent: "#2f8bff",
  },
];

const faq: FaqItem[] = [
  {
    q: "Ce înseamnă un CRM la comandă?",
    a: "Un sistem de gestiune a clienților construit special pentru compania voastră: etapele, câmpurile, rolurile și integrările sunt făcute după cum lucrează echipa, nu după un șablon. Codul rulează pe un server dedicat proiectului.",
  },
  {
    q: "Cât costă un CRM la comandă?",
    a: "Depinde de module și integrări. După o discuție despre proces primești o propunere pe etape, cu prețul fiecărei etape. Nu există licență lunară per utilizator — plătești dezvoltarea și găzduirea.",
  },
  {
    q: "Putem muta datele din amoCRM sau din Excel?",
    a: "Da. Am migrat deja date dintr-un amoCRM folosit ani de zile. Leadurile, contactele și istoricul relevant se importă, iar regulile vechi care produceau dubluri se pot corecta la import.",
  },
  {
    q: "Cât durează până putem lucra în CRM?",
    a: "Lucrăm pe etape: primele module (de obicei Kanban-ul și leadurile) se livrează primele, iar restul se adaugă treptat. Termenul exact îl stabilim în propunere, după ce cunoaștem scopul.",
  },
  {
    q: "Ce se întâmplă dacă avem nevoie de o funcție nouă peste o lună?",
    a: "O adăugăm. Un CRM la comandă crește odată cu afacerea — la proiectele existente funcțiile noi vin aproape săptămânal, la cererea echipei.",
  },
  {
    q: "Pot asculta convorbirile operatorilor?",
    a: "Da. Înregistrările se descarcă automat de la centrala telefonică și apar în fișa clientului, lângă apelul respectiv. Accesul la ele se poate limita pe roluri, de exemplu doar pentru administrator.",
  },
  {
    q: "Ce metrici vedem despre operatori?",
    a: "Timpul petrecut în apel, numărul de apeluri primite, efectuate și pierdute, rezultatul apelurilor, refuzurile cu motivele lor și conversia în comenzi. La cerere adăugăm evaluarea automată a calității convorbirilor cu AI, pe baza înregistrărilor.",
  },
  {
    q: "Unde sunt stocate datele?",
    a: "Pe un server dedicat proiectului, cu bază de date PostgreSQL, conexiune HTTPS și acces doar pentru conturile create de administrator.",
  },
];

export default function CrmPage() {
  const done = integrations.filter((i) => i.status === "done");
  return (
    <div className="page">
      <PageBackdrop />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "CRM la comandă",
          serviceType: "Custom CRM Development",
          description,
          url: absoluteUrl(PATH),
          areaServed: { "@type": "Country", name: "Moldova" },
          provider: { "@id": `${SITE_URL}/#organization` },
        }}
      />

      <PageHero
        path={PATH}
        crumb="CRM la comandă"
        kicker="Sisteme CRM la comandă"
        title="CRM construit"
        accent="pe procesele companiei tale"
        lead="Programele generice te obligă să lucrezi cum au gândit ele. Noi facem invers: construim CRM-ul în jurul echipei tale și îl conectăm la serviciile pe care le folosești deja — Telegram, Meta, telefonie, curierat, site și depozit."
      />

      <section className="page-section" aria-labelledby="mod-title">
        <h2 id="mod-title" className="section-title" data-reveal>
          Ce poate face CRM-ul
        </h2>
        <ul className="card-grid">
          {modules.map((m, i) => (
            <li key={m.title} className="info-card" data-reveal style={{ "--d": `${(i % 4) * 0.06}s` } as React.CSSProperties}>
              <span className="info-card-icon" aria-hidden="true">
                {m.icon}
              </span>
              <h3>{m.title}</h3>
              <p>{m.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <TelephonySection />

      <section className="page-section" aria-labelledby="cmp-title">
        <h2 id="cmp-title" className="section-title" data-reveal>
          CRM la comandă vs. CRM generic
        </h2>
        <div className="compare" data-reveal>
          <table>
            <caption className="sr-only">Comparație între CRM la comandă și un CRM generic cu abonament</caption>
            <thead>
              <tr>
                <th scope="col">Criteriu</th>
                <th scope="col">La comandă</th>
                <th scope="col">Generic</th>
              </tr>
            </thead>
            <tbody>
              {compare.map((r) => (
                <tr key={r.label}>
                  <th scope="row">{r.label}</th>
                  {[r.custom, r.generic].map((v, j) => (
                    <td key={j} className={v ? "yes" : "no"}>
                      {v ? <FaCheck aria-label="Da" /> : <FaTimes aria-label="Nu" />}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="page-note" data-reveal>
          Un CRM generic e o alegere bună când procesul e simplu și standard. Când echipa începe
          să-l ocolească prin Excel și mesaje, e momentul unui sistem propriu.
        </p>
      </section>

      <section className="page-section" aria-labelledby="int-title">
        <h2 id="int-title" className="section-title" data-reveal>
          Integrări deja folosite în CRM-urile noastre
        </h2>
        <ul className="chip-cloud" data-reveal>
          {done.map((it) => (
            <li key={it.slug} style={{ "--c": it.color } as React.CSSProperties}>
              <span aria-hidden="true">{it.icon}</span>
              {it.name}
            </li>
          ))}
        </ul>
        <p className="page-note" data-reveal>
          <Link href="/integrari" className="inline-link">
            Vezi toate integrările, inclusiv cele disponibile la cerere <FaArrowRight aria-hidden="true" />
          </Link>
        </p>
      </section>

      <section className="page-section" aria-labelledby="cases-title">
        <h2 id="cases-title" className="section-title" data-reveal>
          CRM-uri realizate
        </h2>
        <div className="crm-cases">
          {cases.map((c, i) => (
            <article
              key={c.title}
              className="crm-case"
              data-reveal
              style={{ "--accent": c.accent, "--d": `${i * 0.08}s` } as React.CSSProperties}
            >
              <Image src={c.logo} alt="" width={72} height={72} className="crm-case-logo" />
              <h3>{c.title}</h3>
              <p>{c.text}</p>
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

      <p className="crm-more" data-reveal>
        <Link href="/erp-retail" className="inline-link">
          Ai și depozit sau magazin fizic? Vezi ERP-ul pentru retail <FaArrowRight aria-hidden="true" />
        </Link>
      </p>

      <Faq items={faq} />

      <ContactCta
        title="Descrie-ne pe scurt cum lucrați azi — îți propunem structura CRM-ului."
        text="Un mesaj pe Telegram e suficient pentru început."
      />
    </div>
  );
}
