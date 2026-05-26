"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Award, CheckCircle, Users, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const qualifications = [
  { icon: GraduationCap, label: "Fellow Chartered Accountant (FCA)", body: "ICAI" },
  { icon: GraduationCap, label: "Company Secretary (CS)", body: "ICSI" },
  { icon: Award, label: "Certified Financial Planner", body: "FPSB India" },
];

const milestones = [
  { year: "2009", event: "Firm established in Pune" },
  { year: "2013", event: "Expanded to corporate secretarial practice" },
  { year: "2017", event: "Launched dedicated GST compliance division" },
  { year: "2021", event: "500+ client milestone achieved" },
  { year: "2024", event: "Expanded team to 20+ professionals" },
];

const values = [
  { label: "Integrity", desc: "We uphold the highest ethical standards" },
  { label: "Expertise", desc: "Continuously updated with latest regulations" },
  { label: "Responsiveness", desc: "Your calls and emails answered within 24 hrs" },
  { label: "Confidentiality", desc: "Your financial data stays strictly private" },
];

const fadeFromLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};
const fadeFromRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};
const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const fadeScale = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

export default function About() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const leftInView = useInView(leftRef, { once: true, margin: "-50px" });
  const rightInView = useInView(rightRef, { once: true, margin: "-50px" });

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            ref={leftRef}
            className="space-y-8"
            variants={fadeFromLeft}
            initial="hidden"
            animate={leftInView ? "visible" : "hidden"}
          >
            <div className="space-y-4">
              <Badge className="bg-amber-100 text-amber-700 border-amber-200 text-xs tracking-widest uppercase px-4 py-1.5">
                About Us
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight leading-tight">
                Over 15 Years of{" "}
                <span className="text-gold relative">
                  Financial Expertise
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-amber-300 rounded-full" />
                </span>
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                Deore &amp; Associates was founded with a single vision: to make professional financial
                and legal services accessible, transparent, and genuinely helpful to every client —
                from individual taxpayers to large corporates.
              </p>
              <p className="text-gray-500 leading-relaxed">
                Led by CA Rajesh Deore and CS Priya Deore, our firm blends deep technical
                knowledge with a client-first approach. We don&apos;t just file returns — we build
                long-term relationships and proactively protect your financial interests.
              </p>
            </div>

            {/* Qualifications */}
            <motion.div
              className="space-y-3"
              variants={staggerContainer}
              initial="hidden"
              animate={leftInView ? "visible" : "hidden"}
            >
              <p className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
                Credentials
              </p>
              {qualifications.map(({ icon: Icon, label, body }) => (
                <motion.div key={label} className="flex items-center gap-3" variants={fadeUp}>
                  <div className="w-9 h-9 rounded-lg bg-amber-50 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">{label}</p>
                    <p className="text-xs text-gray-500">{body}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <div className="flex items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg gradient-gold text-white font-medium text-sm hover:opacity-90 transition-opacity shadow-md"
              >
                <Users className="w-4 h-4" />
                Meet the Team
              </a>
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 text-sm text-amber-600 hover:text-amber-700 font-medium group"
              >
                Know More
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Right — Timeline + Values */}
          <motion.div
            ref={rightRef}
            className="space-y-6"
            variants={fadeFromRight}
            initial="hidden"
            animate={rightInView ? "visible" : "hidden"}
          >
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <p className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-6">
                Our Journey
              </p>
              <div className="relative">
                {/* Animated line */}
                <motion.div
                  className="absolute left-4 top-0 w-px bg-gray-200 origin-top"
                  style={{ bottom: 0 }}
                  initial={{ scaleY: 0 }}
                  animate={rightInView ? { scaleY: 1 } : { scaleY: 0 }}
                  transition={{ duration: 1, delay: 0.2 }}
                />
                <motion.div
                  className="space-y-6"
                  variants={staggerContainer}
                  initial="hidden"
                  animate={rightInView ? "visible" : "hidden"}
                >
                  {milestones.map((m, i) => (
                    <motion.div
                      key={m.year}
                      className="flex items-start gap-5 relative pl-10"
                      variants={fadeUp}
                    >
                      <div
                        className={`absolute left-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border-2 ${
                          i === milestones.length - 1
                            ? "bg-amber-500 text-white border-amber-500"
                            : "bg-white text-amber-600 border-amber-300"
                        }`}
                      >
                        {i === milestones.length - 1 ? (
                          <CheckCircle className="w-4 h-4" />
                        ) : (
                          <span className="text-[9px]">{m.year.slice(2)}</span>
                        )}
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-amber-600 mb-0.5">{m.year}</p>
                        <p className="text-sm text-gray-700">{m.event}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>

            {/* Values */}
            <motion.div
              className="grid grid-cols-2 gap-4"
              variants={staggerContainer}
              initial="hidden"
              animate={rightInView ? "visible" : "hidden"}
            >
              {values.map((v) => (
                <motion.div
                  key={v.label}
                  className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm"
                  variants={fadeScale}
                >
                  <p className="font-semibold text-gray-900 text-sm mb-1">{v.label}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{v.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
