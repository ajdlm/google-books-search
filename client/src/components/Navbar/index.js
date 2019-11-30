import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light fixed-top py-4 border-bottom border-dark">
      <NavLink className="navbar-brand" to="/">
        Google Books Search
      </NavLink>

      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink
              to="/"
              className="nav-link"
              // Make it so this NavLink is active only when the
              // path exactly matches either "/" or "/search"
              isActive={(_, { pathname }) => pathname.match(/^(\/|\/search)$/)}
              activeClassName="active"
            >
              Search
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/saved"
              className="nav-link"
              activeClassName="active"
              exact
            >
              Saved
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
