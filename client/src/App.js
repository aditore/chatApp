import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import {
  Join,
} from "./components/socket";
import {
  Startup
} from "./pages";


function App() {
  return (
    <Router>
      <>
        <main>
        <Routes>
          <Route index element={<Startup />} />
          <Route path="join" element={<Join />} />
        </Routes>
        </main>
      </>
    </Router>
  )
}

export default App;
