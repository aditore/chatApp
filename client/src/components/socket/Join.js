import io from "socket.io-client";
import { useState } from 'react';

const socket = io.connect("http://localhost:3001");

function Join() {

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
      <button onClick={joinRoom}>Join</button>
    </div>
  );
}

export default Join;