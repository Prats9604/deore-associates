"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { Users, FileCheck, Building, Clock } from "lucide-react";

const stats = [
  { icon: Users, value: 500, suffix: "+", label: "Clients Served" },
  { icon: FileCheck, value: 5000, suffix: "+", label: "Returns Filed" },
  { icon: Building, value: 200, suffix: "+", label: "Companies Incorporated" },
  { icon: Clock, value: 15, suffix: "+", label: "Years in Practice" },
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
          className="grid grid-cols-4 gap-4 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {stats.map(({ icon: Icon, value, suffix, label }) => (
            <motion.div
              key={label}
              className="text-center space-y-1.5"
              variants={cardVariants}
            >
              <motion.div
                className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl bg-amber-400/20 flex items-center justify-center mx-auto mb-2"
                whileHover={{ rotate: 8, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <Icon className="w-4 h-4 sm:w-6 sm:h-6 text-amber-400" />
              </motion.div>
              <p className="text-xl sm:text-3xl lg:text-4xl font-bold text-white">
                <CountUp target={value} suffix={suffix} />
              </p>
              <p className="font-medium text-white/70 text-[10px] sm:text-xs leading-tight">{label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
