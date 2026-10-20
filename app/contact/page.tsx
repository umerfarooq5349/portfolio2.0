"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MagneticButton } from "@/components/lightswind/magnetic-button";
import { LinkPreview } from "@/components/ui/link-preview";
import {
  CheckCircle,
  ArrowRight,
  SpinnerGap,
  Envelope,
  WhatsappLogo,
  LinkedinLogo,
  InstagramLogo,
  GithubLogo,
  Clock,
  ShieldCheck,
  Target,
} from "@phosphor-icons/react";

const contactLinks = [
  {
    icon: <Envelope size={20} weight="duotone" className="text-[var(--accent)]" />,
    label: "Direct Email",
    value: "mumerfarooq557@gmail.com",
    href: "mailto:mumerfarooq557@gmail.com",
    disablePreview: true,
  },
  {
    icon: <WhatsappLogo size={20} weight="duotone" className="text-[var(--accent)]" />,
    label: "WhatsApp Direct",
    value: "+92 301 4044102",
    href: "https://wa.me/923014044102",
  },
  {
    icon: <LinkedinLogo size={20} weight="duotone" className="text-[var(--accent)]" />,
    label: "LinkedIn Profile",
    value: "in/umer-ai-agents",
    href: "https://www.linkedin.com/in/umer-ai-agents/",
    previewImage: "/linkedin.png",
  },
  {
    icon: <GithubLogo size={20} weight="duotone" className="text-[var(--accent)]" />,
    label: "GitHub Repositories",
    value: "umerfarooq5349",
    href: "https://github.com/umerfarooq5349/",
  },
  {
    icon: <InstagramLogo size={20} weight="duotone" className="text-[var(--accent)]" />,
    label: "Instagram",
    value: "@muhammad.umer.faro.oq",
    href: "https://www.instagram.com/muhammad.umer.faro.oq",
    previewImage: "/instagram.png",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    currentTools: "",
    scope: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError("Please fill in your name, email, and details about your automation requirements.");
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
    setFormData({
      name: "",
      email: "",
      company: "",
      website: "",
      currentTools: "",
      scope: "",
      service: "",
      message: "",
    });
    setIsSubmitted(false);
  };

  return (
    <div
      role="region"
      aria-label="Contact Muhammad Umer Farooq — Book a Strategy Call"
      className="pt-24 sm:pt-32 pb-20 sm:pb-28 min-h-[100dvh] bg-[var(--background)]"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[var(--accent)] font-sans uppercase tracking-[0.2em] text-xs sm:text-sm font-semibold mb-3"
          >
            Direct Consultation
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl font-heading font-semibold text-white tracking-tight mb-4 sm:mb-6"
          >
            Book a <span className="text-[var(--accent)] italic">Strategy Call</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[var(--ice)]/80 font-sans text-sm sm:text-lg max-w-2xl mx-auto"
          >
            Map out your GoHighLevel CRM architecture, n8n workflow pipelines, and AI lead qualification systems. Receive a response within 24 hours.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left: What Happens Next & Direct Links (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Expectations & Process Card */}
            <div className="p-6 rounded-3xl bg-[var(--surface)] border border-[var(--border-subtle)] space-y-5">
              <h3 className="text-lg font-heading font-semibold text-white flex items-center gap-2">
                <Clock size={20} className="text-[var(--accent)]" />
                <span>What Happens After Submission</span>
              </h3>

              <div className="space-y-3.5 text-xs sm:text-sm font-sans text-[var(--ice)]/85">
                <div className="flex items-start gap-3">
                  <span className="h-6 w-6 rounded-full bg-[var(--accent)]/15 text-[var(--accent)] font-mono text-xs flex items-center justify-center shrink-0 font-bold">1</span>
                  <p><strong className="text-white">Technical Review (Within 24h):</strong> I personally review your current software stack and automation requirements.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="h-6 w-6 rounded-full bg-[var(--accent)]/15 text-[var(--accent)] font-mono text-xs flex items-center justify-center shrink-0 font-bold">2</span>
                  <p><strong className="text-white">15-Minute Strategy Call:</strong> We inspect your bottlenecks and confirm implementation feasibility.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="h-6 w-6 rounded-full bg-[var(--accent)]/15 text-[var(--accent)] font-mono text-xs flex items-center justify-center shrink-0 font-bold">3</span>
                  <p><strong className="text-white">Architecture Blueprint:</strong> You receive a clear, milestone-driven workflow diagram and delivery timeline.</p>
                </div>
              </div>

              {/* Good Fit Checklist */}
              <div className="pt-4 border-t border-[var(--border-subtle)] space-y-2">
                <p className="text-xs font-sans font-bold uppercase tracking-wider text-[var(--accent)] flex items-center gap-1.5">
                  <Target size={16} />
                  <span>Projects That Are A Good Fit</span>
                </p>
                <ul className="text-xs text-[var(--ice)]/75 space-y-1.5 list-disc pl-4 font-sans">
                  <li>Service businesses needing automated speed-to-lead &amp; calendar bookings</li>
                  <li>Agencies seeking automated client onboarding &amp; white-label GHL setups</li>
                  <li>Companies looking to replace expensive Zapier tasks with self-hosted n8n</li>
                  <li>Real estate operators needing AI property lead qualification &amp; CRM pipeline sync</li>
                </ul>
              </div>
            </div>

            {/* Direct Contact Links */}
            <div className="space-y-3">
              <h4 className="text-sm font-heading font-semibold text-white uppercase tracking-wider text-xs">Reach Out Directly</h4>
              {contactLinks.map((link, i) => (
                <div key={i}>
                  {link.disablePreview ? (
                    <a
                      href={link.href}
                      target={link.href.startsWith("mailto") ? "_self" : "_blank"}
                      rel="noopener noreferrer"
                      className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-[var(--surface)] border border-[var(--border-subtle)] hover:border-[var(--accent)]/40 hover:bg-[var(--surface-elevated)] transition-all group w-full text-left block"
                    >
                      <div className="w-9 h-9 rounded-xl bg-[var(--accent)]/10 border border-[var(--accent)]/20 flex items-center justify-center text-[var(--accent)] group-hover:bg-[var(--accent)]/20 transition-colors shrink-0">
                        {link.icon}
                      </div>
                      <div>
                        <p className="text-[11px] font-sans text-[var(--ice)]/60 uppercase tracking-wider">{link.label}</p>
                        <p className="text-xs sm:text-sm font-sans text-white group-hover:text-[var(--accent)] transition-colors break-all font-medium">{link.value}</p>
                      </div>
                    </a>
                  ) : (
                    <LinkPreview
                      url={link.href}
                      isStatic={!!link.previewImage}
                      imageSrc={link.previewImage || ""}
                      className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-[var(--surface)] border border-[var(--border-subtle)] hover:border-[var(--accent)]/40 hover:bg-[var(--surface-elevated)] transition-all group w-full text-left"
                    >
                      <div className="w-9 h-9 rounded-xl bg-[var(--accent)]/10 border border-[var(--accent)]/20 flex items-center justify-center text-[var(--accent)] group-hover:bg-[var(--accent)]/20 transition-colors shrink-0">
                        {link.icon}
                      </div>
                      <div>
                        <p className="text-[11px] font-sans text-[var(--ice)]/60 uppercase tracking-wider">{link.label}</p>
                        <p className="text-xs sm:text-sm font-sans text-white group-hover:text-[var(--accent)] transition-colors break-all font-medium">{link.value}</p>
                      </div>
                    </LinkPreview>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Comprehensive Strategy Intake Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 bg-[var(--surface)] border border-[var(--border-subtle)] p-6 sm:p-8 md:p-10 rounded-3xl"
          >
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-[var(--border-subtle)]">
              <div>
                <h3 className="text-xl font-heading font-semibold text-white">Project Scope &amp; Architecture Request</h3>
                <p className="text-xs text-[var(--ice)]/70 font-sans mt-0.5">Please share your current workflow bottlenecks</p>
              </div>
              <div className="hidden sm:flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 font-sans">
                <ShieldCheck size={16} />
                <span>Confidential</span>
              </div>
            </div>

            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="p-8 rounded-2xl bg-[var(--emerald)]/10 border border-[var(--emerald)]/30 text-center space-y-4"
                >
                  <CheckCircle size={52} className="text-[var(--emerald)] mx-auto animate-bounce" />
                  <h3 className="text-2xl font-heading font-semibold text-white">Strategy Request Received!</h3>
                  <p className="text-sm font-sans text-[var(--ice)]/85 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-white font-semibold">{formData.name}</span>. I have received your operational details for <span className="text-[var(--accent)]">{formData.company || "your business"}</span>.
                  </p>
                  <p className="text-xs font-sans text-[var(--ice)]/70 max-w-md mx-auto">
                    I will analyze your requirements and reach out via <span className="text-white">{formData.email}</span> within 24 hours with next steps and call availability.
                  </p>
                  <div className="pt-3">
                    <button
                      onClick={handleReset}
                      className="inline-flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-wider text-[var(--accent)] hover:underline cursor-pointer"
                    >
                      <span>Submit Another Inquiry</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form key="form" className="space-y-4.5" onSubmit={handleSubmit}>
                  {error && (
                    <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-sans">
                      {error}
                    </div>
                  )}

                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label htmlFor="name" className="text-xs font-sans font-medium text-[var(--ice)]/80">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[var(--background)]/60 border border-[var(--border-subtle)] rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-[var(--accent)] transition-colors font-sans text-sm"
                        placeholder="e.g. Alex Morgan"
                      />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="email" className="text-xs font-sans font-medium text-[var(--ice)]/80">Work Email *</label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[var(--background)]/60 border border-[var(--border-subtle)] rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-[var(--accent)] transition-colors font-sans text-sm"
                        placeholder="alex@company.com"
                      />
                    </div>
                  </div>

                  {/* Company & Website */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label htmlFor="company" className="text-xs font-sans font-medium text-[var(--ice)]/80">Company / Business Name</label>
                      <input
                        type="text"
                        id="company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full bg-[var(--background)]/60 border border-[var(--border-subtle)] rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-[var(--accent)] transition-colors font-sans text-sm"
                        placeholder="e.g. Apex Health & Rehab"
                      />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="website" className="text-xs font-sans font-medium text-[var(--ice)]/80">Website URL</label>
                      <input
                        type="text"
                        id="website"
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                        className="w-full bg-[var(--background)]/60 border border-[var(--border-subtle)] rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-[var(--accent)] transition-colors font-sans text-sm"
                        placeholder="https://company.com"
                      />
                    </div>
                  </div>

                  {/* Current Tools & Estimated Scope */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label htmlFor="currentTools" className="text-xs font-sans font-medium text-[var(--ice)]/80">Current Tech Stack</label>
                      <select
                        id="currentTools"
                        value={formData.currentTools}
                        onChange={(e) => setFormData({ ...formData, currentTools: e.target.value })}
                        className="w-full bg-[var(--background)]/60 border border-[var(--border-subtle)] rounded-xl px-3.5 py-2.5 text-[var(--ice)] focus:outline-none focus:border-[var(--accent)] transition-colors font-sans text-sm"
                      >
                        <option value="" className="bg-[var(--surface)] text-white">Select primary tool...</option>
                        <option value="GoHighLevel" className="bg-[var(--surface)] text-white">GoHighLevel (GHL)</option>
                        <option value="n8n" className="bg-[var(--surface)] text-white">n8n (Self-hosted / Cloud)</option>
                        <option value="Zapier / Make" className="bg-[var(--surface)] text-white">Zapier / Make.com</option>
                        <option value="HubSpot / Salesforce" className="bg-[var(--surface)] text-white">HubSpot / Salesforce</option>
                        <option value="Multiple Disconnected Tools" className="bg-[var(--surface)] text-white">Multiple Disconnected Tools</option>
                        <option value="Starting From Scratch" className="bg-[var(--surface)] text-white">Starting From Scratch</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="scope" className="text-xs font-sans font-medium text-[var(--ice)]/80">Estimated Scope</label>
                      <select
                        id="scope"
                        value={formData.scope}
                        onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                        className="w-full bg-[var(--background)]/60 border border-[var(--border-subtle)] rounded-xl px-3.5 py-2.5 text-[var(--ice)] focus:outline-none focus:border-[var(--accent)] transition-colors font-sans text-sm"
                      >
                        <option value="" className="bg-[var(--surface)] text-white">Select project scope...</option>
                        <option value="Complete GHL Setup" className="bg-[var(--surface)] text-white">Complete GHL CRM Architecture</option>
                        <option value="Custom n8n Workflows" className="bg-[var(--surface)] text-white">Custom n8n / API Automation</option>
                        <option value="AI Lead Qualification" className="bg-[var(--surface)] text-white">AI Lead Qualification &amp; Chatbot</option>
                        <option value="White-Label SaaS Setup" className="bg-[var(--surface)] text-white">White-Label Agency SaaS Setup</option>
                        <option value="Audit & Fix Existing Systems" className="bg-[var(--surface)] text-white">Audit &amp; Fix Existing Broken Workflows</option>
                      </select>
                    </div>
                  </div>

                  {/* What do you need automated? */}
                  <div className="space-y-1">
                    <label htmlFor="message" className="text-xs font-sans font-medium text-[var(--ice)]/80">
                      What do you need automated? *
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[var(--background)]/60 border border-[var(--border-subtle)] rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-[var(--accent)] transition-colors font-sans resize-none text-sm"
                      placeholder="e.g. Inbound leads from Facebook ads need instant SMS response, AI qualification, calendar booking, and CRM pipeline assignment without manual staff input."
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
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
                          <span>ANALYZING &amp; DISPATCHING...</span>
                        </span>
                      ) : (
                        <span>BOOK STRATEGY CALL →</span>
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
