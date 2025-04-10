"use client";
import { Project } from "@/models/project";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
// import commonService from "@/services/common.service";

const WorkPage = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const router = useRouter();
  const [projects, setProjects] = useState<Project[]>([]);

  // Fetch project data from the server
  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch("/api/project");
      const data = await response.json();
      setProjects(data);
    };
    fetchProjects();
  }, []);
  // const projects = commonService.getProjects();
  // console.log(projects);

  const changeProject = (project: string) => {
    console.log(project);
    // Navigate to the project details page
    router.push(`/work/${project}`);
  };

  return (
    <main
      style={{
        height: `calc(100vh - var(--navbar-height) - var(--gap-navbar-content))`,
      }}
      className="grid grid-cols-[400px_auto] gap-8"
    >
      <section className="bg-container-background p-8 rounded-2xl space-y-6 h-full overflow-auto custom-scrollbar">
        <h1 className="text-5xl font-ubuntu text-primary">Work</h1>
        {projects.map((project, index) => (
          <div
            onClick={() => {
              changeProject(`${index + 1}`);
            }}
            key={index}
            className=""
          >
            <h2 className="text-2xl mb-4">{project.title}</h2>
            <p className="text-gray-700">{project.description}</p>
          </div>
        ))}
      </section>
      <section className="bg-container-background h-full rounded-2xl">
        {children}
      </section>
    </main>
  );
};

export default WorkPage;
