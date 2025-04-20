"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import ThreeDBackground from "@/components/3D-background";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import WhyWorkWithMe from "@/components/why-work-with-me";
import WhatIDo from "@/components/what-i-do";
import ContactWithMe from "@/components/contact-with-me";

export default function Home() {
  const typingAnimation = [
    "Modern websites",
    1500,
    "UI/UX design",
    1500,
    "SAAS products",
    1500,
  ];

  // ref for scrollinng animation of div

  return (
    <section className="min-h-full max-h-max w-full">
      <section className="w-full h-[calc(100vh-var(--navbar-height))] grid place-items-center pb-20">
        {/* 3D Background Effect */}
        <div className="fixed -z-10 h-screen top-0 w-screen left-1/2 -translate-x-1/2">
          <ThreeDBackground />
        </div>

        <div className="relative grid place-items-center w-full max-w-[1000px] text-center gap-8">
          {/* <div className="glowing-container absolute inset-0 w-full h-full"></div> */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="md:text-8xl text-7xl max-sm:text-6xl font-extrabold tracking-tighter z-10"
          >
            Building Scalable Web Experiences, One Line at a Time
          </motion.h1>
          <div className="h-8 md:h-12">
            <TypeAnimation
              sequence={typingAnimation}
              wrapper="span"
              speed={50}
              className={`text-2xl font-medium`}
              repeat={Number.POSITIVE_INFINITY}
            />
          </div>
          <div className="flex gap-2 items-center justify-center z-10">
            <input
              type="text"
              className="rounded-3xl bg-white text-black placeholder:text-gray-500/60 py-2 px-4 flex-1 max-w-[80%] w-full"
              placeholder="Send a email"
            />
            <button className="bg-primary text-white py-2 text-sm px-2 rounded-lg active:bg-primary/50 inline-flex items-center gap-1 focus:outline-none ">
              Send
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      <section className="w-full pb-20 grid place-items-center">
        <div className="relative text-3xl font-semibold tracking-tighter ">
          <div className="grid grid-cols-2 max-sm:grid-cols-1 max-sm:justify-center gap-10 items-center justify-between">
            <h3 className="md:text-7xl text-5xl justify-center items-center max-sm:gap-2 flex flex-col gap-5">
              <span className="text-nowrap">{"<Design />"}</span>
              <span className="text-nowrap">{"<Develop />"}</span>
              <span className="text-nowrap">{"<Build />"}</span>
            </h3>
            <div className="relative grid place-items-center">
              <Image
                loading="lazy"
                src="/images/techstack.svg"
                alt="techstack"
                width={0}
                height={0}
                className="w-full aspect-auto"
              />
              <Image
                src="/images/person.svg"
                alt="person"
                width={0}
                height={0}
                className="absolute aspect-auto w-1/2 bottom-0 right-1/2 translate-x-1/2"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <WhatIDo></WhatIDo>

      {/* Why Work With Me Section */}
      <WhyWorkWithMe></WhyWorkWithMe>

      {/* Call to Action Section */}
      <ContactWithMe></ContactWithMe>
    </section>
  );
}
