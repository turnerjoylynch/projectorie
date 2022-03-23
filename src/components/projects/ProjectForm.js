import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { addProject } from '../../modules/ProjectManager';
import './Project.css'

export const ProjectForm = () => {
	// State will contain both project data as well as an isLoading flag.
	// Define the initial state of the form inputs with useState()

	const [project, setProject] = useState({
        id: [],
        userId: [],
        projectName: "",
        projectDescription: "",
        timestamp: []
	});

	const [isLoading, setIsLoading] = useState(false);

	const navigate = useNavigate();

	const handleControlledInputChange = (event) => {
		const newProject = { ...project }
		let selectedVal = event.target.value
		if (event.target.id.includes("Id")) {
			selectedVal = parseInt(selectedVal)
		}
		newProject[event.target.id] = selectedVal
		setProject(newProject)
	}


	const handleClickSaveProject = (event) => {
		event.preventDefault() 
			addProject(project)
				.then(() => navigate("/projects"))
	}

	return (
		<form className="projectForm">
			<h2 className="projectForm__name">New Project</h2>
			<fieldset>
				<div className="form-group">
					<label htmlFor="name">Project name:</label>
					<input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Project name" value={project.projectName} />
				</div>
			</fieldset>
			<fieldset>
				<div className="form-group">
					<label htmlFor="description">Project Description:</label>
					<input type="text" id="description" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Project description" value={project.projectDescription} />
				</div>
			</fieldset>
		<button className="btn btn-primary"
				onClick={handleClickSaveProject}>
				Save Project
          </button>
		</form>
	)
};
