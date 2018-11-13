import React from "react";
import { Link } from "@reach/router";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import { withStyles } from "@material-ui/core/styles";
import DirectionsBoat from "@material-ui/icons/DirectionsBoat";
import LocalShipping from "@material-ui/icons/LocalShipping";
import LocalAtm from "@material-ui/icons/LocalAtm";
import Dvr from "@material-ui/icons/Dvr";
import MyLocationOutlinedIcon from "@material-ui/icons/MyLocationOutlined";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import AssignmentOutlinedIcon from "@material-ui/icons/AssignmentOutlined";
import Avatar from "@material-ui/core/Avatar";
import orange from "@material-ui/core/colors/orange";
import blueGrey from "@material-ui/core/colors/blueGrey";
import Hidden from "@material-ui/core/Hidden";

import cactus from "../../images/cactus.jpeg";
import ContactUs from "../contact/contactDiv";
import Footer from "../main/Footer";
import Header from "../main/Header";

import withRoot from "../withRoot";

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

const stages = [
  {
    id: 1,
    icon: <Dvr fontSize="large" />,
    title1: "Research &",
    title2: "Development",
    message:
      "Scientific experimentation activities attempting to generate new knowledge and develop innovative products"
  },
  {
    id: 2,
    icon: <LocalAtm fontSize="large" />,
    title1: "Market",
    title2: "Validation",
    message:
      "Trials and Proofs-of-Concepts that validate the efficacy, market need or value proposition of your product"
  },
  {
    id: 3,
    icon: <LocalShipping fontSize="large" />,
    title1: "Initial",
    title2: "Commercialisation",
    message:
      "Activities that help you earn your first sales or validate the commercial viability of your business model"
  },
  {
    id: 4,
    icon: <DirectionsBoat fontSize="large" />,
    title1: "Global",
    title2: "Commercialisation",
    message:
      "Activities that help you scale your business model and export your product to international customers"
  }
];

const process = [
  {
    id: 1,
    icon: <MyLocationOutlinedIcon fontSize="large" />,
    title: "GRANTS STRATEGY",
    message:
      "We find grants that fit your R&D and commercialisation objectives and build a grants strategy to access available funding"
  },
  {
    id: 2,
    icon: <EditOutlinedIcon fontSize="large" />,
    title: "PLANNING & WRITING",
    message:
      "We help you frame your objectives, construct projects that meet the grant program’s guidelines and write a compelling application"
  },
  {
    id: 3,
    icon: <AssignmentOutlinedIcon fontSize="large" />,
    title: "PROCESS MANAGEMENT",
    message:
      "We project manage each grant for you, including compliance and communicating with the government, to ensure a competitive final submission"
  }
];

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
                  <Button
                    variant="contained"
                    color="primary"
                    component={Link}
                    to="/contact"
                  >
                    Contact Us
                  </Button>
                </Typography>
              </Grid>
              <Hidden smDown>
                <Grid item md={6} sm={12} container justify="center">
                  <img src={cactus} alt="cactus" />
                </Grid>
              </Hidden>
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
                  Every year, billions in government funding are distributed to
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
                    {stages.map(stage => (
                      <Grid key={stage.id} item md={3} sm={6} xs={12}>
                        <Card key={stage.id} className={classes.grantCards}>
                          <CardContent key={stage.id} style={{ padding: 10 }}>
                            <Typography
                              variant="h5"
                              style={{ height: 120 }}
                              align="center"
                              key={stage.title1}
                            >
                              <div key={stage.title1}>{stage.icon}</div>
                              {stage.title1}
                              <br />
                              {stage.title2}
                            </Typography>
                            <Typography
                              key={stage.message}
                              variant="subtitle1"
                              align="center"
                            >
                              {stage.message}
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                    ))}
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
                    {process.map(step => (
                      <Grid key={step.id} item md={4} sm={12}>
                        <Card key={step.id} style={{ minHeight: 270 }}>
                          <CardContent key={step.id}>
                            <Typography
                              variant="h5"
                              style={{ height: 120, paddingTop: 10 }}
                              align="center"
                              key={step.title}
                            >
                              <div key={step.title} className={classes.row}>
                                <Avatar
                                  key={step.title}
                                  className={classes.orangeAvatar}
                                >
                                  {step.icon}
                                </Avatar>
                              </div>

                              <div key={step.message} style={{ marginTop: 10 }}>
                                {step.title}
                              </div>
                            </Typography>
                            <Typography
                              key={step.message}
                              variant="subtitle1"
                              style={{ marginTop: 20 }}
                            >
                              {step.message}
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                </div>
              </div>
            </Grid>
          </div>
          {/* Contact Us */}
          <ContactUs />
          {/* <div id="contact" style={{ padding: 40 }}>
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
                    <Grid item md={6} sm={24}>
                      <Card style={{ minHeight: 700, marginTop: 10 }}>
                        <div className={classes.grantCards}>
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
                    <Grid item md={6} sm={24}>
                      <Card style={{ minHeight: 700, marginTop: 10 }}>
                        <div className={classes.grantCards}>
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
                         
                          <CalendlyForm />
                          
                        </CardContent>
                      </Card>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </Grid>
          </div> */}
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default withRoot(withStyles(styles)(Homepage));
