"use client";

import { useState } from "react";
import { AnimatePresence, MotionConfig } from "framer-motion";
import Preloader from "@/components/Preloader";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Work from "@/components/Work";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <MotionConfig reducedMotion="user">
      <AnimatePresence>
        {!loaded && <Preloader key="preloader" onComplete={() => setLoaded(true)} />}
      </AnimatePresence>

      <Nav />
      <main id="main" tabIndex={-1}>
        <Hero loaded={loaded} />
        <Stats />
        <About />
        <Experience />
        <Work />
        <Education />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  );
}
