import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { addProject } from '../../modules/ProjectManager';
import { getAllProjects } from '../../modules/ProjectManager';
import './Idea.css'

export const IdeaForm = () => {
	// State will contain both idea data as well as an isLoading flag.
	// Define the initial state of the form inputs with useState()

	const [idea, setIdea] = useState({
		ideaName: "",
		ideaUrl: "",
		ideaQuantity: "",
		ideaPrice: "",
        ideaDescription: "",
        projectId: ""
	});

	const [isLoading, setIsLoading] = useState(false);

	// you will need the the `getAll` in the LocationsManager and CustomersManager to complete this section

	const [projects, setProjects] = useState([]);

	const navigate = useNavigate();


	const handleControlledInputChange = (event) => {
		const newIdea = { ...idea }
		let selectedVal = event.target.value
		if (event.target.id.includes("Id")) {
			selectedVal = parseInt(selectedVal)
		}
		newIdea[event.target.id] = selectedVal

		setIdea(newIdea)
	}


    useEffect(() => {
    getAllProjects().then(projects => { 
        setProjects(projects)
        } )
	}, []);


	const handleClickSaveIdea = (event) => {
		event.preventDefault() //Prevents the browser from submitting the form

		const projectId = idea.projectId

		if (projectId === 0) {
			window.alert("Please select a project for this idea")
		} else {
			addProject({})
				.then(() => navigate("/projects"))
		}
	}

	return (
		<form className="ideaForm">
			<h2 className="ideaForm__title">New Idea</h2>
			<fieldset>
				<div className="form-group">
					<label htmlFor="name">Idea name:</label>
					<input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" 
                    placeholder="Idea name" value={idea.ideaName} />
				</div>
			</fieldset>
			<fieldset>
				<div className="form-group">
					<label htmlFor="url">Idea URL:</label>
					<input type="text" id="url" onChange={handleControlledInputChange} required autoFocus className="form-control" 
                    placeholder="Idea URL" value={idea.ideaUrl} />
				</div>
			</fieldset>
            <fieldset>
				<div className="form-group">
					<label htmlFor="url">Idea Quantity:</label>
					<input type="text" id="quantity" onChange={handleControlledInputChange} required autoFocus className="form-control" 
                    placeholder="Idea Quantity" value={idea.ideaQuantity} />
				</div>
			</fieldset>
            <fieldset>
				<div className="form-group">
					<label htmlFor="url">Idea Price:</label>
					<input type="text" id="url" onChange={handleControlledInputChange} required autoFocus className="form-control" 
                    placeholder="Idea Price" value={idea.ideaPrice} />
				</div>
			</fieldset>
            <fieldset>
				<div className="form-group">
					<label htmlFor="url">Idea Description:</label>
					<input type="text" id="url" onChange={handleControlledInputChange} required autoFocus className="form-control" 
                    placeholder="Idea Description" value={idea.ideaDescription} />
				</div>
			</fieldset>
			<fieldset>
				<div className="form-group">
					<label htmlFor="projectId">Project: </label>
					<select value={idea.projectId} name="project" id="projectId" onChange={handleControlledInputChange} className="form-control" >
						<option value="0">Select a project</option>
						{projects.map(c => (
							<option key={c.id} value={c.id}>
								{c.name}
							</option>
						))}
					</select>
				</div>
			</fieldset>
			<button className="btn btn-primary"
				onClick={handleClickSaveIdea}>
				Save Idea
          </button>
		</form>
	)
};
