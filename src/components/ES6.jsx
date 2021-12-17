import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Header from './Header';
import Band from './Band';

const ES6 = () => {
  const [isMyFavouriteBand, setIsMyFavouriteBand] = useState();
  const [bandName, setBandName] = useState();
  const [bandNameValue, setBandNameValue] = useState();
  const band = {
    genre: 'indie',
    favouriteAlbum: 'In Rainbows',
    country: 'England',
    cool: true,
    name: 'radiohead',
    studioAlbums: 9,
    leadSinger: 'Thom Yorke',
    isMyFavouriteBand,
    bandName
  }
  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault()
      setBandName(bandNameValue)
      setIsMyFavouriteBand(bandNameValue === band.name)
    }
  }
  const handleInputChange = (event) => {
    // event.persist()
    setBandNameValue(event.target.value.toLowerCase())
  }
  
  return (
    <div className="inner-page">
      <Header />
      <div className="two-columns">
        <h1>Use ES6 / ES2020 / ES2021</h1>
          <p>ES6 makes writing code much more effective</p>
          <p>Use object and array destructuring to make access to props and other attributes much cleaner</p>
          <p>Use arrow functions, arrow functions are cleaner, tidier and have implicit returns.</p>
          <p>Use the spread operator, great for passing attributes of an object to a child element</p>
          <p>Another great tool in the React developer's toolkit, is the ternary operator.
            Use the ternary operator whenever you need to render JSX conditionally based on a true of false value.</p>
          <p>Use the "conditional operator" whenever you have JSX that should only render when a value is true, and nothing should render when 
            false.</p>
          <h3>What's my favourite band's name?</h3>
          <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              placeholder="Enter band's name" 
              onChange={handleInputChange}
              className="inputField"
              required 
            />
            <button className="button">Submit</button>
          </form>
          {isMyFavouriteBand !== undefined && <Band {...band} />}
          <hr />
          <p>Take a look under the hood at the React components on this page to see ES6 in action</p>
          <p><Link to="/Pure">Previous</Link></p>
          <p><Link to="/Rerenders">Next</Link></p>
      </div>
      <div className="two-columns">
        <img src="desctructuring.jpeg" alt="" className="wide-image border-image" />
      </div>
    </div>
  );
};

export default ES6;
