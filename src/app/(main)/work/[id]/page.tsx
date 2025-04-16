"use client";
// import { motion, AnimatePresence } from "framer-motion";
import { use, useState } from "react";

export default function WorkDetail(props: { params: Promise<{ id: string }> }) {
  const { id } = use(props.params);
  const [project, setProject] = useState<{
    title: string;
    details: string;
  } | null>(null);
  const fetchProjectById = async () => {
    const response = await fetch(`/api/getProjectById?id=${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response);
    const data = await response.json();
    if (data) {
      setProject(data);
    }
  };
  fetchProjectById();

  return (
    // <AnimatePresence>
    //   <motion.div
    //     initial={{ opacity: 0, y: 20 }}
    //     animate={{ opacity: 1, y: 0 }}
    //     exit={{ opacity: 0, y: -20 }}
    //     transition={{ duration: 0.4 }}
    //     className="p-6"
    //   >
    //     <h3>Project {id}</h3>
    //     <p>A brief description of the project.</p>
    //   </motion.div>
    // </AnimatePresence>
    <div className="relative h-full">
      <div className="relative z-10">
        <h2 className="text-3xl font-bold text-white mb-4">{project?.title}</h2>
        <p className="text-gray-300">{project?.details}</p>

        {/* Placeholder for project content */}
        <div className="mt-8 grid grid-cols-2 gap-6">
          <div className="aspect-video rounded-lg bg-[#1a1a1a] overflow-hidden relative group">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <span className="p-4 text-white text-sm">Project preview</span>
            </div>
          </div>
          <div className="aspect-video rounded-lg bg-[#1a1a1a] overflow-hidden relative group">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <span className="p-4 text-white text-sm">Project details</span>
            </div>
          </div>
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
