import React from "react";
import { Link } from 'react-router-dom';
import Header from './Header';

const DRY2 = () => {
  
  return (
    <div className="inner-page">
      <Header />
      <div className="two-columns">
      <h1>Keep DRY and carry on coding</h1>
        <p>Any time you are repeating code within a component, or even within a function,
          this is an opportunity to extract that code and place it in a function.
        </p>
        <p><Link to="/DRY">Previous</Link></p>
        <p><Link to="/Less">Next</Link></p>
      </div>
      <div className="two-columns">
        <img className="inner-image" alt="" src="./wet-dog.jpeg" />
      </div>
      
    </div>
  );
};

export default DRY2;