import placeholder from "../assets/placeholder.jpg";

function ProjectCard({ project, setSelectedImage }) {
    return (
      <article className="project-card">
        <img
          src={project.image || placeholder}
          alt={project.title}
          onClick={() => setSelectedImage(project.image || placeholder)}
          onError={(event) => {
            event.target.src = placeholder;
          }}
        />

        <div className="project-info">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>

      </article>
    );
}

export default ProjectCard;