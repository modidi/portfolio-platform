import ProjectCard from "./ProjectCard";

function ProjectList({ projects, searchTerm, setSelectedImage }) {

  // Filter projects by title or tags based on the user's search input.
  const filteredProjects = projects.filter(
    (project) =>
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
  );

  if (filteredProjects.length === 0) {
    return (
      <section>
        <h2>Projects</h2>
        <p>No projects match your search</p>
      </section>
    );
  }

  return (
    <section className="project-section">
      <h2>Projects</h2>

      <div className="project-list">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            setSelectedImage={setSelectedImage}
          />
        ))}
      </div>
    </section>
  );
}

export default ProjectList;

