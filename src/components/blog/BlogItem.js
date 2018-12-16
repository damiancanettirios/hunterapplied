import React from "react";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import get from "lodash/get";
import moment from "moment";
import { Link } from "@reach/router";

const BlogItem = props => {
  console.log(props);
  const author = get(props, "author.fields.name");
  const avatarImg = get(props, "author.fields.image.fields.file.url");
  return (
    <React.Fragment>
      <Card style={{ minHeight: 300 }}>
        <CardActionArea
          component={Link}
          to={`/blog/${props.slug}`}
          state={{ post: { ...props } }}
          style={{ minHeight: 300 }}
        >
          <CardContent>
            <Grid
              container
              spacing={16}
              direction="column"
              justify="space-between"
            >
              <Grid item>
                <Typography variant="h6" style={{ marginBottom: 20 }}>
                  {props.title}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1" style={{ color: "grey" }}>
                  {props.description}
                </Typography>
              </Grid>
              <Grid item>
                <Grid
                  container
                  direction="row"
                  alignItems="center"
                  style={{ marginTop: 30 }}
                >
                  <Grid item>
                    <Avatar
                      src={avatarImg}
                      alt="avatar"
                      style={{ marginRight: 10 }}
                    />
                  </Grid>
                  <Grid item>
                    <Typography variant="body1" style={{ color: "grey" }}>
                      {author}
                    </Typography>
                    <Typography
                      variant="body1"
                      align="left"
                      style={{ color: "grey" }}
                    >
                      {moment(props.publishDate).calendar(null, {
                        sameDay: "[Today]",
                        lastDay: "[Yesterday]",
                        lastWeek: "[Last] dddd",
                        sameElse: "MMM Do YYYY"
                      })}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </CardActionArea>
      </Card>
    </React.Fragment>
  );
};

export default BlogItem;
