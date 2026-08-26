"use client";

import { GlowCard } from "@/components/ui/spotlight-card";

export default function GlowCardDemo() {
  return (
    <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-6 p-6">
      <GlowCard glowColor="orange" size="md" className="bg-[#112335]/70 border-white/10 text-white">
        <div className="flex flex-col justify-between h-full p-2">
          <span className="text-xs font-mono uppercase tracking-widest text-[#ECB365]">01 &bull; CRM ARCHITECTURE</span>
          <div>
            <h4 className="text-lg font-heading font-bold text-white mb-1">GoHighLevel Sub-Accounts</h4>
            <p className="text-xs text-[var(--ice)]/70">Custom funnel pipelines, trigger links, and multi-channel lead workflows.</p>
          </div>
        </div>
      </GlowCard>

      <GlowCard glowColor="purple" size="md" className="bg-[#112335]/70 border-white/10 text-white">
        <div className="flex flex-col justify-between h-full p-2">
          <span className="text-xs font-mono uppercase tracking-widest text-[#A855F7]">02 &bull; WORKFLOW MESH</span>
          <div>
            <h4 className="text-lg font-heading font-bold text-white mb-1">n8n &amp; Zapier Automation</h4>
            <p className="text-xs text-[var(--ice)]/70">Seamless API webhooks connecting CRM, databases, and instant messaging.</p>
          </div>
        </div>
      </GlowCard>

      <GlowCard glowColor="green" size="md" className="bg-[#112335]/70 border-white/10 text-white">
        <div className="flex flex-col justify-between h-full p-2">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">03 &bull; AI AGENTS</span>
          <div>
            <h4 className="text-lg font-heading font-bold text-white mb-1">24/7 AI Lead Qualifiers</h4>
            <p className="text-xs text-[var(--ice)]/70">Autonomous conversational chatbots scheduling appointments directly on calendar.</p>
          </div>
        </div>
      </GlowCard>
    </div>
  );
}

export { GlowCardDemo as Default };
