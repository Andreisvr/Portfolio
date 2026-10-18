import {
  FaGlobe,
  FaCashRegister,
  FaWarehouse,
  FaProjectDiagram,
  FaTruck,
  FaMobileAlt,
  FaChartLine,
  FaUsers,
} from "react-icons/fa";

// Schema „ERP = centrul de control”: ERP în mijloc, sistemele conectate în jur.
const nodes = [
  { icon: <FaGlobe />, label: "Website & magazin online", sub: "preț, reducere, stoc", color: "#22d3ee" },
  { icon: <FaCashRegister />, label: "POS magazin", sub: "vânzare din stocul real", color: "#ffc21a" },
  { icon: <FaWarehouse />, label: "Depozite", sub: "recepție, transfer, inventar", color: "#3ee08f" },
  { icon: <FaProjectDiagram />, label: "CRM", sub: "comenzi și statusuri", color: "#c13cff" },
  { icon: <FaTruck />, label: "Curierat", sub: "expediere și livrare", color: "#ff7a00" },
  { icon: <FaMobileAlt />, label: "Angajați pe telefon", sub: "scanner cod de bare", color: "#2f8bff" },
  { icon: <FaChartLine />, label: "Rapoarte", sub: "cost real, marjă", color: "#f472b6" },
  { icon: <FaUsers />, label: "Roluri & jurnal", sub: "cine a făcut ce", color: "#a3e635" },
];

// poziția fiecărui nod pe grila 3×3 (centrul = ERP)
const cells = ["1 / 1", "1 / 2", "1 / 3", "2 / 3", "3 / 3", "3 / 2", "3 / 1", "2 / 1"];
// centrele celulelor în viewBox 0..300, pentru liniile spre ERP
const points = [
  [50, 50], [150, 50], [250, 50], [250, 150], [250, 250], [150, 250], [50, 250], [50, 150],
];

export default function ErpHub() {
  return (
    <div className="erp-hub" role="img" aria-label="Schema: ERP-ul în centru, conectat la website, POS, depozite, CRM, curierat, telefoanele angajaților, rapoarte și roluri">
      <svg className="erp-hub-lines" viewBox="0 0 300 300" preserveAspectRatio="none" aria-hidden="true">
        {points.map(([x, y], i) => (
          <line key={i} x1="150" y1="150" x2={x} y2={y} style={{ stroke: nodes[i].color }} />
        ))}
      </svg>
      <div className="erp-hub-core" style={{ gridArea: "2 / 2" }} aria-hidden="true">
        <strong>ERP</strong>
        <span>centrul de control al produselor</span>
      </div>
      {nodes.map((n, i) => (
        <div
          key={n.label}
          className="erp-hub-node"
          aria-hidden="true"
          style={{ gridArea: cells[i], "--c": n.color } as React.CSSProperties}
        >
          <span className="erp-hub-icon">{n.icon}</span>
          <strong>{n.label}</strong>
          <span>{n.sub}</span>
        </div>
      ))}
    </div>
  );
}
