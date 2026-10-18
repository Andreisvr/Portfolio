import JsonLd from "./json-ld";

export type FaqItem = { q: string; a: string };

export default function Faq({ items, title = "Întrebări frecvente" }: { items: FaqItem[]; title?: string }) {
  return (
    <section className="faq" aria-labelledby="faq-title">
      <h2 id="faq-title" className="section-title" data-reveal>
        {title}
      </h2>
      <div className="faq-list">
        {items.map((it) => (
          <details key={it.q} className="faq-item" data-reveal>
            <summary>
              <h3>{it.q}</h3>
            </summary>
            <p>{it.a}</p>
          </details>
        ))}
      </div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: items.map((it) => ({
            "@type": "Question",
            name: it.q,
            acceptedAnswer: { "@type": "Answer", text: it.a },
          })),
        }}
      />
    </section>
  );
}
