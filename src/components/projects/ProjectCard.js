import React from "react"
import { Link } from 'react-router-dom';
import "./Project.css"
import "../../modules/ProjectManager"


export const ProjectCard = ({ project, handleDeleteProject}) => {
    return (
      <div className="card">
        <div className="card-content">
          <h3> <span className="content-projectname">
            {project.projectName}
          </span></h3>
          <p>{project.projectDescription}</p>
          {/* <p>By: {project.userId?.name}</p> */}
          <Link to={`/projects/${project.id}`}>
            <button>Details</button>
          </Link>
          <Link to={`/projects/${project.id}/edit`}>
            <button>Edit</button>
          </Link>
          <button type="button" onClick={() => handleDeleteProject(project.id)}>Delete</button>
        </div>
      </div>
    );
  }