import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Header from './Header';

const Semantics = () => {
  return (
    <div className="inner-page">
      <Header />
      <div className="two-columns">
        <h1>Semantics </h1>
        <p>Semantics are really important in language, and just as important in writing code</p>
        <p>When writing React components, ask yourself, can I understand what is happening based on the names
          of the functions and the names of the variables?
        </p>
        <p>For boolean values, use variable names like "isBlue" or "hasBlueEyes".</p>
        <p>For function names, be succinct, but still describe what the function is doing, 
          remember: a function should only do one thing</p>
        <p><Link to="/UseReactState">Previous</Link></p>
        <p><Link to="/CodeChallenge">Next</Link></p>
      </div>
      <div className="two-columns">
        <img src="./jef-mallett-frazz-comic-strip-detention-for-tomato-semantics.jpg" alt="" className="comic-image" />
        <p className="center">From Jef Mallett's Frazz comic strip</p>
      </div>
    </div>
    
  );
};

export default Semantics;
