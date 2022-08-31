import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getMe } from "../utils/API";
import Auth from "../utils/auth";

function Navbar({ id }) {
    const [userData, setUserData] = useState({});
  // use this to determine if `useEffect()` hook needs to run again
  const userDataLength = Object.keys(userData).length;

  useEffect(() => {
    const getUserData = async () => {
      try {

        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if (!token) {
          return false;
        }

        const response = await getMe(token, id);

        if (!response.ok) {
          throw new Error('something went wrong!');
        }

        const user = await response.json();
        
        setUserData(user);
      } catch (err) {
        console.error(err);
      }
    };

    getUserData();
  }, [userDataLength]);
    
    return (
        <div className="navbarContainer">
            <ul className="navbarList">
                <li className="navbarListItem">
                    <Link className="navbarLink" to={`/home/${userData.id}`}>HOME</Link>
                </li>
                <li className="navbarListItem">
                    <Link className="navbarLink" to={`/joinchat/${userData.id}`}>JOIN</Link>
                </li>
                <li className="navbarListItem">
                    <Link className="navbarLink" onClick={Auth.logout} to="/">LOGOUT</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;