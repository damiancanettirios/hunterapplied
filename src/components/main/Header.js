import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { Link } from "@reach/router";

import logo from "./logo.png";

export default () => {
  return (
    <React.Fragment>
      <CssBaseline />
      {/* Header */}
      <header>
        <AppBar
          position="static"
          color="default"
          style={{
            backgroundColor: "#fff",
            padding: 8
          }}
        >
          <Toolbar>
            <Grid
              container
              spacing={24}
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <Grid item>
                <Link to="/">
                  <img src={logo} alt="Hunter Applied Research" />
                </Link>
              </Grid>
              <Grid item>
                <Button component={Link} to="/approach" color="inherit">
                  Approach
                </Button>
                <Button component={Link} to="/programs" color="inherit">
                  Programs
                </Button>
                <Button component={Link} to="/about" color="inherit">
                  About
                </Button>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </header>
    </React.Fragment>
  );
};
