"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { servicesData } from "@/data/services";

export default function ServicesSection() {
  const [activeServiceId, setActiveServiceId] = useState<string>(servicesData[0].id);

  const activeService = servicesData.find((s) => s.id === activeServiceId) || servicesData[0];

  return (
    <section className="relative py-28 md:py-36 bg-[#06060A] overflow-hidden">
      {/* Dynamic Background Still with Smooth Crossfade */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService.bgImage}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.18, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={activeService.bgImage}
              alt={activeService.title}
              fill
              priority
              className="object-cover filter blur-sm brightness-75"
            />
          </motion.div>
        </AnimatePresence>

        {/* Cinematic Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#06060A] via-[#06060A]/85 to-[#06060A]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3">
            <span className="font-bebas text-xs sm:text-sm tracking-[0.3em] text-cinema-gold uppercase">
              WHAT WE CREATE
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-cinema-text">
              Comprehensive Production Verticals
            </h2>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-bebas tracking-widest text-cinema-gold hover:text-cinema-text transition-colors group"
          >
            <span>VIEW ALL SERVICES & SPECIFICATIONS</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>

        {/* 6 Interactive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.map((service) => {
            const isActive = service.id === activeServiceId;
            return (
              <div
                key={service.id}
                onMouseEnter={() => setActiveServiceId(service.id)}
                className={`p-7 rounded-2xl transition-all duration-500 cursor-pointer flex flex-col justify-between space-y-6 ${
                  isActive
                    ? "glass-card border-cinema-gold/60 shadow-[0_10px_35px_rgba(232,176,74,0.18)] scale-[1.02]"
                    : "glass-card-dark hover:border-white/20"
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-bebas text-2xl text-cinema-gold font-bold">
                      {service.number}
                    </span>
                    <span
                      className={`text-xs font-mono uppercase tracking-widest px-2.5 py-1 rounded-full ${
                        isActive
                          ? "bg-cinema-gold/20 text-cinema-gold border border-cinema-gold/30"
                          : "text-cinema-muted/60"
                      }`}
                    >
                      {service.categorySlug}
                    </span>
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl font-bold text-cinema-text">
                    {service.title}
                  </h3>

                  <p className="text-sm text-cinema-muted leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-3 pt-4 border-t border-white/10">
                  <p className="text-xs font-bebas text-cinema-gold/80 tracking-wider uppercase">
                    Key Deliverables:
                  </p>
                  <ul className="space-y-1.5 text-xs text-cinema-text/80">
                    {service.included.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cinema-gold flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/contact?service=${encodeURIComponent(service.title)}`}
                    className="inline-flex items-center gap-1.5 pt-3 text-xs font-bebas tracking-widest text-cinema-gold hover:text-white transition-colors"
                  >
                    <span>ENQUIRE ABOUT THIS SERVICE</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
