import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div>
            <li>
                <Link to="/home">JOIN</Link>
            </li>
            <li>
                <Link to="/">LOGOUT</Link>
            </li>
        </div>
    )
}

export default Navbar;