import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Login } from "./components/auth/Login";
import { Register } from "./components/auth/Register";
import { Home } from "./Home.js";
import { ProjectList } from "./components/projects/ProjectList";
import { ProjectDetail } from "./components/projects/ProjectDetail";
import { ProjectForm } from "./components/projects/ProjectForm";
import { ProjectEditForm } from "./components/projects/ProjectEditForm";

// end imports

export const ApplicationViews = ({ isAuthenticated, setIsAuthenticated }) => {
    
    const PrivateRoute = ({ children }) => {
        return isAuthenticated ? children : <Navigate to="/login" />;
    }
  
    const setAuthUser = (user) => {
      sessionStorage.setItem("projectorie_user", JSON.stringify(user))
      setIsAuthenticated(sessionStorage.getItem("projectorie_user") !== null)
    }
    
    return (
        <>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/login" element={<Login setAuthUser={setAuthUser} />} />
                <Route exact path="/register" element={<Register />} />
                // Projects Routes
                <Route exact path="/projects" element={ 
                    <PrivateRoute>
                        <ProjectList />
                    </PrivateRoute>} />
                <Route path="/projects/:projectId" element={
                    <PrivateRoute>
                        <ProjectDetail />
                    </PrivateRoute>} />
                <Route path="/projects/create" element={
                    <PrivateRoute>
                        <ProjectForm />
                    </PrivateRoute>} />
                <Route path="/projects/:projectId/edit" element={
                    <PrivateRoute>
                        <ProjectEditForm />
                    </PrivateRoute>} />
            </Routes>
        </>
    )
}


