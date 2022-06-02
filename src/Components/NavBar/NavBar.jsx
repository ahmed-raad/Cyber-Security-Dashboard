import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faChartBar,
  faSignOut,
  faSignIn,
} from "@fortawesome/free-solid-svg-icons";

const current = new Date();
const date = `${current.getDate()}-${
  current.getMonth() + 1
}-${current.getFullYear()}`;

const Navbar = () => {
  const history = useNavigate();

  console.log(window.location.pathname);
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item logo">Cyber Security Dashboard</li>
        <li className="buttons">
          <ul>
            <li>
              <NavLink
                onClick={() => {
                  localStorage.setItem("page", "home");
                  Location.reload();
                }}
                className="nav-link"
                to="/"
              >
                <FontAwesomeIcon icon={faHome} /> Home
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => {
                  localStorage.setItem("page", "dashboard");
                  Location.reload();
                }}
                className="nav-link"
                to="/dashboard"
              >
                <FontAwesomeIcon icon={faChartBar} /> Dashboard
              </NavLink>
            </li>
          </ul>
        </li>
        <li className="nav-item ">
          <span className="date">Date: {date}</span>
          Tunisia
        </li>
        {localStorage.getItem("page") == "dashboard" ? (
          <>
            <li className="nav-item cve">
              <table>
                <thead>
                  <tr>
                    <th>Number of CVEs</th>
                    <th>Base Score</th>
                    <th>Severity Level</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1,049,534</td>
                    <td>7.654010695</td>
                    <td>High</td>
                  </tr>
                </tbody>
              </table>
            </li>
          </>
        ) : (
          <></>
        )}
      </ul>
    </nav>
  );
};
export default Navbar;
