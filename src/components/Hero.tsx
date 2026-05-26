"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, PhoneCall, TrendingUp, Shield, FileText, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

// Deterministic pseudo-random
function seededRand(seed: number) {
  const x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
}

const particles = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  top: `${seededRand(i * 5 + 0) * 95}%`,
  left: `${seededRand(i * 5 + 1) * 95}%`,
  size: seededRand(i * 5 + 2) * 2.5 + 1,
  dur: seededRand(i * 5 + 3) * 4 + 3,
  delay: seededRand(i * 5 + 4) * 5,
  opacity: seededRand(i * 5 + 2) * 0.4 + 0.1,
}));

const services = [
  { icon: FileText, label: "Income Tax & GST" },
  { icon: Shield, label: "Statutory Audit" },
  { icon: Building2, label: "Company Secretarial" },
  { icon: TrendingUp, label: "Financial Advisory" },
];

const rotatingWords = ["Businesses", "Startups", "Individuals", "Corporates", "MSMEs"];

const stats = [
  { value: "500+", label: "Clients" },
  { value: "15+", label: "Years" },
  { value: "5000+", label: "Returns Filed" },
  { value: "200+", label: "Incorporations" },
];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setWordIndex((i) => (i + 1) % rotatingWords.length);
    }, 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center gradient-hero overflow-hidden">

      {/* ── Background layers ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Radial glow centre */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-amber-400/5 blur-3xl" />
        {/* Top-right orb */}
        <motion.div
          className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-amber-400/8 blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Bottom-left orb */}
        <motion.div
          className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-indigo-400/8 blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
        {/* Particles */}
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-amber-300"
            style={{ top: p.top, left: p.left, width: p.size, height: p.size }}
            animate={{ opacity: [p.opacity * 0.3, p.opacity, p.opacity * 0.3] }}
            transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>

      {/* ── Content ── */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Left ── */}
          <div className="space-y-10">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 bg-white/10 border border-white/20 rounded-full px-4 py-1.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-white/80 text-xs tracking-widest uppercase font-medium">ICAI Registered · Trusted Since 2009</span>
            </motion.div>

            {/* Headline */}
            <div className="space-y-2">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight"
              >
                Trusted CA &amp;
                <br />
                CS Firm for
              </motion.h1>

              {/* Rotating word */}
              <div className="relative">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={wordIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="block text-5xl sm:text-6xl lg:text-7xl font-black text-gold leading-[1.05] tracking-tight"
                  >
                    {rotatingWords[wordIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="text-white/60 text-lg leading-relaxed max-w-lg"
            >
              From taxation and audit to company secretarial and advisory — complete financial expertise, one trusted firm.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <a href="#contact">
                <Button size="lg" className="gradient-gold text-white border-0 shadow-xl hover:opacity-90 transition-opacity gap-2 px-8 w-full sm:w-auto text-sm font-semibold">
                  <PhoneCall className="w-4 h-4" />
                  Book Free Consultation
                </Button>
              </a>
              <a href="#services">
                <Button size="lg" variant="outline" className="border-white/20 text-white bg-white/8 hover:bg-white/15 hover:text-white gap-2 w-full sm:w-auto text-sm">
                  Our Services
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
            </motion.div>

            {/* Stats strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex gap-8 pt-2 border-t border-white/10"
            >
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-2xl font-black text-white">{s.value}</p>
                  <p className="text-white/40 text-xs mt-0.5">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right ── */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="relative hidden lg:flex items-center justify-center h-[520px]"
          >
            {/* Outer glow */}
            <div className="absolute w-[420px] h-[420px] rounded-full bg-amber-400/5 blur-2xl" />

            {/* Rotating dashed ring */}
            <motion.div
              className="absolute w-[400px] h-[400px] rounded-full"
              style={{ border: "1px dashed rgba(251,191,36,0.2)" }}
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            />

            {/* Solid inner ring */}
            <motion.div
              className="absolute w-[300px] h-[300px] rounded-full border border-white/8"
              animate={{ rotate: -360 }}
              transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            />

            {/* Centre circle */}
            <motion.div
              className="relative z-10 w-48 h-48 rounded-full gradient-gold shadow-[0_0_60px_rgba(251,191,36,0.3)] flex flex-col items-center justify-center text-center"
              animate={{ scale: [1, 1.03, 1], boxShadow: ["0 0 40px rgba(251,191,36,0.2)", "0 0 80px rgba(251,191,36,0.4)", "0 0 40px rgba(251,191,36,0.2)"] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <p className="text-white text-5xl font-black leading-none">15+</p>
              <p className="text-white/75 text-[10px] mt-2 tracking-[0.2em] uppercase">Years of<br />Expertise</p>
            </motion.div>

            {/* Orbiting service pills */}
            {services.map(({ icon: Icon, label }, i) => {
              const angle = (i / services.length) * 2 * Math.PI - Math.PI / 6;
              const r = 185;
              const x = Math.cos(angle) * r;
              const y = Math.sin(angle) * r;
              return (
                <motion.div
                  key={label}
                  className="absolute z-20 flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 shadow-lg"
                  style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)`, transform: "translate(-50%,-50%)" }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + i * 0.15, duration: 0.6, type: "spring", stiffness: 200 }}
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
                >
                  <div className="w-6 h-6 rounded-full bg-amber-400/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-3 h-3 text-amber-400" />
                  </div>
                  <span className="text-white/90 text-xs font-medium whitespace-nowrap">{label}</span>
                </motion.div>
              );
            })}

            {/* Floating card — top right */}
            <motion.div
              className="absolute top-6 right-0 z-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-4 shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: [0, -10, 0] }}
              transition={{ opacity: { delay: 1, duration: 0.5 }, y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 } }}
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-amber-400/20 flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-amber-400" />
                </div>
                <div>
                  <p className="text-white font-black text-lg leading-none">500+</p>
                  <p className="text-white/50 text-[10px] mt-0.5 tracking-wide">Happy Clients</p>
                </div>
              </div>
            </motion.div>

            {/* Floating card — bottom left */}
            <motion.div
              className="absolute bottom-8 left-0 z-20 bg-amber-400/15 backdrop-blur-md border border-amber-400/25 rounded-2xl px-5 py-4 shadow-xl"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: [0, 10, 0] }}
              transition={{ opacity: { delay: 1.2, duration: 0.5 }, y: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 } }}
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-amber-400/20 flex items-center justify-center">
                  <Shield className="w-4 h-4 text-amber-300" />
                </div>
                <div>
                  <p className="text-amber-300 font-black text-lg leading-none">24hr</p>
                  <p className="text-white/50 text-[10px] mt-0.5 tracking-wide">Response Time</p>
                </div>
              </div>
            </motion.div>

            {/* Small dot accent top-left */}
            <motion.div
              className="absolute top-16 left-8 z-20 flex items-center gap-2 bg-white/8 border border-white/15 rounded-full px-3 py-1.5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-white/60 text-[10px] font-medium">ICAI Registered</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" className="w-full fill-background" preserveAspectRatio="none">
          <path d="M0,60 C360,0 1080,0 1440,60 L1440,60 L0,60 Z" />
        </svg>
      </div>
    </section>
  );
}
