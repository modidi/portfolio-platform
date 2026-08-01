import ProjectCard from "./ProjectCard";

function ProjectList({projects, searchTerm}) {
    const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <section>
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

