import React, { useState } from "react";
import { Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link, Redirect } from "react-router-dom";
import { loginuser } from "../../Action/Auth";
function Login({ loginuser, isAuthenticated }) {
  //configure our form data state
  const [formData, setFormData] = useState({
    email: "admin@gmail.com",
    password: "admin",
    token: null,
  });
  //pull out data from our state
  const { email, password } = formData;
  //onchangeHandler
  const onchange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  //submit form
  const onSubmit = (e) => {
    e.preventDefault();
    loginuser({ email, password }).then((data) => {
      console.log(data);
      setFormData({
        ...formData,
        email: "",
        password: "",
      });
    });
  };
  //redirect if isAuthenticated
  if (isAuthenticated) {
    return <Redirect to="/Admin" />;
  }
  return (
    <Fragment>
      <div className="container mt-4">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={onchange}
              className="form-control"
              placeholder="Provide email"
            />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Your password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={onchange}
              className="form-control"
              placeholder="Password"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        <p className="lead mt-4">
          Not Admin? Back to
          <Link to="/">Homepage</Link>
        </p>
      </div>
    </Fragment>
  );
}
Login.propTypes = {
  loginuser: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.Auth.isAuthenticated,
});

export default connect(mapStateToProps, { loginuser })(Login);
