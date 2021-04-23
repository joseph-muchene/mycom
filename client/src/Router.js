import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Login from "./Components/Login";
import { Provider } from "react-redux";
import Store from "./store";
import Dashboard from "./Components/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Navbar from "./Components/Core/Navbar";
import { Fragment } from "react";
function App() {
  return (
    <Fragment>
      <Provider store={Store}>
        <Router>
          <Navbar />
          <Route exact path="/" component={Home} />
          <div className="container">
            <Switch>
              <Route exact path="/Admin" component={Dashboard} />
              <Route exact path="/login" component={Login} />
            </Switch>
          </div>
        </Router>
      </Provider>
    </Fragment>
  );
}

export default App;
