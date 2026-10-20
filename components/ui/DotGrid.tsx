"use client";

import { useRef, useEffect, useCallback, useMemo, CSSProperties } from "react";
import "./DotGrid.css";

function parseColor(color: string): { r: number; g: number; b: number } {
  const hex = color.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
  if (hex) {
    return {
      r: parseInt(hex[1], 16),
      g: parseInt(hex[2], 16),
      b: parseInt(hex[3], 16),
    };
  }
  const rgba = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);
  if (rgba) {
    return {
      r: parseInt(rgba[1], 10),
      g: parseInt(rgba[2], 10),
      b: parseInt(rgba[3], 10),
    };
  }
  return { r: 184, g: 219, b: 217 };
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
  dotSize = 5,
  gap = 26,
  baseColor = "rgba(184, 219, 217, 0.09)",
  activeColor = "#ECB365",
  proximity = 130,
  speedTrigger = 80,
  shockRadius = 240,
  shockStrength = 4,
  maxSpeed = 3000,
  className = "",
  style,
}: DotGridProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotsRef = useRef<DotItem[]>([]);
  const isRunningRef = useRef(false);
  const isVisibleRef = useRef(true);
  const rafIdRef = useRef<number | null>(null);
  const wrapperRectRef = useRef<DOMRect | null>(null);

  const pointerRef = useRef({
    x: -1000,
    y: -1000,
    lastX: -1000,
    lastY: -1000,
    lastTime: 0,
  });

  const baseRgb = useMemo(() => parseColor(baseColor), [baseColor]);
  const activeRgb = useMemo(() => parseColor(activeColor), [activeColor]);

  // Update cached bounding rectangle to eliminate layout thrashing during mouse movement
  const updateCachedRect = useCallback(() => {
    if (wrapperRef.current) {
      wrapperRectRef.current = wrapperRef.current.getBoundingClientRect();
    }
  }, []);

  // Single-pass render: strictly guarantees each dot is drawn exactly once (zero double-grid artifacts)
  const drawFrame = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const { x: px, y: py } = pointerRef.current;
    const dots = dotsRef.current;
    const radius = dotSize / 2;
    const proxSq = proximity * proximity;

    const baseDotsPath = new Path2D();
    let hasBaseDots = false;
    let activeDotsCount = 0;
    let totalKineticEnergy = 0;

    const isPointerActive = px >= -proximity;

    for (let i = 0; i < dots.length; i++) {
      const dot = dots[i];

      // Physics integration when displaced
      if (dot.xOffset !== 0 || dot.yOffset !== 0 || dot.vx !== 0 || dot.vy !== 0) {
        dot.vx += (0 - dot.xOffset) * 0.08;
        dot.vy += (0 - dot.yOffset) * 0.08;
        dot.vx *= 0.84;
        dot.vy *= 0.84;
        dot.xOffset += dot.vx;
        dot.yOffset += dot.vy;

        totalKineticEnergy +=
          Math.abs(dot.vx) + Math.abs(dot.vy) + Math.abs(dot.xOffset) + Math.abs(dot.yOffset);
      }

      const ox = dot.cx + dot.xOffset;
      const oy = dot.cy + dot.yOffset;

      if (isPointerActive) {
        const dx = ox - px;
        const dy = oy - py;
        const dsq = dx * dx + dy * dy;

        if (dsq <= proxSq) {
          activeDotsCount++;
          const dist = Math.sqrt(dsq);
          const t = Math.pow(1 - dist / proximity, 1.4);
          const r = Math.round(baseRgb.r + (activeRgb.r - baseRgb.r) * t);
          const g = Math.round(baseRgb.g + (activeRgb.g - baseRgb.g) * t);
          const b = Math.round(baseRgb.b + (activeRgb.b - baseRgb.b) * t);
          const alpha = Math.min(1, 0.35 + 0.65 * t);

          ctx.beginPath();
          ctx.arc(ox, oy, radius * (1 + 0.45 * t), 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${r},${g},${b},${alpha})`;
          ctx.fill();
          continue; // Drawn as active dot: DO NOT add to baseDotsPath
        }
      }

      // Inactive dot: drawn in base single-batch path
      baseDotsPath.moveTo(ox + radius, oy);
      baseDotsPath.arc(ox, oy, radius, 0, Math.PI * 2);
      hasBaseDots = true;
    }

    if (hasBaseDots) {
      ctx.fillStyle = baseColor;
      ctx.fill(baseDotsPath);
    }

    return { totalKineticEnergy, activeDotsCount, isPointerActive };
  }, [activeRgb, baseColor, baseRgb, dotSize, proximity]);

  // Dynamic RAF render loop
  const renderLoop = useCallback(() => {
    if (!isVisibleRef.current || !canvasRef.current) {
      isRunningRef.current = false;
      return;
    }

    const state = drawFrame();
    if (!state) {
      isRunningRef.current = false;
      return;
    }

    // Battery & GPU saver: sleep loop when physics settle and pointer is idle
    if (state.totalKineticEnergy < 0.05 && (!state.isPointerActive || state.activeDotsCount === 0)) {
      const dots = dotsRef.current;
      for (let i = 0; i < dots.length; i++) {
        dots[i].xOffset = 0;
        dots[i].yOffset = 0;
        dots[i].vx = 0;
        dots[i].vy = 0;
      }
      // One final crisp resting draw
      drawFrame();
      isRunningRef.current = false;
      return;
    }

    rafIdRef.current = requestAnimationFrame(renderLoop);
  }, [drawFrame]);

  const startLoop = useCallback(() => {
    if (isRunningRef.current || !isVisibleRef.current) return;
    isRunningRef.current = true;
    rafIdRef.current = requestAnimationFrame(renderLoop);
  }, [renderLoop]);

  // Build grid dimensions and dot positions
  const buildGrid = useCallback(() => {
    const wrap = wrapperRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;

    const rect = wrap.getBoundingClientRect();
    wrapperRectRef.current = rect;
    const { width, height } = rect;
    if (width === 0 || height === 0) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = "100%";
    canvas.style.height = "100%";

    const cell = dotSize + gap;
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

    // Draw initial static state
    drawFrame();
  }, [dotSize, drawFrame, gap]);

  // Resize and scroll listeners
  useEffect(() => {
    buildGrid();

    const handleResize = () => {
      buildGrid();
      updateCachedRect();
    };
    const handleScroll = () => {
      // Invalidate cached rect on scroll without triggering synchronous layout reflow
      wrapperRectRef.current = null;
    };

    window.addEventListener("resize", handleResize, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    let ro: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined" && wrapperRef.current) {
      ro = new ResizeObserver(() => {
        buildGrid();
        updateCachedRect();
      });
      ro.observe(wrapperRef.current);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      if (ro) ro.disconnect();
    };
  }, [buildGrid, updateCachedRect]);

  // IntersectionObserver: sleep when out of viewport
  useEffect(() => {
    const wrap = wrapperRef.current;
    if (!wrap) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        isVisibleRef.current = entry.isIntersecting;
        if (isVisibleRef.current) {
          updateCachedRect();
          startLoop();
        } else {
          isRunningRef.current = false;
          if (rafIdRef.current) {
            cancelAnimationFrame(rafIdRef.current);
            rafIdRef.current = null;
          }
        }
      },
      { threshold: 0.01 }
    );

    observer.observe(wrap);

    return () => {
      observer.disconnect();
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = null;
      }
    };
  }, [startLoop, updateCachedRect]);

  // Global window pointer listener: zero layout thrashing
  useEffect(() => {
    const onPointerMove = (e: MouseEvent | TouchEvent) => {
      const wrap = wrapperRef.current;
      if (!wrap || !isVisibleRef.current) return;

      const clientX = "touches" in e ? e.touches[0]?.clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0]?.clientY : e.clientY;
      if (clientX === undefined || clientY === undefined) return;

      let rect = wrapperRectRef.current;
      if (!rect) {
        rect = wrap.getBoundingClientRect();
        wrapperRectRef.current = rect;
      }

      const x = clientX - rect.left;
      const y = clientY - rect.top;

      const isInside =
        x >= -proximity &&
        x <= rect.width + proximity &&
        y >= -proximity &&
        y <= rect.height + proximity;

      if (!isInside) {
        if (pointerRef.current.x !== -1000) {
          pointerRef.current.x = -1000;
          pointerRef.current.y = -1000;
          pointerRef.current.lastX = -1000;
          pointerRef.current.lastY = -1000;
        }
        return;
      }

      startLoop();

      const now = performance.now();
      const pr = pointerRef.current;
      const dt = pr.lastTime ? Math.max(1, now - pr.lastTime) : 16;

      const dx = pr.lastX !== -1000 ? x - pr.lastX : 0;
      const dy = pr.lastY !== -1000 ? y - pr.lastY : 0;
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

      // Apply kinetic impulse to nearby dots if moving fast enough
      if (speed > speedTrigger) {
        const dots = dotsRef.current;
        const boxMinX = x - proximity;
        const boxMaxX = x + proximity;
        const boxMinY = y - proximity;
        const boxMaxY = y + proximity;

        for (let i = 0; i < dots.length; i++) {
          const dot = dots[i];
          if (
            dot.cx >= boxMinX &&
            dot.cx <= boxMaxX &&
            dot.cy >= boxMinY &&
            dot.cy <= boxMaxY
          ) {
            const dist = Math.hypot(dot.cx - x, dot.cy - y);
            if (dist < proximity && dist > 0.1) {
              const force = (1 - dist / proximity) * 0.12;
              dot.vx += (dot.cx - x) * force + vx * 0.002;
              dot.vy += (dot.cy - y) * force + vy * 0.002;
            }
          }
        }
      }
    };

    const onPointerLeave = () => {
      pointerRef.current.x = -1000;
      pointerRef.current.y = -1000;
      pointerRef.current.lastX = -1000;
      pointerRef.current.lastY = -1000;
    };

    const onClick = (e: MouseEvent) => {
      const wrap = wrapperRef.current;
      if (!wrap || !isVisibleRef.current) return;

      let rect = wrapperRectRef.current;
      if (!rect) {
        rect = wrap.getBoundingClientRect();
        wrapperRectRef.current = rect;
      }

      const cx = e.clientX - rect.left;
      const cy = e.clientY - rect.top;

      if (cx < 0 || cx > rect.width || cy < 0 || cy > rect.height) {
        return;
      }

      startLoop();

      const dots = dotsRef.current;
      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];
        const dist = Math.hypot(dot.cx - cx, dot.cy - cy);
        if (dist < shockRadius && dist > 0.1) {
          const falloff = Math.pow(1 - dist / shockRadius, 1.8);
          const pushX = ((dot.cx - cx) / dist) * shockStrength * falloff * 8;
          const pushY = ((dot.cy - cy) / dist) * shockStrength * falloff * 8;
          dot.vx += pushX;
          dot.vy += pushY;
        }
      }
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerdown", onPointerMove, { passive: true });
    window.addEventListener("click", onClick, { passive: true });
    window.addEventListener("mouseleave", onPointerLeave, { passive: true });
    window.addEventListener("touchmove", onPointerMove, { passive: true });
    window.addEventListener("touchend", onPointerLeave, { passive: true });

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerdown", onPointerMove);
      window.removeEventListener("click", onClick);
      window.removeEventListener("mouseleave", onPointerLeave);
      window.removeEventListener("touchmove", onPointerMove);
      window.removeEventListener("touchend", onPointerLeave);
    };
  }, [maxSpeed, proximity, shockRadius, shockStrength, speedTrigger, startLoop]);

  return (
    <div ref={wrapperRef} className={`dot-grid ${className}`} style={style}>
      <canvas ref={canvasRef} className="dot-grid__canvas" />
    </div>
  );
}

export default DotGrid;
