import React, { useState, useEffect } from "react"
import {useNavigate, useParams} from "react-router-dom";
import {getProjectById, updateProject} from "../../modules/ProjectManager"
import "./Project.css"

export const ProjectEditForm = () => {
  const [project, setProject] = useState({ projectName: "", projectDescription: "" });
  const [isLoading, setIsLoading] = useState(false);

  const {projectId} = useParams();
  const navigate = useNavigate();

  const handleFieldChange = evt => {
    const stateToChange = { ...project };
    stateToChange[evt.target.id] = evt.target.value;
    setProject(stateToChange);
  };

  const updateExistingProject = evt => {
    evt.preventDefault()
    setIsLoading(true);

    // This is an edit, so we need the id
    const editedProject = {
      id: projectId,
      name: project.projectName,
      description: project.projectDescription
    };

  updateProject(editedProject)
    .then(() => navigate("/projects")
    )
  }

  useEffect(() => {
    getProjectById(project)
      .then(project => {
        setProject(project);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="projectName"
              value={project.projectName}
            />
            <label htmlFor="name">Project name</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="projectDescription"
              value={project.projectDescription}
            />
            <label htmlFor="description">Description</label>
          </div>
          <div className="alignRight">
            <button
              type="button" disabled={isLoading}
              onClick={updateExistingProject}
              className="btn btn-primary"
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
}