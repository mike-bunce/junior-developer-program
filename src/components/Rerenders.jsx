import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Header from './Header';
import Band from './Band';

const ES6 = () => {
  const [isMyFavouriteBand, setIsMyFavouriteBand] = useState();
  const [bandName, setBandName] = useState();
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
      setIsMyFavouriteBand(bandName === band.name)
    }
  }
  const handleInputChange = (event) => {
    event.persist()
    setBandName(event.target.value)
  }
  
  return (
    <div className="inner-page">
      <Header />
      <div className="two-columns">
        <h1>Avoid unnecessary re-renders</h1>
        <p>Remove event listeners after a component has mounted</p>
        <p>React components re-render every time a state variable changes, ask yourself:
          - do I need state to update?
        </p>
        <p>Check logs of state variables to see if they are updating unnecessarily due to re-renders</p>
        <p>Be mindful of React lifecycles, and when to trigger a re-render</p>
        <p>Further reading: <a href="https://lucybain.com/blog/2017/react-js-when-to-rerender/">"React JS - When To Rerender"</a></p>
        <p><Link to="/ES6">Previous</Link></p>
        <p><Link to="/UseReactState">Next</Link></p>   
      </div>
      <div className="two-columns">
        <img src="./hammy-refresh.gif" alt="" className="small-image border-image" />
      </div>
    </div>
  );
};

export default ES6;
