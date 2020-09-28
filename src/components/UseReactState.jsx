import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Header from './Header';

const UseReactState = () => {
  return (
    <div className="inner-page">
      <Header />
      <div className="two-columns">
        <h1>React State does the juggling for you</h1>
        <p>Use state to manage any variable or attribute that is going to change in your component</p>
        <p>State will help you manage the dynamic aspects of your component.</p>
        <p>Remember, "state" is immutable, and it can only be changed by useState (in React Hooks).
        </p>
        <p>Avoid using nested state if you can, as a change to a property will update the entire object. 
        ...but, if you need to update properties of an existing state object, you can do so using ES6 spread operator and destructoring.</p>
        <img src="./updating-nested-state.png" className="wide-image" alt="" />
        <p>Read more: <a href="https://dev.to/walecloud/updating-react-nested-state-properties-ga6">Updating nested state</a></p>
        <hr />
        <p>If your state is complex and getting hard to handle, useReducer will help you manage state.</p>
        <p><a href="https://www.wisdomgeek.com/development/web-development/react/understanding-the-usereducer-hook-in-react/">Read more about useReducer</a></p>
        <p><Link to="/Rerenders">Previous</Link></p>
        <p><Link to="/Semantics">Next</Link></p>
      </div>
      <div className="two-columns">
        <img src="./footup3.gif" alt="" className="inner-image" />
      </div>
    </div>
    
  );
};

export default UseReactState;
