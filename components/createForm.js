import React, { Component } from "react";
import Router from "next/router";
import { Button } from "@material-ui/core";
class CreateForm extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "", details: "", id: this.props.id };
  }
  onChange = (e) => {
    this.setState({
      [e.target.name]: [e.target.value],
    });
  };

  onSubmit = async (e) => {
    e.preventDefault();
    const data = {
      title: this.state.title[0],
      details: this.state.details[0],
    };
    const resp = await fetch(
      "http://localhost:5000/api/" + this.state.id + "/posts",
      {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(data),
      }
    );

    //console.log(resp.json());
    const { pathname } = Router;
    const url = "/" + this.state.id;
    Router.push(url);
  };
  render() {
    return (
      <>
        Create
        <form onSubmit={this.onSubmit}>
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
          <Button variant="contained" color="primary" onClick={this.onSubmit}>
            Create
          </Button>
        </form>
      </>
    );
  }
}

export default CreateForm;
