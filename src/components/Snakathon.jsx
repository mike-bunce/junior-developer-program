import React, {useState} from "react"
import { Snake, SnakeSquare, Container } from './styles'

const Snakathon = () => {
  const snakeSquares = {
    1: {topStart: 0, topEnd: 15, leftStart:0, leftEnd: 0},
    2: {topStart: 15, topEnd: 30, leftStart:0, leftEnd: 0},
    3: {topStart: 30, topEnd: 30, leftStart:0, leftEnd: 15}
  };

  const DIRECTIONS = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === DIRECTIONS.LEFT) { //left
      console.log('left');
    } else if (e.keyCode === DIRECTIONS.UP) { // up
      console.log('up');
    } else if (e.keyCode === DIRECTIONS.RIGHT) { // right
      console.log('right');
    } else if (e.keyCode === DIRECTIONS.DOWN) { // down
      console.log('down');
    }
    if ([DIRECTIONS.LEFT, DIRECTIONS.UP, DIRECTIONS.RIGHT, DIRECTIONS.DOWN].includes(e.keyCode)) {
      console.log('yayayyayaya');
      return e.keyCode;
    }
  };

  const repositionSnake = (direction) => {
    Object.keys(snakeSquares).forEach((index) => {
      if(snakeSquares[index+1]) {
        snakeSquares[index] = snakeSquares[index+1];
      } else {
        console.log('compute head position using direction');
      }
    });
  }

  const [lengthOfSnake, setLengthOfSnake] = useState(3)
  const [firstSquare, setFirstSquare] = useState({topEnd: 0, leftEnd: 0})
  const [snake, setSnake] = useState(['snake']);
  const handleSnakeGrow = (e) => {
    setLengthOfSnake(lengthOfSnake + 3)
    const snakeArray = snake;
    snakeArray.push('snake');
    setSnake(snakeArray);
  }
  
  return (
    <div className="front-page" onKeyDown={handleKeyDown} tabIndex="0">
      <h1>Snakathon</h1>
      <Container>
          {snake.map(() => {return (<React.Fragment>
            <SnakeSquare index="1" topStart={} topEnd={firstSquare.topEnd} leftStart="0px" leftEnd="0px" />
            <SnakeSquare index="2" topStart="15px" topEnd="30px" leftStart="0px" leftEnd="0px" />
            <SnakeSquare index="3" topStart="30px" topEnd="30px" leftStart="0px" leftEnd="15px" />
      </React.Fragment>)})}
      </Container>
      <button onClick={handleSnakeGrow}>Extend Snake</button>
    </div>
  );
};

export default Snakathon;
