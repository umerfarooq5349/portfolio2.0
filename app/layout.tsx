import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#11283D",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://muhammadumer.coderacks.com"),
  title: {
    default: "GoHighLevel & n8n Automation Expert | Muhammad Umer Farooq",
    template: "%s | Muhammad Umer Farooq",
  },
  description:
    "Muhammad Umer Farooq builds GoHighLevel, n8n and AI automation systems that automate CRM, lead follow-up, qualification and appointment booking for service businesses.",
  keywords: [
    "Muhammad Umer Farooq",
    "GoHighLevel automation expert",
    "n8n automation specialist",
    "CRM automation consultant",
    "GoHighLevel CRM setup",
    "Zapier workflow automation",
    "AI lead qualification",
    "automated appointment booking",
    "real estate lead automation",
    "agency CRM onboarding",
    "lead follow-up automation",
  ],
  authors: [{ name: "Muhammad Umer Farooq", url: "https://muhammadumer.coderacks.com" }],
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
    url: "https://muhammadumer.coderacks.com",
    siteName: "Muhammad Umer Farooq",
    title: "GoHighLevel & n8n Automation Expert | Muhammad Umer Farooq",
    description:
      "I design and build GoHighLevel, n8n and AI automation systems that help businesses capture, qualify, nurture and convert leads with less manual work.",
    images: [{ url: "/preview-img.png", width: 1200, height: 630, alt: "Muhammad Umer Farooq - GoHighLevel & n8n Automation Expert" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "GoHighLevel & n8n Automation Expert | Muhammad Umer Farooq",
    description: "Building GoHighLevel, n8n and AI automation systems that turn leads into booked clients.",
    images: ["/preview-img.png"],
  },
  alternates: { canonical: "https://muhammadumer.coderacks.com" },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  "@id": "https://muhammadumer.coderacks.com/#person",
                  name: "Muhammad Umer Farooq",
                  url: "https://muhammadumer.coderacks.com",
                  jobTitle: "GoHighLevel & n8n Automation Expert",
                  description:
                    "Specialist in GoHighLevel, n8n, CRM architecture, and AI lead qualification automation for service businesses.",
                  sameAs: [
                    "https://www.linkedin.com/in/umer-ai-agents/",
                    "https://github.com/umerfarooq5349/",
                    "https://www.instagram.com/muhammad.umer.faro.oq",
                  ],
                  knowsAbout: [
                    "GoHighLevel",
                    "n8n",
                    "Zapier",
                    "CRM Automation",
                    "AI Lead Qualification",
                    "Appointment Booking Automation",
                  ],
                },
                {
                  "@type": "WebSite",
                  "@id": "https://muhammadumer.coderacks.com/#website",
                  url: "https://muhammadumer.coderacks.com",
                  name: "Muhammad Umer Farooq | Automation & CRM Specialist",
                  publisher: {
                    "@id": "https://muhammadumer.coderacks.com/#person",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body
        className="bg-[var(--background)] text-white overflow-x-clip min-h-screen"
        suppressHydrationWarning
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <LenisProvider>
            <Header />

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
