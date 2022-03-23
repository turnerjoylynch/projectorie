import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { IdeaCard } from './IdeaCard';
import { getAllIdeas, deleteIdea } from '../../modules/IdeaManager';
import "./Idea.css";

export const IdeaList = () => {
    // The initial state is an empty array
    const [ideas, setIdeas] = useState([]);

    const navigate = useNavigate();

    const getIdeas = () => {
        // After the data comes back from the API, we
        //  use the setIdeas function to update state
        return getAllIdeas().then(ideasFromAPI => {
            setIdeas(ideasFromAPI)
        });
    };

    // got the animals from the API on the component's first render
    useEffect(() => {
        getIdeas();
    }, []);

    const handleDeleteIdea = id => {
        deleteIdea(id)
        .then(() => getAllIdeas().then(setIdeas));
    };

    // Finally we use .map() to "loop over" the animals array to show a list of idea cards
    return (
        < >
        <section className="section-content">
        <button type="button"
         className="btn"
         onClick={() => {navigate("/ideas/create")}}>
             Create Idea
        </button>
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

