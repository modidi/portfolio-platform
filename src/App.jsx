import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import SearchBar from "./components/SearchBar";
import ProjectList from "./components/ProjectList";
import ecommerce from "./assets/ecommerce.jpg";
import task from "./assets/task.jpg";
import recipeFinder from "./assets/recipe.jpg";

function App() {
    const [projects, setProjects] = useState([
      {
        id: 1,
        title: "E-Commerce Store",
        description: "An online shopping platform built with React.",
        image: ecommerce,
      },

      {
        id: 2,
        title: "Task Manager",
        description: "A productivity app for organizing daily tasks.",
        image: task,
      },

      {
        id: 3,
        title: "Recipe Finder",
        description: "A web application for searching recipes by ingredient or meal name.",
        image: recipeFinder,
      },
    ]);

    const [searchTerm, setSearchTerm] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [selectedImage, setSelectedImage] = useState(null);

    const addProject = (newProject) => {
        setProjects((prevProjects) => [
            ...prevProjects,
            {
                ...newProject,
                id: prevProjects.length + 1,
            },
        ]);

        setSuccessMessage(" ✅Project added successfully!");

        setTimeout(() => {
            setSuccessMessage("");
        }, 3000);
    };

    return (
      <div className="app">
        <Header />

        <div className="content">
          {selectedImage && (
            <div className="image-modal" onClick={() => setSelectedImage(null)}>
              <img
                src={selectedImage}
                alt="Selected Project"
                className="modal-image"
                onClick={(event) => event.stopPropagation()}
              />
            </div>
          )}

          <ProjectForm addProject={addProject} />

          {successMessage && <p className="success-message">{successMessage}</p>}

          <div className="projects-container">

            <div className="search-bar">

              <h2>Search Projects</h2>

              <SearchBar
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
              />
            </div>

            <ProjectList
              projects={projects}
              searchTerm={searchTerm}
              setSelectedImage={setSelectedImage}
            />
          </div>
        </div>
      </div>
    );
}

export default App;