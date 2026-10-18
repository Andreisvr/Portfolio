import Link from "next/link";
import {
  FaCogs,
  FaCode,
  FaChartLine,
  FaNetworkWired,
  FaProjectDiagram,
  FaRobot,
  FaWarehouse,
  FaTelegramPlane,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";
import ProjectsTimeline from "./timeline";
import CrmSection from "./crm-section";
import ErpTeaser from "./erp-teaser";
import AdsTeaser from "./ads-teaser";
import HowWeWork from "./how-we-work";
import VideoBackground from "./video-background";
import { CONTACT } from "../lib/site";

export default function Hero() {
  return (
    <div className="hero">
      {/* VIDEO — ping-pong: merge înainte, apoi înapoi, fără tăietură vizibilă */}
      <VideoBackground />

      <div className="overlay">
        {/* BRAND — server-rendered, CSS animation = LCP rapid */}
        <section className="brand animate-fade-up" aria-labelledby="home-title">
          <h1 id="home-title" className="brand-title">
            SVR Dev
            <span className="brand-tagline">
              Dezvoltare web, CRM la comandă și automatizări business în Moldova
            </span>
          </h1>

          <ul className="services">
            <li className="service-item">
              <FaProjectDiagram aria-hidden="true" />
              <Link href="/crm-la-comanda" className="service-item-link">
                CRM la comandă cu integrări specifice
              </Link>
            </li>
            <li className="service-item">
              <FaWarehouse aria-hidden="true" />
              <Link href="/erp-retail" className="service-item-link">
                ERP pentru retail — alternativă la 1C
              </Link>
            </li>
            <li className="service-item">
              <FaNetworkWired aria-hidden="true" />
              <Link href="/integrari">Integrare între sisteme</Link>
            </li>
            <li className="service-item">
              <FaCogs aria-hidden="true" />
              <span>Automatizări procese business</span>
            </li>
            <li className="service-item">
              <FaRobot aria-hidden="true" />
              <span>Soft la cerere, Telegram Bot, sisteme interne pentru personal</span>
            </li>
            <li className="service-item">
              <FaCode aria-hidden="true" />
              <span>Website-uri, magazine online & mentenanță</span>
            </li>
            <li className="service-item">
              <FaChartLine aria-hidden="true" />
              <Link href="/targeting" className="service-item-link">
                Targeting Meta, Google & YouTube + SEO
              </Link>
            </li>
          </ul>
        </section>

        {/* DESKTOP CONTACTS */}
        <div className="leftProjects animate-fade-up-delayed">
          <nav className="contacts desktop" aria-label="Contact rapid">
            <a href={`mailto:${CONTACT.email}`} aria-label="Trimite email">
              <FaEnvelope aria-hidden="true" />
            </a>
            <a
              href={CONTACT.telegram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contactează pe Telegram"
            >
              <FaTelegramPlane aria-hidden="true" />
            </a>
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contactează pe WhatsApp"
            >
              <FaWhatsapp aria-hidden="true" />
            </a>
          </nav>
        </div>

        <ProjectsTimeline />

        <CrmSection />

        <ErpTeaser />

        <AdsTeaser />

        <HowWeWork />
      </div>
    </div>
  );
}
