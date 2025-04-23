"use client";

import { Project } from "@/models/project";
import Image from "next/image";
import { use } from "react";
import { ProjectData } from "../../../../../public/data/project";
// import Ojc from "@/projects/ojc-1.jpg";

interface PageProps {
  params: Promise<{ id: number }>; // <- updated type
}

export default function WorkDetail({ params }: PageProps) {
  const { id } = use(params);
  const project: Project | undefined = ProjectData.find((p) => p.id == id);

  return (
    <div className="p-6 h-full overflow-y-auto">
      <h2 className="text-3xl font-bold text-white mb-4">{project?.title}</h2>
      <p className="text-gray-300">{project?.description}</p>

      <div className="mt-8 grid  gap-6">
        {project?.images?.map((image, index) => (
          <Image
            loading="lazy"
            key={index}
            src={image.src}
            alt={image.alt}
            width={400}
            height={200}
            className="w-full h-full object-cover"
          />
        ))}
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-medium text-white mb-3">Technologies</h3>
        <div className="flex flex-wrap gap-2">
          {project?.technologies.map((tech) => (
            <span
              key={tech.name}
              className="px-3 py-1 rounded-full text-xs bg-[#1a1a1a] text-gray-300 border border-gray-800"
            >
              {tech.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
