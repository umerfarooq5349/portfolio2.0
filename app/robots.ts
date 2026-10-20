import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        // Explicitly permit OpenAI and generative search crawlers for AI visibility
        userAgent: ["OAI-SearchBot", "ChatGPT-User", "Google-Extended", "PerplexityBot"],
        allow: "/",
      },
    ],
    sitemap: "https://muhammadumer.coderacks.com/sitemap.xml",
  };
}
