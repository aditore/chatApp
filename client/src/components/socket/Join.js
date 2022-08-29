import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { getMe } from "../../utils/API";
import Auth from "../../utils/auth";

function Join({ socket, id }) {

  console.log(socket);

  const [userData, setUserData] = useState("");
  const [room, setRoom] = useState("");
  //const [username, setUsername] = useState("");
  
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
        console.log(user.username);
        setUserData(`${user.username}`);
      } catch (err) {
        console.error(err);
      }
    };

    getUserData();
  }, [userDataLength]);

  console.log(userData);
  const joinRoom = () => {
    if (userData !== "" && room !== "") {
      console.log(socket);
      socket.emit("join_room", room);
    }
  }

  return (
    <div className="joinDiv">
      <h3 className="joinTitle">Join Chat</h3>
      <h2 className='joinTitle'>{userData}</h2>
      <input
        className="joinInput" 
        type="text" 
        placeholder="roomname"
        onChange={(event) => {
          setRoom(event.target.value);
        }} />
      <button className="funButtonDiv" onClick={joinRoom}>
        <Link className="linkToChat" to={`/chat/${room}`} state={{ username: userData }}>JOIN</Link>
      </button>
    </div>
  );
}

export default Join;