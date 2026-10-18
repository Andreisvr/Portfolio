export type BackdropVariant = "crm" | "erp" | "ads" | "int" | "how" | "nf";

/**
 * Fundal „lichid” pentru paginile interioare: sfere de gradient care curg lent, o auroră
 * care se rotește, o grilă fină și textură de granulație. Doar gradiente + transform
 * (fără filter: blur animat), ca să rămână fluid și pe telefon.
 */
export default function PageBackdrop({ variant = "how" }: { variant?: BackdropVariant }) {
  return (
    <div className={`page-backdrop pb-${variant}`} aria-hidden="true">
      <div className="pb-aurora" />
      <div className="pb-orb pb-orb-1" />
      <div className="pb-orb pb-orb-2" />
      <div className="pb-orb pb-orb-3" />
      <div className="pb-orb pb-orb-4" />
      <div className="pb-grid" />
      <div className="pb-grain" />
      <div className="pb-vignette" />
    </div>
  );
}
