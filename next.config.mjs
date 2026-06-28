// basePath is injected by the GitHub Pages workflow (actions/configure-pages).
// For a project site it becomes "/your-repo-name"; for a <user>.github.io root
// site or local dev it stays empty.
const raw = process.env.NEXT_PUBLIC_PAGES_BASE_PATH || "";
const basePath = raw === "/" ? "" : raw;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
