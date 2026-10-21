"use client";

import { motion } from "framer-motion";

interface FilmReelProps {
  className?: string;
  size?: number;
}

export default function FilmReel({ className = "", size = 280 }: FilmReelProps) {
  return (
    <div
      className={`relative flex items-center justify-center select-none pointer-events-none ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Outer Reel Rim with Gold Metallic Sheen */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 24, ease: "linear" }}
        className="relative w-full h-full rounded-full border-4 border-cinema-gold/40 shadow-[0_0_50px_rgba(232,176,74,0.25)] flex items-center justify-center"
        style={{
          background: "radial-gradient(circle, rgba(23, 23, 32, 0.9) 0%, rgba(6, 6, 10, 0.98) 100%)",
        }}
      >
        {/* Film Strip Outer Layer with Perforations */}
        <div className="absolute inset-2 rounded-full border-2 border-dashed border-cinema-gold/30" />
        <div className="absolute inset-6 rounded-full border border-cinema-gold/20" />

        {/* 6 Large Film Reel Cutout Holes */}
        {[0, 60, 120, 180, 240, 300].map((deg) => (
          <div
            key={deg}
            className="absolute w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-cinema-gold/50 bg-[#06060A] shadow-inner"
            style={{
              transform: `rotate(${deg}deg) translate(0, -${size * 0.28}px)`,
            }}
          >
            <div className="w-full h-full rounded-full bg-gradient-to-tr from-cinema-magenta/20 to-transparent" />
          </div>
        ))}

        {/* Center Spool Hub */}
        <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-tr from-[#E8B04A] via-[#E0357F] to-[#7B5CFF] p-[3px] shadow-[0_0_30px_rgba(232,176,74,0.5)]">
          <div className="w-full h-full rounded-full bg-[#06060A] flex items-center justify-center border-2 border-cinema-gold/80">
            {/* Center Drive Teeth */}
            <div className="w-8 h-8 rounded-full border border-cinema-gold/60 flex items-center justify-center">
              <div className="w-3 h-3 bg-cinema-gold rounded-full" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Trailing 35mm Celluloid Ribbon Accent */}
      <motion.div
        animate={{
          rotate: [0, 5, -5, 0],
          y: [0, -6, 6, 0],
        }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute -bottom-8 -right-8 w-24 h-40 border-l-2 border-dashed border-cinema-gold/40 opacity-40 -rotate-12 pointer-events-none"
      />
    </div>
  );
}
