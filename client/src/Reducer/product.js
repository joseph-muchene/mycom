import {
  create_Product,
  Get_Product,
  update_Product,
  Remove_Product,
  list_Product,
  product_Error,
} from "../Action/type";

const initialState = {
  Products: [],
  Product: null,
  loading: true,
  error: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case create_Product:
      return {
        ...state,
        Products: [payload, ...state.Products],
        loading: false,
      };

    case Remove_Product:
      return {
        ...state,
        Products: state.Products.filter((Product) => Product._id !== payload),
        loading: false,
      };
    case Get_Product:
      return {
        ...state,
        Product: payload,
        loading: false,
      };
    case list_Product:
      return {
        ...state,
        Products: payload,
        errors: null,
      };
    case update_Product:
      return {
        ...state,
        Product: payload,
        loading: false,
      };
    case product_Error:
      return {
        ...state,
        Product: null,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
}
