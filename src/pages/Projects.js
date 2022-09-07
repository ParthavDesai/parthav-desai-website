import React, { useState, useEffect } from "react";
import Project from "../components/Project";
export default function Projects() {
  const [projects, setProjects] = useState([]);
  const url = "https://api.github.com/users/parthavdesai/repos";
  const fetchProjects = async () => {
    try {
      const response = await fetch(url);
      const projects = await response.json();
      console.log(projects);
      setProjects(projects);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchProjects();
  }, []);
  return (
    <div className="project-container" id="project">
      <h1 className="projects-heading">Projects</h1>
      <div className="projectGrid">
        {projects.map((project) => {
          return (
            <Project
              key={project.id}
              name={project.name}
              url={project.html_url}
              description={project.description}
            />
          );
        })}
      </div>
    </div>
  );
}
