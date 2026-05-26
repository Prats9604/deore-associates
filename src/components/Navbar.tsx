"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";

const navLinks = [
  { label: "Home", hash: "#home", page: "/" },
  { label: "About", hash: null, page: "/about" },
  { label: "Services", hash: "#services", page: "/" },
  { label: "Why Us", hash: "#why-us", page: "/" },
  { label: "Testimonials", hash: "#testimonials", page: "/" },
  { label: "Contact", hash: "#contact", page: "/" },
];

const navContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.3 } },
};

const navItemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const drawerItemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.35, delay: i * 0.07 },
  }),
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  // On non-home pages the navbar is always over a light background
  const isDark = isHome && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Resolve the href for each link depending on current page
  function resolveHref(link: (typeof navLinks)[0]) {
    if (link.hash === null) return link.page; // e.g. /about
    if (isHome) return link.hash;             // on home: #services
    return `/${link.hash}`;                   // on /about: /#services
  }

  const linkClass = () =>
    `px-4 py-2 rounded-lg text-sm font-medium transition-all hover:bg-amber-50 hover:text-amber-700 ${
      isDark ? "text-white/90 hover:bg-white/10 hover:text-white" : "text-gray-700"
    }`;

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isDark
          ? "bg-transparent"
          : "bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg gradient-gold flex items-center justify-center shadow-sm">
              <Scale className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className={`font-bold text-base tracking-tight transition-colors ${isDark ? "text-white" : "text-gray-900"}`}>
                Deore &amp; Associates
              </span>
              <span className={`text-[10px] tracking-widest uppercase transition-colors ${isDark ? "text-amber-300" : "text-amber-600"}`}>
                CA · CS · Advisors
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <motion.nav
            className="hidden lg:flex items-center gap-1"
            variants={navContainerVariants}
            initial="hidden"
            animate="visible"
          >
            {navLinks.map((link) => (
              <motion.div key={link.label} variants={navItemVariants}>
                <Link href={resolveHref(link)} className={linkClass()}>
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </motion.nav>

          <motion.div
            className="hidden lg:flex items-center gap-3"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <Link href={isHome ? "#contact" : "/#contact"}>
              <Button className="gradient-gold text-white border-0 shadow-md hover:opacity-90 transition-opacity px-5">
                Get Free Consultation
              </Button>
            </Link>
          </motion.div>

          {/* Mobile Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger className="lg:hidden">
              <span className={`p-2 rounded-lg transition-colors inline-flex ${isDark ? "text-white hover:bg-white/10" : "text-gray-700 hover:bg-gray-100"}`}>
                <Menu className="w-6 h-6" />
              </span>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 p-0">
              <div className="gradient-navy p-6 pb-4">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg gradient-gold flex items-center justify-center">
                      <Scale className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-bold text-white text-sm">Deore &amp; Associates</span>
                  </div>
                  <button onClick={() => setOpen(false)} className="text-white/70 hover:text-white">
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <nav className="p-4 flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.label}
                    custom={i}
                    variants={drawerItemVariants}
                    initial="hidden"
                    animate={open ? "visible" : "hidden"}
                  >
                    <Link
                      href={resolveHref(link)}
                      onClick={() => setOpen(false)}
                      className="block px-4 py-3 rounded-lg text-sm font-medium text-gray-700 hover:bg-amber-50 hover:text-amber-700 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  className="mt-4 pt-4 border-t border-gray-100"
                  custom={navLinks.length}
                  variants={drawerItemVariants}
                  initial="hidden"
                  animate={open ? "visible" : "hidden"}
                >
                  <Link href={isHome ? "#contact" : "/#contact"} onClick={() => setOpen(false)}>
                    <Button className="w-full gradient-gold text-white border-0">
                      Free Consultation
                    </Button>
                  </Link>
                </motion.div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
