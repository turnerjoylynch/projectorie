const remoteURL = "http://localhost:8088"

export const getProjectById = (projectId) => {
  return fetch(`${remoteURL}/projects/${projectId}?_expand=projectName&_expand=projectDescription`)
  .then(res => res.json())
}

export const getAllProjects = () => {
  return fetch(`${remoteURL}/projects`)
  .then(res => res.json())
}

export const deleteProject = (id) => {
  return fetch(`${remoteURL}/projects/${id}`, {
    method: "DELETE"
  }).then(result => result.json())
}


export const addProject = (newProject) => {
  return fetch(`${remoteURL}/projects`, {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(newProject)
  }).then(response => response.json())
}

export const updateProject = (editedProject) => {
  return fetch(`${remoteURL}/projects/${editedProject.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(editedProject)
  }).then(data => data.json());
}