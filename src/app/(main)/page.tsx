"use client";
// import Image from "next/image";
// import { ArrowRight } from "lucide-react";
import ThreeDBackground from "@/components/3D-background";
import { TypeAnimation } from "react-type-animation";
import { motion, useInView } from "framer-motion";
// import WhyWorkWithMe from "@/components/why-work-with-me";
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

export default function Home() {
  const typingAnimation = [
    "Frontend Developer",
    1500,
    "Backend Developer",
    1500,
    "UI/UX Designer",
    1500,
  ];

  const heroSection = useRef<HTMLDivElement | null>(null);
  const heroSectionInView = useInView(heroSection, {
    once: true,
    amount: 0.3,
  });
  // const subHeroSection = useRef<HTMLElement | null>(null);
  // const subHeroSectionInView = useInView(subHeroSection, {
  //   once: true,
  //   amount: 0.3,
  // });

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

      {/* Sub Hero Section */}
      {/* Uncomment this section if you want to use it in the future */}
      {/* <section
        ref={subHeroSection}
        className="w-full pb-20 grid place-items-center"
      >
        <div className="grid grid-cols-2 max-sm:grid-cols-1 max-sm:justify-center gap-10 items-center justify-between font-semibold tracking-tighter">
          <h3 className="md:text-6xl text-5xl justify-center items-center max-sm:gap-2 flex flex-col gap-5">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={
                subHeroSectionInView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.4 }}
              className="text-nowrap"
            >
              {"<Design />"}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={
                subHeroSectionInView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.8 }}
              className="text-nowrap"
            >
              {"<Develop />"}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={
                subHeroSectionInView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 20 }
              }
              transition={{ duration: 1.0 }}
              className="text-nowrap"
            >
              {"<Build />"}
            </motion.span>
          </h3>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={
              subHeroSectionInView
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 40 }
            }
            transition={{ duration: 0.6 }}
            className="relative grid place-items-center"
          >
            <Image
              loading="lazy"
              src="/images/techstack.svg"
              alt="techstack"
              width={0}
              height={0}
              className="w-full aspect-auto"
            />
            <Image
              loading="lazy"
              src="/images/person.svg"
              alt="person"
              width={0}
              height={0}
              className="absolute aspect-auto w-1/2 bottom-0 right-1/2 translate-x-1/2"
            />
          </motion.div>
        </div>
      </section> */}

      {/* Project Carasoul */}
      <ProjectCarasoul></ProjectCarasoul>

      {/* What I Do Section */}
      <WhatIDo></WhatIDo>

      {/* Why Work With Me Section */}
      {/* <WhyWorkWithMe></WhyWorkWithMe> */}

      {/* Call to Action Section */}
      <ContactWithMe></ContactWithMe>
    </section>
  );
}
