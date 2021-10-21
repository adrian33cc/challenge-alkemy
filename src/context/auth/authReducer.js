import { LOGIN_SUCCESS, LOGIN_ERROR } from "../types";

const AuthReducer = (state, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        autenticated:true,
      };
    case LOGIN_ERROR:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default AuthReducer;
