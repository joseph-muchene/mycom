// axios
import axios from "axios";
//types
import {
  create_Product,
  Get_Product,
  update_Product,
  Remove_Product,
  list_Product,
  product_Error,
} from "./type";

// create product
export const createProduct = (formData) => async (dispatch) => {
  //send token
  //check admin role === 1
  try {
    const config = {
      headers: {
        "content-Type": "multipart/form-data",
      },
    };
    const res = await axios.post(
      "http://localhost:8000/product",
      config,
      formData
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
    const res = await axios.get(`http://localhost:8000/product/${productId}`);
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
  try {
    const config = {
      headers: {
        "content-Type": "multipart/form-data",
      },
    };
    const res = await axios.put(
      `http://localhost:8000/product/update/${productId}`,
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
export const removeProduct = (id) => async (dispatch) => {
  //send token
  //check admin role === 1
  const config = {}
  try {
    const res = await axios.delete(
      `http://localhost:8000/product/remove/${productId}`
    );
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
    const res =  axios.get("http://localhost:8000/api/product")
    dispatch({
      type:list_Product,
      payload:res.data
    })
  } catch (ex) {
       dispatch({
         type: product_Error,
         payload: ex.response.data.msg,
       });
  }
};
