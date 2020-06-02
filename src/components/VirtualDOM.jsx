import React, { useState } from "react";
import { Link } from "react-router-dom";

const VirtualDOM = () => {
  const [isClicked, setIsClicked] = useState(false)
  const [showNext, setShowNext] = useState(false)
  const clickHandler = () => {
    setIsClicked(!isClicked)
  }
  const clickImage = () => {
    setShowNext(!showNext)
  }
  return (
    <div>
        {!isClicked && <h2 onClick={clickHandler}>What is the Virual DOM?</h2>}
        {isClicked && !showNext &&
          (<div><h2>The virtual DOM is pretty damn cool</h2>
            <p>The virtual DOM is what enables React to.... well, react so fast</p>
            <img
              onClick={clickImage} 
              alt="this is a metoer"
              src="/meteor.png" 
            />
          </div>)
        }
        {showNext &&
        (
          <div className="inner-page">
            <h2>Like seriously.... how fast is that?</h2>
            <p>But what is actually happening?</p>
            <p>Well, the DOM itself, or Document Object Model has to be updated of course.</p>
            <p>But updating the DOM is slow, especially when you're having to figure out how every piece of HTML, CSS, and dynamic pieces need to render</p>
            <p>The virtual DOM creates a virtual replica of the DOM, so it can then figure out what needs to be updated when components update. This way only the pieces of the DOM that need to change - change.</p>
            <p>Read more <a href="https://www.pluralsight.com/guides/virtual-dom-explained">here</a>!</p>
            <p><Link to="/Components">An interview with a React component</Link></p>
          </div>
        )}
    </div>
  );
};

export default VirtualDOM;
