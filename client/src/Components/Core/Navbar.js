import React from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-xl">
          <span>
            <img src="../images/3.png" className="img-thumb logo" alt="" />
          </span>
          <Link className="navbar-brand" to="#">
            Fabricators
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarsExample07XL"
            aria-controls="navbarsExample07XL"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsExample07XL">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/Admin">
                  Dashboard
                </Link>
              </li>

              <li className="nav-item active">
                <Link className="nav-link" to="../views/dashboard.html">
                  Contact
                </Link>
              </li>

              <li className="nav-item active">
                <Link className="nav-link" to="../views/dashboard.html">
                  Products
                </Link>
              </li>

              <li className="nav-item active">
                <Link className="nav-link " to="../views/dashboard.html">
                  About
                </Link>
              </li>

              <li className="nav-item dropdown active mr-4">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="dropdown07XL"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  Category
                </Link>
                <div className="dropdown-menu" aria-labelledby="dropdown07XL">
                  <Link className="dropdown-item" to="#">
                    Action
                  </Link>
                  <Link className="dropdown-item" to="#">
                    Another action
                  </Link>
                  <Link className="dropdown-item" to="#">
                    Something else here
                  </Link>
                </div>
              </li>
              <li className="nav-item active">
                <button className="btn btn-info">
                  <Link to="../views/login.html" className="text-white">
                    Login
                  </Link>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}

export default Navbar;
