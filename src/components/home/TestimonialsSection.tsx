"use client";

import { MessageSquareQuote, Sparkles } from "lucide-react";
import { testimonialsData } from "@/data/testimonials";

export default function TestimonialsSection() {
  const hasTestimonials = testimonialsData.length > 0;

  return (
    <section className="relative py-24 bg-surface/30 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="font-bebas text-xs sm:text-sm tracking-[0.3em] text-cinema-gold uppercase">
            PARTNER & AUDIENCE VOICES
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-cinema-text">
            What Collaborators Say
          </h2>
        </div>

        {hasTestimonials ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonialsData.map((item) => (
              <div key={item.id} className="glass-card p-6 space-y-4">
                <MessageSquareQuote className="w-8 h-8 text-cinema-gold opacity-60" />
                <p className="text-sm text-cinema-muted italic">&ldquo;{item.quote}&rdquo;</p>
                <div>
                  <p className="font-bold text-sm text-cinema-text">{item.author}</p>
                  <p className="text-xs text-cinema-gold">{item.role}, {item.organization}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Graceful Coming Soon State (Strict Anti-Fabrication Quality Bar) */
          <div className="max-w-2xl mx-auto glass-card p-10 text-center space-y-4 border border-cinema-gold/20 shadow-2xl">
            <div className="w-14 h-14 mx-auto rounded-full bg-surface-2 border border-cinema-gold/30 flex items-center justify-center text-cinema-gold">
              <MessageSquareQuote className="w-7 h-7" />
            </div>

            <h3 className="font-display text-xl font-bold text-cinema-text">
              Official Partner Testimonials & Reviews
            </h3>

            <p className="text-sm text-cinema-muted leading-relaxed max-w-lg mx-auto">
              We hold ourselves to the highest standard of artistic integrity. Verified director, broadcaster, and client reviews are being compiled following our upcoming production season.
            </p>

            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cinema-gold/10 text-cinema-gold text-xs font-mono tracking-wider border border-cinema-gold/20">
                <Sparkles className="w-3 h-3" />
                OFFICIAL REVIEWS COMING SOON
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
