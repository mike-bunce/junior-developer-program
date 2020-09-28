import React from "react"
import { Snake, SnakeSquare, Container } from './styles'

const Snakathon = () => {
  
  return (
    <div className="front-page">
      <h1>Snakathon</h1>
      <Container>
        <Snake><SnakeSquare /><SnakeSquare /><SnakeSquare /></Snake>
      </Container>
    </div>
  );
};

export default Snakathon;
