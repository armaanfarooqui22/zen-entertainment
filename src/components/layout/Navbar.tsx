"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Globe } from "lucide-react";
import { siteConfig } from "@/data/site";
import { useLanguage } from "@/lib/languageContext";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on page change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "py-3 bg-[#06060A]/85 backdrop-blur-xl border-b border-cinema-gold/15 shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Lockup */}
          <Link href="/" className="flex items-center gap-3 group">
            {/* Ashwika Logo */}
            <div className="relative h-9 md:h-11 w-24 md:w-28 flex items-center">
              <Image
                src="/assets/brand/ashwika-logo.png"
                alt="Ashwika Interlink"
                width={160}
                height={55}
                priority
                className="object-contain h-full w-auto"
              />
            </div>

            {/* Divider */}
            <div className="h-6 w-[1px] bg-cinema-gold/30" />

            {/* Marketed by Zen Lockup */}
            <div className="flex items-center gap-2">
              <span className="hidden sm:inline font-bebas text-[11px] tracking-widest text-cinema-muted/80 uppercase">
                Marketed by
              </span>
              <div className="relative h-8 md:h-9 w-20 md:w-24 flex items-center">
                <Image
                  src="/assets/brand/zen-logo.png"
                  alt="Zen Entertainment"
                  width={140}
                  height={50}
                  priority
                  className="object-contain h-full w-auto filter drop-shadow-[0_0_8px_rgba(224,53,127,0.3)]"
                />
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {siteConfig.navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium tracking-wide transition-colors relative py-1 ${
                    isActive
                      ? "text-cinema-gold"
                      : "text-cinema-text/80 hover:text-cinema-text"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="navIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cinema-gold to-cinema-magenta rounded-full"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Actions: Language Toggle & Start Project CTA */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              aria-label="Toggle language between English and Marathi"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-cinema-gold/25 text-xs font-semibold tracking-wider hover:border-cinema-gold text-cinema-text hover:text-cinema-gold transition-colors"
            >
              <Globe className="w-3.5 h-3.5 text-cinema-gold" />
              <span className={language === "en" ? "text-cinema-gold font-bold" : "text-cinema-muted"}>
                EN
              </span>
              <span className="text-cinema-muted/40">|</span>
              <span className={language === "mr" ? "text-cinema-gold font-bold font-devanagari" : "text-cinema-muted font-devanagari"}>
                मराठी
              </span>
            </button>

            {/* Start a Project Button */}
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-cinema-gold via-[#F28C28] to-cinema-gold bg-[length:200%_auto] hover:bg-[position:right_center] text-[#06060A] font-semibold text-xs tracking-wider uppercase transition-all duration-500 shadow-[0_0_20px_rgba(232,176,74,0.3)] hover:shadow-[0_0_25px_rgba(232,176,74,0.5)] active:scale-95"
            >
              <span>{t("Start a Project", "प्रकल्प सुरू करा")}</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile Menu & Language Toggle */}
          <div className="flex lg:hidden items-center gap-2.5">
            <button
              onClick={toggleLanguage}
              className="px-2.5 py-1 rounded-full border border-cinema-gold/25 text-[11px] font-semibold text-cinema-gold"
            >
              {language === "en" ? "मराठी" : "EN"}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="p-2 rounded-lg bg-surface border border-cinema-gold/20 text-cinema-text hover:text-cinema-gold"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-[#06060A]/98 backdrop-blur-2xl flex flex-col justify-between p-6 pt-28 lg:hidden"
          >
            <div className="space-y-6">
              <p className="font-bebas text-xs tracking-[0.25em] text-cinema-gold/70">
                NAVIGATION
              </p>
              <div className="flex flex-col space-y-4">
                {siteConfig.navLinks.map((link, idx) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * idx, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      className="font-display text-3xl font-bold text-cinema-text hover:text-cinema-gold transition-colors flex items-center justify-between py-2 border-b border-white/5"
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight className="w-5 h-5 text-cinema-gold/50" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="space-y-4 pt-6 border-t border-white/10">
              <Link
                href="/contact"
                className="w-full py-3.5 rounded-full bg-gradient-to-r from-cinema-gold to-[#F28C28] text-[#06060A] font-bold text-sm tracking-widest uppercase flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(232,176,74,0.3)]"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <div className="text-center font-bebas text-xs tracking-widest text-cinema-muted">
                MUMBAI • FILMS • TV • OTT • MUSIC • EVENTS
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
