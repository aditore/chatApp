import { useState } from 'react';
import { Link } from "react-router-dom";


function Join({ socket }) {
  
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
    }
  }

  return (
    <div className="joinDiv">
      <h3 className="joinTitle">Join Chat</h3>
      <input
        className="joinInput" 
        type="text" 
        placeholder="username" 
        onChange={(event) => {
          setUsername(event.target.value);
        }}/>
      <input
        className="joinInput" 
        type="text" 
        placeholder="roomname"
        onChange={(event) => {
          setRoom(event.target.value);
        }} />
      <button className="funButtonDiv" onClick={joinRoom}>
        <Link className="linkToChat" to={`/chat/${room}`} state={{ username: username }}>JOIN</Link>
      </button>
    </div>
  );
}

export default Join;