import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Google Books Search
      </Link>

      <div>
        <ul className="navbar-nav">
          <li clasName="nav-item">
            <Link
              to="/"
              className={`nav-link${
                window.location.pathname === "/" ||
                window.location.pathname === "/search"
                  ? " active"
                  : ""
              }`}
            >
                Search
            </Link>
          </li>

          <li className="nav-item">
              <Link to="/saved" className={`nav-link${
                window.location.pathname === "/saved"
                  ? " active"
                  : ""
              }`}>
                  Saved
              </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
