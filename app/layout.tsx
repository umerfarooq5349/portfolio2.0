import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://muhammadumerfarooq.com"),
  title: "Muhammad Umer Farooq | CRM & Automation Expert | GoHighLevel Specialist",
  description:
    "Muhammad Umer Farooq is a CRM & Automation Expert specializing in GoHighLevel, n8n, Zapier, and AI automation. I help businesses automate operations, generate more leads, and close deals faster.",
  keywords: [
    "Muhammad Umer Farooq",
    "CRM automation expert",
    "GoHighLevel specialist",
    "n8n automation",
    "Zapier workflows",
    "business automation",
    "workflow automation",
    "lead management system",
    "sales funnel builder",
    "AI chatbot",
    "CRM setup",
    "SMS email automation",
    "real estate CRM",
    "healthcare CRM automation",
    "white label GHL",
    "SaaS GoHighLevel",
  ],
  authors: [{ name: "Muhammad Umer Farooq" }],
  creator: "Muhammad Umer Farooq",
  publisher: "Muhammad Umer Farooq",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://muhammadumerfarooq.com",
    siteName: "Muhammad Umer Farooq",
    title: "Muhammad Umer Farooq | CRM & Automation Expert",
    description:
      "CRM & Automation Expert specializing in GoHighLevel, n8n, Zapier. Helping businesses automate operations, generate leads, and scale faster.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Muhammad Umer Farooq – CRM & Automation Expert" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Umer Farooq | CRM & Automation Expert",
    description: "Automating business operations with GoHighLevel, n8n, Zapier & AI. 50+ automations built.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "https://muhammadumerfarooq.com" },
};

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { LenisProvider } from "@/components/providers/lenis-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="antialiased dark"
      suppressHydrationWarning
    >
      <head>
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=chubbo@700,800,900&f[]=supreme@400,500,700&display=swap"
        />
      </head>
      <body
        className="bg-[var(--background)] text-white overflow-x-hidden min-h-screen"
        suppressHydrationWarning
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <LenisProvider>
            {/* <Header /> */}
            <main>
              {children}
            </main>
            <Footer />
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
