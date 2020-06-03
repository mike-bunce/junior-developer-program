import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from './Header';

const ReactAppsAtTELUS = () => {
  return (
    <div className="inner-page">
      <Header />
      <h2>How are React Apps set up at TELUS?</h2>
      <p>React Apps at TELUS are created by Isomorphic Starter Kits</p>
      <p>Isomorphic means the code runs on both the server and the client</p>
      <p>Pages that update on the client side can load a lot faster than expensive server requests</p>
      <p>Having a component also render on the server side aids with things like Search Engine Optimization</p>
      <p>Read more here: <a href="https://www.lullabot.com/articles/what-is-an-isomorphic-application">https://www.lullabot.com/articles/what-is-an-isomorphic-application</a></p>
      <p>Our applications run Node.js on the server-side</p>
      <p>On the client side they are compiled using webpack. Webpack converts all the JSX, Styled Components (CSS), NPM packages,
        in to code that your browser can interpret. It minifies the code making it as compact and efficient as possible.
      </p>
      <p><a href="https://www.freecodecamp.org/news/what-exactly-is-client-side-rendering-and-hows-it-different-from-server-side-rendering-bd5c786b340d/">More on client vs server side rendering</a></p>
      <p><Link to="/virtual-dom" >The virtual DOM</Link></p>
    </div>
  );
};

export default ReactAppsAtTELUS;
