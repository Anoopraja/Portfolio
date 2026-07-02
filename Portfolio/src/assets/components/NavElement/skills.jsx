import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaGitAlt, FaGithub, FaPhotoVideo, FaSketch } from "react-icons/fa";
import { SiTailwindcss, SiVite } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "React", icon: <FaReact /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "Python", icon: <FaPython /> },
//   { name: "Git", icon: <FaGitAlt /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "Vite", icon: <SiVite /> },
  { name: "Photography", icon: <FaPhotoVideo /> },
  { name: "Sketching", icon: <FaSketch /> },
];

export default function Skills() {
  return (
    <section id="skills" className="py-0 pb-30 bg-gray-50 text-white">
        <h1 className="text-4xl font-bold text-center mb-12">Skills</h1>
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-zinc-800 rounded-2xl p-6 flex flex-col items-center gap-4 hover:bg-blue-600 duration-300"
            >
              <div className="text-5xl">{skill.icon}</div>
              <h3 className="font-semibold">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}