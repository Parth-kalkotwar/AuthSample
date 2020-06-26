import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { List, CardActionArea } from "@material-ui/core";
import { ListItem } from "@material-ui/core";
import { Divider } from "@material-ui/core";
import { ListItemText } from "@material-ui/core";
import { ListItemAvatar } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Avatar } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { CardActions } from "@material-ui/core";
import Router from "next/router";
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
}));

export default function Post(props) {
  const classes = useStyles();
  //console.log(props.posts);
  return (
    <List className={classes.root}>
      {props.posts.map((item) => {
        //console.log(item.post_id);
        return (
          <>
            <CardActionArea>
              <Link href={"/" + props.id + "/" + item.post_id}>
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary={item.title}
                    secondary={
                      <React.Fragment>
                        <Typography
                          component="span"
                          variant="body2"
                          className={classes.inline}
                          color="textPrimary"
                        >
                          {item.details}
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </ListItem>
              </Link>
            </CardActionArea>

            <Divider variant="inset" component="li" />
          </>
        );
      })}
    </List>
  );
}
