import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { SiMeta, SiGoogleads, SiYoutube, SiGoogleanalytics, SiGoogletagmanager, SiGooglemaps } from "react-icons/si";

const chips = [
  { icon: <SiMeta />, name: "Meta Ads", color: "#1877f2" },
  { icon: <SiGoogleads />, name: "Google Ads", color: "#4285f4" },
  { icon: <SiYoutube />, name: "YouTube", color: "#ff0000" },
  { icon: <SiGoogleanalytics />, name: "GA4", color: "#f9ab00" },
  { icon: <SiGoogletagmanager />, name: "Tag Manager", color: "#8ab4f8" },
  { icon: <SiGooglemaps />, name: "Google Maps", color: "#34a853" },
];

export default function AdsTeaser() {
  return (
    <section className="crm ads-teaser" id="targeting" aria-labelledby="ads-title">
      <div className="crm-blob crm-blob-a ads-blob" aria-hidden="true" />
      <div className="crm-blob crm-blob-b" aria-hidden="true" />

      <div className="crm-hero" data-reveal>
        <span className="crm-kicker">Targeting · Meta · Google · YouTube</span>
        <h2 id="ads-title" className="crm-title">
          Reclame care aduc <span>vânzări, nu doar click-uri</span>
        </h2>
        <p className="crm-lead">
          Targeting complet pentru multe companii — campaniile noastre au adus deja vânzări de zeci de
          milioane de lei. Strategie, campanii, tracking și rapoarte pe Meta, Google și YouTube. Și, spre deosebire de o agenție obișnuită, putem lega reclamele direct
          de CRM-ul, ERP-ul sau site-ul vostru — ca să vedeți ce campanie aduce bani.
        </p>
      </div>

      <ul className="chip-cloud ads-chips" data-reveal>
        {chips.map((c) => (
          <li key={c.name} style={{ "--c": c.color } as React.CSSProperties}>
            <span aria-hidden="true">{c.icon}</span>
            {c.name}
          </li>
        ))}
      </ul>

      <p className="crm-more" data-reveal>
        <Link href="/targeting" className="crm-btn">
          Detalii despre targeting <FaArrowRight aria-hidden="true" />
        </Link>
      </p>
    </section>
  );
}
