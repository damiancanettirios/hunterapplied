import React from "react";
import "./App.css";
import { Router } from "@reach/router";
import HomePage from "./components/homepage";
import About from "./components/about";
import Approach from "./components/approach";
import Programs from "./components/programs";
import Contact from "./components/contact";

class App extends React.Component {
  render() {
    return (
      <Router>
        <HomePage path="/" />
        <About path="about" />
        <Approach path="approach" />
        <Programs path="programs" />
        <Contact path="contact" />
      </Router>
    );
  }
}

export default App;
