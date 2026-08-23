"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { MagneticButton } from "@/components/ui/magnetic-button";
import HeroShutterText from "@/components/ui/hero-shutter-text";
import { DotGrid } from "@/components/ui/DotGrid";
import { ArrowRight, CalendarCheck, CheckCircle, Star, Lightning, SpeakerHigh, SpeakerSimpleSlash } from "@phosphor-icons/react";
import { SlantedGlassMarquee, MarqueeItem } from "@/components/ui/slanted-glass-marquee";


const BrandLogos = {
  GoHighLevel: () => (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="text-[#3B82F6] shrink-0">
      <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  ),
  n8n: () => (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="text-[#FF6D5A] shrink-0">
      <circle cx="6" cy="12" r="3" fill="currentColor" />
      <circle cx="18" cy="6" r="3" fill="currentColor" />
      <circle cx="18" cy="18" r="3" fill="currentColor" />
      <path d="M8.5 10.5L15.5 7.5M8.5 13.5L15.5 16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  Zapier: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#FF4F00] shrink-0">
      <path d="M12 2L14.5 9.5H22L16 14L18.5 21.5L12 17L5.5 21.5L8 14L2 9.5H9.5L12 2Z" fill="currentColor" />
    </svg>
  ),
  OpenAI: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#ECB365] shrink-0">
      <path d="M12 2L14.5 7.5L20 8L15.5 12L17 17.5L12 14.5L7 17.5L8.5 12L4 8L9.5 7.5L12 2Z" fill="currentColor" />
    </svg>
  ),
  Make: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#A855F7] shrink-0">
      <rect x="3" y="3" width="7" height="7" rx="2" fill="currentColor" />
      <rect x="14" y="3" width="7" height="7" rx="2" fill="currentColor" />
      <rect x="8.5" y="14" width="7" height="7" rx="2" fill="currentColor" />
    </svg>
  ),
  HubSpot: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#FF7A59] shrink-0">
      <circle cx="12" cy="12" r="4" fill="currentColor" />
      <path d="M12 2V6M12 18V22M2 12H6M18 12H22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  ),
  Stripe: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#635BFF] shrink-0">
      <path d="M13.9 9.1c0-.7-.6-1-1.6-1-1.4 0-3.1.5-4.4 1.3V5.8C9.4 5.1 11.4 4.7 13 4.7c3.4 0 5.6 1.7 5.6 4.7 0 4.6-6.3 3.9-6.3 5.9 0 .8.7 1.1 1.8 1.1 1.6 0 3.6-.7 4.9-1.6v3.7c-1.5.8-3.5 1.2-5.1 1.2-3.6 0-5.9-1.7-5.9-4.8 0-4.9 6.3-4.1 6.3-5.8z" fill="currentColor" />
    </svg>
  ),
  API: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#B8DBD9] shrink-0">
      <path d="M16 18L22 12L16 6M8 6L2 12L8 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

const TOOLS_DATA: MarqueeItem[] = [
  { name: "GoHighLevel", icon: <BrandLogos.GoHighLevel />, color: "#FFFFFF" },
  { name: "n8n Automation", icon: <BrandLogos.n8n />, color: "#FFFFFF" },
  { name: "Zapier Workflows", icon: <BrandLogos.Zapier />, color: "#FFFFFF" },
  { name: "AI Agents & Chatbots", icon: <BrandLogos.OpenAI />, color: "#ECB365" },
  { name: "Make.com Integrations", icon: <BrandLogos.Make />, color: "#FFFFFF" },
  { name: "HubSpot CRM", icon: <BrandLogos.HubSpot />, color: "#FFFFFF" },
  { name: "Stripe & Webhooks", icon: <BrandLogos.Stripe />, color: "#FFFFFF" },
  { name: "Custom API Systems", icon: <BrandLogos.API />, color: "#B8DBD9" },
];

export function HeroScroll() {
  const containerRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const isInView = useInView(containerRef, { amount: 0.3 });

  // Force unmuted audio play on page load & on any initial gesture/movement
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const forceUnmuteAndPlay = () => {
      video.muted = false;
      video.volume = 1.0;
      video
        .play()
        .then(() => setIsMuted(false))
        .catch(() => {
          // If browser policy temporarily blocks unmuted play before interaction, fallback to muted autoplay until first micro-gesture
          video.muted = true;
          setIsMuted(true);
          video.play().catch(() => { });
        });
    };

    // Attempt unmuted playback immediately on page load
    forceUnmuteAndPlay();

    // Aggressively unmute audio on the very first frame of user interaction (mousemove, scroll, touch, click, keydown)
    const handleGesture = () => {
      forceUnmuteAndPlay();
    };

    window.addEventListener("pointerdown", handleGesture, { once: true, capture: true });
    window.addEventListener("mousemove", handleGesture, { once: true, capture: true });
    window.addEventListener("touchstart", handleGesture, { once: true, capture: true });
    window.addEventListener("scroll", handleGesture, { once: true, capture: true });
    window.addEventListener("keydown", handleGesture, { once: true, capture: true });
    window.addEventListener("click", handleGesture, { once: true, capture: true });

    return () => {
      window.removeEventListener("pointerdown", handleGesture, { capture: true });
      window.removeEventListener("mousemove", handleGesture, { capture: true });
      window.removeEventListener("touchstart", handleGesture, { capture: true });
      window.removeEventListener("scroll", handleGesture, { capture: true });
      window.removeEventListener("keydown", handleGesture, { capture: true });
      window.removeEventListener("click", handleGesture, { capture: true });
    };
  }, []);

  // Viewport playback control (Auto play & force unmute whenever scrolled into view)
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isInView) {
      video.muted = false;
      video.volume = 1.0;
      video
        .play()
        .then(() => setIsMuted(false))
        .catch(() => {
          video.muted = true;
          setIsMuted(true);
          video.play().catch(() => { });
        });
    } else {
      video.pause();
    }
  }, [isInView]);

  const toggleSound = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    if (video.muted) {
      video.muted = false;
      video.volume = 1.0;
      video.play().then(() => setIsMuted(false)).catch(() => { });
    } else {
      video.muted = true;
      setIsMuted(true);
    }
  };

  return (
    <section
      ref={containerRef}
      id="hero"
      aria-label="Hero — Muhammad Umer Farooq CRM Automation Expert"
      className="relative min-h-screen lg:min-h-screen bg-[var(--background)] text-white overflow-visible flex flex-col justify-between"
    >
      {/* Interactive DotGrid background */}
      <div className="absolute inset-0 z-0 pointer-events-auto">
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

      {/* Smooth full-bleed ambient radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_75%_at_50%_0%,rgba(236,179,101,0.1),transparent_80%),radial-gradient(ellipse_70%_50%_at_20%_40%,rgba(32,71,108,0.4),transparent_90%)] pointer-events-none z-0" />

      {/* Main hero content */}
      <div className="relative z-10 flex-1 flex items-center mt-8 pt-40 lg:pt-22 pb-8">
        <div className="max-w-6xl mx-auto px-6 w-full">
          <div className="grid grid-cols-3 lg:grid-cols-12 gap-8 xl:gap-12 items-center ">

            {/* Left — Text Content (7 cols) */}
            <div className="lg:col-span-7">
              {/* Availability badge */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="mb-3"
              >
                <span className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)]/10 px-3.5 py-1 text-xs sm:text-sm font-sans text-[var(--accent)] border border-[var(--accent)]/25 font-medium">
                  <span className="inline-block h-2 w-2 rounded-full bg-[var(--emerald)] animate-pulse" />
                  Open to New Projects
                </span>
              </motion.div>

              {/* H1 Headline — GPU-Accelerated Shutter Text */}
              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="text-2xl sm:text-3xl lg:text-4xl xl:text-[2.65rem] font-heading font-semibold text-white tracking-tight leading-[1.18] mb-3"
              >
                <HeroShutterText
                  text="I Build Intelligent CRM Systems That Save Time & Grow Revenue."
                  accentWords={["Intelligent", "CRM", "Systems"]}
                  textClassName="text-2xl sm:text-3xl lg:text-4xl xl:text-[2.65rem] font-heading font-semibold"
                />
              </motion.h1>

              {/* Sub-headline */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="text-xs sm:text-sm lg:text-base font-sans text-[var(--ice)]/80 leading-relaxed mb-5 max-w-xl"
              >
                Specializing in GoHighLevel, n8n, Zapier &amp; AI workflows to automate lead capture, client follow-ups, and business operations — 24/7.
              </motion.p>

              {/* Vertical Trust Checklist */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="space-y-2.5 mb-6"
              >
                {["50+ Automations Built", "GoHighLevel & n8n Specialist", "100% Custom Workflows"].map((bullet) => (
                  <div key={bullet} className="flex items-center gap-2.5">
                    <CheckCircle size={16} className="text-[var(--accent)] shrink-0" />
                    <span className="text-xs sm:text-sm font-sans text-[var(--ice)]/90 font-medium">{bullet}</span>
                  </div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.45 }}
                className="flex flex-wrap items-center gap-3 sm:gap-4"
              >
                <Link href="/contact">
                  <MagneticButton className="inline-flex items-center gap-2 bg-[var(--accent)] text-black px-6 sm:px-7 py-3 sm:py-3.5 rounded-full font-sans font-bold text-xs sm:text-sm hover:opacity-90 transition-all cursor-pointer shadow-lg shadow-[var(--accent)]/15">
                    <CalendarCheck size={16} />
                    <span>Book a Free Audit Call</span>
                  </MagneticButton>
                </Link>

                <Link href="/projects">
                  <button className="inline-flex items-center gap-2 text-xs sm:text-sm font-sans font-medium text-white hover:text-[var(--accent)] transition-colors px-5 sm:px-6 py-3 sm:py-3.5 rounded-full border border-[var(--border-subtle)] hover:border-white/30 cursor-pointer bg-[var(--surface)]/50">
                    <span>View Case Studies</span>
                    <ArrowRight size={14} />
                  </button>
                </Link>
              </motion.div>
            </div>

            {/* Right — Visual Card with Video & Sound Controls (5 cols) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5 relative max-w-[360px] lg:max-w-full mx-auto w-full"
            >
              {/* Portrait video card */}
              <div className="relative rounded-2xl overflow-hidden border border-[var(--border-subtle)] bg-[var(--surface)] shadow-2xl max-h-[380px] xl:max-h-[420px] group">
                {/* Hero video with poster thumbnail — NO LOOP */}
                <div
                  className="relative aspect-[4/4.5] w-full max-h-[380px] xl:max-h-[420px] overflow-hidden cursor-pointer"
                  onClick={toggleSound}
                >
                  <video
                    ref={videoRef}
                    src="/intro.mp4"
                    poster="/hero-portrait.png"
                    autoPlay
                    playsInline
                    preload="auto"
                    className="w-full h-full object-cover object-center [transform:translateZ(0)]"
                  />

                  {/* Sound Toggle Floating Button */}
                  <button
                    onClick={toggleSound}
                    className="absolute top-3 right-3 z-20 flex items-center gap-2 bg-[var(--background)]/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-[var(--accent)]/40 hover:border-[var(--accent)] text-white text-xs font-sans font-medium transition-all shadow-xl cursor-pointer"
                    aria-label={isMuted ? "Unmute video audio" : "Mute video audio"}
                  >
                    {isMuted ? (
                      <>
                        <SpeakerSimpleSlash size={16} className="text-[var(--accent)] animate-pulse" />
                        <span className="text-[11px] text-[var(--accent)] font-sans font-semibold">Tap to Play Audio 🔊</span>
                      </>
                    ) : (
                      <>
                        <SpeakerHigh size={16} className="text-[var(--emerald)]" />
                        <span className="text-[11px] text-[var(--emerald)] font-sans font-semibold">Playing Audio 🔊</span>
                      </>
                    )}
                  </button>

                  {/* Bottom gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface)] via-[var(--surface)]/15 to-transparent pointer-events-none" />
                </div>

                {/* Floating name card at bottom */}
                <div className="absolute bottom-0 inset-x-0 p-4 pointer-events-none">
                  <div className="bg-[var(--background)]/85 backdrop-blur-md rounded-xl p-3 border border-[var(--border-subtle)]">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-heading font-semibold text-white text-xs sm:text-sm">Muhammad Umer Farooq</p>
                        <p className="text-[11px] text-[var(--ice)]/70 font-sans mt-0.5">CRM &amp; Automation Expert</p>
                      </div>
                      <div className="flex items-center gap-1 bg-[var(--emerald)]/20 border border-[var(--emerald)]/40 rounded-full px-2.5 py-1">
                        <Lightning size={12} className="text-[var(--emerald)]" />
                        <span className="text-[11px] text-[var(--emerald)] font-sans font-medium">Available</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating star rating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="absolute -top-3 -left-3 bg-[var(--surface-elevated)] border border-[var(--border-subtle)] rounded-xl p-2.5 shadow-xl hidden sm:block"
              >
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={11} className="fill-[var(--coral)] text-[var(--coral)]" />
                  ))}
                </div>
                <p className="text-[11px] font-sans text-[var(--ice)] mt-0.5">9 Happy Clients</p>
              </motion.div>

              {/* Floating workflow badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.7 }}
                className="absolute -bottom-3 -right-3 bg-[var(--accent)] rounded-xl p-2.5 shadow-xl hidden sm:block text-black font-bold"
              >
                <p className="text-[11px] font-sans font-bold leading-tight">Automation</p>
                <p className="text-[11px] font-sans font-bold leading-tight">Expert 🚀</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Full-Width Slanted Glassmorphic Marquee (-3deg) embedded in Hero */}
      <div className="w-full relative z-20 pb-6 pt-2 overflow-visible pointer-events-auto">
        <SlantedGlassMarquee
          items={TOOLS_DATA}
          angle={-3}
          speed={1}
          pauseOnHover={true}
        />
      </div>
    </section>
  );
}

export default HeroScroll;
