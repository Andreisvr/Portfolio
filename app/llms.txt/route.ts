import { integrations } from "../data/integrations";
import { CONTACT, PAGES, SITE_URL, absoluteUrl } from "../lib/site";

export const dynamic = "force-static";

// Rezumat în text simplu pentru agenții AI (convenția /llms.txt).
export function GET() {
  const body = `# SVR Dev

> Studio de dezvoltare software din Chișinău, Moldova: website-uri și magazine online, CRM la comandă, ERP pentru retail (alternativă la 1C), targeting Meta/Google/YouTube, integrări între sisteme (Telegram, Meta, telefonie, curierat, ERP), automatizări business, boți Telegram și SEO. Contact principal: Telegram ${CONTACT.telegram}.

## Pagini

${PAGES.map((p) => `- [${p.title}](${absoluteUrl(p.path)}): ${p.summary}`).join("\n")}

## Integrări realizate în proiecte

${integrations
  .filter((i) => i.status === "done")
  .map((i) => `- ${i.name}: ${i.hint}`)
  .join("\n")}

## Integrări disponibile la cerere

${integrations
  .filter((i) => i.status === "on-demand")
  .map((i) => `- ${i.name}: ${i.hint}`)
  .join("\n")}

## Proiecte

- FirIntins.md (https://firintins.md): magazin online de articole pentru pescuit, RO/RU, panou de administrare.
- Kolor Expert (https://kolor.md): site pentru partenerul oficial Köber în Moldova.
- DLT Logistic (https://www.dltlogistics.md): import și logistică China–Moldova.
- Promauto (https://promauto.md): website parcare auto, catalog, pagini de credit, SEO, Telegram.
- Gamma (https://www.gamma.md): landing pages pentru produse, promovare, mentenanță.
- Grabovsky.fit (https://grabovsky.fit): servicii de antrenament, Telegram și plăți.
- PIM.MD (https://www.pim.md): magazin online, CRM, landinguri.
- Tavanis (https://www.tavanis.online): tavane extensibile.

## Contact

- Telegram: ${CONTACT.telegram}
- WhatsApp: ${CONTACT.whatsapp}
- Telefon: ${CONTACT.phoneDisplay}
- Email: ${CONTACT.email}
- Site: ${SITE_URL}
`;
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
