import styled, { keyframes } from 'styled-components'

const Snake = styled.div`
    display: inline-block;
    padding: 5px;
    background-color: red;
    position: absolute;
    animation: snake 0.5s 0s both;
    @keyframes snake {
        0% { top: 0; }
        100% { top: 15px }
    }
`

const SnakeSquare = styled.div`
    border: 2px solid #ffffff;
    width: 15px;
    height: 15px;
    background-color: green;
    position: absolute;
    animation: snakesquare${props => props.index} 0.5s 0s both;
    @keyframes snakesquare${props => props.index} {
        0% { top: ${props => props.topStart}px; left: ${props => props.leftStart}px; }
        100% { top: ${props => props.topEnd}px; left: ${props => props.leftEnd}px; }
    }
`
const Container = styled.div`
    width: 495px;
    height: 300px;
    display: block;
    position: relative;
    background-color: cornflowerblue
`



export { Snake, SnakeSquare, Container }