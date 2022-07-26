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
    <div className="App">
      <h3>Join Chat</h3>
      <input 
        type="text" 
        placeholder="username" 
        onChange={(event) => {
          setUsername(event.target.value);
        }}/>
      <input 
        type="text" 
        placeholder="roomname"
        onChange={(event) => {
          setRoom(event.target.value);
        }} />
      <button onClick={joinRoom}>
        <Link to={`/chat/${room}`} state={{ username: username }}>JOIN</Link>
      </button>
    </div>
  );
}

export default Join;