import {
  create_Category,
  Get_category,
  update_category,
  Remove_category,
  list_categories,
  category_Error,
} from "../Action/type";

const initialState = {
  categories: [],
  category: null,
  loading: true,
  error: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case create_Category:
      return {
        ...state,
        categories: [payload, ...state.categories],
        loading: false,
      };

    case Remove_category:
      return {
        ...state,
        categories: state.categories.filter(
          (category) => category._id !== payload
        ),
        loading: false,
      };
    case Get_category:
      return {
        ...state,
        category: payload,
        loading: false,
      };
    case list_categories:
      return {
        ...state,
        categories: payload,
        errors: null,
      };
    case update_category:
      return {
        ...state,
        category: payload,
        loading: false,
      };
    case category_Error:
      return {
        ...state,
        category: null,
        loading: false,
        errors: payload,
      };
    default:
      return state;
  }
}
