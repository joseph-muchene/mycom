// axios
import axios from "axios";
import { isAuthenticated } from "./Auth";
//types
import {
  create_Product,
  Get_Product,
  update_Product,
  Remove_Product,
  list_Product,
  product_Error,
} from "./type";
//pull user data from the localstorage using isAuthenticated func
const { token, user } = isAuthenticated();
const { _id } = user;
// create product
export const createProduct = (formData) => async (dispatch) => {
  //send token
  //check admin role === 1
  // userId should be available to check admin role
  // product id for the product to be created
  try {
    const config = {
      headers: {
        "content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    };

    const res = await axios.post(
      `http://localhost:8000/api/product/${_id}`,
      formData,
      config
    );
    dispatch({
      type: create_Product,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: product_Error,
      payload: err.response.data.error,
    });
  }
};
// get product
export const getProduct = (productId) => async (dispatch) => {
  try {
    const res = await axios.get(
      `http://localhost:8000/api/product/${productId}`
    );
    dispatch({
      type: Get_Product,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: product_Error,
    });
  }
};
// update product
export const updateProduct = (productId, formData) => async (dispatch) => {
  //send token
  //check admin role === 1
  // userId should be available to check admin role
  // product id for the product to be updated
  try {
    const config = {
      headers: {
        "content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    };
    const res = await axios.put(
      `http://localhost:8000/product/update/${_id}/${productId}`,
      config,
      formData
    );
    dispatch({
      type: update_Product,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: product_Error,
      payload: err.response.data.error,
    });
  }
};
// remove product
export const removeProduct = (productId) => async (dispatch) => {
  //send token
  //check admin role === 1
  // userId should be available to check admin role
  // product id for the product to be deleted
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const res = await axios.delete(
      `http://localhost:8000/product/remove/${_id}/${productId}`,
      config
    );
    dispatch({
      type: Remove_Product,
      payload: res.data,
    });
  } catch (ex) {
    dispatch({
      type: product_Error,
      payload: ex.response.data.msg,
    });
  }
};
// list product
export const listProduct = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:8000/api/products");
    dispatch({
      type: list_Product,
      payload: res.data,
    });
  } catch (ex) {
    dispatch({
      type: product_Error,
    });
  }
};
