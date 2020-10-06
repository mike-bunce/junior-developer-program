import React from "react"
import { Snake, SnakeSquare, Container } from './styles'

const Snakathon = () => {
  
  return (
    <div className="front-page">
      <h1>Snakathon</h1>
      <Container>
        <SnakeSquare index="1" topStart="0px" topEnd="15px" leftStart="0px" leftEnd="0px" />
        <SnakeSquare index="2" topStart="15px" topEnd="30px" leftStart="0px" leftEnd="0px" />
        <SnakeSquare index="3" topStart="30px" topEnd="30px" leftStart="0px" leftEnd="15px" />
      </Container>
    </div>
  );
};

export default Snakathon;
