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
