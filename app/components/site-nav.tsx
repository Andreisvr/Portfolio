import Link from "next/link";
import { FaTelegramPlane } from "react-icons/fa";
import { CONTACT, NAV } from "../lib/site";

export default function SiteNav() {
  return (
    <header className="site-nav">
      <a className="skip-link" href="#main">
        Sari la conținut
      </a>
      <div className="site-nav-inner">
        <Link href="/" className="nav-logo">
          SVR<span>Dev</span>
        </Link>
        <nav aria-label="Navigare principală" className="nav-links">
          <ul>
            {NAV.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <a
          className="nav-cta"
          href={CONTACT.telegram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Scrie-ne pe Telegram"
        >
          <FaTelegramPlane aria-hidden="true" />
          <span>Scrie-ne</span>
        </a>
      </div>
    </header>
  );
}
