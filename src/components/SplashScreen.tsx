"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Scale } from "lucide-react";
import { SHOW_SPLASH } from "@/config";

export default function SplashScreen() {
  const [visible, setVisible] = useState(SHOW_SPLASH);

  useEffect(() => {
    if (!SHOW_SPLASH) return;
    document.body.style.overflow = "hidden";
    const id = setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = "";
    }, 2600);
    return () => {
      clearTimeout(id);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] gradient-navy flex flex-col items-center justify-center gap-5"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* Logo icon */}
          <motion.div
            className="w-16 h-16 rounded-2xl gradient-gold flex items-center justify-center shadow-xl"
            initial={{ scale: 0.4, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Scale className="w-8 h-8 text-white" />
          </motion.div>

          {/* Firm name */}
          <motion.div
            className="text-center space-y-1"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            <p className="text-white text-2xl font-bold tracking-tight">Deore &amp; Associates</p>
            <p className="text-amber-400 text-xs tracking-[0.25em] uppercase">CA · CS · Advisors</p>
          </motion.div>

          {/* Subtle shimmer bar */}
          <motion.div
            className="h-px w-24 bg-gradient-to-r from-transparent via-amber-400 to-transparent"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
