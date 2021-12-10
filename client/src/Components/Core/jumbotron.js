import React from "react";
import { Fragment } from "react";

function Jumbotron({
  title = "Welcome To M-SHOP",
  description = "ORDER NOW TO GET 50% DISCOUNT",
}) {
  return (
    <Fragment>
      <div class="jumbotron bg-dark">
        <div class="col-sm-8 mx-auto">
          <h1 class="mb-3 display-3 text-white">{title}</h1>
          <p class="lead text-white">{description}</p>
        </div>
      </div>
    </Fragment>
  );
}

export default Jumbotron;
