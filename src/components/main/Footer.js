import React from "react";
import { withStyles } from "@material-ui/core/styles";
import orange from "@material-ui/core/colors/orange";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { Link } from "@reach/router";
import { Linkedin, Twitter, Medium } from "mdi-material-ui";

import whiteLogo from "../../images/logoWhite.png";

const styles = theme => ({
  footer: {
    color: "#fff"
  },
  footerLinks: {
    color: "#fff",
    "&:hover": {
      color: orange[500]
    }
  },
  socialIcons: {
    color: "#fff",
    "&:hover": {
      color: orange[500]
    }
  },
  [theme.breakpoints.down("sm")]: {
    footerCenter: {
      textAlign: "center"
    }
  }
});

class Footer extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <footer>
          <div style={{ background: "#607D8B" }}>
            <Grid
              container
              spacing={24}
              align-items="flex-start"
              style={{ padding: 30, minHeight: 100 }}
            >
              <Grid item md={3} sm={4} xs={12} className={classes.footerCenter}>
                <Link to="/">
                  <img src={whiteLogo} alt="Hunter Applied Research" />
                </Link>
              </Grid>
              <Grid item md={3} sm={4} xs={12} className={classes.footerCenter}>
                <Typography variant="subtitle2" className={classes.footer}>
                  <b>COMPANY</b>
                </Typography>
                <Link to="/about" style={{ textDecoration: "none" }}>
                  <Typography
                    variant="subtitle2"
                    className={classes.footerLinks}
                  >
                    About
                  </Typography>
                </Link>
                <Link to="/approach" style={{ textDecoration: "none" }}>
                  <Typography
                    variant="subtitle2"
                    className={classes.footerLinks}
                  >
                    Approach
                  </Typography>
                </Link>
              </Grid>
              <Grid item md={3} sm={4} xs={12} className={classes.footerCenter}>
                <Typography variant="subtitle2" className={classes.footer}>
                  <b>GRANTS</b>
                </Typography>
                <Link to="/programs" style={{ textDecoration: "none" }}>
                  <Typography
                    variant="subtitle2"
                    className={classes.footerLinks}
                  >
                    Programs
                  </Typography>
                </Link>
              </Grid>
              <Grid item md={3} xs={12}>
                <Grid
                  container
                  spacing={24}
                  direction="row"
                  justify="space-evenly"
                  alignItems="center"
                >
                  <Grid item />
                  <Grid item>
                    <Link to="https://twitter.com/hunterapplied">
                      <Twitter className={classes.socialIcons} />
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link to="https://www.linkedin.com/company/hunter-applied/">
                      <Linkedin className={classes.socialIcons} />
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link to="https://medium.com/@HunterApplied">
                      <Medium className={classes.socialIcons} />
                    </Link>
                  </Grid>
                  <Grid item />
                </Grid>
              </Grid>
            </Grid>
            <Divider />
            <Grid
              container
              spacing={24}
              direction="row"
              justify="center"
              style={{ padding: 20 }}
            >
              <Typography
                variant="body1"
                style={{ margin: 8 }}
                className={classes.footer}
              >
                Hunter Applied Research Pty Ltd
              </Typography>
              <Typography
                variant="body1"
                style={{ margin: 8 }}
                className={classes.footer}
              >
                ABN 71 616 755 161
              </Typography>
              <Typography
                variant="body1"
                style={{ margin: 8 }}
                className={classes.footer}
              >
                L3/11 York Street Sydney, NSW
              </Typography>
            </Grid>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Footer);
