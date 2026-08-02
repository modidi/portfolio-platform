import placeholder from "../assets/placeholder.jpg";

function ProjectCard({ project, setSelectedImage }) {
    return (
      <article className="project-card">
        <img
          src={project.image || placeholder}
          alt={project.title}
          onClick={() => setSelectedImage(project.image || placeholder)}
          // Falls back to placeholder if the provided image URL fails to load
          onError={(event) => {
            event.target.src = placeholder;
          }}
        />

        <div className="project-info">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>

        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </article>
    );
}

export default ProjectCard;