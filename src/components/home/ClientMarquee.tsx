"use client";

import Image from "next/image";
import { clientsData, creditedPartners } from "@/data/clients";

export default function ClientMarquee() {
  return (
    <section className="relative py-14 bg-surface/30 border-b border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
        <p className="font-bebas text-xs sm:text-sm tracking-[0.3em] text-cinema-gold/70 uppercase">
          TRUSTED BY PREMIER BROADCASTERS, BRANDS & CULTURAL FESTIVALS
        </p>
      </div>

      {/* Infinite Scrolling Logo Stream with Grayscale to Color Transition */}
      <div className="relative w-full overflow-hidden">
        {/* Left & Right Fade Masks */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#06060A] to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#06060A] to-transparent z-10" />

        <div className="flex w-max animate-marquee space-x-12 sm:space-x-16 items-center">
          {[...Array(3)].map((_, loopIdx) => (
            <div key={loopIdx} className="flex items-center space-x-12 sm:space-x-16">
              {clientsData.map((client) => (
                <div
                  key={client.id}
                  className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl glass-card-dark min-w-[140px] sm:min-w-[170px] h-20 transition-all duration-300 group cursor-pointer hover:border-cinema-gold/40 hover:scale-105"
                  title={`${client.name} — ${client.relation || ""}`}
                >
                  <div className="relative w-28 sm:w-32 h-12 flex items-center justify-center filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      width={160}
                      height={60}
                      className="max-h-12 w-auto object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Credited Industry Associations Line */}
      <div className="max-w-5xl mx-auto px-4 mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-mono text-cinema-muted/60">
        <span className="text-cinema-gold/80 font-bold tracking-widest uppercase">
          CREDITED ASSOCIATIONS:
        </span>
        {creditedPartners.map((partner, idx) => (
          <span key={idx} className="flex items-center gap-2">
            <span className="hover:text-cinema-gold transition-colors">{partner}</span>
            {idx < creditedPartners.length - 1 && <span>•</span>}
          </span>
        ))}
      </div>
    </section>
  );
}
