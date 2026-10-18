"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Animația de apariție la scroll pentru orice element cu [data-reveal].
 * Conținutul rămâne vizibil fără JS (CSS ascunde doar sub `html.js`),
 * deci crawlerele și cititoarele de ecran văd tot textul.
 */
export default function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-in)");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -60px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
