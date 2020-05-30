import React from 'react';
import JSXisCool from './components/JSXisCool'
import ReactComponent from './components/ReactComponent'
import SinglePageApplications from './components/SinglePageApplications'
import ReactAppsAtTELUS from './components/ReactAppsAtTELUS'
import VirtualDOM from './components/VirtualDOM'
import Components from './components/Components'
import Tutorial from './components/Tutorial'
import Lifecycles from './components/Lifecycles'
import './App.css'
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Route exact path="/" component={ReactComponent} />
          <Route exact path="/JSX-is-cool" component={JSXisCool} />
          <Route exact path="/single-page-applications" component={SinglePageApplications} />
          <Route exact path="/react-apps-at-telus" component={ReactAppsAtTELUS} />
          <Route exact path="/virtual-dom" component={VirtualDOM} />
          <Route exact path="/components" component={Components} />
          <Route exact path="/lifecycles" component={Lifecycles} />
          <Route exact path="/tutorial" component={Tutorial} />
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
