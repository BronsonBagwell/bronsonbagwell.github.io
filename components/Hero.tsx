"use client";

import { cn, type CSSVars } from "@/lib/utils";
import { profile } from "@/lib/data";
import StatusLens from "./StatusLens";
import SmoothLink from "./SmoothLink";
import { ArrowRight, ChevronDown } from "./Icons";

export default function Hero({ loaded }: { loaded: boolean }) {
  const d = (i: number): CSSVars => ({ "--d": `${120 + i * 110}ms` });

  return (
    <section id="home" className="hero">
      <div className="orb orb-1" aria-hidden="true" />
      <div className="orb orb-2" aria-hidden="true" />

      <div className="container hero-grid">
        <div className="hero-main">
          <p className={cn("eyebrow up reveal", loaded && "in")} style={d(0)}>
            {profile.name} — {profile.role}
          </p>
          <h1 className={cn("hero-title reveal", loaded && "in")} style={d(1)}>
            {profile.heroTitle}
          </h1>
          <p className={cn("hero-sub reveal", loaded && "in")} style={d(2)}>
            {profile.heroSub}
          </p>
          <div className={cn("hero-actions reveal", loaded && "in")} style={d(3)}>
            <SmoothLink href="#work" className="btn btn-primary">
              View work <ArrowRight />
            </SmoothLink>
            <SmoothLink href="#contact" className="link-arrow">
              Get in touch <span>→</span>
            </SmoothLink>
          </div>
        </div>

        <div className={cn("lens-tilt reveal", loaded && "in")} style={d(4)}>
          <StatusLens />
        </div>
      </div>

      <SmoothLink href="#about" className="scroll-cue" aria-label="Scroll to about">
        <ChevronDown />
      </SmoothLink>
    </section>
  );
}
