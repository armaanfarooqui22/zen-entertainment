import Image from "next/image";
import Link from "next/link";
import { Sparkles, CheckCircle2, ArrowUpRight } from "lucide-react";
import { servicesData } from "@/data/services";

export const metadata = {
  title: "Services | Film, Television, Digital & Event Production",
  description:
    "Comprehensive entertainment production verticals: Feature films, TV serials, OTT series, digital campaigns, live concerts, and 3D animation by Zen Entertainment & Ashwika Interlink.",
};

export default function ServicesPage() {
  return (
    <div className="pt-28 pb-20 bg-[#06060A]">
      {/* Header */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-white/5 overflow-hidden">
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[radial-gradient(ellipse_at_top,rgba(224,53,127,0.1)_0%,transparent_70%)]" />

        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-2 border border-cinema-gold/30 text-cinema-gold text-xs font-bebas tracking-[0.25em] uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PRODUCTION CAPABILITIES</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-bold text-cinema-text">
            End-to-End <span className="text-gold-gradient">Creative Execution</span>
          </h1>

          <p className="text-cinema-muted text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            From script development to full theatrical and broadcast delivery, we combine visionary artistry with state-of-the-art cinematic technology.
          </p>
        </div>
      </section>

      {/* Alternating Image / Text Service Blocks */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {servicesData.map((service, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div
              key={service.id}
              id={service.id}
              className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-16 ${
                isEven ? "" : "lg:flex-row-reverse"
              }`}
            >
              {/* Media Block */}
              <div className="w-full lg:w-1/2">
                <div className="relative w-full h-80 sm:h-96 rounded-2xl glass-card overflow-hidden border border-cinema-gold/25 group shadow-2xl">
                  <Image
                    src={service.bgImage}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#06060A]/85 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="font-bebas text-sm tracking-widest text-cinema-gold px-3 py-1 bg-surface-2/90 rounded-full border border-cinema-gold/30 backdrop-blur-md">
                      VERTICAL {service.number}
                    </span>
                  </div>
                </div>
              </div>

              {/* Text Block */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="space-y-2">
                  <span className="font-mono text-xs text-cinema-magenta tracking-widest uppercase">
                    {service.categorySlug}
                  </span>
                  <h2 className="font-display text-3xl sm:text-4xl font-bold text-cinema-text">
                    {service.title}
                  </h2>
                  <p className="text-sm font-light italic text-cinema-gold/90">
                    &ldquo;{service.tagline}&rdquo;
                  </p>
                </div>

                <p className="text-cinema-muted text-sm sm:text-base leading-relaxed">
                  {service.description}
                </p>

                {/* What's Included Deliverables List */}
                <div className="space-y-3 pt-2">
                  <h4 className="font-bebas text-sm text-cinema-gold tracking-widest uppercase">
                    What&apos;s Included:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {service.included.map((item, itemIdx) => (
                      <li
                        key={itemIdx}
                        className="flex items-start gap-2 text-xs text-cinema-text/90"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-cinema-gold flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pre-fill Form CTA */}
                <div className="pt-4">
                  <Link
                    href={`/contact?service=${encodeURIComponent(service.title)}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cinema-gold to-[#F28C28] text-[#06060A] font-bebas text-sm tracking-widest uppercase shadow-md hover:shadow-[0_0_20px_rgba(232,176,74,0.4)] transition-all"
                  >
                    <span>Enquire About {service.title}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
