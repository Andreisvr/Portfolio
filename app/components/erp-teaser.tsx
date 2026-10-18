import Link from "next/link";
import { FaArrowRight, FaCheck } from "react-icons/fa";
import ErpHub from "./erp-hub";

const points = [
  "Depozite multiple, stoc în timp real, rezervare la comandă",
  "POS pentru magazin și scanner de depozit pe telefon",
  "Preț, reducere și stoc trimise automat pe site",
  "Soft separat: funcționează singur sau conectat la CRM-ul și site-ul vostru",
];

export default function ErpTeaser() {
  return (
    <section className="crm erp-teaser" id="erp" aria-labelledby="erp-title">
      <div className="crm-blob crm-blob-a erp-blob" aria-hidden="true" />
      <div className="crm-blob crm-blob-b" aria-hidden="true" />

      <div className="crm-hero" data-reveal>
        <span className="crm-kicker">ERP pentru retail · alternativă la 1C</span>
        <h2 id="erp-title" className="crm-title">
          ERP-ul — <span>centrul de control al produselor</span>
        </h2>
        <p className="crm-lead">
          Pentru magazine cu depozite, vânzări online și magazin fizic: un ERP rapid, din browser,
          care preia tot ce face azi 1C în partea operațională — și se modifică în zile, nu în
          luni. Ce schimbi în ERP apare pe site, la casă, în depozit și în CRM.
        </p>
      </div>

      <div className="erp-teaser-hub" data-reveal>
        <ErpHub />
      </div>

      <ul className="check-list big erp-teaser-points" data-reveal>
        {points.map((p) => (
          <li key={p}>
            <FaCheck aria-hidden="true" /> {p}
          </li>
        ))}
      </ul>

      <p className="crm-more" data-reveal>
        <Link href="/erp-retail" className="crm-btn">
          Detalii despre ERP pentru retail <FaArrowRight aria-hidden="true" />
        </Link>
      </p>
    </section>
  );
}
