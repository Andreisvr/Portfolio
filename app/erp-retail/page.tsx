import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  FaBoxOpen,
  FaWarehouse,
  FaSyncAlt,
  FaFileInvoice,
  FaCoins,
  FaCashRegister,
  FaBarcode,
  FaTruck,
  FaUndoAlt,
  FaUserShield,
  FaCheck,
  FaTimes,
  FaMinus,
  FaArrowRight,
  FaBolt,
  FaTools,
  FaMobileAlt,
  FaPlug,
  FaCubes,
  FaLink,
  FaServer,
  FaPuzzlePiece,
} from "react-icons/fa";
import PageHero from "../components/page-hero";
import PageBackdrop from "../components/page-backdrop";
import ErpHub from "../components/erp-hub";
import Faq, { type FaqItem } from "../components/faq";
import ContactCta from "../components/contact-cta";
import JsonLd from "../components/json-ld";
import { SITE_URL, absoluteUrl } from "../lib/site";

const PATH = "/erp-retail";
const description =
  "ERP pentru retail, alternativă modernă la 1C: depozite multiple, stocuri în timp real, documente de stoc, cost real FIFO și marjă, POS pentru magazin, scanner pe telefon, livrări, conexiune cu curierii, site-ul și CRM-ul. Modificări în zile, nu luni.";

export const metadata: Metadata = {
  title: "ERP pentru retail — alternativă la 1C, depozite, stocuri, POS",
  description,
  alternates: { canonical: PATH },
  openGraph: { title: "ERP pentru retail — alternativă la 1C | SVR Dev", description, url: absoluteUrl(PATH) },
  keywords: [
    "ERP retail Moldova",
    "alternativă 1C",
    "program gestiune stocuri",
    "soft depozit",
    "POS magazin",
    "program pentru magazin",
    "inventariere cod de bare",
  ],
};

const advantages = [
  {
    icon: <FaBolt />,
    title: "Rapid, din browser",
    text: "Se deschide instant pe calculator, tabletă sau telefon. Fără instalări, fără Remote Desktop, fără „se încarcă baza”.",
  },
  {
    icon: <FaTools />,
    title: "Modificări în zile, nu luni",
    text: "Un câmp nou, o regulă nouă, un raport nou — le adăugăm repede, direct în sistemul vostru, fără să așteptați un programator 1C.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Gândit pentru oameni",
    text: "Interfață modernă și simplă: vânzătorul, depozitarul și șoferul văd doar ce le trebuie, pe ecranul pe care îl au în mână.",
  },
  {
    icon: <FaPlug />,
    title: "Conectat la tot",
    text: "Site-ul, magazinul fizic, CRM-ul, curierii și Telegram lucrează cu aceleași date — fără exporturi manuale și fișiere trimise pe email.",
  },
];

const modules = [
  {
    icon: <FaBoxOpen />,
    title: "Catalog de produse",
    text: "Produse cu poze, categorii, coduri de bare, modificații (culori, mărimi) și complecte compuse din alte produse.",
  },
  {
    icon: <FaWarehouse />,
    title: "Depozite multiple",
    text: "Stoc separat pe fiecare depozit și magazin, transferuri între ele în doi pași: trimis → recepționat.",
  },
  {
    icon: <FaSyncAlt />,
    title: "Stoc în timp real",
    text: "Stocul se rezervă la confirmarea comenzii, iar sistemul nu permite stoc negativ — vedeți mereu ce e disponibil cu adevărat.",
  },
  {
    icon: <FaFileInvoice />,
    title: "Documente de stoc",
    text: "Recepție, expediere, transport, retur, complectare, inventariere — fiecare cu stare „netrecut / trecut” și PDF.",
  },
  {
    icon: <FaCoins />,
    title: "Cost real & marjă",
    text: "Fiecare recepție creează un lot cu costul lui; vânzările consumă loturile FIFO, deci marja e calculată pe costul real.",
  },
  {
    icon: <FaCashRegister />,
    title: "POS pentru magazin",
    text: "Vânzare în magazinul fizic din stocul real al magazinului, cu căutare după cod de bare sau poză și istoric de vânzări.",
  },
  {
    icon: <FaBarcode />,
    title: "Scanner pe telefon",
    text: "Depozitarul scanează codurile de bare cu telefonul: caută produse, face inventarierea și transferurile pe loc.",
  },
  {
    icon: <FaTruck />,
    title: "Livrări & șoferi",
    text: "Expedieri pe curier sau pe șoferii proprii; fiecare șofer își vede livrările și lasă note care ajung în CRM.",
  },
  {
    icon: <FaUndoAlt />,
    title: "Vânzări & retururi",
    text: "Comenzi, expedieri și retururi într-un singur loc, cu documente PDF generate în masă.",
  },
  {
    icon: <FaUserShield />,
    title: "Roluri & jurnal",
    text: "Operator, depozit, administrator — fiecare cu drepturile lui. Fiecare acțiune rămâne în jurnal, cu autorul ei.",
  },
];

const controlFlow = [
  {
    title: "Schimbi prețul sau reducerea în ERP",
    text: "O singură dată, într-un singur loc — inclusiv pentru toate culorile/modificațiile produsului.",
  },
  {
    title: "Site-ul se actualizează singur",
    text: "Prețul, reducerea și stocul ajung automat pe magazinul online. Produsele noi apar ca ciornă, ca să le verifici înainte de publicare.",
  },
  {
    title: "Angajații văd aceleași date",
    text: "Managerii din CRM, vânzătorul de la POS și depozitarul cu scannerul lucrează cu același stoc și același preț.",
  },
  {
    title: "Fiecare mișcare e urmărită",
    text: "Recepție, vânzare, transfer, retur: stocul se schimbă doar prin documente, deci știi oricând de unde vine fiecare cifră.",
  },
];

type Mark = "yes" | "no" | "partial";
const compare: { label: string; ours: Mark; c1: Mark }[] = [
  { label: "Funcționează din browser, pe orice dispozitiv", ours: "yes", c1: "partial" },
  { label: "Interfață modernă, ușor de învățat", ours: "yes", c1: "no" },
  { label: "Modificări și funcții noi în câteva zile", ours: "yes", c1: "no" },
  { label: "Site, CRM, curieri și Telegram conectați nativ", ours: "yes", c1: "partial" },
  { label: "Scanner de depozit pe telefonul obișnuit", ours: "yes", c1: "partial" },
  { label: "Fără licențe per utilizator", ours: "yes", c1: "no" },
  { label: "Contabilitate și raportare fiscală standard", ours: "partial", c1: "yes" },
];

const markIcon = (m: Mark) =>
  m === "yes" ? <FaCheck aria-label="Da" /> : m === "no" ? <FaTimes aria-label="Nu" /> : <FaMinus aria-label="Parțial" />;

const standalone = [
  {
    icon: <FaCubes />,
    title: "Funcționează singur",
    text: "ERP-ul e un program de sine stătător: are bază de date, conturi și server proprii. Nu aveți nevoie de CRM-ul nostru ca să-l folosiți.",
  },
  {
    icon: <FaLink />,
    title: "Se conectează la ce aveți",
    text: "Lucrează cu CRM-ul, site-ul sau magazinul online pe care le folosiți deja, prin API. Dacă un sistem se oprește, celălalt merge mai departe.",
  },
  {
    icon: <FaPuzzlePiece />,
    title: "Alegeți modulele",
    text: "Începeți doar cu depozitul și stocurile, sau doar cu POS-ul pentru magazin — restul modulelor se adaugă când aveți nevoie.",
  },
  {
    icon: <FaServer />,
    title: "Datele rămân ale voastre",
    text: "Rulează pe serverul companiei sau pe un server dedicat proiectului, cu backup și acces doar pentru conturile create de voi.",
  },
];

const packages = [
  {
    name: "ERP Depozit",
    who: "Pentru depozite și distribuție",
    items: ["Catalog & coduri de bare", "Depozite multiple & transferuri", "Recepție, expediere, inventariere", "Scanner pe telefon", "Cost real FIFO"],
    accent: "#3ee08f",
  },
  {
    name: "ERP Retail",
    who: "Pentru magazine fizice + online",
    items: ["Tot din ERP Depozit", "POS pentru magazin", "Sincronizare cu site-ul", "Vânzări, livrări & retururi", "Rapoarte de marjă"],
    accent: "#ffc21a",
    featured: true,
  },
  {
    name: "ERP + CRM",
    who: "Pentru echipe de vânzări",
    items: ["Tot din ERP Retail", "CRM la comandă", "Telefonie, Telegram, Meta", "Comenzi și statusuri sincronizate", "Analiză pe operatori"],
    accent: "#c13cff",
  },
];

const migration = [
  { n: "01", title: "Export din sistemul vechi", text: "Catalogul, prețurile, pozele și stocurile se exportă din 1C sau din sistemul existent." },
  { n: "02", title: "Import & verificare", text: "Datele se curăță și se importă în ERP; verificăm împreună că totul corespunde." },
  { n: "03", title: "Lucru în paralel", text: "Echipa începe pe ERP-ul nou, iar sistemul vechi rămâne disponibil ca referință." },
  { n: "04", title: "Trecere completă", text: "Când sunteți siguri, oprim sistemul vechi — doar cu acordul vostru." },
];

const faq: FaqItem[] = [
  {
    q: "ERP-ul înlocuiește complet 1C?",
    a: "Partea operațională — produse, depozite, stocuri, vânzări, POS, livrări, site și CRM — da, complet. Contabilitatea fiscală și raportarea către stat le poate face în continuare contabilul în programul lui; pentru asta pregătim exportul documentelor din ERP în formatul de care are nevoie.",
  },
  {
    q: "De ce ar fi mai bun decât 1C pentru un magazin?",
    a: "Pentru că e construit pe procesul vostru, nu pe un șablon: se deschide rapid din browser, angajații îl învață repede, iar orice modificare se face în zile. În plus, site-ul, CRM-ul și curierii sunt conectați direct, nu prin exporturi manuale.",
  },
  {
    q: "Cum ajung produsele din ERP pe site?",
    a: "Automat. ERP-ul trimite prețul, reducerea și stocul fiecărui produs direct către magazinul online — fie că e un site construit de noi, fie unul existent pe WordPress/WooCommerce. Actualizarea poate fi aproape instantanee, în funcție de cum e construit site-ul.",
  },
  {
    q: "Pot lucra angajații de pe telefon?",
    a: "Da. Depozitarul scanează codurile de bare cu camera telefonului, șoferul își vede livrările, iar managerul vede stocul și comenzile — totul din browserul telefonului.",
  },
  {
    q: "Putem păstra datele din 1C?",
    a: "Da. Catalogul, prețurile, codurile de bare și pozele se importă. La un proiect recent am migrat 407 produse și 319 poze din sistemul vechi, cu un script care poate fi rulat de mai multe ori fără dubluri.",
  },
  {
    q: "Pot folosi ERP-ul fără CRM?",
    a: "Da. ERP-ul e un soft separat, cu bază de date și conturi proprii. Îl puteți folosi singur, cu CRM-ul nostru sau conectat prin API la CRM-ul și site-ul pe care le aveți deja.",
  },
  {
    q: "Trebuie să luăm toate modulele de la început?",
    a: "Nu. Puteți porni doar cu depozitul și stocurile, sau doar cu POS-ul, și adăuga restul pe parcurs. Datele rămân aceleași, nu se pierde nimic la extindere.",
  },
  {
    q: "Se poate conecta casa de marcat fiscală?",
    a: "POS-ul din ERP funcționează deja pentru vânzarea în magazin. Conectarea la o casă de marcat fiscală anume o facem la cerere, în funcție de modelul și de interfața pe care o oferă.",
  },
];

export default function ErpPage() {
  return (
    <div className="page">
      <PageBackdrop variant="erp" />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "ERP pentru retail — alternativă la 1C",
          serviceType: "Retail ERP Development",
          description,
          url: absoluteUrl(PATH),
          areaServed: { "@type": "Country", name: "Moldova" },
          provider: { "@id": `${SITE_URL}/#organization` },
        }}
      />

      <PageHero
        path={PATH}
        crumb="ERP pentru retail"
        kicker="ERP pentru retail · alternativă la 1C"
        title="Un singur centru de control"
        accent="pentru produse, stocuri și vânzări"
        lead="Depozite, stocuri, POS, livrări, magazinul online și CRM-ul — toate legate de același ERP. Un sistem rapid, construit pe procesele voastre, care poate înlocui 1C în partea operațională și se schimbă odată cu afacerea, în zile, nu în luni."
      />

      <section className="page-section" aria-labelledby="hub-title">
        <h2 id="hub-title" className="section-title" data-reveal>
          ERP-ul e centrul, restul se conectează la el
        </h2>
        <div data-reveal>
          <ErpHub />
        </div>
      </section>

      <section className="page-section" aria-labelledby="why-title">
        <h2 id="why-title" className="section-title" data-reveal>
          De ce un ERP propriu în loc de 1C
        </h2>
        <ul className="card-grid">
          {advantages.map((a, i) => (
            <li key={a.title} className="info-card" data-reveal style={{ "--d": `${i * 0.06}s` } as React.CSSProperties}>
              <span className="info-card-icon" aria-hidden="true">
                {a.icon}
              </span>
              <h3>{a.title}</h3>
              <p>{a.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="page-section" aria-labelledby="mod-title">
        <h2 id="mod-title" className="section-title" data-reveal>
          Modulele ERP-ului
        </h2>
        <ul className="card-grid five">
          {modules.map((m, i) => (
            <li key={m.title} className="info-card erp-card" data-reveal style={{ "--d": `${(i % 5) * 0.05}s` } as React.CSSProperties}>
              <span className="info-card-icon" aria-hidden="true">
                {m.icon}
              </span>
              <h3>{m.title}</h3>
              <p>{m.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="page-section" aria-labelledby="solo-title">
        <h2 id="solo-title" className="section-title" data-reveal>
          Un soft separat, nu un modul ascuns în alt program
        </h2>
        <p className="page-note" data-reveal>
          ERP-ul se livrează ca produs de sine stătător: îl puteți folosi singur, alături de CRM-ul
          nostru sau conectat la sistemele pe care le aveți deja.
        </p>
        <ul className="card-grid">
          {standalone.map((a, i) => (
            <li key={a.title} className="info-card erp-card" data-reveal style={{ "--d": `${i * 0.06}s` } as React.CSSProperties}>
              <span className="info-card-icon" aria-hidden="true">
                {a.icon}
              </span>
              <h3>{a.title}</h3>
              <p>{a.text}</p>
            </li>
          ))}
        </ul>
        <ul className="erp-packages">
          {packages.map((p, i) => (
            <li
              key={p.name}
              className={`erp-package${p.featured ? " featured" : ""}`}
              data-reveal
              style={{ "--accent": p.accent, "--d": `${i * 0.08}s` } as React.CSSProperties}
            >
              <h3>{p.name}</h3>
              <p className="erp-package-who">{p.who}</p>
              <ul className="check-list">
                {p.items.map((it) => (
                  <li key={it}>
                    <FaCheck aria-hidden="true" /> {it}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <p className="page-note" data-reveal>
          Pachetele sunt un punct de pornire — fiecare ERP se adaptează pe procesele companiei.
        </p>
      </section>

      <section className="page-section" aria-labelledby="ctrl-title">
        <h2 id="ctrl-title" className="section-title" data-reveal>
          Produsele se controlează dintr-un singur loc
        </h2>
        <p className="page-note" data-reveal>
          Nu mai editați același produs în trei programe. ERP-ul e sursa unică: ce schimbați acolo
          apare pe site, la casă, în depozit și în CRM.
        </p>
        <ol className="control-flow">
          {controlFlow.map((c, i) => (
            <li key={c.title} data-reveal style={{ "--d": `${i * 0.08}s` } as React.CSSProperties}>
              <span className="control-n" aria-hidden="true">
                {i + 1}
              </span>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="page-section" aria-labelledby="cmp-title">
        <h2 id="cmp-title" className="section-title" data-reveal>
          ERP la comandă vs. 1C
        </h2>
        <div className="compare" data-reveal>
          <table>
            <caption className="sr-only">Comparație între ERP-ul la comandă și 1C</caption>
            <thead>
              <tr>
                <th scope="col">Criteriu</th>
                <th scope="col">ERP la comandă</th>
                <th scope="col">1C</th>
              </tr>
            </thead>
            <tbody>
              {compare.map((r) => (
                <tr key={r.label}>
                  <th scope="row">{r.label}</th>
                  <td className={r.ours}>{markIcon(r.ours)}</td>
                  <td className={r.c1}>{markIcon(r.c1)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="page-note" data-reveal>
          Spunem deschis: pentru contabilitatea fiscală, 1C rămâne standardul. De aceea propunem ca
          ERP-ul să preia toată partea operațională, iar contabilul să primească din el documentele
          de care are nevoie.
        </p>
      </section>

      <section className="page-section" aria-labelledby="mig-title">
        <h2 id="mig-title" className="section-title" data-reveal>
          Trecerea de pe 1C, fără oprirea afacerii
        </h2>
        <ol className="crm-steps">
          {migration.map((s, i) => (
            <li key={s.n} data-reveal style={{ "--d": `${i * 0.06}s` } as React.CSSProperties}>
              <span className="crm-step-n">{s.n}</span>
              <strong>{s.title}</strong>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="page-section" aria-labelledby="case-title">
        <h2 id="case-title" className="section-title" data-reveal>
          ERP realizat pentru un retailer
        </h2>
        <article className="crm-case erp-case" data-reveal style={{ "--accent": "#3ee08f" } as React.CSSProperties}>
          <div className="erp-case-head">
            <Image src="/projects/svr-erp.webp" alt="" width={72} height={72} className="crm-case-logo" />
          </div>
          <h3>ERP + CRM pentru un retailer cu magazin fizic, depozite și vânzări online</h3>
          <p>
            Un ERP construit de la zero, care a înlocuit vechiul sistem de stocuri al clientului. Rulează
            ca soft separat de CRM și comunică cu el prin API: dacă unul se oprește, celălalt merge mai departe.
          </p>
          <div className="erp-stats">
            <div>
              <strong>407</strong>
              <span>produse migrate</span>
            </div>
            <div>
              <strong>319</strong>
              <span>poze migrate</span>
            </div>
            <div>
              <strong>3</strong>
              <span>depozite & magazin</span>
            </div>
            <div>
              <strong>Auto</strong>
              <span>preț, reducere și stoc pe site</span>
            </div>
          </div>
          <ul className="check-list">
            <li>
              <FaCheck aria-hidden="true" /> Documente de stoc cu validare fără stoc negativ și PDF
            </li>
            <li>
              <FaCheck aria-hidden="true" /> POS pentru magazin și scanner de depozit pe telefon
            </li>
            <li>
              <FaCheck aria-hidden="true" /> Preț, reducere și stoc trimise automat pe magazinul online
            </li>
            <li>
              <FaCheck aria-hidden="true" /> Statusurile comenzilor și notele șoferilor ajung automat în CRM
            </li>
          </ul>
        </article>
      </section>

      <Faq items={faq} />

      <p className="crm-more" data-reveal>
        <Link href="/crm-la-comanda" className="inline-link">
          ERP-ul merge mână în mână cu un CRM la comandă <FaArrowRight aria-hidden="true" />
        </Link>
      </p>

      <ContactCta
        title="Lucrați în 1C și vă încurcă? Scrie-ne cum arată ziua în depozit și în magazin."
        text="Îți arătăm cum ar arăta ERP-ul pe procesul vostru."
      />
    </div>
  );
}
