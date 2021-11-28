import React, { useState, useRef } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UploadFile from "./Components/UploadFile";
import Navbar from "./Components/Navbar";
import ViewCandidates from "./Components/ViewCandidates";
import Home from "./Components/Home";
function App() {
  return (
    <>
      <Router>
      <Navbar />

        <Routes>
        <Route exact path="/" key="home" element={<Home />} />
          
          <Route exact path="/upload" key="upload" element={<UploadFile />} />
          <Route exact path="/view" key="view" element={<ViewCandidates />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
