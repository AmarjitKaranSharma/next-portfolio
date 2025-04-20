import { useInView } from "framer-motion";
import { Code, Layers, Rocket } from "lucide-react";
import { useRef } from "react";
import { motion } from "framer-motion";

export default function WhatIDo() {
  const whatIDoDetails = [
    {
      icon: <Code size={32} />,
      title: "Web Development",
      description:
        "Fully responsive, fast, SEO-friendly sites using Next.js, React, Angular & Tailwind CSS.",
      delay: 0.2,
    },
    {
      icon: <Layers size={32} />,
      title: "UI/UX Design",
      description:
        "Intuitive, engaging interfaces focused on clean aesthetics & functionality.",
      delay: 0.4,
    },
    {
      icon: <Rocket size={32} />,
      title: "SAAS Product Dev",
      description:
        "Scalable SaaS platforms—turning ideas into full-fledged digital solutions.",
      delay: 0.6,
    },
  ];

  const whatIDoRef = useRef<HTMLDivElement>(null);
  const whatIDoInView = useInView(whatIDoRef, { once: true, amount: 0.3 });

  return (
    <section id="what-i-do" ref={whatIDoRef} className="px-4 py-20 md:py-32">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={whatIDoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          What I <span className={"text-primary"}>Do</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {whatIDoDetails.map((item, index) => (
            <motion.div
              key={index}
              className={`p-8 bg-card-background hover:bg-gray-750 transition-all duration-300 transform hover:-translate-y-2 rounded-xl`}
              initial={{ opacity: 0, y: 30 }}
              animate={
                whatIDoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.6, delay: item.delay }}
            >
              <div
                className={`mb-6 inline-block p-4 rounded-2xl ${"bg-card-icon-background text-white"}`}
              >
                {item.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4">
                {item.title}
              </h3>
              <p className={"text-foreground"}>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
