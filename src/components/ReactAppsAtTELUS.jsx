import React, { useState } from "react";
import { Link } from "react-router-dom";

const ReactAppsAtTELUS = () => {
  return (
    <div className="inner-page">
      <h2>How are React Apps set up at TELUS?</h2>
      <p>React Apps at TELUS are created by Isomorphic Starter Kits</p>
      <p>Isomorphic means the code runs on both the server and the client</p>
      <p>Pages that update on the client side can load a lot faster than expensive server requests</p>
      <p>Read more here: <a href="https://www.lullabot.com/articles/what-is-an-isomorphic-application">https://www.lullabot.com/articles/what-is-an-isomorphic-application</a></p>
      <p>Our applications run Node.js on the server-side</p>
      <p>On the client side they are compiled using webpack</p>
      <p><Link to="/virtual-dom" >The virtual DOM</Link></p>
    </div>
  );
};

export default ReactAppsAtTELUS;
