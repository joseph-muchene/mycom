import React, { useEffect } from "react";
import Jumbotron from "./Core/jumbotron";
import Products from "./Core/products";
import Testimonials from "./Core/testimonial";
import Contact from "./Core/contactForm";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { listProduct } from "../Action/product";
import HomeBanner from "./Core/HomeBanner";
function Home({ listProduct, products }) {
  useEffect(() => {
    listProduct();
  }, [listProduct]);
  return (
    <div>
      <HomeBanner />
      <Products items={products} />

      <Contact />
    </div>
  );
}
Home.propTypes = {
  listProduct: PropTypes.func.isRequired,
  products: PropTypes.object.isRequired,
};
const mapstateToProps = (state) => ({
  products: state.Product.products,
});
export default connect(mapstateToProps, { listProduct })(Home);
