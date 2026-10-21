"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowDown, Clapperboard, Sparkles } from "lucide-react";
import FilmReel from "./FilmReel";
import { siteConfig } from "@/data/site";
import { useLanguage } from "@/lib/languageContext";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 25;
    const y = (e.clientY - rect.top - rect.height / 2) / 25;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full flex flex-col justify-between items-center pt-28 pb-6 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#06060A]"
    >
      {/* 1. Dramatic Cinema Spotlight Cone Effect */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] md:w-[1200px] h-[750px] bg-[radial-gradient(ellipse_at_top,rgba(232,176,74,0.2)_0%,rgba(224,53,127,0.06)_45%,transparent_75%)] blur-2xl z-0"
        style={{
          x: smoothX,
          y: smoothY,
        }}
      />

      {/* Floating Ambient Film Reel in Background */}
      <motion.div
        className="absolute -right-16 top-1/4 opacity-15 md:opacity-25 pointer-events-none z-0 hidden sm:block"
        style={{
          x: smoothX,
          y: smoothY,
        }}
      >
        <FilmReel size={420} />
      </motion.div>

      {/* Main Hero Stage */}
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center my-auto px-4">
        {/* Clapperboard / Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-2/80 border border-cinema-gold/30 shadow-[0_0_20px_rgba(232,176,74,0.15)] mb-6 backdrop-blur-md"
        >
          <Clapperboard className="w-3.5 h-3.5 text-cinema-gold animate-bounce" />
          <span className="font-bebas text-xs md:text-sm tracking-[0.25em] text-cinema-gold uppercase">
            {siteConfig.hero.eyebrow}
          </span>
        </motion.div>

        {/* Master Headline: "We Tell Stories That Stay With You." */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-cinema-text tracking-tight leading-[1.08] max-w-4xl"
        >
          {siteConfig.hero.headlinePart1}
          <span className="text-signature-gradient drop-shadow-[0_0_35px_rgba(224,53,127,0.35)]">
            {siteConfig.hero.headlineGradient}
          </span>
          {siteConfig.hero.headlinePart2}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="mt-6 text-base sm:text-lg md:text-xl text-cinema-muted/90 max-w-2xl font-light leading-relaxed italic"
        >
          &ldquo;{siteConfig.hero.sub}&rdquo;
        </motion.p>

        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto"
        >
          <Link
            href="/portfolio"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-surface-2 border border-cinema-gold/40 hover:border-cinema-gold text-cinema-text hover:text-cinema-gold font-bebas text-lg tracking-widest uppercase transition-all duration-300 shadow-lg hover:shadow-[0_0_25px_rgba(232,176,74,0.25)] flex items-center justify-center gap-2 group"
          >
            <span>{t("View Our Work", "आमचे काम पहा")}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-cinema-gold group-hover:scale-150 transition-transform" />
          </Link>

          <Link
            href="/contact"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-cinema-gold via-[#F28C28] to-cinema-gold bg-[length:200%_auto] hover:bg-[position:right_center] text-[#06060A] font-bebas text-lg tracking-widest uppercase transition-all duration-500 shadow-[0_0_30px_rgba(232,176,74,0.4)] hover:shadow-[0_0_40px_rgba(232,176,74,0.6)] flex items-center justify-center gap-2 active:scale-95"
          >
            <Sparkles className="w-4 h-4 fill-[#06060A]" />
            <span>{t("Start a Project", "प्रकल्प सुरू करा")}</span>
          </Link>
        </motion.div>
      </div>

      {/* Bottom Marquee Strip: FILMS • TELEVISION • DIGITAL • MUSIC • LIVE EVENTS • ANIMATION */}
      <div className="w-full relative z-10 pt-6">
        <div className="relative w-full overflow-hidden border-y border-cinema-gold/20 py-3 bg-surface/50 backdrop-blur-sm">
          <div className="flex w-max animate-marquee space-x-12 select-none">
            {[...Array(4)].map((_, groupIdx) => (
              <div key={groupIdx} className="flex items-center space-x-8">
                {siteConfig.hero.marqueeItems.map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-8">
                    <span className="font-bebas text-sm md:text-base tracking-[0.25em] text-cinema-gold/80 hover:text-cinema-gold transition-colors">
                      {item}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-cinema-magenta/60" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center pt-3 text-cinema-muted/60">
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex items-center gap-1.5 text-[11px] font-bebas tracking-widest uppercase"
          >
            <span>SCROLL TO EXPLORE PRODUCTION</span>
            <ArrowDown className="w-3.5 h-3.5 text-cinema-gold" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
