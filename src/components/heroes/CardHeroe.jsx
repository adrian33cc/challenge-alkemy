import React from "react";
import { Card } from "react-bootstrap";

const CardHero = (props) => {
  
  const {name, image} = props.heroe

  return (
    <Card>
      <Card.Img src={image.url} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default CardHero;
