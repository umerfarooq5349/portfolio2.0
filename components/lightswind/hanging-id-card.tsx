"use client";

import React, { useRef, useEffect, useCallback, useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

// ─── Physics constants ────────────────────────────────────────────────────────
const SPRING_K = 0;          // Real pendulum relies on gravity
const DAMPING  = 0.92;       // Air resistance for smooth natural swing
const GRAVITY  = 3000;       // Gravity scalar for snappy momentum
const MASS     = 1;

interface CardPhysicsState {
  angle:  number;   // radians from vertical
  vel:    number;   // angular velocity rad/s
}

export interface HangingIdCardProps {
  children?: React.ReactNode;
  ropeLength?: number;
  ropeColor?: string;
  className?: string;
  name?: string;
  role?: string;
  badgeId?: string;
  accentColor?: string;
  avatarUrl?: string;
}

// ─── 100% Scannable QR Code for https://www.linkedin.com/in/umer-ai-agents/ ──────
const ScannableQRCode = ({ size = 76, color = "#000000", bgColor = "#ffffff" }: { size?: number; color?: string; bgColor?: string }) => (
  <a
    href="https://www.linkedin.com/in/umer-ai-agents/"
    target="_blank"
    rel="noopener noreferrer"
    title="Scan or Click to open LinkedIn Profile"
    className="inline-block p-1.5 rounded-lg bg-white shadow-md border border-white/20 hover:scale-105 transition-transform shrink-0 cursor-pointer pointer-events-auto"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 35 35"
      shapeRendering="crispEdges"
      className="block"
    >
      <path fill={bgColor} d="M0 0h35v35H0z" />
      <path
        stroke={color}
        strokeWidth="1"
        fill="none"
        d="M1 1.5h7m2 0h2m1 0h1m3 0h1m1 0h4m1 0h1m2 0h7M1 2.5h1m5 0h1m2 0h1m1 0h1m3 0h2m1 0h1m2 0h1m2 0h1m1 0h1m5 0h1M1 3.5h1m1 0h3m1 0h1m1 0h1m5 0h3m2 0h4m3 0h1m1 0h3m1 0h1M1 4.5h1m1 0h3m1 0h1m1 0h1m1 0h1m1 0h1m2 0h1m2 0h2m1 0h1m1 0h2m1 0h1m1 0h3m1 0h1M1 5.5h1m1 0h3m1 0h1m1 0h1m1 0h7m3 0h1m1 0h1m3 0h1m1 0h3m1 0h1M1 6.5h1m5 0h1m1 0h5m1 0h1m2 0h3m1 0h1m1 0h2m1 0h1m5 0h1M1 7.5h7m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h7M9 8.5h3m3 0h1m1 0h1m2 0h5M1 9.5h1m1 0h5m2 0h1m2 0h3m1 0h2m1 0h1m2 0h3m1 0h5M1 10.5h1m1 0h1m8 0h1m1 0h1m2 0h4m3 0h1m2 0h2m1 0h2m1 0h1M1 11.5h1m2 0h7m1 0h1m1 0h5m4 0h1m1 0h2m2 0h1m1 0h2M2 12.5h1m2 0h2m4 0h1m1 0h2m2 0h5m2 0h1m1 0h1m2 0h4M5 13.5h4m1 0h4m1 0h1m1 0h1m2 0h7m1 0h3m1 0h2M2 14.5h4m8 0h1m1 0h1m1 0h2m5 0h1m1 0h1m3 0h3M1 15.5h7m1 0h1m1 0h1m2 0h1m3 0h2m1 0h1m1 0h2m2 0h1m4 0h4M1 16.5h1m3 0h1m2 0h1m1 0h1m3 0h3m5 0h1m1 0h1m1 0h2m2 0h2M2 17.5h1m4 0h2m1 0h1m2 0h1m1 0h2m1 0h1m4 0h4m1 0h2m3 0h1M1 18.5h3m1 0h2m1 0h2m2 0h2m1 0h1m3 0h4m1 0h5m1 0h2m1 0h1M1 19.5h1m1 0h8m3 0h3m2 0h1m1 0h2m3 0h4m1 0h1M1 20.5h3m1 0h2m1 0h2m1 0h1m5 0h1m4 0h3m2 0h5m1 0h1M1 21.5h1m4 0h2m2 0h4m1 0h1m3 0h2m1 0h1m2 0h2m1 0h3M1 22.5h1m1 0h4m1 0h2m2 0h3m1 0h3m2 0h1m1 0h5m5 0h1M1 23.5h1m3 0h1m1 0h1m2 0h1m2 0h1m6 0h1m5 0h1m3 0h3M1 24.5h1m1 0h2m7 0h4m1 0h1m2 0h9m2 0h3M1 25.5h1m1 0h1m1 0h1m1 0h3m2 0h3m3 0h3m2 0h1m1 0h5m3 0h1M9 26.5h5m3 0h5m2 0h2m3 0h1m1 0h3M1 27.5h7m3 0h1m1 0h1m2 0h3m4 0h3m1 0h1m1 0h1m1 0h2M1 28.5h1m5 0h1m1 0h2m3 0h1m1 0h1m1 0h2m1 0h1m2 0h2m3 0h4M1 29.5h1m1 0h3m1 0h1m1 0h1m4 0h2m1 0h1m3 0h3m1 0h6m1 0h1M1 30.5h1m1 0h3m1 0h1m1 0h1m1 0h1m1 0h1m1 0h2m1 0h2m2 0h1m1 0h1m1 0h1m2 0h2m2 0h1M1 31.5h1m1 0h3m1 0h1m1 0h1m1 0h2m1 0h5m2 0h8m1 0h2M1 32.5h1m5 0h1m3 0h1m4 0h1m5 0h3m1 0h1m2 0h3M1 33.5h7m1 0h1m1 0h1m2 0h3m1 0h1m4 0h3m2 0h1m3 0h1"
      />
    </svg>
  </a>
);

// ─── SVG Black Lanyard Rope & Metal Lock Clip ──────────────────────────────────
const Lanyard = ({ length, color }: { length: number; color: string }) => {
  const clampY = length;
  const ringY = length + 10;
  const hookY = length + 18;

  return (
    <svg
      width="44"
      height={length + 38}
      viewBox={`0 0 44 ${length + 38}`}
      style={{ display: "block", margin: "0 auto", overflow: "visible" }}
    >
      <defs>
        {/* Metal clamp & ring gradient */}
        <linearGradient id="metalDark" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#71717a" />
          <stop offset="35%" stopColor="#27272a" />
          <stop offset="70%" stopColor="#52525b" />
          <stop offset="100%" stopColor="#18181b" />
        </linearGradient>

        {/* Hook gradient */}
        <linearGradient id="hookDark" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#52525b" />
          <stop offset="40%" stopColor="#18181b" />
          <stop offset="100%" stopColor="#3f3f46" />
        </linearGradient>

        {/* Ribbon fabric texture shading */}
        <linearGradient id="strapHighlight" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#000000" stopOpacity="0.45" />
          <stop offset="25%" stopColor="#ffffff" stopOpacity="0.12" />
          <stop offset="75%" stopColor="#ffffff" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.5" />
        </linearGradient>
      </defs>

      {/* Main Lanyard Ribbon Strap */}
      <rect
        x="12"
        y="0"
        width="20"
        height={clampY + 4}
        rx="2"
        fill={color || "#18181b"}
      />
      {/* Strap fabric depth shading */}
      <rect
        x="12"
        y="0"
        width="20"
        height={clampY + 4}
        rx="2"
        fill="url(#strapHighlight)"
      />

      {/* Strap side stitch lines */}
      <line
        x1="13.5"
        y1="0"
        x2="13.5"
        y2={clampY + 4}
        stroke="#ffffff"
        strokeOpacity="0.15"
        strokeWidth="0.75"
        strokeDasharray="3 2"
      />
      <line
        x1="30.5"
        y1="0"
        x2="30.5"
        y2={clampY + 4}
        stroke="#ffffff"
        strokeOpacity="0.15"
        strokeWidth="0.75"
        strokeDasharray="3 2"
      />

      {/* Metallic Ribbon Crimp Clamp (Base of Strap) */}
      <rect
        x="10"
        y={clampY}
        width="24"
        height="10"
        rx="2.5"
        fill="url(#metalDark)"
        stroke="#18181b"
        strokeWidth="0.8"
      />
      {/* Metallic Screws/Rivets on Clamp */}
      <circle cx="13.5" cy={clampY + 5} r="1.3" fill="#a1a1aa" />
      <circle cx="30.5" cy={clampY + 5} r="1.3" fill="#a1a1aa" />

      {/* Swivel Ring Loop */}
      <path
        d={`M 15 ${clampY + 9} C 15 ${ringY + 6}, 29 ${ringY + 6}, 29 ${clampY + 9}`}
        fill="none"
        stroke="url(#metalDark)"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Swivel Joint */}
      <rect
        x="19"
        y={ringY + 2}
        width="6"
        height="6"
        rx="1"
        fill="url(#metalDark)"
      />

      {/* Metal Snap Hook / Lock Clip */}
      <path
        d={`M 20 ${ringY + 7} 
           L 20 ${hookY + 6} 
           C 20 ${hookY + 15}, 24 ${hookY + 15}, 24 ${hookY + 6} 
           L 24 ${ringY + 7}`}
        fill="none"
        stroke="url(#hookDark)"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      
      {/* Spring Clip Latch Lever */}
      <line
        x1="20.5"
        y1={hookY + 1}
        x2="20.5"
        y2={hookY + 10}
        stroke="#d4d4d8"
        strokeWidth="1.2"
      />
    </svg>
  );
};

// ─── Main Component ───────────────────────────────────────────────────────────
export const HangingIdCard = ({
  children,
  ropeLength  = 120,
  ropeColor   = "#18181b",
  className,
  name        = "Muhammad Umer Farooq",
  role        = "CRM & Automation Expert",
  badgeId     = "MUF-89240-CRM",
  accentColor = "#ECB365",
  avatarUrl   = "/hero-portrait.png",
}: HangingIdCardProps) => {
  const physRef      = useRef<CardPhysicsState>({ angle: 0, vel: 0 });
  const rafRef       = useRef<number | null>(null);
  const prevTimeRef  = useRef<number | null>(null);
  const prevAngleRef = useRef<number>(0);
  const isDraggingRef= useRef(false);

  const [angle, setAngle] = useState(0);
  const [, setIsDragState] = useState(false);
  const dragStartX   = useRef(0);
  const dragAngle0   = useRef(0);

  // ── Physics loop ────────────────────────────────────────────────────────────
  const tick = useCallback((now: number) => {
    if (prevTimeRef.current === null) { prevTimeRef.current = now; }
    const dt = Math.min((now - prevTimeRef.current) / 1000, 0.05); // cap at 50ms
    prevTimeRef.current = now;

    const s = physRef.current;
    if (!isDraggingRef.current) {
      // Realistic pendulum: L is approximate center of mass
      const L = ropeLength + 100; 
      const torque =
        -(GRAVITY / L)    * Math.sin(s.angle) -
        (DAMPING  / MASS) * s.vel             -
        (SPRING_K / MASS) * s.angle;

      s.vel   += torque * dt;
      s.angle += s.vel  * dt;

      setAngle(s.angle);

      if (Math.abs(s.angle) > 0.001 || Math.abs(s.vel) > 0.001) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        // settled perfectly at bottom
        s.angle = 0; s.vel = 0;
        setAngle(0);
      }
    } else {
      // Track velocity while dragging so we can "flick" it
      if (dt > 0) {
        s.vel = (s.angle - prevAngleRef.current) / dt;
      }
      prevAngleRef.current = s.angle;
      rafRef.current = requestAnimationFrame(tick);
    }
  }, [ropeLength]);

  const startPhysics = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    prevTimeRef.current = null;
    rafRef.current = requestAnimationFrame(tick);
  }, [tick]);

  // ── Pointer events ──────────────────────────────────────────────────────────
  const onPointerDown = useCallback((e: React.PointerEvent) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    isDraggingRef.current = true;
    setIsDragState(true);
    dragStartX.current   = e.clientX;
    dragAngle0.current   = physRef.current.angle;
    prevAngleRef.current = physRef.current.angle;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    prevTimeRef.current = null;
    rafRef.current = requestAnimationFrame(tick);
  }, [tick]);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;
    const dx = e.clientX - dragStartX.current;
    const L = ropeLength + 100; 
    const newAngle = dragAngle0.current - dx / L;
    const clamped  = Math.max(-1.4, Math.min(1.4, newAngle));
    physRef.current.angle = clamped;
    setAngle(clamped);
  }, [ropeLength]);

  const onPointerUp = useCallback((e: React.PointerEvent) => {
    e.currentTarget.releasePointerCapture(e.pointerId);
    isDraggingRef.current = false;
    setIsDragState(false);
  }, []);

  // ── Click impulse (tap) ─────────────────────────────────────────────────────
  const onCardClick = useCallback(() => {
    if (Math.abs(physRef.current.vel) < 0.1 && Math.abs(physRef.current.angle) < 0.05) {
      physRef.current.vel = 4.0; // Give it a satisfying push
      startPhysics();
    }
  }, [startPhysics]);

  useEffect(() => () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); }, []);

  const cardRotateDeg = angle * (180 / Math.PI);

  return (
    <div
      className={cn("inline-flex flex-col items-center select-none h-fit shrink-0 self-center", className)}
      style={{ touchAction: "none" }}
    >
      {/* Ceiling anchor pin */}
      <div
        className="w-3.5 h-3.5 rounded-full shadow-md z-10 relative bg-zinc-900 border border-zinc-700 shrink-0"
      />

      {/* The Pendulum Assembly (Rope + Lock Clip + Card) */}
      <div 
        className="flex flex-col items-center cursor-grab active:cursor-grabbing h-fit shrink-0"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onClick={onCardClick}
        style={{
          transform: `rotate(${cardRotateDeg}deg)`,
          transformOrigin: "top center",
          willChange: "transform",
          marginTop: "-6px"
        }}
      >
        {/* Lanyard Rope with Lock Clip */}
        <div style={{ pointerEvents: "none" }} className="h-fit shrink-0">
          <Lanyard length={ropeLength} color={ropeColor} />
        </div>

        {/* ID Card */}
        <div className="relative w-[260px] sm:w-[295px] h-fit shrink-0 rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-[#162738] text-white pointer-events-none mt-[-16px]">
          {/* Punched Slot Hole for Lanyard Clip */}
          <div className="flex justify-center pt-3 pb-1 bg-zinc-900/90 border-b border-white/10 relative z-20">
            <div className="w-9 h-3 rounded-full bg-black border border-zinc-700 shadow-inner flex items-center justify-center">
              <div className="w-7 h-1.5 rounded-full bg-zinc-950 opacity-90" />
            </div>
          </div>

          {children ?? (
            <div className="flex flex-col">
              {/* Card Header Banner with Blurred Avatar Image Background */}
              <div className="px-5 pt-4 pb-4 flex flex-col items-center gap-2.5 relative overflow-hidden bg-zinc-950">
                {/* Blurred Image Background */}
                {avatarUrl && (
                  <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                    <Image
                      src={avatarUrl}
                      alt=""
                      fill
                      className="object-cover object-center scale-150 blur-xl opacity-60 saturate-150"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-[#162738]" />
                  </div>
                )}

                {/* Security Chip Icon */}
                <div className="absolute top-3 left-3.5 w-7 h-5.5 rounded bg-amber-400/90 border border-amber-500/80 shadow-sm flex items-center justify-center z-10">
                  <div className="w-5 h-3.5 border border-amber-700/40 rounded-[1px] grid grid-cols-2 gap-[1px] p-[1px]">
                    <div className="bg-amber-600/40" />
                    <div className="bg-amber-600/40" />
                    <div className="bg-amber-600/40" />
                    <div className="bg-amber-600/40" />
                  </div>
                </div>

                {/* User Profile Avatar Photo */}
                <div className="flex h-20 w-20 sm:h-22 sm:w-22 items-center justify-center rounded-full overflow-hidden border-2 border-white/40 shadow-2xl mt-1 bg-zinc-800 relative z-10 shrink-0">
                  {avatarUrl ? (
                    <Image
                      src={avatarUrl}
                      alt={name}
                      width={88}
                      height={88}
                      className="w-full h-full object-cover object-center"
                    />
                  ) : (
                    <svg className="w-10 h-10 text-white/90" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  )}
                </div>
              </div>

              {/* Card Body */}
              <div className="bg-[#162738] px-5 py-4.5 flex flex-col items-center gap-2">
                <p className="text-base sm:text-lg font-bold text-white text-center leading-snug font-heading">
                  {name}
                </p>
                <p className="text-xs sm:text-sm text-[var(--ice)]/85 font-medium text-center">
                  {role}
                </p>

                <div className="my-1.5 w-full border-t border-white/10" />

                {/* 100% Scannable Large QR Code + Barcode Combo */}
                <div className="w-full flex items-center justify-between gap-3 px-1">
                  {/* Real Scannable QR Code (Links to LinkedIn profile) */}
                  <ScannableQRCode size={76} color="#000000" bgColor="#ffffff" />

                  {/* Barcode & Serial Number */}
                  <div className="flex flex-col items-end grow justify-center space-y-1">
                    <div className="flex gap-[2px] items-end h-7 w-full justify-end">
                      {Array.from({ length: 20 }).map((_, i) => (
                        <div
                          key={i}
                          className="bg-zinc-200 rounded-[1px]"
                          style={{
                            width: i % 3 === 0 ? "3px" : "1.5px",
                            height: `${55 + Math.sin(i * 1.4) * 35}%`,
                          }}
                        />
                      ))}
                    </div>
                    <p
                      className="text-[11px] font-mono font-bold tracking-widest"
                      style={{ color: accentColor }}
                    >
                      {badgeId}
                    </p>
                    <span className="text-[9px] font-mono text-zinc-400">SCAN &bull; LINKEDIN</span>
                  </div>
                </div>

                {/* Status badge */}
                <div
                  className="mt-1 px-4 py-1 rounded-full text-[10px] font-bold text-black uppercase tracking-widest shadow-md"
                  style={{ background: accentColor }}
                >
                  ACTIVE SPECIALIST
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Drag / Scan hint */}
      <p className="mt-6 text-[11px] text-zinc-400 font-medium select-none pointer-events-none text-center">
        Scan QR Code to open LinkedIn profile &bull; Drag to swing
      </p>
    </div>
  );
};

export default HangingIdCard;
