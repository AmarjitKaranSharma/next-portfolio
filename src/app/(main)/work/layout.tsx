"use client";
import { Project } from "@/models/project";
import { SquareChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const WorkPage = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const router = useRouter();
  const [projects, setProjects] = useState<Project[]>([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Fetch project data from the server
  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch("/api/getAllProjects");
      const data = await response.json();
      setProjects(data);
    };
    fetchProjects();
  }, []);

  const changeProject = (project: string) => {
    console.log(project);
    // Navigate to the project details page
    router.push(`/work/${project}`);
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <section className="grid relative lg:grid-cols-[400px_auto] md:grid-cols-[150px_auto] gap-8 h-[calc(100vh-var(--navbar-height)-var(--gap-navbar-content)-var(--main-screen-padding-vertically))]">
      <section className="max-md:hidden bg-container-background h-[calc(100vh-var(--navbar-height)-var(--gap-navbar-content)-var(--main-screen-padding-vertically))] mt-[var(--gap-navbar-content)] p-8 rounded-2xl space-y-6 overflow-auto custom-scrollbar">
        <h1 className="text-5xl font-ubuntu text-primary max-lg:text-4xl">
          Work
        </h1>
        {projects.map((project, index) => (
          <div
            onClick={() => {
              changeProject(`${index + 1}`);
            }}
            key={index}
            className=""
          >
            <h2 className="text-2xl mb-4">{project.title}</h2>
            <p className="text-gray-700 max-lg:hidden">{project.description}</p>
          </div>
        ))}
      </section>

      <section
        className={`z-50 md:hidden absolute top-0 left-0 transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-[100%] gap-4"
        } flex mt-[var(--gap-navbar-content)] `}
      >
        <section
          className={` bg-container-background h-[calc(100vh-var(--navbar-height)-var(--gap-navbar-content)-var(--main-screen-padding-vertically))] p-8 rounded-2xl space-y-6 overflow-auto custom-scrollbar`}
        >
          <h1 className="text-5xl font-ubuntu text-primary max-lg:text-4xl">
            Work
          </h1>
          {projects.map((project, index) => (
            <div
              onClick={() => {
                changeProject(`${index + 1}`);
              }}
              key={index}
              className=""
            >
              <h2 className="text-2xl mb-4">{project.title}</h2>
              <p className="text-gray-700 max-lg:hidden">
                {project.description}
              </p>
            </div>
          ))}
        </section>
        <SquareChevronRight
          width={30}
          height={30}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className={`transition-transform duration-300 ${
            sidebarOpen ? "rotate-180" : ""
          }`}
        ></SquareChevronRight>
      </section>

      <section className="-z-50 bg-container-background h-[calc(100vh-var(--navbar-height)-var(--gap-navbar-content)-var(--main-screen-padding-vertically))] mt-[var(--gap-navbar-content)] rounded-2xl ">
        {children}
      </section>
    </section>
  );
};

export default WorkPage;
