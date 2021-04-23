import React, { Fragment } from "react";

function products() {
  return (
    <Fragment>
      <div>
        <h1 class="text-capitalize text-center card-">Our Products</h1>
        <hr />
      </div>
      <div class="grid">
        <div class="row">
          <div class="col-sm">
            <div class="card">
              <div class="card-title">
                <h1 class="text-center card__header">Stove</h1>
              </div>
              <div class="card-subtitle">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam,
                harum! Id reprehenderit ipsa ex voluptatem iste maiores sequi
                error nam!
              </div>
              <div class="card-body">
                <img
                  src="../images/blog.jpg"
                  class="img-fluid"
                  alt=""
                  srcset=""
                />
              </div>
              <div class="card-footer">
                <p class="text-center">
                  <h4 class="text-center">
                    Price:<span>Ksh 20000</span>
                  </h4>
                  <h5 class="text-center">
                    Quantity:<span>20</span>
                  </h5>
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm">
            <div class="card">
              <div class="card-title">
                <h1 class="text-center card__header">Stove</h1>
              </div>
              <div class="card-subtitle">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam,
                harum! Id reprehenderit ipsa ex voluptatem iste maiores sequi
                error nam!
              </div>
              <div class="card-body">
                <img
                  src="../images/blog.jpg"
                  class="img-fluid"
                  alt=""
                  srcset=""
                />
              </div>
              <div class="card-footer">
                <p class="text-center">
                  <h4 class="text-center">
                    Price:<span>Ksh 20000</span>
                  </h4>
                  <h5 class="text-center">
                    Quantity:<span>20</span>
                  </h5>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default products;
