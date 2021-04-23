import React from "react";
import { Fragment } from "react";

function login() {
  return (
    <Fragment>
      <div className="container m-4">
        <form>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Provide email"
            />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Your password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" for="exampleCheck1">
              Remember me
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        <p className="lead mt-4">
          Not Admin? Back to
          <a href="../views/index.html">Homepage</a>
        </p>
      </div>
    </Fragment>
  );
}

export default login;
