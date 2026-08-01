import { useState } from "react";
import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import SearchBar from "./components/SearchBar";
import ProjectList from "./components/ProjectList";

function App() {
    const [projects, setProjects] = useState([
      {
        id: 1,
        title: "E-Commerce Store",
        description: "An online shopping platform built with React.",
        image: "https://via.placeholder.com/300",
      },

      {
        id: 2,
        title: "Task Manager",
        description: "A productivity app for organizing daily tasks.",
        image: "https://via.placeholder.com/300",
      },

      {
        id: 3,
        title: "Recipe Finder",
        description: "A web application for searching recipes by ingredient or meal name.",
        image: "https://via.placeholder.com/300",
      },
    ]);

    const [searchTerm, setSearchTerm] = useState("");

    const addProject = (newProject) => {
        setProjects([
            ...projects,
            {
                ...newProject,
                id: projects.length + 1,
            },
        ]);
    };

    return (
        <>
        <Header />
        <ProjectForm addProject={addProject} />
        <SearchBar 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
         />
        <ProjectList 
        projects={projects}
        searchTerm={searchTerm}
        />
        </>
    );
}

export default App;