import {
  create_Product,
  Get_Product,
  update_Product,
  Remove_Product,
  list_Product,
  product_Error,
  show_Related,
} from "../Action/type";

const initialState = {
  products: [],
  Product: {},
  loading: true,
  error: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case create_Product:
      return {
        ...state,
        Products: payload,
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
        products: payload,
        errors: null,
      };
    case show_Related:
      return {
        ...state,
        products: payload,
        errors: null,
      };
    case update_Product:
      return {
        ...state,
        product: payload,
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
