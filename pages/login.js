import React, { Component } from "react";
import Head from "next/head";
import Link from "next/link";
import Router from "next/router";

export default class login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "", loggedIn: false, message: "" };
  }

  onSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: this.state.username[0],
      password: this.state.password[0],
      type: "email",
    };
    const resp = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      body: JSON.stringify(data),
    });

    const user = await resp.json();
    console.log(user);
    if (
      user.message !== undefined ||
      user.message === "No user with that email address" ||
      user.message === "Password is incorrect"
    ) {
      this.setState({ message: user.message });
    } else if (user.jwt !== undefined) {
      this.setState({ loggedIn: true });
      const { pathname } = Router;
      if (pathname == "/login") {
        const url = "/" + user.id;
        Router.push(url);
      }
    }
    return;
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: [e.target.value],
    });
  };

  render() {
    return (
      <>
        {!this.state.loggedIn ? (
          <>
            <h1>Login</h1>
            <form onSubmit={this.onSubmit}>
              <input
                type="text"
                placeholder="username"
                value={this.state.username}
                name="username"
                onChange={this.onChange}
              ></input>
              <br />
              <input
                type="text"
                placeholder="password"
                value={this.state.password}
                onChange={this.onChange}
                name="password"
              ></input>
              <input type="submit" value="submit"></input>
            </form>
            <h2>{this.state.message}</h2>
          </>
        ) : (
          <h1>
            Redirecting...
            <br />
          </h1>
        )}
      </>
    );
  }
}
