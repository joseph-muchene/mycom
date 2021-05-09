import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import { listProduct } from "../../Action/product";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Pagination from "../Core/pagination";
import { TruncateBody } from "../../helpers/truncate";
import { numberWithCommas } from "../../helpers/format";
function Productss({ listProduct, products: { product }, items }) {
  const [pageNumber, setPageNumber] = useState(0);
  const [numberOfpages, setNumberOfpages] = useState(0);
  useEffect(() => {
    listProduct(pageNumber);
  }, [listProduct, pageNumber]);
  useEffect(() => {
    setNumberOfpages(items.totalPages);
  });
  const pages = new Array(numberOfpages).fill(null).map((v, i) => i);

  return (
    <Fragment>
      <div>
        <hr />
      </div>
      <div className="container" id="product">
        <div class="grid">
          <div class="row">
            <div className="card-columns">
              {product && product.length > 0
                ? product.map((c) => (
                    <div class="col-sm">
                      <div class="card mb-4">
                        {JSON.stringify()}
                        <div class="card-title">
                          <h3 class="text-center card__header mb-4">
                            {c.name}
                          </h3>
                        </div>
                        <div class="card-subtitle">
                          <p className="lead text-center">
                            {TruncateBody(c.description, 100)}
                            <p>
                              {">> "}

                              <Link to={`/product/${c._id}`}>Read more</Link>
                            </p>
                          </p>
                        </div>
                        <div class="card-body">
                          <img
                            src={`http://localhost:8000/api/product/photo/${c._id}`}
                            class=" img"
                            alt=""
                            srcset=""
                          />
                        </div>
                        <div class="card-footer">
                          <p class="text-center">
                            <h4 class="text-center">
                              Price:
                              <span>
                                Ksh {numberWithCommas(parseInt(c.price))}
                              </span>
                            </h4>
                            <h5>
                              product:
                              <span className="text-danger">{c.quantity}</span>
                            </h5>
                          </p>
                        </div>
                      </div>
                    </div>
                  ))
                : null}
            </div>
          </div>
        </div>
      </div>
      <div className="container d-flex justify-content-center">
        <Pagination
          pages={pages}
          posts={items}
          setPageNumber={setPageNumber}
          total={items.totalPages}
          pageNumber={pageNumber}
        />
      </div>
    </Fragment>
  );
}
Productss.propTypes = {
  listProduct: PropTypes.func.isRequired,
  products: PropTypes.object.isRequired,
};
const mapstateToProps = (state) => ({
  products: state.Product.products,
});
export default connect(mapstateToProps, { listProduct })(Productss);
