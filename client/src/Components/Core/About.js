import React from "react";
import { Fragment } from "react";
import Jumbotron from "../Core/jumbotron";
function About() {
  return (
    <Fragment>
      <div>
        <Jumbotron title="About Us" description="" />
      </div>
      <div className="container">
        <p className="lead ">
          We are a small engineering company specialising in machine works and
          fabrication with experience of more than 10 years. We bring ideas of
          our clients to life powered by the experience of our engineers
          ,lifespan and also quality of our product which cannot be compared to
          any product with similar use.
        </p>
      </div>
    </Fragment>
  );
}

export default About;
