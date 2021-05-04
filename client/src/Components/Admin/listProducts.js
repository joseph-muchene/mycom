import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { listProduct, removeProduct } from "../../Action/product";
function ListProducts({ listProduct, products: { product }, removeProduct }) {
  //FETCH PRODUCTS
  useEffect(() => {
    listProduct();
  }, [listProduct]);
  return (
    <section class="products">
      <h3 class="text-center">Products</h3>
      <hr />
      <div class="container">
        <table class="table text-center mt-5 table-striped table-reflow">
          <thead class="thead-dark">
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Category</th>
              <th>photo</th>
              <th>Delete</th>
              <th>update</th>
            </tr>
          </thead>
          <tbody>
            {product && product.length > 0
              ? product.map((c) => (
                  <tr>
                    <td>{c.name}</td>
                    <td class="text-break">{c.description}</td>
                    <td>ksh {c.price}</td>
                    <td>{c.category}</td>
                    <td>n/a</td>
                    <td>
                      <button
                        class="btn btn-danger"
                        onClick={() => {
                          removeProduct(c._id);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                    <td>
                      <button class="btn btn-secondary ">
                        <Link to={`/edit/${c._id}`} class="text-white">
                          Update
                        </Link>
                      </button>
                    </td>
                  </tr>
                ))
              : null}
          </tbody>
        </table>
      </div>
    </section>
  );
}
ListProducts.propTypes = {
  listProduct: PropTypes.func.isRequired,
  removeProduct: PropTypes.func.isRequired,
};
const mapstateToProps = (state) => ({
  products: state.Product.products,
});
export default connect(mapstateToProps, { listProduct, removeProduct })(
  ListProducts
);
