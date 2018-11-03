import React from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PhoneIcon from "@material-ui/icons/Phone";
import MailOutline from "@material-ui/icons/MailOutline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import Hubspot from "./hubspot";
import Calendly from "./calendly";
import Footer from "../main/Footer";
import Header from "../main/Header";

class Contact extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    return (
      <React.Fragment>
        <Header />
        <div style={{ backgroundColor: "#fff" }}>
          <Typography variant="h2" align="center" style={{ paddingTop: 20 }}>
            Contact Us
          </Typography>
          <Typography
            variant="h5"
            align="center"
            style={{ marginTop: 20, marginBottom: 20 }}
          >
            Lets discuss grants that could support your project
          </Typography>
          <Grid
            container
            spacing={24}
            direction="row"
            justify="center"
            alignItems="stretch"
          >
            <Paper style={{ margin: 40 }}>
              <Tabs
                value={value}
                onChange={this.handleChange}
                indicatorColor="primary"
                textColor="primary"
                centered
                style={{ marginBottom: 10 }}
              >
                <Tab label="Message Use" icon={<MailOutline />} />
                <Tab label="Scehdule A Call" icon={<PhoneIcon />} />
              </Tabs>
              <div style={{ margin: 20 }}>
                {value === 0 && <Hubspot />}
                {value === 1 && <Calendly />}
              </div>
            </Paper>
          </Grid>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Contact;
