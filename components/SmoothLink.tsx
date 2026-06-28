"use client";

import { useLenisInstance } from "./SmoothScroll";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type Props = { href: string; children: ReactNode } & AnchorHTMLAttributes<HTMLAnchorElement>;

export default function SmoothLink({ href, children, ...rest }: Props) {
  const lenis = useLenisInstance();
  const onClick = (e: React.MouseEvent) => {
    if (!href.startsWith("#")) return;
    const el = document.getElementById(href.slice(1));
    if (!el) return;
    e.preventDefault();
    if (lenis) lenis.scrollTo(el, { offset: -64 });
    else window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 64, behavior: "smooth" });
  };
  return (
    <a href={href} {...rest} onClick={onClick}>
      {children}
    </a>
  );
}
