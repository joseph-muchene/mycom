// axios
import axios from "axios";
import { isAuthenticated } from "./Auth";
//types
import {
  create_Category,
  Get_category,
  update_category,
  Remove_category,
  list_categories,
  category_Error,
} from "./type";
//pull user data from isAuthenticated
const { data } = isAuthenticated();

// create Category
export const createCategory = (name) => async (dispatch) => {
  //send token
  //check admin role === 1
  // userId should be available to check admin role
  // product id for the product to be deleted
  try {
    //set headers
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${data.token}`,
      },
    };
    const body = JSON.stringify(name);
    console.log(body);
    const res = await axios.post(
      `http://localhost:8000/api/create/category/${data.user._id}`,
      body,
      config
    );
    dispatch({
      type: create_Category,
      payload: res.data,
    });
  } catch (ex) {
    console.log(ex);
    dispatch({
      type: category_Error,
    });
  }
};
// get Category
export const getCategory = (categoryId) => async (dispatch) => {
  try {
    const res = await axios.get(
      `http://localhost:8000/api/category/read/${categoryId}`
    );
    dispatch({
      type: Get_category,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: category_Error,
    });
  }
};
// update Category
export const updateCategory = (categoryId, category) => async (dispatch) => {
  //send token
  //check admin role === 1
  // userId should be available to check admin role
  // product id for the product to be deleted
  try {
    //set headers
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${data.token}`,
      },
    };
    const res = await axios.put(
      `http://localhost:8000/api/update/category/${data.user._id}/${categoryId}`,
      category,
      config
    );
    dispatch({
      type: update_category,
      payload: res.data,
    });
  } catch (ex) {
    dispatch({
      type: category_Error,
    });
  }
};
// remove Category
export const removeCategory = (categoryId) => async (dispatch) => {
  //send token
  //check admin role === 1
  // userId should be available to check admin role
  // product id for the product to be deleted
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${data.token}`,
    },
  };
  try {
    const res = await axios.delete(
      `http://localhost:8000/api/category/remove/${data.user._id}/${categoryId}`,
      config
    );
    dispatch({
      type: Remove_category,
      payload: res.data,
    });
  } catch (ex) {
    dispatch({
      type: category_Error,
    });
  }
};
// list Category
export const listCategory = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:8000/api/category/list");
    dispatch({
      type: list_categories,
      payload: res.data,
    });
  } catch (ex) {
    dispatch({
      type: category_Error,
      payload: ex.response.data.msg,
    });
  }
};
