import React from "react";
import { Link } from 'react-router-dom';
import Header from './Header';

const Pure = () => {
  
  return (
    <div className="inner-page">
      <Header />
      
      <div className="two-columns">
        <img className="inner-image" alt="100% pure juice" src="./pure-juice.jpeg" />
      </div>
      <div className="two-columns">
      <h1>Stay pure!</h1>
        <p>Pure functions are functions that always have the same output when given the same inputs.</p>
        <p>They do not have side effects.</p>
        <p>They are predictable.</p>
        <p>They are stable.</p>
        <p>Writing your functions as pure functions will help ensure code reliability.</p>
        <p>This is not a hard and fast rule, there are times when you may need your functions to have side effects, 
          or to have a different output when given the same input.</p>
        <p>Use "impure" functions with discretion.</p>
        <p><Link to="/Functional">Previous</Link></p>
      <p><Link to="/ES6">Next</Link></p>
      </div>
      
    </div>
  );
};

export default Pure;
