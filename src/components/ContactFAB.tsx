"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Phone, Mail, X } from "lucide-react";

const actions = [
  {
    icon: Phone,
    label: "Call Us",
    href: "tel:+919876543210",
    color: "bg-green-500 hover:bg-green-600",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    href: "https://wa.me/919876543210",
    color: "bg-emerald-500 hover:bg-emerald-600",
  },
  {
    icon: Mail,
    label: "Email Us",
    href: "mailto:info@deoreassociates.com",
    color: "bg-blue-500 hover:bg-blue-600",
  },
];

export default function ContactFAB() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open &&
          actions.map((action, i) => (
            <motion.a
              key={action.label}
              href={action.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.8 }}
              transition={{ delay: i * 0.05, type: "spring", stiffness: 300, damping: 24 }}
              className="flex items-center gap-2 group"
            >
              <span className="hidden group-hover:block bg-gray-900 text-white text-xs font-medium px-2.5 py-1 rounded-lg shadow-lg whitespace-nowrap">
                {action.label}
              </span>
              <span
                className={`flex items-center justify-center w-12 h-12 rounded-full text-white shadow-lg transition-colors ${action.color}`}
              >
                <action.icon size={20} />
              </span>
            </motion.a>
          ))}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen((v) => !v)}
        whileTap={{ scale: 0.9 }}
        className="flex items-center justify-center w-14 h-14 rounded-full bg-amber-600 hover:bg-amber-700 text-white shadow-xl transition-colors"
        aria-label="Contact us"
      >
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {open ? <X size={24} /> : <MessageCircle size={24} />}
        </motion.div>
      </motion.button>
    </div>
  );
}
