import React, { useEffect, useState } from "react";

//React-bootstrap
import { Container, Row, Col, Card } from "react-bootstrap";

//Componentes propios
import MainLayout from "../components/layout/MainLayout";
import CardHero from "../components/heroes/CardHeroe";

const Home = () => {
  //states
  const initialState= {
    name:'',
    image:'',
  }
  const [heroe, setHeroe] = useState(initialState);


  return (
    <MainLayout>
      <Container>
        <h1 className="text-center">Tu equipo</h1>
        <Row>
          <Col md={3}>
            
            <CardHero heroe={heroe} />
          </Col>
        </Row>
      </Container>
    </MainLayout>
  );
};

export default Home;
