import React from "react";
import { Link } from 'react-router-dom';
import Header from './Header';

const ReactComponent = () => {
  
  return (
    <div className="inner-page">
      <Header />
      <h2>What is React?</h2>
      <p>This is React</p>
      <p>A Javascript library with a bunch of features that allow you to build simple and complex User Interfaces</p>
      <p>These features include:</p>
      <ul style={ { textAlign: 'left' } }>
        <li>Embedding HTML in JavaScript with JSX</li>
        <li>Class based or functional components that work independently but can be linked together to create single page applications</li>
        <li>State, which as Thinkster.io put it:
          "The heart of every React component is its “state”, an object that determines how that component renders & behaves. In other words, “state” is what allows you to create components that are dynamic and interactive."
        </li>
        <li>Components that update (or re-render) based on state and prop changes</li>
      </ul>
      <p><Link to="/JSX-is-cool" >JSX is cool</Link></p>
    </div>
  );
};

export default ReactComponent;
