import React from "react";
import Typography from "@material-ui/core/Typography";
import * as Markdown from "react-markdown";
import Grid from "@material-ui/core/Grid";
import { Link } from "@reach/router";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import LinkedinBox from "mdi-material-ui/LinkedinBox";
import EmailIcon from "@material-ui/icons/Email";
import LeftIcon from "mdi-material-ui/ChevronLeft";
import moment from "moment";
import "typeface-roboto";

import Header from "../main/Header";
import Footer from "../main/Footer";
import ContactDiv from "../contact/contactDiv";

const BlogArticle = ({ location }) => (
  <div style={{ backgroundColor: "#fff" }}>
    <Header />
    <Button style={{ margin: 20 }} component={Link} to="/blog">
      <LeftIcon />
      Back To Blog
    </Button>
    <Grid container style={{ padding: "5px 40px 20px 40px", minHeight: 500 }}>
      <Grid container direction="column">
        <Grid item>
          <Typography variant="h3" align="left" style={{ marginBottom: 10 }}>
            {location.state.post.title}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body2" align="left">
            {moment(location.state.post.publishDate).calendar(null, {
              sameDay: "[Today]",
              lastDay: "[Yesterday]",
              lastWeek: "[Last] dddd",
              sameElse: "MMM Do YYYY"
            })}
          </Typography>
        </Grid>
        <Grid item container direction="row" alignItems="center">
          <Typography variant="subtitle1" align="left">
            By: {location.state.post.author.fields.name}
          </Typography>
          <IconButton
            component={Link}
            to={`https://www.linkedin.com/in/${
              location.state.post.author.fields.facebook
            }`}
          >
            <LinkedinBox fontSize="small" />
          </IconButton>
          <IconButton
            component={Link}
            to={`mailto:${location.state.post.author.fields.email}`}
          >
            <EmailIcon fontSize="small" />
          </IconButton>
        </Grid>
      </Grid>
      <Markdown source={location.state.post.body} />
    </Grid>
    <ContactDiv />
    <Footer />
  </div>
);

export default BlogArticle;
