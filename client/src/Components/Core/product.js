import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Fragment } from "react";
import { connect } from "react-redux";
import { getProduct } from "../../Action/product";
import { numberWithCommas } from "../../helpers/format";
function Product({ getProduct, match, Product }) {
  //fetch requested product
  useEffect(() => {
    getProduct(match.params.id);
  }, [match.params.id, getProduct]);
  console.log(Product);
  const { name, _id, description, price } = Product;
  return (
    <Fragment>
      <div className="container">
        <h1 className="text-center display-4">{name}</h1>
        <div className="grid">
          <div className="row">
            <div className="col-sm m-4">
              <img
                src={`http://localhost:8000/api/product/photo/${_id}`}
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="col-sm">
              <p className="text-center mt-5">
                <p className="badge badge-primary m-4 badge-pill p-3 lead">
                  {" "}
                  Description{" "}
                </p>
                <br />
                {description}
                <h4 className="mt-4 text-info"> </h4>
              </p>
            </div>
          </div>
        </div>
        <h1 className="text-center alert alert-info">
          Ksh {numberWithCommas(parseInt(price))}
        </h1>
      </div>
    </Fragment>
  );
}
Product.propTypes = {
  getProduct: PropTypes.func.isRequired,
};
const mapstateToProps = (state) => ({
  Product: state.Product.Product,
});
export default connect(mapstateToProps, { getProduct })(Product);
