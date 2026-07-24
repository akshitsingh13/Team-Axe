import "./Projects.css";
import ProjectCard from "./ProjectCard";
import projects from "./projectData";

const Projects = () => {
  return (
    <div id="projects" className="section-03">
      <div className="section-03-header">
        <div className="section-03-title">02 - Our Work</div>
        <div className="projects-header">OUR PROJECTS</div>
      </div>
      <section className="projects-section">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </section>
    </div>
  );
};

export default Projects;
