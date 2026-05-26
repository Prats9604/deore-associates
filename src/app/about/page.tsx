"use client";

import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const team = {
  founder: {
    name: "CA Rajesh Deore",
    role: "Founder & Managing Partner",
    quote: "Honest advice is the only advice worth giving. Every number tells a story — we make sure it's the right one.",
    bio: "With over 15 years in chartered accountancy, Rajesh founded Deore & Associates with a singular vision — bringing enterprise-grade financial expertise to businesses of every size across Pune.",
    initials: "RD",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80" as string | null, // replace with real photo path once ready
    education: [
      { degree: "B.Com", institute: "University of Pune" },
      { degree: "CA (Final)", institute: "Institute of Chartered Accountants of India" },
    ],
    credentials: ["FCA — Fellow Member, ICAI", "DISA (Information Systems Audit)", "Registered GST Practitioner", "15+ Years in Practice"],
    since: "2009",
  },
  heads: [
    {
      name: "CA Priya Sharma",
      role: "Head — Taxation & Audit",
      bio: "Leads the taxation and statutory audit practice. Specialises in corporate tax planning, transfer pricing, and complex audit engagements.",
      initials: "PS",
      photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80" as string | null,
      education: "CA (Final) · ICAI",
      credentials: ["Direct Tax", "Statutory Audit", "Transfer Pricing"],
      exp: "12 yrs",
    },
    {
      name: "CS Amit Kulkarni",
      role: "Head — Corporate Secretarial",
      bio: "Oversees all company secretarial and ROC compliance mandates. Over a decade of experience in board governance and SEBI filings.",
      initials: "AK",
      photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80" as string | null,
      education: "CS (Final) · ICSI",
      credentials: ["ROC Filings", "Board Governance", "SEBI Compliance"],
      exp: "11 yrs",
    },
  ],
  employees: [
    { name: "Sneha Joshi", role: "Senior Tax Associate", initials: "SJ", photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" as string | null },
    { name: "Rahul Patil", role: "GST Specialist", initials: "RP", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80" as string | null },
    { name: "Meera Nair", role: "Audit Associate", initials: "MN", photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80" as string | null },
    { name: "Vikram Desai", role: "Accounts Executive", initials: "VD", photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80" as string | null },
    { name: "Pooja Mehta", role: "CS Associate", initials: "PM", photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80" as string | null },
    { name: "Arjun Rane", role: "Tax Associate", initials: "AR", photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80" as string | null },
  ],
};


const milestones = [
  { year: "2009", title: "The Beginning", desc: "Founded in a small Pune office with 3 clients and one clear goal — honest, expert CA service." },
  { year: "2013", title: "CS Practice Added", desc: "Expanded into company secretarial work, becoming a one-stop shop for corporate compliance." },
  { year: "2017", title: "GST Era", desc: "Built a dedicated GST division ahead of the rollout, helping 100+ clients transition seamlessly." },
  { year: "2021", title: "500 Clients", desc: "Crossed the 500-client milestone — a team of 15 professionals working across practice areas." },
  { year: "2024", title: "Today", desc: "20+ professionals, 3 practice verticals, and a reputation built entirely on client trust." },
];

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-40px" },
    transition: { duration: 0.65, delay },
  } as const;
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 bg-white">

        {/* ── Hero ── */}
        <section className="gradient-hero relative overflow-hidden py-20 px-4 sm:px-8 lg:px-16">
          <div className="absolute inset-0 opacity-[0.03]"
            style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.6) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.6) 1px,transparent 1px)`, backgroundSize: "60px 60px" }} />
          <div className="max-w-7xl mx-auto relative">
            <Link href="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm mb-10 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
            <motion.div {...fadeUp()} className="max-w-2xl space-y-4">
              <Badge className="bg-white/10 text-white/70 border-white/15 text-[10px] tracking-widest uppercase px-3 py-1">Who We Are</Badge>
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight tracking-tight">
                The People &amp; Story<br />Behind <span className="text-gold">Deore &amp; Associates</span>
              </h1>
              <p className="text-white/60 text-base leading-relaxed">
                A Pune-based CA &amp; CS firm built on one principle — every client deserves the same expertise and attention regardless of their size.
              </p>
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 40" className="w-full fill-white" preserveAspectRatio="none">
              <path d="M0,40 C480,0 960,0 1440,40 L1440,40 L0,40 Z" />
            </svg>
          </div>
        </section>

        {/* ── Origin Timeline ── */}
        <section className="py-24 px-4 sm:px-8 lg:px-16 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div {...fadeUp()} className="mb-14">
              <Badge className="bg-amber-100 text-amber-700 border-amber-200 text-[10px] tracking-widest uppercase px-3 py-1 mb-3">Our Story</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">How We Started</h2>
            </motion.div>
            <div className="flex overflow-x-auto pb-4 lg:grid lg:grid-cols-5 lg:overflow-visible gap-0 scrollbar-hide">
              {milestones.map((m, i) => (
                <motion.div key={m.year} {...fadeUp(i * 0.1)} className="relative group flex-shrink-0 w-48 lg:w-auto">
                  {i < milestones.length - 1 && (
                    <div className="absolute top-6 left-1/2 w-full h-px bg-gray-200 z-0" />
                  )}
                  <div className="relative z-10 flex flex-col items-center text-center px-4 pb-4 lg:pb-0">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xs font-bold mb-4 border-2 transition-all duration-300 ${
                      i === milestones.length - 1
                        ? "gradient-gold text-white border-amber-400 shadow-md"
                        : "bg-white text-amber-600 border-amber-300 group-hover:border-amber-500"
                    }`}>
                      {i === milestones.length - 1 ? <CheckCircle className="w-5 h-5" /> : m.year.slice(2)}
                    </div>
                    <p className="text-amber-600 font-bold text-sm mb-1">{m.year}</p>
                    <p className="font-semibold text-gray-900 text-sm mb-2">{m.title}</p>
                    <p className="text-gray-400 text-xs leading-relaxed">{m.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Team ── */}
        <section className="py-28 px-4 sm:px-8 lg:px-16 bg-[#0b0f1a] relative overflow-hidden">
          {/* subtle grid bg */}
          <div className="absolute inset-0 opacity-[0.04]"
            style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.8) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.8) 1px,transparent 1px)`, backgroundSize: "48px 48px" }} />
          {/* gold glow blobs */}
          <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-amber-400/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-amber-400/10 blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto relative space-y-20">

            {/* Header */}
            <motion.div {...fadeUp()} className="text-center">
              <Badge className="bg-amber-400/10 text-amber-400 border-amber-400/20 text-[10px] tracking-widest uppercase px-3 py-1 mb-4">Our People</Badge>
              <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
                Meet the <span className="text-amber-400">Minds</span> Behind the Firm
              </h2>
              <p className="mt-4 text-white/40 text-sm max-w-lg mx-auto leading-relaxed">
                Seasoned professionals with deep expertise — committed to accurate, timely, and honest advisory.
              </p>
            </motion.div>

            {/* ── Founder ── */}
            <motion.div {...fadeUp(0.1)}>
              <p className="text-[10px] tracking-widest uppercase text-white/30 font-semibold mb-8 text-center">Founder</p>

              <div className="grid lg:grid-cols-2 gap-0 max-w-5xl mx-auto rounded-3xl overflow-hidden border border-white/10 shadow-2xl">

                {/* Left — photo / monogram */}
                <div className="relative min-h-[360px] lg:min-h-0 bg-gradient-to-br from-amber-500 via-amber-400 to-yellow-300 flex items-end overflow-hidden">
                  {team.founder.photo
                    ? <Image src={team.founder.photo} alt={team.founder.name} fill className="object-cover object-top" />
                    : (
                      <>
                        {/* decorative rings */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-48 h-48 rounded-full border border-white/20" />
                          <div className="absolute w-64 h-64 rounded-full border border-white/10" />
                          <div className="absolute w-80 h-80 rounded-full border border-white/[0.06]" />
                          <span className="absolute text-8xl font-black text-white/20 select-none tracking-tighter">{team.founder.initials}</span>
                        </div>
                      </>
                    )
                  }
                  {/* bottom fade overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  {/* since badge */}
                  <div className="relative z-10 p-6">
                    <span className="text-[10px] tracking-widest uppercase text-white/60 font-semibold">Est.</span>
                    <p className="text-5xl font-black text-white leading-none">{team.founder.since}</p>
                  </div>
                </div>

                {/* Right — details */}
                <div className="bg-[#10151f] p-8 sm:p-10 flex flex-col gap-6">
                  {/* name + role */}
                  <div>
                    <p className="text-[10px] tracking-widest uppercase text-amber-400/70 font-semibold mb-2">Founder &amp; Managing Partner</p>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">{team.founder.name}</h3>
                  </div>

                  {/* quote */}
                  <blockquote className="relative pl-4 border-l-2 border-amber-400/50">
                    <p className="text-white/60 text-sm italic leading-relaxed">&ldquo;{team.founder.quote}&rdquo;</p>
                  </blockquote>

                  {/* education */}
                  <div>
                    <p className="text-[10px] tracking-widest uppercase text-white/25 font-semibold mb-3">Education</p>
                    <div className="space-y-2">
                      {team.founder.education.map((e) => (
                        <div key={e.degree} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 flex-shrink-0" />
                          <div>
                            <p className="text-white/80 text-sm font-semibold">{e.degree}</p>
                            <p className="text-white/35 text-xs">{e.institute}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* credentials */}
                  <div>
                    <p className="text-[10px] tracking-widest uppercase text-white/25 font-semibold mb-3">Credentials</p>
                    <div className="flex flex-wrap gap-2">
                      {team.founder.credentials.map((c) => (
                        <span key={c} className="px-2.5 py-1 rounded-lg bg-amber-400/10 border border-amber-400/20 text-amber-300 text-[11px] font-medium">{c}</span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>

            {/* ── Practice Heads ── */}
            <div>
              <motion.p {...fadeUp(0.05)} className="text-[10px] tracking-widest uppercase text-white/30 font-semibold mb-8 text-center">Practice Heads</motion.p>
              <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {team.heads.map((h, i) => (
                  <motion.div key={h.name} {...fadeUp(i * 0.12 + 0.1)}
                    className="group rounded-2xl overflow-hidden border border-white/10 bg-[#10151f] hover:border-amber-400/25 transition-all duration-500 shadow-lg flex flex-col">

                    {/* Photo / monogram block */}
                    <div className="relative h-68 bg-gradient-to-br from-slate-700 to-slate-900 overflow-hidden flex-shrink-0">
                      {h.photo
                        ? <Image src={h.photo} alt={h.name} fill className="object-cover object-top opacity-90" />
                        : (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-20 h-20 rounded-full border border-white/15 flex items-center justify-center">
                              <span className="text-3xl font-black text-white/20 select-none">{h.initials}</span>
                            </div>
                          </div>
                        )
                      }
                      <div className="absolute inset-0 bg-gradient-to-t from-[#10151f] via-[#10151f]/20" />
                      {/* exp pill top-right */}
                      <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 text-white/60 text-[10px] font-semibold">{h.exp}</span>
                    </div>

                    {/* Body */}
                    <div className="p-6 flex flex-col gap-4 flex-1">
                      <div>
                        <h3 className="font-bold text-white text-lg leading-tight">{h.name}</h3>
                        <p className="text-amber-400 text-xs font-medium mt-0.5">{h.role}</p>
                        <p className="text-white/35 text-[11px] mt-1">{h.education}</p>
                      </div>
                      {/* <p className="text-white/45 text-xs leading-relaxed">{h.bio}</p> */}
                      {/* specialisation chips */}
                      <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
                        {h.credentials.map((c) => (
                          <span key={c} className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-white/50 text-[10px]">{c}</span>
                        ))}
                      </div>
                    </div>

                    <div className="h-px bg-gradient-to-r from-transparent via-amber-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Employees — marquee */}
            <div>
              <motion.p {...fadeUp(0.05)} className="text-[10px] tracking-widest uppercase text-white/30 font-semibold mb-6 text-center">Our Team</motion.p>
              {/* outer mask for fade edges */}
              <div className="relative overflow-hidden"
                style={{ maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)" }}>
                <div className="flex gap-4 w-max animate-marquee hover:[animation-play-state:paused]">
                  {[...team.employees, ...team.employees].map((e, i) => (
                    <div key={i}
                      className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:border-amber-400/30 hover:bg-white/8 transition-all duration-400 cursor-default flex-shrink-0 w-36">
                      {/* photo / avatar */}
                      <div className="relative h-28 bg-gradient-to-br from-slate-700 to-slate-900 overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                          {e.photo
                            ? <Image src={e.photo} alt={e.name} fill className="object-cover opacity-80" />
                            : <span className="text-2xl font-bold text-white/25 select-none">{e.initials}</span>
                          }
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f1a]/80 to-transparent" />
                      </div>
                      <div className="p-3 text-center">
                        <p className="font-semibold text-white/80 text-xs truncate">{e.name}</p>
                        <p className="text-white/30 text-[10px] mt-0.5 truncate">{e.role}</p>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </section>


      </main>
      <Footer />
    </>
  );
}
