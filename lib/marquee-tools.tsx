import React from "react";
import Image from "next/image";
import { MarqueeItem } from "@/components/ui/slanted-glass-marquee";

export const TOOLS_DATA: MarqueeItem[] = [
  {
    name: "Clay",
    icon: (
      <Image
        src="/tools/Clay.png"
        alt="Clay logo"
        width={32}
        height={32}
        className="w-8 h-8 object-contain shrink-0 drop-shadow-md"
      />
    ),
  },
  {
    name: "Instantly",
    icon: (
      <Image
        src="/tools/Instantly.png"
        alt="Instantly logo"
        width={32}
        height={32}
        className="w-8 h-8 object-contain shrink-0 drop-shadow-md"
      />
    ),
  },
  {
    name: "Apify",
    icon: (
      <Image
        src="/tools/apify.png"
        alt="Apify logo"
        width={32}
        height={32}
        className="w-8 h-8 object-contain shrink-0 drop-shadow-md"
      />
    ),
  },
  {
    name: "Hunter.io",
    icon: (
      <Image
        src="/tools/hunter.png"
        alt="Hunter.io logo"
        width={32}
        height={32}
        className="w-8 h-8 object-contain shrink-0 drop-shadow-md"
      />
    ),
  },
  {
    name: "Lovable",
    icon: (
      <Image
        src="/tools/loveable.png"
        alt="Lovable logo"
        width={32}
        height={32}
        className="w-8 h-8 object-contain shrink-0 drop-shadow-md"
      />
    ),
  },
];

export default TOOLS_DATA;
