import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { List, CardActionArea } from "@material-ui/core";
import { ListItem } from "@material-ui/core";
import { Divider } from "@material-ui/core";
import { ListItemText } from "@material-ui/core";
import { ListItemAvatar } from "@material-ui/core";
import { Button } from "@material-ui/core";
import Router from "next/router";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "36ch",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
  avatar: {
    backgroundColor: "red",
  },
}));

export default function Post(props) {
  const classes = useStyles();
  const addLike = async (post_id) => {
    // "/api/:post_id/like/:user_id"
    const resp = await fetch(
      "http://localhost:5000/api/" + post_id + "/like/" + props.id,
      {
        method: "PUT",
      }
    );
    //console.log(resp.json());
    const { pathname } = Router;
    const url = "/" + props.id + "/homepage";
    Router.push(url);
  };
  return (
    <List className={classes.root}>
      {props.posts.map((item) => {
        //console.log(item.post_id);
        return (
          <>
            <Card className={classes.root}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    R
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <Link href={"/" + props.id + "/" + item.post_id}>
                      <MoreVertIcon />
                    </Link>
                  </IconButton>
                }
                title={item.title}
                subheader={item.updated_at}
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  {item.details}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton
                  aria-label="add to favorites"
                  onClick={() => addLike(item.post_id)}
                >
                  <FavoriteIcon />
                  <Typography>{item.likes ? item.likes.length : 0}</Typography>
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
              </CardActions>
            </Card>
            <Divider />
            <br />
          </>
        );
      })}
    </List>
  );
}
