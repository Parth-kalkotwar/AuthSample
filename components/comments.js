import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FolderIcon from "@material-ui/icons/Folder";
import DeleteIcon from "@material-ui/icons/Delete";
import AddComment from "./addComment";
import Router from "next/router";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));

export default function Comments(props) {
  const classes = useStyles();
  const onDelete = async (item) => {
    // /api/:post_id/comment/:comment_id
    const resp = await fetch(
      "http://localhost:5000/api/" +
        item.post_id +
        "/comment/" +
        item.comment_id,
      {
        method: "DELETE",
      }
    );
    //console.log(resp.json());
    const { pathname } = Router;
    const url = "/" + props.id + "/" + item.post_id;
    Router.push(url);
  };
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" className={classes.title}>
            Comments
          </Typography>
          <div className={classes.demo}>
            <List>
              {props.comments.map((item) => {
                return (
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <FolderIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={item.comment_details} />
                    <br />
                    <ListItemText primary={"By :" + item.name} />
                    <ListItemSecondaryAction>
                      <IconButton
                        edge="end"
                        aria-label="delete"
                        onClick={() => onDelete(item)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                );
              })}
            </List>
          </div>
        </Grid>
      </Grid>
      <AddComment post_id={props.post_id} user_id={props.id} />
    </div>
  );
}
