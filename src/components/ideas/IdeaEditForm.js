import React, { useState, useEffect } from "react"
import {useNavigate, useParams} from "react-router-dom";
import {getIdeaById, updateIdea} from "../../modules/IdeaManager"
import "./Idea.css"

export const IdeaEditForm = () => {
  const [idea, setIdea] = useState({ ideaName: "",
  ideaUrl: "",
  ideaQuantity: "",
  ideaPrice: "",
  ideaDescription: "",
  projectId: ""
});
  const [isLoading, setIsLoading] = useState(false);

  const {ideaId} = useParams();
  const navigate = useNavigate();

  const handleFieldChange = evt => {
    const stateToChange = { ...idea };
    stateToChange[evt.target.id] = evt.target.value;
    setIdea(stateToChange);
  };

  const updateExistingIdea = evt => {
    evt.preventDefault()
    setIsLoading(true);

    // This is an edit, so we need the id
    const editedIdea = {
      id: ideaId,
      ideaUrl: idea.ideaUrl,
      ideaQuantity: idea.ideaQuantity,
      ideaPrice: idea.ideaPrice,
      ideaDescription: idea.ideaDescription,
      projectId: idea.projectId
    };

    updateIdea(editedIdea)
    .then(() => navigate("/ideas")
    )
  }

  useEffect(() => {
    getIdeaById(ideaId)
      .then(idea => {
        setIdea(idea);
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
              id="ideaName"
              value={idea.ideaName}
            />
            <label htmlFor="title">Idea Title</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="ideaUrl"
              value={idea.ideaUrl}
            />
            <label htmlFor="url">Idea URL</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="ideaQuantity"
              value={idea.ideaQuantity}
            />
            <label htmlFor="quantity">Idea Quantity</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="ideaPrice"
              value={idea.ideaPrice}
            />
            <label htmlFor="price">Idea Price</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="ideaDescription"
              value={idea.ideaDescription}
            />
            <label htmlFor="description">Idea Description</label>

          </div>
          <div className="alignRight">
            <button
              type="button" disabled={isLoading}
              onClick={updateExistingIdea}
              className="btn btn-primary"
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
}