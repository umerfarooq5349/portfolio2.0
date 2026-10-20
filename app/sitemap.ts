import { MetadataRoute } from "next";
import { SERVICES_DATA } from "@/lib/services-data";
import { INDUSTRIES_DATA } from "@/lib/industries-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://muhammadumer.coderacks.com";
  const lastModified = new Date();

  const coreRoutes = [
    "",
    "/about",
    "/services",
    "/projects",
    "/contact",
    "/blog",
    "/faq",
    "/testimonials",
    "/resume",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Canonical dedicated service landing pages
  const serviceRoutes = Object.keys(SERVICES_DATA).map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  // Canonical dedicated industry landing pages
  const industryRoutes = Object.keys(INDUSTRIES_DATA).map((slug) => ({
    url: `${baseUrl}/industries/${slug}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  // Canonical descriptive case study URLs
  const projectRoutes = [
    "arc-rehabilitation-pilates",
    "abnehmen-im-liegen-hamburg",
    "the-posture-doctor",
    "coaching-ecosystem-rebuild",
    "elearning-agency-outbound",
    "agency-intake-automation",
  ].map((slug) => ({
    url: `${baseUrl}/projects/${slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  // Canonical descriptive blog URLs
  const blogRoutes = [
    "gohighlevel-workflow-automation",
    "n8n-vs-zapier",
    "ai-chatbot-real-estate-leads",
  ].map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  return [
    ...coreRoutes,
    ...serviceRoutes,
    ...industryRoutes,
    ...projectRoutes,
    ...blogRoutes,
  ];
}
