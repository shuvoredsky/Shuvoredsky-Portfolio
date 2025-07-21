import React, { useEffect, useState } from "react";
import { FaExternalLinkAlt, FaGithub, FaReact, FaNodeJs } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  SiMongodb,
  SiFirebase,
  SiTailwindcss,
  SiExpress,
  SiJsonwebtokens,
} from "react-icons/si";
import whereisit from "../../../src/assets/whereisit.png";
import garden from "../../../src/assets/garden.png";
import event from "../../../src/assets/event.png";
import medicamp from "../../../src/assets/Medicamp.png";

const techIcons = {
  React: <FaReact className="text-sky-500" />,
  "Node.js": <FaNodeJs className="text-green-600" />,
  "Express.js": <SiExpress className="text-gray-600" />,
  MongoDB: <SiMongodb className="text-green-500" />,
  Firebase: <SiFirebase className="text-yellow-400" />,
  JWT: <SiJsonwebtokens className="text-purple-500" />,
  "Tailwind CSS": <SiTailwindcss className="text-cyan-400" />,
  Tailwind: <SiTailwindcss className="text-cyan-400" />,
};

const getImageByTitle = (title) => {
  switch (title) {
    case "WhereIsIt":
      return whereisit;
    case "Garden Community":
      return garden;
    case "EventExplorer":
      return event;
    case "MediCamp":
      return medicamp;
    default:
      return "";
  }
};

const ProjectCard = () => {
  const [projects, setProjects] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => {
        const updatedProjects = data.map((project) => ({
          ...project,
          image: getImageByTitle(project.title),
        }));
        setProjects(updatedProjects);
      })
      .catch((err) => console.error("Error loading projects:", err));
  }, []);

  const getAnimationVariant = (index) => {
    if (isMobile) {
      return {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
      };
    }
    const variants = [
      { initial: { x: -100, opacity: 0 }, animate: { x: 0, opacity: 1 } },
      { initial: { x: 100, opacity: 0 }, animate: { x: 0, opacity: 1 } },
      { initial: { x: -100, opacity: 0 }, animate: { x: 0, opacity: 1 } },
      { initial: { x: 100, opacity: 0 }, animate: { x: 0, opacity: 1 } },
    ];
    return variants[index % 4] || variants[0];
  };

  return (
    <section className="py-12 px-4 sm:px-6 md:px-10 lg:px-20 bg-base-100 overflow-x-hidden">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          className="bg-base-200 p-4 sm:p-6 rounded-lg shadow-md mb-8 sm:mb-10"
          initial={getAnimationVariant(index).initial}
          whileInView={getAnimationVariant(index).animate}
          viewport={{ once: true, margin: isMobile ? "-50px" : "-100px" }}
          transition={{
            duration: 0.5,
            delay: isMobile ? 0 : index * 0.1,
            ease: "easeOut",
          }}
        >
          <div
            className={`flex flex-col ${
              isMobile ? "" : "lg:flex-row"
            } items-center gap-4 sm:gap-6`}
          >
            {/* Image */}
            <div className={`w-full ${isMobile ? "" : "lg:w-1/2"}`}>
              <motion.img
                src={project.image}
                alt={project.title}
                className="rounded-lg object-cover w-full shadow"
                whileHover={isMobile ? {} : { scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </div>

            {/* Content */}
            <div className={`w-full ${isMobile ? "" : "lg:w-1/2"}`}>
              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-2">
                {project.title}
              </h3>
              <p className="text-sm sm:text-base text-base-content mb-3 sm:mb-4">
                {project.description}
              </p>

              <ul className="list-disc list-inside mb-3 sm:mb-4 text-xs sm:text-sm text-base-content">
                {project.features.map((feature, i) => (
                  <li key={i} className="mb-1">
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-1 badge badge-outline bg-slate-500 text-white text-xs sm:text-sm"
                  >
                    {techIcons[tech] || null}
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-3">
                <motion.a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm btn-primary text-xs sm:text-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Live Link <FaExternalLinkAlt className="ml-1" />
                </motion.a>
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm btn-outline text-xs sm:text-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  GitHub <FaGithub className="ml-1" />
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default ProjectCard;
