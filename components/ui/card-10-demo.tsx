"use client";

import { StatCard } from "@/components/ui/card-10";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

export default function StatCardDemo() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {/* Example 1: Positive Trend */}
      <StatCard
        title="Team member showed up"
        value={95}
        change={32}
        changeDescription="last week"
        icon={<ArrowUpRight className="h-4 w-4 text-green-600 dark:text-green-400" />}
      />

      {/* Example 2: Negative Trend */}
      <StatCard
        title="Bugs reported"
        value={12}
        change={-15}
        changeDescription="last month"
        icon={<ArrowDownRight className="h-4 w-4 text-red-600 dark:text-red-400" />}
      />
      
      {/* Example 3: Neutral/Slight Positive Trend */}
      <StatCard
        title="Server Uptime"
        value={99}
        change={0.5}
        changeDescription="last 24h"
        icon={<ArrowUpRight className="h-4 w-4 text-green-600 dark:text-green-400" />}
      />
    </div>
  );
}
