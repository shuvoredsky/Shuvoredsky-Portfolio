import React, { useEffect, useState } from "react";
import { FaExternalLinkAlt, FaGithub, FaReact, FaNodeJs } from "react-icons/fa";
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

// A helper to match imported images based on project title
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

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => {
        // Replace image path with imported one based on title
        const updatedProjects = data.map((project) => ({
          ...project,
          image: getImageByTitle(project.title),
        }));
        setProjects(updatedProjects);
      })
      .catch((err) => console.error("Error loading projects:", err));
  }, []);

  return (
    <section className="py-12 px-4 md:px-10 lg:px-20 bg-base-100">
      {projects.map((project) => (
        <div
          key={project.id}
          className="bg-base-200 p-6 rounded-lg shadow-md mb-10"
        >
          <div className="flex flex-col lg:flex-row items-center gap-6">
            {/* Image */}
            <div className="w-full lg:w-1/2">
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg object-cover w-full shadow"
              />
            </div>

            {/* Content */}
            <div className="w-full lg:w-1/2">
              <h3 className="text-2xl font-bold text-primary mb-2">
                {project.title}
              </h3>
              <p className="text-base-content mb-4">{project.description}</p>

              <ul className="list-disc list-inside mb-4 text-sm text-base-content">
                {project.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>

              {/* Tech Stack with Icons */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-1 badge badge-outline bg-slate-500 text-white"
                  >
                    {techIcons[tech] || null}
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm btn-primary"
                >
                  Live Link <FaExternalLinkAlt className="ml-1" />
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm btn-outline"
                >
                  GitHub <FaGithub className="ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProjectCard;
