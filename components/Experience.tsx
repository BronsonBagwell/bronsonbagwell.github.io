"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data";
import { reveal } from "@/lib/utils";
import ScrambleText from "./ui/ScrambleText";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <motion.p className="eyebrow" {...reveal()}>
          <span className="sl">/</span> <ScrambleText text="experience" />
        </motion.p>
        <motion.h2 className="section-title" {...reveal(0.05)}>
          Where I&apos;ve worked.
        </motion.h2>

        <ol className="timeline">
          {experience.map((job, i) => (
            <motion.li className="t-item" key={job.org} {...reveal(i * 0.08)}>
              <span className="t-date">{job.date}</span>
              <div className="t-body glass">
                <h3 className="t-role">{job.role}</h3>
                <p className="t-org">{job.org}</p>
                <p className="t-desc">{job.desc}</p>
                <ul className="tags">
                  {job.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
