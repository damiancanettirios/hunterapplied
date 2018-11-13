import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import ContactDiv from "../contact/contactDiv";
import Footer from "../main/Footer";
import Header from "../main/Header";

import withRoot from "../withRoot";

const styles = theme => ({
  layout: {
    width: "auto"
  },
  mainDiv: {
    padding: 40,
    backgroundColor: "#fff"
  },
  [theme.breakpoints.down("sm")]: {
    mainDiv: {
      padding: 10,
      backgroundColor: "#fff"
    }
  }
});

const programs = [
  {
    id: 1,
    name: "Research & Development Tax Incentive (R&DTI)",
    funder: "Federal",
    description:
      "Entitlement program that provides companies with a tax concession or rebate for eligible expenditures for research and development activities",
    type: "Entitlement",
    amount: "43.5% of eligible expenditures up to $4m"
  },
  {
    id: 2,
    name: "Collaborative Research Centres Projects (CRC-P)",
    funder: "Federal",
    description:
      "Competitive program that supports collaborative projects in one of Australia's Growth Sectors that have both research and commercialisation activities",
    type: "Competitive",
    amount: "up to $3m"
  },
  {
    id: 3,
    name: "Regional Jobs and Infrastructure Programs",
    funder: "Federal OR State",
    description:
      "Competitive federal and state programs that provide funding to companies completing projects that build new infrastructure or grow employment&nbsp;in regional locations",
    type: "Competitive",
    amount: "varies on program (typically $250k-$1m)"
  },
  {
    id: 4,
    name: "Department of Health Programs",
    funder: "Federal OR State",
    description:
      "Various competitive federal and state programs that provide funding to companies developing or testing novel and innovative solutions in the healthcare industry",
    type: "Competitive",
    amount: "varies on program (typically $250k-$1m)"
  },
  {
    id: 5,
    name: "Export Market Development Grant (EMDG)",
    funder: "Federal",
    description:
      "Entitlement program that provides companies with a rebate for eligible expenditures incurred for&nbsp;export market development activities",
    type: "Entitlement",
    amount: "50% of eligible expenditures up to $150k (only $40k guaranteed)"
  },
  {
    id: 6,
    name: "Accelerating Commercialisation",
    funder: "Federal",
    description:
      "Competitive federal program that provides funding to companies commencing the commercialisation process for a novel product, service or process",
    type: "Competitive",
    amount: "up to $1m"
  }
];

function ProgramRender(program) {
  const { id, name, funder, description, type, amount } = program;
  return (
    <React.Fragment>
      <Grid key={id} item sm={6} xs={12}>
        <Card key={id} style={{ margin: 10, backgroundColor: "#FAFAFA" }}>
          <CardContent key={id}>
            <Typography variant="h5" style={{ marginBottom: 8 }}>
              {name}
            </Typography>
            <Typography variant="subtitle2" style={{ marginBottom: 8 }}>
              Government: {funder}
              <br />
              Type: {type}
              <br />
              Amount: {amount}
            </Typography>
            <Typography variant="subtitle1">{description}</Typography>
          </CardContent>
        </Card>
      </Grid>
    </React.Fragment>
  );
}

class Programs extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <div className={classes.layout}>
          <Header />
          <div className={classes.mainDiv}>
            <Typography variant="h2" align="center">
              Programs
            </Typography>
            <Typography variant="h5" align="center" style={{ marginTop: 10 }}>
              Selected grant programs we have managed for our client
            </Typography>
            <Grid
              container
              spacing={12}
              direction="row"
              justify="flex-start"
              alignItems="flex-start"
              wrap
            >
              {programs.map(program => ProgramRender(program))}
            </Grid>
          </div>
          <ContactDiv />
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default withRoot(withStyles(styles)(Programs));
