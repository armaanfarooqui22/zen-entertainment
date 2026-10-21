"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [count, setCount] = useState<number>(3);
  const [isDone, setIsDone] = useState<boolean>(false);
  const [shouldRender, setShouldRender] = useState<boolean>(false);

  useEffect(() => {
    // Check if user already saw the preloader in this session
    const seen = sessionStorage.getItem("zen_preloader_seen");
    if (seen) {
      setIsDone(true);
      return;
    }

    setShouldRender(true);

    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setTimeout(() => {
            sessionStorage.setItem("zen_preloader_seen", "true");
            setIsDone(true);
          }, 400);
          return 0;
        }
        return prev - 1;
      });
    }, 600); // 600ms per beat = ~1.8s total countdown

    return () => clearInterval(interval);
  }, []);

  const handleSkip = () => {
    sessionStorage.setItem("zen_preloader_seen", "true");
    setIsDone(true);
  };

  if (!shouldRender || isDone) return null;

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[10000] bg-[#06060A] flex flex-col items-center justify-center overflow-hidden cursor-pointer select-none"
          onClick={handleSkip}
        >
          {/* Subtle Projector Beam & Film Flicker */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(232,176,74,0.12)_0%,transparent_60%)] animate-pulse" />
          
          {/* Film Leader Clock Face */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
            {/* Outer Target Circles */}
            <div className="absolute inset-0 rounded-full border border-cinema-gold/30" />
            <div className="absolute inset-4 rounded-full border border-cinema-gold/20" />
            <div className="absolute inset-12 rounded-full border border-cinema-gold/40" />

            {/* Crosshairs */}
            <div className="absolute inset-x-0 top-1/2 h-[1px] bg-cinema-gold/30 -translate-y-1/2" />
            <div className="absolute inset-y-0 left-1/2 w-[1px] bg-cinema-gold/30 -translate-x-1/2" />

            {/* Rotating Radar / Clock Sweep */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
              className="absolute inset-0 rounded-full"
              style={{
                background: "conic-gradient(from 0deg, rgba(232, 176, 74, 0.3) 0deg, transparent 90deg, transparent 360deg)",
              }}
            />

            {/* Film Countdown Number */}
            <AnimatePresence mode="wait">
              <motion.div
                key={count}
                initial={{ scale: 1.4, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.6, opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="font-bebas text-7xl md:text-9xl text-cinema-gold font-bold tracking-widest drop-shadow-[0_0_35px_rgba(232,176,74,0.7)]"
              >
                {count > 0 ? count : ""}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Subtitle Branding */}
          <div className="mt-8 text-center space-y-2 z-10">
            <p className="font-bebas text-sm md:text-base text-cinema-gold/80 tracking-[0.3em]">
              ASHWIKA INTERLINK • ZEN ENTERTAINMENT
            </p>
            <p className="font-sans text-xs text-cinema-muted/60 tracking-wider">
              LIGHTS GOING UP...
            </p>
          </div>

          {/* Skip Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleSkip();
            }}
            className="absolute bottom-10 px-5 py-2 rounded-full border border-cinema-gold/30 text-cinema-gold/70 hover:text-cinema-gold hover:border-cinema-gold text-xs font-bebas tracking-widest transition-colors backdrop-blur-sm"
          >
            SKIP INTRO →
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
