import React, {useState} from "react"
import { Snake, SnakeSquare, Container } from './styles'

const Snakathon = () => {
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
    <div className="front-page">
      <h1>Snakathon</h1>
      <Container>
        <Snake>{snake.map((item) => {return (<React.Fragment>
        <SnakeSquare item={item} />
        <SnakeSquare item={item} />
        <SnakeSquare item={item} />
      </React.Fragment>)})}</Snake>
      </Container>
      <button onClick={handleSnakeGrow}>Extend Snake</button>
    </div>
  );
};

export default Snakathon;
