import React from "react";

const WorkPage = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const projects = [
    {
      title: "Project One",
      description: "A brief description of Project One.",
      link: "#",
    },
    {
      title: "Project Two",
      description: "A brief description of Project Two.",
      link: "#",
    },
    {
      title: "Project Three",
      description: "A brief description of Project Three.",
      link: "#",
    },
    {
      title: "Project One",
      description: "A brief description of Project One.",
      link: "#",
    },
    {
      title: "Project Two",
      description: "A brief description of Project Two.",
      link: "#",
    },
    {
      title: "Project Three",
      description: "A brief description of Project Three.",
      link: "#",
    },
    {
      title: "Project One",
      description: "A brief description of Project One.",
      link: "#",
    },
    {
      title: "Project Two",
      description: "A brief description of Project Two.",
      link: "#",
    },
    {
      title: "Project Three",
      description: "A brief description of Project Three.",
      link: "#",
    },
  ];

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
          <div key={index} className="">
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
