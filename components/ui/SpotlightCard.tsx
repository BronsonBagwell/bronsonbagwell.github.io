"use client";

import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export default function SpotlightCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--cx", `${e.clientX - r.left}px`);
    el.style.setProperty("--cy", `${e.clientY - r.top}px`);
  };

  return (
    <div ref={ref} className={className} onPointerMove={onMove}>
      <span className="card-glow" aria-hidden="true" />
      {children}
    </div>
  );
}
