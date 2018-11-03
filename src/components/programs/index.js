import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import ContactDiv from "../contact/contactDiv";
import Footer from "../main/Footer";
import Header from "../main/Header";

const programs = [
  {
    name: "Research & Development Tax Incentive (R&DTI)",
    funder: "Federal",
    description:
      "Entitlement program that provides companies with a tax concession or rebate for eligible expenditures for research and development activities",
    type: "Entitlement",
    amount: "43.5% of eligible expenditures up to $4m"
  },
  {
    name: "Collaborative Research Centres Projects (CRC-P)",
    funder: "Federal",
    description:
      "Competitive program that supports collaborative projects in one of Australia's Growth Sectors that have both research and commercialisation activities",
    type: "Competitive",
    amount: "up to $3m"
  },
  {
    name: "Regional Jobs and Infrastructure Programs",
    funder: "Federal OR State",
    description:
      "Competitive federal and state programs that provide funding to companies completing projects that build new infrastructure or grow employment&nbsp;in regional locations",
    type: "Competitive",
    amount: "varies on program (typically $250k-$1m)"
  },
  {
    name: "Department of Health Programs",
    funder: "Federal OR State",
    description:
      "Various competitive federal and state programs that provide funding to companies developing or testing novel and innovative solutions in the healthcare industry",
    type: "Competitive",
    amount: "varies on program (typically $250k-$1m)"
  },
  {
    name: "Export Market Development Grant (EMDG)",
    funder: "Federal",
    description:
      "Entitlement program that provides companies with a rebate for eligible expenditures incurred for&nbsp;export market development activities",
    type: "Entitlement",
    amount: "50% of eligible expenditures up to $150k (only $40k guaranteed)"
  },
  {
    name: "Accelerating Commercialisation",
    funder: "Federal",
    description:
      "Competitive federal program that provides funding to companies commencing the commercialisation process for a novel product, service or process",
    type: "Competitive",
    amount: "up to $1m"
  }
];

function ProgramRender(program) {
  const { name, funder, description, type, amount } = program;
  return (
    <React.Fragment>
      <Grid key={name} item xs={6}>
        <Card key={name} style={{ margin: 10, backgroundColor: "#FAFAFA" }}>
          <CardContent>
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

export default () => {
  return (
    <React.Fragment>
      <Header />
      <div style={{ padding: 40, backgroundColor: "#fff" }}>
        <Typography variant="h2" align="center">
          Programs
        </Typography>
        <Typography variant="h5" align="center">
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
    </React.Fragment>
  );
};
