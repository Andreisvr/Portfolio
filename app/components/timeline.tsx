import Image from "next/image";
import {
  FaCar,
  FaDumbbell,
  FaBoxes,
  FaLink,
  FaHome,
  FaShoppingCart,
  FaFish,
  FaPaintRoller,
  FaShip,
  FaArrowRight,
} from "react-icons/fa";

type MainProject = {
  title: string;
  desc: string;
  link: string;
  /** logo extras de pe site-ul proiectului (public/projects) */
  logo: string;
  /** logo lat (wordmark) — se afișează pe toată lățimea insignei */
  wideLogo?: boolean;
  /** motiv mare, decolorat, în colțul cardului */
  motif: React.ReactNode;
  /** culoarea brandului proiectului */
  accent: string;
  tags: string[];
  isNew?: boolean;
  subLinks?: { name: string; url: string }[];
};

type OtherProject = {
  title: string;
  links: { name: string; url: string }[];
};

type Project = MainProject | OtherProject;

const projects: MainProject[] = [
  {
    title: "FirIntins.md",
    desc: "Magazin online de articole pentru pescuit, RO/RU. Catalog cu categorii nelimitate, variante cu preț, stoc și poză proprie, căutare după denumiri regionale, panou de administrare complet, comenzi, SEO tehnic și analytics cu acord cookies.",
    link: "https://firintins.md",
    logo: "/projects/firintins.webp",
    motif: <FaFish aria-hidden="true" />,
    accent: "#2f8bff",
    tags: ["Magazin online", "Admin panel", "RO / RU", "SEO"],
    isNew: true,
  },
  {
    title: "Kolor Expert",
    desc: "Website pentru partenerul oficial Köber în Moldova — vopsele, emailuri și tencuieli decorative. Catalog de produse, comandă rapidă, pagini RO/RU, design cu identitate proprie (gradient „păun” din logo).",
    link: "https://kolor.md",
    logo: "/projects/kolor.webp",
    motif: <FaPaintRoller aria-hidden="true" />,
    accent: "#c13cff",
    tags: ["Catalog", "Comenzi", "RO / RU", "Branding"],
    isNew: true,
  },
  {
    title: "DLT Logistic",
    desc: "Site pentru companie de import și logistică China – Moldova: sourcing, control de calitate, transport multimodal (FCL, LCL, feroviar, aerian), vămuire și livrare door-to-door.",
    link: "https://www.dltlogistics.md",
    logo: "/projects/dlt.webp",
    motif: <FaShip aria-hidden="true" />,
    accent: "#e0a526",
    tags: ["Website corporativ", "RO / RU", "Formular cereri"],
    isNew: true,
  },
  {
    title: "Promauto",
    desc: "Website parcare auto + CRM propriu (PromCRM) în locul amoCRM: leaduri din site și Meta, telefonie Orange, notificări Telegram, acte generate automat, bază de date securizată, program de extragere date clienți potențiali.",
    link: "https://promauto.md",
    logo: "/projects/promauto.webp",
    motif: <FaCar aria-hidden="true" />,
    accent: "#8bd317",
    tags: ["Website", "CRM propriu", "Telegram", "Meta", "Telefonie"],
  },
  {
    title: "Gamma",
    desc: "CRM propriu + ERP pentru stocuri: leaduri din landinguri, TikTok și magazinul online, telefonie Moldcell, SMS, urmărire livrări EVS, comenzi sincronizate cu depozitul, analiză pe operatori, landing pages pentru produse.",
    link: "https://www.gamma.md",
    logo: "/projects/gamma.webp",
    motif: <FaBoxes aria-hidden="true" />,
    accent: "#3ee08f",
    tags: ["CRM", "ERP stocuri", "Curierat", "Landinguri"],
  },
  {
    title: "Grabovsky.fit",
    desc: "Pagină personală pentru servicii de antrenament, integrată cu Telegram și sistem de plată. Colaborare cu Balkan Pharmaceutics pentru curs de antrenamente.",
    link: "https://grabovsky.fit",
    logo: "/projects/grabovsky.webp",
    motif: <FaDumbbell aria-hidden="true" />,
    accent: "#ffc21a",
    tags: ["Landing", "Plăți", "Telegram"],
    subLinks: [
      {
        name: "Curs Vara 2026 × Balkan Pharmaceutics",
        url: "https://grabovsky.fit/vara_2026",
      },
    ],
  },
  {
    title: "PIM.MD",
    desc: "Magazin online complet + integrare CRM, mentenanță continuă, landing pages pentru produse, sistem de catalog și gestiune stocuri.",
    link: "https://www.pim.md/Nostalgia_Catalog/index.html",
    logo: "/projects/pim.webp",
    motif: <FaShoppingCart aria-hidden="true" />,
    accent: "#2d6bff",
    tags: ["Magazin online", "CRM", "Landinguri"],
  },
  {
    title: "Tavanis",
    desc: "Website pentru companie de instalare tavane extensibile. Prezentare servicii, galerie lucrări, formular de contact integrat.",
    link: "https://www.tavanis.online",
    logo: "/projects/tavanis.webp",
    wideLogo: true,
    motif: <FaHome aria-hidden="true" />,
    accent: "#f2b630",
    tags: ["Website", "Galerie", "Formular"],
  },
];

const otherProjects: OtherProject = {
  title: "Alte Proiecte",
  links: [
    // Inițiale
    { name: "VG Construct", url: "https://www.vgconstruct.md" },
    { name: "Uscător Ciorapi", url: "https://www.new.forceshop.online/Uscator_ciorapi/" },
    { name: "Uscător Electric", url: "https://www.new.forceshop.online/Uscator_Electric/" },
    { name: "Scaun Grădină", url: "https://www.new.forceshop.online/Scaun_gradina/" },
    // Ultimele din lista nouă
    { name: "Raft Organizator X", url: "https://www.new.forceshop.online/Raft_organizator_X/index.html" },
    { name: "Taburet Pliabil Copii", url: "https://www.new.forceshop.online/Taburet_pliabil_copii/index.html" },
    { name: "Masă 4 Scaune Pliabile", url: "https://www.new.forceshop.online/Masa_4Scaune_pliabile/" },
    { name: "Suport PC", url: "https://www.new.forceshop.online/Suport_Pc/index.html" },
    { name: "Raft Încălțăminte 5 Polițe", url: "https://www.new.forceshop.online/Raft_incaltaminte_5polite/" },
    { name: "Scaun Pliabil", url: "https://www.new.forceshop.online/Scaun_pliabil/index.html" },
    { name: "Set Mașină 9pcs", url: "https://www.forceshop.online/Set_masina_9pcs/" },
    { name: "Set 19 Ustensile Negru", url: "https://www.new.forceshop.online/Set_19Ustensile_negru/" },
    { name: "Set 3 Tigăi", url: "https://www.new.forceshop.online/Set_3_tigai/" },
    { name: "Cocon Victory", url: "https://www.forceshop.online/Cocon_Victory/index.html" },
    { name: "Castrule", url: "https://www.new.forceshop.online/Castriuli/" },
    { name: "Scrânciob", url: "https://www.forceshop.online/Scranciob/" },
    { name: "Scaun Șezlong", url: "https://www.new.forceshop.online/Scaun_sezlong/index.html" },
    { name: "Clipsă Plasă", url: "https://www.new.forceshop.online/Clipsa_plasa/index.html" },
    { name: "Sapă", url: "https://www.new.forceshop.online/Sapa/index.html" },
    { name: "Suport Căpșuni", url: "https://www.new.forceshop.online/suport_capsuni/index.html" },
    { name: "Mangal cu Roți", url: "https://www.new.forceshop.online/Mangal_cu_roti/index.html" },
    { name: "Mangal 2 Mărimi", url: "https://www.forceshop.online/Mangal_2_Marimi/" },
    { name: "Set Masă Scaune Italia", url: "https://www.forceshop.online/set_masa_scaune_pliabile_italia/" },
    { name: "Set Lounge Terasă", url: "https://www.forceshop.online/set_lounge_terasa/index.html" },
    { name: "Pat Pliabil", url: "https://www.forceshop.online/pat_pliabil/" },
  ],
};

function isMainProject(p: Project): p is MainProject {
  return (p as MainProject).link !== undefined;
}

const allProjects: Project[] = [...projects, otherProjects];

const revealProps = (i: number) => ({
  "data-reveal": "",
  style: { "--d": `${Math.min(i % 2, 1) * 0.1}s` } as React.CSSProperties,
});

function CardHead({ p }: { p: MainProject }) {
  return (
    <>
      <div className="timeline-motif">{p.motif}</div>
      <div className="project-head">
        <div className={`project-logo${p.wideLogo ? " wide" : ""}`}>
          <Image
            src={p.logo}
            alt=""
            width={p.wideLogo ? 160 : 96}
            height={p.wideLogo ? 67 : 96}
          />
        </div>
        {p.isNew && <span className="project-new">Nou</span>}
      </div>
    </>
  );
}

function Tags({ tags }: { tags: string[] }) {
  return (
    <ul className="project-tags">
      {tags.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  );
}

export default function ProjectsTimeline() {
  return (
    <section className="timeline-wrapper" id="proiecte" aria-labelledby="proiecte-title">
      <div className="section-head">
        <span className="crm-kicker">Portofoliu</span>
        <h2 id="proiecte-title" className="section-title">
          Proiecte realizate
        </h2>
        <p className="section-lead">
          Site-uri de prezentare, magazine online, landinguri și sisteme interne pentru companii din
          Moldova — fiecare construit pe nevoile clientului.
        </p>
      </div>
      <div className="timeline">
        {allProjects.map((p, i) => {
          const side = i % 2 === 0 ? "left" : "right";

          if (isMainProject(p) && !p.subLinks) {
            return (
              <a
                key={i}
                className={`timeline-item ${side}`}
                {...revealProps(i)}
                style={{ "--accent": p.accent, ...revealProps(i).style } as React.CSSProperties}
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <CardHead p={p} />
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <Tags tags={p.tags} />
                <span className="project-visit">
                  {new URL(p.link).hostname.replace(/^www\./, "")}
                  <FaArrowRight aria-hidden="true" />
                </span>
              </a>
            );
          }

          if (isMainProject(p) && p.subLinks) {
            return (
              <div
                key={i}
                className={`timeline-item ${side}`}
                {...revealProps(i)}
                style={{ "--accent": p.accent, ...revealProps(i).style } as React.CSSProperties}
              >
                <CardHead p={p} />
                <h3>
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-title-link"
                    aria-label={`Vizitează ${p.title}`}
                  >
                    {p.title}
                  </a>
                </h3>
                <p>{p.desc}</p>
                <Tags tags={p.tags} />
                <ul className="sub-links">
                  {p.subLinks.map((l, j) => (
                    <li key={j}>
                      <a
                        href={l.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {l.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            );
          }

          const other = p as OtherProject;
          return (
            <div
              key={i}
              className={`timeline-item ${side}`}
              {...revealProps(i)}
            >
              <div className="timeline-icon">
                <FaLink aria-hidden="true" />
              </div>
              <h3>{other.title}</h3>
              <ul className="other-projects-links">
                {other.links.map((l, j) => (
                  <li key={j}>
                    <a href={l.url} target="_blank" rel="noopener noreferrer">
                      {l.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
