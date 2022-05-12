import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <div>
            <ul className="navbar-nav ml-auto">
              <li
                className={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li
                className={`nav-item  ${
                  props.location.pathname === "/exercise1" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/exercise1">
                  Exercise 1
                </Link>
              </li>
              <li
                className={`nav-item  ${
                  props.location.pathname === "/exercise2" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/exercise2">
                  Exercise 2
                </Link>
              </li>
              <li
                className={`nav-item  ${
                  props.location.pathname === "/exercise3" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/exercise3">
                  Exercise 3
                </Link>
              </li>
              <li
                className={`nav-item  ${
                  props.location.pathname === "/exercise4" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/exercise4">
                  Exercise 4
                </Link>
              </li>
              <li
                className={`nav-item  ${
                  props.location.pathname === "/exercise5" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/exercise5">
                  Exercise 5
                </Link>
              </li>
              <li
                className={`nav-item  ${
                  props.location.pathname === "/exercise6" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/exercise6">
                  Exercise 6
                </Link>
              </li>
              <li
                className={`nav-item  ${
                  props.location.pathname === "/exercise7" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/exercise7">
                  Exercise 7
                </Link>
              </li>
              <li
                className={`nav-item  ${
                  props.location.pathname === "/exercise8" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/exercise8">
                  Exercise 8
                </Link>
              </li>
              <li
                className={`nav-item  ${
                  props.location.pathname === "/exercise9" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/exercise9">
                  Exercise 9
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);