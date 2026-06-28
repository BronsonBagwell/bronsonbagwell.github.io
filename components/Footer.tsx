"use client";

import { profile } from "@/lib/data";
import SmoothLink from "./SmoothLink";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span className="footer-mid">
          Designed &amp; built with coffee{" "}
          <span className="coffee" aria-hidden="true">
            ☕
            <span className="steam s1" />
            <span className="steam s2" />
            <span className="steam s3" />
          </span>
        </span>
        <SmoothLink href="#home" className="to-top">
          Back to top ↑
        </SmoothLink>
      </div>
    </footer>
  );
}
