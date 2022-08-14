import React from "react";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";

function Navbar() {
    return (
        <div className="navbarContainer">
            <ul className="navbarList">
                <li className="navbarListItem">
                    <Link className="navbarLink" to="/home">HOME</Link>
                </li>
                <li className="navbarListItem">
                    <Link className="navbarLink" to="/joinchat">JOIN</Link>
                </li>
                <li className="navbarListItem">
                    <Link className="navbarLink" onClick={Auth.logout} to="/">LOGOUT</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;