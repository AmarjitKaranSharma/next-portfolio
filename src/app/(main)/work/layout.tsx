"use client";
import { Project } from "@/models/project";
import { SquareChevronRight } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const WorkPage = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const router = useRouter();
  const [projectList, setProjectList] = useState<Project[]>([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const activeRoute = usePathname();
  const currentProjectId = Number(activeRoute.split("/")[2]);

  // Fetch project data from the server
  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch("/api/getAllProjects");
      const data = await response.json();
      setProjectList(data);
    };
    fetchProjects();
  }, []);

  // Navigate to the project details page
  const onSelectProject = (project: string) => {
    router.push(`/work/${project}`);
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <section className="grid relative lg:grid-cols-[400px_auto] md:grid-cols-1 gap-8 min-h-[calc(100vh-var(--navbar-height)-var(--gap-navbar-content)-var(--main-screen-padding-vertically)-var(--main-screen-padding-vertically))] mt-[calc(var(--gap-navbar-content)+var(--gap-navbar-content))] max-h-max">
      <motion.div
        className="w-full p-8 relative max-lg:hidden"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-5xl font-bold text-purple-500 mb-10">Work</h2>
        <ul className="space-y-4">
          {projectList.map((project, index) => {
            const isSelected = index + 1 === currentProjectId;
            return (
              <li key={project.id} className="relative py-3 px-5">
                <button
                  onClick={() => onSelectProject(project.id)}
                  className="text-left w-full cursor-pointer"
                >
                  <h3
                    className={`text-2xl font-medium transition-all duration-300 ${
                      isSelected
                        ? "text-white"
                        : "text-gray-500 hover:text-gray-300"
                    }`}
                  >
                    {project.title}
                  </h3>

                  <p
                    className={`mt-2 text-sm transition-all duration-300 ${
                      isSelected ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {project.description}
                  </p>

                  {/* Animated indicator */}
                  {isSelected && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute -left-1 top-1/2 -translate-y-1/2 w-1.5 h-12 rounded-full "
                      style={{ backgroundColor: project.color }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </button>

                {/* Hover effect */}
                <div
                  className={`absolute -z-10 inset-0 rounded-lg transition-opacity duration-300 opacity-0 group-hover:opacity-5 ${
                    isSelected ? "opacity-10" : ""
                  }`}
                  style={{
                    background: `linear-gradient(135deg, ${project.color}, transparent)`,
                  }}
                />
              </li>
            );
          })}
        </ul>

        {/* Decorative elements */}
        <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[1px] h-[80%] bg-gradient-to-b from-transparent via-purple-500 to-transparent opacity-50"></div>
        <div className="absolute bottom-[10%] left-[20%] w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-10 blur-xl"></div>
      </motion.div>

      {/* Mobile Screen Sidebar */}
      <div
        className={`h-full absolute top-0 left-0 lg:hidden flex ${
          sidebarOpen ? "gap-0" : "gap-5"
        } transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-[90%]"
        }`}
      >
        <motion.div
          className="max-sm:w-[300px] w-[400px] p-4 bg-background z-50"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-5xl font-bold text-purple-500 mb-10">Work</h2>
          <ul className="space-y-4">
            {projectList.map((project, index) => {
              const isSelected = index + 1 === currentProjectId;
              return (
                <li key={project.id} className="relative py-3 px-5">
                  <button
                    onClick={() => onSelectProject(project.id)}
                    className="text-left w-full cursor-pointer"
                  >
                    <h3
                      className={`text-2xl font-medium transition-all duration-300 ${
                        isSelected
                          ? "text-foreground"
                          : "text-gray-500 hover:text-gray-300"
                      }`}
                    >
                      {project.title}
                    </h3>

                    <p
                      className={`mt-2 text-sm transition-all duration-300 max-sm:hidden ${
                        isSelected ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {project.description}
                    </p>

                    {/* Animated indicator */}
                    {isSelected && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute -left-1 top-1/2 -translate-y-1/2 w-1.5 h-12 rounded-full"
                        style={{ backgroundColor: project.color }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}

                    {/* Hover effect */}
                    <div
                      className={`absolute -z-10 inset-0 rounded-lg transition-opacity duration-300 opacity-0 group-hover:opacity-5 ${
                        isSelected ? "opacity-10" : ""
                      }`}
                      style={{
                        background: `linear-gradient(135deg, ${project.color}, transparent)`,
                      }}
                    />
                  </button>
                </li>
              );
            })}
          </ul>
        </motion.div>

        {/* Decorative elements */}
        {/* <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[1px] h-[80%] bg-gradient-to-b from-transparent via-purple-500 to-transparent opacity-50"></div>
        <div className="absolute bottom-[10%] left-[20%] w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-10 blur-xl"></div> */}
        <SquareChevronRight
          width={30}
          height={30}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className={`transition-transform duration-300 cursor-pointer ${
            sidebarOpen ? "rotate-180" : ""
          }`}
        ></SquareChevronRight>
      </div>

      <div className="max-sm:p-3 p-8 relative overflow-hidden -z-50 bg-container-background rounded-2xl h-full">
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="h-full"
          >
            {children}
          </motion.div>
        </AnimatePresence>

        {/* Background decorative elements */}
        <div className="absolute top-[10%] right-[10%] w-64 h-64 rounded-full bg-purple-900 opacity-5 blur-3xl"></div>
        <div className="absolute bottom-[20%] left-[30%] w-40 h-40 rounded-full bg-pink-700 opacity-5 blur-2xl"></div>
      </div>
    </section>
  );
};

export default WorkPage;
