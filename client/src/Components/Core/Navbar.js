import React, { useEffect } from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { listCategory } from "../../Action/category";
function Navbar({ listCategory, categories }) {
  //fetch categories
  useEffect(() => {
    listCategory();
  }, [listCategory]);
  console.log(categories);
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-xl">
          <span>
            <img src="../images/3.png" className="img-thumb logo" alt="" />
          </span>
          <Link className="navbar-brand" to="#">
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
                  {categories && categories.length > 0
                    ? categories.map((c) => (
                        <Link className="dropdown-item" to="#">
                          {c.name}
                        </Link>
                      ))
                    : ""}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}
Navbar.propTypes = {
  listCategory: PropTypes.func.isRequired,
};
const mapstateToProps = (state) => ({
  categories: state.Category.categories,
});
export default connect(mapstateToProps, { listCategory })(Navbar);
