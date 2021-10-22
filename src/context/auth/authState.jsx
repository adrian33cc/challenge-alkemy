import React, { useReducer } from "react";
import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  USER_AUTHENTICATED,
  USER_LOGOUT,
} from "../types";
import AuthContext from "./authContext";
import AuthReducer from "./authReducer";
import axios from "axios";

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    autenticated: null,
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const loginUser = async (values) => {
    try {
      const response = await axios.post('https://challenge-react.alkemy.org', {
        email: values.email,
        password: values.password,
      });
      console.log(response.data.token);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      console.error(error);
      dispatch({
        type: LOGIN_ERROR
      });
    }
  };

  const userAutenticated = () => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch({
        type: USER_AUTHENTICATED,
      });
    } else {
      dispatch({
        type: USER_LOGOUT,
      });
    }
  };

  const userLogout = () =>{
    dispatch({
      type:USER_LOGOUT
    })
  }

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        autenticated: state.autenticated,
        loginUser,
        userAutenticated,
        userLogout
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
