import React from "react";
import Pagination from "./Core/pagination";
import Jumbotron from "./Core/jumbotron";
import Products from "./Core/products";
import Testimonials from "./Core/testimonial";
import Contact from "./Core/contactForm";
import Footer from "./Core/footer";
function Home() {
  return (
    <div>
      <Jumbotron />
      <Products />
      <Pagination />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
