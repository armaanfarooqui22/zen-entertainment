"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Eye, Filter } from "lucide-react";
import { portfolioCategories, portfolioItems, PortfolioItem } from "@/data/portfolio";
import Lightbox from "@/components/ui/Lightbox";
import PosterCarousel from "./PosterCarousel";

export default function PortfolioShowpiece() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);

  const filteredItems =
    activeCategory === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.categoryKey === activeCategory);

  const handleSelectPoster = (item: PortfolioItem) => {
    const idx = portfolioItems.findIndex((p) => p.id === item.id);
    if (idx !== -1) setSelectedItemIndex(idx);
  };

  const handleOpenLightbox = (index: number) => {
    // Find index in master list
    const targetItem = filteredItems[index];
    const masterIdx = portfolioItems.findIndex((p) => p.id === targetItem.id);
    setSelectedItemIndex(masterIdx !== -1 ? masterIdx : index);
  };

  const handleNext = () => {
    if (selectedItemIndex !== null) {
      setSelectedItemIndex((selectedItemIndex + 1) % portfolioItems.length);
    }
  };

  const handlePrev = () => {
    if (selectedItemIndex !== null) {
      setSelectedItemIndex(
        (selectedItemIndex - 1 + portfolioItems.length) % portfolioItems.length
      );
    }
  };

  return (
    <section id="work" className="relative py-28 md:py-36 bg-[#06060A] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-2 border border-cinema-gold/30 text-cinema-gold text-xs font-bebas tracking-[0.25em] uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>OUR CREDENTIALS & WORK</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-cinema-text">
            Stories Staged, Broadcast & Remembered
          </h2>
          <p className="text-cinema-muted text-base leading-relaxed">
            Real productions produced, managed, and technical-directed across Maharashtra and global streaming platforms.
          </p>
        </div>

        {/* 1. Signature Draggable 3D Tilt Carousel */}
        <PosterCarousel onSelectPoster={handleSelectPoster} />

        {/* 2. Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 my-10 no-scrollbar justify-start md:justify-center">
          {portfolioCategories.map((cat) => {
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-4 py-2 rounded-full text-xs font-bebas tracking-wider uppercase transition-all duration-300 flex-shrink-0 ${
                  isActive
                    ? "bg-gradient-to-r from-cinema-gold to-[#F28C28] text-[#06060A] font-bold shadow-[0_0_15px_rgba(232,176,74,0.4)]"
                    : "glass-card-dark text-cinema-muted hover:text-cinema-text hover:border-cinema-gold/30"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* 3. Filterable Masonry Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredItems.map((item, idx) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
                onClick={() => handleOpenLightbox(idx)}
                data-cursor="VIEW"
                className="group cursor-pointer glass-card overflow-hidden border border-cinema-gold/20 hover:border-cinema-gold/60 transition-all duration-400 flex flex-col justify-between"
              >
                {/* Image Container */}
                <div className="relative w-full h-72 sm:h-80 bg-surface-2 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#06060A] via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  {/* Top Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="font-bebas text-[11px] tracking-wider text-cinema-gold px-2.5 py-1 rounded-full bg-surface-2/90 border border-cinema-gold/25 backdrop-blur-sm">
                      {item.category}
                    </span>
                  </div>

                  {/* Hover Eye Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 rounded-full bg-cinema-gold text-[#06060A] flex items-center justify-center shadow-xl">
                      <Eye className="w-5 h-5 font-bold" />
                    </div>
                  </div>
                </div>

                {/* Details Footer */}
                <div className="p-5 space-y-2">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-display text-lg font-bold text-cinema-text group-hover:text-cinema-gold transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  {item.marathiTitle && (
                    <p className="font-devanagari text-xs text-cinema-gold/90 font-medium">
                      {item.marathiTitle}
                    </p>
                  )}

                  <p className="text-xs text-cinema-muted line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>

                  {item.clientOrPartner && (
                    <p className="pt-2 text-[11px] text-cinema-muted/60 font-mono">
                      Partner: {item.clientOrPartner}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Cinematic Lightbox Modal */}
      <Lightbox
        items={portfolioItems}
        currentIndex={selectedItemIndex}
        onClose={() => setSelectedItemIndex(null)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </section>
  );
}
