import React from "react";
import { Link } from "@reach/router";
import {
  Grid,
  Typography,
  Paper,
  Card,
  CardContent,
  Button,
  CssBaseline
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import DirectionsBoat from "@material-ui/icons/DirectionsBoat";
import LocalShipping from "@material-ui/icons/LocalShipping";
import LocalAtm from "@material-ui/icons/LocalAtm";
import Dvr from "@material-ui/icons/Dvr";
import MailOutline from "@material-ui/icons/MailOutline";
import Phone from "@material-ui/icons/Phone";
import MyLocationOutlinedIcon from "@material-ui/icons/MyLocationOutlined";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import AssignmentOutlinedIcon from "@material-ui/icons/AssignmentOutlined";
import Avatar from "@material-ui/core/Avatar";
import orange from "@material-ui/core/colors/orange";
import blueGrey from "@material-ui/core/colors/blueGrey";

import cactus from "../../images/cactus.jpeg";
import HubspotForm from "../contact/hubspot";
import CalendlyForm from "../contact/calendly";
import Footer from "../main/Footer";
import Header from "../main/Header";

const styles = theme => ({
  layout: {
    width: "auto"
  },
  orangeAvatar: {
    width: 70,
    height: 70,
    color: "#fff",
    backgroundColor: orange[900]
  },
  grantCards: {
    backgroundColor: blueGrey[50]
  },
  row: {
    display: "flex",
    justifyContent: "center"
  },
  divStyle: {
    marginTop: 30,
    padding: 40,
    minHeight: 300
  },
  paperWide: {
    margin: 20,
    padding: 30
  },
  subtext: {
    marginTop: 20,
    paddingLeft: 100,
    paddingRight: 100
  },
  [theme.breakpoints.up("md")]: {
    paperWide: {
      margin: 10,
      padding: 20
    },
    divStyle: {
      marginTop: 20,
      padding: 40
    },
    subtext: {
      marginTop: 20,
      paddingLeft: 5,
      paddingRight: 5
    }
  },
  [theme.breakpoints.down("sm")]: {
    imgHide: {
      display: "none"
    },
    paperWide: {
      margin: 10,
      padding: 10
    },
    divStyle: {
      margin: 5,
      padding: 10
    },
    subtext: {
      marginTop: 20,
      paddingLeft: 5,
      paddingRight: 5
    }
  }
});

class Homepage extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <div className={classes.layout}>
          <Header />
          {/* Hero */}
          <div style={{ backgroundColor: "#fff" }}>
            <Grid
              container
              spacing={24}
              justify="center"
              direction="row"
              alignItems="flex-end"
              style={{ paddingBottom: 10 }}
            >
              <Grid item md={6} sm={12}>
                <Typography
                  variant="h2"
                  style={{
                    marginTop: 50,
                    marginBottom: 30,
                    marginLeft: 50,
                    marginRight: 50
                  }}
                >
                  Turbocharge Your Growth
                </Typography>
                <Typography
                  variant="h5"
                  style={{
                    marginBottom: 80,
                    marginLeft: 50,
                    marginRight: 50
                  }}
                >
                  <div style={{ marginBottom: 15 }}>
                    We help innovators access government grants and incentive
                    programs to accelerate R&D and commercialisation activities
                  </div>
                  <Button
                    variant="outlined"
                    style={{ marginRight: 10 }}
                    component={Link}
                    to="/approach"
                  >
                    Our Approach
                  </Button>
                  <Button variant="contained" color="primary" href="#contact">
                    Contact Us
                  </Button>
                </Typography>
              </Grid>
              <Grid item md={6} sm={12} container justify="center">
                <img src={cactus} alt="cactus" className={classes.imgHide} />
              </Grid>
            </Grid>
          </div>
          {/* Why grants */}
          <div className={classes.divStyle}>
            <Grid container spacing={24} justify="center">
              <Paper className={classes.paperWide}>
                <Typography variant="h5">WHY GRANTS</Typography>
                <Typography variant="h5" style={{ marginTop: 20 }}>
                  Grant programs are available to fund all stages of your
                  project
                </Typography>
                <Typography variant="subtitle1" style={{ marginTop: 20 }}>
                  Every year, billions of government funding is distributed to
                  companies, researchers and industry consortiums to conduct R&D
                  and commercialise innovative products, services and processes
                </Typography>
                <div style={{ marginTop: 30 }}>
                  <Grid
                    container
                    spacing={24}
                    justify="center"
                    direction="row"
                    alignItems="flex-start"
                  >
                    <Grid item md={3} sm={6} xs={12}>
                      <Card className={classes.grantCards}>
                        <CardContent style={{ padding: 10 }}>
                          <Typography
                            variant="h5"
                            style={{ height: 120 }}
                            align="center"
                          >
                            <div>
                              <Dvr fontSize="large" />
                            </div>
                            Research &<br />
                            Development
                          </Typography>
                          <Typography variant="subtitle1" align="center">
                            Scientific experimentation activities attempting to
                            generate new knowledge and develop innovative
                            products
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item md={3} sm={6} xs={12}>
                      <Card className={classes.grantCards}>
                        <CardContent style={{ padding: 10 }}>
                          <Typography
                            variant="h5"
                            style={{ height: 120 }}
                            align="center"
                          >
                            <div>
                              <LocalAtm fontSize="large" />
                            </div>
                            Market
                            <br />
                            Validation
                          </Typography>
                          <Typography variant="subtitle1" align="center">
                            Trials and Proofs-of-Concepts that validate the
                            efficacy, market need or value proposition of your
                            product
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item md={3} sm={6} xs={12}>
                      <Card className={classes.grantCards}>
                        <CardContent style={{ padding: 10 }}>
                          <Typography
                            variant="h5"
                            style={{ height: 120 }}
                            align="center"
                          >
                            <div>
                              <LocalShipping fontSize="large" />
                            </div>
                            Initial
                            <br />
                            Commercialisation
                          </Typography>
                          <Typography variant="subtitle1" align="center">
                            Activities that help you earn your first sales or
                            validate the commercial viability of your business
                            model
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item md={3} sm={6} xs={12}>
                      <Card className={classes.grantCards}>
                        <CardContent style={{ padding: 10 }}>
                          <Typography
                            variant="h5"
                            style={{ height: 120 }}
                            align="center"
                          >
                            <div>
                              <DirectionsBoat fontSize="large" />
                            </div>
                            Global
                            <br />
                            Commercialisation
                          </Typography>
                          <Typography variant="subtitle1" align="center">
                            Activities that help you scale your business model
                            and export your product to international customers
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  </Grid>
                </div>
              </Paper>
            </Grid>
          </div>
          {/* How We Work */}
          <div className={classes.divStyle}>
            <Grid container spacing={24} justify="center">
              <div className={classes.paperWide}>
                <Typography variant="h5" align="center">
                  HOW WE WORK
                </Typography>
                <Typography
                  variant="h5"
                  className={classes.subtext}
                  align="center"
                >
                  We work as your grants department so you can focus on running
                  your business
                </Typography>
                <div style={{ marginTop: 30 }}>
                  <Grid
                    container
                    spacing={24}
                    justify="center"
                    direction="row"
                    alignItems="flex-start"
                  >
                    <Grid item md={4} sm={12}>
                      <Card style={{ minHeight: 270 }}>
                        <CardContent>
                          <Typography
                            variant="h5"
                            style={{ height: 120, paddingTop: 10 }}
                            align="center"
                          >
                            <div className={classes.row}>
                              <Avatar className={classes.orangeAvatar}>
                                <MyLocationOutlinedIcon fontSize="large" />
                              </Avatar>
                            </div>

                            <div style={{ marginTop: 10 }}>GRANTS STRATEGY</div>
                          </Typography>
                          <Typography
                            variant="subtitle1"
                            style={{ marginTop: 20 }}
                          >
                            We find grants that fit your R&D and
                            commercialisation objectives and build a grants
                            strategy to access available funding
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item md={4} sm={12}>
                      <Card style={{ minHeight: 270 }}>
                        <CardContent>
                          <Typography
                            variant="h5"
                            style={{ height: 120, paddingTop: 10 }}
                            align="center"
                          >
                            <div className={classes.row}>
                              <Avatar className={classes.orangeAvatar}>
                                <EditOutlinedIcon fontSize="large" />
                              </Avatar>
                            </div>
                            <div style={{ marginTop: 10 }}>
                              PLANNING & WRITING
                            </div>
                          </Typography>
                          <Typography
                            variant="subtitle1"
                            style={{ marginTop: 20 }}
                          >
                            We help you frame your objectives, construct
                            projects that meet the grant program’s guidelines
                            and write a compelling application
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item md={4} sm={12}>
                      <Card style={{ minHeight: 270 }}>
                        <CardContent>
                          <Typography
                            variant="h5"
                            style={{ height: 120, paddingTop: 10 }}
                            align="center"
                          >
                            <div className={classes.row}>
                              <Avatar className={classes.orangeAvatar}>
                                <AssignmentOutlinedIcon fontSize="large" />
                              </Avatar>
                            </div>
                            <div style={{ marginTop: 10 }}>
                              PROCESS MANAGEMENT
                            </div>
                          </Typography>
                          <Typography
                            variant="subtitle1"
                            style={{ marginTop: 20 }}
                          >
                            We project manage each grant for you, including
                            compliance and communicating with the government, to
                            ensure a competitive final submission
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </Grid>
          </div>
          {/* Contact Us */}
          <div id="contact" style={{ padding: 40 }}>
            <Grid container spacing={24} justify="center">
              <div>
                <Typography variant="h5" align="center">
                  GET IN CONTACT
                </Typography>
                <Typography
                  variant="h5"
                  className={classes.subtext}
                  align="center"
                >
                  Send us a note or schedule a call to discuss grants for your
                  project
                </Typography>
                <div style={{ marginTop: 30 }}>
                  <Grid
                    container
                    spacing={24}
                    justify="center"
                    direction="row"
                    alignItems="flex-start"
                  >
                    <Grid item xl={6} l={24}>
                      <Card style={{ minHeight: 700, marginTop: 10 }}>
                        <div
                          className={classes.grantCards}
                          style={{ height: 60 }}
                        >
                          <Typography
                            variant="h5"
                            align="center"
                            style={{ padding: 10 }}
                          >
                            <Grid
                              container
                              direction="row"
                              justify="center"
                              alignItems="center"
                            >
                              <MailOutline
                                fontSize="large"
                                style={{ marginRight: 10 }}
                              />
                              Message Us
                            </Grid>
                          </Typography>
                        </div>
                        <CardContent>
                          <HubspotForm />
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xl={6} l={24}>
                      <Card style={{ minHeight: 700, marginTop: 10 }}>
                        <div
                          className={classes.grantCards}
                          style={{ height: 60 }}
                        >
                          <Typography
                            variant="h5"
                            align="center"
                            style={{ padding: 10 }}
                          >
                            <Grid
                              container
                              direction="row"
                              justify="center"
                              alignItems="center"
                            >
                              <Phone
                                fontSize="large"
                                style={{ marginRight: 10 }}
                              />
                              Schedule a Call
                            </Grid>
                          </Typography>
                        </div>
                        <CardContent>
                          {/* <!-- Calendly inline widget begin --> */}
                          <CalendlyForm />
                          {/* <!-- Calendly inline widget end --> */}
                        </CardContent>
                      </Card>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </Grid>
          </div>
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Homepage);
