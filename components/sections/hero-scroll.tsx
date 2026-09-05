"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { MagneticButton } from "@/components/lightswind/magnetic-button";
import RippleButton from "@/components/lightswind/ripple-button";
import HeroShutterText from "@/components/ui/hero-shutter-text";
import { DotGrid } from "@/components/ui/DotGrid";
import { ArrowRight, CalendarCheck, CheckCircle, Star, Lightning, SpeakerHigh, SpeakerSimpleSlash } from "@phosphor-icons/react";
import { SlantedGlassMarquee } from "@/components/ui/slanted-glass-marquee";
import { TOOLS_DATA } from "@/lib/marquee-tools";

export function HeroScroll() {
  const containerRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const isInView = useInView(containerRef, { amount: 0.3 });

  // Standard polite video initialization: autoplay muted
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    setIsMuted(true);
    video.play().catch(() => {
      // Browser autoplay fallback
    });
  }, []);

  // Viewport playback control: pause when out of view, resume when scrolled back in
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isInView) {
      video.play().catch(() => { });
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
      video
        .play()
        .then(() => setIsMuted(false))
        .catch(() => { });
    } else {
      video.muted = true;
      setIsMuted(true);
    }
  };

  return (
    <section
      ref={containerRef}
      id="hero"
      aria-label="Hero: Muhammad Umer Farooq CRM Automation Expert"
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
      <div className="relative z-10 flex-1 flex items-center mt-4 sm:mt-8 pt-28 sm:pt-32 lg:pt-24 pb-8">
        <div className="max-w-6xl mx-auto px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 items-center ">

            {/* Left: Text Content (7 cols) */}
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

              {/* H1 Headline: GPU-Accelerated Shutter Text */}
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
                Specializing in GoHighLevel, n8n, Zapier &amp; AI workflows to automate lead capture, client follow-ups, and business operations, 24/7.
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

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.45 }}
                className="flex flex-wrap items-center gap-3.5 pt-1"
              >
                <Link href="/contact">
                  <RippleButton>
                    <CalendarCheck size={18} />
                    <span>Book a Call</span>
                  </RippleButton>
                </Link>

                <Link href="/projects">
                  <MagneticButton variant="outline" size="sm">
                    <span>View Case Studies</span>
                    <ArrowRight size={14} />
                  </MagneticButton>
                </Link>
              </motion.div>
            </div>

            {/* Right: Visual Card with Video & Sound Controls (5 cols) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5 relative max-w-[360px] lg:max-w-full mx-auto w-full"
            >
              {/* Portrait video card */}
              <div className="relative rounded-2xl overflow-hidden border border-[var(--border-subtle)] bg-[var(--surface)] shadow-2xl max-h-[380px] xl:max-h-[420px] group">
                {/* Hero video with poster thumbnail: NO LOOP */}
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
      <div className="w-full relative z-20 pb-6 pt-2 overflow-hidden pointer-events-auto">
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
