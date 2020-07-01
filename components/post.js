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
      const resp = fetch(
        "http://localhost:5000/api/" +
          this.props.post.post_id +
          "/" +
          this.props.id +
          "/likes",
        {
          method: "DELETE",
        }
      );
      this.setState({ likes: this.state.likes - 1, liked: false });
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
    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white transition duration-500 ease-out focused ">
        <div className="flex justify-between items-center py-2 px-1">
          <div className="text-gray-500">{this.props.post.updated_at}</div>
          <div className="flex justify-center items-center cursor-pointer">
            <Link href={"/" + this.props.id}>
              <Avatar aria-label="recipe">R</Avatar>
            </Link>
            <Link href={"/" + this.props.id + "/" + this.props.post.post_id}>
              <MoreVertIcon />
            </Link>
          </div>
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-gray-800 text-xl mb-2">
            {this.props.post.title}
          </div>
        </div>
        <div className="px-6 text-gray-500">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries,{this.props.post.details}
        </div>
        <div className="px-6 py-4"></div>
        <div className="flex justify-start items-center rounded-full m-4 px-3 py-4 text-sm font-semibold text-gray-700">
          <button aria-label="add to favorites" onClick={this.onClick}>
            <FavoriteIcon />
          </button>
          <div className="text-lg px-2">{this.state.likes}</div>
        </div>
      </div>
    );
  }
}

export default post;
