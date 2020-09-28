import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Header from './Header';

const Separation = () => {
  return (
    <div className="inner-page">
      <Header />
      <div className="two-columns">
      <h1>Separation of concerns</h1>
        <p>Style. Structure. Logic</p>
        <p>CSS, HTML, JavaScript.</p>
        <h4>CSS</h4>
        <p>Always use Styled Components for CSS (until the next great thing comes along)</p>
        <p>If something is purely presentational, don't try to do it with JavaScript, use CSS</p>
        <p>Animation is where this gets a little blurry, so use CSS where it makes sense.</p>
        <p>CSS is native to the browser and its computational time is very fast</p>
        <h4>HTML</h4>
        <p>HTML are the building blocks of your site. With JSX, HTML mixes substantially with JavaScript.
          Try to keep HTML / JSX together in one place. You can't go far wrong.
        </p>
        <p>These days with syntax highlighting and linting rules, a web developer's life is a
          lot simpler, and you won't spend long searching for that missing closed end tag
        </p>
        <h4>JavaScript</h4>
        <p>Anything that is dynamic, and involves logic is handled by Javascript. Even Styled Components 
          are built with JavaScript, and passing props to Styled Components is part of the beauty of 
          the modern development environment.
        </p>
        <p>For animations, anything that is slightly complex and requires animation chaining, you'll need 
          to use JavaScript, but you'll often rely on CSS for the actual rendering. JavaScript is really
          powerful, and there are many libraries out there (such as React Slick, React Spring) that do
          most of the heavy lifting for you.
        </p>
        <p><Link to="/Rerenders">Previous</Link></p>
        <p><Link to="/CodeChallenge">Next</Link></p>
      </div>
      <div className="two-columns">
        <img src="./snake2.gif" alt="" className="front-image" />
      </div>
    </div>
    
  );
};

export default Separation;