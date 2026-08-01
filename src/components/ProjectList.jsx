import ProjectCard from "./ProjectCard";

function ProjectList({ projects, searchTerm }) {
    const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if(filteredProjects.length === 0) {
        return (
          <section>
            <h2>Projects</h2>
            <p>No Projects match your search</p>
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
                    />
                ))}
            </div>
        </section>
    );
}

export default ProjectList;

