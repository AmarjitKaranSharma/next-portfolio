"use client";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shadecn-lib/ui/carousel";
import React, { useRef } from "react";
import { ProjectData } from "../../public/data/project";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";
import { useRouter } from "next/navigation";
import { ChevronRight } from "lucide-react";

export default function ProjectCarasoul() {
  const [api, setApi] = React.useState<CarouselApi>();
  const recentProject = useRef<HTMLElement | null>(null);
  const recentProjectInView = useInView(recentProject, {
    once: true,
    amount: 0.3,
  });
  const router = useRouter();

  React.useEffect(() => {
    if (!api) {
      return;
    }

    // setCount(api.scrollSnapList().length);
    // setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      // setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return (
    <section ref={recentProject} className="mx-auto max-w-6xl py-20 grid gap-10">
      <motion.h2
        className="text-3xl md:text-5xl font-bold text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={
          recentProjectInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
        }
        transition={{ duration: 0.6 }}
      >
        Craft & <span className={"text-primary"}>Code</span>
      </motion.h2>

      <Carousel
        plugins={[
          Autoplay({
            delay: 3000,
            stopOnFocusIn: true,
            stopOnInteraction: true,
          }),
        ]}
        setApi={setApi}
      >
        <CarouselContent className="h-max">
          {ProjectData.map((project, index) => {
            return (
              <CarouselItem
                key={index}
                className="text-foreground grid place-items-center relative"
              >
                <Image
                  loading="lazy"
                  src={project.images[0].src || "/placeholder.svg"}
                  alt={project.images[0].alt}
                  width={800}
                  height={450}
                  className="w-full h-full transition-transform duration-700 group-hover:scale-105"
                />
                <motion.button
                  className="absolute sm:bottom-6 sm:right-6 z-50 bg-primary text-white p-3 rounded-full shadow-lg cursor-pointer group inline-flex justify-center items-center gap-2 max-sm:scale-75 max-sm:bottom-3 max-sm:right-1"
                  onClick={() => router.push(`/work/${index + 1}`)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Toggle project menu"
                >
                  <span className="ml-2 ">View Project</span>
                  <ChevronRight size={24} className={``} />
                </motion.button>
              </CarouselItem>
            );
          })}
        </CarouselContent>

        <CarouselPrevious className="absolute top-1/2 left-4 z-50 cursor-pointer"></CarouselPrevious>
        <CarouselNext className="absolute top-1/2 right-4 z-50 cursor-pointer"></CarouselNext>
      </Carousel>
    </section>
  );
}
