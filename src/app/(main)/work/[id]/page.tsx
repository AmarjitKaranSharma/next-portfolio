"use client";

import type { Project } from "@/models/project";
import Image from "next/image";
import { use, useState } from "react";
import { ProjectData } from "../../../../../public/data/project";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

interface PageProps {
  params: Promise<{ id: number }>;
}

export default function WorkDetail({ params }: PageProps) {
  const { id } = use(params);
  const project: Project | undefined = ProjectData.find((p) => p.id == id);
  const [imageIndex, setImageIndex] = useState(0);

  if (!project) {
    return (
      <div className="flex items-center justify-center h-[60dvh]">
        <p className="text-xl text-gray-400">Project not found</p>
      </div>
    );
  }

  return (
    <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar">
      <div className="flex flex-col-reverse lg:grid lg:grid-cols-[auto_350px] gap-8">
        {/* Left column - Project showcase */}
        <div className="order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative aspect-video overflow-hidden rounded-xl mb-6 group"
          >
            {project.images && project.images.length > 0 && (
              <Image
                src={project.images[imageIndex].src || "/placeholder.svg"}
                alt={project.images[imageIndex].alt}
                width={800}
                height={450}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            )}

            {/* Image overlay with gradient */}
            <div
              className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-300"
              style={{
                background: `linear-gradient(135deg, ${project.color}80, transparent 60%)`,
              }}
            />
          </motion.div>

          {/* Thumbnail navigation if multiple images */}
          {project.images && project.images.length > 1 && (
            <div className="flex gap-3 mb-8">
              {project.images.map((image, idx) => (
                <button
                  key={idx}
                  onClick={() => setImageIndex(idx)}
                  className={`relative overflow-hidden rounded-md transition-all duration-300 ${
                    idx === imageIndex
                      ? "ring-2 ring-primary ring-offset-2 ring-offset-background"
                      : "opacity-70 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={`Thumbnail ${idx + 1}`}
                    width={80}
                    height={45}
                    className="w-16 h-12 object-cover"
                  />
                </button>
              ))}
            </div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              <span
                className="bg-gradient-to-r bg-clip-text text-transparent font-semibold"
                style={{
                  backgroundImage: `linear-gradient(to right, var(--foreground), ${project.color})`,
                }}
              >
                {project.title}
              </span>
            </h1>

            <div className="prose prose-invert max-w-none mb-8">
              <p className="text-foreground/80 leading-relaxed whitespace-pre-line">
                {project.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mb-8">
              {project.technologies.map((tech) => (
                <span
                  key={tech.name}
                  className="px-4 py-2 rounded-full text-sm bg-background/50 backdrop-blur-sm border border-foreground/20 hover:border-primary/50 transition-colors"
                  style={{
                    boxShadow: `0 0 20px ${project.color}20`,
                  }}
                >
                  {tech.name}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary hover:bg-primary/80 text-white transition-colors"
              >
                <ExternalLink size={18} />
                View Project
              </Link>

              <Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-background border border-gray-700 hover:border-primary/50 transition-colors"
              >
                <Github size={18} />
                Source Code
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Right column - Project details */}
        <motion.div
          className="order-1 lg:order-2"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="bg-background/30 backdrop-blur-md rounded-xl p-6 border border-foreground/20 sticky top-4">
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <span
                className="inline-block w-3 h-3 rounded-full"
                style={{ backgroundColor: project.color }}
              />
              Project Details
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-sm text-foreground/60 mb-2">
                  PROJECT TYPE
                </h3>
                <p className="font-medium">{project.details.projectType}</p>
              </div>

              <div>
                <h3 className="text-sm text-foreground/60 mb-2">DURATION</h3>
                <p className="font-medium">{project.details.duration}</p>
              </div>

              <div>
                <h3 className="text-sm text-foreground/60 mb-2">MY ROLE</h3>
                <p className="font-medium">{project.details.role}</p>
              </div>

              <div>
                <h3 className="text-sm text-foreground/60 mb-2">
                  KEY FEATURES
                </h3>
                <ul className="list-disc list-inside text-sm space-y-1">
                  {project.details.keyFeatures.map((feature) => {
                    return <li key={feature}>{feature}</li>;
                  })}
                </ul>
              </div>
            </div>

            {/* Decorative element */}
            <div
              className="absolute bottom-4 right-4 w-32 h-32 rounded-full blur-3xl opacity-20"
              style={{ backgroundColor: project.color }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}