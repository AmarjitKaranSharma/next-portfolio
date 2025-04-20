"use client";

import { Project } from "@/models/project";
import Image from "next/image";
import { use, useEffect, useState } from "react";
// import Ojc from "@/projects/ojc-1.jpg";

interface PageProps {
  params: Promise<{ id: string }>; // <- updated type
}

export default function WorkDetail({ params }: PageProps) {
  const { id } = use(params);
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    const fetchProjectById = async () => {
      const response = await fetch(`/api/getProjectById?id=${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log("Project data:", data);
      if (data) {
        setProject(data);
      }
    };
    fetchProjectById();
  }, [id]);

  return (
    <div className="p-6 h-full overflow-y-auto">
      <div className="relative z-10 h-full">
        <h2 className="text-3xl font-bold text-white mb-4">{project?.title}</h2>
        <p className="text-gray-300">{project?.description}</p>

        <div className="mt-8 grid  gap-6">
          {project &&
            project.images &&
            project.images.map((image) => (
              <Image
                loading="lazy"
                key={image.alt}
                src={image.src}
                width={400}
                height={200}
                className="w-full h-full object-cover"
                alt={image.alt}
              ></Image>
            ))}
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-medium text-white mb-3">Technologies</h3>
          <div className="flex flex-wrap gap-2">
            {["React", "TypeScript", "Node.js"].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full text-xs bg-[#1a1a1a] text-gray-300 border border-gray-800"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
