import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Footer.css"

export const Footer  = () => {
    // const history = useNavigate()

    // const handleLogout = () => {
    //     clearUser();
    //     history('/');
    // }
    return (
        <ul className="footer">
            <li className="footer__item">
                <Link className="footer__link" to="/"> Home </Link>
                </li>
            <li className="footer__item">
                    <Link className="footer__link" to="/register"> Register </Link>
                </li>
            <li className="footer__item">
                    <Link className="footer__link" to="/login">Login</Link>
                </li>
                <li className="footer__item">2022 Projectorie</li>
        </ul>
    );
};