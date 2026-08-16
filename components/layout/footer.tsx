"use client";

import Link from "next/link";
import { LinkedinLogo, InstagramLogo, WhatsappLogo, Envelope, ArrowUpRight } from "@phosphor-icons/react";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Blog", href: "/blog" },
  { label: "Resume", href: "/resume" },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: <LinkedinLogo size={18} />
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: <InstagramLogo size={18} />
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/1234567890",
    icon: <WhatsappLogo size={18} />
  },
  {
    label: "Email",
    href: "mailto:umer@example.com",
    icon: <Envelope size={18} />
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full pt-16 pb-10 border-t border-white/10 bg-[var(--background)]">
      <div className="max-w-5xl mx-auto px-6">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <h2 className="text-2xl font-heading font-bold text-white tracking-tight">
                Muhammad Umer<span className="text-[var(--accent)]">.</span>
              </h2>
              <p className="text-xs font-sans text-zinc-500 uppercase tracking-widest mt-1">
                CRM &amp; Automation Expert
              </p>
            </Link>
            <p className="text-zinc-500 font-sans text-sm leading-relaxed max-w-xs">
              Building smart automation systems with GoHighLevel, n8n, and Zapier that save time and increase revenue.
            </p>
          </div>

          {/* Nav Links */}
          <div>
            <h3 className="text-xs font-sans uppercase tracking-[0.2em] text-zinc-500 mb-5">Navigation</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-1 text-sm font-sans text-zinc-400 hover:text-white transition-colors"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-[var(--accent)]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social + CTA */}
          <div>
            <h3 className="text-xs font-sans uppercase tracking-[0.2em] text-zinc-500 mb-5">Connect</h3>
            <ul className="space-y-3 mb-8">
              {socialLinks.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 text-sm font-sans text-zinc-400 hover:text-[var(--accent)] transition-colors"
                  >
                    <span className="text-zinc-600 group-hover:text-[var(--accent)] transition-colors">{s.icon}</span>
                    <span>{s.label}</span>
                  </a>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[var(--accent)] text-black px-6 py-3 rounded-full font-sans font-semibold text-sm hover:opacity-90 transition-all cursor-pointer"
            >
              Start a Project
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-sans text-zinc-600">
          <p>© {currentYear} Muhammad Umer Farooq. All rights reserved.</p>
          <p>GoHighLevel · n8n · Zapier · AI Automation · CRM Systems</p>
        </div>
      </div>
    </footer>
  );
}
