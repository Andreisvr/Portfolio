/** Fundal animat pentru paginile interioare (fără video — încărcare rapidă). */
export default function PageBackdrop() {
  return (
    <div className="page-backdrop" aria-hidden="true">
      <div className="crm-blob crm-blob-a" />
      <div className="crm-blob crm-blob-b" />
      <div className="crm-blob crm-blob-c" />
    </div>
  );
}
