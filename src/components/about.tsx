"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const aboutRefInView = useInView(aboutRef, { once: true, amount: 0.3 });
  return (
    <section ref={aboutRef} className="px-4 pt-20 pb-5">
      <motion.h2
        className="text-3xl md:text-5xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={aboutRefInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        About <span className="text-primary">Me</span>
      </motion.h2>
      <section className="max-w-5xl mx-auto">
        <div className="relative">
          <div className="glowing-container absolute inset-0 w-full h-full"></div>
          <motion.img
            src="/images/avatar.svg"
            loading="lazy"
            alt="Profile Picture"
            className="w-32 h-32 md:w-48 md:h-48 rounded-full mx-auto mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              aboutRefInView
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.6, delay: 0.2 }}
          />
        </div>
        <div className="py-5">
          <motion.p
            className="text-lg md:text-xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={
              aboutRefInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Motivated and adaptable Junior Software Engineer with hands-on
            experience in developing scalable web applications and SaaS
            solutions. Skilled in modern JavaScript frameworks, backend
            technologies, and database systems. Strong team player with a proven
            ability to deliver quality results under tight deadlines.
          </motion.p>
        </div>
      </section>
    </section>
  );
}
