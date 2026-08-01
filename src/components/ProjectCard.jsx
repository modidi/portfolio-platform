function ProjectCard({ project }) {
    return (
      <article className="project-card">
        <img
          src={project.image || "https://via.placeholder.com/300"}
          alt={project.title}
        />

        <div className="project-info">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
        
      </article>
    );
}

export default ProjectCard;