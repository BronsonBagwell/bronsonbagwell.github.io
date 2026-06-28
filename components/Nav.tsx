"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { profile } from "@/lib/data";
import { useLenisInstance } from "./SmoothScroll";

const links: ReadonlyArray<readonly [string, string]> = [
  ["About", "about"],
  ["Experience", "experience"],
  ["Work", "work"],
  ["Education", "education"],
  ["Contact", "contact"],
];

export default function Nav() {
  const lenis = useLenisInstance();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    document.querySelectorAll("main section[id]").forEach((s) => obs.observe(s));

    return () => {
      window.removeEventListener("scroll", onScroll);
      obs.disconnect();
    };
  }, []);

  // Body scroll lock + focus trap while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) return;
    const menuEl = menuRef.current;
    const focusables = menuEl ? Array.from(menuEl.querySelectorAll<HTMLElement>("a, button")) : [];
    focusables[0]?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        btnRef.current?.focus();
      } else if (e.key === "Tab" && focusables.length) {
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const go = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    if (lenis) lenis.scrollTo(el, { offset: -64 });
    else window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 64, behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
      <header className={cn("nav", scrolled && "scrolled")}>
        <div className="nav-inner">
          <a href="#home" className="brand" onClick={(e) => go(e, "home")} aria-label="Home">
            <span className="brand-mark">{profile.initials}</span>
          </a>
          <nav className="nav-links" aria-label="Primary">
            {links.map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => go(e, id)}
                className={cn("nav-link", active === id && "active")}
                aria-current={active === id ? "page" : undefined}
              >
                {label}
              </a>
            ))}
          </nav>
          <a href="#contact" className="nav-cta" onClick={(e) => go(e, "contact")}>
            Get in touch
          </a>
          <button
            ref={btnRef}
            className={cn("menu-btn", open && "open")}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <div className={cn("menu", open && "open")} ref={menuRef}>
        {links.map(([label, id], i) => (
          <a key={id} href={`#${id}`} onClick={(e) => go(e, id)}>
            <span className="mi">/0{i + 1}</span>
            {label}
          </a>
        ))}
      </div>
    </>
  );
}
