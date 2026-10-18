import Link from "next/link";
import {
  FaTelegramPlane,
  FaClipboardList,
  FaDraftingCompass,
  FaRocket,
  FaArrowRight,
  FaPuzzlePiece,
  FaServer,
  FaHandshake,
} from "react-icons/fa";
import Faq, { type FaqItem } from "./faq";
import ContactCta from "./contact-cta";

const flow = [
  {
    icon: <FaTelegramPlane />,
    title: "Ne scrii pe Telegram",
    text: "Descrii problema în câteva rânduri sau cu un mesaj vocal: ce faceți azi manual, ce vrei să meargă singur.",
  },
  {
    icon: <FaClipboardList />,
    title: "Analiză & propunere",
    text: "Discutăm procesul, serviciile pe care le folosiți deja și rezultatul dorit. Primești o propunere clară, pe etape.",
  },
  {
    icon: <FaDraftingCompass />,
    title: "Prototip & dezvoltare",
    text: "Vezi primele ecrane devreme și le corectăm împreună. Fiecare etapă se livrează funcțională, nu „totul la final”.",
  },
  {
    icon: <FaRocket />,
    title: "Lansare & suport",
    text: "Migrăm datele, instruim echipa și rămânem alături: corecturi, funcții noi, integrări noi pe măsură ce afacerea crește.",
  },
];

const pillars = [
  {
    icon: <FaPuzzlePiece />,
    title: "Orice integrare",
    text: "Dacă un serviciu are API, webhook sau chiar doar o interfață web, îl putem conecta: Telegram, Meta, telefonie, curier, email, tabele, ERP.",
  },
  {
    icon: <FaServer />,
    title: "Soft la cerere",
    text: "Nu doar site-uri: CRM-uri, sisteme de stoc, boți pentru personal, generare de documente, rapoarte automate, colectare de date.",
  },
  {
    icon: <FaHandshake />,
    title: "Direct cu dezvoltatorul",
    text: "Vorbești cu omul care scrie codul — fără intermediari, fără „tichete”. Răspunsurile vin repede, pe Telegram.",
  },
];

const faq: FaqItem[] = [
  {
    q: "Ce fel de soft puteți face la cerere?",
    a: "Website-uri și magazine online, CRM-uri construite pe procesele companiei, sisteme de stoc și depozit, boți Telegram pentru clienți sau personal, generare automată de contracte și acte, rapoarte și programe care colectează date. Dacă un proces se repetă zilnic, de obicei se poate automatiza.",
  },
  {
    q: "Puteți conecta serviciul pe care îl folosim deja?",
    a: "Da, în majoritatea cazurilor. Am integrat deja Telegram, Meta (Facebook și Instagram), centrale telefonice Orange și Moldcell, SMS, curierat, magazine online și ERP. Pentru servicii noi verificăm dacă au API sau webhook; dacă nu au, automatizăm interfața lor web.",
  },
  {
    q: "Cum vă contactez și ce trebuie să pregătesc?",
    a: "Cel mai simplu e un mesaj pe Telegram sau WhatsApp. Nu e nevoie de un caiet de sarcini: spune ce faceți acum, ce te încurcă și ce servicii folosiți. Restul îl clarificăm împreună.",
  },
];

export default function HowWeWork() {
  return (
    <section className="how" aria-labelledby="how-title">
      <div className="section-head" data-reveal>
        <span className="crm-kicker">Soft la cerere</span>
        <h2 id="how-title" className="section-title">
          De la un mesaj pe Telegram <span className="text-gradient">la un sistem care lucrează pentru tine</span>
        </h2>
        <p className="section-lead">
          SVR Dev construiește software pentru companii care au depășit tabelele Excel și
          programele generice: site-uri, CRM-uri, integrări și automatizări făcute exact pe modul
          în care lucrează echipa. Lucrăm cu firme din Chișinău și din toată Moldova.
        </p>
      </div>

      <ul className="how-pillars">
        {pillars.map((p, i) => (
          <li key={p.title} data-reveal style={{ "--d": `${i * 0.08}s` } as React.CSSProperties}>
            <span className="how-pillar-icon" aria-hidden="true">
              {p.icon}
            </span>
            <h3>{p.title}</h3>
            <p>{p.text}</p>
          </li>
        ))}
      </ul>

      <ol className="how-flow">
        {flow.map((s, i) => (
          <li key={s.title} data-reveal style={{ "--d": `${i * 0.08}s` } as React.CSSProperties}>
            <span className="how-flow-icon" aria-hidden="true">
              {s.icon}
            </span>
            <span className="how-flow-n">{String(i + 1).padStart(2, "0")}</span>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </li>
        ))}
      </ol>

      <p className="crm-more" data-reveal>
        <Link href="/cum-lucram" className="inline-link">
          Procesul complet de lucru <FaArrowRight aria-hidden="true" />
        </Link>
      </p>

      <Faq items={faq} />

      <ContactCta
        title="Ai o idee sau un proces care te încurcă? Scrie-ne pe Telegram."
        text="Îți răspunde personal dezvoltatorul, nu un call-center."
      />
    </section>
  );
}
