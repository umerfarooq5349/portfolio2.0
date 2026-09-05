"use client";

import React from "react";
import { HangingIdCard } from "@/components/lightswind/hanging-id-card";
import { Terminal, Cpu, ArrowUpRight, CheckSquare } from "@phosphor-icons/react";

export function AboutBrutalist() {
  return (
    <section
      id="about-brutalist"
      aria-label="About: Brutalist Industrial Edition"
      className="relative z-10 py-20 lg:py-28 bg-zinc-950 text-white border-y-4 border-white font-mono overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Top Mechanical Header */}
        <div className="border-b-4 border-white pb-6 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-block bg-white text-black font-bold text-xs uppercase px-3 py-1 mb-3">
              [ SPEC_REV // 2026.08 ]
            </div>
            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-white">
              SYSTEM ARCHITECT &amp; CRM ENGINEER
            </h2>
          </div>
          <div className="text-xs text-zinc-400 font-mono space-y-1">
            <p>LOC: ISLAMABAD / REMOTE</p>
            <p>CORE: GOHIGHLEVEL + N8N + ZAPIER</p>
            <p>STATUS: OPERATIONAL</p>
          </div>
        </div>

        {/* Main Grid: Left (Hanging ID Card + Terminal Specs) | Right (Raw Content) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column (5 cols): Hanging ID Card (Brutalist Theme) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <HangingIdCard
              name="Muhammad Umer Farooq"
              role="CRM & Automation Specialist"
              badgeId="ID-99201-SYS"
              accentColor="#ECB365"
              ropeLength={110}
            />

            {/* Brutalist System Metrics Box */}
            <div className="w-full mt-10 border-4 border-white bg-zinc-900 p-5 shadow-[6px_6px_0px_#ffffff]">
              <div className="flex items-center gap-2 border-b-2 border-white pb-3 mb-4">
                <Terminal size={18} className="text-white" />
                <span className="text-xs font-bold uppercase tracking-wider text-white">
                  SYSTEM_CAPABILITIES.LOG
                </span>
              </div>
              <div className="space-y-2 text-xs text-zinc-300">
                <div className="flex justify-between border-b border-zinc-800 pb-1">
                  <span>GOHIGHLEVEL PIPELINES:</span>
                  <span className="text-white font-bold">OPTIMIZED</span>
                </div>
                <div className="flex justify-between border-b border-zinc-800 pb-1">
                  <span>N8N WEBHOOK ENGINE:</span>
                  <span className="text-white font-bold">100% RELIABLE</span>
                </div>
                <div className="flex justify-between border-b border-zinc-800 pb-1">
                  <span>AI CHATBOT ROUTING:</span>
                  <span className="text-white font-bold">ENABLED</span>
                </div>
                <div className="flex justify-between">
                  <span>MANUAL WORK REDUCTION:</span>
                  <span className="text-white font-bold">70% AVG</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (7 cols): Brutalist Text Content & Grid Cards */}
          <div className="lg:col-span-7 space-y-8">
            {/* Main Manifesto Box */}
            <div className="border-4 border-white bg-zinc-900 p-6 sm:p-8 shadow-[8px_8px_0px_#ffffff]">
              <h3 className="text-2xl sm:text-3xl font-black uppercase text-white mb-4 leading-tight">
                NO BLOAT. NO SLOP. JUST HIGH-OUTPUT AUTOMATION.
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                I engineer enterprise-grade CRM pipelines and custom workflow automations that systematically eliminate manual overhead. By integrating GoHighLevel, n8n, and webhooks, I turn fragmented lead management into autonomous revenue engines.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t-2 border-white">
                <div className="flex items-start gap-3">
                  <CheckSquare size={20} className="text-white shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold uppercase text-white">Zero Maintenance</h4>
                    <p className="text-[11px] text-zinc-400">Self-healing webhooks &amp; error handlers.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Cpu size={20} className="text-white shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold uppercase text-white">API First</h4>
                    <p className="text-[11px] text-zinc-400">Custom REST &amp; webhook integrations.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Brutalist 3-Column Spec Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { title: "50+ BUILT", desc: "Production automations live." },
                { title: "1.5+ YEARS", desc: "CRM specialization." },
                { title: "24/7 ACTIVE", desc: "Lead capture & sync." },
              ].map((card, i) => (
                <div
                  key={i}
                  className="border-2 border-white bg-zinc-950 p-4 shadow-[4px_4px_0px_#ffffff]"
                >
                  <h4 className="text-base font-black text-white mb-1">{card.title}</h4>
                  <p className="text-[11px] text-zinc-400">{card.desc}</p>
                </div>
              ))}
            </div>

            {/* Action Bar */}
            <div className="flex items-center justify-between border-4 border-white p-4 bg-white text-black font-bold">
              <span className="text-xs uppercase tracking-wider">NEED A BRUTALIST CRM AUDIT?</span>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 text-xs uppercase hover:bg-zinc-800 transition-colors"
              >
                <span>EXECUTE CALL</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutBrutalist;
