import React from "react";
import { Fragment } from "react";

function Footer() {
  return (
    <Fragment>
      <section className="footer mt-4">
        <div className="footer__grid">
          <ul className="socials">
            <p className="lead list-text">social</p>
            <li>
              <a href="" className="text-white">
                facebook
              </a>
            </li>
          </ul>
          <ul className="Contacts">
            <p className="lead list-text">Contacts</p>
            <li>+254725426855</li>
            <li>paulsmith@businesscom.io</li>
            <li>paulsmith@gmail.com</li>
          </ul>
          <ul className="address">
            <p className="lead list-text">Address</p>
            <p className="lead">Thika, Makongeni</p>
          </ul>
        </div>
        <div className="bg-primary sticky-bottom fixed-bottom">
          <p className="text-center">Copyright 2021 All Right Reserved</p>
        </div>
      </section>
    </Fragment>
  );
}

export default Footer;
