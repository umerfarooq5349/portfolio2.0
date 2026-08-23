"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { List, X, CalendarCheck } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Blog", href: "/blog" },
  { name: "Resume", href: "/resume" },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-4 sm:px-6 pt-4 sm:pt-5 pointer-events-none">
      {/* Floating Glassmorphic Container (Matches max-w-6xl page container width with ultra-soft minimal shadow) */}
      <div
        className={cn(
          "max-w-6xl mx-auto rounded-full px-5 sm:px-6 py-2.5 sm:py-3 transition-all duration-300 pointer-events-auto flex items-center justify-between",
          "bg-white/[0.07] backdrop-blur-xl [webkit-backdrop-filter:blur(20px)]",
          "border border-white/12 shadow-[0_2px_12px_rgba(0,0,0,0.12)]",
          scrolled ? "bg-[var(--surface)]/90 border-white/18 shadow-[0_4px_20px_rgba(0,0,0,0.18)]" : ""
        )}
      >
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none group pl-1">
          <span className="text-base sm:text-lg font-bold font-heading tracking-tight text-white group-hover:text-[var(--accent)] transition-colors">
            Muhammad Umer
            <span className="text-[var(--accent)]">.</span>
          </span>
          <span className="text-[9px] sm:text-[10px] font-sans text-[var(--ice)]/70 tracking-widest uppercase mt-0.5 font-medium">
            CRM &amp; Automation Expert
          </span>
        </Link>

        {/* Desktop Nav Links with Sliding Active & Hover Pill Animations */}
        <nav
          aria-label="Main navigation"
          className="hidden lg:flex items-center space-x-1 relative"
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {links.map((link, index) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onMouseEnter={() => setHoveredIndex(index)}
                className={cn(
                  "relative text-xs sm:text-sm font-sans transition-colors duration-200 px-3.5 py-1.5 rounded-full block cursor-pointer z-10",
                  isActive
                    ? "text-black font-bold"
                    : "text-[var(--ice)]/80 hover:text-white font-medium"
                )}
              >
                {/* Sliding Hover Pill */}
                {hoveredIndex === index && !isActive && (
                  <motion.div
                    layoutId="hoverNavPill"
                    className="absolute inset-0 bg-white/10 rounded-full -z-10 border border-white/12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}

                {/* Sliding Active Pill */}
                {isActive && (
                  <motion.div
                    layoutId="activeNavPill"
                    className="absolute inset-0 bg-[var(--accent)] rounded-full -z-10 shadow-[0_2px_10px_rgba(236,179,101,0.3)] border border-[var(--accent)]"
                    transition={{ type: "spring", stiffness: 380, damping: 28 }}
                  />
                )}

                <span className="relative z-10">{link.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center">
          <Link
            href="/contact"
            id="book-call-cta"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[var(--accent)] text-black font-bold text-xs sm:text-sm hover:opacity-95 hover:shadow-[0_4px_16px_rgba(236,179,101,0.35)] transition-all cursor-pointer border border-[var(--accent)]/50"
          >
            <CalendarCheck size={16} />
            Start a Project
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          className="lg:hidden text-white p-2 rounded-full bg-white/10 border border-white/15 cursor-pointer"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={20} /> : <List size={20} />}
        </button>
      </div>

      {/* Mobile Menu Overlay with Slide-In & Slide-Out Animations */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -15 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-6xl mx-auto mt-3 rounded-3xl bg-[var(--surface)]/95 backdrop-blur-2xl border border-white/15 shadow-[0_4px_24px_rgba(0,0,0,0.25)] overflow-hidden lg:hidden pointer-events-auto p-6"
          >
            <div className="flex flex-col space-y-1.5">
              {links.map((link, i) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 24 }}
                    transition={{ delay: i * 0.04, duration: 0.25 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        "block text-base font-sans py-2.5 px-4 rounded-2xl transition-all duration-200",
                        isActive
                          ? "bg-[var(--accent)] text-black font-bold shadow-md shadow-[var(--accent)]/20"
                          : "text-[var(--ice)]/90 hover:bg-white/10 hover:text-white font-medium"
                      )}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{ delay: links.length * 0.04 + 0.04, duration: 0.25 }}
                className="pt-4"
              >
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-full bg-[var(--accent)] text-black font-bold text-sm cursor-pointer shadow-lg shadow-[var(--accent)]/20"
                >
                  <CalendarCheck size={18} />
                  Start a Project
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}


