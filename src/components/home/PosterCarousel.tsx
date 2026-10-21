"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Eye, ChevronLeft, ChevronRight } from "lucide-react";
import { portfolioItems, PortfolioItem } from "@/data/portfolio";
import TiltCard from "@/components/ui/TiltCard";

interface PosterCarouselProps {
  onSelectPoster: (item: PortfolioItem) => void;
}

export default function PosterCarousel({ onSelectPoster }: PosterCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const featuredPosters = portfolioItems.filter((item) => item.featured);

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, clientWidth } = scrollContainerRef.current;
    const offset = direction === "left" ? -clientWidth * 0.75 : clientWidth * 0.75;
    scrollContainerRef.current.scrollTo({
      left: scrollLeft + offset,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative py-12">
      <div className="flex items-center justify-between mb-8 px-4">
        <div>
          <span className="font-bebas text-xs tracking-[0.25em] text-cinema-gold uppercase">
            FEATURED ON SCREEN
          </span>
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-cinema-text">
            Marquee Posters & Theatrical Showcases
          </h3>
        </div>

        {/* Carousel Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => scroll("left")}
            aria-label="Previous posters"
            className="w-10 h-10 rounded-full bg-surface-2 border border-white/10 hover:border-cinema-gold text-cinema-text hover:text-cinema-gold flex items-center justify-center transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll("right")}
            aria-label="Next posters"
            className="w-10 h-10 rounded-full bg-surface-2 border border-white/10 hover:border-cinema-gold text-cinema-text hover:text-cinema-gold flex items-center justify-center transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Draggable Scroll Track */}
      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto pb-6 px-4 no-scrollbar cursor-grab active:cursor-grabbing snap-x snap-mandatory"
        style={{ scrollbarWidth: "none" }}
      >
        {featuredPosters.map((poster) => (
          <div
            key={poster.id}
            onClick={() => onSelectPoster(poster)}
            data-cursor="VIEW"
            className="flex-shrink-0 w-64 sm:w-72 snap-start group"
          >
            <TiltCard className="rounded-2xl glass-card overflow-hidden border border-cinema-gold/25 group-hover:border-cinema-gold/60 transition-all duration-300">
              <div className="relative w-full h-96 bg-surface-2">
                <Image
                  src={poster.image}
                  alt={poster.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Gradient Overlay & Hover Badge */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#06060A] via-transparent to-transparent opacity-90 group-hover:opacity-95 transition-opacity flex flex-col justify-end p-5">
                  <span className="font-bebas text-xs text-cinema-gold tracking-widest uppercase">
                    {poster.category}
                  </span>
                  <h4 className="font-display text-lg font-bold text-cinema-text leading-snug">
                    {poster.title}
                  </h4>
                  {poster.marathiTitle && (
                    <p className="font-devanagari text-xs text-cinema-muted">
                      {poster.marathiTitle}
                    </p>
                  )}
                  {poster.clientOrPartner && (
                    <p className="text-[11px] text-cinema-gold/70 font-mono mt-1">
                      {poster.clientOrPartner}
                    </p>
                  )}
                </div>
              </div>
            </TiltCard>
          </div>
        ))}
      </div>
    </div>
  );
}
