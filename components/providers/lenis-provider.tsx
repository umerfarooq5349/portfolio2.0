"use client";

import { ReactLenis } from "lenis/react";
import { ReactNode } from "react";

export function LenisProvider({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.14,
        wheelMultiplier: 1.25,
        touchMultiplier: 1.2,
        smoothWheel: true,
        syncTouch: false,
        autoRaf: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}

