"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Calculator,
  FileText,
  Building2,
  TrendingUp,
  Shield,
  Briefcase,
  Scale,
  BarChart3,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    icon: Calculator,
    title: "Taxation Services",
    description:
      "Comprehensive income tax planning, ITR filing, TDS/TCS compliance, advance tax computation and notices handling for individuals and corporates.",
    tags: ["ITR Filing", "TDS", "Tax Planning"],
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: FileText,
    title: "GST Compliance",
    description:
      "GST registration, monthly/quarterly return filing (GSTR-1, 3B, 9), reconciliation, ITC optimization, and departmental audit support.",
    tags: ["Registration", "Returns", "Audit"],
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    icon: Scale,
    title: "Statutory Audit",
    description:
      "Independent statutory audits as per Companies Act and Standards on Auditing, internal audits, stock audits and management audits.",
    tags: ["Companies Act", "SAs", "Internal Audit"],
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    icon: Building2,
    title: "Company Secretarial",
    description:
      "Company incorporation, ROC compliance, board meeting support, secretarial audit (Form MR-3), annual filings, and FEMA/RBI compliances.",
    tags: ["ROC Filing", "Incorporation", "Secretarial Audit"],
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    icon: TrendingUp,
    title: "Financial Advisory",
    description:
      "Business valuation, project finance, CMA data preparation, bank loan documentation and working capital management advisory.",
    tags: ["Valuation", "Project Finance", "CMA"],
    color: "text-rose-600",
    bg: "bg-rose-50",
  },
  {
    icon: Shield,
    title: "Compliance Management",
    description:
      "FEMA, RBI, SEBI, MSME, PF/ESIC, PT compliance and maintenance of all statutory registers and returns under applicable laws.",
    tags: ["FEMA", "PF/ESIC", "MSME"],
    color: "text-indigo-600",
    bg: "bg-indigo-50",
  },
  {
    icon: Briefcase,
    title: "Business Setup",
    description:
      "End-to-end assistance for startups — entity selection, incorporation, tax registrations, startup India recognition, and DPIIT filings.",
    tags: ["Startup India", "Incorporation", "Tax Reg."],
    color: "text-teal-600",
    bg: "bg-teal-50",
  },
  {
    icon: BarChart3,
    title: "Accounting & MIS",
    description:
      "Outsourced bookkeeping, monthly MIS reports, financial statement preparation and review, payroll processing and reconciliations.",
    tags: ["Bookkeeping", "MIS", "Payroll"],
    color: "text-orange-600",
    bg: "bg-orange-50",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } },
};

const headerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function Services() {
  const headerRef = useRef(null);
  const gridRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-50px" });
  const gridInView = useInView(gridRef, { once: true, margin: "-50px" });

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={headerRef}
          className="text-center space-y-4 mb-16"
          variants={headerVariants}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
        >
          <Badge className="bg-amber-100 text-amber-700 border-amber-200 text-xs tracking-widest uppercase px-4 py-1.5">
            Our Services
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Comprehensive Financial &amp; Legal Services
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            From day-to-day compliance to strategic advisory — we cover every financial and
            corporate need your business has.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          ref={gridRef}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={gridInView ? "visible" : "hidden"}
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div key={service.title} variants={cardVariants}>
                <motion.div
                  whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="group border-gray-200 hover:border-amber-300 bg-white cursor-default h-full">
                    <CardContent className="p-6 space-y-4">
                      <motion.div
                        className={`w-12 h-12 rounded-xl ${service.bg} flex items-center justify-center`}
                        whileHover={{ rotate: 8, scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Icon className={`w-6 h-6 ${service.color}`} />
                      </motion.div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-gray-900 text-base leading-snug">
                          {service.title}
                        </h3>
                        <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
                      </div>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {service.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="text-xs px-2 py-0.5 bg-gray-100 text-gray-600"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm mb-4">
            Don&apos;t see what you need? We offer customized solutions.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg gradient-gold text-white font-medium text-sm hover:opacity-90 transition-opacity shadow-md"
          >
            Talk to Our Experts
          </a>
        </div>
      </div>
    </section>
  );
}
