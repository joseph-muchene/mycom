import React from "react";
import Auth from "./User/login";
import Jumbotron from "./Core/jumbotron";
function Login() {
  return (
    <div>
      <Jumbotron />
      <Auth />
    </div>
  );
}

export default Login;
