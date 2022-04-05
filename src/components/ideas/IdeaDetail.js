import React, { useState, useEffect } from "react";
import {useParams, useNavigate} from "react-router-dom"
import { getIdeaById, deleteIdea } from "../../modules/IdeaManager";
import "./Idea.css";

export const IdeaDetail = () => {
  const [idea, setIdea] = useState({
    ideaName: "",
    ideaUrl: "",
    ideaQuantity: "",
    ideaPrice: "",
    ideaDescription: "",
    projectId: ""
});
  const [isLoading, setIsLoading] = useState(true);

  const {ideaId} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    //getIdeaById(id) from IdeaManager and hang on to the data; put it into state
    console.log("useEffect", ideaId)
    getIdeaById(ideaId)
      .then(idea => {
        setIdea(idea);
        setIsLoading(false);
      });
  }, [ideaId]);

  const handleDelete = () => {
    //invoke the delete function in IdeaManager and re-direct to the idea list.
    setIsLoading(true);
    deleteIdea(ideaId).then(() =>
      navigate("/:projectId")
    );
  };

  return (
    <section className="idea">
      <h3 className="idea__name">{idea.name}</h3>
      <div className="idea__URL">{idea.ideaUrl}</div>
      <div className="idea__quantity">{idea.ideaQuantity}</div>
      <div className="idea__price">{idea.ideaPrice}</div>
      <div className="idea__description">{idea.ideaDescription}</div>
      {/* What's up with the question mark???? See below.*/}
      <div className="idea__owner">Project: {idea.project?.name}</div>
      <button type="button" disabled={isLoading} onClick={handleDelete}>
          Delete
        </button>
    </section>
  );
};
