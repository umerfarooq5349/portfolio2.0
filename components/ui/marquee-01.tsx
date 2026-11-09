"use client";

import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Marquee } from "@/components/ui/marquee-01-utils/marquee";

export interface ReviewItem {
  name: string;
  username: string;
  body: string;
  profile: string;
}

const reviews: ReviewItem[] = [
  {
    name: "Cilem Knauf",
    username: "Owner, Abnehmen im Liegen Hamburg",
    body: "Muhammad and his team did an excellent job building and structuring our systems. Everything was handled professionally with great attention to detail. Results matched exactly what was promised.",
    profile: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
  },
  {
    name: "Stephen Clarke",
    username: "Founder, ARC Rehabilitation",
    body: "By building a complete patient growth system inside GoHighLevel, our clinic now captures, nurtures, and tracks every lead seamlessly. The automated condition-specific follow-ups saved our front desk countless hours.",
    profile: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
  },
  {
    name: "Dr. Posture Doctor",
    username: "Clinical Director, Chiropractic",
    body: "The strategic funnel audit and Practice Hub integration completely plugged our lead leaks. The automated missed appointment SMS recall has taken huge pressure off our front desk.",
    profile: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=150&auto=format&fit=crop&q=80",
  },
  {
    name: "David Okafor",
    username: "CEO, High-Ticket Academy",
    body: "Cleansing tens of thousands of contacts and setting up automated Fathom AI meeting notes into Slack was transformative for our business. Zero broken automations since.",
    profile: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
  },
  {
    name: "Liam Johnson",
    username: "Managing Director, eLearning",
    body: "Our cold outbound infrastructure on GoHighLevel and Instantly generated a consistent 65%+ open rate and filled our B2B pipeline within weeks.",
    profile: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
  },
  {
    name: "Sarah Mitchell",
    username: "Operations Lead, Digital Agency",
    body: "The intake-to-pipeline automation cut our agency client onboarding time from a week down to under 24 hours. The automated asset collection is flawless.",
    profile: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
  },
  {
    name: "Michael Torres",
    username: "Founder, Growth Consulting",
    body: "Umer understands CRM architecture and API webhooks at an elite level. Our GoHighLevel pipelines run 24/7 without a glitch.",
    profile: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80",
  },
  {
    name: "Emma Wilson",
    username: "Partner, Agency Solutions",
    body: "Fast delivery, zero errors, and clean systems. The best automation specialist we have partnered with across all client accounts.",
    profile: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
  },
];

const firstRow = reviews.slice(0, Math.ceil(reviews.length / 2));
const secondRow = reviews.slice(Math.ceil(reviews.length / 2));

export const ReviewCard = ({
  profile,
  name,
  username,
  body,
}: ReviewItem) => {
  return (
    <Card className="relative h-full w-[290px] sm:w-[320px] cursor-pointer overflow-hidden border border-[var(--border-subtle)] bg-[var(--surface)]/70 hover:bg-[var(--surface-elevated)]/90 backdrop-blur-md shadow-none p-4 sm:p-5 rounded-2xl transition-all duration-300 hover:border-[var(--accent)]/40 hover:-translate-y-0.5 group">
      <CardContent className="p-0 flex flex-col gap-2.5">
        <div className="flex flex-row items-center gap-3">
          <div className="relative w-9 h-9 rounded-full overflow-hidden border border-[var(--border-subtle)] group-hover:border-[var(--accent)]/60 transition-colors shrink-0">
            <Image
              className="object-cover"
              src={profile}
              alt={name}
              fill
              sizes="36px"
              unoptimized
            />
          </div>
          <div className="flex flex-col min-w-0">
            <p className="text-sm font-heading font-semibold text-white truncate">
              {name}
            </p>
            <p className="text-[11px] font-sans text-[var(--accent)] font-medium truncate">
              {username}
            </p>
          </div>
        </div>
        <p className="text-xs sm:text-[13px] leading-relaxed text-[var(--ice)]/80 line-clamp-3 font-sans">
          &ldquo;{body}&rdquo;
        </p>
      </CardContent>
    </Card>
  );
};

export default function TestimonialMarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-4">
      <Marquee pauseOnHover className="[--duration:32s] py-2">
        {firstRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:34s] py-2">
        {secondRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <div className="from-[var(--background)] pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-32 bg-gradient-to-r to-transparent z-10"></div>
      <div className="from-[var(--background)] pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-32 bg-gradient-to-l to-transparent z-10"></div>
    </div>
  );
}

