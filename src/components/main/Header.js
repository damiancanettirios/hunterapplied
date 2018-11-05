import React from "react";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { Link } from "@reach/router";

import logo from "../../images/logo.png";

export default () => {
  return (
    <React.Fragment>
      {/* Header */}
      <header style={{ backgroundColor: "#fff" }}>
        <Toolbar>
          <Grid
            container
            spacing={24}
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Grid item sm={4} xs={12}>
              <Link to="/">
                <img src={logo} alt="Hunter Applied Research" />
              </Link>
            </Grid>
            <Grid item container justify="flex-end" sm={8} xs={12}>
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
      </header>
    </React.Fragment>
  );
};
