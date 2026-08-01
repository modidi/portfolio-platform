import { useState } from "react";

function ProjectForm({addProject}) {

    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    const[image,setImage] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        const newProject = {
            title,
            description,
            image,
        };

        addProject(newProject);

        setTitle("");
        setDescription("");
        setImage("");
    };

    return (
        <section>
            <h2>Add New Project</h2>

            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                placeholder="Project Title"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                />

                <input
                type="text"
                placeholder="Project Description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                />

                <input
                type="text"
                placeholder="Image URL"
                value={image}
                onChange={(event) => setImage(event.target.value)}
                />

                <button type="submit">
                    Add Project
                </button>
            </form>
        </section>
    );
}

export default ProjectForm;