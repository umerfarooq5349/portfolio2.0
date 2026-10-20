"use client";

import React from "react";
import Link from "next/link";
import { LinkedinLogo, InstagramLogo, WhatsappLogo, Envelope, MapPin, GithubLogo } from "@phosphor-icons/react";
import { LinkPreview } from "@/components/ui/link-preview";
import { TextHoverEffect, FooterBackgroundGradient } from "@/components/ui/hover-footer";

export function Footer() {
  const currentYear = new Date().getFullYear();

  // Navigation links
  const navLinks = [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Case Studies", href: "/projects" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Insights", href: "/blog" },
  ];

  // Core Services
  const serviceLinks = [
    { label: "GoHighLevel CRM Setup", href: "/services/gohighlevel-crm-setup" },
    { label: "n8n Workflow Automation", href: "/services/n8n-automation" },
    { label: "AI Chatbot Development", href: "/services/ai-chatbot-development" },
    { label: "Lead Follow-Up Systems", href: "/services/lead-follow-up-automation" },
  ];

  // Helpful links
  const helpfulLinks = [
    { label: "Real Estate Automation", href: "/industries/real-estate" },
    { label: "Agency Systems", href: "/industries/agencies" },
    { label: "Contact & Audit", href: "/contact" },
    { label: "Book a Strategy Call", href: "/contact", pulse: true },
  ];

  // All bottom icons (social + contact)
  const bottomIcons = [
    { icon: <LinkedinLogo size={28} weight="fill" />, label: "LinkedIn", href: "https://www.linkedin.com/in/umer-ai-agents/", previewImage: "/linkedin.png" },
    { icon: <InstagramLogo size={28} weight="fill" />, label: "Instagram", href: "https://www.instagram.com/muhammad.umer.faro.oq", previewImage: "/instagram.png" },
    { icon: <GithubLogo size={28} weight="fill" />, label: "GitHub", href: "https://github.com/umerfarooq5349/" },
    { icon: <Envelope size={28} weight="fill" />, label: "Email", href: "mailto:mumerfarooq557@gmail.com", disablePreview: true },
    { icon: <WhatsappLogo size={28} weight="fill" />, label: "WhatsApp", href: "https://wa.me/923014044102" },
    { icon: <MapPin size={28} weight="fill" />, label: "Location", href: "https://maps.google.com/?q=Lahore,Pakistan", disablePreview: true }
  ];

  return (
    <footer className="w-full bg-[var(--background)]/95 border-t border-[var(--border-subtle)] relative overflow-hidden mt-20">
      <div className="max-w-7xl mx-auto px-6 py-10 md:p-14 z-50 relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 md:gap-8 pb-12">
          {/* Brand section */}
          <div className="flex flex-col space-y-4 sm:col-span-2">
            <Link href="/" className="flex flex-col leading-none">
              <span className="text-xl font-bold font-heading text-white">
                Muhammad Umer<span className="text-[var(--accent)]">.</span>
              </span>
              <span className="text-xs font-sans text-[var(--accent)] font-medium tracking-wider uppercase mt-1">
                GoHighLevel &amp; n8n Automation Expert
              </span>
            </Link>
            <p className="text-xs sm:text-sm font-sans text-[var(--ice)]/70 leading-relaxed max-w-sm">
              Architecting production CRM systems, n8n API orchestration pipelines, and AI conversational workflows that turn inbound leads into booked clients.
            </p>
          </div>

          {/* Navigation section */}
          <div>
            <h4 className="text-white text-base font-heading font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-xs sm:text-sm font-sans text-[var(--ice)]/70 hover:text-[var(--accent)] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Services section */}
          <div>
            <h4 className="text-white text-base font-heading font-semibold mb-4">Core Services</h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-xs sm:text-sm font-sans text-[var(--ice)]/70 hover:text-[var(--accent)] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Helpful Links & Industries */}
          <div>
            <h4 className="text-white text-base font-heading font-semibold mb-4">Consultation</h4>
            <ul className="space-y-2.5">
              {helpfulLinks.map((link) => (
                <li key={link.label} className="relative w-fit flex items-center">
                  <Link href={link.href} className="text-xs sm:text-sm font-sans text-[var(--ice)]/70 hover:text-[var(--accent)] transition-colors">
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

        <hr className="border-t border-[var(--border-subtle)] my-8 relative z-50" />

        {/* Footer bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm font-sans space-y-6 md:space-y-0 relative z-50">

          {/* Icons row */}
          <div className="flex flex-wrap justify-center gap-6 text-[var(--ice)]/60">
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
          <p className="text-center md:text-right text-[var(--ice)]/60 w-full md:w-auto pt-6 md:pt-0 border-t border-[var(--border-subtle)] md:border-none mt-6 md:mt-0">
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
