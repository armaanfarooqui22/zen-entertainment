"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site";

export default function WhatsAppButton() {
  const message = encodeURIComponent(siteConfig.contact.whatsappMessage);
  const waUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${message}`;

  return (
    <motion.a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Zen Entertainment on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.4 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 group"
    >
      <div className="hidden sm:flex items-center bg-surface-2/90 border border-cinema-gold/30 px-3 py-1.5 rounded-full shadow-lg backdrop-blur-md text-xs text-cinema-text font-medium group-hover:border-cinema-gold transition-colors">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping mr-1.5" />
        <span>Chat on WhatsApp</span>
      </div>

      <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-[#25D366] to-[#128C7E] flex items-center justify-center text-white shadow-[0_4px_25px_rgba(37,211,102,0.4)] group-hover:shadow-[0_4px_30px_rgba(232,176,74,0.5)] transition-shadow relative">
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-cinema-gold rounded-full border-2 border-[#06060A]" />
        <MessageCircle className="w-7 h-7 fill-white text-white" />
      </div>
    </motion.a>
  );
}
