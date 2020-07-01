import React, { Component } from "react";
import Router from "next/router";
import { Button } from "@material-ui/core";
import AddCommentIcon from "@material-ui/icons/AddComment";

class AddComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: "",
      user_id: this.props.user_id,
      post_id: this.props.post_id,
    };
  }
  onChange = (e) => {
    this.setState({
      [e.target.name]: [e.target.value],
    });
  };

  onSubmit = async (e) => {
    e.preventDefault();
    const data = {
      user_id: this.state.user_id,
      details: this.state.details[0],
    };
    const resp = await fetch(
      "http://localhost:5000/api/" + this.state.post_id + "/comment",
      {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(data),
      }
    );

    //console.log(resp.json());
    const { pathname } = Router;
    const url = "/" + this.state.user_id + "/" + this.state.post_id;
    Router.push(url);
  };
  render() {
    return (
      <>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Comment..."
            value={this.state.details}
            name="details"
            onChange={this.onChange}
          ></input>
          <br />
          <Button variant="contained" color="primary" onClick={this.onSubmit}>
            <AddCommentIcon />
          </Button>
        </form>
      </>
    );
  }
}

export default AddComment;
