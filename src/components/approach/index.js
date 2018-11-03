import React from "react";
import {
  Typography,
  Grid,
  Paper,
  Card,
  CardContent,
  Divider
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import teal from "@material-ui/core/colors/teal";
import orange from "@material-ui/core/colors/orange";
import { Magnify, Compass, Crop, Pencil, ClipboardText } from "mdi-material-ui";

import ContactDiv from "../contact/contactDiv";
import PuzzleImg from "./puzzle.jpeg";
import Footer from "../main/Footer";
import Header from "../main/Header";

const styles = {
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
    minHeight: 200,
    backgroundColor: "#fff"
  },
  approach: {
    minHeight: 200,
    padding: 40
  },
  approachIcons: {
    color: orange[700]
  },
  connect: {
    minHeight: 100,
    backgroundColor: "#fff"
  }
};

class Approach extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Header />
        {/* Hero */}
        <div className={classes.hero}>
          <Grid container spacing={24} direction="row">
            <Grid item xs={6}>
              <Typography
                variant="h2"
                style={{
                  marginTop: 50,
                  marginBottom: 30,
                  marginLeft: 50,
                  marginRight: 50
                }}
              >
                We piece together successful grants
              </Typography>
              <Typography
                variant="h5"
                style={{
                  marginBottom: 80,
                  marginLeft: 50,
                  marginRight: 50
                }}
              >
                Government grants can be like a confusing puzzle. We operate as
                your grants department and build a tailored approach for your
                needs.
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <img src={PuzzleImg} alt="puzzle" />
            </Grid>
          </Grid>
        </div>

        {/* Approach */}
        <div className={classes.approach}>
          <Typography variant="h5" style={{ marginTop: 20 }} align="center">
            OUR APPOACH
          </Typography>

          <Grid
            container
            direction="row"
            alignItems="center"
            spacing={24}
            justify="center"
          >
            <Grid item spacing={2} />
            <Grid
              container
              item
              spacing={8}
              direction="column"
              justify="center"
              alignItems="stretch"
            >
              <Paper style={{ margin: 10, padding: 10 }}>
                <Grid
                  container
                  direction="row"
                  alignItems="center"
                  justify="space-between"
                >
                  <Grid
                    item
                    xs={2}
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                  >
                    <Grid item xs>
                      <Magnify className={classes.approachIcons} />
                    </Grid>
                    <Grid item xs>
                      <Typography variant="h5">Learn</Typography>
                    </Grid>
                  </Grid>
                  <Grid item xs={10}>
                    <Typography variant="h5">
                      Learn about your research, operations and objectives
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
              <Paper style={{ margin: 10, padding: 10 }}>
                <Grid
                  container
                  direction="row"
                  alignItems="center"
                  justify="space-between"
                >
                  <Grid
                    item
                    xs={2}
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                  >
                    <Grid item xs>
                      <Compass className={classes.approachIcons} />
                    </Grid>
                    <Grid item xs>
                      <Typography variant="h5">Tailor</Typography>
                    </Grid>
                  </Grid>
                  <Grid item xs={10}>
                    <Typography variant="h5">
                      Tailor a grants strategy to your R&D and commercial
                      roadmap
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
              <Paper style={{ margin: 10, padding: 10 }}>
                <Grid
                  container
                  direction="row"
                  alignItems="center"
                  justify="space-between"
                >
                  <Grid
                    item
                    xs={2}
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                  >
                    <Grid item xs>
                      <Crop className={classes.approachIcons} />
                    </Grid>
                    <Grid item xs>
                      <Typography variant="h5">Frame</Typography>
                    </Grid>
                  </Grid>
                  <Grid item xs={10}>
                    <Typography variant="h5">
                      Frame projects for a competitive grant application
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
              <Paper style={{ margin: 10, padding: 10 }}>
                <Grid
                  container
                  direction="row"
                  alignItems="center"
                  justify="space-between"
                >
                  <Grid
                    item
                    xs={2}
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                  >
                    <Grid item xs>
                      <Pencil className={classes.approachIcons} />
                    </Grid>
                    <Grid item xs>
                      <Typography variant="h5">Write</Typography>
                    </Grid>
                  </Grid>
                  <Grid item xs={10}>
                    <Typography variant="h5">
                      Complete and coordinate grant application and submission
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
              <Paper style={{ margin: 10, padding: 10 }}>
                <Grid
                  container
                  direction="row"
                  alignItems="center"
                  justify="space-between"
                >
                  <Grid
                    item
                    xs={2}
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                  >
                    <Grid item xs>
                      <ClipboardText className={classes.approachIcons} />
                    </Grid>
                    <Grid item xs>
                      <Typography variant="h5">Manage</Typography>
                    </Grid>
                  </Grid>
                  <Grid item xs={10}>
                    <Typography variant="h5">
                      Manage administration of successful grants with relevant
                      stakeholders
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item spacing={2} />
          </Grid>
        </div>
        {/* Service Model */}
        <div className={classes.serviceModel}>
          <Paper className={classes.servicePaper}>
            <Typography variant="h5" align="center">
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
              <Grid item xs={3}>
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
              <Grid item xs={3}>
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
              <Grid item xs={3}>
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
              <Grid item xs={3}>
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

export default withStyles(styles)(Approach);
