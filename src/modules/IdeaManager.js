const remoteURL = "http://localhost:8088"

export const getIdeaById = (ideaId) => {
  return fetch(`${remoteURL}/ideas/${ideaId}?_expand=projectId&_expand=ideaName&_expand=ideaDescription`)
  .then(res => res.json())
}

export const getAllIdeas = () => {
  return fetch(`${remoteURL}/ideas`)
  .then(res => res.json())
} 

export const deleteIdea = (ideaId) => {
    return fetch(`${remoteURL}/ideas/${ideaId}`, {
      method: "DELETE"
    }).then(result => result.json())
  }

export const addIdea = (newIdea) => {
    return fetch(`${remoteURL}/ideas`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newIdea)
    }).then(response => response.json())
}

export const updateIdea = (editedIdea) => {
    return fetch(`${remoteURL}/ideas/${editedIdea.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedIdea)
    }).then(data => data.json());
  }