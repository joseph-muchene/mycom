import {
  Login_success,
  Login_Fail,
  Register_Fail,
  Register_success,
  User_Loaded,
  Logout,
  Auth_error,
} from "../Action/type";

const initialState = {
  isAuthenticated: false,
  loading: false,
  isRegistered: false,
  user: null,
  errors: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case User_Loaded:
      return {
        ...state,
        loading: true,
        isAuthenticated: true,
        user: payload,
      };
    case Login_success:
      localStorage.setItem("jwt", JSON.stringify(payload));
      return {
        ...state,
        isAuthenticated: true,
        user: payload,
        errors: null,
        loading: true,
      };

    case Login_Fail:
      return {
        ...state,
        loading: true,
        isAuthenticated: false,
        errors: payload,
      };
    case Register_success:
      return {
        ...state,
        loading: true,
        isAuthenticated: false,
        isRegistered: true,
        user: payload,
      };

    case Register_Fail:
      return {
        ...state,
        loading: true,
        isAuthenticated: false,
        isRegistered: false,
        errors: payload,
      };
    case Logout:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        errors: payload,
      };
    case Auth_error:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        errors: payload,
      };
    default:
      return state;
  }
}
