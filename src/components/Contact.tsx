"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const contactInfo = [
  { icon: Phone, label: "Phone / WhatsApp", value: "+91 98765 43210" },
  { icon: Mail, label: "Email", value: "info@deoreassociates.com" },
  { icon: MapPin, label: "Office", value: "402, Sai Plaza, FC Road, Pune – 411004" },
  { icon: Clock, label: "Hours", value: "Mon – Sat: 9:30 AM – 7:00 PM" },
];

const services = [
  "Income Tax / ITR", "GST Compliance", "Company Registration",
  "Audit", "Company Secretarial", "Financial Advisory", "Accounting / MIS", "Other",
];

const headerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const successVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { type: "spring" as const, stiffness: 300, damping: 20 } },
  exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
};

const inputClass = "w-full px-4 py-3 rounded-xl border border-gray-200 text-sm bg-gray-50 text-gray-900 placeholder-gray-400 focus:bg-white focus:border-amber-400 focus:ring-2 focus:ring-amber-100 outline-none transition-all";
const labelClass = "text-[11px] font-semibold text-gray-500 uppercase tracking-wider";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });

  const headerRef = useRef(null);
  const bodyRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-50px" });
  const bodyInView = useInView(bodyRef, { once: true, margin: "-50px" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          ref={headerRef}
          className="text-center space-y-3 mb-14"
          variants={headerVariants}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
        >
          <Badge className="bg-amber-100 text-amber-700 border-amber-200 text-[10px] tracking-widest uppercase px-3 py-1">
            Contact Us
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Let&apos;s Start a Conversation
          </h2>
        </motion.div>

        {/* Body */}
        <motion.div
          ref={bodyRef}
          className="grid lg:grid-cols-5 gap-6"
          initial="hidden"
          animate={bodyInView ? "visible" : "hidden"}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
        >
          {/* Left panel */}
          <motion.div variants={fadeUp} className="lg:col-span-2 flex flex-col gap-6">

            {/* Info card */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 space-y-5 shadow-sm">
              {contactInfo.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-amber-50 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-0.5">{label}</p>
                    <p className="text-gray-800 text-sm">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden border border-gray-200 flex-1 min-h-[180px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3748.9!2d73.77460!3d20.00565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjDCsDAwJzIwLjMiTiA3M8KwNDYnMjguNiJF!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "180px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Form */}
          <motion.div variants={fadeUp} className="lg:col-span-3">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    variants={successVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="flex flex-col items-center justify-center py-16 text-center space-y-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Message Received!</h3>
                    <p className="text-gray-500 max-w-sm text-sm">
                      Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", service: "", message: "" }); }}
                      className="text-amber-600 text-sm font-medium hover:text-amber-700 transition-colors"
                    >
                      Send another message →
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className={labelClass}>Full Name *</label>
                        <input name="name" value={form.name} onChange={handleChange} required placeholder="Rahul Sharma" className={inputClass} />
                      </div>
                      <div className="space-y-1.5">
                        <label className={labelClass}>Phone *</label>
                        <input name="phone" value={form.phone} onChange={handleChange} required placeholder="+91 98765 43210" className={inputClass} />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label className={labelClass}>Email *</label>
                      <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="you@example.com" className={inputClass} />
                    </div>
                    <div className="space-y-1.5">
                      <label className={labelClass}>Service Needed</label>
                      <select name="service" value={form.service} onChange={handleChange} className={`${inputClass} text-white/60`}>
                        <option value="" className="bg-gray-900">Select a service...</option>
                        {services.map((s) => <option key={s} value={s} className="bg-gray-900">{s}</option>)}
                      </select>
                    </div>
                    <div className="space-y-1.5">
                      <label className={labelClass}>Message</label>
                      <textarea name="message" value={form.message} onChange={handleChange} rows={4} placeholder="Briefly describe what you need help with..." className={`${inputClass} resize-none`} />
                    </div>
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      className="w-full gradient-gold text-white font-semibold py-3.5 rounded-xl flex items-center justify-center gap-2 text-sm shadow-lg hover:opacity-90 transition-opacity"
                    >
                      <Send className="w-4 h-4" />
                      Send Message
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                    <p className="text-center text-xs text-gray-400">We respect your privacy. Your information is never shared.</p>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
