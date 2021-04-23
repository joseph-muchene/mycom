import React from "react";
import { Fragment } from "react";

function createProduct() {
  return (
    <Fragment>
      <section>
        <h2 className="text-center">Create Product</h2>
        <hr />
        <div className="container mb-4">
          <form>
            <div className="form-group">
              <label for="exampleInputEmail1">Name</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                ariadescribedby="emailHelp"
                placeholder="Provide Name"
              />
            </div>
            <div className="form-group">
              <label for="exampleInputEmail1">Description</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                ariadescribedby="emailHelp"
                placeholder="Provide Description"
              />
            </div>
            <div className="form-group">
              <label for="exampleInputEmail1">Price</label>
              <input
                type="Number"
                className="form-control"
                id="exampleInputEmail1"
                ariadescribedby="emailHelp"
                placeholder="Provide Price"
              />
            </div>

            <div className="form-group">
              <label for="exampleInputEmail1">category</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                ariadescribedby="emailHelp"
                placeholder="Provide category"
              />
            </div>
            <div className="form-group">
              <label for="exampleInputEmail1">photo</label>
              <input
                type=""
                className="form-control"
                id="exampleInputEmail1"
                ariadescribedby="emailHelp"
                placeholder="Provide photo"
              />
            </div>

            <button type="submit" className="btn btn-dark btn-block">
              Submit
            </button>
          </form>
        </div>
      </section>
    </Fragment>
  );
}

export default createProduct;
