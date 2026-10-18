import Image from "next/image";
import Link from "next/link";
import { FaFileSignature, FaHeadset, FaUserShield, FaBell, FaArrowRight } from "react-icons/fa";
import { homeIntegrations } from "../data/integrations";
import ContactCta from "./contact-cta";


const features = [
  { icon: <FaBell />, title: "Remindere & sarcini", text: "Nimic nu se pierde: apeluri ratate, livrări întârziate, clienți de recontactat." },
  { icon: <FaFileSignature />, title: "Documente automate", text: "Contracte și acte DOCX / PDF generate din datele lead-ului." },
  { icon: <FaHeadset />, title: "Telefonie & operatori", text: "Convorbiri înregistrate, timp în apel, refuzuri, conversie — controlul complet al operatorilor." },
  { icon: <FaUserShield />, title: "Roluri & securitate", text: "Acces pe roluri, sesiuni securizate, jurnal de acțiuni, date pe serverul tău." },
];

const cases = [
  {
    logo: "/projects/svr-crm.webp",
    title: "CRM pentru o echipă de vânzări",
    text: "A înlocuit complet un CRM cu abonament: vânzări + gestiunea stocului, leaduri din site și Meta distribuite automat, telefonie PBX, notificări Telegram, acte generate automat.",
    chips: ["Meta", "Telegram", "Telefonie PBX", "Acte PDF"],
    accent: "#8bd317",
  },
  {
    logo: "/projects/svr-erp.webp",
    title: "CRM + ERP pentru retail",
    text: "CRM construit de la zero + ERP separat pentru depozit, legate prin API: telefonie PBX, SMS, leaduri din landinguri, rețele sociale și magazin online, verificare automată a livrărilor la curier.",
    chips: ["Telefonie PBX", "SMS", "Curierat", "ERP"],
    accent: "#2f8bff",
  },
];

const steps = [
  { n: "01", title: "Analiză", text: "Pornim de la cum lucrează echipa ta azi, nu de la un șablon." },
  { n: "02", title: "Prototip", text: "Pipeline-uri, câmpuri și roluri pe procesul tău real." },
  { n: "03", title: "Integrări", text: "Conectăm serviciile pe care deja le folosești." },
  { n: "04", title: "Lansare & suport", text: "Instruire personal, migrare date, dezvoltare continuă." },
];

const fade = (i = 0) => ({
  "data-reveal": "",
  style: { "--d": `${i * 0.06}s` } as React.CSSProperties,
});

export default function CrmSection() {
  return (
    <section className="crm" id="crm" aria-labelledby="crm-title">
      <div className="crm-blob crm-blob-a" aria-hidden="true" />
      <div className="crm-blob crm-blob-b" aria-hidden="true" />
      <div className="crm-blob crm-blob-c" aria-hidden="true" />

      <div className="crm-hero" {...fade()}>
        <div className="crm-emblem">
          <Image src="/projects/svr-crm.webp" alt="SVR CRM" width={120} height={120} />
        </div>
        <span className="crm-kicker">Sisteme CRM la comandă</span>
        <h2 id="crm-title" className="crm-title">
          Un CRM construit <span>pe procesele companiei tale</span>
        </h2>
        <p className="crm-lead">
          Nu adaptăm afacerea la un program generic. Construim CRM-ul în jurul cerințelor tale
          specifice și îl conectăm la serviciile pe care le folosești deja — Telegram, Meta,
          telefonie, Gmail, curierat, site și depozit.
        </p>
        <div className="crm-stats">
          <div><strong>2</strong><span>CRM-uri proprii în producție</span></div>
          <div><strong>10+</strong><span>tipuri de integrări</span></div>
          <div><strong>0</strong><span>abonamente lunare per utilizator</span></div>
        </div>
      </div>

      <h3 className="crm-subtitle" {...fade()}>Ce putem conecta</h3>
      <ul className="crm-integrations">
        {homeIntegrations.map((it, i) => (
          <li
            key={it.name}
            {...fade(i % 4)}
            style={{ "--c": it.color, "--d": `${(i % 4) * 0.06}s` } as React.CSSProperties}
          >
            <span className="crm-int-icon" aria-hidden="true">{it.icon}</span>
            <strong>{it.name}</strong>
            <span>{it.hint}</span>
          </li>
        ))}
      </ul>
      <p className="crm-note">
        Ai alt serviciu extern? Dacă are API sau se poate automatiza, îl integrăm.{" "}
        <Link href="/integrari" className="inline-link">
          Toate integrările <FaArrowRight aria-hidden="true" />
        </Link>
      </p>

      <ul className="crm-features">
        {features.map((f, i) => (
          <li key={f.title} {...fade(i)}>
            <span className="crm-feat-icon" aria-hidden="true">{f.icon}</span>
            <strong>{f.title}</strong>
            <p>{f.text}</p>
          </li>
        ))}
      </ul>

      <h3 className="crm-subtitle" {...fade()}>Realizate</h3>
      <div className="crm-cases">
        {cases.map((c, i) => (
          <article
            key={c.title}
            className="crm-case"
            {...fade(i)}
            style={{ "--accent": c.accent, "--d": `${i * 0.06}s` } as React.CSSProperties}
          >
            <Image src={c.logo} alt="" width={72} height={72} className="crm-case-logo" />
            <h4>{c.title}</h4>
            <p>{c.text}</p>
            <ul className="project-tags">
              {c.chips.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <ol className="crm-steps">
        {steps.map((s, i) => (
          <li key={s.n} {...fade(i)}>
            <span className="crm-step-n">{s.n}</span>
            <strong>{s.title}</strong>
            <p>{s.text}</p>
          </li>
        ))}
      </ol>

      <p className="crm-more" {...fade()}>
        <Link href="/crm-la-comanda" className="crm-btn">
          Detalii despre CRM la comandă <FaArrowRight aria-hidden="true" />
        </Link>
        <Link href="/cum-lucram" className="crm-btn ghost">
          Cum lucrăm
        </Link>
      </p>

      <ContactCta title="Spune-ne cum lucrează echipa ta — îți propunem structura CRM-ului." />
    </section>
  );
}
