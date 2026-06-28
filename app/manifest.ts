import type { MetadataRoute } from "next";
import { profile } from "@/lib/data";
import { asset } from "@/lib/utils";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${profile.name} — ${profile.role}`,
    short_name: profile.name,
    description: "Personal portfolio",
    start_url: asset("/"),
    display: "standalone",
    background_color: "#070708",
    theme_color: "#070708",
    icons: [
      { src: asset("/icon-192.png"), sizes: "192x192", type: "image/png" },
      { src: asset("/icon-512.png"), sizes: "512x512", type: "image/png" },
    ],
  };
}
