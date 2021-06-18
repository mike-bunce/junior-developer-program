import React from "react";
import { Link } from "react-router-dom";
import Header from './Header';

const LifeCycles = () => {
  return (
    <div className="inner-page">
      <Header />
      <h2>React Lifecycle</h2>
      <p>What is it?</p>
      <p>A React lifecycle is the various stages in a React component's process. 
        <br />- What happens in a component before it renders, and after it renders, and the various stages in between.
      </p>
      <p>In older, Class-based components, you have access to lifecycle methods, these include:
        <br />-componentWillMount
        <br />-componentDidMount
        <br />-componentWillReceiveProps
        <br />-shouldComponentUpdate
        <br />-componentWillUpdate
        <br />-componentDidUpdate
      </p>
      <p>What do we mean by mount? Mount is another way of saying the component has rendered, which means its done what it needs to do to present its current state to the DOM, 
        and can render in the browser
      </p>
      <p>Lifecycles are really useful for implementing code that needs to run at a particular point,
        a good example is listeners - listeners need to fire when the component mounts, and then removed
        when a component unmounts - this helps with page performance and making sure code is constantly firing
        when it doesn't need to be.
      </p>
      <p>Functional components, such as components that use React Hooks have lifecycles too but there are different ways to achieve the same thing, but rather than having 
        explicit methods, there are different ways to configure your hooks to take advantage of lifecycles, such as with useEffect, if you pass in an empty array as the second argument, 
        it will execute once when the component mounted
      </p>
      <p>You'll learn more about React lifecycles, class-based components and React hooks in later JDP sessions, but these are the basics
        that will help you understand a little more about your React application.
      </p>
      <img src="/react-lifecycle.png" alt="" className="lifecycle-image" />

      <p><a href="https://learn.co/lessons/react-component-mounting-and-unmounting">Further reading</a></p>
      <p><Link to="/tutorial">Tutorial</Link></p>
    </div>
  );
};

export default LifeCycles;
