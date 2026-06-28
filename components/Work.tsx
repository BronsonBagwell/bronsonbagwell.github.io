"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { cn, reveal } from "@/lib/utils";
import SpotlightCard from "./ui/SpotlightCard";
import BorderBeam from "./ui/BorderBeam";
import ScrambleText from "./ui/ScrambleText";
import { Github, External } from "./Icons";

export default function Work() {
  return (
    <section id="work" className="section">
      <div className="container">
        <motion.p className="eyebrow" {...reveal()}>
          <span className="sl">/</span> <ScrambleText text="selected-work" />
        </motion.p>
        <motion.h2 className="section-title" {...reveal(0.05)}>
          Things I&apos;ve built.
        </motion.h2>

        <div className="work-grid">
          {projects.map((p, i) => (
            <motion.div key={p.title} className="work-cell" {...reveal(i * 0.07)}>
              <SpotlightCard className={cn("card glass", p.featured && "card-featured")}>
                {p.featured && <BorderBeam />}
                <div className="card-top">
                  <h3 className="card-title">{p.title}</h3>
                  <div className="card-links">
                    {p.github && (
                      <a href={p.github} aria-label={`${p.title} on GitHub`} target="_blank" rel="noopener noreferrer">
                        <Github />
                      </a>
                    )}
                    {p.demo && (
                      <a href={p.demo} aria-label={`${p.title} live demo`} target="_blank" rel="noopener noreferrer">
                        <External />
                      </a>
                    )}
                  </div>
                </div>
                <p className="card-desc">{p.desc}</p>
                <ul className="tags">
                  {p.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
