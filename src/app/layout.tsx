import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/data/site";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";
import CustomCursor from "@/components/layout/CustomCursor";
import Preloader from "@/components/layout/Preloader";
import ScrollProgress from "@/components/layout/ScrollProgress";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { LanguageProvider } from "@/lib/languageContext";

export const metadata: Metadata = {
  metadataBase: new URL("https://zenentertainment.in"),
  title: "Zen Entertainment | Ashwika Interlink — Film, TV, Digital, Music & Event Production in Mumbai",
  description:
    "ASHWIKA INTERLINK (OPC) PVT. LTD., Marketed by Zen Entertainment, is a Mumbai entertainment production company producing films, television & OTT shows, live concerts, theatre events, and animation.",
  keywords: [
    "entertainment production company Mumbai",
    "Marathi content production",
    "concert & event management Mumbai",
    "TV/OTT show production",
    "Ashwika Interlink",
    "Zen Entertainment",
    "Ashwini Jalindar Kamble",
    "Marathi theatre production",
  ],
  authors: [{ name: "Zen Entertainment & Ashwika Interlink" }],
  openGraph: {
    title: "Zen Entertainment | Ashwika Interlink — Film, TV, Digital & Event Production",
    description:
      "Award-level entertainment production company in Mumbai. Films, Television, Live Concerts, Theatre, and Animation.",
    url: "https://zenentertainment.in",
    siteName: "Zen Entertainment",
    images: [
      {
        url: "/assets/work/festivals/csmpaf-crowd.png",
        width: 1200,
        height: 630,
        alt: "Zen Entertainment Production Showcase",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zen Entertainment | Ashwika Interlink",
    description: "Award-level entertainment production company in Mumbai.",
    images: ["/assets/work/festivals/csmpaf-crowd.png"],
  },
  icons: {
    icon: "/assets/brand/zen-logo.png",
    apple: "/assets/brand/zen-logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EntertainmentBusiness",
    name: "Zen Entertainment (Ashwika Interlink)",
    legalName: siteConfig.legalName,
    alternateName: "Ashwika Interlink (OPC) Pvt. Ltd.",
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address.line1,
      addressLocality: "Mahim West, Mumbai",
      addressRegion: "Maharashtra",
      postalCode: siteConfig.contact.address.postalCode,
      addressCountry: "IN",
    },
    telephone: siteConfig.contact.phones[0],
    email: siteConfig.contact.email,
    url: "https://zenentertainment.in",
    founder: {
      "@type": "Person",
      name: "Ashwini Jalindar Kamble",
      jobTitle: "Founder, Director & Producer",
    },
  };

  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#06060A] text-[#F5F1E8] antialiased selection:bg-cinema-gold selection:text-[#06060A]">
        <LanguageProvider>
          {/* Film Grain & Vignette */}
          <div className="film-grain" />
          <div className="cinematic-vignette" />

          {/* Interactive UI Layers */}
          <Preloader />
          <CustomCursor />
          <ScrollProgress />
          <WhatsAppButton />

          <SmoothScroll>
            <Navbar />
            <main className="min-h-screen relative">{children}</main>
            <Footer />
          </SmoothScroll>
        </LanguageProvider>
      </body>
    </html>
  );
}
