import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from './Header';

const Tutorial = () => {
  return (
    <div className="inner-page">
      <Header />
      <h2>Coding challenge</h2>
      <p>Create a simple React-based single page application</p>
      <p>Using the following tools:</p>
      <ul>
          <li>Create React App (npx create-react-app name-of-app)</li>
          <li>React Router DOM (npm install react-router-dom)</li>
          <li>You are free to use CSS as much as you like</li>
          <li>Your HTML will be included in your React components as JSX</li>
      </ul>
      <p>Your application must:</p>
      <ul>
          <li>Contain at least three pages (or "views")</li>
          <li>Each page must have at least one dynamic piece of content that responds to state changes
              <li>Use useState React hook , or if you're more comfortable, a class based component</li>
          </li>          
      </ul>
      <p>Clone github.com/mike-bunce/junior-developer-program for reference</p>
      <ul class="navigation">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/JSX-is-cool">JSX is cool</Link></li>
          <li><Link to="/single-page-applications">Single Page Applications</Link></li>
          <li><Link to="/react-apps-at-telus">React Apps at TELUS</Link></li>
          <li><Link to="/virutal-dom">The Virtual DOM</Link></li>
          <li><Link to="/Components">An Interview with a React component</Link></li>
          <li><Link to="/Lifecycle">React Lifecycles</Link></li>
      </ul>
    </div>
  );
};

export default Tutorial;
