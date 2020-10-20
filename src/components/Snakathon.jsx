import React, {useState, useRef} from "react"
import { SnakeSquare, Container } from './styles'

const Snakathon = () => {
  const [snakeSquares, setSnakeSquares] = useState({
    1: {topStart: 0, topEnd: 15, leftStart:0, leftEnd: 0},
    2: {topStart: 15, topEnd: 30, leftStart:0, leftEnd: 0},
    3: {topStart: 30, topEnd: 30, leftStart:0, leftEnd: 15}
  });

  const [circuitBreaker, setCircuitBreaker] = useState(false); 

  const firstSquare = useRef(null);

  const DIRECTIONS = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40
  };

  let currDir = DIRECTIONS.DOWN;

  const handleKeyDown = (e) => {
    if (Object.values(DIRECTIONS).includes(e.keyCode)) {
      console.log('yayayyayaya', e.keyCode);
      currDir = e.keyCode;
      repositionSnake(true);
    }
  };

  const repositionSnake = (circuitBreak) => {
    console.log('circuitBreak', circuitBreak);
    setCircuitBreaker(circuitBreak);
    const snakeSquaresObject = Object.assign({}, snakeSquares);
    Object.keys(snakeSquaresObject).forEach((index) => {
      index = parseInt(index);
      // for anything other than head
      if(snakeSquaresObject[index+1]) {
        Object.keys(snakeSquaresObject[index]).forEach((_key) => {
          snakeSquaresObject[index][_key] = snakeSquaresObject[index+1][_key];
        });
      } else { // for head of the snake
        snakeSquaresObject[index].topStart = snakeSquaresObject[index].topEnd;
        snakeSquaresObject[index].leftStart = snakeSquaresObject[index].leftEnd;
        switch (currDir) {
          case DIRECTIONS.LEFT:
            snakeSquaresObject[index].leftEnd -= 17;
            break;
          case DIRECTIONS.RIGHT:
            snakeSquaresObject[index].leftEnd += 17;
            break;
          case DIRECTIONS.UP:
            snakeSquaresObject[index].topEnd -= 17;
            break;
          case DIRECTIONS.DOWN:
            snakeSquaresObject[index].topEnd += 17;
            break;
          default:
            break;
        }
      }
    });
    setSnakeSquares(snakeSquaresObject);
    setCircuitBreaker(false);
    console.log('snakeSquares', snakeSquares);
  }

  const [lengthOfSnake, setLengthOfSnake] = useState(3)
  const [snake, setSnake] = useState(['snake']);
  
  
  setInterval(() => {
    if (circuitBreaker === false) {
      repositionSnake(false);
    }
  }, 2000);


  const handleSnakeGrow = (e) => {
    setLengthOfSnake(lengthOfSnake + 3)
    const snakeArray = snake;
    snakeArray.push('snake');
    setSnake(snakeArray);
  }

  if (firstSquare !== null) {
    console.log('firstSquare', firstSquare)
    if (firstSquare.current) {
      firstSquare.current.focus();
    }
  }

  return (
    <div className="front-page">
      <h1>Snakathon</h1>
      <Container>
          {snake.map(() => {return (<React.Fragment>
            <SnakeSquare index="1" topStart={snakeSquares['1'].topStart.toString()} topEnd={snakeSquares['1'].topEnd.toString()} leftStart={snakeSquares['1'].leftStart.toString()} leftEnd={snakeSquares['1'].leftEnd.toString()} />
            <SnakeSquare index="3" topStart={snakeSquares['2'].topStart.toString()} topEnd={snakeSquares['2'].topEnd.toString()} leftStart={snakeSquares['2'].leftStart.toString()} leftEnd={snakeSquares['2'].leftEnd.toString()} />
            <SnakeSquare tabIndex="0" ref={firstSquare} onKeyDown={handleKeyDown} index="2" topStart={snakeSquares['3'].topStart.toString()} topEnd={snakeSquares['3'].topEnd.toString()} leftStart={snakeSquares['3'].leftStart.toString()} leftEnd={snakeSquares['3'].leftEnd.toString()} />
      </React.Fragment>)})}
      </Container>
      <button onClick={handleSnakeGrow}>Extend Snake</button>
    </div>
  );
};

export default Snakathon;
