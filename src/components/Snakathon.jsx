import React, {useState} from "react"
import { Snake, SnakeSquare, Container } from './styles'

const Snakathon = () => {
  const [snakeSquares, setSnakeSquares] = useState({
    1: {topStart: 0, topEnd: 15, leftStart:0, leftEnd: 0},
    2: {topStart: 15, topEnd: 30, leftStart:0, leftEnd: 0},
    3: {topStart: 30, topEnd: 30, leftStart:0, leftEnd: 15}
  });

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
      repositionSnake();
    }
  };

  const repositionSnake = () => {
    Object.keys(snakeSquares).forEach((index) => {
      index = parseInt(index);
      // for anything other than head
      if(snakeSquares[index+1]) {
        Object.keys(snakeSquares[index]).forEach((_key) => {
          snakeSquares[index][_key] = snakeSquares[index+1][_key];
        });
      } else { // for head of the snake
        snakeSquares[index].topStart = snakeSquares[index].topEnd;
        snakeSquares[index].leftStart = snakeSquares[index].leftEnd;
        switch (currDir) {
          case DIRECTIONS.LEFT:
            snakeSquares[index].leftEnd -= 17;
            break;
          case DIRECTIONS.RIGHT:
            snakeSquares[index].leftEnd += 17;
            break;
          case DIRECTIONS.UP:
            snakeSquares[index].topEnd -= 17;
            break;
          case DIRECTIONS.DOWN:
            snakeSquares[index].topEnd += 17;
            break;
          default:
            break;
        }
      }
    });
    setSnakeSquares(snakeSquares);
    console.log('end', snakeSquares);
  }

  const [lengthOfSnake, setLengthOfSnake] = useState(3)
  const [firstSquare, setFirstSquare] = useState({topEnd: 0, leftEnd: 0})
  const [snake, setSnake] = useState(['snake']);
  const [previousSquare, setPreviousSquare] = useState({topEnd: 0, leftEnd: 0})
  
  
  setInterval(() => {
    setPreviousSquare({...previousSquare, topEnd: firstSquare.topEnd})
    setFirstSquare({...firstSquare, topEnd: firstSquare.topEnd + 19})
  }, 600);
  

  const handleSnakeGrow = (e) => {
    setLengthOfSnake(lengthOfSnake + 3)
    const snakeArray = snake;
    snakeArray.push('snake');
    setSnake(snakeArray);
  }
  console.log('firstSquare.topEnd', firstSquare.topEnd)
  console.log('previousSquare.topEnd', previousSquare.topEnd)
  return (
    <div className="front-page" onKeyDown={handleKeyDown} tabIndex="0">
      <h1>Snakathon</h1>
      <Container>
          {snake.map(() => {return (<React.Fragment>
            <SnakeSquare index="1" topStart={previousSquare.topEnd.toString()} topEnd={firstSquare.topEnd.toString()} leftStart={0} leftEnd={0} />
            <SnakeSquare index="2" topStart={19} topEnd={38} leftStart={0} leftEnd={0} />
            <SnakeSquare index="3" topStart={38} topEnd={38} leftStart={0} leftEnd={19} />
      </React.Fragment>)})}
      </Container>
      <button onClick={handleSnakeGrow}>Extend Snake</button>
    </div>
  );
};

export default Snakathon;
