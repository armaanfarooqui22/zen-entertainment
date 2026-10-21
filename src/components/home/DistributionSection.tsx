"use client";

import { motion } from "framer-motion";
import { Globe2, Radio, Tv, Film, Disc3, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/data/site";

export default function DistributionSection() {
  return (
    <section className="relative py-28 md:py-36 bg-surface/30 border-y border-white/5 overflow-hidden">
      {/* Background World Map Graphic with Glowing Arcs */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-20">
        <div className="w-[800px] h-[450px] border border-cinema-gold/20 rounded-full flex items-center justify-center relative">
          <div className="w-[600px] h-[340px] border border-cinema-magenta/20 rounded-full animate-pulse" />
          <div className="w-[400px] h-[220px] border border-cinema-violet/30 rounded-full" />
          {/* Pulsing Nodes */}
          {[
            { top: "25%", left: "30%" },
            { top: "45%", left: "55%" },
            { top: "35%", left: "75%" },
            { top: "70%", left: "40%" },
          ].map((pos, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 rounded-full bg-cinema-gold animate-ping"
              style={{ top: pos.top, left: pos.left }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headline and Exact Copy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-2 border border-cinema-gold/30 text-cinema-gold text-xs font-bebas tracking-[0.25em] uppercase">
              <Globe2 className="w-3.5 h-3.5" />
              <span>GLOBAL REACH & MONETIZATION</span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl font-bold text-cinema-text leading-tight">
              {siteConfig.distribution.title}
            </h2>

            {/* Exact Slide Copy */}
            <p className="text-cinema-muted text-base sm:text-lg leading-relaxed">
              {siteConfig.distribution.body}
            </p>

            {/* Distribution Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {siteConfig.distribution.highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3.5 rounded-xl glass-card-dark border border-white/5"
                >
                  <ShieldCheck className="w-4 h-4 text-cinema-gold flex-shrink-0" />
                  <span className="text-xs text-cinema-text/90 font-medium">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Globe & Interactive Syndication Nodes */}
          <div className="lg:col-span-5 relative">
            <div className="p-8 rounded-2xl glass-card border border-cinema-gold/30 space-y-6 text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-tr from-cinema-gold via-cinema-magenta to-cinema-violet flex items-center justify-center text-[#06060A] shadow-[0_0_30px_rgba(232,176,74,0.4)]">
                <Globe2 className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h3 className="font-display text-xl font-bold text-cinema-text">
                  Worldwide Syndication Architecture
                </h3>
                <p className="text-xs text-cinema-muted leading-relaxed">
                  Connecting regional Indian narratives with domestic broadcast leaders and international streaming audiences.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-surface-2/80 border border-white/5 space-y-1">
                  <Tv className="w-5 h-5 mx-auto text-cinema-gold" />
                  <p className="font-bebas text-xs text-cinema-text">BROADCAST</p>
                  <p className="text-[10px] text-cinema-muted">Satellite TV</p>
                </div>
                <div className="p-3 rounded-xl bg-surface-2/80 border border-white/5 space-y-1">
                  <Film className="w-5 h-5 mx-auto text-cinema-magenta" />
                  <p className="font-bebas text-xs text-cinema-text">OTT & WEB</p>
                  <p className="text-[10px] text-cinema-muted">Global Stream</p>
                </div>
                <div className="p-3 rounded-xl bg-surface-2/80 border border-white/5 space-y-1">
                  <Disc3 className="w-5 h-5 mx-auto text-cinema-violet" />
                  <p className="font-bebas text-xs text-cinema-text">THEATRE</p>
                  <p className="text-[10px] text-cinema-muted">Live Stages</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
