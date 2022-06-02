import Navbar from "../src/Components/NavBar/NavBar";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />

            <Route path="/register" element={<Register />} />

            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
      </Router>
    </React.Fragment>
  );
}

export default App;
