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
      { name: "React", icon: <FaReact className="text-sky-400 text-5xl" /> },
      {
        name: "Next.js",
        icon: <SiNextdotjs className="text-black text-5xl" />,
      },
    ],
    Backend: [
      {
        name: "Node.js",
        icon: <FaNodeJs className="text-green-600 text-5xl" />,
      },
      {
        name: "Express.js",
        icon: <SiExpress className="text-gray-600 text-5xl" />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb className="text-green-500 text-5xl" />,
      },
    ],
    Tools: [
      {
        name: "Firebase",
        icon: <SiFirebase className="text-yellow-400 text-5xl" />,
      },
      { name: "Git", icon: <FaGitAlt className="text-red-500 text-5xl" /> },
      { name: "GitHub", icon: <FaGithub className="text-black text-5xl" /> },
      { name: "Vite", icon: <SiVite className="text-purple-500 text-5xl" /> },
      { name: "Vercel", icon: <SiVercel className="text-gray-500 text-5xl" /> },
    ],
  };

  return (
    <section className="bg-base-100 py-12 px-4 md:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl font-bold text-primary mb-6"
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Skills
        </motion.h2>

        <div className="space-y-12">
          {Object.entries(skillsData).map(([category, skills]) => {
            const direction = category === "Backend" ? -1 : 1;
            const repeatedSkills = Array(15).fill(skills).flat();

            const scrollDuration = category === "Backend" ? 50 : 30;

            return (
              <div key={category} className="relative overflow-hidden">
                <h3 className="text-xl font-semibold text-primary mb-6 text-center">
                  {category}
                </h3>
                <div className="flex overflow-hidden whitespace-nowrap">
                  <motion.div
                    className="flex"
                    animate={{ x: direction > 0 ? -2000 : 2000 }}
                    transition={{
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: scrollDuration,
                      ease: "linear",
                    }}
                  >
                    {repeatedSkills.map((skill, idx) => (
                      <div
                        key={idx}
                        className="inline-flex flex-col items-center mx-4"
                      >
                        <motion.div
                          className="flex justify-center items-center w-24 h-24 rounded-lg bg-white cursor-pointer border-2 border-slate-300"
                          whileHover={{
                            y: 2,
                            scale: 1.05,
                            boxShadow: "0px 0px 25px rgba(59,130,246,0.8)",
                            backgroundColor: "rgba(59,130,246,0.1)",
                          }}
                        >
                          {skill.icon}
                        </motion.div>
                        <span className="text-sm text-center mt-3">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
