import Hero from "@/components/home/Hero";
import ClientMarquee from "@/components/home/ClientMarquee";
import AboutSection from "@/components/home/AboutSection";
import MissionSection from "@/components/home/MissionSection";
import ServicesSection from "@/components/home/ServicesSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import DistributionSection from "@/components/home/DistributionSection";
import PortfolioShowpiece from "@/components/home/PortfolioShowpiece";
import TeamSection from "@/components/home/TeamSection";
import ClientsGrid from "@/components/home/ClientsGrid";
import ProcessSection from "@/components/home/ProcessSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import EndCreditsCTA from "@/components/home/EndCreditsCTA";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero (100vh) */}
      <Hero />

      {/* 2. Trusted-by Marquee */}
      <ClientMarquee />

      {/* 3. About Section */}
      <AboutSection />

      {/* 4. Mission Statement */}
      <MissionSection />

      {/* 5. Services ("What We Create") */}
      <ServicesSection />

      {/* 6. Why Choose Us */}
      <WhyChooseUs />

      {/* 7. Distribution & Licensing */}
      <DistributionSection />

      {/* 8. Our Work Showpiece + Poster Carousel + Lightbox */}
      <PortfolioShowpiece />

      {/* 9. Team ("The People Behind the Magic") */}
      <TeamSection />

      {/* 10. Clients Grid */}
      <ClientsGrid />

      {/* 11. Process Timeline */}
      <ProcessSection />

      {/* 12. Testimonials */}
      <TestimonialsSection />

      {/* 13. Final CTA ("End Credits") */}
      <EndCreditsCTA />
    </>
  );
}
