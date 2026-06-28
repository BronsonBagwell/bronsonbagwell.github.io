"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { profile, socials } from "@/lib/data";
import { reveal, asset } from "@/lib/utils";
import ScrambleText from "./ui/ScrambleText";
import { Github, Linkedin, XIcon, Doc, Mail } from "./Icons";

const iconMap: Record<string, (p: { className?: string }) => JSX.Element> = {
  github: Github,
  linkedin: Linkedin,
  x: XIcon,
  resume: Doc,
};

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard
      .writeText(profile.email)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1400);
      })
      .catch(() => {});
  };

  return (
    <section id="contact" className="section contact">
      <div className="container contact-inner">
        <motion.p className="eyebrow" {...reveal()}>
          <span className="sl">/</span> <ScrambleText text="contact" />
        </motion.p>
        <motion.h2 className="contact-title" {...reveal(0.05)}>
          Let&apos;s find the signal.
        </motion.h2>
        <motion.p className="contact-sub" {...reveal(0.1)}>
          Open to new roles, sharp problems, and good teams. The fastest way to reach me is email — I read everything.
        </motion.p>

        <motion.div className="contact-actions" {...reveal(0.15)}>
          <a href={`mailto:${profile.email}`} className="btn btn-primary">
            <Mail /> {profile.email}
          </a>
          <button className="nav-cta" onClick={copy} type="button">
            <span className="copy-label">{copied ? "Copied" : "Copy email"}</span>
          </button>
        </motion.div>

        <motion.div className="socials" {...reveal(0.2)}>
          {socials.map((s) => {
            const Icon = iconMap[s.icon];
            const isPdf = s.href.endsWith(".pdf");
            const href = s.href.startsWith("/") ? asset(s.href) : s.href;
            return (
              <a
                key={s.label}
                href={href}
                className="social"
                target={isPdf ? undefined : "_blank"}
                rel={isPdf ? undefined : "noopener noreferrer"}
                download={isPdf || undefined}
              >
                {Icon && <Icon />} {s.label}
              </a>
            );
          })}
        </motion.div>

        <motion.p className="ref-note" {...reveal(0.25)}>
          References available on request.
        </motion.p>
      </div>
    </section>
  );
}
