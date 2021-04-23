import React from "react";

function contactForm() {
  return (
    <div>
      <section class="contact mt-4">
        <div class="container">
          <h1 class="text-center text-capitalize">Contact Us</h1>
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">Name</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                ariadescribedby="emailHelp"
                placeholder="Provide Name"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                ariadescribedby="emailHelp"
                placeholder="Provide email"
              />
            </div>

            <div class="form-group">
              <label for="exampleInputEmail1">Message</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                ariadescribedby="emailHelp"
                placeholder="Provide Message"
              />
            </div>

            <button type="submit" class="btn btn-dark btn-block">
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default contactForm;
