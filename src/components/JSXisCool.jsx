import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import Header from './Header';

const JSXisCool = (props) => {
  const { isJSXCool } = props;
  const handleClick = () => {
    setIsCool(!isCool)
  }
  const [isCool, setIsCool] = useState(isJSXCool);
  return (
    <div>
      <Header />
      <h2>Is JSX cool?</h2>
      {isCool && (
          <div>
            <h2>Yes, JSX is cool. Look at how I can embed HTML in my javascript</h2>
            <img className="smaller" src="/cool-cat.jpg" alt="JSX - so cool" />
          </div>
      )}
      <button 
        style={ {padding: '20px', margin: '20px', fontSize: '18px' } } 
        onClick={handleClick}>
          {isCool ? "No, JSX is not cool" : "JSX is cool"}
      </button>
      {isCool === false && <p>Not everyone can be JSX</p>}
      {isCool === false && (<div><img alt="JSX not cool?" src="/grumpy-cat.jpg" />
        <p>But seriously though, JSX is a syntax extension to JavaScript, so yes it's very cool.</p>
        <p>Fun fact, JavaScript is used by 95.8% of websites as a client-side programming language.</p>
        <p>By embedding HTML in Javascript, you are able to take advantage of everything that Javascript offers, directly in your HTML.</p>
        <p>Let's look under the hood...</p>
        <p><Link to="/single-page-applications" >Single Page Applications</Link></p></div>)
      }
    </div>
  );
};

JSXisCool.propTypes = {
    isJSXCool: PropTypes.bool
};

JSXisCool.defaultProps = {
  isJSXCool: undefined 
};

export default JSXisCool;
