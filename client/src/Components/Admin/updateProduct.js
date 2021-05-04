import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import PropTypes from "prop-types";
import { updateProduct, getProduct } from "../../Action/product";
import { connect } from "react-redux";
function UpdateProduct({ updateProduct, getProduct, match, Product }) {
  //fetch requested product with id
  useEffect(() => {
    getProduct(match.params.id);
  }, [getProduct, match.params._id]);

  //consfigure useState hook
  const [formData, setFormData] = useState({
    name: Product.name ? Product.name : "",
    description: Product.name ? Product.description : "",
    price: Product.name ? Product.price : "",
    category: Product.name ? Product.category : "",

    photo: Product.name ? Product.photo : "",
    quantity: Product.name ? Product.name : "",
    success: false,
  });
  //destructure our data from the state
  const { name, quantity, description, price, category, photo } = formData;
  //onchange handler for form data
  const onChange = (name) => (event) => {
    const value = name === "photo" ? event.target.files[0] : event.target.value;
    setFormData({ ...formData, [name]: value });
  };
  //submit form
  const onSubmit = (e) => {
    //prevent default submission of forms
    e.preventDefault();
    let formData = new FormData();
    name && formData.append("name", name);
    description && formData.append("description", description);
    price && formData.append("price", price);
    category && formData.append("category", category);
    quantity && formData.append("quantity", quantity);
    photo && formData.append("photo", photo);

    updateProduct(formData, Product._id)
      .then(() => {
        setFormData({
          ...formData,
          name: "",
          price: "",
          description: "",
          category: "",
          photo: "",
          quantity: "",
          success: true,
        });
      })
      .catch((err) => console.log(err.message));
  }; // load categories

  return (
    <Fragment>
      <section>
        <h2 className="text-center">update Product</h2>
        <hr />
        <div className="container mb-4">
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label for="exampleInputEmail1">Name</label>
              <input
                type="text"
                name="name"
                onChange={onChange("name")}
                value={name}
                className="form-control"
                placeholder="Provide Name"
              />
            </div>
            <div className="form-group">
              <label for="exampleInputEmail1">Description</label>
              <input
                type="text"
                name="description"
                value={description}
                onChange={onChange("description")}
                className="form-control"
                placeholder="Provide Description"
              />
            </div>
            <div className="form-group">
              <label for="exampleInputEmail1">quantity</label>
              <input
                type="Number"
                name="quantity"
                value={quantity}
                onChange={onChange("quantity")}
                className="form-control"
                placeholder="Provide quantity"
              />
            </div>
            <div className="form-group">
              <label for="exampleInputEmail1">Price</label>
              <input
                type="Number"
                name="price"
                value={price === 0 ? "" : price}
                onChange={onChange("price")}
                className="form-control"
                placeholder="Provide Price"
              />
            </div>

            <div className="form-group">
              <label className="text-muted">Category</label>
              <input
                type="text"
                name="category"
                value={category}
                onChange={onChange("category")}
                className="form-control"
                placeholder="Provide category"
              />
            </div>
            <div className="form-group">
              <label for="exampleInputEmail1">photo</label>
              <input
                type="file"
                accept="image/*"
                name="photo"
                onChange={onChange("photo")}
                className="form-control-file"
              />
            </div>

            <button type="submit" className="btn btn-dark btn-block">
              Submit
            </button>
          </form>
        </div>
      </section>
    </Fragment>
  );
}
const mapstateToProps = (state) => ({
  Product: state.Product.Product,
});
UpdateProduct.propTypes = {
  updateProduct: PropTypes.func.isRequired,
  getProduct: PropTypes.func.isRequired,
};
export default connect(mapstateToProps, { updateProduct, getProduct })(
  UpdateProduct
);
