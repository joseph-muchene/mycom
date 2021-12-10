import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { relatedProducts } from "../../Action/product";
import { numberWithCommas } from "../../helpers/format";
import { TruncateBody } from "../../helpers/truncate";
function ShowRelated({ relatedProducts, id, products }) {
  const [related, setRelated] = useState(false);
  useEffect(() => {
    relatedProducts(id);
  }, [id, relatedProducts]);

  return (
    <div>
      <hr />
      {products.length > 0 && (
        <button
          className="btn btn-primary"
          onClick={() => {
            setRelated(!related);
          }}
        >
          {!related ? "show related" : "hide related"}
        </button>
      )}

      {related ? (
        <div className="container">
          <div className="grid">
            <div className="row">
              <div className="card-columns">
                {products.length > 0 &&
                  products.map((c) => (
                    <div className="card-sm">
                      <div className="card">
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
                            alt="product"
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
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
ShowRelated.propTypes = {
  relatedProducts: PropTypes.func.isRequired,
};
const mapstateToProps = (state) => ({
  products: state.Product.products,
});
export default connect(mapstateToProps, { relatedProducts })(ShowRelated);
