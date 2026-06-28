"use client";

import { useEffect, useRef, useState } from "react";
import { profile } from "@/lib/data";

export default function StatusLens() {
  const ref = useRef<HTMLElement>(null);
  const [time, setTime] = useState("--:--");

  useEffect(() => {
    const tick = () =>
      setTime(new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));
    tick();
    const id = setInterval(tick, 15000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      el.style.transform = `rotateX(${-py * 7}deg) rotateY(${px * 9}deg)`;
      el.style.setProperty("--lx", `${(px + 0.5) * 100}%`);
      el.style.setProperty("--ly", `${(py + 0.5) * 100}%`);
    };
    const onLeave = () => {
      el.style.transform = "rotateX(0deg) rotateY(0deg)";
    };
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <>
      <span className="lens-glow" aria-hidden="true" />
      <aside className="lens lg" aria-label="Current status" ref={ref}>
        <span className="lens-sheen" aria-hidden="true" />
        <div className="lens-top">
          <span className="dot" aria-hidden="true" />
          {profile.statusLabel}
        </div>
        <div className="lens-div" aria-hidden="true" />
        <dl className="lens-meta">
          <div>
            <dt>Role</dt>
            <dd>{profile.currentRole}</dd>
          </div>
          <div>
            <dt>Based</dt>
            <dd>{profile.location}</dd>
          </div>
          <div>
            <dt>Local</dt>
            <dd>
              <span className="accent">{time}</span>
            </dd>
          </div>
        </dl>
      </aside>
    </>
  );
}
