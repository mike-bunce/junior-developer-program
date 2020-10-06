import React, {useState} from "react"
import { Snake, SnakeSquare, Container } from './styles'

const Snakathon = () => {
  const DIRECTIONS = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40
  };

  const handleKeyDown = function(e) {
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

  const [lengthOfSnake, setLengthOfSnake] = useState(3)
  const [snake, setSnake] = useState(['snake']);
  const handleSnakeGrow = (e) => {
    setLengthOfSnake(lengthOfSnake + 3)
    const snakeArray = snake;
    snakeArray.push('snake');
    setSnake(snakeArray);
    // extendedSnake()
  }
  // const extendedSnake = () => {
  //   snake.map((item) => {
  //   return (
  //     <React.Fragment>
  //       <SnakeSquare item={item} />
  //       <SnakeSquare item={item} />
  //       <SnakeSquare item={item} />
  //     </React.Fragment>
  //     )
  //   })
  // }
  console.log('lengthOfSnake', lengthOfSnake)
  console.log('snake', snake)
  return (
    <div className="front-page" onKeyDown={handleKeyDown} tabIndex="0">
      <h1>Snakathon</h1>
      <Container>
          {snake.map(() => {return (<React.Fragment>
          <SnakeSquare index="1" topStart="0px" topEnd="15px" leftStart="0px" leftEnd="0px" />
          <SnakeSquare index="2" topStart="15px" topEnd="30px" leftStart="0px" leftEnd="0px" />
          <SnakeSquare index="3" topStart="30px" topEnd="30px" leftStart="0px" leftEnd="15px" />
      </React.Fragment>)})}
      </Container>
      <button onClick={handleSnakeGrow}>Extend Snake</button>
    </div>
  );
};

export default Snakathon;
