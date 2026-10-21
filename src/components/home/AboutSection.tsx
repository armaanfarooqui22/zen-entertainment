"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Clapperboard, Award, Sparkles, AlertCircle } from "lucide-react";
import { siteConfig } from "@/data/site";
import TiltCard from "@/components/ui/TiltCard";

export default function AboutSection() {
  const [animated, setAnimated] = useState(false);

  return (
    <section className="relative py-24 md:py-32 bg-[#06060A] overflow-hidden">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-[radial-gradient(circle,rgba(232,176,74,0.08)_0%,transparent_70%)] blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Story & Exact Company Overview */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-2 border border-cinema-gold/30 text-cinema-gold text-xs font-bebas tracking-[0.25em] uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>COMPANY OVERVIEW</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-cinema-text leading-tight">
              Crafting Immersive Stories for a{" "}
              <span className="text-gold-gradient">Global Audience</span>
            </h2>

            {/* Exact Prompt Copy */}
            <p className="text-cinema-muted text-base sm:text-lg leading-relaxed font-normal">
              {siteConfig.about.statement}
            </p>

            <div className="pt-4 border-t border-white/10">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4">
                {siteConfig.about.stats.map((stat, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex items-baseline font-bebas text-3xl sm:text-4xl text-cinema-gold font-bold tracking-tight">
                      <span>{stat.value}</span>
                      <span className="text-cinema-magenta text-xl">{stat.suffix}</span>
                    </div>
                    <div className="text-xs text-cinema-text/90 font-medium leading-tight">
                      {stat.label}
                    </div>
                    {stat.flag && (
                      <div className="text-[10px] text-cinema-muted/50 font-mono italic">
                        *{stat.flag}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Parallax Collage of Real Event Photos */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full h-[450px] sm:h-[520px]">
              {/* Card 1: CSMPAF Festival Crowd (Large Backdrop) */}
              <TiltCard className="absolute top-0 right-0 w-[85%] h-[68%] rounded-2xl glass-card overflow-hidden shadow-2xl border border-cinema-gold/25 z-10">
                <Image
                  src="/assets/work/festivals/csmpaf-crowd.png"
                  alt="CSMPAF Festival Crowd"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06060A]/80 via-transparent to-transparent flex items-end p-4">
                  <span className="font-bebas text-xs tracking-widest text-cinema-gold">
                    CSMPAF • 10,000+ AUDIENCE
                  </span>
                </div>
              </TiltCard>

              {/* Card 2: Ghazaliyat Concert Stage (Foreground Offset) */}
              <TiltCard className="absolute bottom-0 left-0 w-[75%] h-[55%] rounded-2xl glass-card overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.9)] border border-cinema-magenta/40 z-20">
                <Image
                  src="/assets/work/concerts/ghazaliyat.png"
                  alt="Ghazaliyat Musical Concert"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06060A]/85 via-transparent to-transparent flex items-end p-4">
                  <span className="font-bebas text-xs tracking-widest text-cinema-text">
                    GHAZALIYAT • LIVE CONCERT PRODUCTION
                  </span>
                </div>
              </TiltCard>

              {/* Floating Clapperboard Badge */}
              <div className="absolute -bottom-4 -right-4 z-30 bg-surface-2/95 border border-cinema-gold/40 rounded-full p-4 shadow-xl backdrop-blur-md flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cinema-gold to-cinema-magenta flex items-center justify-center text-[#06060A]">
                  <Award className="w-5 h-5 font-bold" />
                </div>
                <div className="pr-2">
                  <p className="font-bebas text-sm text-cinema-gold leading-none tracking-wider">
                    ESTABLISHED 2026
                  </p>
                  <p className="text-[10px] text-cinema-muted leading-tight">
                    MUMBAI, MAHARASHTRA
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
