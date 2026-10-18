import type { Metadata } from "next";
import Link from "next/link";
import { FaCheck, FaArrowRight, FaPlug, FaCodeBranch, FaMousePointer } from "react-icons/fa";
import PageHero from "../components/page-hero";
import PageBackdrop from "../components/page-backdrop";
import Faq, { type FaqItem } from "../components/faq";
import ContactCta from "../components/contact-cta";
import JsonLd from "../components/json-ld";
import { integrations } from "../data/integrations";
import { SITE_URL, absoluteUrl } from "../lib/site";

const PATH = "/integrari";
const description =
  "Integrări între sisteme pentru companii din Moldova: Telegram, Meta (Facebook, Instagram), TikTok, telefonie Orange și Moldcell, SMS, curierat, site și magazin online, ERP, Gmail, Google Sheets, WhatsApp și orice serviciu cu API.";

export const metadata: Metadata = {
  title: "Integrări Telegram, Meta, telefonie, curierat și API",
  description,
  alternates: { canonical: PATH },
  openGraph: { title: "Integrări între sisteme | SVR Dev", description, url: absoluteUrl(PATH) },
};

const methods = [
  {
    icon: <FaPlug />,
    title: "API oficial",
    text: "Cea mai stabilă variantă: folosim API-ul serviciului (Telegram, Meta, PBX, curier) cu chei separate și limite de cereri.",
  },
  {
    icon: <FaCodeBranch />,
    title: "Webhook-uri",
    text: "Serviciul ne anunță singur când se întâmplă ceva — apel nou, lead nou, plată — iar CRM-ul reacționează în câteva secunde.",
  },
  {
    icon: <FaMousePointer />,
    title: "Automatizare web",
    text: "Pentru portalurile fără API, un robot intră în interfața web, citește datele și le aduce în sistem, programat zilnic.",
  },
];

const faq: FaqItem[] = [
  {
    q: "Serviciul nostru nu e în listă. Îl puteți integra?",
    a: "Probabil da. Verificăm întâi dacă are API sau webhook-uri. Dacă nu are, putem automatiza interfața web, așa cum am făcut deja pentru un portal de curierat care nu oferea anumite date prin API.",
  },
  {
    q: "Trebuie să schimbăm serviciile pe care le folosim?",
    a: "Nu. Ideea integrării e exact inversă: păstrați telefonia, curierul, reclamele și magazinul pe care le aveți, iar noi le legăm între ele și de CRM.",
  },
  {
    q: "Integrările sunt sigure?",
    a: "Fiecare sursă primește cheia ei de acces, cererile sunt limitate, iar încercările cu chei greșite blochează temporar adresa. Datele circulă doar prin HTTPS.",
  },
  {
    q: "Se poate face o integrare și fără CRM?",
    a: "Da. Putem lega direct, de exemplu, formularul de pe site de un grup Telegram, comenzile din magazin de un tabel Google Sheets sau reclamele Meta de un sistem existent.",
  },
];

export default function IntegrationsPage() {
  const done = integrations.filter((i) => i.status === "done");
  const onDemand = integrations.filter((i) => i.status === "on-demand");

  return (
    <div className="page">
      <PageBackdrop />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Integrări între sisteme",
          serviceType: "System Integration",
          description,
          url: absoluteUrl(PATH),
          areaServed: { "@type": "Country", name: "Moldova" },
          provider: { "@id": `${SITE_URL}/#organization` },
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Integrări",
            itemListElement: integrations.map((i) => ({
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: `Integrare ${i.name}` },
            })),
          },
        }}
      />

      <PageHero
        path={PATH}
        crumb="Integrări"
        kicker="Integrare între sisteme"
        title="Putem face"
        accent="orice integrare"
        lead="Telegram, Meta, telefonie, curier, site, depozit, email, tabele — fiecare companie are combinația ei de servicii. Le conectăm între ele, ca datele să circule singure și echipa să nu mai copieze nimic manual."
      />

      <section className="page-section" aria-labelledby="how-int-title">
        <h2 id="how-int-title" className="section-title" data-reveal>
          Cum conectăm un serviciu
        </h2>
        <ul className="card-grid three">
          {methods.map((m, i) => (
            <li key={m.title} className="info-card" data-reveal style={{ "--d": `${i * 0.08}s` } as React.CSSProperties}>
              <span className="info-card-icon" aria-hidden="true">
                {m.icon}
              </span>
              <h3>{m.title}</h3>
              <p>{m.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="page-section" aria-labelledby="done-title">
        <h2 id="done-title" className="section-title" data-reveal>
          Integrări realizate în proiecte
        </h2>
        <IntegrationList items={done} badge="Realizat" />
      </section>

      <section className="page-section" aria-labelledby="ondemand-title">
        <h2 id="ondemand-title" className="section-title" data-reveal>
          Disponibile la cerere
        </h2>
        <p className="page-note" data-reveal>
          Integrări pe care le construim când un proiect are nevoie de ele — tehnic sunt la fel de
          accesibile ca cele de mai sus.
        </p>
        <IntegrationList items={onDemand} badge="La cerere" />
      </section>

      <Faq items={faq} />

      <p className="crm-more" data-reveal>
        <Link href="/crm-la-comanda" className="inline-link">
          Integrările funcționează cel mai bine într-un CRM la comandă <FaArrowRight aria-hidden="true" />
        </Link>
      </p>

      <ContactCta
        title="Spune-ne ce servicii folosiți — îți spunem cum le legăm între ele."
        text="Scrie-ne pe Telegram lista serviciilor și ce vrei să se întâmple automat."
      />
    </div>
  );
}

function IntegrationList({ items, badge }: { items: typeof integrations; badge: string }) {
  return (
    <ul className="int-list">
      {items.map((it, i) => (
        <li
          key={it.slug}
          id={it.slug}
          className="int-card"
          data-reveal
          style={{ "--c": it.color, "--d": `${(i % 2) * 0.06}s` } as React.CSSProperties}
        >
          <div className="int-card-head">
            <span className="crm-int-icon" aria-hidden="true">
              {it.icon}
            </span>
            <h3>{it.name}</h3>
            <span className={`int-badge ${it.status}`}>{badge}</span>
          </div>
          <p>{it.details}</p>
          <ul className="check-list">
            {it.examples.map((ex) => (
              <li key={ex}>
                <FaCheck aria-hidden="true" /> {ex}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}
