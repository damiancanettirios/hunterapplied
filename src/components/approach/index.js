import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import { withStyles } from "@material-ui/core/styles";
import teal from "@material-ui/core/colors/teal";
import orange from "@material-ui/core/colors/orange";
import Magnify from "mdi-material-ui/Magnify";
import Compass from "mdi-material-ui/Compass";
import Crop from "mdi-material-ui/Crop";
import Pencil from "mdi-material-ui/Pencil";
import ClipboardText from "mdi-material-ui/ClipboardText";
import Hidden from "@material-ui/core/Hidden";

import ContactDiv from "../contact/contactDiv";
import PuzzleImg from "../../images/puzzle.jpeg";
import Footer from "../main/Footer";
import Header from "../main/Header";

import withRoot from "../withRoot";

const styles = theme => ({
  serviceModel: {
    backgroundColor: teal[500],
    minHeight: 200,
    padding: 40
  },
  serviceCard: {
    backgroundColor: teal[50],
    minHeight: 220
  },
  serviceContent: {
    margin: 10
  },
  servicePaper: {
    padding: 20
  },
  hero: {
    backgroundColor: "#fff"
  },
  heroTitle: {
    marginTop: 50,
    marginBottom: 30,
    marginLeft: 50,
    marginRight: 50
  },
  heroText: {
    marginBottom: 80,
    marginLeft: 50,
    marginRight: 50
  },
  approach: {
    padding: 40
  },
  approachIcons: {
    color: orange[700]
  },
  connect: {
    minHeight: 100,
    backgroundColor: "#fff"
  },
  [theme.breakpoints.down("sm")]: {
    heroTitle: {
      marginTop: 50,
      marginBottom: 20,
      marginLeft: 20,
      marginRight: 20,
      textAlign: "center"
    },
    heroText: {
      marginLeft: 20,
      marginRight: 20,
      textAlign: "center"
    },
    approach: {
      padding: 10
    },
    serviceModel: {
      padding: 10,
      marginBottom: 20
    },
    serviceContent: {
      margin: 5
    },
    servicePaper: {
      padding: 10
    },
    serviceCard: {
      minHeight: 100
    }
  }
});

const approach = [
  {
    id: 1,
    title: "Learn",
    icon: <Magnify />,
    message: "Learn about your research, operations and objectives"
  },
  {
    id: 2,
    title: "Tailor",
    icon: <Compass />,
    message: "Tailor a grants strategy to your R&D and commercial roadmap"
  },
  {
    id: 3,
    title: "Frame",
    icon: <Crop />,
    message: "Frame projects for competitive grant applications"
  },
  {
    id: 4,
    title: "Write",
    icon: <Pencil />,
    message: "Complete and coordinate grant application writing and submission"
  },
  {
    id: 5,
    title: "Manage",
    icon: <ClipboardText />,
    message:
      "Manage administration of successful grants with relevant stakeholders"
  }
];

function ListApproach(el) {
  const { id, title, icon, message } = el;
  return (
    <Paper key={id} style={{ margin: 20, padding: 10 }}>
      <Grid
        container
        key={id}
        direction="row"
        alignItems="center"
        justify="space-between"
      >
        <Grid
          key={title}
          item
          md={2}
          sm={12}
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Grid key={message} item>
            {icon}
          </Grid>
          <Grid key={title} item>
            <Typography key={title} variant="h5">
              {title}
            </Typography>
          </Grid>
        </Grid>
        <Grid key={message} item md={10} sm={12}>
          <Typography key={message} variant="h5" align="center">
            {message}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}

class Approach extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Header />
        {/* Hero */}
        <div className={classes.hero}>
          <Grid container spacing={24} direction="row">
            <Grid item md={6} sm={12}>
              <Typography variant="h2" className={classes.heroTitle}>
                We construct successful grants
              </Typography>
              <Typography variant="h5" className={classes.heroText}>
                Government grants can be a confusing puzzle. We operate as your
                grants department, help plan an approach tailored to your needs
                and piece together successful submissions.
              </Typography>
            </Grid>
            <Hidden smDown>
              <Grid item md={6}>
                <img src={PuzzleImg} alt="puzzle" />
              </Grid>
            </Hidden>
          </Grid>
        </div>

        {/* Approach */}
        <div className={classes.approach}>
          <Typography variant="h5" align="center" style={{ margin: 20 }}>
            OUR APPOACH
          </Typography>

          <Grid
            container
            direction="row"
            alignItems="center"
            spacing={24}
            justify="center"
          >
            <Grid
              container
              item
              spacing={8}
              direction="column"
              justify="center"
              alignItems="stretch"
            >
              {approach.map(item => ListApproach(item))}
            </Grid>
          </Grid>
        </div>
        {/* Service Model */}
        <div className={classes.serviceModel}>
          <Paper className={classes.servicePaper}>
            <Typography variant="h5" align="center" style={{ margin: 20 }}>
              OUR SERVICE MODEL
            </Typography>
            <Typography
              variant="h5"
              align="center"
              style={{ marginTop: 10, marginBottom: 20 }}
            >
              We are results-oriented and subscribe to a collaborative service
              model to achieve your objectives
            </Typography>
            <Grid
              container
              spacing={24}
              alignItems="flex-start"
              direction="row"
              justify="space-around"
              style={{ padding: 10 }}
            >
              <Grid item md={3} sm={6} xs={12}>
                <Card className={classes.serviceCard}>
                  <CardContent>
                    <Typography
                      variant="h5"
                      align="center"
                      style={{ marginBottom: 10 }}
                    >
                      <b>01</b>
                    </Typography>
                    <Divider className={classes.serviceContent} />
                    <Typography
                      variant="h5"
                      align="center"
                      style={{ marginTop: 10 }}
                    >
                      Collaborative working relationship
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item md={3} sm={6} xs={12}>
                <Card className={classes.serviceCard}>
                  <CardContent>
                    <Typography variant="h5" align="center">
                      <b>02</b>
                    </Typography>
                    <Divider className={classes.serviceContent} />
                    <Typography variant="h5" align="center">
                      Aligned incentives (Success-fee model)
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item md={3} sm={6} xs={12}>
                <Card className={classes.serviceCard}>
                  <CardContent>
                    <Typography variant="h5" align="center">
                      <b>03</b>
                    </Typography>
                    <Divider className={classes.serviceContent} />
                    <Typography variant="h5" align="center">
                      Thorough understanding of your research and operations
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item md={3} sm={6} xs={12}>
                <Card className={classes.serviceCard}>
                  <CardContent>
                    <Typography variant="h5" align="center">
                      <b>04</b>
                    </Typography>
                    <Divider className={classes.serviceContent} />
                    <Typography variant="h5" align="center">
                      Network of specialist service providers
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Paper>
        </div>
        {/* Get in touch */}
        <div>
          <div className={classes.connect}>
            <ContactDiv />
          </div>
          <Divider />
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default withRoot(withStyles(styles)(Approach));
