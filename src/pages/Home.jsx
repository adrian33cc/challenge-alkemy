import React, { useEffect, useState } from "react";

//React-bootstrap
import { Container, Row, Col, Card } from "react-bootstrap";

//Componentes propios
import MainLayout from "../components/layout/MainLayout";
import CardHero from "../components/heroes/CardHeroe";
import {getHeroe} from "../config/api";

const Home = () => {
  const initialState = [
    {id: 1},
    {id: 2},
    {id: 3},
  ]
  const [heroes, setHeroes] = useState(initialState);
  useEffect(async () => {
    heroes.map((heroe) =>{ getHeroe(heroe.id)})
  },[])
  console.log(heroes)
  return (
    <MainLayout>
      <Container>
        <h1 className="text-center">Tu equipo</h1>
        <Row>
          <Col md={3}>
            <h1>Hola</h1>
          </Col>
        </Row>
      </Container>
    </MainLayout>
  );
};

export default Home;
