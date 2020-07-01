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
    console.log(this.state);

    const resp = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      body: JSON.stringify(data),
    });

    const user = await resp.json();
    //console.log(user);
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
    console.log(this.state.password);
  };

  render() {
    return (
      <>
        <header
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')",
          }}
          className="absolute inset-0 h-screen w-screen bg-no-repeat bg-cover"
        >
          <div className="m-4 pb-4">
            <Link href="/">
              <img src="https://img.icons8.com/ios-filled/50/000000/left.png" />
            </Link>
          </div>
          <div className="text-4xl font-bold tracking-wider text-white px-6 md:text-6xl">
            <div>Welcome</div>
            <div>Back</div>
          </div>
          <div class="w-full">
            <form
              class="bg-inherit px-8 pt-6 pb-8 mb-4"
              onSubmit={this.onSubmit}
            >
              <div class="mb-4">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="username"
                >
                  Username
                </label>
                <input
                  class="shadow bg-inherit appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Username"
                  value={this.state.username}
                  name="username"
                  onChange={this.onChange}
                />
              </div>
              <div class="mb-6">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="******************"
                  value={this.state.password}
                  name="password"
                  onChange={this.onChange}
                />
                <p class="text-red-500 text-2xl italic">
                  {this.state.password.length > 0
                    ? this.state.message
                    : "Please choose a password."}
                </p>
              </div>
              <div class="flex items-center justify-center">
                <button
                  className="bg-transparent text-2xl hover:bg-green-500 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Sign In
                </button>
                <button
                  onSubmit={this.onSubmit}
                  className="block bg-white  flex justify-center items-center h-16 w-16 rounded-full my-4 mx-4 overflow-hidden focus:outline-none focus:border-white"
                >
                  <img src="https://img.icons8.com/ios-filled/50/000000/long-arrow-right.png" />
                </button>
              </div>
            </form>
          </div>
        </header>
      </>
    );
  }
}

{
  /*!this.state.loggedIn ? (
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
        )*/
}
