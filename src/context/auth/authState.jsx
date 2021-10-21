import React, { useReducer } from "react";
import { LOGIN_SUCCESS, LOGIN_ERROR } from "../types";
import AuthContext from "./AuthContext";
import AuthReducer from "./authReducer";
import axios from "axios";

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    autenticated:null,
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const loginUser = async (values) => {
    
    try {
      const response = await axios.post(`http://challenge-react.alkemy.org`, {
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
        type: LOGIN_ERROR,
        payload: response.data,
      });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        autenticated: state.autenticated,
        loginUser,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
