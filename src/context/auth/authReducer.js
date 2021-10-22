import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  USER_AUTHENTICATED,
  USER_LOGOUT,
} from "../types";

const AuthReducer = (state, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        autenticated: true,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        autenticated: false,
      };

    case USER_AUTHENTICATED:
      return {
        ...state,
        autenticated: true,
      };
    case USER_LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        autenticated: false,
      };

    default:
      return state;
  }
};

export default AuthReducer;
