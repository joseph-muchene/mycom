import React, { useEffect } from "react";
import Products from "./Core/products";
import Contact from "./Core/contactForm";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { listProduct } from "../Action/product";
import HomeBanner from "./Core/HomeBanner";
import Footer from "../Components/Core/footer";
function Home({ listProduct, products }) {
  useEffect(() => {
    listProduct();
  }, [listProduct]);
  return (
    <div>
      <HomeBanner />
      <Products items={products} />
      <Contact />
      <Footer />
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
