import React, { Component } from "react";
import Router from "next/router";
import { Button } from "@material-ui/core";

class UpdateForm extends Component {
  constructor(props) {
    super(props);
    const event = new Date(this.props.user.created_at);
    let created_at = event.toTimeString();
    created_at = created_at.split(" ");
    this.state = { name: props.user.name, created_at: created_at };
    console.log("Profile", props, this.state);
  }
  onChange = (e) => {
    this.setState({
      [e.target.name]: [e.target.value],
    });
  };

  onUpdate = async (e) => {
    e.preventDefault();
    const data = {
      name: this.state.name[0],
    };
    ///api/:id/name
    const resp = await fetch(
      "http://localhost:5000/api/" + this.props.user.id + "/name",
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
      <>
        <h1>Welcome {this.state.name}</h1>
        <br />
        <h3>Logged In At : {this.state.created_at[0]}</h3>
        <br />
        <form onSubmit={this.onUpdate}>
          <input
            type="text"
            placeholder="Name..."
            value={this.state.name}
            name="name"
            onChange={this.onChange}
          ></input>
          <br />
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={this.onUpdate}
          >
            Change Your Name
          </Button>
        </form>
      </>
    );
  }
}

export default UpdateForm;
