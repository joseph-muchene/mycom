//axios
import axios from "axios";
//types
import {
  Login_success,
  Login_Fail,
  Auth_error,
  Register_success,
  Register_Fail,
  Logout,
  User_Loaded,
} from "./type";

export const isAuthenticated = () => {
  if (typeof window === "undefined") {
    return null;
  } else if (localStorage.getItem("jwt")) {
    return JSON.parse(localStorage.getItem("jwt"));
  } else {
    return null;
  }
};
//pull out user details to use in my actions
const { user } = isAuthenticated();
const { _id } = user;
export const loadUser = () => async (dispatch) => {
  try {
    const res = await axios.get(`http://localhost:8000/api/user/${_id}`);
    dispatch({
      type: User_Loaded,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: Auth_error,
    });
  }
};

export const registeruser = (formData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const body = JSON.stringify(formData);
    const res = await axios.post(
      "http://localhost:8000/api/register",
      body,
      config
    );
    dispatch({
      type: Register_success,
      payload: res.data,
    });
  } catch (ex) {
    console.log(ex);
    dispatch({
      type: Register_Fail,
      payload: ex.response.data.error,
    });
  }
};

export const loginuser = (formData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const body = JSON.stringify(formData);
    const res = await axios.post(
      "http://localhost:8000/api/login",
      body,
      config
    );
    dispatch({
      type: Login_success,
      payload: res.data,
    });
  } catch (ex) {
    dispatch({
      type: Login_Fail,
      payload: ex.response.data.error,
    });
  }
};

export const signout = () => async (dispatch) => {
  try {
    await axios.get("http://localhost:8000/api/signout");
    dispatch({
      type: Logout,
    });
  } catch (ex) {
    dispatch({
      type: Auth_error,
    });
  }
};
