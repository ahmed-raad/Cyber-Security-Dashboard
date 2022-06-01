import React, { useEffect } from "react";
import "./NavBar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faChartBar,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";

const current = new Date();
const date = `${current.getDate()}-${
  current.getMonth() + 1
}-${current.getFullYear()}`;

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item logo">Cyber Security Dashboard</li>
        <li className="buttons">
          <ul>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faHome} /> Home
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faChartBar} /> Charts
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faSignOut} /> Logout
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item date">
          <span>Date: {date}</span>
          <span>Tunisia</span>
        </li>
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
      </ul>
    </nav>
  );
};
export default Navbar;
