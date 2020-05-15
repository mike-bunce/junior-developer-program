import React, { useState } from "react";
import { Link } from "react-router-dom";

const SinglePageApplications = () => {
  return (
    <div  className="inner-page">
        <h2>What is a Single Page Application?</h2>
        <p>A Single Page Application (SPA), is an application that loads all the HTML and resources up front, and doesn't require a page reload when navigating to new pages</p>
        <p>React applications can be SPAs</p>
        <p>They usually have a routing mechanism, such as provided by React Router</p>
        <p>They still:</p>
        <ul>
          <li>Update the URL in the browser address bar</li>
          <li>Make use of the browser's back and forward buttons</li>
          <li>Navigate to a particular view (aka deep link) directly using the appropriate URL</li>
        </ul>
        <p><Link to="/react-apps-at-telus" >React Apps at TELUS</Link></p>
    </div>
  );
};

export default SinglePageApplications;
