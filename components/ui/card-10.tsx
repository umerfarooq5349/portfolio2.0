"use client";

import * as React from "react";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { GlowCard } from "@/components/ui/spotlight-card";

// Define the props for the component
export interface StatCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  value: number;
  change: number;
  changeDescription: string;
  icon: React.ReactNode;
  glowColor?: 'blue' | 'purple' | 'green' | 'red' | 'orange';
}

const StatCard = React.forwardRef<HTMLDivElement, StatCardProps>(
  ({ title, value, change, changeDescription, icon, className, glowColor = "orange", ...props }, ref) => {
    const internalRef = React.useRef<HTMLDivElement>(null);
    const combinedRef = (ref as React.RefObject<HTMLDivElement>) || internalRef;
    const isInView = useInView(combinedRef, { once: true, amount: 0.3 });

    // Determine trend for styling
    const isPositive = change >= 0;

    // Framer Motion hook for animating the number
    const motionValue = useMotionValue(0);

    // Transform the motion value to a rounded integer for display
    const displayValue = useTransform(motionValue, (latest) =>
      Math.round(latest).toLocaleString()
    );

    React.useEffect(() => {
      if (isInView) {
        const controls = animate(motionValue, value, {
          duration: 2.2,
          ease: "easeOut",
        });
        return controls.stop;
      }
    }, [isInView, value, motionValue]);

    // Construct a meaningful ARIA label for accessibility
    const ariaLabel = `${title}: ${value}. Change is ${change > 0 ? '+' : ''}${change}% ${changeDescription}.`;

    return (
      <GlowCard
        customSize={true}
        glowColor={glowColor}
        className={cn("w-full h-full min-h-[160px] flex flex-col justify-between", className)}
      >
        <div
          ref={combinedRef}
          className="flex flex-col gap-2 relative z-10 w-full"
          aria-label={ariaLabel}
          role="region"
          {...props}
        >
          {/* Main animated value */}
          <div className="flex items-baseline gap-1">
            <motion.h3 className="text-4xl sm:text-5xl font-bold tracking-tighter font-heading text-white">
              {displayValue}
            </motion.h3>
            <span className="text-2xl font-semibold text-[var(--accent)]">%</span>
          </div>

          {/* Title */}
          <p className="text-sm sm:text-base font-medium text-[var(--ice)]/80 font-sans">{title}</p>

          {/* Change indicator */}
          <div className="mt-3 flex items-center gap-2">
            <span
              className={cn(
                "flex items-center justify-center rounded-full p-1.5",
                isPositive ? "bg-emerald-500/20" : "bg-red-500/20"
              )}
            >
              {icon}
            </span>
            <p className="text-xs sm:text-sm text-zinc-300 font-sans">
              <span
                className={cn(
                  "font-semibold",
                  isPositive ? "text-emerald-400" : "text-red-400"
                )}
              >
                {isPositive ? "+" : ""}
                {change}%
              </span>
              <span className="text-zinc-400"> {changeDescription}</span>
            </p>
          </div>
        </div>
      </GlowCard>
    );
  }
);

StatCard.displayName = "StatCard";

export { StatCard };
