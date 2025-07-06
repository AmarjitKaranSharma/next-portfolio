import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import PulsingButton from "./ui/buttons/pulsing-button";

export default function ContactWithMe() {
  const ctaRef = useRef<HTMLDivElement>(null);
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.5 });

  return (
    <section ref={ctaRef} className="py-20 md:pb-32 px-4 text-center relative">
      <div className="glowing-container absolute inset-0 w-1/2 h-1/2"></div>

      <div className="max-w-3xl mx-auto">
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Let&apos;s Build Something Amazing! 🚀
        </motion.h2>

        <motion.p
          className={`text-lg md:text-xl mb-10 text-foreground`}
          initial={{ opacity: 0, y: 20 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {
            "Ready to transform your ideas into reality? I'm just a message away."
          }
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <PulsingButton />
        </motion.div>
      </div>
    </section>
  );
}
