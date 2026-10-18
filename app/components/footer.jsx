import Link from "next/link";
import { FaTelegramPlane, FaWhatsapp, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { CONTACT, NAV } from "../lib/site";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <p className="footer-name">SVR Dev</p>
        <p>Dezvoltare web, CRM la comandă, integrări și automatizări business · Chișinău, Moldova</p>
      </div>

      <nav className="footer-links" aria-label="Pagini">
        {NAV.map((l) => (
          <Link key={l.href} href={l.href}>
            {l.label}
          </Link>
        ))}
      </nav>

      <nav className="footer-socials" aria-label="Contact">
        <a href={`mailto:${CONTACT.email}`} aria-label="Trimite email">
          <FaEnvelope aria-hidden="true" />
        </a>
        <a href={CONTACT.telegram} target="_blank" rel="noopener noreferrer" aria-label="Contactează pe Telegram">
          <FaTelegramPlane aria-hidden="true" />
        </a>
        <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Contactează pe WhatsApp">
          <FaWhatsapp aria-hidden="true" />
        </a>
        <a href={`tel:${CONTACT.phone}`} aria-label={`Sună la ${CONTACT.phoneDisplay}`}>
          <FaPhoneAlt aria-hidden="true" />
        </a>
      </nav>

      <div className="footer-copy">
        &copy; {new Date().getFullYear()} SVR Dev. Toate drepturile rezervate.
      </div>
    </footer>
  );
}
