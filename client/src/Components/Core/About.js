import React, { Fragment } from "react";
import Footer from "../Core/footer";
import Jumbotron from "../Core/jumbotron";
function About() {
  return (
    <Fragment>
      <div>
        <Jumbotron title="About Us" description="" />
        <div className="container ">
          <h1 className="text-center display-3">Who Are We</h1>
          <p className="lead ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Reprehenderit maxime molestiae molestias cum delectus unde magnam
            dolor atque? Quis architecto accusantium aspernatur eum rem nisi
            dolorum, quasi et molestiae aliquam.
          </p>
        </div>
      </div>
    </Fragment>
  );
}

export default About;
