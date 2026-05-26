"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: MapPin,
    label: "Office Address",
    value: "402, Sai Plaza, FC Road, Pune – 411004, Maharashtra",
  },
  {
    icon: Phone,
    label: "Phone / WhatsApp",
    value: "+91 98765 43210",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@deoreassociates.com",
  },
  {
    icon: Clock,
    label: "Office Hours",
    value: "Mon – Sat: 9:30 AM – 7:00 PM",
  },
];

const services = [
  "Income Tax / ITR",
  "GST Compliance",
  "Company Registration",
  "Audit",
  "Company Secretarial",
  "Financial Advisory",
  "Accounting / MIS",
  "Other",
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const slideFromLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const slideFromRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const headerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const successVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 300, damping: 20 },
  },
  exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
};

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const headerRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-50px" });
  const leftInView = useInView(leftRef, { once: true, margin: "-50px" });
  const rightInView = useInView(rightRef, { once: true, margin: "-50px" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={headerRef}
          className="text-center space-y-4 mb-16"
          variants={headerVariants}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
        >
          <Badge className="bg-amber-100 text-amber-700 border-amber-200 text-xs tracking-widest uppercase px-4 py-1.5">
            Contact Us
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Let&apos;s Start a Conversation
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Get a free 30-minute consultation. No commitment, no jargon — just straight answers.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            ref={leftRef}
            className="lg:col-span-2 space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate={leftInView ? "visible" : "hidden"}
          >
            <div className="space-y-5">
              {contactInfo.map(({ icon: Icon, label, value }) => (
                <motion.div key={label} className="flex items-start gap-4" variants={slideFromLeft}>
                  <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-0.5">
                      {label}
                    </p>
                    <p className="text-gray-800 text-sm font-medium">{value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Map placeholder */}
            <motion.div
              className="rounded-2xl overflow-hidden border border-gray-200 bg-gray-50 h-48 flex items-center justify-center"
              variants={slideFromLeft}
            >
              <div className="text-center space-y-2">
                <MapPin className="w-8 h-8 text-amber-500 mx-auto" />
                <p className="text-gray-500 text-sm">FC Road, Pune</p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-600 text-xs font-medium underline underline-offset-2"
                >
                  Open in Google Maps →
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Form */}
          <motion.div
            ref={rightRef}
            className="lg:col-span-3"
            variants={containerVariants}
            initial="hidden"
            animate={rightInView ? "visible" : "hidden"}
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  variants={successVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="flex flex-col items-center justify-center h-full space-y-4 py-16 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Message Received!</h3>
                  <p className="text-gray-500 max-w-sm">
                    Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: "", email: "", phone: "", service: "", message: "" });
                    }}
                    className="text-amber-600 text-sm font-medium underline underline-offset-2"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-5"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.div className="grid sm:grid-cols-2 gap-5" variants={slideFromRight}>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                        Full Name *
                      </label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Rahul Sharma"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm bg-gray-50 focus:bg-white focus:border-amber-400 focus:ring-2 focus:ring-amber-100 outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                        Phone Number *
                      </label>
                      <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm bg-gray-50 focus:bg-white focus:border-amber-400 focus:ring-2 focus:ring-amber-100 outline-none transition-all"
                      />
                    </div>
                  </motion.div>
                  <motion.div className="space-y-1.5" variants={slideFromRight}>
                    <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                      Email Address *
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm bg-gray-50 focus:bg-white focus:border-amber-400 focus:ring-2 focus:ring-amber-100 outline-none transition-all"
                    />
                  </motion.div>
                  <motion.div className="space-y-1.5" variants={slideFromRight}>
                    <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                      Service Needed
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm bg-gray-50 focus:bg-white focus:border-amber-400 focus:ring-2 focus:ring-amber-100 outline-none transition-all text-gray-700"
                    >
                      <option value="">Select a service...</option>
                      {services.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </motion.div>
                  <motion.div className="space-y-1.5" variants={slideFromRight}>
                    <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Briefly describe what you need help with..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm bg-gray-50 focus:bg-white focus:border-amber-400 focus:ring-2 focus:ring-amber-100 outline-none transition-all resize-none"
                    />
                  </motion.div>
                  <motion.div variants={slideFromRight}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full gradient-gold text-white border-0 shadow-md hover:opacity-90 transition-opacity gap-2"
                      >
                        <Send className="w-4 h-4" />
                        Send Message — It&apos;s Free
                      </Button>
                    </motion.div>
                  </motion.div>
                  <p className="text-center text-xs text-gray-400">
                    We respect your privacy. Your information is never shared.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
