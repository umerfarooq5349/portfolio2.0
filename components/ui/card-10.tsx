"use client";

import * as React from "react";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { GlowCard } from "@/components/ui/spotlight-card";

export interface StatCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  value: number | string;
  change?: number | string;
  changeDescription?: string;
  icon?: React.ReactNode;
  suffix?: string;
  prefix?: string;
  glowColor?: "blue" | "purple" | "green" | "red" | "orange";
  useCounterAnimation?: boolean;
}

const StatCard = React.forwardRef<HTMLDivElement, StatCardProps>(
  (
    {
      title,
      value,
      change,
      changeDescription,
      icon,
      className,
      suffix = "",
      prefix = "",
      glowColor = "orange",
      useCounterAnimation = false,
      ...props
    },
    ref
  ) => {
    const internalRef = React.useRef<HTMLDivElement>(null);
    const combinedRef = (ref as React.RefObject<HTMLDivElement>) || internalRef;
    const isInView = useInView(combinedRef, { once: true, amount: 0.1 });

    const isNumeric = typeof value === "number";
    const motionValue = useMotionValue(isNumeric ? (value as number) : 0);
    const displayValue = useTransform(motionValue, (latest) =>
      Math.round(latest).toLocaleString()
    );

    React.useEffect(() => {
      if (useCounterAnimation && isNumeric && isInView) {
        const controls = animate(motionValue, value as number, {
          duration: 1.5,
          ease: "easeOut",
        });
        return controls.stop;
      }
    }, [isInView, value, motionValue, useCounterAnimation, isNumeric]);

    const isPositive = typeof change === "number" ? change >= 0 : true;
    const ariaLabel = `${title}: ${prefix}${value}${suffix}. ${change ? `${change} ${changeDescription || ""}` : ""}`;

    return (
      <GlowCard
        customSize={true}
        glowColor={glowColor}
        className={cn(
          "w-full h-full min-h-[160px] flex flex-col justify-between p-4.5 sm:p-6 rounded-3xl bg-[var(--surface)] border border-[var(--border-subtle)]",
          className
        )}
      >
        <div
          ref={combinedRef}
          className="flex flex-col gap-2 relative z-10 w-full"
          aria-label={ariaLabel}
          role="region"
          {...props}
        >
          {/* Main verified value */}
          <div className="flex items-baseline gap-1">
            {prefix && <span className="text-xl sm:text-2xl font-semibold text-[var(--accent)]">{prefix}</span>}
            <motion.h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter font-heading text-white">
              {useCounterAnimation && isNumeric ? (
                <motion.span>{displayValue}</motion.span>
              ) : (
                <span>{value}</span>
              )}
            </motion.h3>
            {suffix && <span className="text-xl sm:text-2xl font-semibold text-[var(--accent)]">{suffix}</span>}
          </div>

          {/* Title */}
          <p className="text-xs sm:text-sm font-medium text-[var(--ice)]/80 font-sans">{title}</p>

          {/* Verification / Change indicator */}
          {(change !== undefined || changeDescription) && (
            <div className="mt-2.5 flex items-center gap-2">
              {icon && (
                <span
                  className={cn(
                    "flex items-center justify-center rounded-full p-1.5 shrink-0",
                    isPositive ? "bg-emerald-500/20 text-emerald-400" : "bg-red-500/20 text-red-400"
                  )}
                >
                  {icon}
                </span>
              )}
              <p className="text-xs text-[var(--ice)]/80 font-sans">
                {change !== undefined && (
                  <span className={cn("font-semibold mr-1", isPositive ? "text-emerald-400" : "text-red-400")}>
                    {typeof change === "number" && change > 0 ? `+${change}%` : `${change}`}
                  </span>
                )}
                {changeDescription && <span className="text-[var(--ice)]/60">{changeDescription}</span>}
              </p>
            </div>
          )}
        </div>
      </GlowCard>
    );
  }
);

StatCard.displayName = "StatCard";

export { StatCard };
