"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Tag } from "lucide-react";
import { PortfolioItem } from "@/data/portfolio";

interface LightboxProps {
  items: PortfolioItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function Lightbox({
  items,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}: LightboxProps) {
  const isOpen = currentIndex !== null && currentIndex >= 0 && currentIndex < items.length;
  const currentItem = isOpen ? items[currentIndex] : null;

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen || !currentItem) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="lightbox-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[10001] bg-[#06060A]/95 backdrop-blur-2xl flex flex-col items-center justify-between p-4 md:p-8"
        onClick={onClose}
      >
        {/* Top Bar */}
        <div
          className="w-full max-w-6xl flex items-center justify-between text-cinema-text z-10"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center gap-3">
            <span className="font-bebas text-cinema-gold text-sm tracking-widest px-3 py-1 bg-surface-2 rounded-full border border-cinema-gold/20 flex items-center gap-1.5">
              <Tag className="w-3.5 h-3.5" />
              {currentItem.category}
            </span>
            <span className="text-cinema-muted text-xs">
              {currentIndex + 1} of {items.length}
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close lightbox"
            className="w-10 h-10 rounded-full bg-surface-2 border border-white/10 hover:border-cinema-gold flex items-center justify-center text-cinema-text hover:text-cinema-gold transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Center Stage: Image and Prev/Next */}
        <div
          className="relative w-full max-w-5xl flex-1 flex items-center justify-center my-4 overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Previous Button */}
          <button
            onClick={onPrev}
            aria-label="Previous artwork"
            className="absolute left-2 md:left-4 z-20 w-12 h-12 rounded-full bg-surface-2/80 hover:bg-surface-2 border border-white/10 hover:border-cinema-gold text-cinema-text hover:text-cinema-gold flex items-center justify-center transition-all backdrop-blur-md shadow-lg"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Main Artwork */}
          <motion.div
            key={currentItem.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative max-w-full max-h-[70vh] flex items-center justify-center shadow-2xl rounded-xl overflow-hidden border border-white/10"
          >
            <Image
              src={currentItem.image}
              alt={currentItem.title}
              width={1200}
              height={800}
              priority
              className="object-contain max-h-[70vh] w-auto h-auto rounded-xl"
            />
          </motion.div>

          {/* Next Button */}
          <button
            onClick={onNext}
            aria-label="Next artwork"
            className="absolute right-2 md:right-4 z-20 w-12 h-12 rounded-full bg-surface-2/80 hover:bg-surface-2 border border-white/10 hover:border-cinema-gold text-cinema-text hover:text-cinema-gold flex items-center justify-center transition-all backdrop-blur-md shadow-lg"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Caption Card */}
        <div
          className="w-full max-w-3xl glass-card px-6 py-4 text-center z-10 space-y-1.5"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-center gap-3">
            <h3 className="font-display text-lg md:text-xl font-bold text-cinema-text">
              {currentItem.title}
            </h3>
            {currentItem.marathiTitle && (
              <span className="font-devanagari text-base text-cinema-gold/90 font-medium">
                ({currentItem.marathiTitle})
              </span>
            )}
          </div>
          <p className="text-cinema-muted text-xs md:text-sm max-w-2xl mx-auto leading-relaxed">
            {currentItem.description}
          </p>
          {currentItem.clientOrPartner && (
            <p className="text-cinema-gold/70 text-xs font-bebas tracking-widest pt-1">
              CREDIT: {currentItem.clientOrPartner.toUpperCase()}
            </p>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
