import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card } from "@material-ui/core";
import { CardActions } from "@material-ui/core";
import { CardContent } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Typography } from "@material-ui/core";

import Router from "next/router";
import UpdateForm from "../../components/UpdateForm";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function PostDetails({ posts, id }) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const onDelete = async (e) => {
    //console.log(posts);
    e.preventDefault();
    const resp = await fetch(
      "http://localhost:5000/api/posts/" + posts.post_id,
      {
        method: "DELETE",
      }
    );
    //console.log("DElete");
    const { pathname } = Router;
    const url = "/" + id;
    Router.push(url);
  };
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {posts.title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Last Update At - {posts.updated_at}
        </Typography>
        <Typography variant="body2" component="p">
          {posts.details}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" color="secondary" onClick={onDelete}>
          Delete
        </Button>
      </CardActions>
      <br />
      <UpdateForm post={posts} />
    </Card>
  );
}

PostDetails.getInitialProps = async (ctx) => {
  //console.log(ctx.query);
  const resp = await fetch("http://localhost:5000/api/posts/" + ctx.query.post);

  const posts = await resp.json();
  return { posts: posts, id: ctx.query.id };
};
