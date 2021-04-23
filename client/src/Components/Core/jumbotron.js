import React from "react";
import { Fragment } from "react";

function jumbotron({ title = "dcgfd", description = "ffg" }) {
  return (
    <Fragment>
      <div class="jumbotron">
        <div class="col-sm-8 mx-auto">
          <h1 class="mb-3 display-5">{title}</h1>
          <p class="lead">{description}</p>
        </div>
      </div>
    </Fragment>
  );
}

export default jumbotron;
