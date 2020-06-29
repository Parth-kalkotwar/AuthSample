import React, { Component } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
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

class post extends Component {
  constructor(props) {
    super(props);
    this.state = { likes: 0, liked: false };
  }

  async componentDidMount() {
    const resp = await fetch(
      "http://localhost:5000/api/" + this.props.post.post_id + "/likes",
      {
        method: "GET",
      }
    );
    const likes = await resp.json();
    //console.log(likes);
    for (let i = 0; i < likes.length; i++) {
      if (likes[i].id === this.props.id) {
        this.setState({ liked: true });
      }
    }
    this.setState({ likes: likes.length });
    //console.log(this.state.likes);
  }
  async componentDidUpdate() {
    const resp = await fetch(
      "http://localhost:5000/api/" + this.props.post.post_id + "/likes",
      {
        method: "GET",
      }
    );
    const likes = await resp.json();
    //console.log(likes);
    this.setState({ likes: likes.length });
  }
  onClick = () => {
    if (this.state.liked) {
      return;
    } else {
      const resp = fetch(
        "http://localhost:5000/api/" +
          this.props.post.post_id +
          "/" +
          this.props.id +
          "/likes",
        {
          method: "POST",
        }
      );
      this.setState({ likes: this.state.likes + 1, liked: true });
    }
  };

  render() {
    //const { classes } = this.props;
    return (
      <>
        <Card>
          <CardHeader
            avatar={<Avatar aria-label="recipe">R</Avatar>}
            action={
              <IconButton aria-label="settings">
                <Link
                  href={"/" + this.props.id + "/" + this.props.post.post_id}
                >
                  <MoreVertIcon />
                </Link>
              </IconButton>
            }
            title={this.props.post.title}
            subheader={this.props.post.updated_at}
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {this.props.post.details}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites" onClick={this.onClick}>
              <FavoriteIcon />
              <Typography>{this.state.likes}</Typography>
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
  }
}

export default post;
