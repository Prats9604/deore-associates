"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Calculator, FileText, Building2, TrendingUp,
  Scale, BarChart3, Briefcase, ArrowRight, CheckCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    icon: Calculator,
    title: "Taxation Services",
    short: "ITR filing, TDS, tax planning",
    description: "Comprehensive income tax planning and compliance for individuals, firms and corporates. We handle ITR filing, TDS/TCS returns, advance tax computation, and represent clients in assessments and notices.",
    points: ["Income Tax Return Filing", "TDS / TCS Compliance", "Advance Tax & Self Assessment", "Notice & Assessment Handling", "Tax Planning & Optimization"],
    extra: "We also assist with international taxation, DTAA benefits, and represent clients before CIT(Appeals) and ITAT. Our proactive approach ensures you never miss a deadline and always stay compliant.",
    accent: "from-blue-500 to-blue-600",
    num: "01",
  },
  {
    icon: FileText,
    title: "GST Compliance",
    short: "Returns, reconciliation, ITC",
    description: "End-to-end GST management — from registration to annual return. We ensure timely GSTR filings, ITC reconciliation, and represent clients in GST audits and departmental proceedings.",
    points: ["GST Registration & Amendments", "GSTR-1, 3B, 9 Filing", "ITC Reconciliation", "E-way Bill Compliance", "Departmental Audit Support"],
    extra: "Our GST team monitors law changes and circulars in real time, ensuring your business adapts immediately. We also handle GST refund applications and liaise with the department on your behalf.",
    accent: "from-amber-500 to-amber-600",
    num: "02",
  },
  {
    icon: Scale,
    title: "Statutory Audit",
    short: "Companies Act, internal audit",
    description: "Independent, rigorous statutory audits conducted as per Companies Act and Standards on Auditing. We also offer internal audits, stock audits, and management audits for operational efficiency.",
    points: ["Statutory Audit (Companies Act)", "Internal & Management Audit", "Stock & Fixed Asset Audit", "Bank Concurrent Audit", "Audit Reports & Certifications"],
    extra: "Beyond compliance, our audit observations provide actionable insights to strengthen internal controls, reduce leakages, and improve financial governance across your organisation.",
    accent: "from-green-500 to-green-600",
    num: "03",
  },
  {
    icon: Building2,
    title: "Company Secretarial",
    short: "ROC, SEBI, board governance",
    description: "Complete secretarial compliance for companies and LLPs — from incorporation to annual filings. Our CS team ensures your board governance and regulatory obligations are always in order.",
    points: ["Company & LLP Incorporation", "ROC Annual Filings", "Board Meeting & Minutes", "Secretarial Audit (MR-3)", "FEMA / RBI Compliance"],
    extra: "We also advise on complex transactions like share transfers, ESOPs, and restructuring. Our team stays current with MCA circulars so your secretarial records are always audit-ready.",
    accent: "from-purple-500 to-purple-600",
    num: "04",
  },
  {
    icon: TrendingUp,
    title: "Financial Advisory",
    short: "Valuation, CMA, project finance",
    description: "Strategic financial advisory for businesses seeking growth. We prepare valuations, CMA data for bank loans, project finance reports, and advise on working capital optimization.",
    points: ["Business Valuation Reports", "CMA Data Preparation", "Project Finance & DPR", "Bank Loan Documentation", "Working Capital Advisory"],
    extra: "From seed-stage startups to mid-market enterprises, we tailor financial models that banks and investors trust. We have a strong track record of successful loan sanctions and fundraising support.",
    accent: "from-rose-500 to-rose-600",
    num: "05",
  },
  {
    icon: BarChart3,
    title: "Accounting & MIS",
    short: "Bookkeeping, payroll, MIS reports",
    description: "Outsourced accounting and MIS services that give you real-time visibility into your business finances. From daily bookkeeping to monthly board-ready reports — we handle it all.",
    points: ["Outsourced Bookkeeping", "Monthly MIS Reports", "Financial Statement Prep", "Payroll Processing", "Bank & Ledger Reconciliation"],
    extra: "We integrate with Tally, Zoho Books, and QuickBooks to deliver real-time dashboards. Our MIS reports are structured for founders and boards — clear, concise, and decision-ready.",
    accent: "from-orange-500 to-orange-600",
    num: "06",
  },
  {
    icon: Briefcase,
    title: "Business Setup",
    short: "Startup India, DPIIT, structuring",
    description: "Full-stack support for new businesses — from choosing the right entity to getting all registrations in place. We help startups get Startup India recognition and angel tax exemptions.",
    points: ["Entity Selection & Structuring", "Company / LLP Incorporation", "Tax & GST Registration", "Startup India Recognition", "DPIIT & Angel Tax Filings"],
    extra: "Whether you're a first-time founder or a serial entrepreneur, we simplify the legal and compliance setup so you can focus on building. We've helped 200+ businesses launch the right way from day one.",
    accent: "from-teal-500 to-teal-600",
    num: "07",
  },
];

export default function Services() {
  const [active, setActive] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-60px" });
  const activeService = services[active];

  useEffect(() => {
    if (!inView) return;
    setActive(0);
    const id = setInterval(() => setActive((i) => (i + 1) % services.length), 4000);
    return () => clearInterval(id);
  }, [inView]);

  return (
    <section id="services" ref={ref} className="py-24 gradient-navy overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14"
        >
          <div className="space-y-3">
            <Badge className="bg-amber-400/15 text-amber-400 border-amber-400/20 text-[10px] tracking-widest uppercase px-3 py-1">
              Our Services
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Everything Your Business Needs
            </h2>
            <p className="text-white/40 text-sm max-w-md leading-relaxed">
              From day-one compliance to long-term advisory — one firm, complete coverage.
            </p>
          </div>
          <a
            href="#contact"
            className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg gradient-gold text-white text-sm font-medium hover:opacity-90 transition-opacity flex-shrink-0"
          >
            Talk to Us <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </motion.div>

        {/* Main layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid lg:grid-cols-[280px_1fr] gap-4"
        >
          {/* Left — service list: grid on mobile, sidebar on desktop */}
          <div className="grid grid-cols-4 sm:grid-cols-7 lg:flex lg:flex-col gap-2 lg:overflow-visible">
            {services.map((s, i) => (
              <button
                key={s.title}
                onClick={() => setActive(i)}
                className={`group flex flex-col lg:flex-row items-center lg:items-center gap-1.5 lg:gap-3 px-2 lg:px-4 py-3 rounded-xl text-center lg:text-left transition-all duration-200 w-full ${
                  active === i
                    ? "bg-amber-400/10 border border-amber-400/20"
                    : "border border-transparent hover:bg-white/5"
                }`}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all mx-auto lg:mx-0 ${
                  active === i ? `bg-gradient-to-br ${s.accent}` : "bg-white/8"
                }`}>
                  <s.icon className={`w-4 h-4 ${active === i ? "text-white" : "text-white/40"}`} />
                </div>
                {/* Mobile: short label below icon */}
                <p className={`lg:hidden text-[10px] font-medium leading-tight transition-colors ${active === i ? "text-amber-400" : "text-white/40"}`}>
                  {s.title.split(" ")[0]}
                </p>
                {/* Desktop: full title + short */}
                <div className="hidden lg:block min-w-0 flex-1">
                  <p className={`text-sm font-medium truncate transition-colors ${active === i ? "text-white" : "text-white/50 group-hover:text-white/70"}`}>
                    {s.title}
                  </p>
                  <p className="text-white/30 text-xs truncate">{s.short}</p>
                </div>
                <span className={`hidden lg:block ml-auto text-[10px] font-bold tabular-nums transition-colors ${active === i ? "text-white/40" : "text-white/15"}`}>
                  {s.num}
                </span>
              </button>
            ))}
          </div>

          {/* Right — active service detail */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="bg-white/[0.04] border border-amber-400/10 rounded-2xl p-5 sm:p-7 lg:p-10 flex flex-col gap-6 lg:gap-8"
            >
              {/* Top */}
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-gradient-to-br ${activeService.accent} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                  <activeService.icon className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
                </div>
                <div>
                  <p className="text-white/30 text-xs font-bold tracking-widest uppercase mb-1">{activeService.num}</p>
                  <h3 className="text-xl lg:text-2xl font-bold text-white">{activeService.title}</h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-white/60 leading-relaxed text-sm lg:text-base">{activeService.description}</p>

              {/* Points */}
              <div className="grid sm:grid-cols-2 gap-2.5">
                {activeService.points.map((p) => (
                  <div key={p} className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <span className="text-white/70 text-sm">{p}</span>
                  </div>
                ))}
              </div>

              {/* Extra detail — desktop only */}
              <p className="hidden lg:block text-white/40 text-sm leading-relaxed border-l-2 border-amber-400/30 pl-4 italic">
                {activeService.extra}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between pt-2 border-t border-amber-400/10">
                <div className="flex gap-2">
                  {services.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActive(i)}
                      className={`h-1 rounded-full transition-all duration-300 ${
                        i === active ? "w-6 bg-amber-400" : "w-2 bg-white/20 hover:bg-white/40"
                      }`}
                    />
                  ))}
                </div>
                <a href="#contact" className="inline-flex items-center gap-1.5 text-amber-400 text-sm font-medium hover:text-amber-300 transition-colors">
                  Get Started <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
