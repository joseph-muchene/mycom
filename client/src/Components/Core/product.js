import React from "react";
import { Fragment } from "react";

function product() {
  return (
    <Fragment>
      <div className="container">
        <div className="grid">
          <div className="row">
            <div className="col-sm">
              <img src="../images/blol.jpg" alt="" className="img-fluid" />
            </div>
            <div className="col-sm">
              <p className="text-center mt-5">
                <p className="badge badge-primary m-4 badge-pill p-3 lead">
                  {" "}
                  Description{" "}
                </p>
                <br />
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
                officia corrupti dolore! Dolores rem dolore accusantium numquam
                inventore, natus perspiciatis?
                <h4 className="mt-4 text-info"> 2 in Stock</h4>
              </p>
            </div>
          </div>
        </div>
        <h1 className="text-center alert alert-info">Ksh 30000</h1>
      </div>
    </Fragment>
  );
}

export default product;
