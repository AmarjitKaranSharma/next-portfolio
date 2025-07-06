import { useRef } from "react";
import { MongoDBIcon } from "./icons/mongodbIcon";
import { useInView, motion } from "framer-motion";
import { AngularIcon } from "./icons/angularIcon";
import { NodejsIcon } from "./icons/nodejsIcon";
import { NestjsIcon } from "./icons/nestjsIcon";
import { VuejsIcon } from "./icons/vuejsIcon";
import { DockerIcon } from "./icons/dockerIcon";

export function TechShowcase() {
  const techRef = useRef<HTMLDivElement>(null);
  const techRefInView = useInView(techRef, { once: true, amount: 0.3 });

  return (
    <section
      ref={techRef}
      className="w-full max-w-[1000px] mx-auto px-4 py-20 grid grid-cols-1 place-items-center gap-10"
    >
      <motion.h2
        className="text-3xl md:text-5xl font-bold tracking-tighter max-sm:text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={techRefInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        Technology & <span className={"text-primary"}>Tools</span>
      </motion.h2>
      <div className="flex flex-wrap gap-6 justify-end max-sm:justify-center">
        <MongoDBIcon />
        <AngularIcon />
        <NodejsIcon />
        <NestjsIcon />
        <VuejsIcon />
        <DockerIcon />
      </div>
    </section>
  );
}
