import React from "react";
import { Link } from 'react-router-dom';
import Header from './Header';

const Functional = () => {
  
  return (
    <div className="inner-page">
      <Header />
      <div className="two-columns">
        <img src="./wd40.jpeg" alt="" className="wide-image border-image" />
      </div>
      <div className="two-columns">
        <h1>Stay functional!</h1>
        <p>In React, it really is best to use functional components over class based components.</p>
        <p>Functional components perform better than class based components, so your pages will load faster.</p>
        <p>Class based components are no longer needed - thank you React hooks!</p>
        <p>Previously we could only use state inside a class based component.</p>
        <hr />
        <p>As an aside, classes originate from Object Oriented Programming (OOP).</p>
        <p>OOP tends to lead to issues where you have layers of dependancies, you make a change at the base layer and it 
          impacts all the extensions and breaks code with unintended consequences.
        </p>
        <p><Link to="/Less">Previous</Link></p>
        <p><Link to="/Pure">Next</Link></p>  
      </div>
    </div>
  );
};

export default Functional;
