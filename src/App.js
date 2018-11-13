import React from "react";
import "./App.css";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Router } from "@reach/router";
import Grid from "@material-ui/core/Grid";

import HomePage from "./components/homepage";
import About from "./components/about";
import Approach from "./components/approach";
import Programs from "./components/programs";

import withRoot from "./components/withRoot";

const Contact = React.lazy(() => import("./components/contact"));

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <React.Suspense
          fallback={
            <Grid container justify="center" style={{ marginTop: 30 }}>
              <CircularProgress />
            </Grid>
          }
        >
          <Router>
            <HomePage path="/" />
            <About path="about" />
            <Approach path="approach" />
            <Programs path="programs" />
            <Contact path="contact" />
          </Router>
        </React.Suspense>
      </div>
    );
  }
}

export default withRoot(App);
