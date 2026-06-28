"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { stats } from "@/lib/data";
import { reveal } from "@/lib/utils";

function Stat({ value, suffix, prefix, label, delay }: { value: number; suffix?: string; prefix?: string; label: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-12%" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setN(value);
      return;
    }
    let raf = 0;
    let t0 = 0;
    const DUR = 1100;
    const step = (t: number) => {
      if (!t0) t0 = t;
      const p = Math.min(1, (t - t0) / DUR);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * value));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <motion.div className="stat" ref={ref} {...reveal(delay)}>
      <div className="stat-num">
        {prefix}
        {n}
        {suffix}
      </div>
      <div className="stat-label">{label}</div>
    </motion.div>
  );
}

export default function Stats() {
  return (
    <section className="stats-section" aria-label="By the numbers">
      <div className="container">
        <div className="stats glass">
          {stats.map((s, i) => (
            <Stat key={s.label} value={s.value} suffix={s.suffix} prefix={s.prefix} label={s.label} delay={i * 0.06} />
          ))}
        </div>
      </div>
    </section>
  );
}
