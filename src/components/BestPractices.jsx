import React from "react";
import { Link } from 'react-router-dom';
import Header from './Header';

const BestPractices = () => {
  
  return (
    <div className="front-page">
      <Header />
      <h1>React Best Practices 1</h1>
      <img src="./squares.gif" className="front-image" alt="" />
      <Link to="/DRY">Begin</Link>
    </div>
  );
};

export default BestPractices;
