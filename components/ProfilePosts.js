import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Link from "next/link";

class ProfilePosts extends Component {
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
      this.setState({ likes: this.state.likes + 1, liked: true });
    }
  };
  colors = (id) => {
    if (id % 4 == 0) {
      return "bg-red-400";
    } else if (id % 4 == 1) {
      return "bg-yellow-400";
    } else if (id % 4 == 2) {
      return "bg-blue-400";
    } else if (id % 4 == 3) {
      return "bg-purple-400";
    }
    return "bg-red-800";
  };
  render() {
    return (
      <div
        className={`rounded overflow-hidden shadow-lg transition duration-500 ease-out ${this.colors(
          this.props.c
        )}`}
      >
        <div className="flex justify-between items-center py-2 px-1">
          <div className="text-white">
            {this.props.post.updated_at.split("T")[0]}
          </div>
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
          <div className="font-bold text-white text-xl mb-2">
            {this.props.post.title}
          </div>
        </div>
        <div className="px-6 text-white">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries,{this.props.post.details}
        </div>
        <div className="px-6 py-4"></div>
        <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-white mr-2">
          <IconButton aria-label="add to favorites" onClick={this.onClick}>
            <FavoriteIcon />
            <div className="font-bold text-white text-xl mb-2">
              {this.state.likes}
            </div>
            <div className="mx-4">
              <img src="https://img.icons8.com/metro/26/000000/topic.png" />
            </div>
          </IconButton>
        </span>
      </div>
    );
  }
}

export default ProfilePosts;
