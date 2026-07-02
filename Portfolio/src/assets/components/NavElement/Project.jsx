import React from "react";

const projects = [
  {
    title: "Portfolio Website",
    desc: "A personal portfolio showcasing my skills, projects, and journey as a frontend developer.",
    image: "https://placehold.co/600x400",
    tech: ["React", "Tailwind", "Vite"],
  },
  {
    title: "Todo App",
    desc: "A simple and responsive task management application with CRUD functionality.",
    image: "https://placehold.co/600x400",
    tech: ["React", "JavaScript"],
  },
  {
    title: "Weather App",
    desc: "Weather forecast application using external APIs with a clean and responsive interface.",
    image: "https://placehold.co/600x400",
    tech: ["React", "API"],
  },
  {
    title: "Calculator",
    desc: "A fully functional calculator built using JavaScript with a modern UI.",
    image: "https://placehold.co/600x400",
    tech: ["JavaScript", "CSS"],
  },
  {
    title: "Landing Page",
    desc: "A responsive product landing page focused on modern UI/UX principles.",
    image: "https://placehold.co/600x400",
    tech: ["HTML", "Tailwind"],
  },
  {
    title: "Coming Soon",
    desc: "More exciting projects are currently under development.",
    image: "https://placehold.co/600x400",
    tech: ["Loading..."],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="h-auto bg-[#F9FAFC] text-black py-24 px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-hidden"
    >
        {projects.map((project, index) => (
          <div key={index} className="mb-8 border-1 gap-y-14 rounded-lg p-4 bg-blue-80 shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold">{project.title}</h3>
            <p className="text-gray-400 mt-2">{project.desc}</p>
            <div className="flex gap-2 mt-4">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full bg-blue-600/20 text-blue-400 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
     

        
    </section>
  );
}