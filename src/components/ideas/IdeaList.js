import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { IdeaCard } from './IdeaCard';
import { getAllIdeas, deleteIdea } from '../../modules/IdeaManager';
import { getProjectById } from "../../modules/ProjectManager";
import "./Idea.css";

export const IdeaList = () => {
    // The initial state is an empty array
    const [ideas, setIdeas] = useState([]);

    const {projectId} = useParams();
    const navigate = useNavigate();

    const getIdeas = () => {
        // After the data comes back from the API, we
        //  use the setIdeas function to update state
        return getAllIdeas().then(ideasFromAPI => {
            setIdeas(ideasFromAPI)
        });
    };

    // got the ideas from the API on the component's first render
    useEffect(() => {
        getIdeas();
    }, []);

    const handleDeleteIdea = id => {
        deleteIdea(id)
        .then(() => getAllIdeas().then(setIdeas));
    };

    // Finally we use .map() to "loop over" the ideas array to show a list of idea cards
    return (
        < >
        <section className="section-content">
        <Link to={`/projects/${projectId}/create`}>
            <button type="button"
         className="btn" >Add</button>
          </Link>
    </section>
         <div className="container-cards">
          {ideas.map(idea => <IdeaCard
            key={idea.id}
            idea={idea}
            handleDeleteIdea={handleDeleteIdea} 
        />)}
        </div>
    </>
    );

};

