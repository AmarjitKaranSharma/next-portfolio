import Image from "next/image";
import TechStack from "@/techstack.svg";
import Person from "@/person.svg";

export default function Home() {
  return (
    <section className="min-h-full max-h-max w-full">
      <section className="relative w-full h-[calc(100vh-var(--gap-navbar-content)-var(--navbar-height)-var(--gap-navbar-content)-var(--navbar-height))] grid place-items-center">
        <div className="star -z-10"></div>
        <div className="star -z-10"></div>
        <div className="star -z-10"></div>
        <div className="star -z-10"></div>
        <div className="star -z-10"></div>
        <div className="star -z-10"></div>
        <div className="star -z-10"></div>
        <div className="star -z-10"></div>
        <div className="star -z-10"></div>
        <div className="star -z-10"></div>

        <div className="relative grid place-items-center w-full max-w-[1000px] text-center">
          <div className="glowing-container absolute inset-0 w-full h-full"></div>
          <div className="md:text-8xl text-7xl max-sm:text-5xl font-extrabold tracking-tighter z-10">
            Building Scalable Web Experiences, One Line at a Time
          </div>
        </div>
      </section>

      <section className="w-full h-[calc(100vh-var(--gap-navbar-content)-var(--navbar-height))]">
        <div className="relative text-3xl font-semibold tracking-tighter ">
          <div className="grid grid-cols-2 max-sm:grid-cols-1 max-sm:justify-center gap-10 items-center justify-between">
            <h3 className="md:text-7xl text-4xl max-sm:flex-row max-sm:flex-wrap max-sm:justify-center max-sm:gap-2 flex flex-col gap-5">
              <span className="text-nowrap">{"<Design />"}</span>
              <span className="text-nowrap">{"<Develop />"}</span>
              <span className="text-nowrap">{"<Build />"}</span>
            </h3>
            <div className="relative">
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
