"use client";

import { useRef, useEffect, useCallback, useMemo, CSSProperties } from "react";
import "./DotGrid.css";

function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const m = hex.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
  if (!m) return { r: 184, g: 219, b: 217 };
  return {
    r: parseInt(m[1], 16),
    g: parseInt(m[2], 16),
    b: parseInt(m[3], 16),
  };
}

export interface DotGridProps {
  dotSize?: number;
  gap?: number;
  baseColor?: string;
  activeColor?: string;
  proximity?: number;
  speedTrigger?: number;
  shockRadius?: number;
  shockStrength?: number;
  maxSpeed?: number;
  resistance?: number;
  returnDuration?: number;
  className?: string;
  style?: CSSProperties;
}

interface DotItem {
  cx: number;
  cy: number;
  xOffset: number;
  yOffset: number;
  vx: number;
  vy: number;
}

export function DotGrid({
  dotSize = 6,
  gap = 22,
  baseColor = "rgba(184, 219, 217, 0.22)",
  activeColor = "#ECB365",
  proximity = 140,
  speedTrigger = 80,
  shockRadius = 250,
  shockStrength = 4,
  maxSpeed = 3000,
  className = "",
  style,
}: DotGridProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotsRef = useRef<DotItem[]>([]);
  const pointerRef = useRef({
    x: -1000,
    y: -1000,
    lastX: -1000,
    lastY: -1000,
    lastTime: 0,
  });

  const baseRgb = useMemo(() => hexToRgb(baseColor.startsWith("#") ? baseColor : "#B8DBD9"), [baseColor]);
  const activeRgb = useMemo(() => hexToRgb(activeColor.startsWith("#") ? activeColor : "#ECB365"), [activeColor]);

  // Full-bleed grid calculation ensuring 100% screen coverage without gaps
  const buildGrid = useCallback(() => {
    const wrap = wrapperRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;

    const { width, height } = wrap.getBoundingClientRect();
    if (width === 0 || height === 0) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = "100%";
    canvas.style.height = "100%";

    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    const cell = dotSize + gap;
    // Add extra padding columns and rows so grid covers full bleed edge-to-edge
    const cols = Math.ceil(width / cell) + 4;
    const rows = Math.ceil(height / cell) + 4;

    const startX = (width - (cols - 1) * cell) / 2;
    const startY = (height - (rows - 1) * cell) / 2;

    const dots: DotItem[] = [];
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        dots.push({
          cx: startX + x * cell,
          cy: startY + y * cell,
          xOffset: 0,
          yOffset: 0,
          vx: 0,
          vy: 0,
        });
      }
    }
    dotsRef.current = dots;
  }, [dotSize, gap]);

  useEffect(() => {
    let rafId: number;
    let isVisible = true;
    let isRunning = false;
    let needsRender = true;
    const radius = dotSize / 2;
    const proxSq = proximity * proximity;

    // IntersectionObserver offscreen pause for zero battery/GPU drain when out of viewport
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        isVisible = entry.isIntersecting;
        if (isVisible && !isRunning) {
          needsRender = true;
          startLoop();
        }
      },
      { threshold: 0.02 }
    );

    if (wrapperRef.current) {
      observer.observe(wrapperRef.current);
    }

    const startLoop = () => {
      if (isRunning) return;
      isRunning = true;
      rafId = requestAnimationFrame(render);
    };

    const render = () => {
      if (!isVisible || !canvasRef.current) {
        isRunning = false;
        return;
      }

      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

        const { x: px, y: py } = pointerRef.current;
        const dots = dotsRef.current;

        const baseDotsPath = new Path2D();
        let hasBaseDots = false;
        let totalKineticEnergy = 0;
        let activeDotsCount = 0;

        for (let i = 0; i < dots.length; i++) {
          const dot = dots[i];

          // Ultra-fast spring physics computation
          dot.vx += (0 - dot.xOffset) * 0.08;
          dot.vy += (0 - dot.yOffset) * 0.08;
          dot.vx *= 0.84; // Spring damping
          dot.vy *= 0.84;
          dot.xOffset += dot.vx;
          dot.yOffset += dot.vy;

          totalKineticEnergy += Math.abs(dot.vx) + Math.abs(dot.vy) + Math.abs(dot.xOffset) + Math.abs(dot.yOffset);

          const ox = dot.cx + dot.xOffset;
          const oy = dot.cy + dot.yOffset;

          const dx = dot.cx - px;
          const dy = dot.cy - py;
          const dsq = dx * dx + dy * dy;

          if (dsq <= proxSq) {
            activeDotsCount++;
            const dist = Math.sqrt(dsq);
            const t = Math.pow(1 - dist / proximity, 1.5);
            const r = Math.round(baseRgb.r + (activeRgb.r - baseRgb.r) * t);
            const g = Math.round(baseRgb.g + (activeRgb.g - baseRgb.g) * t);
            const b = Math.round(baseRgb.b + (activeRgb.b - baseRgb.b) * t);
            const alpha = 0.3 + 0.7 * t;

            ctx.beginPath();
            ctx.arc(ox, oy, radius * (1 + 0.4 * t), 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${r},${g},${b},${alpha})`;
            ctx.fill();
          } else {
            baseDotsPath.moveTo(ox + radius, oy);
            baseDotsPath.arc(ox, oy, radius, 0, Math.PI * 2);
            hasBaseDots = true;
          }
        }

        if (hasBaseDots) {
          ctx.fillStyle = baseColor;
          ctx.fill(baseDotsPath);
        }

        // If dots have settled and pointer is inactive, pause loop until next movement
        if (totalKineticEnergy < 0.05 && activeDotsCount === 0 && px < -100) {
          isRunning = false;
          return;
        }
      }

      rafId = requestAnimationFrame(render);
    };

    // Expose trigger for pointer movement
    (wrapperRef.current as any)?._wakeDotGrid?.();
    const handlePointerWake = () => {
      if (!isRunning && isVisible) {
        startLoop();
      }
    };
    const wrapEl = wrapperRef.current;
    if (wrapEl) {
      wrapEl.addEventListener("pointermove", handlePointerWake, { passive: true });
    }

    startLoop();

    return () => {
      cancelAnimationFrame(rafId);
      observer.disconnect();
      if (wrapEl) {
        wrapEl.removeEventListener("pointermove", handlePointerWake);
      }
    };
  }, [proximity, baseColor, activeRgb, baseRgb, dotSize]);

  // Full window resize listener
  useEffect(() => {
    buildGrid();
    if (typeof window === "undefined") return;

    const handleResize = () => buildGrid();
    window.addEventListener("resize", handleResize, { passive: true });

    if (typeof ResizeObserver !== "undefined" && wrapperRef.current) {
      const ro = new ResizeObserver(buildGrid);
      ro.observe(wrapperRef.current);
      return () => {
        ro.disconnect();
        window.removeEventListener("resize", handleResize);
      };
    }

    return () => window.removeEventListener("resize", handleResize);
  }, [buildGrid]);

  // Pointer interactions with spatial filtering & instant spring impulse
  useEffect(() => {
    const wrap = wrapperRef.current;
    if (!wrap) return;

    const onPointerMove = (e: MouseEvent) => {
      const now = performance.now();
      const pr = pointerRef.current;
      const dt = pr.lastTime ? Math.max(1, now - pr.lastTime) : 16;

      const rect = wrap.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const dx = x - pr.lastX;
      const dy = y - pr.lastY;
      let vx = (dx / dt) * 1000;
      let vy = (dy / dt) * 1000;
      let speed = Math.hypot(vx, vy);

      if (speed > maxSpeed) {
        const scale = maxSpeed / speed;
        vx *= scale;
        vy *= scale;
        speed = maxSpeed;
      }

      pr.lastTime = now;
      pr.lastX = x;
      pr.lastY = y;
      pr.x = x;
      pr.y = y;

      if (speed > speedTrigger) {
        const dots = dotsRef.current;
        // Bounding box filter for ultra-fast performance
        const minX = x - proximity;
        const maxX = x + proximity;
        const minY = y - proximity;
        const maxY = y + proximity;

        for (let i = 0; i < dots.length; i++) {
          const dot = dots[i];
          if (dot.cx >= minX && dot.cx <= maxX && dot.cy >= minY && dot.cy <= maxY) {
            const dist = Math.hypot(dot.cx - x, dot.cy - y);
            if (dist < proximity) {
              const force = (1 - dist / proximity) * 0.15;
              dot.vx += (dot.cx - x) * force + vx * 0.003;
              dot.vy += (dot.cy - y) * force + vy * 0.003;
            }
          }
        }
      }
    };

    const onPointerLeave = () => {
      pointerRef.current.x = -1000;
      pointerRef.current.y = -1000;
    };

    const onClick = (e: MouseEvent) => {
      const rect = wrap.getBoundingClientRect();
      const cx = e.clientX - rect.left;
      const cy = e.clientY - rect.top;

      const dots = dotsRef.current;
      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];
        const dist = Math.hypot(dot.cx - cx, dot.cy - cy);
        if (dist < shockRadius) {
          const falloff = Math.pow(1 - dist / shockRadius, 2);
          const pushX = (dot.cx - cx) * shockStrength * falloff * 0.12;
          const pushY = (dot.cy - cy) * shockStrength * falloff * 0.12;
          dot.vx += pushX;
          dot.vy += pushY;
        }
      }
    };

    wrap.addEventListener("mousemove", onPointerMove, { passive: true });
    wrap.addEventListener("mouseleave", onPointerLeave, { passive: true });
    wrap.addEventListener("click", onClick, { passive: true });

    return () => {
      wrap.removeEventListener("mousemove", onPointerMove);
      wrap.removeEventListener("mouseleave", onPointerLeave);
      wrap.removeEventListener("click", onClick);
    };
  }, [maxSpeed, speedTrigger, proximity, shockRadius, shockStrength]);

  return (
    <div ref={wrapperRef} className={`dot-grid ${className}`} style={style}>
      <canvas ref={canvasRef} className="dot-grid__canvas" />
    </div>
  );
}

export default DotGrid;
