import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FolderIcon from "@material-ui/icons/Folder";

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

export default function Likes(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" className={classes.title}>
            Liked By
          </Typography>
          <div className={classes.demo}>
            <List>
              {props.likes.map((user) => {
                return (
                  <ListItem>
                    <ListItemText primary={user} />
                  </ListItem>
                );
              })}
            </List>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
