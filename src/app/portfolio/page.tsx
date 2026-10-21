import PortfolioShowpiece from "@/components/home/PortfolioShowpiece";
import { Sparkles } from "lucide-react";

export const metadata = {
  title: "Portfolio | Verified Productions, Shows & Credentials",
  description:
    "Explore our complete production repertoire: blockbuster Marathi plays, live concerts, television series on Sun Marathi, Planet Marathi OTT specials, digital YouTube formats, and award-nominated theatrical productions.",
};

export default function PortfolioPage() {
  return (
    <div className="pt-28 pb-20 bg-[#06060A]">
      <section className="relative py-16 sm:py-20 px-4 text-center border-b border-white/5">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-2 border border-cinema-gold/30 text-cinema-gold text-xs font-bebas tracking-[0.25em] uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>FULL PRODUCTION ARCHIVE</span>
          </div>
          <h1 className="font-display text-4xl sm:text-6xl font-bold text-cinema-text">
            Our Complete <span className="text-signature-gradient">Portfolio</span>
          </h1>
          <p className="text-cinema-muted text-base max-w-2xl mx-auto leading-relaxed">
            Click any production to view high-resolution promotional artwork, broadcaster credits, and detailed project background.
          </p>
        </div>
      </section>

      <PortfolioShowpiece />
    </div>
  );
}
