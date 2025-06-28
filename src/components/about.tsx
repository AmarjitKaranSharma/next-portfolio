"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const aboutRefInView = useInView(aboutRef, { once: true, amount: 0.3 });
  return (
    <section ref={aboutRef} className="px-4 py-20 md:py-32">
      <motion.h2
        className="text-3xl md:text-5xl font-bold mb-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={aboutRefInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>
      <section className="flex flex-wrap gap-10 items-center max-w-5xl mx-auto">
        <div className="relative">
          <div className="glowing-container absolute inset-0 w-full h-full"></div>
          <motion.img
            src="/images/avatar.svg"
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
        <div className="flex-1">
          <motion.p
            className="text-lg md:text-xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={
              aboutRefInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            I am a passionate software developer with a love for creating
            innovative solutions. My journey in tech has been driven by
            curiosity and a desire to make a positive impact through code.
          </motion.p>
          <motion.p
            className="text-lg md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={
              aboutRefInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            With experience in various programming languages and frameworks, I
            thrive on challenges and enjoy collaborating with others to bring
            ideas to life.
          </motion.p>
        </div>
      </section>
    </section>
  );
}
