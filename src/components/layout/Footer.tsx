"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Instagram, ArrowUp, Film } from "lucide-react";
import { siteConfig } from "@/data/site";
import { formatPhoneNumber } from "@/lib/utils";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#06060A] border-t border-cinema-gold/20 pt-16 pb-12 overflow-hidden">
      {/* Film Perforation Accent Bar */}
      <div className="absolute top-0 inset-x-0 h-3 bg-gradient-to-r from-cinema-gold/40 via-cinema-magenta/40 to-cinema-violet/40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="space-y-4 lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-24">
                <Image
                  src="/assets/brand/ashwika-logo.png"
                  alt="Ashwika Interlink"
                  width={140}
                  height={50}
                  className="object-contain h-full w-auto"
                />
              </div>
              <div className="h-6 w-[1px] bg-cinema-gold/30" />
              <div className="relative h-8 w-20">
                <Image
                  src="/assets/brand/zen-logo.png"
                  alt="Zen Entertainment"
                  width={120}
                  height={45}
                  className="object-contain h-full w-auto"
                />
              </div>
            </div>

            <p className="text-xs text-cinema-muted leading-relaxed">
              ASHWIKA INTERLINK (OPC) PVT. LTD., Marketed by Zen Entertainment, is a premier Mumbai entertainment production company crafting award-level films, broadcast television, concerts, and digital narratives.
            </p>

            <div className="pt-2 text-[11px] font-mono text-cinema-gold/80">
              CIN: {siteConfig.cin}
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-3">
            <h4 className="font-bebas text-base text-cinema-gold tracking-widest uppercase">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cinema-muted hover:text-cinema-gold transition-colors inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="font-bebas text-base text-cinema-gold tracking-widest uppercase">
              Production Office
            </h4>
            <div className="space-y-2.5 text-xs text-cinema-muted">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-cinema-gold flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {siteConfig.contact.address.formatted}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-cinema-gold flex-shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-cinema-gold transition-colors underline-offset-2 hover:underline"
                >
                  {siteConfig.contact.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-cinema-gold flex-shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  {siteConfig.contact.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone}`}
                      className="hover:text-cinema-gold transition-colors"
                    >
                      {formatPhoneNumber(phone)}
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2.5 pt-1">
                <Instagram className="w-4 h-4 text-cinema-magenta flex-shrink-0" />
                <a
                  href={siteConfig.contact.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cinema-magenta transition-colors font-medium text-cinema-text"
                >
                  {siteConfig.contact.instagram.handle}
                </a>
              </div>
            </div>
          </div>

          {/* Dark-styled Map Embed */}
          <div className="space-y-3">
            <h4 className="font-bebas text-base text-cinema-gold tracking-widest uppercase">
              Studio Location
            </h4>
            <div className="w-full h-36 rounded-xl overflow-hidden border border-cinema-gold/20 shadow-inner bg-surface">
              <iframe
                title="Office Location Map"
                src={siteConfig.contact.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  filter: "invert(90%) hue-rotate(180deg) brightness(85%) contrast(110%)",
                }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cinema-muted">
          <p className="text-center sm:text-left">
            © 2026 {siteConfig.legalName} | Marketed by {siteConfig.marketedBy}. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="flex items-center gap-2 text-cinema-gold hover:text-cinema-text transition-colors group"
          >
            <span className="font-bebas tracking-widest uppercase">Back To Top</span>
            <div className="w-7 h-7 rounded-full bg-surface-2 border border-cinema-gold/30 flex items-center justify-center group-hover:border-cinema-gold transition-colors">
              <ArrowUp className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
