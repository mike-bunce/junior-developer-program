import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Header from './Header';

const CodeChallenge = () => {
  return (
    <div className="inner-page">
      <Header />
      <div className="two-columns">
        <h1>Code Challenge!</h1>
        <p>Check out this github repo: git clone "git@github.com:mike-bunce/junior-developer-program.git"</p>
        <p>Check out the branch "react-best-practices"</p>
        <p>Go to the JSX component "JunkCode.jsx"</p>
        <p>Refactor this component based on the principles outlined in today's session!</p>
        <p><Link to="/Semantics">Previous</Link></p>
      </div>
      <div className="two-columns">
        <img src="./countdow.gif" alt="" className="wide-image" />
      </div>
    </div>
    
  );
};

export default CodeChallenge;
