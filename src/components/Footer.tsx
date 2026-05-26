"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Scale, Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const serviceLinks = [
  "Income Tax & ITR",
  "GST Compliance",
  "Statutory Audit",
  "Company Secretarial",
  "Business Setup",
  "Financial Advisory",
];

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.footer
      ref={ref}
      className="gradient-navy text-white"
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="space-y-5 lg:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg gradient-gold flex items-center justify-center">
                <Scale className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-bold text-white text-sm">Deore &amp; Associates</p>
                <p className="text-amber-400 text-[10px] tracking-widest uppercase">CA · CS · Advisors</p>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Trusted CA &amp; CS firm providing expert financial and corporate services with integrity,
              accuracy, and a personal touch since 2009.
            </p>
            <div className="flex items-center gap-3">
              {["LinkedIn", "Twitter", "Facebook"].map((name) => (
                <a
                  key={name}
                  href="#"
                  aria-label={name}
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-amber-400/20 flex items-center justify-center transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-white/60" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <p className="font-semibold text-white text-sm uppercase tracking-wider">Services</p>
            <ul className="space-y-2">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <motion.a
                    href="#services"
                    className="text-white/60 hover:text-amber-400 text-sm transition-colors inline-flex items-center gap-1"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    {s}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <p className="font-semibold text-white text-sm uppercase tracking-wider">Quick Links</p>
            <ul className="space-y-2">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <motion.a
                    href={l.href}
                    className="text-white/60 hover:text-amber-400 text-sm transition-colors inline-flex items-center gap-1"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    {l.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <p className="font-semibold text-white text-sm uppercase tracking-wider">Get in Touch</p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                <p className="text-white/60 text-sm">
                  402, Sai Plaza, FC Road,<br />Pune – 411004, Maharashtra
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <p className="text-white/60 text-sm">+91 98765 43210</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <p className="text-white/60 text-sm">info@deoreassociates.com</p>
              </div>
            </div>
            <a
              href="#contact"
              className="inline-block mt-2 px-5 py-2.5 rounded-lg gradient-gold text-white text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Book Free Consultation
            </a>
          </div>
        </div>

        <Separator className="bg-white/10 mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Deore &amp; Associates. All rights reserved.</p>
          <p>Registered with ICAI | Firm No. 000000W</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Disclaimer</a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
