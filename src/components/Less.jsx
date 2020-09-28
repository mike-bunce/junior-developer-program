import React from "react";
import { Link } from 'react-router-dom';
import Header from './Header';

const Less = () => {
  
  return (
    <div className="inner-page">
      <Header />
      <div className="two-columns">
      <h1>Less is best</h1>
        <p>Less may not be more, but it is less, and less is best.</p>
        <p>When writing code ask yourself "can I write this in a more concise way?"</p>
        <p>As a rule of thumb, if you can write your expression or function in a way that uses less code, this is usually the best approach.</p>
        <p>Exceptions:
          <ul>
            <li>Make sure your code is still legible (don't name a variable "y6" for example).</li>
            <li>If your code takes longer to compute in its abbreviated form and has an impact on performance,
              then use the longhand instead.
            </li>
          </ul>
        </p>
        <p><Link to="/DRY2">Previous</Link></p>
      <p><Link to="/Functional">Next</Link></p>
      </div>
      <div className="two-columns">
        <img className="less-animation" alt="" src="./bg.gif" />
      </div>
      
    </div>
  );
};

export default Less;