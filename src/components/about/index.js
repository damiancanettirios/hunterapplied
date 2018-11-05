import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { Linkedin } from "mdi-material-ui";
import EmailIcon from "@material-ui/icons/Email";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "@reach/router";

import ContactDiv from "../contact/contactDiv";
import Footer from "../main/Footer";
import Header from "../main/Header";
import lightbulb from "../../images/lightbulb.jpeg";

const styles = theme => ({
  layout: {
    width: "auto",
    backgroundColor: "#fff"
  },
  message: {
    marginTop: 50,
    padding: 40,
    marginBottom: 50
  },
  mission: {
    padding: 30
  },
  content: {
    margin: 10
  },
  whoDiv: {
    padding: 40
  },
  [theme.breakpoints.down("sm")]: {
    imgHide: {
      display: "none"
    },
    message: {
      marginTop: 30,
      padding: 20,
      marginBottom: 20,
      textAlign: "center"
    },
    mission: {
      padding: 10
    },
    whoDiv: {
      marginTop: 20,
      padding: 20
    }
  }
});

const leaders = [
  {
    name: "Damian Canetti-Rios",
    background:
      "Damian leads the competitive grants service line at Hunter Applied Research. He focuses on helping clients build compelling submissions that align with their growth plans. Prior to Hunter Applied Research, Damian was a strategy practitioner at the Westpac Group and McKinsey & Company.",
    education:
      "MBA from the University of Michigan, B.Commerce & B.Spanish Literature from Carnegie Mellon University",
    linkedinUrl: "https://www.linkedin.com/in/damiancanettirios/",
    role: "Principal Consultant",
    email: "mailto:damian@hunterapplied.com"
  },
  {
    name: "Elliot Briels",
    background:
      "Elliot leads the entitlement grants service line at Hunter Applied Research. He has helped clients for the last six years claim the R&D Tax Incentive and build grants strategies. Elliot is currently a Director at Hunter & Briels, a boutique grants consultancy, and previously held roles in technology start-ups and digital agencies.",
    education: "B.Commerce & B.Law from the University of New South Wales",
    linkedinUrl: "https://www.linkedin.com/in/elliot-briels-a1037954/",
    role: "Principal Consultant",
    email: "mailto:elliot@hunterbriels.com"
  }
];

function LeaderContainer(leader) {
  const { name, background, education, linkedinUrl, email, role } = leader;
  return (
    <div key={name} style={{ marginTop: 20, marginBottom: 20 }}>
      <Typography variant="h5" align="left">
        <Grid
          container
          justify="flex-start"
          direction="row"
          alignItems="center"
        >
          <div key={name} style={{ marginRight: 6 }}>
            {name}
          </div>
          <div key={role}>
            <IconButton component={Link} to={linkedinUrl}>
              <Linkedin />
            </IconButton>
          </div>
          <div key={leader.index}>
            <IconButton component={Link} to={email}>
              <EmailIcon />
            </IconButton>
          </div>
        </Grid>
      </Typography>
      <Typography variant="subtitle1" align="left">
        {background}
      </Typography>
      <Typography variant="body1" align="left">
        Education: {education}
      </Typography>
    </div>
  );
}

class About extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <div className={classes.layout}>
          <Header />
          {/* Hero */}
          <Grid container spacing={24} alignItems="center">
            <Grid item md={8} sm={12}>
              <Typography variant="h2" className={classes.message}>
                We help innovative companies access government incentives and
                grants
              </Typography>
            </Grid>
            <Grid container item md={4} justify="center" alignItems="center">
              <img
                src={lightbulb}
                alt="light blub"
                className={classes.imgHide}
              />
            </Grid>
          </Grid>
        </div>
        {/* Misson */}
        <div style={{ backgroundColor: "#4DB6AC" }}>
          <div className={classes.mission}>
            <Typography variant="h3" align="center" className={classes.content}>
              OUR MISSION
            </Typography>
            <Typography variant="h5" align="center" className={classes.content}>
              We believe government incentive and grant programs should support
              the most innovative projects to accelerate the next generation of
              new knowledge, the evolution of industries and the creation of
              employment and economic opportunities.
            </Typography>
            <Typography variant="h5" align="center" className={classes.content}>
              Our mission is to elevate the growth potential of innovative
              projects by maximising their access to government funding.
            </Typography>
          </div>
        </div>
        {/* Who Are We */}
        <div className={classes.whoDiv}>
          <Grid container spacing={24}>
            <Paper>
              <Typography variant="h4" align="left" className={classes.content}>
                OUR TEAM
              </Typography>
              <Typography variant="h5" align="left" className={classes.content}>
                Our consultants are dedicated to your success and work directly
                with you to build competitive and compliant grant submissions
                that will communicate the value of your project to relevant
                stakeholders.
              </Typography>
              <Typography variant="h5" align="left" className={classes.content}>
                Our Leadership Team
                {leaders.map(leader => LeaderContainer(leader))}
              </Typography>
            </Paper>
          </Grid>
        </div>
        {/* Contact Us */}
        <ContactDiv />
        <Footer />
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(About);
