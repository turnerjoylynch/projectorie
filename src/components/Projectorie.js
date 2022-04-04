import React, {useState} from "react"
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "../ApplicationViews"
import { Footer } from "./nav/Footer"
import "./Projectorie.css"

export const Projectorie = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem("projectorie_user") !== null)

    const setAuthUser = (user) => {
        sessionStorage.setItem("projectorie_user", JSON.stringify(user))
        setIsAuthenticated(sessionStorage.getItem("projectorie_user") !== null)
    }

    const clearUser = () => {
        sessionStorage.clear();
        setIsAuthenticated(sessionStorage.getItem("projectorie_user") !== null)
      }

    return (
        <>
            <NavBar clearUser={clearUser} isAuthenticated={isAuthenticated}/>
            <ApplicationViews setAuthUser={setAuthUser} isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
            <Footer clearUser={clearUser} isAuthenticated={isAuthenticated}/>
        </>
    )
}