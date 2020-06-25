import React, { Component } from "react";
import Head from "next/head";
import Router from "next/router";

class register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      username: "",
      password: "",
      loggedIn: false,
      message: "",
      email: "",
      created_at: "",
    };
  }

  onSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: this.state.name[0],
      email: this.state.username[0],
      password: this.state.password[0],
    };
    const resp = await fetch("http://localhost:3000/api/signup", {
      method: "POST",
      body: JSON.stringify(data),
    });
    //console.log(resp);
    const message = await resp.json();
    //console.log(message);
    if (message.message !== undefined) {
      if (message.message === "User Created Succesfully") {
        this.setState({
          loggedIn: true,
          message: message.message,
          email: message.email,
          created_at: message.created_at,
        });
        const { pathname } = Router;
        if (pathname == "/signup") {
          const url = "/" + message.id;
          Router.push(url);
        }
      } else {
        this.setState({ message: message.message });
      }
    }
    //console.log(this.state.loggedIn);
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: [e.target.value],
    });
    //console.log(this.state.username);
  };

  render() {
    return (
      <>
        {!this.state.loggedIn ? (
          <>
            <h1>Register</h1>
            <form onSubmit={this.onSubmit}>
              <input
                type="text"
                placeholder="name"
                value={this.state.name}
                name="name"
                onChange={this.onChange}
              ></input>
              <br />
              <input
                type="text"
                placeholder="username"
                value={this.state.username}
                name="username"
                onChange={this.onChange}
              ></input>
              <br />
              <input
                type="password"
                placeholder="password"
                value={this.state.password}
                onChange={this.onChange}
                name="password"
              ></input>
              <input type="submit" value="submit"></input>
            </form>
          </>
        ) : (
          <h2>
            {this.state.message}
            <br />
            <span>EMAIL: {this.state.email}</span>
            <br />
            <span>Time OF SIGNUP: {this.state.created_at}</span>
          </h2>
        )}
      </>
    );
  }
}

export default register;
