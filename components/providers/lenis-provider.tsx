"use client";

import { ReactLenis } from "lenis/react";
import { ReactNode, useEffect, useState } from "react";

export function LenisProvider({ children }: { children: ReactNode }) {
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Detect touch device or mobile screen to prevent touch hijacking
    const checkTouch = () => {
      setIsTouch(
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        window.innerWidth < 768
      );
    };
    checkTouch();
    window.addEventListener("resize", checkTouch);
    return () => window.removeEventListener("resize", checkTouch);
  }, []);

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.09,
        duration: 1.0,
        smoothWheel: !isTouch,
        syncTouch: false,
        touchMultiplier: 1,
        wheelMultiplier: 1.0,
      }}
    >
      {children}
    </ReactLenis>
  );
}

