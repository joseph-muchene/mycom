import React from "react";
import { Fragment } from "react";

function createCategory() {
  return (
    <Fragment>
      <section className="hero m-4">
        <div className="container">
          <h3 className="text-center">Create category</h3>

          <form action="">
            <div className="form-group">
              <label for="exampleInputEmail1">category</label>
              <input
                type=""
                className="form-control"
                id="exampleInputEmail1"
                ariadescribedby="emailHelp"
                placeholder="create category"
              />
            </div>
          </form>
        </div>

        <button type="submit" className="btn btn-dark btn-block">
          Submit
        </button>
      </section>
    </Fragment>
  );
}

export default createCategory;
