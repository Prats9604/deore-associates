"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { Users, FileCheck, Building, Clock } from "lucide-react";

const stats = [
  { icon: Users, value: 500, suffix: "+", label: "Clients Served", desc: "Individuals, MSMEs & corporates" },
  { icon: FileCheck, value: 5000, suffix: "+", label: "Returns Filed", desc: "ITR, GST, ROC & more" },
  { icon: Building, value: 200, suffix: "+", label: "Companies Incorporated", desc: "Pvt Ltd, LLP, OPC & more" },
  { icon: Clock, value: 15, suffix: "+", label: "Years in Practice", desc: "Trusted since 2009" },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const motionVal = useMotionValue(0);
  const rounded = useTransform(motionVal, (v) => Math.round(v).toLocaleString() + suffix);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      const controls = animate(motionVal, target, { duration: 1.6 });
      return controls.stop;
    }
  }, [inView, target, motionVal]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-16 gradient-navy" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {stats.map(({ icon: Icon, value, suffix, label, desc }) => (
            <motion.div
              key={label}
              className="text-center space-y-2"
              variants={cardVariants}
            >
              <motion.div
                className="w-12 h-12 rounded-xl bg-amber-400/20 flex items-center justify-center mx-auto mb-3"
                whileHover={{ rotate: 8, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <Icon className="w-6 h-6 text-amber-400" />
              </motion.div>
              <p className="text-4xl font-bold text-white">
                <CountUp target={value} suffix={suffix} />
              </p>
              <p className="font-semibold text-white/90 text-sm">{label}</p>
              <p className="text-white/50 text-xs">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
