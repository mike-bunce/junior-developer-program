import React from 'react';
import BestPractices from './components/BestPractices'
import DRY from './components/DRY'
import DRY2 from './components/DRY2'
import Functional from './components/Functional'
import Pure from './components/Pure'
import Less from './components/Less'
import ES6 from './components/ES6'
import Rerenders from './components/Rerenders'
import UseReactState from './components/UseReactState'
import CodeChallenge from './components/CodeChallenge'
import Semantics from './components/Semantics'
import Separation from './components/SeparationOfConcerns'
import JunkCode from './components/JunkCode'
import JunkCodeSolution from './components/JunkCodeSolution'
import './App.css'
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Route exact path="/" component={BestPractices} />
          <Route exact path="/DRY" component={DRY} />
          <Route exact path="/DRY2" component={DRY2} />
          <Route exact path="/Less" component={Less} />
          <Route exact path="/Functional" component={Functional} />
          <Route exact path="/Pure" component={Pure} />
          <Route exact path="/ES6" component={ES6} />
          <Route exact path="/Rerenders" component={Rerenders} />
          <Route exact path="/UseReactState" component={UseReactState} />
          <Route exact path="/Semantics" component={Semantics} />
          <Route exact path="/Separation" component={Separation} />
          <Route exact path="/CodeChallenge" component={CodeChallenge} />
          <Route exact path="/JunkCode" component={JunkCode} />
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
