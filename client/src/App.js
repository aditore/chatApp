import React from 'react';
import './App.css';
import {
  Join
} from "./components/socket";
import { BrowserRouter as Router, Routes, Route }
  from 'react-router-dom';
import Signup from './components/pages/signup';


function App() {
  return (
    <>
      
      <Router>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path={"/join"} element={<Join />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
