import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProjectCard } from './ProjectCard';
import { getAllProjects, deleteProject } from '../../modules/ProjectManager';
import "./Project.css";

export const ProjectList = () => {
    const [projects, setProjects] = useState([]);

    const navigate = useNavigate();

    const getProjects = () => {
        return getAllProjects().then(projectsFromAPI => {
            setProjects(projectsFromAPI)
        });
    };

    useEffect(() => {
        getProjects();
    }, []);

    const handleDeleteProject = id => {
        deleteProject(id)
        .then(() => getAllProjects().then(setProjects));
    };

    return (
        < >
        <section className="section-content">
        <button type="button"
         className="btn"
         onClick={() => {navigate("/Projects/create")}}>
             Post Project
        </button>
    </section>
         <div className="container-cards">
          {projects.map(project => <ProjectCard
            key={project.id}
            project={project}
            handleDeleteProject={handleDeleteProject} 
        />)}
        </div>
    </>
    );

};