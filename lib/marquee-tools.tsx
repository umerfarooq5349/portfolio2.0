import React from "react";
import Image from "next/image";
import { MarqueeItem } from "@/components/ui/slanted-glass-marquee";

export const TOOLS_DATA: MarqueeItem[] = [
  {
    name: "GoHighLevel",
    icon: (
      <svg
        className="w-8 h-8 shrink-0"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="40" height="40" rx="10" fill="#1877F2" fillOpacity="0.15" />
        <path
          d="M20 7L29.5 12.5V23.5L20 29L10.5 23.5V12.5L20 7Z"
          stroke="#2A85FF"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <path
          d="M20 13L25.5 16.2V22.6L20 25.8L14.5 22.6V16.2L20 13Z"
          fill="#3B82F6"
        />
        <circle cx="20" cy="19.5" r="2.5" fill="#FFFFFF" />
      </svg>
    ),
  },
  {
    name: "n8n",
    icon: (
      <svg
        className="w-8 h-8 shrink-0"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="40" height="40" rx="10" fill="#EA4B71" fillOpacity="0.15" />
        <path
          d="M12 20C12 17.7909 13.7909 16 16 16C18.2091 16 20 17.7909 20 20C20 22.2091 21.7909 24 24 24C26.2091 24 28 22.2091 28 20"
          stroke="#FF6584"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
        <circle cx="12" cy="20" r="3" fill="#EA4B71" />
        <circle cx="20" cy="20" r="3" fill="#FF7D90" />
        <circle cx="28" cy="20" r="3" fill="#EA4B71" />
      </svg>
    ),
  },
  {
    name: "Make.com",
    icon: (
      <svg
        className="w-8 h-8 shrink-0"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="40" height="40" rx="10" fill="#6D3AEC" fillOpacity="0.15" />
        <path
          d="M13 27V15L17.5 22L20 18L22.5 22L27 15V27"
          stroke="#8A5BFF"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="13" cy="15" r="2" fill="#FFFFFF" />
        <circle cx="27" cy="15" r="2" fill="#FFFFFF" />
      </svg>
    ),
  },
  {
    name: "Zapier",
    icon: (
      <svg
        className="w-8 h-8 shrink-0"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="40" height="40" rx="10" fill="#FF4F00" fillOpacity="0.15" />
        <path
          d="M20 9V31M9 20H31M12.2 12.2L27.8 27.8M27.8 12.2L12.2 27.8"
          stroke="#FF4F00"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    name: "OpenAI",
    icon: (
      <svg
        className="w-8 h-8 shrink-0"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="40" height="40" rx="10" fill="#10A37F" fillOpacity="0.15" />
        <path
          d="M28.5 18.5C28.2 14.8 25.2 12 21.5 12C20.5 12 19.5 12.3 18.7 12.8C18.2 11.1 16.6 10 14.8 10C12.4 10 10.5 11.9 10.5 14.3C10.5 15 10.7 15.6 11 16.1C9.5 17.1 8.5 18.8 8.5 20.8C8.5 23.3 10 25.4 12.2 26.2C12.2 26.8 12.4 27.4 12.7 28C13.8 29.8 15.8 31 18 31C19.2 31 20.4 30.6 21.3 29.8C22.3 30.6 23.6 31 25 31C27.8 31 30 28.8 30 26C30 25.1 29.8 24.3 29.3 23.6C30.4 22.3 31 20.7 31 19C31 18.8 31 18.7 31 18.5H28.5Z"
          stroke="#10A37F"
          strokeWidth="2.2"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "Airtable",
    icon: (
      <svg
        className="w-8 h-8 shrink-0"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="40" height="40" rx="10" fill="#FCB400" fillOpacity="0.15" />
        <path d="M12 15L20 11L28 15L20 19L12 15Z" fill="#FCB400" />
        <path d="M21 21.5L28 17.8V26.2L21 30V21.5Z" fill="#18BFFF" />
        <path d="M19 21.5V30L12 26.2V17.8L19 21.5Z" fill="#F82B60" />
      </svg>
    ),
  },
  {
    name: "Clay",
    icon: (
      <Image
        src="/tools/Clay.png"
        alt="Clay logo"
        width={32}
        height={32}
        loading="lazy"
        className="w-8 h-8 object-contain shrink-0"
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
        loading="lazy"
        className="w-8 h-8 object-contain shrink-0"
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
        loading="lazy"
        className="w-8 h-8 object-contain shrink-0"
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
        loading="lazy"
        className="w-8 h-8 object-contain shrink-0"
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
        loading="lazy"
        className="w-8 h-8 object-contain shrink-0"
      />
    ),
  },
];

export default TOOLS_DATA;
