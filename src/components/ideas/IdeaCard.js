import React from "react"
import { Link } from 'react-router-dom';
import "./Idea.css"
import "../../modules/IdeaManager"


export const IdeaCard = ({ idea, handleDeleteIdea}) => {
    return (
      <div className="card">
        <div className="card-content">
          <h3>Name: <span className="content-ideaname">
            {idea.ideaName}
          </span></h3>
          <p>Description: {idea.ideaDescription}</p>
          <Link to={`/ideas/${idea.id}`}>
            <button>Details</button>
          </Link>
          <Link to={`/ideas/${idea.id}/edit`}>
            <button>Edit</button>
          </Link>
          <button type="button" onClick={() => handleDeleteIdea(idea.id)}>Delete</button>
        </div>
      </div>
    );
  }