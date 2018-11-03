import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "@reach/router";

export default () => {
  return (
    <div style={{ padding: 40 }}>
      <Grid container spacing={12} alignItems="center">
        <Grid item xs={8} style={{ paddingLeft: 40 }}>
          <Typography variant="h3">Interested in learning more?</Typography>
          <Typography variant="h3" color="primary">
            Get in touch
          </Typography>
        </Grid>
        <Grid item container xs={4} justify="center">
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/contact"
          >
            Contact Us
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};
