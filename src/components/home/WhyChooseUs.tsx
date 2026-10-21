"use client";

import { motion } from "framer-motion";
import { whyChooseUsData } from "@/data/why-us";

export default function WhyChooseUs() {
  return (
    <section className="relative py-28 md:py-36 bg-[#06060A] border-t border-white/5 overflow-hidden">
      {/* Background Radial Glow */}
      <div className="pointer-events-none absolute right-0 top-1/3 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(123,92,255,0.06)_0%,transparent_70%)] blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-2 border border-cinema-gold/30 text-cinema-gold text-xs font-bebas tracking-[0.25em] uppercase">
            <span>THE PRODUCTION ADVANTAGE</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-bold text-cinema-text">
            Why Choose <span className="text-gold-gradient">Ashwika Interlink?</span>
          </h2>
          <p className="text-cinema-muted text-base leading-relaxed">
            Marketed by Zen Entertainment, we bring unwavering creative passion, technical supremacy, and rigorous financial discipline to every production.
          </p>
        </div>

        {/* 6 Giant Outlined Numerals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseUsData.map((item, idx) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="glass-card p-8 flex flex-col justify-between space-y-6 group hover:border-cinema-gold/50"
            >
              {/* Giant Outlined Numeral */}
              <div className="relative">
                <span
                  className="font-bebas text-7xl sm:text-8xl font-black tracking-tight select-none block text-transparent"
                  style={{
                    WebkitTextStroke: "1.5px rgba(232, 176, 74, 0.4)",
                  }}
                >
                  {item.number}
                </span>
                <div className="absolute top-2 left-16 h-[1px] w-20 bg-gradient-to-r from-cinema-gold/40 to-transparent" />
              </div>

              {/* Title & Original One-Line Explanation */}
              <div className="space-y-3">
                <h3 className="font-display text-2xl font-bold text-cinema-text group-hover:text-cinema-gold transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-cinema-muted leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Highlight Tag */}
              <div className="pt-4 border-t border-white/10">
                <p className="text-xs text-cinema-gold/80 italic font-sans">
                  &ldquo;{item.highlight}&rdquo;
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
