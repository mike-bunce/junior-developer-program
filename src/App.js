import React from 'react';
import Snakathon from './components/Snakathon'
import './App.css'
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Route exact path="/" component={Snakathon} />
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
