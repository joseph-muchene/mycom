import React from "react";
import { Fragment } from "react";

function footer() {
  return (
    <Fragment>
      <section className="footer mt-4">
        <div className="footer__grid">
          <ul className="socials">
            <p className="lead list-text">social</p>
            <li>facebook</li>
            <li>instagram</li>
            <li>twitter</li>
          </ul>
          <ul className="Contacts">
            <p className="lead list-text">Contacts</p>
            <li>+254874384868</li>
            <li>info@businesscom.io</li>
            <li>businesscom@gmail.com</li>
          </ul>
          <ul className="address">
            <p className="lead list-text">Address</p>
            <p className="lead">
              123 Second Street Fifth Avenue, Manhattan, New York +987 654 3210
            </p>
          </ul>
        </div>
      </section>
    </Fragment>
  );
}

export default footer;
