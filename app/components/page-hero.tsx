import Link from "next/link";
import JsonLd from "./json-ld";
import { absoluteUrl } from "../lib/site";

export default function PageHero({
  path,
  crumb,
  kicker,
  title,
  accent,
  lead,
}: {
  path: string;
  crumb: string;
  kicker: string;
  title: string;
  accent?: string;
  lead: string;
}) {
  return (
    <header className="page-hero">
      <nav aria-label="Breadcrumb" className="breadcrumbs">
        <ol>
          <li>
            <Link href="/">Acasă</Link>
          </li>
          <li aria-current="page">{crumb}</li>
        </ol>
      </nav>
      <span className="crm-kicker">{kicker}</span>
      <h1 className="page-title">
        {title} {accent && <span>{accent}</span>}
      </h1>
      <p className="page-lead">{lead}</p>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Acasă", item: absoluteUrl("/") },
            { "@type": "ListItem", position: 2, name: crumb, item: absoluteUrl(path) },
          ],
        }}
      />
    </header>
  );
}
