import React from "react";
import { Link } from 'react-router-dom';
import Header from './Header';

const DRY = () => {
  
  return (
    <div className="repeat">
      <div className="inner-page">
        <Header />
        <h1>Don't repeat yourself</h1>
        <p>Don't repeat yourself</p>
        <p>Don't repeat yourself</p>
        <p>Don't repeat yourself</p>
        <p>Don't repeat yourself</p>
        <p>Don't repeat yourself</p>
        <p>Don't repeat yourself</p>
        <p>Don't repeat yourself</p>
        <p>No, seriously - don't repeat yourself</p>
      </div>
      <div>
      <p><Link to="/">Previous</Link>&nbsp;&nbsp;&nbsp;
      <Link to="/DRY2">Next</Link></p>
    </div>
  </div>
  );
};

export default DRY;