import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "@reach/router";

const styles = theme => ({
  layout: {
    width: "auto",
    padding: 40
  },
  message: {
    paddingLeft: 20
  },
  [theme.breakpoints.down("sm")]: {
    layout: {
      padding: 10
    },
    message: {
      padding: 10
    }
  }
});

class Contact extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.layout}>
        <Grid container spacing={24} alignItems="center">
          <Grid item sm={9} xs={12} className={classes.message}>
            <Typography variant="h3">Interested in learning more?</Typography>
            <Typography variant="h3" color="primary">
              Get in touch
            </Typography>
          </Grid>
          <Grid item container sm={3} xs={12} justify="center">
            <Button
              variant="contained"
              color="primary"
              component={Link}
              to="/contact"
              style={{ marginBottom: 50, marginTop: 30 }}
            >
              Contact Us
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Contact);
