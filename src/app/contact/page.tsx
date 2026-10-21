"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Send,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  MessageCircle,
} from "lucide-react";
import { siteConfig } from "@/data/site";
import { formatPhoneNumber } from "@/lib/utils";

const serviceOptions = [
  "Film Production",
  "Television Production",
  "Digital Content",
  "Music Production",
  "Event Production",
  "Animation Production",
  "Distribution & Licensing",
  "General / Other Enquiry",
];

const budgetOptions = [
  "Under ₹5 Lakhs",
  "₹5 Lakhs – ₹15 Lakhs",
  "₹15 Lakhs – ₹50 Lakhs",
  "₹50 Lakhs – ₹1 Crore",
  "₹1 Crore+",
  "Flexible / Not Finalized",
];

function ContactFormContent() {
  const searchParams = useSearchParams();
  const prefilledService = searchParams.get("service") || "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
    honeypot: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (prefilledService) {
      const match = serviceOptions.find(
        (s) => s.toLowerCase() === prefilledService.toLowerCase()
      );
      if (match) {
        setFormData((prev) => ({ ...prev, service: match }));
      }
    }
  }, [prefilledService]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Submission failed. Please try again.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMessage("Network error occurred. Please WhatsApp us directly.");
    }
  };

  const waUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
    siteConfig.contact.whatsappMessage
  )}`;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
      {/* Left: Interactive Form */}
      <div className="lg:col-span-7">
        <div className="glass-card p-8 sm:p-10 border border-cinema-gold/30">
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success-card"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="text-center py-12 space-y-6"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-cinema-text">
                    Enquiry Received!
                  </h3>
                  <p className="text-cinema-muted text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-cinema-gold">{formData.name}</span>. Our production team will review your requirements and reach out within 24 hours.
                  </p>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button
                    onClick={() => {
                      setStatus("idle");
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        service: "",
                        budget: "",
                        message: "",
                        honeypot: "",
                      });
                    }}
                    className="px-6 py-2.5 rounded-full bg-surface-2 border border-white/20 text-xs font-bebas tracking-widest text-cinema-text hover:border-cinema-gold transition-colors"
                  >
                    SEND ANOTHER ENQUIRY
                  </button>

                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 rounded-full bg-emerald-600 text-white text-xs font-bebas tracking-widest flex items-center gap-2 hover:bg-emerald-500 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>CHAT ON WHATSAPP</span>
                  </a>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-cinema-text mb-2">
                    Start Your Project
                  </h2>
                  <p className="text-xs text-cinema-muted leading-relaxed">
                    Fill out the form below or message our producers directly on WhatsApp.
                  </p>
                </div>

                {/* Honeypot field (hidden from human users) */}
                <div className="hidden">
                  <input
                    type="text"
                    name="honeypot"
                    value={formData.honeypot}
                    onChange={handleChange}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                {/* Error Banner */}
                {status === "error" && (
                  <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bebas tracking-wider text-cinema-gold uppercase">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Rahul Patil"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-surface-2/80 border border-white/10 text-cinema-text text-sm focus:outline-none focus:border-cinema-gold transition-colors placeholder:text-cinema-muted/40"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bebas tracking-wider text-cinema-gold uppercase">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="e.g. 9930831798"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-surface-2/80 border border-white/10 text-cinema-text text-sm focus:outline-none focus:border-cinema-gold transition-colors placeholder:text-cinema-muted/40"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bebas tracking-wider text-cinema-gold uppercase">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-surface-2/80 border border-white/10 text-cinema-text text-sm focus:outline-none focus:border-cinema-gold transition-colors placeholder:text-cinema-muted/40"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Service */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bebas tracking-wider text-cinema-gold uppercase">
                      Production Service
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-surface-2/80 border border-white/10 text-cinema-text text-sm focus:outline-none focus:border-cinema-gold transition-colors"
                    >
                      <option value="">Select a service...</option>
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-surface-2 text-cinema-text">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Budget */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bebas tracking-wider text-cinema-gold uppercase">
                      Estimated Budget (Optional)
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-surface-2/80 border border-white/10 text-cinema-text text-sm focus:outline-none focus:border-cinema-gold transition-colors"
                    >
                      <option value="">Select budget range...</option>
                      {budgetOptions.map((b) => (
                        <option key={b} value={b} className="bg-surface-2 text-cinema-text">
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bebas tracking-wider text-cinema-gold uppercase">
                    Project Details & Scope *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell us about your story, timeline, expected release platform, or technical requirements..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-surface-2/80 border border-white/10 text-cinema-text text-sm focus:outline-none focus:border-cinema-gold transition-colors placeholder:text-cinema-muted/40 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full py-4 rounded-full bg-gradient-to-r from-cinema-gold via-[#F28C28] to-cinema-gold bg-[length:200%_auto] hover:bg-[position:right_center] text-[#06060A] font-bebas text-lg tracking-widest uppercase transition-all duration-500 shadow-[0_0_25px_rgba(232,176,74,0.35)] flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>
                    {status === "submitting" ? "TRANSMITTING ENQUIRY..." : "SEND PRODUCTION ENQUIRY"}
                  </span>
                </button>
              </form>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Right: Production Office & Dark Map */}
      <div className="lg:col-span-5 space-y-8">
        {/* Direct Contact Card */}
        <div className="glass-card p-8 space-y-6 border border-cinema-gold/25">
          <h3 className="font-display text-2xl font-bold text-cinema-text">
            Studio Headquarters
          </h3>

          <div className="space-y-4 text-xs text-cinema-muted">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-cinema-gold flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-cinema-text">Registered Address</p>
                <p className="leading-relaxed mt-0.5">{siteConfig.contact.address.formatted}</p>
                <p className="text-[11px] text-cinema-gold/80 font-mono mt-1">
                  CIN: {siteConfig.cin}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-cinema-gold flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-cinema-text">Email Inquiries</p>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-cinema-gold hover:underline mt-0.5 block"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-cinema-gold flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-cinema-text">Direct Producer Hotline</p>
                <div className="space-y-1 mt-0.5">
                  {siteConfig.contact.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone}`}
                      className="text-cinema-gold hover:text-white transition-colors block text-sm font-semibold"
                    >
                      {formatPhoneNumber(phone)}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Instagram className="w-5 h-5 text-cinema-magenta flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-cinema-text">Official Instagram</p>
                <a
                  href={siteConfig.contact.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cinema-magenta hover:underline mt-0.5 block"
                >
                  {siteConfig.contact.instagram.handle}
                </a>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-white/10">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-full bg-surface-2 border border-emerald-500/40 hover:border-emerald-500 text-cinema-text text-xs font-bebas tracking-widest flex items-center justify-center gap-2 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>DIRECT WHATSAPP CHAT</span>
            </a>
          </div>
        </div>

        {/* Dark Styled Map Card */}
        <div className="glass-card overflow-hidden border border-cinema-gold/20 p-2">
          <div className="w-full h-64 rounded-xl overflow-hidden bg-surface-2">
            <iframe
              title="Zen Entertainment Mahim Office"
              src={siteConfig.contact.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter: "invert(90%) hue-rotate(180deg) brightness(85%) contrast(110%)",
              }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="pt-28 pb-24 bg-[#06060A]">
      <section className="relative py-16 sm:py-20 px-4 text-center border-b border-white/5 mb-16">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-2 border border-cinema-gold/30 text-cinema-gold text-xs font-bebas tracking-[0.25em] uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>GET IN TOUCH</span>
          </div>
          <h1 className="font-display text-4xl sm:text-6xl font-bold text-cinema-text">
            Let&apos;s Build Something <span className="text-gold-gradient">Unforgettable</span>
          </h1>
          <p className="text-cinema-muted text-base max-w-xl mx-auto leading-relaxed">
            Have a film, television series, concert, or digital campaign ready for production? Reach out to our executive team.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Suspense fallback={<div className="text-center py-20 text-cinema-gold">Loading contact form...</div>}>
          <ContactFormContent />
        </Suspense>
      </div>
    </div>
  );
}
