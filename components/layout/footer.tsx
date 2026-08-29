"use client";

import React from "react";
import Link from "next/link";
import { LinkedinLogo, InstagramLogo, WhatsappLogo, Envelope, MapPin, Lightning, GithubLogo } from "@phosphor-icons/react";
import { LinkPreview } from "@/components/ui/link-preview";
import { TextHoverEffect, FooterBackgroundGradient } from "@/components/ui/hover-footer";

export function Footer() {
  const currentYear = new Date().getFullYear();

  // Navigation links
  const navLinks = [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Testimonials", href: "/testimonials" },
  ];

  // Helpful links
  const helpfulLinks = [
    { label: "Blog", href: "/blog" },
    { label: "Resume", href: "/resume" },
    { label: "Contact Us", href: "/contact" },
    { label: "Book a Call", href: "/contact", pulse: true },
  ];

  // All bottom icons (social + contact)
  const bottomIcons = [
    { icon: <LinkedinLogo size={28} weight="fill" />, label: "LinkedIn", href: "https://www.linkedin.com/in/umer-ai-agents/", previewImage: "/linkedin.png" },
    { icon: <InstagramLogo size={28} weight="fill" />, label: "Instagram", href: "https://www.instagram.com/muhammad.umer.faro.oq", previewImage: "/instagram.png" },
    { icon: <GithubLogo size={28} weight="fill" />, label: "GitHub", href: "https://github.com/umerfarooq5349/" },
    { icon: <Envelope size={28} weight="fill" />, label: "Email", href: "mailto:mumerfarooq557@gmail.com", disablePreview: true },
    { icon: <WhatsappLogo size={28} weight="fill" />, label: "WhatsApp", href: "https://wa.me/923014044102", disablePreview: true },
    { icon: <MapPin size={28} weight="fill" />, label: "Location", href: "https://maps.google.com/?q=Lahore,Pakistan", disablePreview: true }
  ];

  return (
    <footer className="w-full bg-[#111111]/80 border-t border-white/5 relative overflow-hidden mt-20">
      <div className="max-w-7xl mx-auto px-6 py-10 md:p-14 z-50 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 md:gap-8 lg:gap-16 pb-12">
          {/* Brand section */}
          <div className="flex flex-col space-y-4 lg:col-span-2">
            {/* <Link href="/" className="flex items-center space-x-2">
              
              <span className="text-white text-2xl font-heading font-bold tracking-tight">Muhammad Umer<span className="text-[var(--accent)]">.</span></span>
            </Link> */}
            <p className="text-sm font-sans text-zinc-400 leading-relaxed max-w-sm">
              Building smart automation systems with GoHighLevel, n8n, and Zapier that save time and increase revenue.
            </p>
          </div>

          {/* Navigation section */}
          <div>
            <h4 className="text-white text-lg font-heading font-semibold mb-6">Navigation</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm font-sans text-zinc-400 hover:text-[var(--accent)] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Helpful Links section */}
          <div>
            <h4 className="text-white text-lg font-heading font-semibold mb-6">Helpful Links</h4>
            <ul className="space-y-3">
              {helpfulLinks.map((link) => (
                <li key={link.label} className="relative w-fit flex items-center">
                  <Link href={link.href} className="text-sm font-sans text-zinc-400 hover:text-[var(--accent)] transition-colors">
                    {link.label}
                  </Link>
                  {link.pulse && (
                    <span className="absolute top-1.5 -right-4 w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse"></span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="border-t border-white/5 my-8 relative z-50" />

        {/* Footer bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm font-sans space-y-6 md:space-y-0 relative z-50">

          {/* Icons row */}
          <div className="flex flex-wrap justify-center gap-6 text-zinc-500">
            {bottomIcons.map((item) => (
              item.disablePreview ? (
                <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" aria-label={item.label} className="hover:text-[var(--accent)] transition-colors">
                  {item.icon}
                </a>
              ) : (
                <LinkPreview
                  key={item.label}
                  url={item.href}
                  isStatic={!!item.previewImage}
                  imageSrc={item.previewImage || ""}
                  className="hover:text-[var(--accent)] transition-colors"
                >
                  {item.icon}
                </LinkPreview>
              )
            ))}
          </div>

          {/* Copyright */}
          <p className="text-center md:text-right text-zinc-500 w-full md:w-auto pt-6 md:pt-0 border-t border-white/5 md:border-none mt-6 md:mt-0">
            &copy; {currentYear} Umer Farooq. All rights reserved.
          </p>
        </div>
      </div>

      {/* Text hover effect */}
      <div className="lg:flex hidden h-[20rem] md:h-[30rem] -mt-52 -mb-36 pointer-events-none items-center justify-center relative z-0 max-w-7xl mx-auto px-6">
        <TextHoverEffect text="Muhammad Umer" />
      </div>

      <FooterBackgroundGradient />
    </footer>
  );
}
