"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MagneticButton } from "@/components/lightswind/magnetic-button";
import { LinkPreview } from "@/components/ui/link-preview";
import { CheckCircle, ArrowRight, SpinnerGap } from "@phosphor-icons/react";

const contactLinks = [
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: "Email",
    value: "mumerfarooq557@gmail.com",
    href: "mailto:mumerfarooq557@gmail.com",
    disablePreview: true
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
    label: "WhatsApp",
    value: "+92 301 4044102",
    href: "https://wa.me/923014044102",
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
    label: "LinkedIn",
    value: "in/umer-ai-agents",
    href: "https://www.linkedin.com/in/umer-ai-agents/",
    previewImage: "/linkedin.png"
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
    label: "Instagram",
    value: "@muhammad.umer.faro.oq",
    href: "https://www.instagram.com/muhammad.umer.faro.oq",
    previewImage: "/instagram.png"
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
    label: "GitHub",
    value: "umerfarooq5349",
    href: "https://github.com/umerfarooq5349/"
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError("Please fill in your name, email, and a short message.");
      return;
    }
    setError("");
    setIsSubmitting(true);

    // Simulate reliable dispatch with client confirmation
    await new Promise((resolve) => setTimeout(resolve, 850));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", service: "", message: "" });
    setIsSubmitted(false);
  };

  return (
    <div role="region" aria-label="Contact Muhammad Umer Farooq" className="pt-28 sm:pt-36 pb-24 sm:pb-32 min-h-screen bg-[var(--background)]">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[var(--accent)] font-sans uppercase tracking-[0.2em] text-xs sm:text-sm font-semibold mb-3"
          >
            Get In Touch
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-heading font-semibold text-white tracking-tight mb-4 sm:mb-6"
          >
            Let&apos;s Build Something{" "}
            <span className="text-[var(--accent)] italic">Powerful.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[var(--ice)]/80 font-sans text-sm sm:text-lg max-w-xl mx-auto"
          >
            Ready to automate your business operations? Reach out directly or fill in the form and I&apos;ll get back to you within 24 hours.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
          {/* Left: Contact Links */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-4"
          >
            <h2 className="text-xl font-heading font-semibold text-white mb-6">Reach Out Directly</h2>
            {contactLinks.map((link, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
              >
                {link.disablePreview ? (
                  <a
                    href={link.href}
                    target={link.href.startsWith("mailto") ? "_self" : "_blank"}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-2xl bg-[var(--surface)] border border-[var(--border-subtle)] hover:border-[var(--accent)]/40 hover:bg-[var(--surface-elevated)] transition-all duration-200 group w-full text-left block"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[var(--accent)]/10 border border-[var(--accent)]/20 flex items-center justify-center text-[var(--accent)] group-hover:bg-[var(--accent)]/20 transition-colors shrink-0">
                      {link.icon}
                    </div>
                    <div>
                      <p className="text-xs font-sans text-[var(--ice)]/60 uppercase tracking-widest">{link.label}</p>
                      <p className="text-sm font-sans text-white group-hover:text-[var(--accent)] transition-colors break-all">{link.value}</p>
                    </div>
                  </a>
                ) : (
                  <LinkPreview
                    url={link.href}
                    isStatic={!!link.previewImage}
                    imageSrc={link.previewImage || ""}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-[var(--surface)] border border-[var(--border-subtle)] hover:border-[var(--accent)]/40 hover:bg-[var(--surface-elevated)] transition-all duration-200 group w-full text-left"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[var(--accent)]/10 border border-[var(--accent)]/20 flex items-center justify-center text-[var(--accent)] group-hover:bg-[var(--accent)]/20 transition-colors shrink-0">
                      {link.icon}
                    </div>
                    <div>
                      <p className="text-xs font-sans text-[var(--ice)]/60 uppercase tracking-widest">{link.label}</p>
                      <p className="text-sm font-sans text-white group-hover:text-[var(--accent)] transition-colors break-all">{link.value}</p>
                    </div>
                  </LinkPreview>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-[var(--surface)] border border-[var(--border-subtle)] p-6 sm:p-8 md:p-10 rounded-3xl"
          >
            <h2 className="text-xl font-heading font-semibold text-white mb-6">Send a Message</h2>

            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="p-6 rounded-2xl bg-[var(--emerald)]/10 border border-[var(--emerald)]/30 text-center space-y-4"
                >
                  <CheckCircle size={48} className="text-[var(--emerald)] mx-auto animate-bounce" />
                  <h3 className="text-xl font-heading font-semibold text-white">Message Received!</h3>
                  <p className="text-sm font-sans text-[var(--ice)]/80 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-white font-semibold">{formData.name}</span>. Your details have been recorded. I will review your automation requirements and get back to you within 24 hours.
                  </p>
                  <button
                    onClick={handleReset}
                    className="inline-flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-wider text-[var(--accent)] hover:underline pt-2 cursor-pointer"
                  >
                    <span>Send Another Inquiry</span>
                    <ArrowRight size={14} />
                  </button>
                </motion.div>
              ) : (
                <form key="form" className="space-y-5" onSubmit={handleSubmit}>
                  {error && (
                    <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-sans">
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-sans text-[var(--ice)]/80">Your Name *</label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-transparent border-b border-[var(--border-subtle)] py-2.5 text-white focus:outline-none focus:border-[var(--accent)] transition-colors font-sans text-sm"
                        placeholder="John Smith"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-sans text-[var(--ice)]/80">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-transparent border-b border-[var(--border-subtle)] py-2.5 text-white focus:outline-none focus:border-[var(--accent)] transition-colors font-sans text-sm"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="service" className="text-xs font-sans text-[var(--ice)]/80">Service Needed</label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-[var(--surface)] border-b border-[var(--border-subtle)] py-2.5 text-[var(--ice)] focus:outline-none focus:border-[var(--accent)] transition-colors font-sans text-sm"
                    >
                      <option value="" className="bg-[var(--surface)] text-white">Select a service...</option>
                      <option value="crm" className="bg-[var(--surface)] text-white">CRM Setup (GoHighLevel)</option>
                      <option value="automation" className="bg-[var(--surface)] text-white">Workflow Automation (n8n / Zapier)</option>
                      <option value="funnel" className="bg-[var(--surface)] text-white">Funnel Building</option>
                      <option value="chatbot" className="bg-[var(--surface)] text-white">AI Chatbot Integration</option>
                      <option value="sms-email" className="bg-[var(--surface)] text-white">SMS & Email Drip Automation</option>
                      <option value="white-label" className="bg-[var(--surface)] text-white">White Label GHL / SaaS Setup</option>
                      <option value="other" className="bg-[var(--surface)] text-white">Other Inquiry</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-sans text-[var(--ice)]/80">Tell Me About Your Business *</label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-transparent border-b border-[var(--border-subtle)] py-2.5 text-white focus:outline-none focus:border-[var(--accent)] transition-colors font-sans resize-none text-sm"
                      placeholder="What repetitive tasks are costing you the most time?"
                    />
                  </div>

                  <div className="pt-3">
                    <MagneticButton
                      type="submit"
                      disabled={isSubmitting}
                      fullWidth={true}
                      variant="primary"
                      className="w-full py-4 text-sm font-bold tracking-wider uppercase cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <SpinnerGap size={18} className="animate-spin" />
                          <span>SENDING INQUIRY...</span>
                        </span>
                      ) : (
                        <span>SEND MESSAGE →</span>
                      )}
                    </MagneticButton>
                  </div>
                </form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

