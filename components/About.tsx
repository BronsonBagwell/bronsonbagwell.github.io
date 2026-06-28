"use client";

import { motion } from "framer-motion";
import { profile } from "@/lib/data";
import { reveal } from "@/lib/utils";
import Marquee from "./ui/Marquee";
import ScrambleText from "./ui/ScrambleText";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container about-grid">
        <div className="about-copy">
          <motion.p className="eyebrow" {...reveal()}>
            <span className="sl">/</span> <ScrambleText text="about" />
          </motion.p>
          <motion.h2 className="section-title" {...reveal(0.05)}>
            The short version.
          </motion.h2>
          <motion.p className="lede" {...reveal(0.1)}>
            {profile.aboutLede}
          </motion.p>
          <motion.p className="body-text" {...reveal(0.15)}>
            {profile.aboutBody}
          </motion.p>
          <motion.ul className="facts" {...reveal(0.2)}>
            {profile.facts.map((f) => (
              <li key={f.k}>
                <span className="fact-k">{f.k}</span>
                <span className="fact-v">{f.v}</span>
              </li>
            ))}
          </motion.ul>
        </div>

      </div>

      <div className="container">
        <Marquee items={profile.skills} />
      </div>
    </section>
  );
}
