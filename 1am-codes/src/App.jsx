App.jsx
import React from "react";
import Routes from "./Routes";
import Home from "./components/Home";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App