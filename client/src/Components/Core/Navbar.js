import React from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  console.log(window);
  let productID = "#product";
  let contact = "#contact";

  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-xl">
          <Link className="navbar-brand" to="/">
            M-shop
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
                <a className="nav-link" href={`${contact}`}>
                  Contact
                </a>
              </li>

              <li className="nav-item active">
                <a className="nav-link" href={`${productID}`}>
                  Products
                </a>
              </li>

              <li className="nav-item active">
                <Link className="nav-link " to="/About">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}

export default Navbar;
