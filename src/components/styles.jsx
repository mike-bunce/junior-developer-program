import styled, { keyframes } from 'styled-components'

const Snake = styled.div`
    display: inline-block;
    padding: 5px;
    background-color: red;
    position: absolute;
    animation: snake 0.3s 0s both;
    @keyframes snake {
        0% { top: 0 }
        100% { top: 15px }
    }
`
// const snakesquare = keyframes`
//     0% {
//         top: 0;
//         right: 0;
//     }

//     100% {
//         top: 15px;
//         right: 0px;
//     }
// `
const SnakeSquare = styled.div`
    border: 2px solid #ffffff;
    width: 15px;
    height: 15px;
    background-color: green;
    position: abolute;
    animation: snakesquare 0.3s 0s both;
    @keyframes snakesquare {
        0% { top: 0 }
        100% { top: 15px }
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