import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiFirebase,
  SiMongodb,
  SiExpress,
  SiVite,
  SiNextdotjs,
  SiVercel,
  SiRedux,
  SiTypescript,
  SiPostgresql,
  SiRender,
  SiNetlify,
} from "react-icons/si";

const Skills = () => {
  const skillsData = {
    Frontend: [
      { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-5xl" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-5xl" /> },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-cyan-400 text-5xl" />,
      },
      {
        name: "JavaScript",
        icon: <FaJs className="text-yellow-400 text-5xl" />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="text-blue-600 text-5xl" />,
      },
      { name: "React", icon: <FaReact className="text-sky-400 text-5xl" /> },
      { name: "Redux", icon: <SiRedux className="text-purple-600 text-5xl" /> },
      {
        name: "Next.js",
        icon: (
          <SiNextdotjs className="text-gray-900 dark:text-white text-5xl" />
        ),
      },
    ],
    Backend: [
      {
        name: "Node.js",
        icon: <FaNodeJs className="text-green-600 text-5xl" />,
      },
      {
        name: "Express.js",
        icon: (
          <SiExpress className="text-gray-700 dark:text-gray-300 text-5xl" />
        ),
      },
      {
        name: "MongoDB",
        icon: <SiMongodb className="text-green-500 text-5xl" />,
      },
      {
        name: "PostgreSQL",
        icon: <SiPostgresql className="text-sky-700 text-5xl" />,
      },
    ],
    Tools: [
      {
        name: "Firebase",
        icon: <SiFirebase className="text-yellow-400 text-5xl" />,
      },
      { name: "Git", icon: <FaGitAlt className="text-red-500 text-5xl" /> },
      {
        name: "GitHub",
        icon: <FaGithub className="text-gray-900 dark:text-white text-5xl" />,
      },
      { name: "Vite", icon: <SiVite className="text-purple-500 text-5xl" /> },
      {
        name: "Vercel",
        icon: (
          <SiVercel className="text-gray-700 dark:text-gray-300 text-5xl" />
        ),
      },
      { name: "Render", icon: <SiRender className="text-blue-400 text-5xl" /> },
      {
        name: "Netlify",
        icon: <SiNetlify className="text-green-500 text-5xl" />,
      },
    ],
  };

  return (
    <section className="bg-base-100 py-12 px-4 md:px-10 lg:px-20 transition-colors duration-300">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl font-bold text-primary dark:text-blue-400 mb-12"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Stack
        </motion.h2>

        <div className="space-y-16">
          {Object.entries(skillsData).map(([category, skills]) => (
            <div key={category}>
              <h3 className="text-2xl font-semibold text-primary dark:text-blue-300 mb-8 text-center">
                {category}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
                {skills.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    className="flex flex-col items-center p-4 rounded-lg shadow-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 cursor-pointer transition-colors duration-300"
                    whileHover={{
                      y: -4,
                      scale: 1.08,
                      boxShadow: "0px 0px 25px rgba(59,130,246,0.6)",
                      backgroundColor: "rgba(59,130,246,0.05)",
                    }}
                  >
                    <div>{skill.icon}</div>
                    <span className="text-sm font-medium mt-3 text-gray-900 dark:text-white">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
