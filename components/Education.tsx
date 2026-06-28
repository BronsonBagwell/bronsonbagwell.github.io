"use client";

import { motion } from "framer-motion";
import { education } from "@/lib/data";
import { reveal } from "@/lib/utils";
import ScrambleText from "./ui/ScrambleText";

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <motion.p className="eyebrow" {...reveal()}>
          <span className="sl">/</span> <ScrambleText text="education" />
        </motion.p>
        <motion.h2 className="section-title" {...reveal(0.05)}>
          Background.
        </motion.h2>

        <div className="edu-list">
          {education.map((e, i) => (
            <motion.div className="edu-item glass" key={e.degree} {...reveal(i * 0.08)}>
              <div className="edu-main">
                <h3 className="edu-deg">{e.degree}</h3>
                <p className="edu-school">{e.school}</p>
              </div>
              <span className="edu-date">{e.date}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
