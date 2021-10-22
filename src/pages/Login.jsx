import React, { useContext, useEffect } from "react";

import MainLayout from "../components/layout/MainLayout";

import { Col, Row, Container } from "react-bootstrap";

import { Formik, Form, Field, ErrorMessage } from "formik";

import AuthContext from "../context/auth/authContext";

const Login = (props) => {

  const authContext = useContext(AuthContext)
  const {autenticated, loginUser} = authContext;

  useEffect(() => {
    if(autenticated){
      props.history.push('/team')
      //console.log("Esta autenticado")
    }
  }, [autenticated, props.history])

  const validateForm = (values) => {
    let errores = {};
    if (!values.email) {
      errores.email = "Escribe tu correo";
    }

    if (!values.password) {
      errores.password = "Escribe tu contraseña";
    }
    return errores;
  };

  return (
    <MainLayout>
      <Container>
        <h1 className="text-center p-3">Iniciar Sesión</h1>
        <Row className="justify-content-center align-items-center ">
          <Col md={4}>
            <Formik
              initialValues={{
                email: "",
                password:""
              }}
              validate={(values) => validateForm(values)}
              onSubmit={(values) => loginUser(values)}
            >
              {({ errors }) => (
                <Form>
                  <div className="form-group mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <Field
                      type="text"
                      id="email"
                      name="email"
                      placeholder="correo@correo.com"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="email"
                      component={() => (
                        <p className="text-danger   p-2"> {errors.email} </p>
                      )}
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <Field
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Escribe tu contraseña"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="password"
                      component={() => (
                        <p className="text-danger   p-2"> {errors.password} </p>
                      )}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Iniciar Sesión
                  </button>
                </Form>
              )}
            </Formik>
          </Col>
        </Row>
      </Container>
    </MainLayout>
  );
};

export default Login;
