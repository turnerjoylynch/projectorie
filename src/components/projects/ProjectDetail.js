import React, { useState, useEffect } from "react";
import {useParams, useNavigate} from "react-router-dom"
import { getProjectById, deleteProject } from "../../modules/ProjectManager";
import "./ProjectDetail.css";

export const ProjectDetail = () => {
  const [project, setProject] = useState({ projectName: "", projectDescription: "" });
  const [isLoading, setIsLoading] = useState(true);

  const {projectId} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("useEffect", projectId)
    getProjectById(projectId)
      .then(project => {
        setProject(project);
        setIsLoading(false);
      });
  }, [projectId]);

  const handleDelete = () => {
    setIsLoading(true);
    deleteProject(projectId).then(() =>
      navigate("/projects")
    );
  };

  return (
    <section className="project">
      <h3 className="project__name">{project.projectName}</h3>
      <div className="project__description">{project.projectDescription}</div>
      <div className="project__owner">User: {project.user?.name}</div>
      <button type="button" disabled={isLoading} onClick={handleDelete}>
          Delete
        </button>
    </section>
  );
};

