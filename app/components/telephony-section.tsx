import {
  FaMicrophone,
  FaLink,
  FaBolt,
  FaPhoneAlt,
  FaPhoneSlash,
  FaClone,
  FaStopwatch,
  FaExchangeAlt,
  FaTags,
  FaThumbsDown,
  FaTrophy,
  FaUndoAlt,
  FaStar,
  FaFileAlt,
  FaClipboardCheck,
} from "react-icons/fa";

type Status = "done" | "on-demand";

const features: { icon: React.ReactNode; title: string; text: string }[] = [
  {
    icon: <FaMicrophone />,
    title: "Înregistrarea convorbirilor",
    text: "Fiecare apel e descărcat automat de la centrală și atașat la fișa clientului — îl asculți direct din CRM, fără să cauți în portalul operatorului.",
  },
  {
    icon: <FaLink />,
    title: "Apel legat automat de client",
    text: "Apelul se atașează leadului deschis al acelui număr, indiferent de formatul lui (+373, 0, 00373). Fără sute de leaduri duble.",
  },
  {
    icon: <FaBolt />,
    title: "Card „sună acum”",
    text: "Operatorul vede cine sună și istoricul clientului înainte să răspundă, cu link direct spre fișă.",
  },
  {
    icon: <FaPhoneAlt />,
    title: "Click-to-call",
    text: "Suni clientul dintr-un click, de pe linia potrivită — fix, mobil sau o linie dedicată unei surse.",
  },
  {
    icon: <FaPhoneSlash />,
    title: "Apeluri pierdute",
    text: "Listă separată cu apelurile nepreluate, marcate până când cineva le vede, ca niciun client să nu rămână fără răspuns.",
  },
  {
    icon: <FaClone />,
    title: "Linii pe operatori și surse",
    text: "Fiecare linie duce în pipeline-ul operatorului ei; clientul care are deja un manager nu se dublează fără acordul echipei.",
  },
];

const metrics: { icon: React.ReactNode; title: string; text: string; status: Status }[] = [
  {
    icon: <FaStopwatch />,
    title: "Timp petrecut în apel",
    text: "Durata totală și medie a convorbirilor, pe fiecare operator și pe orice perioadă.",
    status: "done",
  },
  {
    icon: <FaExchangeAlt />,
    title: "Apeluri primite, efectuate, pierdute",
    text: "Volumul de apeluri pe direcție și pe operator — vezi imediat cine e supraîncărcat.",
    status: "done",
  },
  {
    icon: <FaTags />,
    title: "Rezultatul apelului",
    text: "Răspuns, nu a răspuns, ocupat — marcat automat pe lead, după statusul și direcția apelului.",
    status: "done",
  },
  {
    icon: <FaThumbsDown />,
    title: "Refuzuri și motivele lor",
    text: "Un lead nu poate fi închis ca refuz fără motiv — știi exact de ce pleacă clienții.",
    status: "done",
  },
  {
    icon: <FaTrophy />,
    title: "Conversie pe operator",
    text: "Comenzi confirmate, cec mediu și leaduri active pe fiecare operator.",
    status: "done",
  },
  {
    icon: <FaUndoAlt />,
    title: "Timp de revenire",
    text: "Cât durează până când un apel pierdut primește un apel înapoi, pe operator.",
    status: "on-demand",
  },
  {
    icon: <FaStar />,
    title: "Calitatea convorbirii (AI)",
    text: "Transcriere automată și evaluarea fiecărui apel: politețe, ton, obiecții tratate, rezultat.",
    status: "on-demand",
  },
  {
    icon: <FaClipboardCheck />,
    title: "Respectarea scriptului (AI)",
    text: "Verificare automată dacă operatorul a parcurs pașii obligatorii: salut, ofertă, întrebări, închidere.",
    status: "on-demand",
  },
  {
    icon: <FaFileAlt />,
    title: "Rezumat automat în fișă",
    text: "După fiecare apel, un rezumat scurt al discuției apare în cronologia clientului.",
    status: "on-demand",
  },
];

export default function TelephonySection() {
  return (
    <section className="page-section tel-section" id="telefonie" aria-labelledby="tel-title">
      <h2 id="tel-title" className="section-title" data-reveal>
        Telefonie, înregistrări și <span className="text-gradient">controlul operatorilor</span>
      </h2>
      <p className="page-note" data-reveal>
        Centrala telefonică virtuală (Orange, Moldcell sau alt operator cu API) devine parte din
        CRM: fiecare apel e înregistrat, legat de client și numărat în metricile echipei.
      </p>

      <ul className="card-grid three">
        {features.map((f, i) => (
          <li key={f.title} className="info-card tel-card" data-reveal style={{ "--d": `${(i % 3) * 0.06}s` } as React.CSSProperties}>
            <span className="info-card-icon" aria-hidden="true">
              {f.icon}
            </span>
            <h3>{f.title}</h3>
            <p>{f.text}</p>
          </li>
        ))}
      </ul>

      <h3 className="crm-subtitle" data-reveal>
        Metrici pentru controlul operatorilor
      </h3>
      <ul className="tel-metrics">
        {metrics.map((m, i) => (
          <li
            key={m.title}
            className={`tel-metric ${m.status}`}
            data-reveal
            style={{ "--d": `${(i % 3) * 0.06}s` } as React.CSSProperties}
          >
            <div className="tel-metric-head">
              <span className="tel-metric-icon" aria-hidden="true">
                {m.icon}
              </span>
              <span className={`int-badge ${m.status}`}>{m.status === "done" ? "Realizat" : "La cerere"}</span>
            </div>
            <h4>{m.title}</h4>
            <p>{m.text}</p>
          </li>
        ))}
      </ul>
      <p className="page-note" data-reveal>
        Metricile marcate „la cerere” folosesc înregistrările deja salvate în CRM — se pot activa
        oricând, fără schimbarea centralei telefonice.
      </p>
    </section>
  );
}
