import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Login } from './auth/Login';
import { Register } from './auth/Register';

// end imports

export const ApplicationViews = ({ isAuthenticated, setIsAuthenticated }) => {
    
    const PrivateRoute = ({ children }) => {
        return isAuthenticated ? children : <Navigate to="/login" />;
    }
  
    const setAuthUser = (user) => {
      sessionStorage.setItem("kennel_customer", JSON.stringify(user))
      setIsAuthenticated(sessionStorage.getItem("kennel_customer") !== null)
    }
    
    return (
        <>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/login" element={<Login setAuthUser={setAuthUser} />} />
                <Route exact path="/register" element={<Register />} />
                // Locations Routes
                <Route exact path="/locations" element={ 
                    <PrivateRoute>
                        <LocationList />
                    </PrivateRoute>} />
                <Route path="/locations/:locationId" element={
                    <PrivateRoute>
                        <LocationDetail />
                    </PrivateRoute>} />
                <Route path="/locations/create" element={
                    <PrivateRoute>
                        <LocationForm />
                    </PrivateRoute>} />

                // Animals Routes
                <Route exact path="/animals" element={
                    <PrivateRoute>
                        <AnimalList />
                    </PrivateRoute>
                } />
                <Route exact path="/animals/:animalId" element={
                    <PrivateRoute>
                        <AnimalDetail />
                    </PrivateRoute>
                    } />
                
                <Route path="/animals/:animalId/edit" element={
                    <PrivateRoute>
                        <AnimalEditForm />
                    </PrivateRoute>
                    } />
                <Route path="/animals/create" element={<AnimalForm />} />

                // Customer Routes
                <Route path="/customers" element={ 
                    <PrivateRoute>
                        <CustomerList />
                    </PrivateRoute>
                } />
                
                // Employee Routes
                <Route exact path="/employees" element={ 
                    <PrivateRoute>
                        <EmployeeList />
                    </PrivateRoute>
                } />

            </Routes>
        </>
    )
}


