import React, { useState } from "react";
import { Fragment } from "react";
import { connect } from "react-redux";
import { registeruser } from "../../Action/Auth";
import PropTypes from "prop-types";
import { Link, Redirect } from "react-router-dom";

function Register({ registeruser, isRegistered }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    success: false,
  });
  //onChange handler
  const { name, email, password } = formData;
  const onchange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const errors = [];
  //submit handle
  const onSubmit = (e) => {
    e.preventDefault();

    registeruser({ name, email, password }).then(() => {
      setFormData({
        ...formData,
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        success: true,
      });
    });
  };
  //check if isRegistered
  if (isRegistered) {
    return <Redirect to="/login" />;
  }

  return (
    <Fragment>
      <div className="container m-4">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label for="exampleInputEmail1">Name</label>
            <input
              name="name"
              placeholder="Provide Name"
              onChange={onchange}
              type="text"
              value={name}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              name="email"
              type="email"
              value={email}
              onChange={onchange}
              className="form-control"
              placeholder="Provide email"
            />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={onchange}
              className="form-control"
              placeholder="Provide Password"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        <p className="lead mt-4">
          Already have an account?
          <Link to="/login">
            <span> Login</span>
          </Link>
        </p>
      </div>
    </Fragment>
  );
}
Register.propTypes = {
  registeruser: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  isRegistered: state.Auth.isRegistered,
});
export default connect(mapStateToProps, { registeruser })(Register);
