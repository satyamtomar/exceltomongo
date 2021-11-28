import React, { useState, useRef } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UploadFile from "./Components/UploadFile";
import Navbar from "./Components/Navbar";
import ViewCandidates from "./Components/ViewCandidates";
import Home from "./Components/Home";
import LoadingBar from 'react-top-loading-bar'

function App() {
  const [progress,setProgress]=useState(0)
  
  return (
    <>
      <Router>
      <Navbar />
      <LoadingBar
        height={3}
       color='#ffffff'
        progress={progress}
      />
  
        <Routes>
        <Route exact path="/" key="home"  element={<Home setProgress={setProgress} />} />
          
          <Route exact path="/upload" key="upload" element={<UploadFile setProgress={setProgress} />} />
          <Route exact path="/view" key="view" element={<ViewCandidates setProgress={setProgress} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
