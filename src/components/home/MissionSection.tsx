"use client";

import { motion } from "framer-motion";
import { Sparkles, Users, Cpu, Heart } from "lucide-react";
import { siteConfig } from "@/data/site";

const icons = [Sparkles, Users, Cpu, Heart];

export default function MissionSection() {
  return (
    <section className="relative py-24 md:py-32 bg-surface/40 border-y border-white/5 overflow-hidden">
      {/* Background Lighting Accent */}
      <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 h-[350px] bg-[radial-gradient(ellipse_at_center,rgba(224,53,127,0.06)_0%,transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Giant Pull-Quote */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-2 border border-cinema-magenta/30 text-cinema-magenta text-xs font-bebas tracking-[0.25em] uppercase">
            <span>OUR MISSION STATEMENT</span>
          </div>

          <blockquote className="font-display text-2xl sm:text-4xl md:text-5xl font-semibold text-cinema-text leading-tight italic">
            &ldquo;{siteConfig.mission.pullQuote}&rdquo;
          </blockquote>

          <p className="text-cinema-muted text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            {siteConfig.mission.body}
          </p>
        </div>

        {/* Four Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {siteConfig.mission.pillars.map((pillar, idx) => {
            const IconComponent = icons[idx % icons.length];
            return (
              <motion.div
                key={pillar.id}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="glass-card p-6 sm:p-7 flex flex-col justify-between space-y-6 relative group overflow-hidden border border-cinema-gold/15 hover:border-cinema-gold/40"
              >
                {/* Top Pillar ID and Icon */}
                <div className="flex items-center justify-between">
                  <span className="font-bebas text-2xl text-cinema-gold/60 font-bold group-hover:text-cinema-gold transition-colors">
                    {pillar.id}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-surface-2 flex items-center justify-center text-cinema-gold border border-cinema-gold/20 group-hover:border-cinema-gold transition-colors">
                    <IconComponent className="w-5 h-5" />
                  </div>
                </div>

                {/* Pillar Description (Exact Copy) */}
                <div className="space-y-2">
                  <h3 className="font-display text-lg font-bold text-cinema-text">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-cinema-muted leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                {/* Bottom Gradient Line */}
                <div className="w-full h-[2px] bg-gradient-to-r from-cinema-gold via-cinema-magenta to-transparent opacity-40 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
