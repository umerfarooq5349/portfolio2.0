"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

interface PageCurtainsProps {
  children: React.ReactNode;
}

const getPageTitle = (path: string) => {
  if (!path || path === "/") return "HOME";
  if (path.startsWith("/projects")) return "PROJECTS";
  if (path.startsWith("/services")) return "SERVICES";
  if (path.startsWith("/blog")) return "BLOG";
  if (path === "/about") return "ABOUT ME";
  if (path === "/contact") return "START A PROJECT";
  if (path === "/faq") return "FAQ & HELP";
  if (path === "/resume") return "EXPERIENCE & RESUME";
  if (path === "/testimonials") return "CLIENT REVIEWS";

  const formatted = path.replace(/^\//, "").replace(/-/g, " ");
  return formatted.toUpperCase();
};

export function PageCurtains({ children }: PageCurtainsProps) {
  const pathname = usePathname();
  const pageTitle = getPageTitle(pathname);
  const [activePath, setActivePath] = useState(pathname);
  const [isPresent, setIsPresent] = useState(true);

  if (activePath !== pathname) {
    setActivePath(pathname);
    setIsPresent(true);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPresent(false);
    }, 700);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <div className="relative min-h-screen w-full">
      <AnimatePresence mode="wait">
        {isPresent && (
          <motion.div
            key={pathname}
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-[var(--background)]"
          >
            {/* Ambient subtle glow background */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(236,179,101,0.12)_0%,transparent_70%)] pointer-events-none" />

            {/* Deliberate, High-End Branding Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: -5 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="relative z-10 flex flex-col items-center justify-center text-center px-10 py-8 bg-[var(--surface-elevated)]/95 backdrop-blur-2xl border border-[var(--border-subtle)] rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.85)] max-w-sm mx-4"
            >
              {/* Active Page Badge */}
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[var(--accent)]/15 px-4 py-1 border border-[var(--accent)]/30">
                <span className="h-2 w-2 rounded-full bg-[var(--accent)] animate-pulse" />
                <span className="text-xs font-sans font-bold tracking-widest text-[var(--accent)] uppercase">
                  {pageTitle}
                </span>
              </div>

              {/* Name */}
              <h2 className="font-heading font-bold text-xl sm:text-2xl text-white tracking-tight leading-tight">
                Muhammad Umer Farooq
              </h2>

              {/* Tagline */}
              <p className="font-sans text-xs sm:text-sm text-[var(--ice)]/80 mt-1.5 font-medium tracking-wide">
                CRM &amp; Automation Specialist
              </p>

              {/* Animated Progress Line */}
              <div className="mt-5 w-32 h-[2px] bg-[var(--surface)] rounded-full overflow-hidden relative">
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "0%" }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="h-full w-full bg-gradient-to-r from-[var(--accent)]/40 via-[var(--accent)] to-[var(--accent)]/40 rounded-full"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Page Content */}
      <motion.div
        key={`content-${pathname}`}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.25, ease: "easeOut" }}
        className="w-full min-h-screen"
      >
        {children}
      </motion.div>
    </div>
  );
}

export default PageCurtains;
