"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ShieldCheck,
  Zap,
  HeartHandshake,
  BookOpen,
  Phone,
  IndianRupee,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Zero-Error Compliance",
    description:
      "We maintain rigorous internal checklists and peer review processes to ensure every filing is accurate and deadline-compliant.",
  },
  {
    icon: Zap,
    title: "Proactive, Not Reactive",
    description:
      "We flag upcoming deadlines, regulatory changes, and tax-saving opportunities before they become your problem.",
  },
  {
    icon: HeartHandshake,
    title: "Dedicated Relationship Manager",
    description:
      "Every client gets a named point of contact — a senior professional who knows your business inside out.",
  },
  {
    icon: BookOpen,
    title: "Always Up-to-Date",
    description:
      "Our team participates in regular CPE programs and tracks CBDT, MCA, GSTN, and RBI circulars so you don't have to.",
  },
  {
    icon: Phone,
    title: "Rapid Response",
    description:
      "Calls and emails answered within 24 hours. For urgent matters like notices and raids — same day response.",
  },
  {
    icon: IndianRupee,
    title: "Transparent Pricing",
    description:
      "Clear scope, clear fees — quoted upfront with no surprise bills. Flexible retainer or per-service models.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const headerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function WhyUs() {
  const headerRef = useRef(null);
  const gridRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-50px" });
  const gridInView = useInView(gridRef, { once: true, margin: "-50px" });

  return (
    <section id="why-us" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={headerRef}
          className="text-center space-y-4 mb-16"
          variants={headerVariants}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
        >
          <Badge className="bg-amber-100 text-amber-700 border-amber-200 text-xs tracking-widest uppercase px-4 py-1.5">
            Why Choose Us
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            What Makes Us Different
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            We&apos;re not just your compliance vendor — we&apos;re your financial partner, invested
            in your growth and peace of mind.
          </p>
        </motion.div>

        <motion.div
          ref={gridRef}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={gridInView ? "visible" : "hidden"}
        >
          {reasons.map(({ icon: Icon, title, description }, index) => (
            <motion.div
              key={title}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="group relative p-6 rounded-2xl border border-gray-100 hover:border-amber-200 hover:shadow-md bg-white"
            >
              {/* Number watermark */}
              <motion.span
                className="absolute top-4 right-5 text-5xl font-black select-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{ opacity: 0.15 }}
                style={{ color: "rgb(245 158 11 / 0.08)" }}
              >
                {String(index + 1).padStart(2, "0")}
              </motion.span>
              <div className="relative space-y-4">
                <motion.div
                  className="w-11 h-11 rounded-xl bg-amber-50 group-hover:bg-amber-100 transition-colors flex items-center justify-center"
                  whileHover={{ rotate: 8, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon className="w-5 h-5 text-amber-600" />
                </motion.div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-gray-900 text-base">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
