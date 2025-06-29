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
} from "react-icons/si";

const skillsData = {
  Frontend: [
    { name: "HTML", level: 95, icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", level: 90, icon: <FaCss3Alt className="text-blue-500" /> },
    {
      name: "Tailwind CSS",
      level: 90,
      icon: <SiTailwindcss className="text-cyan-400" />,
    },
    {
      name: "JavaScript",
      level: 85,
      icon: <FaJs className="text-yellow-400" />,
    },
    { name: "React", level: 85, icon: <FaReact className="text-sky-400" /> },
  ],
  Backend: [
    {
      name: "Node.js",
      level: 80,
      icon: <FaNodeJs className="text-green-600" />,
    },
    {
      name: "Express.js",
      level: 80,
      icon: <SiExpress className="text-gray-600" />,
    },
    {
      name: "MongoDB",
      level: 75,
      icon: <SiMongodb className="text-green-500" />,
    },
  ],
  Tools: [
    {
      name: "Firebase",
      level: 85,
      icon: <SiFirebase className="text-yellow-400" />,
    },
    { name: "Git", level: 80, icon: <FaGitAlt className="text-red-500" /> },
    { name: "GitHub", level: 80, icon: <FaGithub className="text-black" /> },
    { name: "Vite", level: 85, icon: <SiVite className="text-purple-500" /> },
  ],
};

const SkillBar = ({ name, level, icon }) => (
  <div className="mb-5">
    <div className="flex items-center justify-between mb-1">
      <div className="flex items-center gap-2 text-base-content font-medium">
        <span className="text-xl">{icon}</span>
        <span>{name}</span>
      </div>
      <span className="text-sm">{level}%</span>
    </div>
    <progress
      className="progress progress-primary w-full"
      value={level}
      max="100"
    ></progress>
  </div>
);

const Skills = () => {
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

        <motion.p
          className="text-base-content text-lg mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          A glance at the technologies I use in my development stack.
        </motion.p>

        {/* Skills Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 text-left">
          {Object.entries(skillsData).map(([category, skills], index) => (
            <motion.div
              key={category}
              className="bg-base-200 p-6 rounded-lg shadow"
              initial={{ opacity: 0, y: 90 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 + index * 0.2 }}
            >
              <h3 className="text-xl font-semibold text-primary mb-4">
                {category}
              </h3>
              {skills.map((skill, idx) => (
                <SkillBar key={idx} {...skill} />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
