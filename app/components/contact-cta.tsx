import { FaTelegramPlane, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { CONTACT } from "../lib/site";

export default function ContactCta({
  title = "Spune-ne ce vrei să automatizezi — îți răspundem pe Telegram.",
  text,
}: {
  title?: string;
  text?: string;
}) {
  return (
    <div className="crm-cta" data-reveal>
      <p className="crm-cta-title">{title}</p>
      {text && <p className="crm-cta-text">{text}</p>}
      <div className="crm-cta-buttons">
        <a href={CONTACT.telegram} target="_blank" rel="noopener noreferrer" className="crm-btn">
          <FaTelegramPlane aria-hidden="true" /> Scrie pe Telegram
        </a>
        <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="crm-btn ghost">
          <FaWhatsapp aria-hidden="true" /> WhatsApp
        </a>
        <a href={`tel:${CONTACT.phone}`} className="crm-btn ghost">
          <FaPhoneAlt aria-hidden="true" /> {CONTACT.phoneDisplay}
        </a>
      </div>
    </div>
  );
}
