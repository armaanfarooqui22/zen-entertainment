"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { clientsData } from "@/data/clients";

export default function ClientsGrid() {
  return (
    <section className="relative py-24 md:py-32 bg-[#06060A] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-bebas text-xs sm:text-sm tracking-[0.3em] text-cinema-gold uppercase">
            OUR CLIENTS & NETWORKS
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-cinema-text">
            Esteemed Industry Alliances
          </h2>
          <p className="text-cinema-muted text-base leading-relaxed">
            Collaborating with leading commercial brands, state television channels, and historic performing art institutions.
          </p>
        </div>

        {/* Real Logos Grid with Lift + Colour on Hover */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6 sm:gap-8">
          {clientsData.map((client) => (
            <motion.div
              key={client.id}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="glass-card p-6 sm:p-8 flex flex-col items-center justify-center text-center space-y-4 group border border-cinema-gold/15 hover:border-cinema-gold/50"
            >
              <div className="relative w-36 sm:w-44 h-16 sm:h-20 flex items-center justify-center filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-400">
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={200}
                  height={90}
                  className="max-h-16 sm:max-h-20 w-auto object-contain"
                />
              </div>

              <div className="space-y-1">
                <h4 className="font-display text-base font-bold text-cinema-text group-hover:text-cinema-gold transition-colors">
                  {client.name}
                </h4>
                {client.marathiName && (
                  <p className="font-devanagari text-xs text-cinema-muted">
                    {client.marathiName}
                  </p>
                )}
                {client.relation && (
                  <p className="text-[11px] text-cinema-gold/70 font-mono pt-1">
                    {client.relation}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
