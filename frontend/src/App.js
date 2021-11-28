import React, { useState, useRef } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UploadFile from "./Components/UploadFile";
import Header from "./Components/Header";
import ViewCandidates from "./Components/ViewCandidates";
function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<UploadFile />} />
          <Route path="/view" element={<ViewCandidates />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
