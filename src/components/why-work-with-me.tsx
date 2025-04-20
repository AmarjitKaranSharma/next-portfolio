"use client";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { CheckCircle, Clock, Sparkles, Zap } from "lucide-react";

export default function WhyWorkWithMe() {
  const whyWorkWithMeDetails = [
    {
      icon: <Sparkles size={28} />,
      title: "Custom Solutions",
      description: "Tailored to your specific needs and business goals.",
      delay: 0.1,
    },
    {
      icon: <Zap size={28} />,
      title: "Cutting-Edge Tech",
      description: "Using the latest frameworks and development practices.",
      delay: 0.2,
    },
    {
      icon: <CheckCircle size={28} />,
      title: "Attention to Detail",
      description: "Pixel-perfect designs with flawless functionality.",
      delay: 0.3,
    },
    {
      icon: <Clock size={28} />,
      title: "On-Time Delivery",
      description: "Meeting deadlines without compromising quality.",
      delay: 0.4,
    },
  ];

  const whyWorkRef = useRef<HTMLDivElement>(null);
  const whyWorkInView = useInView(whyWorkRef, { once: true, amount: 0.3 });

  return (
    <section ref={whyWorkRef} className={`py-20 md:py-32 px-4 `}>
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={whyWorkInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Why Work With <span className="text-primary">Me</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {whyWorkWithMeDetails.map((item, index) => (
            <motion.div
              key={index}
              className={`p-6 rounded-xl bg-card-background transition-all duration-300 transform hover:-translate-y-1 hover:scale-105`}
              initial={{ opacity: 0, y: 20 }}
              animate={
                whyWorkInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.5, delay: item.delay }}
              whileHover={"0 10px 30px -15px rgba(138, 75, 255, 0.2)"}
            >
              <div
                className={`mb-4 inline-block p-3 rounded-xl bg-card-icon-background text-white`}
              >
                {item.icon}
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2">
                {item.title}
              </h3>
              <p className={`text-sm text-foreground`}>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
