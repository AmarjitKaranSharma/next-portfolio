"use client";
import type { Project } from "@/models/project";
import { usePathname, useRouter } from "next/navigation";
import type React from "react";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ProjectData } from "../../../../public/data/project";
import { ChevronRight, Folder, FolderOpen } from "lucide-react";
import Image from "next/image";

const WorkPage = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const router = useRouter();
  const projectList: Project[] = ProjectData;
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const activeRoute = usePathname();
  const currentProjectId = Number(activeRoute.split("/")[2]);

  // Navigate to the project details page
  const onSelectProject = (projectId: number) => {
    router.push(`/work/${projectId}`);
  };

  // Close sidebar on mobile when a project is selected
  useEffect(() => {
    if (window.innerWidth < 768) {
      setSidebarOpen(false);
    }
  }, [currentProjectId]);

  return (
    <section className="mt-[calc(var(--gap-navbar-content)*1.5)]">
      {/* 3D Background Effect - Reusing from home page for consistency */}
      <div className="fixed -z-10 h-screen top-0 w-screen left-1/2 -translate-x-1/2 opacity-50">
        {/* We're keeping the 3D background for consistency with the home page */}
      </div>

      {/* Main content container */}
      <div className="relative grid lg:grid-cols-[280px_1fr] gap-6 h-full">
        {/* Sidebar - Desktop */}
        <motion.div
          className="sticky right-0 bottom-0 hidden bg-container-background backdrop-blur-md rounded-2xl p-6 overflow-hidden lg:flex lg:flex-col max-h-[calc(100vh-var(--navbar-height)-var(--gap-navbar-content)-var(--main-screen-padding-vertically))]"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-active bg-clip-text text-transparent mb-6">
            My Work
          </h2>

          <div className="overflow-y-auto custom-scrollbar flex-grow pr-2">
            <ul className="space-y-3">
              {projectList.map((project) => {
                const isSelected = project.id === currentProjectId;
                return (
                  <motion.li
                    key={project.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: project.id * 0.1 }}
                  >
                    <button
                      onClick={() => onSelectProject(project.id)}
                      className={`w-full text-left group relative overflow-hidden rounded-xl transition-all duration-300 cursor-pointer ${
                        isSelected
                          ? "bg-gradient-to-r from-primary/20 to-active/20 backdrop-blur-sm"
                          : "hover:bg-container-background/50"
                      } p-4`}
                    >
                      <div className="flex items-center gap-3">
                        {isSelected ? (
                          <FolderOpen size={22} className="text-primary" />
                        ) : (
                          <Folder
                            size={22}
                            className="text-gray-400 group-hover:text-primary transition-colors"
                          />
                        )}
                        <h3
                          className={`text-lg font-medium transition-all duration-300 ${
                            isSelected
                              ? "text-foreground"
                              : "text-foreground/70 group-hover:text-foreground"
                          }`}
                        >
                          {project.title}
                        </h3>
                      </div>

                      {project.images && project.images.length > 0 && (
                        <div className="mt-3 rounded-lg overflow-hidden">
                          <Image
                            src={project.images[0].src || "/placeholder.svg"}
                            alt={project.images[0].alt}
                            width={250}
                            height={140}
                            className="w-full h-24 object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                      )}

                      <p
                        className={`mt-2 text-sm transition-all duration-300 line-clamp-2 ${
                          isSelected
                            ? "text-foreground/80"
                            : "text-foreground/50 group-hover:text-foreground/80"
                        }`}
                      >
                        {project.description.substring(0, 80)}...
                      </p>

                      {/* Background glow effect on hover */}
                      <div
                        className={`absolute -z-10 inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 ${
                          isSelected ? "opacity-30" : ""
                        }`}
                        style={{
                          background: `radial-gradient(circle at center, ${project.color}, transparent 70%)`,
                        }}
                      />
                    </button>
                  </motion.li>
                );
              })}
            </ul>
          </div>

          {/* Decorative elements */}
          <div className="absolute bottom-6 right-6 w-20 h-20 rounded-full bg-gradient-to-r from-primary/10 to-active/10 blur-xl"></div>
        </motion.div>

        {/* Mobile sidebar toggle */}
        <motion.button
          className="lg:hidden fixed bottom-6 left-6 z-50 bg-primary text-white p-3 rounded-full shadow-lg"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Toggle project menu"
        >
          <ChevronRight
            size={24}
            className={`transition-transform duration-300 ${
              sidebarOpen ? "rotate-180" : ""
            }`}
          />
        </motion.button>

        {/* Mobile sidebar */}
        <AnimatePresence>
          {sidebarOpen && (
            <motion.div
              className="lg:hidden fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="absolute left-0 top-0 h-full w-[85%] max-w-[320px] bg-container-background p-6 shadow-xl"
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-active bg-clip-text text-transparent mb-6">
                  My Work
                </h2>

                <div className="overflow-y-auto custom-scrollbar h-[calc(100%-4rem)]">
                  <ul className="space-y-3">
                    {projectList.map((project) => {
                      const isSelected = project.id === currentProjectId;
                      return (
                        <li key={project.id}>
                          <button
                            onClick={() => onSelectProject(project.id)}
                            className={`w-full text-left group relative overflow-hidden rounded-xl transition-all duration-300 ${
                              isSelected
                                ? "bg-gradient-to-r from-primary/20 to-active/20"
                                : "hover:bg-container-background/50"
                            } p-4`}
                          >
                            <div className="flex items-center gap-3">
                              {isSelected ? (
                                <FolderOpen
                                  size={20}
                                  className="text-primary"
                                />
                              ) : (
                                <Folder
                                  size={20}
                                  className="text-gray-400 group-hover:text-primary transition-colors"
                                />
                              )}
                              <h3
                                className={`text-base font-medium transition-all duration-300 ${
                                  isSelected
                                    ? "text-foreground"
                                    : "text-foreground/70 group-hover:text-foreground"
                                }`}
                              >
                                {project.title}
                              </h3>
                            </div>

                            {project.images && project.images.length > 0 && (
                              <div className="mt-3 rounded-lg overflow-hidden">
                                <Image
                                  src={
                                    project.images[0].src || "/placeholder.svg"
                                  }
                                  alt={project.images[0].alt}
                                  width={250}
                                  height={140}
                                  className="w-full h-20 object-cover"
                                />
                              </div>
                            )}

                            <p
                              className={`mt-2 text-xs transition-all duration-300 line-clamp-2 ${
                                isSelected
                                  ? "text-foreground/80"
                                  : "text-foreground/50 group-hover:text-foreground/80"
                              }`}
                            >
                              {project.description.substring(0, 60)}...
                            </p>

                            {/* Animated indicator */}
                            {isSelected && (
                              <div
                                className="absolute left-0 top-0 w-1 h-full rounded-l-md"
                                style={{ backgroundColor: project.color }}
                              />
                            )}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </motion.div>

              {/* Close overlay by clicking outside */}
              <div
                className="absolute inset-0 z-[-1]"
                onClick={() => setSidebarOpen(false)}
                aria-hidden="true"
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main content area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentProjectId}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="bg-container-background backdrop-blur-md rounded-2xl relative max-h-[calc(100vh-var(--navbar-height)-var(--gap-navbar-content)-var(--main-screen-padding-vertically))] overflow-y-auto"
          >
            {children}

            {/* Background decorative elements */}
            <div className="absolute top-[10%] right-[10%] w-64 h-64 rounded-full bg-primary/10 blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-[20%] left-[30%] w-40 h-40 rounded-full bg-active/10 blur-2xl pointer-events-none"></div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default WorkPage;
