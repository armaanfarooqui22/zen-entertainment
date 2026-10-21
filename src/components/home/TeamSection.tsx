"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Users, ChevronDown, ChevronUp, Award, CheckCircle } from "lucide-react";
import { teamMembers, teamIntro, TeamMember } from "@/data/team";
import TiltCard from "@/components/ui/TiltCard";

export default function TeamSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="team" className="relative py-28 md:py-36 bg-surface/30 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Intro */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-2 border border-cinema-gold/30 text-cinema-gold text-xs font-bebas tracking-[0.25em] uppercase">
            <Users className="w-3.5 h-3.5" />
            <span>{teamIntro.eyebrow}</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-bold text-cinema-text">
            {teamIntro.title}
          </h2>

          <p className="text-cinema-muted text-base leading-relaxed">
            {teamIntro.description}
          </p>
        </div>

        {/* Three Large Tilt Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => {
            const isExpanded = expandedId === member.id;
            return (
              <div key={member.id} className="flex flex-col">
                <TiltCard className="rounded-2xl glass-card overflow-hidden border border-cinema-gold/25 hover:border-cinema-gold/60 transition-all duration-300 flex flex-col h-full">
                  {/* Portrait Container */}
                  <div className="relative w-full h-80 sm:h-96 bg-gradient-to-b from-surface-2 via-surface to-[#06060A] overflow-hidden flex items-end justify-center">
                    <div className="relative w-full h-full">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-contain object-bottom filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]"
                      />
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F15] via-transparent to-transparent opacity-70" />
                  </div>

                  {/* Header Details */}
                  <div className="p-6 space-y-4 flex-1 flex flex-col justify-between bg-surface">
                    <div className="space-y-1">
                      <span className="font-bebas text-xs tracking-widest text-cinema-gold uppercase">
                        {member.role}
                      </span>
                      <h3 className="font-display text-2xl font-bold text-cinema-text">
                        {member.name}
                      </h3>
                      <p className="text-xs text-cinema-muted leading-relaxed pt-1">
                        {member.bioSnippet}
                      </p>
                    </div>

                    {/* Expand/Collapse Trigger */}
                    <div className="pt-4 border-t border-white/10">
                      <button
                        onClick={() => toggleExpand(member.id)}
                        className="w-full py-2.5 px-4 rounded-xl bg-surface-2/80 hover:bg-surface-2 border border-cinema-gold/25 hover:border-cinema-gold text-xs font-bebas tracking-widest text-cinema-gold flex items-center justify-between transition-colors"
                      >
                        <span>{isExpanded ? "HIDE FULL BIOGRAPHY" : "VIEW FULL CREDENTIALS"}</span>
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </button>

                      {/* Expandable Biography Section */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden mt-4 pt-4 border-t border-white/10 space-y-3"
                          >
                            <div className="space-y-2">
                              {member.fullBio.map((paragraph, pIdx) => (
                                <p key={pIdx} className="text-xs text-cinema-text/90 leading-relaxed">
                                  {paragraph}
                                </p>
                              ))}
                            </div>

                            <div className="pt-2">
                              <p className="font-bebas text-[11px] tracking-wider text-cinema-gold uppercase mb-1.5">
                                Verified Associations:
                              </p>
                              <ul className="space-y-1">
                                {member.credentials.map((cred, cIdx) => (
                                  <li key={cIdx} className="text-[11px] text-cinema-muted flex items-start gap-1.5">
                                    <CheckCircle className="w-3 h-3 text-cinema-gold flex-shrink-0 mt-0.5" />
                                    <span>{cred}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </TiltCard>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
