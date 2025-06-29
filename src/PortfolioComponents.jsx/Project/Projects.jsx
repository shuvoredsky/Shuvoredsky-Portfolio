import ProjectCard from "./ProjectCard";

const Projects = () => (
  <section id="project" className="py-12 px-4 md:px-10 lg:px-20 bg-base-200">
    <h2 className="text-3xl font-bold text-center text-primary mb-10">
      Featured Projects
    </h2>
    <ProjectCard />
    {/* Add more <ProjectCard /> if needed */}
  </section>
);
export default Projects;
