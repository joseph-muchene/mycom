import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/register";
import { loadUser } from "./Action/Auth";
import { Provider } from "react-redux";
import PrivateRoute from "./PrivateRoute";
import Store from "./store";
import Dashboard from "./Components/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Navbar from "./Components/Core/Navbar";
import { Fragment } from "react";
import Product from "./Components/Core/product";
import UpdateProduct from "./Components/Admin/updateProduct";
import About from "./Components/Core/About";
import ShowRelated from "./Components/Core/showRelated";
import Footer from "./Components/Core/footer";
function App() {
  useEffect(() => {
    Store.dispatch(loadUser());
  });

  return (
    <Fragment>
      <Provider store={Store}>
        <Router>
          <Navbar />
          <Route exact path="/" component={Home} />
          <PrivateRoute exact path="/Admin" component={Dashboard} />
          <Route exact path="/About" component={About} />
          <div className="container">
            <Switch>
              <Route exact path="/login" component={Login} />

              <Route exact path="/product/:id" component={Product} />
              <Route
                exact
                path="/related/product/:id"
                component={ShowRelated}
              />
              <Route exact path="/register" component={Register} />
              <Route exact path="/edit/:id" component={UpdateProduct} />
            </Switch>
          </div>
        </Router>
      </Provider>
      <Footer />
    </Fragment>
  );
}

export default App;
