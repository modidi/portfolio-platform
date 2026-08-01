import { useState } from "react";

function ProjectForm({addProject}) {

    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    const[image,setImage] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        const newProject = {
            title: title.trim(),
            description: description.trim(),
            image: image.trim(),
        };

        addProject(newProject);

        setTitle("");
        setDescription("");
        setImage("");
    };

    return (
      <section>
        <form className="project-form" onSubmit={handleSubmit}>
          <h2>Add a New Project</h2>

          <div className="project-form-fields">

            <label htmlFor="title">Title</label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              placeholder="Project title"
              required
            />
            
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              placeholder="Project description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              required
            />

            <label htmlFor="image">Image</label>
            <input
              id="image"
              type="url"
              placeholder="Image URL (optional)"
              value={image}
              onChange={(event) => setImage(event.target.value)}
            />
          </div>

          <button type="submit" className="project-form-submit">Add Project</button>
        </form>
      </section>
    );
}

export default ProjectForm;