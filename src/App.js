import React from "react";
import "./App.css";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Router } from "@reach/router";
import Grid from "@material-ui/core/Grid";
import * as contentful from "contentful";

import HomePage from "./components/homepage";
import About from "./components/about";
import Approach from "./components/approach";
import Programs from "./components/programs";
import Blog from "./components/blog";
import BlogArticle from "./components/blogarticle";

import withRoot from "./components/withRoot";

const Contact = React.lazy(() => import("./components/contact"));

var client = contentful.createClient({
  space: "myva2oy1h7i3",
  accessToken:
    "2ff0131c049a37b263acc070d3028ad7306392ea33de054fa5d818b661cdc802"
});

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
            <Blog path="blog" client={client} />
            <BlogArticle path="blog/:id" client={client} />
          </Router>
        </React.Suspense>
      </div>
    );
  }
}

export default withRoot(App);
