"use client";

import { useEffect, useRef } from "react";

export default function Atmosphere() {
  const progRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = window.matchMedia("(pointer: fine)").matches;

    let rafP = 0;
    const updateProgress = () => {
      if (rafP) return;
      rafP = requestAnimationFrame(() => {
        const max = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
        if (progRef.current) progRef.current.style.width = (max ? (window.scrollY / max) * 100 : 0) + "%";
        rafP = 0;
      });
    };
    window.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress();

    const cleanups: Array<() => void> = [
      () => window.removeEventListener("scroll", updateProgress),
      () => rafP && cancelAnimationFrame(rafP),
    ];

    if (fine && !reduce) {
      document.body.classList.add("has-pointer");
      let rafM = 0;
      let tx = window.innerWidth / 2;
      let ty = window.innerHeight * 0.3;
      let mx = tx;
      let my = ty;
      const follow = () => {
        mx += (tx - mx) * 0.16;
        my += (ty - my) * 0.16;
        root.style.setProperty("--mx", mx + "px");
        root.style.setProperty("--my", my + "px");
        if (Math.abs(tx - mx) > 0.4 || Math.abs(ty - my) > 0.4) rafM = requestAnimationFrame(follow);
        else rafM = 0;
      };
      const onMove = (e: PointerEvent) => {
        tx = e.clientX;
        ty = e.clientY;
        if (!rafM) rafM = requestAnimationFrame(follow);
      };
      window.addEventListener("pointermove", onMove, { passive: true });

      // magnetic buttons
      const mags = Array.from(document.querySelectorAll<HTMLElement>(".btn-primary, [data-magnetic]"));
      const magHandlers: Array<[HTMLElement, (e: PointerEvent) => void, () => void]> = [];
      mags.forEach((btn) => {
        const move = (e: PointerEvent) => {
          const r = btn.getBoundingClientRect();
          btn.style.transform =
            "translate(" + (e.clientX - (r.left + r.width / 2)) * 0.18 + "px," + (e.clientY - (r.top + r.height / 2)) * 0.3 + "px)";
        };
        const leave = () => { btn.style.transform = ""; };
        btn.addEventListener("pointermove", move);
        btn.addEventListener("pointerleave", leave);
        magHandlers.push([btn, move, leave]);
      });

      cleanups.push(() => window.removeEventListener("pointermove", onMove));
      cleanups.push(() => rafM && cancelAnimationFrame(rafM));
      cleanups.push(() =>
        magHandlers.forEach(([btn, move, leave]) => {
          btn.removeEventListener("pointermove", move);
          btn.removeEventListener("pointerleave", leave);
        })
      );
    }

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return (
    <>
      <div className="grid-base" aria-hidden="true" />
      <div className="grid-spot" aria-hidden="true" />
      <div className="cursor-glow" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />
      <div className="progress" aria-hidden="true" ref={progRef} />
    </>
  );
}
