import React from "react";

function Testimonial() {
  return (
    <div>
      <section class="testimonials">
        <h1 class="text-center text-capitalize display-4">what clients say?</h1>

        <div class="container">
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-ride="carousel"
          >
            <div class="carousel-inner" role="listbox">
              <div class="carousel-item active">
                <div class="container">
                  <div class="grid">
                    <div class="row">
                      <div class="col-sm">
                        <img
                          src="../images/lllll.png"
                          class="img-thumb img"
                          alt=""
                          srcset=""
                        />
                      </div>
                      <div class="m-4 col-sm">
                        <h3>Joseph Muchene</h3>
                        <p class="lead">1/4/2021</p>
                      </div>
                      <div class="p-4">
                        <p class="lead m-2">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Eaque necessitatibus odio deserunt repellendus
                          optio deleniti explicabo vitae veritatis laborum
                          officia!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonial;
