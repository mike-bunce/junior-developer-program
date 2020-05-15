import React from 'react';
import JSXisCool from './components/JSXisCool'
import ReactComponent from './components/ReactComponent'
import SinglePageApplications from './components/SinglePageApplications'
import ReactAppsAtTELUS from './components/ReactAppsAtTELUS'
import VirtualDOM from './components/VirtualDOM'
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
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
