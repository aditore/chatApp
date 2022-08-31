import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { createChat, getMe } from "../../utils/API";
import Auth from "../../utils/auth";

function Join({ socket, id }) {

  const [userData, setUserData] = useState({});
  const [room, setRoom] = useState("");
  const [chat, addChat] = useState({});
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
        
        setUserData(user);
      } catch (err) {
        console.error(err);
      }
    };

    getUserData();
  }, [userDataLength]);
  
  
  
  const joinRoom = async () => {
    if (userData !== {} && room !== "") {
      try {
        
        const response = await createChat(chat);

        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        
        socket.emit("join_room", room);
      } catch (err) {
        console.log(err);
      }
    }
  }

  return (
    <div className="joinDiv">
      <h3 className="joinTitle">Join Chat</h3>
      <h2 className='joinTitle'>{userData.username}</h2>
      <input
        className="joinInput" 
        type="text" 
        placeholder="title"
        name="title"
        value={room}
        onChange={(event) => {
          setRoom(event.target.value);
          addChat({ title: `${event.target.value}`, user_id: `${userData.id}` });
        }} />
      <button className="funButtonDiv" onClick={joinRoom}>
        <Link className="linkToChat" to={`/chat/${room}`} state={{ username: userData.username }}>JOIN</Link>
      </button>
    </div>
  );
}

export default Join;