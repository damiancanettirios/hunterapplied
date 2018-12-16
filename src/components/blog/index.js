import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";

import BlogItem from "./BlogItem";
import Header from "../main/Header";
import Footer from "../main/Footer";

class Blog extends React.Component {
  state = {
    posts: []
  };

  componentDidMount() {
    this.fetchPosts().then(this.setPosts);
  }

  fetchPosts = () => this.props.client.getEntries({ content_type: "blogPost" });

  setPosts = response => {
    this.setState({
      posts: response.items
    });
  };

  render() {
    const { posts } = this.state;
    return (
      <React.Fragment>
        <Header />
        <Typography
          variant="h3"
          align="center"
          style={{ marginTop: 60, marginBottom: 30 }}
        >
          The Hunter Applied Research Blog
        </Typography>
        <Grid container direction="column" style={{ padding: 30 }}>
          <Typography variant="h5">Our Latest Thinking</Typography>
          <Divider style={{ color: "black", marginBottom: 10 }} />
          <Grid
            container
            direction="row"
            spacing={16}
            justify="space-between"
            alignItems="flex-start"
            style={{ marginBottom: 20 }}
          >
            {posts.map(({ fields }, i) => {
              return (
                <Grid item key={i} md={4} sm={6} xs={12}>
                  <BlogItem key={i} {...fields} />
                </Grid>
              );
            })}
          </Grid>
        </Grid>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Blog;
