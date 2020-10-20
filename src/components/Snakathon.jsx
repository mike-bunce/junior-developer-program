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
