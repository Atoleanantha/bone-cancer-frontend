// App.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import Predict from "./components/Predict";
import Button from 'react-bootstrap/Button';
import About from "./components/About";

// import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const isLoggedIn = localStorage.getItem("isLogin") === "true";

  return (
    <div className="w-100 bg-dark  vh-100">
      
      <NavBar />

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/predict" element={ <Predict />} />
          <Route path="/about" element={<About />} />
        </Routes>
    </div>

  );
}

export default App
