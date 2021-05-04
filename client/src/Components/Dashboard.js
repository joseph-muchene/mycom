import React from "react";
import Jumbotron from "./Core/jumbotron";
import CreateProduct from "./Admin/createProduct";
import CreateCategory from "./Admin/createCategory";
import ListProducts from "./Admin/listProducts";

function Dashboard() {
  return (
    <div>
      <Jumbotron title="Admin Dashboard" description="" />
      <CreateProduct />
      <CreateCategory />
      <ListProducts />
    </div>
  );
}

export default Dashboard;
