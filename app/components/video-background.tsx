"use client";

import { useRef, useEffect } from "react";

// Versiuni optimizate (public/media): 1080p pe desktop, 720×1280 decupat vertical pe mobil.
// Originalul 4K cântărea 8,6 MB; acum ~0,75 MB desktop / ~0,36 MB mobil.
const MOBILE_QUERY = "(max-width: 768px)";

export default function VideoBackground() {
  const refA = useRef<HTMLVideoElement>(null); // normal
  const refB = useRef<HTMLVideoElement>(null); // inversat

  useEffect(() => {
    const a = refA.current;
    const b = refB.current;
    if (!a || !b) return;

    // Fără video la „reduce motion” sau „economisire date” — rămâne posterul.
    const conn = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || conn?.saveData) return;

    const suffix = window.matchMedia(MOBILE_QUERY).matches ? "mobile" : "1080";
    a.src = `/media/vid1-${suffix}.mp4`;
    a.play().catch(() => {});

    // Videoul inversat se preîncarcă după 5s (videoul principal durează 18s)
    const preloadTimer = setTimeout(() => {
      b.src = `/media/vid1_reversed-${suffix}.mp4`;
      b.preload = "auto";
      b.load();
    }, 5000);

    const onAEnded = () => {
      b.currentTime = 0;
      b.play().catch(() => {});
      a.style.opacity = "0";
      b.style.opacity = "1";
    };

    const onBEnded = () => {
      a.currentTime = 0;
      a.play().catch(() => {});
      b.style.opacity = "0";
      a.style.opacity = "1";
    };

    a.addEventListener("ended", onAEnded);
    b.addEventListener("ended", onBEnded);

    return () => {
      clearTimeout(preloadTimer);
      a.removeEventListener("ended", onAEnded);
      b.removeEventListener("ended", onBEnded);
    };
  }, []);

  return (
    <div className="bgVideoWrap" aria-hidden="true">
      <video ref={refA} className="bgVideo" muted playsInline preload="none" tabIndex={-1} />
      <video
        ref={refB}
        className="bgVideo"
        muted
        playsInline
        preload="none"
        tabIndex={-1}
        style={{ opacity: 0 }}
      />
    </div>
  );
}
