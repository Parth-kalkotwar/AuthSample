import React, { Component } from "react";
import Router from "next/router";
import { Button } from "@material-ui/core";

class UpdateForm extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "", details: "" };
    console.log("Update", props);
  }
  onChange = (e) => {
    this.setState({
      [e.target.name]: [e.target.value],
    });
  };

  onUpdate = async (e) => {
    e.preventDefault();
    const data = {
      title: this.state.title[0],
      details: this.state.details[0],
    };
    const resp = await fetch(
      "http://localhost:5000/api/posts/" + this.props.post.post_id,
      {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(data),
      }
    );

    //console.log(resp.json());
    const { pathname } = Router;
    const url = "/" + this.props.post.so_id;
    Router.push(url);
  };
  render() {
    return (
      <form onSubmit={this.onUpdate}>
        <input
          type="text"
          placeholder="title"
          value={this.state.title}
          name="title"
          onChange={this.onChange}
        ></input>
        <br />
        <input
          type="text"
          placeholder="details"
          value={this.state.details}
          onChange={this.onChange}
          name="details"
        ></input>
        <br />
        <Button variant="contained" color="primary" onClick={this.onUpdate}>
          Update
        </Button>
      </form>
    );
  }
}

export default UpdateForm;
