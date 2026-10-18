import type { Metadata } from "next";
import Link from "next/link";
import { FaArrowLeft, FaTelegramPlane } from "react-icons/fa";
import PageBackdrop from "./components/page-backdrop";
import { CONTACT, NAV } from "./lib/site";

export const metadata: Metadata = {
  title: "Pagina nu a fost găsită",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="page not-found">
      <PageBackdrop />
      <p className="nf-code" aria-hidden="true">
        404
      </p>
      <h1 className="page-title">
        Pagina nu există <span>sau a fost mutată</span>
      </h1>
      <p className="page-lead">
        Linkul poate fi greșit sau vechi. Încearcă una dintre paginile de mai jos sau scrie-ne
        direct pe Telegram.
      </p>
      <ul className="nf-links">
        {NAV.map((l) => (
          <li key={l.href}>
            <Link href={l.href}>{l.label}</Link>
          </li>
        ))}
      </ul>
      <div className="crm-cta-buttons">
        <Link href="/" className="crm-btn">
          <FaArrowLeft aria-hidden="true" /> Pagina principală
        </Link>
        <a href={CONTACT.telegram} target="_blank" rel="noopener noreferrer" className="crm-btn ghost">
          <FaTelegramPlane aria-hidden="true" /> Telegram
        </a>
      </div>
    </div>
  );
}
