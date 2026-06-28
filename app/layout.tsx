import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Atmosphere from "@/components/Atmosphere";
import SmoothScroll from "@/components/SmoothScroll";
import { profile, socials, site } from "@/lib/data";

const display = Space_Grotesk({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-display", display: "swap" });
const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono", display: "swap" });

const description =
  "Bronson Bagwell is a data science & analytics manager in Atlanta focused on marketing measurement, modeling, and AI-assisted reporting that turns complex data into executive-ready decisions.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${profile.name} — ${profile.role}`,
    template: `%s — ${profile.name}`,
  },
  description,
  keywords: ["data science", "data analytics", "marketing measurement", "marketing mix modeling", "MMM", "Python", "SQL", "Power BI", "agentic AI", profile.name, "portfolio"],
  authors: [{ name: profile.name, url: site.url }],
  creator: profile.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: `${profile.name} — Portfolio`,
    title: `${profile.name} — ${profile.role}`,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.role}`,
    description,
  },
  robots: { index: true, follow: true },
};

const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  url: site.url,
  email: `mailto:${profile.email}`,
  address: { "@type": "PostalAddress", addressLocality: profile.location },
  sameAs: socials.filter((s) => s.href && s.href.startsWith("http")).map((s) => s.href),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body>
        <a href="#main" className="skip-link">Skip to content</a>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }} />

        {/* Liquid Glass refraction filters */}
        <svg className="svg-defs" aria-hidden="true">
          <filter id="liquid" x="-25%" y="-25%" width="150%" height="150%">
            <feTurbulence type="fractalNoise" baseFrequency="0.009 0.013" numOctaves={2} seed={11} result="turb">
              <animate attributeName="baseFrequency" dur="18s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.4 0 0.6 1;0.4 0 0.6 1" values="0.009 0.013;0.012 0.017;0.009 0.013" />
            </feTurbulence>
            <feGaussianBlur in="turb" stdDeviation="1.4" result="turbBlur" />
            <feDisplacementMap in="SourceGraphic" in2="turbBlur" scale={52} xChannelSelector="R" yChannelSelector="G" result="disp" />
            <feGaussianBlur in="disp" stdDeviation="0.8" />
          </filter>
          <filter id="liquidSoft" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence type="fractalNoise" baseFrequency="0.012 0.016" numOctaves={2} seed={4} result="t2" />
            <feGaussianBlur in="t2" stdDeviation="1.2" result="t2b" />
            <feDisplacementMap in="SourceGraphic" in2="t2b" scale={20} xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </svg>

        <Atmosphere />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
