import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  experimental: {
    optimizePackageImports: [
      "@phosphor-icons/react",
      "lucide-react",
      "framer-motion",
      "gsap",
      "swiper",
      "@radix-ui/react-dialog",
      "@radix-ui/react-hover-card",
      "@radix-ui/react-tabs",
      "@radix-ui/react-slot",
    ],
  },
  allowedDevOrigins: ["192.168.1.11"],
  async redirects() {
    return [
      // Case study permanent 301 redirects to descriptive slugs
      {
        source: "/projects/1",
        destination: "/projects/arc-rehabilitation-pilates",
        permanent: true,
      },
      {
        source: "/projects/2",
        destination: "/projects/abnehmen-im-liegen-hamburg",
        permanent: true,
      },
      {
        source: "/projects/3",
        destination: "/projects/the-posture-doctor",
        permanent: true,
      },
      {
        source: "/projects/4",
        destination: "/projects/coaching-ecosystem-rebuild",
        permanent: true,
      },
      {
        source: "/projects/5",
        destination: "/projects/elearning-agency-outbound",
        permanent: true,
      },
      {
        source: "/projects/6",
        destination: "/projects/agency-intake-automation",
        permanent: true,
      },
      // Blog article permanent 301 redirects to descriptive slugs
      {
        source: "/blog/1",
        destination: "/blog/gohighlevel-workflow-automation",
        permanent: true,
      },
      {
        source: "/blog/2",
        destination: "/blog/n8n-vs-zapier",
        permanent: true,
      },
      {
        source: "/blog/3",
        destination: "/blog/ai-chatbot-real-estate-leads",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
