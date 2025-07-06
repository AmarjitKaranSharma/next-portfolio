"use client";
import ThreeDBackground from "@/components/3D-background";
import { TypeAnimation } from "react-type-animation";
import { motion, useInView } from "framer-motion";
import About from "@/components/about";
import WhatIDo from "@/components/what-i-do";
import ContactWithMe from "@/components/contact-with-me";
import ProjectCarasoul from "@/components/project-carasoul";
import { useRef } from "react";
import { GithubIcon, InstagramIcon, LinkedinIcon } from "lucide-react";
import WhatsappIcon from "@/components/icons/whatsappIcon";
import EmailIcon from "@/components/icons/emailIcon";
import Link from "next/link";
import { contactUrl } from "@/constants";
import { TechShowcase } from "@/components/tech-showcase";

export default function Home() {
  const typingAnimation = [
    "Frontend Developer",
    1500,
    "Backend Developer",
    1500,
  ];

  const heroSection = useRef<HTMLDivElement | null>(null);
  const heroSectionInView = useInView(heroSection, {
    once: true,
    amount: 0.3,
  });

  return (
    <section className="min-h-full max-h-max w-full">
      <section className="w-full h-[calc(100dvh-var(--navbar-height))] grid place-items-center pb-20">
        {/* 3D Background Effect */}
        <div className="absolute -z-10 h-[100dvh] top-0 w-screen left-1/2 -translate-x-1/2">
          <ThreeDBackground />
        </div>

        <div className="h-[calc(100dvh-var(--navbar-height)-var(--gap-navbar-content))] grid place-items-center w-full max-w-[1000px] text-center max-sm:gap-8">
          <div ref={heroSection} className="space-y-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={
                heroSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 1.0 }}
              className="text-7xl max-sm:text-6xl font-extrabold tracking-tighter z-10 relative"
            >
              <div className="glowing-container absolute w-full h-full right-0 top-0"></div>
              <span className="text-active">Amarjit </span>
              Karan Sharma
            </motion.h1>

            <div className="h-8 md:h-12">
              <TypeAnimation
                sequence={typingAnimation}
                wrapper="span"
                speed={50}
                className={`text-2xl font-medium capitalize`}
                repeat={Number.POSITIVE_INFINITY}
              />
            </div>

            <motion.div className="flex justify-center gap-4 items-center">
              <Link
                className="text-foreground hover:text-purple-500 transition-colors cursor-pointer z-50"
                target="_blank"
                href={contactUrl.LINKEDIN_URL}
              >
                <LinkedinIcon></LinkedinIcon>
              </Link>
              <Link
                className="text-foreground hover:text-purple-500
                transition-colors cursor-pointer z-50"
                target="_blank"
                href={contactUrl.INSTAGRAM_URL}
              >
                <InstagramIcon></InstagramIcon>
              </Link>
              <Link
                className="text-foreground hover:text-purple-500
                transition-colors cursor-pointer z-50"
                target="_blank"
                href={contactUrl.GITHUB_URL}
              >
                <GithubIcon></GithubIcon>
              </Link>
              <Link
                className="text-foreground hover:text-purple-500
                transition-colors cursor-pointer z-50"
                target="_blank"
                href={contactUrl.WHATSAPP_URL}
              >
                <WhatsappIcon></WhatsappIcon>
              </Link>
              <Link
                className="text-foreground hover:text-purple-500
                transition-colors cursor-pointer z-50"
                target="_blank"
                href={contactUrl.EMAIL_URL}
              >
                <EmailIcon></EmailIcon>
              </Link>
            </motion.div>

            {/* <motion.a
              href="#what-i-do"
              className={`inline-flex gap-1 px-3 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-all h-min w-min`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Explore
              <ArrowRight></ArrowRight>
            </motion.a> */}
          </div>
        </div>
      </section>

      {/* About Section */}
      <About></About>

      {/* Tech & Tools Section */}
      <TechShowcase></TechShowcase>

      {/* Project Carasoul */}
      <ProjectCarasoul></ProjectCarasoul>

      {/* What I Do Section */}
      <WhatIDo></WhatIDo>

      {/* Call to Action Section */}
      <ContactWithMe></ContactWithMe>
    </section>
  );
}
