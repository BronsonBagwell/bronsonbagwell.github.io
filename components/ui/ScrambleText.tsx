"use client";

import { useEffect, useRef, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ-_/<>".split("");

export default function ScrambleText({ text, className }: { text: string; className?: string }) {
  const [out, setOut] = useState(text);
  const started = useRef(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setOut(text);
      return;
    }
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || started.current) return;
          started.current = true;
          let frame = 0;
          const total = text.length * 3 + 8;
          const id = setInterval(() => {
            frame++;
            const revealCount = Math.floor(frame / 3);
            let s = "";
            for (let i = 0; i < text.length; i++) {
              if (i < revealCount || text[i] === " ") s += text[i];
              else s += CHARS[Math.floor(Math.random() * CHARS.length)];
            }
            setOut(s);
            if (frame >= total) {
              clearInterval(id);
              setOut(text);
            }
          }, 30);
        });
      },
      { threshold: 1, rootMargin: "0px 0px -10% 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [text]);

  return (
    <span ref={ref} className={className}>
      {out}
    </span>
  );
}
