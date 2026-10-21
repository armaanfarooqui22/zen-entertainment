"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, MessageCircle, ArrowUpRight, Clapperboard } from "lucide-react";
import { siteConfig } from "@/data/site";

export default function EndCreditsCTA() {
  const message = encodeURIComponent(siteConfig.contact.whatsappMessage);
  const waUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${message}`;

  return (
    <section className="relative py-28 md:py-36 bg-[#06060A] overflow-hidden border-t border-white/5">
      {/* End-Credits Atmosphere */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(232,176,74,0.15)_0%,rgba(224,53,127,0.06)_40%,transparent_75%)]" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-10">
        {/* Theatrical Presented By Card */}
        <div className="space-y-4">
          <p className="font-bebas text-xs sm:text-sm tracking-[0.35em] text-cinema-gold/70 uppercase">
            END CREDITS • PRESENTED BY
          </p>

          <div className="flex items-center justify-center gap-3">
            <div className="relative h-8 w-24">
              <Image
                src="/zen-entertainment/assets/brand/ashwika-logo.png"
                alt="Ashwika Interlink"
                width={140}
                height={50}
                className="object-contain h-full w-auto"
              />
            </div>
            <div className="h-5 w-[1px] bg-cinema-gold/30" />
            <div className="relative h-7 w-20">
              <Image
                src="/zen-entertainment/assets/brand/zen-logo.png"
                alt="Zen Entertainment"
                width={120}
                height={45}
                className="object-contain h-full w-auto"
              />
            </div>
          </div>
        </div>

        {/* Master CTA Headline (Exact Copy) */}
        <div className="space-y-4">
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black text-cinema-text leading-[1.1] max-w-3xl mx-auto">
            Have a story to tell?{" "}
            <span className="text-signature-gradient">
              Let&apos;s make it unforgettable.
            </span>
          </h2>
          <p className="text-cinema-muted text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            {siteConfig.finalCta.sub}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-4">
          <Link
            href="/contact"
            className="w-full sm:w-auto px-9 py-4 rounded-full bg-gradient-to-r from-cinema-gold via-[#F28C28] to-cinema-gold bg-[length:200%_auto] hover:bg-[position:right_center] text-[#06060A] font-bebas text-lg tracking-widest uppercase transition-all duration-500 shadow-[0_0_35px_rgba(232,176,74,0.4)] hover:shadow-[0_0_45px_rgba(232,176,74,0.6)] flex items-center justify-center gap-2 group active:scale-95"
          >
            <Sparkles className="w-5 h-5 fill-[#06060A]" />
            <span>{siteConfig.finalCta.primaryBtn}</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-surface-2 border border-cinema-gold/30 hover:border-cinema-gold text-cinema-text hover:text-cinema-gold font-bebas text-lg tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            <MessageCircle className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />
            <span>{siteConfig.finalCta.secondaryBtn}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
