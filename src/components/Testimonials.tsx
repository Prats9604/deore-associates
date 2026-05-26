"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const testimonials = [
  {
    name: "Vikram Mehta",
    role: "Director, Mehta Exports",
    tag: "GST Compliance",
    text: "Caught the GST mismatch before the department did. Saved us ₹3 lakhs.",
  },
  {
    name: "Sunita Patil",
    role: "Proprietor, Patil Pharma",
    tag: "Tax Planning",
    text: "Tax liability dropped 20% in year one. Clear, jargon-free, and always on time.",
  },
  {
    name: "Rahul Joshi",
    role: "Founder, TechNode Solutions",
    tag: "Business Setup",
    text: "Incorporation to Startup India — completely hands-off for us. Exceptional CS team.",
  },
  {
    name: "Anita Sharma",
    role: "HNI Individual Client",
    tag: "ITR Filing",
    text: "Multiple income sources, zero confusion. Tax season no longer stresses me out.",
  },
  {
    name: "Deepak Kulkarni",
    role: "MD, Kulkarni Constructions",
    tag: "Statutory Audit",
    text: "Audit done on time, zero disruption. Their insights were actually worth reading.",
  },
  {
    name: "Priyanka Nair",
    role: "CFO, FinBridge Consulting",
    tag: "Accounting & MIS",
    text: "Sharp reports, every month, without fail. Feels like an in-house finance team.",
  },
];

const COLORS = [
  "from-amber-950 to-stone-900",
  "from-slate-900 to-zinc-900",
  "from-stone-900 to-neutral-900",
  "from-zinc-900 to-slate-900",
  "from-neutral-900 to-stone-900",
  "from-amber-950 to-zinc-900",
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [dir, setDir] = useState(1);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const go = (next: number) => {
    setDir(next > active ? 1 : -1);
    setActive(next);
  };

  const prev = () => go(active === 0 ? testimonials.length - 1 : active - 1);
  const next = () => go(active === testimonials.length - 1 ? 0 : active + 1);

  useEffect(() => {
    const id = setInterval(() => {
      setDir(1);
      setActive((a) => (a === testimonials.length - 1 ? 0 : a + 1));
    }, 4000);
    return () => clearInterval(id);
  }, []);

  const t = testimonials[active];

  return (
    <section id="testimonials" ref={ref} className="py-0 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className={`relative bg-gradient-to-br ${COLORS[active]} transition-all duration-700 h-[520px] flex flex-col`}
      >
        {/* Noise texture overlay */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")" }}
        />

        {/* Top bar */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-8 lg:px-16 pt-16 flex items-center justify-between">
          <div>
            <Badge className="bg-white/10 text-white/60 border-white/10 text-[10px] tracking-widest uppercase px-3 py-1">
              Client Stories
            </Badge>
          </div>
          <div className="text-white/30 text-xs tracking-widest font-light">
            {String(active + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
          </div>
        </div>

        {/* Main content */}
        <div className="relative z-10 flex-1 max-w-7xl mx-auto w-full px-8 lg:px-16 flex flex-col justify-center py-12">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={active}
              custom={dir}
              initial={{ opacity: 0, x: dir * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir * -60 }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="space-y-8"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Big quote */}
              <p className="text-white text-2xl sm:text-3xl lg:text-4xl font-light leading-snug max-w-3xl tracking-tight">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-2">
                <div className="w-11 h-11 rounded-full gradient-gold flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-white/50 text-xs mt-0.5">{t.role}</p>
                </div>
                <span className="ml-4 text-[10px] font-semibold text-amber-400 tracking-widest uppercase border border-amber-400/30 px-3 py-1 rounded-full">
                  {t.tag}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom bar — nav + dots */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-8 lg:px-16 pb-12 flex items-center justify-between">
          {/* Dot indicators */}
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                className={`h-0.5 rounded-full transition-all duration-300 ${
                  i === active ? "w-8 bg-amber-400" : "w-4 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>

          {/* Arrow buttons */}
          <div className="flex gap-3">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/50 transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="w-11 h-11 rounded-full bg-amber-400 flex items-center justify-center text-white hover:bg-amber-300 transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Decorative large number */}
        <div className="absolute right-8 lg:right-16 top-1/2 -translate-y-1/2 text-[160px] lg:text-[220px] font-black text-white/[0.03] leading-none select-none pointer-events-none">
          {String(active + 1).padStart(2, "0")}
        </div>
      </motion.div>
    </section>
  );
}
