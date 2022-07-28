import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import io from "socket.io-client";
import {
  Join,
  Chat
} from "./components/socket";
import {
  Startup, Signup
} from "./pages";

const socket = io.connect("http://localhost:3001");

function App() {
  return (
    <Router>
      <>
        <main>
        <Routes>
          <Route index element={<Signup />} />
          <Route path="startup" element={<Startup />} />
          <Route path="join" element={<Join socket={socket}/>} />
          <Route path="chat/:room" element={<Chat socket={socket}/>} />
        </Routes>
        </main>
      </>
    </Router>
  )
}

export default App;
