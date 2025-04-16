"use client";
import { Project } from "@/models/project";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarProvider,
  SidebarTrigger,
} from "@/shadecn-lib/ui/sidebar";
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
  };

  return (
    <>
      <SidebarProvider>
        <Sidebar>
          <SidebarHeader />
          <SidebarContent>
            <SidebarGroup />
            <section className="h-[calc(100vh-var(--navbar-height)-var(--gap-navbar-content)-var(--main-screen-padding-vertically))] mt-[var(--gap-navbar-content)] p-8 rounded-2xl space-y-6 overflow-auto custom-scrollbar">
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
            <SidebarGroup />
          </SidebarContent>
          <SidebarFooter />
        </Sidebar>
        <section className="bg-container-background h-[calc(100vh-var(--navbar-height)-var(--gap-navbar-content)-var(--main-screen-padding-vertically))] mt-[var(--gap-navbar-content)] rounded-2xl ">
          <SidebarTrigger />
          {children}
        </section>
      </SidebarProvider>
      {/* <main className="grid lg:grid-cols-[400px_auto] md:grid-cols-[150px_auto] gap-8 h-[calc(100vh-var(--navbar-height)-var(--gap-navbar-content)-var(--main-screen-padding-vertically))] mt-[var(--gap-navbar-content)]"></main> */}
    </>
  );
};

export default WorkPage;
