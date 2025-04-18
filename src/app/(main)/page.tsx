"use client";
import Image from "next/image";
import TechStack from "@/techstack.svg";
import Person from "@/person.svg";
import { ArrowRight } from "lucide-react";
import ThreeDBackground from "@/components/3D-background";

export default function Home() {
  return (
    <section className="min-h-full max-h-max w-full">
      <section className="w-full h-[calc(100vh-var(--navbar-height))] grid place-items-center pb-20">
        {/* 3D Background Effect */}
        <div className="absolute -z-10 h-screen top-0 w-screen left-1/2 -translate-x-1/2">
          <ThreeDBackground />
        </div>

        <div className="relative grid place-items-center w-full max-w-[1000px] text-center gap-8">
          <div className="glowing-container absolute inset-0 w-full h-full"></div>
          <div className="md:text-8xl text-7xl max-sm:text-5xl font-extrabold tracking-tighter z-10">
            Building Scalable Web Experiences, One Line at a Time
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

      <section className="w-full h-[calc(100vh-var(--gap-navbar-content)-var(--navbar-height))] grid place-items-center">
        <div className="relative text-3xl font-semibold tracking-tighter ">
          <div className="grid grid-cols-2 max-sm:grid-cols-1 max-sm:justify-center gap-10 items-center justify-between">
            <h3 className="md:text-7xl text-5xl justify-center items-center max-sm:gap-2 flex flex-col gap-5">
              <span className="text-nowrap">{"<Design />"}</span>
              <span className="text-nowrap">{"<Develop />"}</span>
              <span className="text-nowrap">{"<Build />"}</span>
            </h3>
            <div className="relative grid place-items-center">
              <Image
                src={TechStack}
                alt=""
                width={undefined}
                height={undefined}
                className="w-full aspect-auto"
              />
              <Image
                src={Person}
                alt=""
                width={undefined}
                height={undefined}
                className="absolute aspect-auto w-1/2 bottom-0 right-1/2 translate-x-1/2"
              />
            </div>
            {/* <div className="md:max-w-[500px] relative p-4">
              <div className="w-full h-full absolute top-0 left-0 blur-xl bg-white/10 "></div>
              Hi, I’m Amarjit, a Full Stack Developer passionate about crafting
              intuitive, high-performance websites and scalable applications
              from front to back.
            </div> */}
          </div>
        </div>
      </section>
    </section>
  );
}
