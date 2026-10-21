import Image from "next/image";
import Link from "next/link";
import { Sparkles, Award, ArrowUpRight, CheckCircle2, History } from "lucide-react";
import { siteConfig } from "@/data/site";
import { teamMembers, teamIntro } from "@/data/team";
import TiltCard from "@/components/ui/TiltCard";

export const metadata = {
  title: "About Us | Zen Entertainment & Ashwika Interlink",
  description:
    "Discover the legacy of Ashwika Interlink and Zen Entertainment. Founder Ashwini Jalindar Kamble's journey from Zee24taas and Marathi theatre to broadcast television and global entertainment.",
};

const journeyMilestones = [
  {
    year: "2014 – 2016",
    title: "Zee24taas Broadcast & Entertainment Journalism",
    role: "Reporter & Producer (Entertainment)",
    description:
      "Ashwini Jalindar Kamble produced and hosted prestigious television properties including 'Smart Women' on Zee24taas, cultivating foundational relationships across Bollywood, Marathi cinema, daily soaps, and PR agencies.",
  },
  {
    year: "2016 – 2020",
    title: "Production Head for Iconic Marathi Theatre",
    role: "Production Head with Adwait Theatre, Zee Marathi & BookMyShow",
    description:
      "Spearheaded production operations for record-breaking state-wide theatre tours: 'Karun Gelo Gav', 'Shodha Akbar', 'Bombay 17', 'Statue Of Liberty', 'Albatya Galbatya', 'Aaranyak' (starring Dilip Prabhavalkar), 'Nimma Shimma Rakshas', and 'Iblis'.",
  },
  {
    year: "2020 – 2023",
    title: "Cultural Festivals & Large-Scale Technical Directing",
    role: "Core Committee Member, CSMPAF",
    description:
      "Managed performing art, art curation, and technical production at Chatrapati Shivaji Maharaj Park Art Festival, orchestrating massive crowds of 10,000+ patrons with flawless stage and audio-visual engineering.",
  },
  {
    year: "2023 – Present",
    title: "Incorporation & Cross-Platform Productions",
    role: "Founder & Director, Ashwika Interlink (OPC) Pvt. Ltd. & Zen Entertainment",
    description:
      "Formally incorporating Ashwika Interlink and scaling Zen Entertainment to produce major live musical concerts ('Ghazaliyat', 'Swarangan'), prime-time broadcast series on Sun Marathi ('Hau De Charcha'), OTT standup specials on Planet Marathi ('Ubhya Ubhya!'), and animated series with Brio Studio.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20 bg-[#06060A]">
      {/* Hero Header */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-white/5 overflow-hidden">
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[radial-gradient(ellipse_at_top,rgba(232,176,74,0.12)_0%,transparent_70%)]" />

        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-2 border border-cinema-gold/30 text-cinema-gold text-xs font-bebas tracking-[0.25em] uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ABOUT OUR PRODUCTION HOUSE</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-bold text-cinema-text">
            Rooted in Marathi Culture,{" "}
            <span className="text-signature-gradient">Produced for the World</span>
          </h1>

          <p className="text-cinema-muted text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            {siteConfig.about.statement}
          </p>
        </div>
      </section>

      {/* Our Journey Timeline */}
      <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-2 border border-cinema-gold/30 text-cinema-gold text-xs font-bebas tracking-[0.25em] uppercase">
            <History className="w-3.5 h-3.5" />
            <span>ORIGIN & MILESTONES</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-cinema-text">
            Our Journey
          </h2>
          <p className="text-cinema-muted text-sm">
            From the broadcast newsroom of Zee24taas to historic theatre halls and stadium festivals.
          </p>
        </div>

        <div className="space-y-8 relative">
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-[2px] bg-cinema-gold/20" />

          {journeyMilestones.map((m, idx) => (
            <div key={idx} className="flex flex-col md:flex-row gap-6 md:gap-10 items-start relative">
              <div className="md:w-16 flex-shrink-0 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-surface-2 border-2 border-cinema-gold flex items-center justify-center text-cinema-gold font-bebas text-xs shadow-[0_0_15px_rgba(232,176,74,0.3)] z-10">
                  0{idx + 1}
                </div>
              </div>

              <div className="flex-1 glass-card p-6 sm:p-8 space-y-3 hover:border-cinema-gold/50 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/5 pb-3">
                  <div>
                    <span className="font-bebas text-cinema-gold text-sm tracking-widest uppercase">
                      {m.year}
                    </span>
                    <h3 className="font-display text-xl font-bold text-cinema-text">
                      {m.title}
                    </h3>
                  </div>
                  <span className="text-xs px-3 py-1 rounded-full bg-surface-2 text-cinema-gold border border-cinema-gold/20 font-medium">
                    {m.role}
                  </span>
                </div>
                <p className="text-sm text-cinema-muted leading-relaxed">
                  {m.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Full Leadership Section */}
      <section className="py-20 bg-surface/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="font-bebas text-xs sm:text-sm tracking-[0.3em] text-cinema-gold uppercase">
              EXECUTIVE LEADERSHIP
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-cinema-text">
              Meet The Founders & Creative Heads
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="glass-card p-6 space-y-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="relative w-full h-80 rounded-xl overflow-hidden bg-surface-2">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-contain object-bottom"
                    />
                  </div>

                  <div>
                    <span className="font-bebas text-xs tracking-widest text-cinema-gold uppercase">
                      {member.role}
                    </span>
                    <h3 className="font-display text-2xl font-bold text-cinema-text">
                      {member.name}
                    </h3>
                  </div>

                  <div className="space-y-2 text-xs text-cinema-muted leading-relaxed">
                    {member.fullBio.map((bio, bIdx) => (
                      <p key={bIdx}>{bio}</p>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <ul className="space-y-1.5 text-[11px] text-cinema-text/80">
                    {member.credentials.map((cred, cIdx) => (
                      <li key={cIdx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3 h-3 text-cinema-gold flex-shrink-0 mt-0.5" />
                        <span>{cred}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-20 text-center max-w-3xl mx-auto px-4">
        <h3 className="font-display text-3xl font-bold text-cinema-text mb-4">
          Ready to Bring Your Story to Life?
        </h3>
        <p className="text-cinema-muted text-sm mb-8 leading-relaxed">
          From concept development and scripting to shooting, post-production, and worldwide distribution.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-cinema-gold to-[#F28C28] text-[#06060A] font-bebas text-base tracking-widest uppercase shadow-lg hover:shadow-[0_0_30px_rgba(232,176,74,0.4)] transition-all"
        >
          <span>Connect With Our Producers</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
