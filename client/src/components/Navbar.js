import React from "react";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";

function Navbar() {
    return (
        <div>
            <li>
                <Link to="/home">JOIN</Link>
            </li>
            <li>
                <Link onClick={Auth.logout} to="/">LOGOUT</Link>
            </li>
        </div>
    )
}

export default Navbar;