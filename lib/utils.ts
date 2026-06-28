import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { CSSProperties } from "react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type CSSVars = CSSProperties & { [key: `--${string}`]: string | number };

// Prefix public-folder links with the GitHub Pages basePath (set by the deploy
// workflow). Empty for local dev / custom domain / Vercel.
export const asset = (p: string) => {
  const raw = (process.env.NEXT_PUBLIC_PAGES_BASE_PATH || "").replace(/\/$/, "");
  const base = raw === "/" ? "" : raw;
  return `${base}${p.startsWith("/") ? p : "/" + p}`;
};

export const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 22, filter: "blur(6px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: true, margin: "0px 0px -7% 0px" },
  transition: {
    duration: 0.8,
    ease: [0.22, 0.61, 0.36, 1] as [number, number, number, number],
    delay,
  },
});
