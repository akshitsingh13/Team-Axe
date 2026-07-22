import "./ProjectCard.css";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      {/* <div className="project-image">
        <img src={project.imgSrc} alt={project.title} />
      </div> */}

      <div className="project-content">
        <h2>{project.title}</h2>

        <p>{project.shortDescription}</p>

        <span className="project-tech">{project.tech}</span>

        <div className="project-buttons">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="github-btn"
          >
            GITHUB
          </a>

          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="demo-btn"
          >
            LIVE DEMO
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
