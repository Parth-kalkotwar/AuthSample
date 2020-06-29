import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card } from "@material-ui/core";
import { CardActions } from "@material-ui/core";
import { CardContent } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Typography } from "@material-ui/core";

import Router from "next/router";
import UpdateForm from "../../components/UpdateForm";
import Comments from "../../components/comments";
import Likes from "../../components/Likes";

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

export default function PostDetails({ posts, id, comments, likes }) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  //console.log(likes);
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
  console.log(likes);
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
        {posts.so_id === id ? (
          <>
            <CardActions>
              <Button variant="contained" color="secondary" onClick={onDelete}>
                Delete
              </Button>
            </CardActions>
            <br />
            <UpdateForm post={posts} />
          </>
        ) : (
          <></>
        )}
      </CardContent>

      <br />
      <Likes likes={likes} />
      <br />
      <Comments comments={comments} id={id} post_id={posts.post_id} />
    </Card>
  );
}

PostDetails.getInitialProps = async (ctx) => {
  //console.log(ctx.query);
  const resp = await fetch("http://localhost:5000/api/posts/" + ctx.query.post);
  const posts = await resp.json();
  const response = await fetch(
    "http://localhost:5000/api/" + ctx.query.post + "/comment"
  );
  const comments = await response.json();
  const likes_resp = await fetch(
    "http://localhost:5000/api/" + ctx.query.post + "/likes"
  );
  const likes = await likes_resp.json();
  return {
    posts: posts,
    id: ctx.query.id,
    comments: comments,
    likes: likes,
  };
};
