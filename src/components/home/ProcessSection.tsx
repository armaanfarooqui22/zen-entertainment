"use client";

import { motion } from "framer-motion";
import { productionProcess } from "@/data/process";
import { CheckCircle2 } from "lucide-react";

export default function ProcessSection() {
  return (
    <section className="relative py-28 md:py-36 bg-[#06060A] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="font-bebas text-xs sm:text-sm tracking-[0.3em] text-cinema-gold uppercase">
            HOW WE BRING STORIES TO LIFE
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-cinema-text">
            End-to-End Production Process
          </h2>
          <p className="text-cinema-muted text-base leading-relaxed">
            From the first creative spark in the writers&apos; room to global broadcast and theatrical distribution.
          </p>
        </div>

        {/* Timeline with Drawing Line */}
        <div className="relative">
          {/* Central Line for Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cinema-gold via-cinema-magenta to-cinema-violet -translate-x-1/2 opacity-30" />

          <div className="space-y-12 lg:space-y-16">
            {productionProcess.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={step.step}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${
                    isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="w-full lg:w-[46%] glass-card p-6 sm:p-8 space-y-4 hover:border-cinema-gold/40"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bebas text-3xl text-cinema-gold font-bold">
                        {step.step}
                      </span>
                      <span className="font-devanagari text-xs px-3 py-1 rounded-full bg-surface-2 text-cinema-muted border border-white/5">
                        {step.marathiName}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-display text-xl font-bold text-cinema-text">
                        {step.name}: {step.title}
                      </h3>
                      <p className="text-sm text-cinema-muted leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-white/10 space-y-1.5">
                      {step.deliverables.map((del, dIdx) => (
                        <div key={dIdx} className="flex items-center gap-2 text-xs text-cinema-text/80">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cinema-gold flex-shrink-0" />
                          <span>{del}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Center Node Icon */}
                  <div className="hidden lg:flex w-[8%] justify-center relative">
                    <div className="w-12 h-12 rounded-full bg-surface-2 border-2 border-cinema-gold flex items-center justify-center font-bebas text-sm text-cinema-gold shadow-[0_0_20px_rgba(232,176,74,0.4)] z-10">
                      {step.step}
                    </div>
                  </div>

                  {/* Empty Spacer Column for Alignment */}
                  <div className="hidden lg:block w-[46%]" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
