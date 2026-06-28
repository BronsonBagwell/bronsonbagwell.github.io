"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { profile } from "@/lib/data";

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [pct, setPct] = useState(0);
  const barRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setPct(100);
      onComplete();
      return;
    }
    let raf = 0;
    let t0 = 0;
    const DUR = 1050;
    const step = (t: number) => {
      if (!t0) t0 = t;
      const p = Math.min(1, (t - t0) / DUR);
      setPct(Math.round(p * 100));
      if (barRef.current) barRef.current.style.width = p * 100 + "%";
      if (p < 1) raf = requestAnimationFrame(step);
      else setTimeout(onComplete, 140);
    };
    raf = requestAnimationFrame(step);
    return () => {
      if (raf) cancelAnimationFrame(raf);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="preloader"
      exit={{ y: "-100%", opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
    >
      <span className="pre-mark">{profile.initials}</span>
      <span className="pre-pct">{pct}%</span>
      <div className="pre-bar">
        <span ref={barRef} />
      </div>
    </motion.div>
  );
}
