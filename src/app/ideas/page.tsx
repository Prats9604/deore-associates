"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Briefcase, Mail, Users } from "lucide-react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const founder = {
  name: "CA Rajesh Deore",
  title: "Founder & Managing Partner",
  initials: "RD",
  quote: "I started this firm because I believed clients deserved a CA who explains things clearly, calls back, and actually cares about their outcome.",
  bio: "Rajesh is a Fellow Chartered Accountant with 20+ years of experience in taxation, statutory audit, and corporate advisory. Before founding Deore & Associates, he worked with two of Pune's top CA firms and a Big 4 during his articleship.",
  education: [
    { degree: "B.Com (Hons)", institution: "University of Pune", year: "2000" },
    { degree: "Chartered Accountant (FCA)", institution: "ICAI — AIR 42", year: "2003" },
    { degree: "Diploma in IFRS", institution: "ACCA, United Kingdom", year: "2015" },
  ],
  certifications: [
    "Concurrent Auditor — Bank of Maharashtra",
    "Empanelled Auditor — NABARD",
    "Certified GST Practitioner — GSTN",
  ],
  expertise: ["Direct Taxation", "Statutory & Internal Audit", "FEMA & RBI Compliance", "Corporate Advisory"],
  memberships: [
    "Fellow Member — ICAI (M. No. 123456)",
    "Member — Bombay Chartered Accountants' Society",
    "Member — Pune CA Study Circle",
  ],
  stats: [
    { label: "Years Exp.", value: "20+" },
    { label: "Clients", value: "300+" },
    { label: "Audits", value: "150+" },
  ],
  email: "rajesh@deoreassociates.com",
};

const adminHeads = [
  {
    name: "CS Priya Deore",
    title: "Head — Secretarial & Legal",
    initials: "PD",
    qual: ["ACS — ICSI", "LLB — ILS Law College, Pune", "B.Com — University of Pune"],
    exp: "18 Years",
    desc: "Priya leads the CS practice, handling everything from company incorporations and ROC filings to SEBI compliance and secretarial audits.",
    focus: ["Company Law & ROC", "SEBI Regulations", "Secretarial Audit (MR-3)", "Startup Structuring"],
  },
  {
    name: "CA Suresh Kulkarni",
    title: "Head — Tax & GST Practice",
    initials: "SK",
    qual: ["FCA — ICAI", "B.Com — SPPU, Pune"],
    exp: "14 Years",
    desc: "Suresh heads all tax and GST operations — from planning and filing to assessments and litigation. Known for high-stakes notices and departmental proceedings.",
    focus: ["GST Advisory & Litigation", "Income Tax Assessments", "Transfer Pricing", "TDS Compliance"],
  },
];

const employees = [
  { name: "Rohan Desai",   role: "Audit Manager",    initials: "RD", qual: "CA, MBA Finance",   exp: "6 yrs" },
  { name: "Ankita Sharma", role: "CS Executive",      initials: "AS", qual: "ACS, LLB",          exp: "5 yrs" },
  { name: "Mihir Patil",   role: "Accounts Lead",     initials: "MP", qual: "CMA, B.Com",        exp: "7 yrs" },
  { name: "Deepa Joshi",   role: "Tax Associate",     initials: "DJ", qual: "CA Inter",          exp: "3 yrs" },
  { name: "Arjun Nair",    role: "Finance Analyst",   initials: "AN", qual: "MBA, CFA L2",       exp: "4 yrs" },
  { name: "Neha More",     role: "GST Executive",     initials: "NM", qual: "B.Com, GST Cert.",  exp: "3 yrs" },
  { name: "Pooja Verma",   role: "Audit Associate",   initials: "PV", qual: "CA Inter",          exp: "2 yrs" },
  { name: "Karan Shah",    role: "Tax Consultant",    initials: "KS", qual: "CA, B.Com",         exp: "5 yrs" },
  { name: "Ritika Jain",   role: "Compliance Exec.",  initials: "RJ", qual: "ACS, B.Com",        exp: "3 yrs" },
  { name: "Vivek Pawar",   role: "Senior Accountant", initials: "VP", qual: "CMA, M.Com",        exp: "8 yrs" },
];

// Split employees into 2 rows for marquee
const row1 = employees.slice(0, Math.ceil(employees.length / 2));
const row2 = employees.slice(Math.ceil(employees.length / 2));

// ─── Avatar colours per initials (deterministic) ──────────────────────────────
const avatarColors = [
  "from-slate-600 to-slate-700",
  "from-zinc-600 to-zinc-700",
  "from-neutral-600 to-neutral-700",
  "from-stone-600 to-stone-700",
  "from-gray-600 to-gray-700",
];
function avatarColor(initials: string) {
  const idx = (initials.charCodeAt(0) + initials.charCodeAt(1)) % avatarColors.length;
  return avatarColors[idx];
}

// ─── Marquee row component ─────────────────────────────────────────────────────
function MarqueeRow({ people, reverse = false }: { people: typeof employees; reverse?: boolean }) {
  // Duplicate for seamless loop
  const doubled = [...people, ...people, ...people];
  return (
    <div className="overflow-hidden relative">
      {/* fade edges */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#f0f0f0] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#f0f0f0] to-transparent z-10 pointer-events-none" />
      <motion.div
        className="flex gap-4 py-3"
        animate={{ x: reverse ? ["0%", "33.333%"] : ["0%", "-33.333%"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        style={{ width: "max-content" }}
      >
        {doubled.map((e, i) => (
          <div
            key={`${e.name}-${i}`}
            className="group flex items-center gap-3 bg-white rounded-full pl-1.5 pr-5 py-1.5 shadow-sm border border-gray-200/80 hover:border-gray-300 hover:shadow-md transition-all duration-200 cursor-default flex-shrink-0"
          >
            {/* Circle avatar */}
            <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${avatarColor(e.initials)} flex items-center justify-center text-white font-bold text-xs flex-shrink-0 ring-2 ring-white`}>
              {e.initials}
            </div>
            <div>
              <p className="text-gray-900 font-semibold text-sm leading-tight whitespace-nowrap">{e.name}</p>
              <p className="text-gray-400 text-[11px] whitespace-nowrap">{e.role}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

// ─── Leadership circle ─────────────────────────────────────────────────────────
function LeaderCircle({
  initials, size, ring, children, delay = 0,
}: {
  initials: string; size: string; ring?: string; children: React.ReactNode; delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.88 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col items-center"
    >
      <div
        className={`relative ${size} rounded-full bg-white border border-gray-200 shadow-xl flex items-center justify-center cursor-default overflow-hidden transition-shadow duration-300 group-hover:shadow-2xl ${ring ?? ""}`}
      >
        {/* gradient fill */}
        <div className={`absolute inset-0 bg-gradient-to-br ${avatarColor(initials)} opacity-90`} />
        <span className="relative text-white font-black text-4xl lg:text-5xl select-none opacity-20">{initials}</span>
        {/* hover info overlay */}
        <div className="absolute inset-0 bg-gray-900/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
          {children}
        </div>
      </div>
    </motion.div>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────
export default function IdeasPage() {
  return (
    <main className="min-h-screen bg-[#f0f0f0] pt-16 pb-24">

      {/* ── Header ── */}
      <div className="text-center pt-14 pb-10 px-4">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white shadow-md border border-gray-200 mb-5">
          <Users className="w-5 h-5 text-gray-700" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">Meet Our Team</h1>
        <p className="text-gray-400 mt-3 text-sm max-w-sm mx-auto">The qualified professionals behind every client outcome.</p>
      </div>

      {/* ── Leadership row ── */}
      <div className="px-4 sm:px-8 lg:px-16 mb-4">
        <div className="max-w-5xl mx-auto">

          {/* Row 1 — Founder (center/large) + 2 heads side by side */}
          <div className="bg-white/70 backdrop-blur-sm rounded-[2rem] border border-gray-200/80 shadow-sm px-6 sm:px-10 py-8 mb-4">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-0">

              {/* Head 1 — left */}
              <LeaderCircle initials={adminHeads[0].initials} size="w-36 h-36 lg:w-44 lg:h-44" delay={0.1}>
                <div className="text-center px-2">
                  <p className="text-white font-bold text-sm">{adminHeads[0].name}</p>
                  <p className="text-amber-400 text-[10px] mt-0.5 font-medium">{adminHeads[0].title}</p>
                  <p className="text-white/40 text-[9px] mt-2">{adminHeads[0].exp}</p>
                  <div className="flex flex-wrap justify-center gap-1 mt-2">
                    {adminHeads[0].focus.slice(0, 2).map(f => (
                      <span key={f} className="text-[8px] text-white/60 bg-white/10 px-1.5 py-0.5 rounded-full">{f}</span>
                    ))}
                  </div>
                </div>
              </LeaderCircle>

              {/* Name below head 1 */}
              <div className="lg:hidden text-center -mt-2 mb-2">
                <p className="font-semibold text-gray-800 text-sm">{adminHeads[0].name}</p>
                <p className="text-gray-400 text-xs">{adminHeads[0].title}</p>
              </div>

              {/* Founder — center, biggest, overlapping */}
              <div className="flex flex-col lg:flex-row items-center lg:-mx-6 z-10 gap-4 lg:gap-0">
                <LeaderCircle
                  initials={founder.initials}
                  size="w-52 h-52 lg:w-64 lg:h-64"
                  ring="ring-4 ring-amber-400/30"
                  delay={0}
                >
                  <div className="text-center px-3">
                    <span className="text-[9px] font-bold text-amber-400/80 uppercase tracking-widest">Founder</span>
                    <p className="text-white font-bold text-base mt-0.5">{founder.name}</p>
                    <p className="text-amber-400 text-[10px]">{founder.title}</p>
                    <div className="flex justify-center gap-3 mt-2">
                      {founder.stats.map(s => (
                        <div key={s.label} className="text-center">
                          <p className="text-amber-400 font-black text-sm leading-none">{s.value}</p>
                          <p className="text-white/30 text-[8px] uppercase mt-0.5">{s.label}</p>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-wrap justify-center gap-1 mt-2">
                      {founder.expertise.slice(0, 3).map(e => (
                        <span key={e} className="text-[8px] text-white/60 bg-white/10 px-1.5 py-0.5 rounded-full">{e}</span>
                      ))}
                    </div>
                  </div>
                </LeaderCircle>
              </div>

              {/* Head 2 — right */}
              <LeaderCircle initials={adminHeads[1].initials} size="w-36 h-36 lg:w-44 lg:h-44" delay={0.1}>
                <div className="text-center px-2">
                  <p className="text-white font-bold text-sm">{adminHeads[1].name}</p>
                  <p className="text-amber-400 text-[10px] mt-0.5 font-medium">{adminHeads[1].title}</p>
                  <p className="text-white/40 text-[9px] mt-2">{adminHeads[1].exp}</p>
                  <div className="flex flex-wrap justify-center gap-1 mt-2">
                    {adminHeads[1].focus.slice(0, 2).map(f => (
                      <span key={f} className="text-[8px] text-white/60 bg-white/10 px-1.5 py-0.5 rounded-full">{f}</span>
                    ))}
                  </div>
                </div>
              </LeaderCircle>
            </div>

            {/* Names row — desktop, shown below the circles */}
            <div className="hidden lg:flex items-end justify-center gap-0 mt-4 px-4">
              <div className="w-44 text-center">
                <p className="font-semibold text-gray-700 text-sm">{adminHeads[0].name}</p>
                <p className="text-gray-400 text-xs mt-0.5">{adminHeads[0].title}</p>
              </div>
              <div className="flex-1 max-w-64 text-center">
                <p className="font-bold text-gray-900 text-base">{founder.name}</p>
                <p className="text-amber-600 text-xs mt-0.5">{founder.title}</p>
              </div>
              <div className="w-44 text-center">
                <p className="font-semibold text-gray-700 text-sm">{adminHeads[1].name}</p>
                <p className="text-gray-400 text-xs mt-0.5">{adminHeads[1].title}</p>
              </div>
            </div>
          </div>

          {/* ── Founder detail panel ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="bg-white/70 backdrop-blur-sm rounded-[2rem] border border-gray-200/80 shadow-sm p-6 sm:p-8"
          >
            {/* Quote */}
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed italic border-l-3 border-amber-400 pl-4 mb-6 max-w-2xl">
              &ldquo;{founder.quote}&rdquo;
            </p>

            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6 max-w-2xl">{founder.bio}</p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Education */}
              <div>
                <p className="text-[10px] font-bold text-gray-300 uppercase tracking-widest mb-3 flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5 text-amber-500" /> Education
                </p>
                <div className="space-y-2">
                  {founder.education.map(e => (
                    <div key={e.degree}>
                      <p className="text-xs font-semibold text-gray-800">{e.degree}</p>
                      <p className="text-[10px] text-gray-400">{e.institution} · {e.year}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div>
                <p className="text-[10px] font-bold text-gray-300 uppercase tracking-widest mb-3 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-amber-500" /> Certifications
                </p>
                <div className="space-y-2">
                  {founder.certifications.map(c => (
                    <p key={c} className="text-[11px] text-gray-500 leading-snug">{c}</p>
                  ))}
                </div>
              </div>

              {/* Expertise */}
              <div>
                <p className="text-[10px] font-bold text-gray-300 uppercase tracking-widest mb-3 flex items-center gap-1.5">
                  <Briefcase className="w-3.5 h-3.5 text-amber-500" /> Expertise
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {founder.expertise.map(e => (
                    <span key={e} className="text-[10px] font-medium text-gray-700 bg-gray-100 border border-gray-200 px-2.5 py-1 rounded-lg">{e}</span>
                  ))}
                </div>
              </div>

              {/* Memberships + contact */}
              <div>
                <p className="text-[10px] font-bold text-gray-300 uppercase tracking-widest mb-3">Memberships</p>
                <div className="space-y-1.5 mb-4">
                  {founder.memberships.map(m => (
                    <p key={m} className="text-[10px] text-gray-400 leading-snug">{m}</p>
                  ))}
                </div>
                <a href={`mailto:${founder.email}`} className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-amber-600 transition-colors">
                  <Mail className="w-3.5 h-3.5" /> {founder.email}
                </a>
              </div>
            </div>

            {/* Stats strip */}
            <div className="flex gap-8 mt-6 pt-5 border-t border-gray-100">
              {founder.stats.map(s => (
                <div key={s.label}>
                  <p className="text-2xl font-black text-amber-500 leading-none">{s.value}</p>
                  <p className="text-[10px] text-gray-400 mt-0.5 uppercase tracking-wider">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>

      {/* ── Professionals — dual marquee ── */}
      <div className="mt-10 space-y-3">
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center mb-6">Our Professionals</p>
        <MarqueeRow people={row1} reverse={false} />
        <MarqueeRow people={row2} reverse={true} />
      </div>

    </main>
  );
}
