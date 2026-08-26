"use client";

import { SlantedGlassMarquee } from "@/components/ui/slanted-glass-marquee";
import { DotGrid } from "@/components/ui/DotGrid";
import { TOOLS_DATA } from "@/lib/marquee-tools";

export function TrustedBy() {
  return (
    <section
      aria-label="Tools and Platforms I Work With"
      className="w-full relative z-30 py-10 md:py-14 overflow-visible pointer-events-auto bg-[var(--background)]"
    >
      {/* DotGrid background behind trust bar */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-80 overflow-hidden">
        <DotGrid
          dotSize={6}
          gap={24}
          baseColor="rgba(184, 219, 217, 0.03)"
          activeColor="#ECB365"
          proximity={140}
          shockRadius={260}
          shockStrength={4}
        />
      </div>

      {/* Templifica-Style Slanted Glassmorphic Marquee (-4deg) */}
      <div className="relative z-10">
        <SlantedGlassMarquee
          items={TOOLS_DATA}
          angle={-4}
          speed={1}
          pauseOnHover={true}
        />
      </div>
    </section>
  );
}

export default TrustedBy;
