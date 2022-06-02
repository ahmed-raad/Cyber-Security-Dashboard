import React from "react";
import "./HomeMain.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Cyber Security Dashboard Website</h1>
      <p>
        If you want to see the dashboard and charts, please sign up or log in
        first{" "}
      </p>
      {/* Login and Sign Button */}
      <span>
        <NavLink
          onClick={() => {
            localStorage.setItem("page", "login");
            Location.reload();
          }}
          className="nav-link sign-up"
          to="/register"
        ></NavLink>
      </span>
      <span>
        <NavLink
          onClick={() => {
            localStorage.setItem("page", "login");
            Location.reload();
          }}
          className="nav-link login"
          to="/login"
        ></NavLink>
      </span>
      {/* ----------------- */}
    </div>
  );
};
export default Navbar;
